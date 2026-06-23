/**
 * CLI: npx tsx scripts/format-pipeline-mdx.ts --slug <slug> --image-path <path>
 * Reads content/insights/<slug>.mdx, injects heroImage into frontmatter,
 * sets status to "approved", writes back in place.
 * Stdout: JSON { success: true, slug, heroImage }
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const args = process.argv.slice(2)
function getArg(flag: string): string {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] ?? '' : ''
}

const slug = getArg('--slug')
const imagePath = getArg('--image-path')

if (!slug || !imagePath) {
  console.error('Usage: npx tsx scripts/format-pipeline-mdx.ts --slug <slug> --image-path <path>')
  process.exit(1)
}

const mdxPath = path.join(process.cwd(), 'content', 'insights', `${slug}.mdx`)

if (!fs.existsSync(mdxPath)) {
  console.error(`File not found: ${mdxPath}`)
  process.exit(1)
}

const raw = fs.readFileSync(mdxPath, 'utf-8')
const parsed = matter(raw)

// Inject heroImage and mark as approved
parsed.data.heroImage = imagePath
parsed.data.status = 'approved'

// Rebuild the file: frontmatter + body
const updated = matter.stringify(parsed.content, parsed.data)
fs.writeFileSync(mdxPath, updated, 'utf-8')

console.log(JSON.stringify({ success: true, slug, heroImage: imagePath }))
