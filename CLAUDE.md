# CLAUDE.md — Payal Ponkshe Portfolio Website
## Agentic Build Brief for Claude Code

---

## 1. PROJECT OVERVIEW

Build a professional portfolio and consulting website for **Payal Ponkshe** — a fintech and payments executive with 18+ years of experience, now also an independent AI venture builder and fractional advisor.

**Primary audience:** Founders and COOs at fintech, payments infrastructure, and AI-first companies across Europe and remote — evaluating Payal for consulting, advisory, or fractional executive engagements.

**Secondary audience:** Recruiters and hiring managers at Director/VP level at regulated financial services companies.

**Site purpose (in order of priority):**
1. Convert visitors into a booked 30-minute discovery call
2. Establish authority through professional experience + AI venture portfolio
3. Present consulting/advisory service offering clearly
4. Provide a give-back proposition for people re-entering the workforce

**Tone:** Direct, data-backed, builder credibility by reference. No corporate fluff. No buzzwords. Every claim backed by evidence. Sounds like someone who ships things and measures results.

---

## 2. TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll-triggered reveals, subtle micro-interactions — restrained, purposeful)
- **Deployment:** Vercel
- **Booking:** Calendly embed (inline, not redirect)
- **Fonts:** Google Fonts — Poppins + Roboto Mono
- **Icons:** Unicode glyphs only (✓ ✕ → ↓ •) — no icon libraries
- **Images:** WebP, lazy-loaded, no stock photography
- **CMS:** None for v1 — static content, easy to edit in code

---

## 3. DESIGN SYSTEM (NON-NEGOTIABLE)

All design decisions derive from the Payal Ponkshe personal brand system. Do not deviate.

### Colours
```
--bg-cream:        #F5F1E8   /* All page backgrounds */
--navy:            #24356e   /* All text, headlines, structure */
--cyan:            #2dfff8   /* Spotlight accent — ONE use per section max */
--red-wrong:       #D94F4F   /* Sparingly — negative signals only */
--slate:           #5A6A8A   /* Meta text, labels, secondary */
--navy-80:         rgba(36,53,110,0.8)
--navy-20:         rgba(36,53,110,0.2)
--rule:            rgba(36,53,110,0.25)  /* Dividers */
```

### Typography
```
Display/Headlines:  Poppins Bold 700       — all headlines, card titles, section labels
Body:               Poppins Regular 400    — all body text
Labels/Meta:        Poppins Medium 500     — tags, nav, small labels
Numbers/Stack:      Roboto Mono Bold 700   — ALL numbers, metrics, tech stack tags
```

**Rules:**
- Sentence case everywhere. No title case. No ALL CAPS except small meta labels (e.g. CASE STUDY, LIVE).
- Numbers always in numerals: 18+, $25M, 120+, 30%, not "thirty percent"
- Poppins → Roboto Mono switch signals a data point. Use deliberately.
- One dominant element per section (either a headline OR a number — never both competing)

### Layout Rules
- Background: flat cream `#F5F1E8` throughout — no dark mode, no gradients, no patterns
- No drop shadows. No glassmorphism. No blur effects.
- Border radius: 0 by default. `4px` only for small tag pills.
- Dividers: `1px solid rgba(36,53,110,0.25)`
- Cyan underline: `6px solid #2dfff8` — key phrases only, one per section
- Section margin: generous whitespace — 80px+ vertical padding between sections
- Max content width: 1200px, centred
- Mobile-first responsive. Min font size 16px body.
- No emoji anywhere on the site.

### Signature Motion (Framer Motion)
- Scroll-triggered fade+translateY reveals on section entry (subtle: 20px, 0.4s ease-out)
- Hover on project cards: left border `4px solid #2dfff8` appears, no scale/shadow
- Page transitions: cross-fade 200ms ease-out
- Animated counters on the stat band (count up on scroll-into-view)
- NO bounces, springs, parallax, or hover wobbles
- `prefers-reduced-motion` respected — all animations disabled for reduced-motion users

---

## 4. SITE ARCHITECTURE

```
/                   → Home (hero + stat band + services snapshot + portfolio preview + professional experience preview + CTA)
/work               → Full Portfolio (all 8 project cards + case study modals)
/experience         → Professional Experience (career timeline)
/services           → Services & Offering (consulting, advisory, fractional)
/insights           → Thought Leadership (articles/posts — static v1)
/about              → About / Story
/book               → Book a Discovery Call (Calendly embed — paid advisory)
/give-back          → Give-Back Programme (pro-bono career re-entry, separate Calendly)
```

**Navigation (top, sticky):**
```
Payal Ponkshe [logo-mark PP]    Work    Experience    Services    Insights    About    [Book a Call →]
```
- "Book a Call" in nav is a filled navy button with cream text — primary CTA always visible
- Nav collapses to hamburger on mobile

---

## 5. PAGE SPECIFICATIONS

---

### PAGE: HOME (/)

#### Section 1 — Hero
- Full-width cream background
- Left-aligned layout (NOT centred)
- Large Poppins Bold headline (64px desktop, 40px mobile):
  > "Fintech & Payments Executive. AI-First Venture Builder."
- Cyan 6px underline beneath "AI-First Venture Builder"
- Subheadline Poppins Regular 20px slate:
  > "18+ years across Mastercard, Wirecard, DeFi & regulated financial services. I lead enterprise transformation and build AI systems — not as separate disciplines, but as one."
