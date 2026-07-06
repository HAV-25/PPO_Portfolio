import * as fs from 'fs'
import * as path from 'path'

const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    process.env[t.slice(0, eq).trim()] = t.slice(eq + 1).trim()
  }
}

import { getTodaysTopic } from '../src/lib/content/sheets'
import { google } from 'googleapis'

const TODAY = '2026-07-06'

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })
  const sheetId = process.env.GOOGLE_SHEETS_ID!

  // Read Calendar tab
  const calRes = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Calendar!A1:L500',
  })
  const allRows = (calRes.data.values as string[][]) || []
  console.log('Calendar header:', JSON.stringify(allRows[0]))
  console.log('Calendar row count:', allRows.length - 1)

  // Find today or next scheduled
  const dataRows = allRows.slice(1)
  let found = dataRows.find(r => r[1] === TODAY && r[8] === 'scheduled')
  if (!found) {
    found = dataRows
      .filter(r => r[8] === 'scheduled' && r[1] >= TODAY)
      .sort((a, b) => a[1].localeCompare(b[1]))[0]
  }

  if (!found) {
    console.log('RESULT: NO_TOPIC_FOUND')
    return
  }

  console.log('RESULT_ROW:', JSON.stringify(found))

  const topicNum = found[4]
  // Read Topic_Bank tab
  const tbRes = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Topic_Bank!A1:H200',
  })
  const tbRows = (tbRes.data.values as string[][]) || []
  console.log('Topic_Bank header:', JSON.stringify(tbRows[0]))

  const topicRow = tbRows.slice(1).find(r => r[0] === topicNum)
  if (topicRow) {
    console.log('TOPIC_BANK_ROW:', JSON.stringify(topicRow))
  } else {
    console.log('TOPIC_BANK: no matching row for topic_number=' + topicNum)
  }
}

main().catch(e => { console.error(e.message); process.exit(1) })
