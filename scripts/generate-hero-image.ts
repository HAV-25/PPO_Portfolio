/**
 * CLI: npx tsx scripts/generate-hero-image.ts --slug <slug> --title <title> --theme <theme>
 * Output: public/images/insights/<slug>-hero.webp
 * Stdout: JSON { imagePath: "/images/insights/<slug>-hero.webp" }
 *
 * Requires: OPENAI_API_KEY env var
 */

import fs from 'fs'
import path from 'path'
import https from 'https'

const args = process.argv.slice(2)
function getArg(flag: string): string {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] ?? '' : ''
}

const slug = getArg('--slug')
const title = getArg('--title')
const theme = getArg('--theme')

if (!slug || !title) {
  console.error('Usage: npx tsx scripts/generate-hero-image.ts --slug <slug> --title <title> --theme <theme>')
  process.exit(1)
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY env var not set')
  process.exit(1)
}

// ─── Theme-specific visual style ──────────────────────────────────────────────

function buildPrompt(articleTitle: string, weekdayTheme: string): string {
  const themeStyles: Record<string, string> = {
    agentic_builds: 'abstract interconnected data flow nodes and network pathways, minimal circuit-board lines',
    revenue_per_employee: 'clean geometric bar chart abstraction, precise grid lines, data visualisation aesthetic',
    payments_infrastructure: 'layered network topology diagram, payment rail connections, infrastructure nodes',
    regulated_ai: 'document shield iconography, EU stars motif, structured compliance grid',
  }

  const style = themeStyles[weekdayTheme] ?? 'abstract geometric pattern, professional financial services aesthetic'

  return (
    `Minimalist editorial illustration for a professional fintech article titled "${articleTitle}". ` +
    `Visual style: ${style}. ` +
    `Colour palette: deep navy blue (#24356e) as dominant colour, cream/off-white (#F5F1E8) as background, ` +
    `with a single accent in electric cyan (#2dfff8) used sparingly. ` +
    `No people, no faces, no text, no logos. Clean, modern, high-contrast. ` +
    `Wide landscape format, editorial magazine quality.`
  )
}

// ─── Download image from URL to file ──────────────────────────────────────────

function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Download failed: ${response.statusCode}`))
        return
      }
      response.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', (err) => {
      fs.unlink(dest, () => {})
      reject(err)
    })
  })
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const prompt = buildPrompt(title, theme)

  // Call OpenAI Images API
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
      response_format: 'url',
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    console.error('OpenAI API error:', err)
    process.exit(1)
  }

  const data = await response.json() as { data: { url: string }[] }
  const imageUrl = data.data[0]?.url
  if (!imageUrl) {
    console.error('No image URL in response')
    process.exit(1)
  }

  // Ensure output directory exists
  const outputDir = path.join(process.cwd(), 'public', 'images', 'insights')
  fs.mkdirSync(outputDir, { recursive: true })

  const outputPath = path.join(outputDir, `${slug}-hero.png`)
  await downloadImage(imageUrl, outputPath)

  const imagePath = `/images/insights/${slug}-hero.png`
  console.log(JSON.stringify({ imagePath }))
}

main().catch((err) => {
  console.error('generate-hero-image failed:', err)
  process.exit(1)
})
