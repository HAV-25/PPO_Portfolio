import { google } from 'googleapis';

const SHEET_ID = '1iNPzPaQetRZh9QrUDsaYSW5NYrX9GcR3HbeXIpWAxX4';

const ARTICLE_ID    = 'f4e82ca1-3b7d-4f9e-8c5a-2d1e6b0af3c7';
const APPROVAL_TOKEN = '9a2b5d8e-1c4f-47a3-b6e0-3d5c9f2a8b7e';
const CREATED_AT    = '2026-07-07T08:00:00Z';
const PUBLISH_DATE  = '2026-07-09';
const CALENDAR_ROW  = 12; // Row index (1-based) for 2026-07-09 in Calendar tab

const LINKEDIN_POST = `128% growth in euro stablecoin market cap in 12 months. As of 1 July 2026, the EU's MiCA transitional period is closed — and the risk picture for corporate treasurers changed overnight.

This is not a crypto story. It is a treasury governance story.

MiCA creates 2 instruments that matter: E-Money Tokens (EMTs, the practical standard for B2B settlements) and Asset-Referenced Tokens (ARTs, more complex, harder to use in standard treasury contexts). USDT has no MiCA authorisation. Any EU corporate using it for settlements now has a compliance exposure, not just a market risk.

What I would actually do:

• Audit every stablecoin instrument in use — payment teams often settle with stablecoins without treasury awareness
• Run the EMT checklist: MiCA authorisation number, Art. 36 reserve custody, redemption terms
• Check your custody provider holds both MiCA AND PSD2 coverage — the gap between the two is now your risk
• Build a stablecoin instrument register before your next regulatory examination
• If automating settlement, design to a typed abstraction layer — I use n8n + Supabase + Circle EURC for the EU rail

The Revenue Per Employee frame applies directly: automated MiCA-compliant settlement pipelines cut cross-border processing from 3–5 days to same-day. That is not a fintech innovation story. That is a treasury efficiency story.

Full piece + the MiCA Readiness Ladder I built around this — link in comments.`;

const SOURCES_JSON = JSON.stringify([
  'CoinGecko — MiCA-Compliant Stablecoin market cap $75.4B, July 2026',
  'cryptonomist.ch — euro stablecoin market cap +128% YoY to $673.9M, July 2026',
  'bleap.finance — MiCA July 1 2026 deadline, transitional period closed, July 2026',
  'scorechain.com — EMT custody requires MiCA + PSD2 licence from March 2026, 2026',
  'hacken.io — MiCA non-compliance fines up to 12.5% turnover + personal liability, 2026',
  'innreg.com — ~12 issuers hold MiCA authorisation as of Q1 2026, 2026',
  'KYC Chain — USDT does not hold MiCA authorisation as of June 2026, 2026',
  'Circle — EU-issued USDC and EURC reserves per MiCA Art. 36, quarterly attestations, 2026',
  'BIS Working Paper 1270 — USDC/SVB reserve concentration episode, 2023',
  'COREDO — European group treasury cross-border stablecoin settlement policy, 2026',
]);

const CWA_NOTES = 'PASS — All 11 editorial checklist items satisfied. Opens with sourced regulatory fact + 128% stat within first 50 words. Builder identity: n8n + Supabase + Circle EURC abstraction layer in What I would do step 5. Fintech application: DORA/PSD2/MiCA intersection + COREDO case study. Named framework: The MiCA Readiness Ladder (4-level). Commercial impact: settlement 3-5 days to same-day, Revenue Per Employee framing. LinkedIn hook stat-led. FAQ: exactly 4. What I would do: 5 first-person actions. No buzzwords. All claims sourced. GRAPHIC OPPORTUNITY flagged. SCHEDULE NOTE: Running 2 days ahead — 2026-07-07 row status=draft_ready. Processing topic 16 (publish 2026-07-09) per instructions.';

async function main() {
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // 1. Append to Articles tab
  // Headers: id, created_at, publish_date, weekday_theme, topic_number, article_title,
  //          article_slug, site_article_mdx, linkedin_post, schema_jsonld, sources_json,
  //          status, cwa_notes, cda_review_notes, rejection_reason, revision_count,
  //          preview_url, production_url, approval_token
  const articlesRow = [
    ARTICLE_ID,
    CREATED_AT,
    PUBLISH_DATE,
    'payments_infra',
    '16',
    'MiCA stablecoin treasury: a practical guide for EU corporate treasurers',
    'stablecoins-corporate-treasurer-mica-era-guide',
    '', // site_article_mdx — omit large MDX from sheet; file is in repo
    LINKEDIN_POST,
    '', // schema_jsonld — in meta.json
    SOURCES_JSON,
    'awaiting_approval',
    CWA_NOTES,
    '', // cda_review_notes
    '', // rejection_reason
    '0', // revision_count
    '', // preview_url
    '', // production_url
    APPROVAL_TOKEN,
  ];

  const appendRes = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Articles!A:S',
    valueInputOption: 'RAW',
    requestBody: { values: [articlesRow] },
  });
  console.log('Articles append:', appendRes.data.updates?.updatedRange);

  // 2. Update Calendar row 12: status (col I = index 8) and article_id (col J = index 9)
  // Calendar headers: week_number(A), publish_date(B), weekday(C), theme(D),
  //                   topic_number(E), topic_title(F), cluster(G), format(H),
  //                   status(I), article_id(J)
  const calUpdateRes = await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      valueInputOption: 'RAW',
      data: [
        {
          range: `Calendar!I${CALENDAR_ROW}`,
          values: [['in_progress']],
        },
        {
          range: `Calendar!J${CALENDAR_ROW}`,
          values: [[ARTICLE_ID]],
        },
      ],
    },
  });
  console.log('Calendar updated:', calUpdateRes.data.totalUpdatedCells, 'cells');

  // 3. Append to Agent_Log tab
  // Headers: id, created_at, agent, article_id, action, result, error
  const logRow = [
    `log-${ARTICLE_ID}`,
    CREATED_AT,
    'CWA',
    ARTICLE_ID,
    'article_generated',
    'success',
    '',
  ];

  const logAppendRes = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Agent_Log!A:G',
    valueInputOption: 'RAW',
    requestBody: { values: [logRow] },
  });
  console.log('Agent_Log append:', logAppendRes.data.updates?.updatedRange);

  console.log('All sheet updates complete.');
}

main().catch(e => { console.error(e.message); process.exit(1); });