- Two CTAs below:
  - Primary: `[Book a 30-Minute Discovery Call →]` — navy filled button
  - Secondary: `[View My Work ↓]` — navy text link with cyan underline
- No hero image. No video. Pure typographic statement.
- Framer Motion: headline fades in on load (0.6s), subhead follows (0.8s), CTAs follow (1.0s)

#### Section 2 — Stat Band
- Full-width, cream background, 1px navy rule top and bottom
- 4 stats in a horizontal row (Roboto Mono Bold for numbers, Poppins Regular for labels):
  ```
  18+          $25M+           120+            6
  Years        Partnerships    Team Members    AI Ventures
  Experience   Led             Managed         Built
  ```
- Numbers count up on scroll-into-view (Framer Motion counter animation)
- On mobile: 2×2 grid

#### Section 3 — Services Snapshot
- Section label: `WHAT I DO` in Poppins Medium slate, small caps style
- 4px navy rule above label
- 3 service cards in a row (see /services for full detail):
  1. **Enterprise Transformation & Programme Delivery** — leading complex, cross-border change programmes in regulated financial services
  2. **AI Implementation & Operating Model Design** — designing and building AI-first operating models that connect to revenue per employee, not just innovation metrics
  3. **Fractional COO / Advisory** — embedded executive support for founders and scale-ups navigating fintech, payments, and AI transformation
- Each card: Poppins Bold title (navy), 2-line description (Poppins Regular slate), `[Learn more →]` link
- Hover: left cyan 4px border
- CTA below section: `[See Full Services →]` text link

#### Section 4 — Portfolio Preview (3 cards)
- Section label: `SELECTED WORK`
- Show 3 highest-impact portfolio cards (AI Content Pipeline, German Exam App, Spaarker)
- Card design: see /work spec below
- CTA: `[View All Work →]` navy text link

#### Section 5 — Professional Experience Preview
- Section label: `CAREER HIGHLIGHTS`
- 3 horizontal tiles, each with:
  - Company (anonymised as role type, e.g. "Global Card Scheme — VP Global Head Delivery & Operations")
  - One-line impact metric
  - `→` link to /experience
- Example tiles:
  - Mastercard: "VP Global Head Delivery & Operations — $25M+ partnerships, 4 regions, 120+ team"
  - Wirecard: "Team Lead Professional Services — UK's first Apple Wallet digital implementation"
  - Skyllfull: "Co-Founder & Head of Operations — €250K pipeline in 30 days of launch"

#### Section 6 — Give-Back Teaser
- Narrow section, cream, left-aligned
- Headline: "Re-entering the workforce after a career break?"
- 2-line description: "I offer a limited number of free 30-minute sessions for professionals navigating their return. No agenda. No pitch."
- CTA: `[Learn more about the Give-Back Programme →]`

#### Section 7 — Final CTA Band
- Cream background, navy 1px rules top and bottom
- Headline: "Ready to work together?"
- Subtext: "Book a free 30-minute discovery call. No pitch, no pressure — just an honest conversation about where I can help."
- Big primary button: `[Book Your Discovery Call →]`

#### Footer
- `Payal Ponkshe` — Poppins Bold navy
- `Germany · Open to Europe & Remote · German Citizen`
- LinkedIn icon (navy, no colour) + email: payalponkshe@gmail.com
- `PP` logomark — navy initials, 40px, bottom right
- `© 2025 Payal Ponkshe. All rights reserved.`

---

### PAGE: WORK (/work)

**Page hero:**
- Headline: "Work & Ventures"
- Subtext: "A record of what I've built, led, and shipped — across enterprise programmes and independent AI ventures."

**Layout:** 2-column card grid (desktop), 1-column (mobile)

**Two grouped sections:**

#### Group A: AI Ventures & Independent Builds
Label: `AI VENTURES` (Poppins Medium, slate, 4px navy rule above)

**8 project cards:**

**Card 1 — AI Content Intelligence Pipeline**
- Title: "AI Content Intelligence Pipeline — Brand-Locked Reconstruction at Scale"
- Problem: "Viral content performs well but repurposing it manually is bottlenecked by human effort and lacks brand consistency at volume."
- Stack tags (Roboto Mono): `n8n` `Claude API` `GPT Image` `Gemini` `Supabase` `React Native` `Next.js`
- Outcome metric: "Live in production — end-to-end reconstruction pipeline processing carousels with automated CTA generation"
- Status tag: `LIVE`

**Card 2 — German Language Exam Prep App**
- Title: "AI-Native Language Exam Prep Platform — CEFR A1–B1"
- Problem: "Adult learners preparing for standardised German-language certification exams lack affordable, exam-accurate tools that combine authentic test formats with reliable automated scoring."
- Stack tags: `React Native` `Expo` `Supabase` `Claude API` `OpenAI Realtime` `ElevenLabs` `RevenueCat` `n8n`
- Outcome metric: "Live on Google Play — 850+ exam-aligned questions, hybrid AI + deterministic scoring, GDPR by design"
- Status tag: `LIVE`

