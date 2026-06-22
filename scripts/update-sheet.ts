import * as fs from 'fs'
import * as path from 'path'
import { appendRows, updateCalendarRow, logAgent } from '../src/lib/content/sheets'

// Load .env.local before any Sheets API calls
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

const [,, operation, payloadArg] = process.argv

if (!operation || !payloadArg) {
  console.error('Usage: tsx scripts/update-sheet.ts <operation> <json-or-filepath>')
  console.error('Operations: append-article | update-calendar | log-agent')
  process.exit(1)
}

let payload: Record<string, string>
try {
  payload = fs.existsSync(payloadArg)
    ? JSON.parse(fs.readFileSync(payloadArg, 'utf-8'))
    : JSON.parse(payloadArg)
} catch {
  console.error('Invalid payload — must be a JSON string or path to a JSON file')
  process.exit(1)
}

async function run() {
  switch (operation) {
    case 'append-article': {
      // Columns match ART_COLS in sheets.ts:
      // id | created_at | publish_date | weekday_theme | topic_number | article_title
      // article_slug | status | rejection_reason | revision_count | preview_url | production_url
      // approval_token | cwa_notes | cda_review_notes | linkedin_post
      const row = [
        payload.id,
        new Date().toISOString(),
        payload.publish_date,
        payload.weekday_theme,
        payload.topic_number,
        payload.article_title,
        payload.article_slug,
        'awaiting_approval',
        '',
        '0',
        '',
        '',
        payload.approval_token,
        payload.cwa_notes ?? '',
        '',
        payload.linkedin_post ?? '',
      ]
      await appendRows('Articles', [row])
      console.log('Articles tab: row appended')
      break
    }
    case 'update-calendar': {
      await updateCalendarRow(payload.publish_date, {
        status: payload.status,
        ...(payload.article_id ? { article_id: payload.article_id } : {}),
      })
      console.log('Calendar tab: row updated')
      break
    }
    case 'log-agent': {
      await logAgent({
        agent: payload.agent as 'CWA' | 'CDA' | 'APPROVAL',
        article_id: payload.article_id,
        action: payload.action,
        result: payload.result ?? 'success',
        error: payload.error ?? '',
      })
      console.log('Agent_Log: row appended')
      break
    }
    default:
      console.error(`Unknown operation: ${operation}`)
      process.exit(1)
  }
}

run().then(() => process.exit(0)).catch(err => {
  console.error('Sheet update failed:', err.message)
  process.exit(1)
})
