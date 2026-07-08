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

async function main() {
  const topic = await getTodaysTopic()
  console.log(JSON.stringify(topic, null, 2))
}

main().catch(e => { console.error(e.message); process.exit(1) })