**Card 3 — Spaarker: AI Carousel Content Platform**
- Title: "AI Carousel Generation Platform — Content Intelligence at Creator Scale"
- Problem: "Content creators lack a purpose-built tool for carousel/slideshow formats — the highest-converting content type — and stitch together 4–5 disconnected tools to produce a single post."
- Stack tags: `Next.js` `Supabase` `OpenAI` `Claude Vision` `n8n` `Framer Motion` `Stripe`
- Outcome metric: "Specification complete, active build — typed pipeline contracts, 0–5 variation dial architecture, production n8n workflows live"
- Status tag: `IN BUILD`

**Card 4 — AI Workflow Generation Platform (HumanlyReal)**
- Title: "Natural Language → Deployable Automation — AI Workflow Generator"
- Problem: "Business operators lack a fast, accessible way to translate workflow intent into production-ready automation without engineering resources."
- Stack tags: `n8n` `OpenAI GPT-4` `Supabase` `Lovable.dev` `Vercel` `Stripe`
- Outcome metric: "Prototype stage — 3-layer multi-agent architecture, platform-agnostic IR schema as core moat"
- Status tag: `PROTOTYPE`

**Card 5 — Wyngs: AI Literacy Platform for Adults 60+**
- Title: "AI Literacy & Community Platform — Positioning Older Adults as Knowledge Contributors"
- Problem: "AI literacy platforms are built for passive consumption. No infrastructure positions older adults as knowledge contributors or helps them acquire AI skills for creative and economic agency."
- Stack tags: `React Native` `Expo` `Claude API` `Perplexity` `DALL-E 3` `n8n` `Facebook Graph API`
- Outcome metric: "Active build — 10-chapter verified curriculum complete, 21-node automation pipeline, Story Capsules architecture"
- Status tag: `IN BUILD`

**Card 6 — Agentic Commerce Venture Studio**
- Title: "EU-Specific Operating System for Agentic Commerce — Solo AI Studio Architecture"
- Problem: "European SMEs are underserved by AI automation tooling that is both commercially viable and regulatory-compliant. No ready-made playbook exists for a solo founder to launch and scale a multi-product AI studio across the EU."
- Stack tags: `LangGraph` `n8n` `pgvector` `Langfuse` `Hetzner` `Shopify API` `Meta Ads API`
- Outcome metric: "Operating manual delivered — 15 sellable agent offers, 90-day launch checklist, EU regulatory framework, pricing architecture"
- Status tag: `CONCEPT`

#### Group B: Enterprise & Venture Experience
Label: `ENTERPRISE & VENTURE` (Poppins Medium, slate, 4px navy rule above)

**Card 7 — Automotive Circularity Venture (ThyssenKrupp)**
- Title: "Commercialisation Strategy & Ecosystem Framework — Automotive Circularity Venture"
- Problem: "A major industrial group needed to translate EU regulatory requirements for circularity into a viable go-to-market blueprint spanning partner economics, operational structure, and compliance design."
- Stack tags: `Operating Model Design` `GTM Architecture` `EU Regulatory` `Ecosystem Design`
- Outcome metric: "Blueprint delivered — partner economics, operational structure, compliance design, commercialisation roadmap"
- Status tag: `DELIVERED`

**Card 8 — DeFi & Digital Banking Talent Platform (Skyllfull)**
- Title: "Zero-to-One Talent Platform — DeFi, Web3 & Digital Banking"
- Problem: "Digital assets, DeFi protocols, and digital banking clients lacked a specialised talent platform connecting them with vetted technical and non-technical professionals."
- Stack tags: `Platform Design` `Operating Model` `Go-to-Market` `Partnership Design`
- Outcome metric: "€250K+ qualified pipeline within 30 days of launch — end-to-end operating model, validated product-market fit"
- Status tag: `DELIVERED`

**Card design anatomy:**
```
┌─────────────────────────────────────────────┐
│  [STATUS TAG]  [CAPABILITY TAG]             │  ← Roboto Mono small, slate
│                                             │
│  Card Title (Poppins Bold 18px, navy)       │
│                                             │
│  2-line problem statement                   │  ← Poppins Regular 15px, navy
│  (what gap this solved)                     │
│                                             │
│  ─────────────────────────────────────────  │  ← 1px rule
│                                             │
│  n8n · Supabase · Claude API · Next.js      │  ← Roboto Mono 13px, slate
│                                             │
│  [View Case Study →]                        │  ← navy text, cyan underline on hover
└─────────────────────────────────────────────┘
```
- Hover: `4px solid #2dfff8` left border appears instantly
- Click: opens full case study modal

**Case Study Modal:**
Full-screen overlay (cream background), closes on ✕ or ESC.
Sections within modal:
```
[STATUS TAG]  [CAPABILITY TAG]

Card Title — Poppins Bold 32px navy
────────────────────────────────────

THE PROBLEM
[body text]

MY APPROACH
[body text]

TECH STACK & TOOLS
[Roboto Mono tags, space-separated]

KEY DECISIONS
• Decision 1
• Decision 2
• Decision 3

OUTCOME
[1–2 lines. Bold the metric.]

CAPABILITY SIGNAL
[What this demonstrates professionally]

[Book a Discovery Call to discuss this →]   ← micro-CTA
```
Modal transition: 200ms cross-fade ease-out. No slide animation.

---

### PAGE: EXPERIENCE (/experience)

**Page hero:**
- Headline: "Professional Experience"
- Subtext: "18+ years leading transformation, partnerships, and delivery across regulated financial services, payments, and fintech."

