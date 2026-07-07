import { google } from 'googleapis';

const SHEET_ID = '1iNPzPaQetRZh9QrUDsaYSW5NYrX9GcR3HbeXIpWAxX4';
const TODAY = '2026-07-07';

async function main() {
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Read Calendar tab
  const calRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'Calendar!A:Z',
  });

  const calRows = calRes.data.values || [];
  console.log('=== CALENDAR TAB ===');
  if (calRows.length === 0) {
    console.log('Calendar tab is empty or does not exist');
    return;
  }
  console.log('Headers:', JSON.stringify(calRows[0]));
  console.log('Total rows:', calRows.length);

  const headers = calRows[0] as string[];
  const dateIdx = headers.indexOf('publish_date');
  const statusIdx = headers.indexOf('status');

  console.log('date col idx:', dateIdx, 'status col idx:', statusIdx);

  const todayRow = calRows.find((row, i) => i > 0 && row[dateIdx] === TODAY && row[statusIdx] === 'scheduled');

  if (todayRow) {
    console.log('TODAY ROW FOUND:', JSON.stringify(todayRow));
    const rowObj: Record<string, string> = {};
    headers.forEach((h, i) => { rowObj[h] = (todayRow[i] as string) || ''; });
    console.log('TODAY DATA:', JSON.stringify(rowObj, null, 2));
  } else {
    console.log('No scheduled row for', TODAY, '— showing all rows:');
    calRows.slice(0, 15).forEach((r, i) => {
      console.log(`Row ${i}:`, JSON.stringify(r));
    });
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
