import * as fs from 'fs'
import * as path from 'path'
import {
  appendRows,
  updateCalendarRow,
  updateArticleRow,
  getArticlePendingQA,
  logAgent,
} from '../src/lib/content/sheets'

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

if (!operation) {
  console.error('Usage: tsx scripts/update-sheet.ts <operation> [json-or-filepath]')
  console.error('Operations: append-article | update-calendar | log-agent | set-qa-status | get-pending-qa | update-article-status')
  process.exit(1)
}

// get-pending-qa needs no payload
if (operation !== 'get-pending-qa' && !payloadArg) {
  console.error(`Operation "${operation}" requires a payload argument`)
  process.exit(1)
}

let payload: Record<string, string> = {}
if (payloadArg) {
  try {
    payload = fs.existsSync(payloadArg)
      ? JSON.parse(fs.readFileSync(payloadArg, 'utf-8'))
      : JSON.parse(payloadArg)
  } catch {
    console.error('Invalid payload — must be a JSON string or path to a JSON file')
    process.exit(1)
  }
}

async function run() {
  switch (operation) {

    case 'append-article': {
      // Columns A–S (19 cols) matching ART_COLS in sheets.ts
      // A=id B=created_at C=publish_date D=weekday_theme E=topic_number F=article_title
      // G=article_slug H=status I=rejection_reason J=revision_count K=preview_url
      // L=production_url M=approval_token N=cwa_notes O=cda_review_notes P=linkedin_post
      // Q=qa_status R=eqa_notes S=draft_branch
      const row = [
        payload.id,
        new Date().toISOString(),
        payload.publish_date,
        payload.weekday_theme,
        payload.topic_number,
        payload.article_title ?? '',
        payload.article_slug ?? '',
        payload.status ?? 'draft_submitted',   // CWA-v2 passes 'draft_submitted'
        '',                                     // rejection_reason
        '0',                                    // revision_count
        '',                                     // preview_url
        '',                                     // production_url
        payload.approval_token ?? '',
        payload.cwa_notes ?? '',
        '',                                     // cda_review_notes
        payload.linkedin_post ?? '',
        payload.qa_status ?? 'draft_pending_qa',
        '',                                     // eqa_notes
        payload.draft_branch ?? '',
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
        agent: payload.agent as 'CWA' | 'CWA-v2' | 'EQA' | 'CDA' | 'APPROVAL',
        article_id: payload.article_id,
        action: payload.action,
        result: payload.result ?? 'success',
        error: payload.error ?? '',
      })
      console.log('Agent_Log: row appended')
      break
    }

    case 'set-qa-status': {
      // Update qa_status, eqa_notes, and revision_count on an existing article row
      // Required: article_id, qa_status
      // Optional: eqa_notes, revision_count, status (top-level status column)
      if (!payload.article_id || !payload.qa_status) {
        console.error('set-qa-status requires article_id and qa_status')
        process.exit(1)
      }
      const updates: Record<string, string> = {
        qa_status: payload.qa_status,
      }
      if (payload.eqa_notes !== undefined) updates.eqa_notes = payload.eqa_notes
      if (payload.revision_count !== undefined) updates.revision_count = payload.revision_count
      if (payload.status !== undefined) updates.status = payload.status
      if (payload.approval_token !== undefined) updates.approval_token = payload.approval_token

      await updateArticleRow(payload.article_id, updates)
      console.log(`set-qa-status: article ${payload.article_id} → qa_status=${payload.qa_status}`)
      break
    }

    case 'get-pending-qa': {
      // Returns JSON of the first article with qa_status=draft_pending_qa
      // or {"found": false} if none. EQA reads this to decide whether to run.
      const article = await getArticlePendingQA()
      if (!article) {
        console.log(JSON.stringify({ found: false }))
      } else {
        console.log(JSON.stringify({ found: true, article }))
      }
      break
    }

    case 'update-article-status': {
      // Update the top-level status column (H) on an existing article row.
      // Used by EQA on QA pass to flip status from 'draft_submitted' → 'awaiting_approval'.
      if (!payload.article_id || !payload.status) {
        console.error('update-article-status requires article_id and status')
        process.exit(1)
      }
      await updateArticleRow(payload.article_id, { status: payload.status })
      console.log(`update-article-status: article ${payload.article_id} → status=${payload.status}`)
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
