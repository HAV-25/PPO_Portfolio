# Content Writer Agent (CWA) — Setup & Operations Reference

## What this is

The CWA is a scheduled remote Claude Code agent that runs Mon–Thu and generates one article per day for Payal Ponkshe's portfolio site (`/insights`). It reads today's topic from a Google Sheet, researches it live, writes a full MDX article + LinkedIn post in Payal's voice, commits a draft branch to GitHub, updates the Sheet, and drafts an approval email to payalponkshe@gmail.com.

---

## Trigger details

| Field | Value |
|---|---|
| Trigger ID | `trig_01CjjAZo2vPE2h4WGDp5Fvh1` |
| Name | `PP_CWA_Content_Writer_Agent` |
| Schedule | Mon–Thu at 09:00 UTC = **11:00 AM Berlin (CEST)** / 10:00 AM Berlin (CET in winter) |
| Cron expression | `0 9 * * 1-4` |
| Environment | Sqoop - Broadcast (`env_015fZgKBERYo7zc5fBjdxY5u`) |
| Model | claude-sonnet-4-6 |
| Repo | https://github.com/HAV-25/PPO_Portfolio |
| Manage / disable | https://claude.ai/code/scheduled/trig_01CjjAZo2vPE2h4WGDp5Fvh1 |

**DST note:** Cron runs in UTC. In summer (CEST, UTC+2) the agent fires at 11 AM Berlin. In winter (CET, UTC+1) it fires at 10 AM Berlin. No manual adjustment needed — just be aware.

**MCP connectors attached:**
- Gmail (`ba57d484-9bc7-43ea-9b0f-ac8951599124`) — for approval email draft
- Google Drive (`911da9bf-b382-4262-872c-b9b4b37f21d1`) — for Google Sheets read/write

---

## Google Sheet — PP_CONTENT_Tracker

| Field | Value |
|---|---|
| Sheet ID | `1iNPzPaQetRZh9QrUDsaYSW5NYrX9GcR3HbeXIpWAxX4` |
| URL | https://docs.google.com/spreadsheets/d/1iNPzPaQetRZh9QrUDsaYSW5NYrX9GcR3HbeXIpWAxX4/edit |
| Owner | payalponkshe@gmail.com |

**Tabs the agent reads/writes:**

| Tab | Purpose |
|---|---|
| `Calendar` | Daily publishing schedule — agent reads `publish_date` + `status=scheduled` to pick today's topic; writes `status=draft_ready` on completion |
| `Topic_Bank` | 45 seeded topics (source of truth for all article ideas) |
| `Articles` | Agent writes metadata here on each run: slug, title, publish_date, status, branch, generated_at |
| `Agent_Log` | Agent logs every run here regardless of outcome: date, status, slug, word_count, branch, error_message |

**Calendar tab required columns:** `publish_date`, `status`, `topic_title`, `slug`, `pillar`, `theme`, `notes`

**For the agent to pick up a topic:** set `status=scheduled` and `publish_date=YYYY-MM-DD` matching the run date.

---

## Content strategy & publishing schedule

Daily themes (Mon–Thu):
- **Monday** — Agentic Builds (Pillar 1 / 5)
- **Tuesday** — AI Operating Model / Revenue Per Employee (Pillar 2)
- **Wednesday** — Payments & Infrastructure (Pillar 3)
- **Thursday** — Regulated AI — EU AI Act / GDPR / DORA (Pillar 4)

Full strategy, 45-topic bank, 12-week calendar, and the complete CWA prompt: `content-agent/content_strategy.md`

Voice reference — 6 published articles in Payal's exact tone: `content-agent/portfolio_articles.md`

---

## What the agent does on each run (step by step)

1. **Read today's topic** from Google Sheet Calendar tab via Google Drive MCP
2. **Run 4 WebSearch queries** — recent news, a sourced statistic, European/regulatory angle, real-world example
3. **Write the MDX article** (800–1,500 words) following the CWA prompt in `content_strategy.md` Section 9:
   - BLUF opening, question-shaped H2/H3s, answer-first blocks
   - Sourced statistic in first 50 words
   - Comparison table or numbered list
   - FAQ block (3–5 Q&As)
   - JSON-LD schema (Article + FAQPage + Person)
4. **Write the LinkedIn post** (150–250 words, hook line 1, 3–5 bullets, soft CTA)
5. **Commit to GitHub branch** `content/[slug]`:
   - `content/insights/[slug].mdx` — the article (flat file, not subdirectory)
   - `content/insights/[slug].meta.json` — metadata, JSON-LD schema, LinkedIn post, sources, approval token
6. **Update Google Sheet** — Articles tab (new row) + Calendar tab (status → draft_ready)
7. **Send approval email** directly to payalponkshe@gmail.com via `npx tsx scripts/send-email.ts` (nodemailer, Gmail SMTP port 587) — email is **sent**, not saved as a draft. Subject: `[Content Ready] [title] — approve to publish`. Styled HTML email with approve/reject links, opening paragraph, LinkedIn post, and verified sources list.

---

## Approval workflow (current: manual merge — Phase 3 will automate)

The agent sends an email to payalponkshe@gmail.com. On receipt:

- **To approve:** merge branch `content/[slug]` → `main` in GitHub. The `/insights/[slug]` route on the site will pick it up once the MDX pipeline is wired (Phase 4 of site build).
- **To reject:** log the reason in the Articles tab (status → rejected), delete the branch.

