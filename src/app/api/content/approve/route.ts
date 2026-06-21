import { NextRequest, NextResponse } from 'next/server'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO || 'HAV-25/PPO_Portfolio'
const [OWNER, REPO] = GITHUB_REPO.split('/')

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

  // Get current file SHA
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
    .card { background: white; border: 1px solid rgba(36,53,110,0.25);
            border-left: 6px solid ${colour}; padding: 40px 48px;
            max-width: 480px; }
    h1 { color: #24356e; font-size: 24px; margin: 0 0 12px; }
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

  // Fetch meta.json from the article branch to validate token
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
    return htmlPage(
      'Published',
      `"${meta.title}" has been merged to main. The article will be live once the site deploys.`,
      '#2dfff8'
    )
  }

  if (action === 'reject') {
    await updateMetaStatus(slug, 'rejected')
    return htmlPage(
      'Rejected',
      `"${meta.title}" has been marked as rejected. Reply to the approval email with your revision notes and the agent will rewrite it.`,
      '#5A6A8A'
    )
  }

  return htmlPage('Unknown error', 'Something went wrong.', '#D94F4F')
}
