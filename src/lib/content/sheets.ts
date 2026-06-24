import { google } from 'googleapis';

const getSheetId = () => process.env.GOOGLE_SHEETS_ID!;

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

function getClient() {
  return google.sheets({ version: 'v4', auth: getAuth() });
}

async function readRows(tab: string, range: string): Promise<string[][]> {
  const client = getClient();
  const res = await client.spreadsheets.values.get({
    spreadsheetId: getSheetId(),
    range: `${tab}!${range}`,
  });
  return (res.data.values as string[][]) || [];
}

async function batchUpdate(tab: string, updates: { range: string; values: string[][] }[]) {
  const client = getClient();
  await client.spreadsheets.values.batchUpdate({
    spreadsheetId: getSheetId(),
    requestBody: {
      valueInputOption: 'RAW',
      data: updates.map(u => ({
        range: `${tab}!${u.range}`,
        values: u.values,
      })),
    },
  });
}

export async function appendRows(tab: string, values: string[][]) {
  const client = getClient();
  await client.spreadsheets.values.append({
    spreadsheetId: getSheetId(),
    range: `${tab}!A1`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });
}

// ── Column maps ────────────────────────────────────────────────────────────────

// Calendar: A=week_number B=publish_date C=weekday D=theme E=topic_number
//           F=topic_title G=cluster H=format I=status J=article_id K=preview_url L=production_url
const CAL_COLS = {
  week_number: 0, publish_date: 1, weekday: 2, theme: 3, topic_number: 4,
  topic_title: 5, cluster: 6, format: 7, status: 8,
  article_id: 9, preview_url: 10, production_url: 11,
};

// Articles: A=id B=created_at C=publish_date D=weekday_theme E=topic_number
//           F=article_title G=article_slug H=status I=rejection_reason J=revision_count
//           K=preview_url L=production_url M=approval_token N=cwa_notes
//           O=cda_review_notes P=linkedin_post Q=qa_status R=eqa_notes S=draft_branch
const ART_COLS = {
  id: 0, created_at: 1, publish_date: 2, weekday_theme: 3, topic_number: 4,
  article_title: 5, article_slug: 6, status: 7, rejection_reason: 8, revision_count: 9,
  preview_url: 10, production_url: 11, approval_token: 12,
  cwa_notes: 13, cda_review_notes: 14, linkedin_post: 15,
  qa_status: 16, eqa_notes: 17, draft_branch: 18,
};

const colLetter = (index: number) => String.fromCharCode(65 + index);

// ── Topic / Calendar ───────────────────────────────────────────────────────────

export interface ScheduledTopic {
  week_number: string;
  publish_date: string;
  weekday: string;
  theme: string;
  topic_number: string;
  topic_title: string;
  cluster: string;
  format: string;
}

export async function getTodaysTopic(): Promise<ScheduledTopic | null> {
  const today = new Date().toISOString().split('T')[0];
  const rows = await readRows('Calendar', 'A2:L500');

  let row = rows.find(r => r[CAL_COLS.publish_date] === today && r[CAL_COLS.status] === 'scheduled');
  if (!row) {
    row = rows
      .filter(r => r[CAL_COLS.status] === 'scheduled' && r[CAL_COLS.publish_date] >= today)
      .sort((a, b) => a[CAL_COLS.publish_date].localeCompare(b[CAL_COLS.publish_date]))[0];
  }
  if (!row) return null;

  return {
    week_number: row[CAL_COLS.week_number],
    publish_date: row[CAL_COLS.publish_date],
    weekday: row[CAL_COLS.weekday],
    theme: row[CAL_COLS.theme],
    topic_number: row[CAL_COLS.topic_number],
    topic_title: row[CAL_COLS.topic_title],
    cluster: row[CAL_COLS.cluster],
    format: row[CAL_COLS.format],
  };
}

export async function updateCalendarRow(
  publish_date: string,
  updates: Partial<{ status: string; article_id: string; preview_url: string; production_url: string }>
) {
  const rows = await readRows('Calendar', 'A2:L500');
  const idx = rows.findIndex(r => r[CAL_COLS.publish_date] === publish_date);
  if (idx === -1) return;
  const sheetRow = idx + 2;

  const data = updates as Record<string, string>;
  const cols = Object.entries(CAL_COLS) as [string, number][];
  const updateData = cols
    .filter(([k]) => k in data)
    .map(([k, c]) => ({
      range: `${colLetter(c)}${sheetRow}`,
      values: [[data[k] ?? '']],
    }));

  if (updateData.length) await batchUpdate('Calendar', updateData);
}

// ── Articles ──────────────────────────────────────────────────────────────────

export interface ArticleRow {
  id: string;
  created_at: string;
  publish_date: string;
  weekday_theme: string;
  topic_number: string;
  article_title: string;
  article_slug: string;
  status: string;
  rejection_reason: string;
  revision_count: string;
  preview_url: string;
  production_url: string;
  approval_token: string;
  cwa_notes: string;
  cda_review_notes: string;
  linkedin_post: string;
  qa_status: string;
  eqa_notes: string;
  draft_branch: string;
}

