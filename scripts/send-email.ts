import nodemailer from 'nodemailer'
import * as fs from 'fs'
import * as path from 'path'

// Load .env.local manually (not using dotenv to keep deps minimal)
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local')
  if (!fs.existsSync(envPath)) return
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const [key, ...valueParts] = trimmed.split('=')
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  }
}

loadEnv()

const GMAIL_USER = process.env.GMAIL_USER!
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD!
const APPROVAL_WEBHOOK_URL = process.env.APPROVAL_WEBHOOK_URL || 'http://localhost:3000/api/content/approve'
const PAYAL_EMAIL = process.env.PAYAL_EMAIL || 'payalponkshe@gmail.com'

interface EmailPayload {
  title: string
  slug: string
  theme: string
  targetKeyword: string
  wordCount: string
  sourceCount: string
  openingParagraph: string
  linkedinPost: string
  sources: string[]
  cwaNotes: string
  approvalToken: string
  articleId: string
}

async function sendApprovalEmail(payload: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  const approveUrl = `${APPROVAL_WEBHOOK_URL}?token=${payload.approvalToken}&action=approve&slug=${payload.slug}`
  const rejectUrl = `${APPROVAL_WEBHOOK_URL}?token=${payload.approvalToken}&action=reject&slug=${payload.slug}`

  const sourcesHtml = payload.sources
    .map((s, i) => `${i + 1}. ${s}`)
    .join('<br>')

  const html = `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: -apple-system, Arial, sans-serif; color: #24356e; max-width: 640px; margin: 0 auto; padding: 24px; background: #F5F1E8; }
  .card { background: white; border: 1px solid rgba(36,53,110,0.2); padding: 32px; margin-bottom: 16px; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #5A6A8A; margin-bottom: 4px; }
  .value { font-size: 15px; color: #24356e; margin-bottom: 16px; }
  .excerpt { font-size: 14px; color: #24356e; line-height: 1.7; border-left: 4px solid #2dfff8; padding-left: 16px; margin: 16px 0; }
  .btn-approve { display: inline-block; background: #24356e; color: white !important; padding: 14px 28px; text-decoration: none; font-weight: 600; font-size: 15px; margin-right: 12px; }
  .btn-reject { display: inline-block; background: white; color: #24356e !important; padding: 14px 28px; text-decoration: none; font-weight: 600; font-size: 15px; border: 1px solid rgba(36,53,110,0.3); }
  .linkedin { background: #f8f8f8; padding: 20px; font-size: 14px; line-height: 1.7; color: #24356e; border-left: 3px solid rgba(36,53,110,0.2); white-space: pre-wrap; }
  .sources { font-size: 12px; color: #5A6A8A; line-height: 1.8; }
  .notes { font-size: 13px; color: #5A6A8A; line-height: 1.7; background: #f8f8f8; padding: 16px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #5A6A8A; border-bottom: 1px solid rgba(36,53,110,0.15); padding-bottom: 8px; margin-top: 0; }
</style>
</head>
<body>

<div class="card">
  <p style="margin-top:0;">Hi Payal,</p>
  <p>Today's article is ready for your review.</p>

  <div class="label">Title</div>
  <div class="value"><strong>${payload.title}</strong></div>

  <div class="label">Theme</div>
  <div class="value">${payload.theme}</div>

  <div class="label">Target keyword</div>
  <div class="value">${payload.targetKeyword}</div>

  <div class="label">Word count / Sources</div>
  <div class="value">${payload.wordCount} words &nbsp;·&nbsp; ${payload.sourceCount} verified sources</div>

  <div class="label">Opening paragraph</div>
  <div class="excerpt">${payload.openingParagraph}</div>
</div>

<div class="card" style="text-align:center; padding: 32px;">
  <a href="${approveUrl}" class="btn-approve">APPROVE &amp; PUBLISH →</a>
  <a href="${rejectUrl}" class="btn-reject">REJECT &amp; REVISE</a>
</div>

<div class="card">
  <h2>LinkedIn post — copy ready</h2>
  <div class="linkedin">${payload.linkedinPost}</div>
  <p style="font-size:12px; color:#5A6A8A; margin-bottom:0;">Post the link in the first comment.</p>
</div>

<div class="card">
  <h2>Verified sources</h2>
  <div class="sources">${sourcesHtml}</div>
</div>

<div class="card">
  <h2>Agent notes</h2>
  <div class="notes">${payload.cwaNotes}</div>
</div>

<p style="font-size:12px; color:#5A6A8A; text-align:center;">Payal Ponkshe content pipeline · Article ID: ${payload.articleId}</p>
</body>
</html>`

  const info = await transporter.sendMail({
    from: `"PP Content Pipeline" <${GMAIL_USER}>`,
    to: PAYAL_EMAIL,
    subject: `[Content Ready] ${payload.title} — approve to publish`,
    html,
  })

  console.log('Email sent:', info.messageId)
  return info
}

// CLI usage: tsx scripts/send-email.ts <path-to-json-file>
const payloadArg = process.argv[2]
if (payloadArg) {
  const raw = payloadArg.startsWith('{')
    ? payloadArg
    : fs.readFileSync(path.resolve(payloadArg), 'utf-8')
  const payload: EmailPayload = JSON.parse(raw)
  sendApprovalEmail(payload)
    .then(() => process.exit(0))
    .catch(err => { console.error(err); process.exit(1) })
} else {
  console.error('Usage: tsx scripts/send-email.ts <path-to-payload.json>')
  process.exit(1)
}

export { sendApprovalEmail, EmailPayload }