**Timeline layout** — vertical, left-aligned, with navy left rule and navy dot markers

**Entries (chronological, most recent first):**

**1. Independent Venture Builder & Advisor** | Aug 2024 – Present
- AppsBrite UG, Germany
- AI venture builds across conversational AI, agentic commerce, content intelligence, and workflow automation
- Advisory: operating model and GTM architecture for regulated ventures
- Highlight: 6 AI ventures in build/live across B2B and B2C

**2. Vice President, Global Head Delivery & Operations** | Jan 2020 – Jul 2022
- Global Card Scheme (Mastercard), Ireland
- Led $25M+ technology partnerships (Microsoft, Verizon) across 4 regions (Europe, North America, Middle East/Africa, Asia-Pacific)
- 120+ technical implementation team members
- 30% reduction in development cycles, 35% improvement in resource allocation efficiency
- 200% YoY client engagement growth
- Pioneered multi-region Innovation Hub with 100+ live demos

**3. Director, Business Development – Digital Payments** | Apr 2017 – Dec 2019
- Global Card Scheme (Mastercard), Germany
- Led $12M+ market development funds using digital-first strategy
- Nationwide German rollout of API-first digital wallet solution — 4x conversion rate improvement
- 6 new customer segments in 12 months, 20% revenue growth
- 30% reduction in deployment times, 10% cost reduction

**4. Co-Founder & Head of Operations** | Jul 2022 – Aug 2024
- Skyllfull, Germany
- Co-founded specialised talent platform for DeFi, Web3, and digital banking clients
- Designed end-to-end operating model: commercial structure, delivery, vendor and partner integrations
- €250K+ qualified pipeline within 30 days of launch
- Validated product-market fit through pilots with startups and enterprise clients

**5. Team Lead, Professional Services — Customer Implementation** | Apr 2013 – Apr 2017
- Wirecard AG, Germany
- Led strategic integration between Wirecard's issuing platform and Visa/Mastercard Digital Enablement Services
- Launched UK's first fully digitised Apple Wallet implementation
- Financial services implementation projects $5–10M annually
- Clients: Orange, SFR, Deutsche Telekom

**6. Senior Consultant** | 2011–2012
- NEOS Management Consulting, USA
- Business process architecture modernisation for S&P Global Ratings and Enterprise Car Rental

**7. Team Leader, PMO** | 2006–2010
- Dell Technologies, USA & India
- Led PMO for Harvard Pilgrim Healthcare — Oracle E-Business Suite implementation

**Education section below timeline:**
- MBA — Hult International Business School, USA (2010–2011)
- BE Computer Science — Mumbai University, India (2002–2006)

**Languages & Citizenship:**
- English (Full Professional) · German (Limited Working)
- German Citizen

---

### PAGE: SERVICES (/services)

**Page hero:**
- Headline: "How I Work With You"
- Subtext: "I work with a small number of clients at a time — founders, COOs, and operators in fintech, payments, and AI-first companies who need someone who has done it at scale and can build alongside them."

**3 Service Blocks (full-width sections, alternating layout):**

**Service 1 — Enterprise Transformation & Programme Delivery**
- Who it's for: Scale-ups and regulated financial services businesses navigating complex, cross-border change programmes
- What you get: Programme governance frameworks, operating model design, portfolio management, multi-region delivery leadership, executive stakeholder alignment
- Evidence: Led Mastercard R&D global operating model transformation — 30% faster development cycles, 35% efficiency gain
- Engagement types: Fractional programme director, interim VP Transformation, advisory
- CTA: `[Book a Discovery Call →]`

**Service 2 — AI Implementation & Operating Model Design**
- Who it's for: Founders and COOs who want AI to generate revenue and improve revenue per employee — not just sit in a strategy deck
- What you get: AI readiness assessment, operating model redesign for AI-first workflows, agentic system architecture, n8n/automation pipeline design, build-vs-buy decision frameworks
- Evidence: Built 6 AI ventures hands-on — pipelines, multi-agent systems, MCP integrations, production deployments
- Engagement types: Advisory retainer, implementation sprint, fractional Chief AI Officer
- CTA: `[Book a Discovery Call →]`

**Service 3 — Fractional COO / Strategic Advisory**
- Who it's for: Early-to-growth stage fintech and payments companies needing operating rigour without a full-time COO hire
- What you get: Operating model design, OKR and governance frameworks, partner and ecosystem strategy, commercial model design, team structure and hiring advisory
- Evidence: Co-founded and scaled Skyllfull from zero — €250K pipeline in 30 days; advised ThyssenKrupp automotive circularity venture on GTM and regulatory structure
- Engagement types: Fractional COO (3–6 month minimum), strategic advisor, board observer
- CTA: `[Book a Discovery Call →]`

**What I don't do section:**
- Small italic text block, navy, honest and direct:
  > "I don't take on roles where AI is a reporting metric rather than a revenue lever. I'm not available for short-term contracts under 6 months or roles requiring full-time office presence outside Germany. I work with a small number of clients — if we're not the right fit, I'll say so on the call."

**Final CTA:**
- `[Book a 30-Minute Discovery Call →]` — large, centred, navy button

---

### PAGE: BOOK (/book)

**No nav distractions — simplified header (logo only + close ✕)**