function rowToArticle(row: string[]): ArticleRow {
  return {
    id: row[ART_COLS.id] ?? '',
    created_at: row[ART_COLS.created_at] ?? '',
    publish_date: row[ART_COLS.publish_date] ?? '',
    weekday_theme: row[ART_COLS.weekday_theme] ?? '',
    topic_number: row[ART_COLS.topic_number] ?? '',
    article_title: row[ART_COLS.article_title] ?? '',
    article_slug: row[ART_COLS.article_slug] ?? '',
    status: row[ART_COLS.status] ?? '',
    rejection_reason: row[ART_COLS.rejection_reason] ?? '',
    revision_count: row[ART_COLS.revision_count] ?? '0',
    preview_url: row[ART_COLS.preview_url] ?? '',
    production_url: row[ART_COLS.production_url] ?? '',
    approval_token: row[ART_COLS.approval_token] ?? '',
    cwa_notes: row[ART_COLS.cwa_notes] ?? '',
    cda_review_notes: row[ART_COLS.cda_review_notes] ?? '',
    linkedin_post: row[ART_COLS.linkedin_post] ?? '',
    qa_status: row[ART_COLS.qa_status] ?? '',
    eqa_notes: row[ART_COLS.eqa_notes] ?? '',
    draft_branch: row[ART_COLS.draft_branch] ?? '',
  };
}

export async function createArticleRow(data: {
  id: string;
  publish_date: string;
  weekday_theme: string;
  topic_number: string;
  approval_token: string;
  status?: string;
  qa_status?: string;
  draft_branch?: string;
}) {
  const row: string[] = new Array(19).fill('');
  row[ART_COLS.id] = data.id;
  row[ART_COLS.created_at] = new Date().toISOString();
  row[ART_COLS.publish_date] = data.publish_date;
  row[ART_COLS.weekday_theme] = data.weekday_theme;
  row[ART_COLS.topic_number] = data.topic_number;
  row[ART_COLS.status] = data.status ?? 'draft';
  row[ART_COLS.revision_count] = '0';
  row[ART_COLS.approval_token] = data.approval_token;
  row[ART_COLS.qa_status] = data.qa_status ?? '';
  row[ART_COLS.draft_branch] = data.draft_branch ?? '';
  await appendRows('Articles', [row]);
}

export async function updateArticleRow(
  id: string,
  updates: Partial<Omit<ArticleRow, 'id' | 'created_at'>>
) {
  const rows = await readRows('Articles', 'A2:S500');
  const idx = rows.findIndex(r => r[ART_COLS.id] === id);
  if (idx === -1) throw new Error(`Article not found: ${id}`);
  const sheetRow = idx + 2;

  const data = updates as Record<string, string>;
  const cols = Object.entries(ART_COLS) as [string, number][];
  const updateData = cols
    .filter(([k]) => k in data && k !== 'id' && k !== 'created_at')
    .map(([k, c]) => ({
      range: `${colLetter(c)}${sheetRow}`,
      values: [[data[k] ?? '']],
    }));

  if (updateData.length) await batchUpdate('Articles', updateData);
}

export async function getArticleById(id: string): Promise<ArticleRow | null> {
  const rows = await readRows('Articles', 'A2:S500');
  const row = rows.find(r => r[ART_COLS.id] === id);
  return row ? rowToArticle(row) : null;
}

export async function getArticleByToken(token: string): Promise<ArticleRow | null> {
  const rows = await readRows('Articles', 'A2:S500');
  const row = rows.find(r => r[ART_COLS.approval_token] === token);
  return row ? rowToArticle(row) : null;
}

export async function getRecentArticles(limit = 10): Promise<ArticleRow[]> {
  const rows = await readRows('Articles', 'A2:S500');
  return rows
    .map(rowToArticle)
    .filter(a => a.id)
    .slice(-limit)
    .reverse();
}

export async function getDeployedArticles(): Promise<ArticleRow[]> {
  const rows = await readRows('Articles', 'A2:S500');
  return rows
    .map(rowToArticle)
    .filter(a => a.status === 'deployed' && a.article_slug);
}

export async function getArticlePendingQA(): Promise<ArticleRow | null> {
  const rows = await readRows('Articles', 'A2:S500');
  const row = rows.find(r => r[ART_COLS.qa_status] === 'draft_pending_qa');
  return row ? rowToArticle(row) : null;
}

// ── Agent log ─────────────────────────────────────────────────────────────────

export async function logAgent(data: {
  agent: 'CWA' | 'CWA-v2' | 'EQA' | 'CDA' | 'APPROVAL';
  article_id: string;
  action: string;
  result?: string;
  error?: string;
}) {
  await appendRows('Agent_Log', [[
    new Date().toISOString(),
    data.agent,
    data.article_id,
    data.action,
    data.result ?? '',
    data.error ?? '',
  ]]);
}

// ── Admin dashboard reads ─────────────────────────────────────────────────────

export async function getWeeklyStatus() {
  const rows = await readRows('Calendar', 'A2:L500');
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const ws = weekStart.toISOString().split('T')[0];
  const we = weekEnd.toISOString().split('T')[0];

  return rows
    .filter(r => r[CAL_COLS.publish_date] >= ws && r[CAL_COLS.publish_date] <= we)
    .map(r => ({
      publish_date: r[CAL_COLS.publish_date],
      weekday: r[CAL_COLS.weekday],
      topic_title: r[CAL_COLS.topic_title],
      status: r[CAL_COLS.status],
      article_id: r[CAL_COLS.article_id],
    }));
}
