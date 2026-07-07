import { google } from 'googleapis';

const SHEET_ID = '1iNPzPaQetRZh9QrUDsaYSW5NYrX9GcR3HbeXIpWAxX4';
const ARTICLE_ID = 'f4e82ca1-3b7d-4f9e-8c5a-2d1e6b0af3c7';
const CREATED_AT = '2026-07-07T08:05:00Z';

async function main() {
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const logRow = [
    `log-email-${ARTICLE_ID}`,
    CREATED_AT,
    'CWA',
    ARTICLE_ID,
    'email_send_failed',
    'error',
    'SMTP ports 587 and 465 blocked by remote execution environment network policy. Email payload written to /tmp/email-payload.json. Manual send required.',
  ];

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Agent_Log!A:G',
    valueInputOption: 'RAW',
    requestBody: { values: [logRow] },
  });
  console.log('Agent_Log email failure logged:', res.data.updates?.updatedRange);
}

main().catch(e => { console.error(e.message); process.exit(1); });