**Left column (context copy):**
- Headline: "Let's talk."
- Subtext:
  > "In 30 minutes I'll give you an honest read on where I can help, what that would look like, and whether we're the right fit. No pitch. No pressure."
- What to expect:
  > "→ A diagnosis of your current challenge
  > → 2–3 concrete observations or ideas
  > → An honest assessment of fit
  > → A clear sense of what working together would involve"
- What to prepare:
  > "Come with your top challenge and where you feel stuck. Nothing else needed."
- Small trust signal: "I take on a small number of engagements at a time."

**Right column:**
- Calendly inline embed (30-minute Discovery Call event type)
- Embed styled to match cream/navy palette where Calendly allows

---

### PAGE: GIVE-BACK (/give-back)

**Page hero:**
- Headline: "Re-entering the workforce? Let's talk."
- Subtext: "Career breaks are real. Re-entry is hard. I offer a small number of free 30-minute sessions for professionals navigating their return — no agenda, no pitch, no strings."

**Who this is for:**
> "You've been out of the workforce — by choice, necessity, or circumstance. You're not sure how to position the gap, what roles to target, or how to present yourself after time away. You don't need a career coach. You need someone who has hired, built teams, and sat on both sides of this conversation."

**What you get:**
- An honest read on your positioning
- One or two specific things to change in how you're presenting yourself
- A clear next step — nothing overwhelming

**What this is not:**
> "This is not a coaching programme. It's one conversation. I can't promise a job or a referral. But I can promise honesty and a useful 30 minutes."

**Eligibility & limits:**
> "I offer a small number of these sessions per month, based on availability. Priority to professionals in fintech, payments, technology, or adjacent fields. All conversations are confidential."

**Separate Calendly embed** (different event type from paid advisory — clearly labelled "Career Re-Entry Session — Free")

---

### PAGE: INSIGHTS (/insights)

**v1: Static page — no CMS**

**Page hero:**
- Headline: "Insights"
- Subtext: "Writing on fintech, payments, AI transformation, and what it actually takes to build at the intersection of enterprise delivery and emerging technology."

**Article cards (static, 3 placeholder articles for v1):**
Each card:
- Title
- 2-line excerpt
- Date
- Reading time
- `[Read →]` link (links to LinkedIn article or future /insights/[slug] page)

**Placeholder topics for v1:**
1. "Revenue per employee is the only AI metric that matters to a CEO"
2. "What I learned building 6 AI ventures while looking for a VP role"
3. "Why most enterprise AI transformations fail before they start"

---

### PAGE: ABOUT (/about)

