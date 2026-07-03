import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO || 'HAV-25/PPO_Portfolio'
const [OWNER, REPO] = GITHUB_REPO.split('/')
const CDA_TRIGGER_URL = process.env.CDA_TRIGGER_URL

// ─── GitHub helpers ────────────────────────────────────────────────────────────

async function githubFetch(path: string, options: RequestInit = {}) {
  return fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    },
  })
}

async function getMetaFromBranch(slug: string): Promise<Record<string, unknown> | null> {
  const branch = `content/${slug}`
  const path = `content/insights/${slug}.meta.json`
  const res = await githubFetch(
    `/repos/${OWNER}/${REPO}/contents/${path}?ref=${branch}`
  )
  if (!res.ok) return null
  const data = await res.json()
  const content = Buffer.from(data.content, 'base64').toString('utf-8')
  return JSON.parse(content)
}

async function mergeBranch(slug: string, title: string) {
  const res = await githubFetch(`/repos/${OWNER}/${REPO}/merges`, {
    method: 'POST',
    body: JSON.stringify({
      base: 'main',
      head: `content/${slug}`,
      commit_message: `publish: ${title}`,
    }),
  })
  return res.ok || res.status === 204
}

async function updateMetaStatus(slug: string, status: string) {
  const branch = `content/${slug}`
  const path = `content/insights/${slug}.meta.json`

  const getRes = await githubFetch(
    `/repos/${OWNER}/${REPO}/contents/${path}?ref=${branch}`
  )
  if (!getRes.ok) return false
  const current = await getRes.json()
  const meta = JSON.parse(Buffer.from(current.content, 'base64').toString('utf-8'))
  meta.status = status

  const updated = Buffer.from(JSON.stringify(meta, null, 2)).toString('base64')
  const putRes = await githubFetch(`/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: `content(meta): mark ${slug} as ${status}`,
      content: updated,
      sha: current.sha,
      branch,
    }),
  })
  return putRes.ok
}

// ─── Google Sheets helper ──────────────────────────────────────────────────────

async function updateSheetStatus(articleId: string, status: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const sheetId = process.env.GOOGLE_SHEETS_ID

    // Find the row for this article ID (column A)
    const findRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Articles!A2:A500',
    })
    const rows = findRes.data.values ?? []
    const rowIndex = rows.findIndex((r) => r[0] === articleId)
    if (rowIndex === -1) return false

    const rowNum = rowIndex + 2 // 1-indexed + header row
    // Column H = status (index 7)
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `Articles!H${rowNum}`,
      valueInputOption: 'RAW',
      requestBody: { values: [[status]] },
    })
    return true
  } catch {
    return false
  }
}

// ─── CDA trigger ──────────────────────────────────────────────────────────────

async function triggerCDA(payload: { slug: string; title: string; approvalToken: string }) {
  if (!CDA_TRIGGER_URL) return false
  try {
    const res = await fetch(CDA_TRIGGER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}

// ─── HTML response page ────────────────────────────────────────────────────────

function htmlPage(title: string, message: string, colour: string) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, sans-serif; background: #F5F1E8;
           display: flex; align-items: center; justify-content: center;
           min-height: 100vh; margin: 0; }
    .card { background: white; border: 1px solid rgba(36,38,43,0.25);
            border-left: 6px solid ${colour}; padding: 40px 48px;
            max-width: 480px; }
    h1 { color: #24262B; font-size: 24px; margin: 0 0 12px; }
    p { color: #5A6A8A; line-height: 1.6; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const action = searchParams.get('action')
  const slug = searchParams.get('slug')

  if (!token || !action || !slug) {
    return htmlPage('Missing parameters', 'The approval link is incomplete.', '#D94F4F')
  }

  if (!['approve', 'reject'].includes(action)) {
    return htmlPage('Invalid action', 'Action must be approve or reject.', '#D94F4F')
  }

  if (!GITHUB_TOKEN) {
    return htmlPage('Configuration error', 'GitHub token not configured.', '#D94F4F')
  }

  const meta = await getMetaFromBranch(slug)
  if (!meta) {
    return htmlPage(
      'Article not found',
      `No draft found for slug: ${slug}. It may already be published or the branch was deleted.`,
      '#D94F4F'
    )
  }

  if (meta.approvalToken !== token) {
    return htmlPage('Invalid token', 'This approval link is not valid.', '#D94F4F')
  }

  if (meta.status !== 'awaiting_approval') {
    return htmlPage(
      'Already processed',
      `This article has already been ${meta.status}.`,
      '#5A6A8A'
    )
  }

  if (action === 'approve') {
    const merged = await mergeBranch(slug, meta.title as string)
    if (!merged) {
      return htmlPage(
        'Merge failed',
        'The branch could not be merged. Check GitHub for conflicts.',
        '#D94F4F'
      )
    }

    // Update Sheet status — fire and forget, don't block the response
    if (meta.id) {
      updateSheetStatus(meta.id as string, 'approved_pending_cda').catch(() => {})
    }

    // Trigger CDA agent
    const cdaFired = await triggerCDA({
      slug,
      title: meta.title as string,
      approvalToken: token,
    })

    const cdaMessage = cdaFired
      ? 'Formatting and generating hero image — the article will be live on the site in approximately 5 minutes.'
      : 'Merged to main. The CDA agent was not triggered (CDA_TRIGGER_URL not configured). Deploy manually via Netlify.'

    return htmlPage('Approved', `"${meta.title}" has been approved. ${cdaMessage}`, '#1BAFBF')
  }

  if (action === 'reject') {
    await updateMetaStatus(slug, 'rejected')
    if (meta.id) {
      updateSheetStatus(meta.id as string, 'rejected').catch(() => {})
    }
    return htmlPage(
      'Rejected',
      `"${meta.title}" has been marked as rejected. Reply to the approval email with your revision notes and the agent will rewrite it.`,
      '#5A6A8A'
    )
  }

  return htmlPage('Unknown error', 'Something went wrong.', '#D94F4F')
}