**Email sender:** `scripts/send-email.ts` (nodemailer, port 587). Takes a JSON payload file, sends a styled HTML email with approve/reject links. The agent writes credentials to a temp `.env.local` before calling the script — credentials are embedded in the trigger prompt. If the app password is rotated, update the trigger via RemoteTrigger update.

**Email guardrails (non-negotiable, enforced in trigger prompt):**
- ONE email per run only
- FROM `payalponkshe@gmail.com` TO `payalponkshe@gmail.com` only
- Subject must begin with `[Content Ready]`
- Gmail MCP must never read, search, or interact with existing inbox
- Any violation: STOP, log to Agent_Log, do not send

**Phase 3 (not yet built):** A Next.js API route at `/api/content/approve` will handle one-tap approve/reject links in the email — merging or flagging automatically. When built, update the agent prompt's Step 6 accordingly.

---

## Reference files in this repo

| File | Purpose |
|---|---|
| `content-agent/CWA_SETUP.md` | This file — full setup, operations, and context |
| `content-agent/content_strategy.md` | Full content strategy, 45-topic bank, 12-week calendar, CWA prompt |
| `content-agent/portfolio_articles.md` | 6 published articles — ground truth for Payal's voice and tone |

---

## How to re-create the trigger if it's lost

Sessions are ephemeral — CronList and RemoteTrigger state does not persist across Claude Code sessions. If the trigger disappears:

1. Open Claude Code in this project
2. Run: `check if remote trigger trig_01CjjAZo2vPE2h4WGDp5Fvh1 still exists`
3. If gone, use the `/schedule` skill and reference this file — all config values above are what to restore

Trigger creation happened: **2026-06-22** via Claude Code session in project `C:\Users\arunv\OneDrive\Desktop\Payal Career\Payal - Portfolio Site`

---

## Build phases — where the content pipeline sits

| Phase | Status | Description |
|---|---|---|
| CWA trigger setup | **DONE** | This file — trigger live, fires Mon–Thu 11 AM Berlin |
| Google Sheet seeded | **DONE** | Topic_Bank (45 topics), Calendar (12-week plan), Articles + Agent_Log headers |
| GitHub repo | **DONE** | HAV-25/PPO_Portfolio, main branch, content-agent/ folder |
| Voice + strategy refs committed | **DONE** | content-agent/portfolio_articles.md + content_strategy.md |
| Phase 3 — Approval handler | **NOT BUILT** | /api/content/approve Next.js route — one-tap approve/reject |
| Phase 4 — Site /insights/[slug] route | **NOT BUILT** | Dynamic MDX rendering from content/insights/[slug]/index.mdx |
| Phase 5 — Friday reflection variant | **NOT BUILT** | Shorter format (400–600 words), Fri-only |
| Phase 6 — Netlify deploy | **NOT BUILT** | When site launches publicly |

---

## Credentials & access

| Service | Access method |
|---|---|
| Google Sheets | Service account via `scripts/update-sheet.ts` (googleapis npm) — NOT Google Drive MCP (MCP can read only, cannot write cells) |
| Gmail | SMTP via `scripts/send-email.ts` (nodemailer, port 587, app password) — NOT Gmail MCP |
| GitHub | `git push` with GITHUB_TOKEN embedded in trigger prompt |
| Web research | Built-in WebSearch tool (no API key needed) |

**Service account:** `payal-professional@payal-professional.iam.gserviceaccount.com`
**Google Sheets API** must be enabled in GCP project `payal-professional` (project number `813264193667`).
Sheet must be shared with the service account email as Editor.

No Supabase, no Brave Search API, no n8n in this pipeline. All state lives in Google Sheets + GitHub.

---

## Session log — 2026-06-22 (diagnosis & fixes)

**Issue:** Cron fired Mon 2026-06-22 at 09:00 UTC but Step 5 (Sheet writes) was wired to Google Drive MCP which has NO cell-write capability. Agent_Log and Articles tabs stayed empty. Calendar tab also had wrong data (Topic 1 on wrong date, Topic 21 on wrong date).

**Root causes fixed:**
1. **Step 5 rewritten** — now uses `npx tsx scripts/update-sheet.ts` with service account credentials embedded in trigger prompt instead of Google Drive MCP. Three operations: `append-article`, `update-calendar`, `log-agent`.
2. **`scripts/update-sheet.ts` created and pushed** — CLI wrapper around `src/lib/content/sheets.ts`. Accepts JSON string or file path. Loads `.env.local` manually before any API calls. SHA `c2f558a6e371133ff1f0af5518d543fb2d9a5a26` at time of update.
3. **Google Sheets API enabled** — was blocked with "has not been used in project 813264193667". User enabled it at GCP console.
4. **Calendar data verified** — `2026-06-23 | Tuesday | operating_model | 21 | Revenue Per Employee | D | long_form | scheduled` confirmed correct in Sheet.
5. **Trigger prompt updated** — full body (events + session_context) updated via RemoteTrigger. Important: always include BOTH fields in any trigger update or the events array silently drops.

**Verified working (2026-06-22):** Google Sheets API read (Calendar tab, 3 rows) and write (Agent_Log append + clear) both confirmed with service account auth.

**Next scheduled run:** 2026-06-23 09:00 UTC — Topic 21 "Revenue Per Employee".

---

*Last updated: 2026-06-22. Update this file whenever trigger config, Sheet structure, or approval workflow changes.*