**Left column — photo (Payal's headshot, warm desaturated, navy-toned)**
**Right column — story**

**Headline:** "Builder. Executive. Neither, fully."

**Story sections:**

**The operating thesis:**
> "I spent 18 years in fintech and payments — at Mastercard leading $25M+ global partnerships, at Wirecard launching the UK's first Apple Wallet implementation, in the DACH market driving digital payments adoption. I understand how large-scale financial infrastructure works, what breaks it, and what it takes to transform it."

**The pivot:**
> "In 2022 I co-founded Skyllfull — a talent platform for DeFi and Web3. It taught me what it means to build from zero without a team behind you. Since 2024 I've been building AI ventures independently — shipping production systems in n8n, Claude, Supabase, and MCP integrations that I designed and built myself, not just advised on."

**The rare overlap:**
> "Most executives haven't built. Most builders haven't run 120-person cross-regional programmes. I operate at the intersection — and I find that's where the most interesting problems live."

**Based in Germany. German citizen. Open to Europe and remote.**

**Education + languages block (below story)**

**CTA:** `[Book a 30-Minute Call →]`

---

## 6. CONTENT: FULL CASE STUDY DATA

### Case Study 1 — AI Content Intelligence Pipeline

**Status:** Live  
**Capability:** AI Pipeline Architecture · Prompt Engineering · Production Automation

**Problem:**
Viral content performs well but repurposing it manually at scale is bottlenecked by human effort and lacks brand consistency. The gap was a fully automated pipeline that could ingest viral slideshows, understand why they work, and reconstruct them at volume in a proprietary brand system — without legal/IP exposure or platform detection risk.

**Approach:**
Designed and built the end-to-end system architecture from scratch — database schema, n8n workflow orchestration, AI prompt engineering across three models, brand system codification, and multi-model fallback logic. Structured as a multi-stage pipeline (Ingest → Analyse → Deconstruct → Reconstruct → Caption → CTA → Queue) with explicit human gates and strategic guardrails injected per-slide from viral analysis.

**Stack:** n8n Cloud · Claude Sonnet (caption + deconstruct analysis) · GPT Image 1 (primary render) · GPT Image 2 (CTA slide render) · Gemini Flash Image (fallback) · Supabase (Postgres + pgvector + Storage) · React Native · Next.js · Netlify · Postiz (scheduling) · RevenueCat · Virlo API

**Key Decisions:**
- Brand contract vs per-slide payload separation — decoupling the static brand system from dynamic slide JSON enabled prompt reuse across thousands of renders without quality drift
- Logo injection via PNG image input — discovered that passing the wordmark as an actual image input produces pixel-perfect fidelity, eliminating post-render compositing
- Defensive type-checking for text blocks + CTA exclusion — both required explicit guards to prevent workflow crashes at scale

**Outcome:** V1 live — reconstruction workflow processing carousels end-to-end including automated CTA outro generation. Two queues validated end-to-end. CTA prompt at brand spec, captions written to processing queue.

**Capability Signal:** Full-stack AI pipeline architecture; multi-model orchestration with fallback chains; prompt engineering at systems level; production n8n workflow engineering; cross-functional product thinking including IP risk, platform detection, EU data residency.

---

### Case Study 2 — German Language Exam Prep App

**Status:** Live  
**Capability:** Product Ownership · AI Systems · Mobile · Monetisation

**Problem:**
Adult learners preparing for standardised German-language certification exams lack affordable, exam-accurate tools combining authentic test formats with reliable automated scoring. Existing options are either generic vocabulary apps or expensive human-tutored courses.

**Approach:**
Owned product, content strategy, database architecture, and the automated content-generation pipeline end-to-end. Spec-first and evidence-grounded: every content format cross-referenced against official exam PDFs. Quality-gated sprints — validate on small batch, then defer bulk generation. Strict data-safety rules throughout.

**Stack:** React Native / Expo (Android) · Supabase (Postgres, RLS, Edge Functions, RPCs) · n8n Cloud · Claude API (content generation, scoring) with CEFR-based model routing · OpenAI Realtime API (speaking practice) · gpt-4o-transcribe (German ASR) · ElevenLabs TTS · RevenueCat · PostHog (EU) · Sentry · OneSignal · Resend · Google Play Console

**Key Decisions:**
- Hybrid AI + deterministic scoring — AI handles content-point detection and qualitative feedback; backend enforces rubric arithmetic. Keeps learner-facing outcomes trustworthy.
- LLM cost optimisation — routed content generation by CEFR level (cheaper model for A1, stronger for A2+), cutting pipeline cost while maintaining exam accuracy
- Security & GDPR by design — RLS audit, screen-capture protection, API-key leak audit, PII-free crash reporting (UUID-only identity), GDPR Art. 17 erasure flow cascading across third-party services

**Outcome:** Live on Google Play — 850+ exam-aligned questions across A1/A2/B1, gamification system (streak mechanics, badge progression, leaderboard), subscription business with multiple tiers.

**Capability Signal:** End-to-end product ownership of AI-native venture; LLM orchestration with cost/quality discipline; hybrid AI + deterministic system design; mobile monetisation; applied data engineering; GDPR compliance; speccing and directing an AI coding agent.

---

### Case Study 3 — Spaarker: AI Carousel Content Platform

**Status:** In Build  
**Capability:** AI Product Strategy · Pipeline Architecture · Full-Stack

**Problem:**
Content creators with an audience know what they want to say but lack time to produce it. The carousel/slideshow format is the highest-converting content type on Instagram and TikTok, yet no purpose-built tool exists — creators stitch together 4–5 disconnected tools to produce a single post.

**Approach:**
Locked a single-format product thesis (carousel ownership), then worked backwards from the core promise — "a week of content in 15 minutes" — to make every feature, screen, and architecture decision pass or fail against that test. Built product spec, IA & screen flow map, and screen-by-screen spec as a three-document canonical source of truth.

**Stack:** Next.js 14 (App Router) · Tailwind CSS · shadcn/ui · Framer Motion · Supabase · Clerk (auth) · Stripe · OpenAI GPT Image-2 · Claude Vision · n8n (orchestration) · Virlo API (trend intelligence) · Postiz (publishing)

**Key Decisions:**
- 0–5 dial architecture — only the Creative Director node understands the level mapping; Deconstruct and Reconstruct stay level-agnostic. Keeps the dial user-explainable and individual nodes reusable.
- Typed handoff contracts — Blueprint → GenerationPlan → RenderedCarousel with Validate → Repair → Escalate at each boundary. Enables per-slide child jobs independently retriable and content-addressed caching.
- v1 on n8n, seams preserved for v2 — ship on n8n with typed contracts; defer code-native orchestration engine to v2 when concurrency demands it. The swap seam is designed now.

**Outcome:** Specification complete and locked. Three foundational documents produced. CLAUDE.md and three-layer documentation system set up for Claude Code agent handoff. Existing n8n workflows operational. Active build — v1 target: 4 weeks.

**Capability Signal:** AI product strategy at depth; full-stack technical ownership; senior product specification quality (38-screen spec with state machines, failure modes, error states); build velocity judgment; AI pipeline architecture with guardrails, caching, and child job fan-out.

---

### Case Study 4 — AI Workflow Generator (HumanlyReal)

**Status:** Prototype  
**Capability:** Multi-Agent Architecture · Product Design · AI Systems

**Problem:**
Business operators — particularly in real estate and SMB sectors — lack a fast, accessible way to translate workflow intent into deployable automation. The gap is between natural language ("when a lead books a showing, update my CRM and notify the team") and production-ready automation.

**Approach:**
Designed and architected a full-stack AI workflow generation platform as a solo builder. Structured as a 3-layer hybrid system: a guided UI, an n8n-based multi-agent orchestration backend (3 sequential agents), and a Supabase knowledge/data layer. Defined a proprietary Intermediate Representation (IR) schema as the platform-agnostic translation layer between user intent and deployable automation.

**Stack:** n8n Cloud · OpenAI GPT-4 Turbo · Supabase (PostgreSQL + Auth) · Lovable.dev (React/Tailwind) · Vercel · Stripe (planned) · Postman · custom JavaScript function nodes

**Key Decisions:**
- Hybrid architecture over pure no-code or pure code — n8n as visual orchestration backend enables fast solo development while preserving clean migration path to code-native engine
- IR Schema as core moat — platform-agnostic format decouples intent capture from deployment target (n8n, Make, Zapier), making the system extensible without rebuilding
- Token efficiency principles — short purposeful prompts, no large datasets in context, stepwise reasoning, tool calls only when value-additive

**Outcome:** Prototype/concept stage with fully documented 30-day build plan. Day 1 infrastructure designed and ready to execute.

**Capability Signal:** AI systems architecture; multi-agent pipeline design with defined roles, handoffs, and validation layers; product thinking across UX, architecture, and commercial model; pragmatic build judgment — hybrid approach, staged migration strategy, cost-aware AI design.

---

### Case Study 5 — Wyngs: AI Literacy Platform for Adults 60+

**Status:** In Build  
**Capability:** Zero-to-One Product · AI Curriculum · Automation

**Problem:**
AI literacy platforms are built around passive consumption — monitoring, reminders, companionship. There is no infrastructure positioning older adults as knowledge contributors, and no platform helping them acquire AI skills for creative and economic agency.

**Approach:**
Designed and led full product build across four simultaneous tracks: a 10-chapter AI literacy curriculum, a Story Capsules feature (audio/written legacy recording and family sharing), social community infrastructure, and a content automation pipeline. Built systems-first — reusable content architecture before individual chapters, repeatable automation frameworks before individual posts.

**Stack:** React Native · Expo · expo-av · expo-speech · Claude (strategy + content architecture) · Perplexity sonar-pro (research) · OpenAI Codex (implementation handoff) · n8n (migrated from Make.com) · DALL-E 3 · Facebook Graph API v19

**Key Decisions:**
- Contribution-first positioning over care-receiver framing — genuine white space validated through competitive analysis. Shaped every UX decision and investor pitch framing.
- No seeded community features at pitch time — identified that the network-effect investment thesis collapses if community features are artificially populated. Hard constraint: social features must reach authentic use before any fundraising conversation.
- Verified sourcing as non-negotiable — established strict verified sourcing standard for all content after fabricated details identified mid-build. Quality gate now governs all content development.

**Outcome:** Chapters 1–3 fully content-complete as production-ready React JSX components. 21-node n8n automation pipeline built. Facebook posting pipeline live. Pre-revenue, pre-seed positioning, active build.

**Capability Signal:** Zero-to-one product architecture; evidence-based product decisions (35-feature backlog tied to named academic sources); technical specification depth; AI toolchain fluency; investor-grade positioning; senior UX standards fluency; content quality governance.

---

### Case Study 6 — Agentic Commerce Venture Studio

**Status:** Concept  
**Capability:** Venture Design · EU Regulatory · GTM Architecture

**Problem:**
European SMEs are underserved by AI automation tooling that is both commercially viable and EU regulatory-compliant. No ready-made playbook exists for a solo founder to launch, price, and scale a multi-product AI automation studio across the fragmented EU market.

**Approach:**
Designed the full operating system for the studio from scratch — EU-specific, covering market segmentation, offer design, technical architecture, GTM motion, and monetisation structure. Structured around a sense/reason/act mental model applied to 8 commerce segments, with a three-layer revenue progression (services → subscriptions → white-label).

**Stack:** LangGraph · n8n · Langfuse · pgvector · Hetzner · Scaleway · OVHcloud · multi-provider LLM routing · GA4 · Meta Ads API · Google Ads API · Shopify · Amazon Seller API

**Key Decisions:**
- Geography scope lock — pivoted from DACH/UK to EU-wide, requiring full rebuild of regulatory framework, payment rails, language stack, and niche targeting. Not a patch — a rebuild.
- Offer architecture — designed 15 sellable agent offers with integration specs, ROI hooks, and a prioritisation matrix for which 4 to lead with first.
- Pricing discipline — kept pricing illustrative with explicit discovery-call validation gates rather than presenting unvalidated figures as market-ready.

**Outcome:** Comprehensive operating manual delivered — 9 sections, 3 appendices, 90-day launch checklist, EUR pricing reference, discovery call question bank. Pre-launch, not yet tested against live clients.

**Capability Signal:** Venture design from first principles; EU regulatory fluency (GDPR, EU AI Act, PSD2/3, DAC7); productisation thinking (bespoke-to-SaaS ladder, white-label channel model); agentic AI stack literacy with EU-residency constraints; GTM discipline with niche selection framework.

---

### Case Study 7 — Automotive Circularity Venture (Enterprise Advisory)

**Status:** Delivered  
**Capability:** Operating Model · GTM · EU Regulatory

**Problem:**
A major European industrial group needed to translate EU regulatory requirements for product circularity into a viable go-to-market blueprint — spanning partner economics, operational structure, compliance design, and commercialisation roadmap across a new venture.

**Approach:**
Architected commercialisation strategy and ecosystem framework for the circularity initiative. Translated EU regulatory requirements into a go-to-market blueprint. Designed partner economics, operational structure, and compliance design as an integrated system rather than separate workstreams.

**Stack:** Operating Model Design · GTM Architecture · EU Regulatory Framework · Ecosystem Design · Commercial Modelling

**Outcome:** Full blueprint delivered — commercialisation strategy, ecosystem framework, partner economics, operational structure, compliance design, and regulatory roadmap.

**Capability Signal:** Enterprise advisory at strategic level; EU regulatory translation into commercial design; ecosystem orchestration; operating model design for new ventures; cross-functional navigation (legal, compliance, commercial, operational).

---

### Case Study 8 — DeFi & Digital Banking Talent Platform (Skyllfull)

**Status:** Delivered  
**Capability:** Co-Founder · Operating Model · Zero-to-One GTM

**Problem:**
Digital assets, DeFi protocols, and digital banking clients lacked a specialised talent platform connecting them with vetted technical and non-technical professionals in an emerging sector with no established recruiting infrastructure.

**Approach:**
Co-founded and scaled a specialised talent platform from zero. Designed the end-to-end operating model — commercial structure, delivery, vendor and partner integrations. Validated product-market fit through pilots and design partnerships with startup and enterprise clients across markets.

**Stack:** Platform Design · Operating Model · Go-to-Market Design · Partnership Architecture · Commercial Modelling

**Outcome:** €250K+ qualified pipeline within 30 days of launch. Zero-to-one go-to-market execution. Pilots with startup and enterprise clients across multiple markets.

**Capability Signal:** Founder-operator execution; zero-to-one go-to-market velocity; operating model design from scratch; commercial modelling; partnership and ecosystem development; validated product-market fit in an emerging sector.

---

## 7. BOOKING CONFIGURATION

**Paid Discovery Call (used on /book and throughout site):**
- Duration: 30 minutes
- Label: "30-Minute Discovery Call"
- Calendly event type: [INSERT CALENDLY LINK]
- Qualifying questions to add in Calendly:
  1. "What's the primary challenge you're looking to solve?" (short text)
  2. "What type of engagement are you exploring — consulting, advisory, fractional, or something else?" (dropdown)
  3. "How did you find me?" (short text)
- Booking window: minimum 24 hours notice, maximum 3 weeks ahead
- Automated reminders: 24h and 1h before

**Pro-Bono Career Re-Entry Session (used on /give-back only):**
- Duration: 30 minutes
- Label: "Career Re-Entry Session — Free"
- Calendly event type: [INSERT SEPARATE CALENDLY LINK]
- Qualifying questions:
  1. "How long have you been out of the workforce?" (short text)
  2. "What field or function are you returning to?" (short text)
- Limited slots: 2–3 per month maximum (set in Calendly availability)
- Clearly labelled FREE — no payment integration

---

## 8. SEO & METADATA

**Page titles:**
- Home: "Payal Ponkshe — Fintech & Payments Executive | AI Venture Builder"
- Work: "Work & Ventures — Payal Ponkshe"
- Experience: "Professional Experience — Payal Ponkshe"
- Services: "Services & Advisory — Payal Ponkshe"
- Book: "Book a Discovery Call — Payal Ponkshe"
- Give-Back: "Career Re-Entry Programme — Payal Ponkshe"
- Insights: "Insights — Payal Ponkshe"
- About: "About — Payal Ponkshe"

**Meta description (Home):**
"Fintech and payments executive with 18+ years across Mastercard, Wirecard, and DeFi. AI venture builder. Consulting and advisory for founders and COOs in regulated financial services. Based in Germany, open to Europe and remote."

**OG image:** Navy background, cream text, "Payal Ponkshe" wordmark — generated as static asset

---

## 9. PERFORMANCE REQUIREMENTS

- Lighthouse score target: 90+ on Performance, Accessibility, Best Practices, SEO
- All images: WebP format, lazy-loaded
- No hero video (keeps load fast)
- Fonts: preloaded via `<link rel="preload">`
- `prefers-reduced-motion`: all Framer Motion animations disabled
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## 10. BUILD ORDER FOR CLAUDE CODE

Build in this sequence — each phase should be deployable to Vercel before moving to next:

**Phase 1:** Design system (Tailwind config, CSS variables, typography, colour tokens)
**Phase 2:** Layout components (Nav, Footer, Section wrapper, Button, Tag pill)
**Phase 3:** Home page (all 7 sections)
**Phase 4:** Work page + Case Study modal
**Phase 5:** Services page
**Phase 6:** Book page (Calendly embed)
**Phase 7:** Give-Back page (separate Calendly embed)
**Phase 8:** Experience page (timeline)
**Phase 9:** About page
**Phase 10:** Insights page (static v1)
**Phase 11:** Mobile responsiveness pass across all pages
**Phase 12:** Framer Motion animations pass (scroll reveals, stat counter, hover states)
**Phase 13:** Performance audit + Vercel deploy

---

## 11. WHAT THIS SITE IS NOT

- Not a SaaS landing page — no sign-up flow, no pricing table, no trial CTA
- Not a consulting firm site — no team page, no office locations, no service packages with fixed pricing
- Not a personal blog — Insights is a curated, slow-publishing thought-leadership hub, not a feed
- Not a creative portfolio — no project screenshots, no mockup galleries, no "look how pretty"
- No emoji anywhere
- No stock photography
- No gradients
- No dark mode
- No icon libraries

---

*End of CLAUDE.md*
