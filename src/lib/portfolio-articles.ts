export type PortfolioBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "steps"; items: Array<{ label: string; body: string }> }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "numbered"; items: Array<{ title: string; body: string }> };

export type PortfolioArticle = {
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  topic: string;
  date: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  pullQuote?: string;
  cta: { body: string; primaryLabel: string; primaryHref: string };
  relatedSlugs: string[];
  faq: Array<{ q: string; a: string }>;
  blocks: PortfolioBlock[];
};

export const portfolioArticles: PortfolioArticle[] = [
  // ─── Article 1 ───────────────────────────────────────────────────────────────
  {
    slug: "ai-content-pipeline-brand-consistency-at-scale",
    title: "AI Content Pipeline: Brand-Consistent Content at Scale",
    deck: "Why your content bottleneck is an architecture problem — and what a multi-model AI pipeline does about it.",
    excerpt: "How a multi-model AI pipeline eliminates the manual content bottleneck — architecture, commercial impact, and what it means for revenue per employee.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "6 min",
    seoTitle: "AI Content Pipeline: Brand-Consistent Content at Scale | Payal Ponkshe",
    seoDescription: "How a multi-model AI pipeline eliminates the manual content bottleneck — architecture, commercial impact, and what it means for revenue per employee.",
    pullQuote: "The businesses that solve this first do not just save time. They build an asymmetric advantage: their content machine runs while their competitors sleep.",
    cta: {
      body: "If you are building or scaling a content operation and want to explore what an AI-first pipeline architecture could look like for your brand",
      primaryLabel: "read about my AI Implementation & Operating Model Design service",
      primaryHref: "/services#ai-implementation",
    },
    relatedSlugs: [
      "carousel-content-platform-ai-architecture-decisions",
      "ai-workflow-automation-sme-revenue-impact",
    ],
    faq: [
      {
        q: "What is an AI content pipeline?",
        a: "An AI content pipeline is an automated system that ingests source content, analyses its structure and performance logic, and reconstructs it within a brand system at scale — replacing manual content production with an orchestrated multi-model workflow.",
      },
      {
        q: "How does AI maintain brand consistency at scale?",
        a: "By separating the static brand contract (typography, colour, tone rules, logo placement) from dynamic per-post content. The brand layer is injected at the system level, not per prompt — so it cannot drift regardless of volume.",
      },
    ],
    blocks: [
      { type: "h2", text: "The content bottleneck most brands refuse to name" },
      { type: "p", text: "Every marketing team has a version of this problem. The content that performs — the posts that actually stop the scroll, drive clicks, and convert — is being produced manually. A human finds it, interprets it, rewrites it, reformats it, checks the brand guidelines, gets it approved, and schedules it. That process takes hours per post. At volume, it breaks." },
      { type: "p", text: "The instinctive response is to hire. Another content manager, another freelancer, another agency. But the bottleneck is not headcount. It is architecture." },
      { type: "p", text: "**The real problem:** viral content intelligence exists. The understanding of why a post works — its structural rhythm, its hook, its information density, its visual grammar — can be extracted, codified, and reapplied. What is missing is the pipeline that does this automatically, at volume, without drifting from brand." },
      { type: "h3", text: "Why this matters commercially" },
      { type: "p", text: "For a B2C brand running content across Instagram, TikTok, and LinkedIn simultaneously, manual content production at scale is not just slow — it is a revenue constraint. Content velocity directly correlates with audience compounding. Brands that publish 3–5 pieces of high-quality content per week outperform those publishing once, not because of individual post quality, but because of compounding reach and algorithmic favour." },
      { type: "p", text: "The businesses that solve this first do not just save time. They build an asymmetric advantage: their content machine runs while their competitors sleep." },
      { type: "h3", text: "What frontier AI actually makes possible now" },
      { type: "p", text: "This is not a theoretical capability. The pipeline described here is live and in production." },
      { type: "p", text: "The architecture works in six stages:" },
      {
        type: "steps",
        items: [
          { label: "1. Ingest", body: "A trend intelligence API surfaces the highest-performing content in a given niche. Not by follower count, but by engagement velocity: content that is growing faster than the creator's baseline. This surfaces genuine signal, not popularity." },
          { label: "2. Analyse", body: "A large language model deconstructs each piece: what is the hook structure? What is the information architecture? What makes slide 3 the one that drives saves? This analysis becomes a strategic brief, not just a transcription." },
          { label: "3. Deconstruct", body: "The structural logic is extracted as a reusable template: slide count, text density per slide, CTA position, emotional register, pacing." },
          { label: "4. Reconstruct", body: "A second model rebuilds the content entirely within the brand system. Different copy. Different visuals. Same strategic logic. The output is on-brand from pixel one — because the brand contract (typography, colour, tone rules, logo placement) is injected as a separate layer, not mixed into the per-slide prompt." },
          { label: "5. Caption + CTA", body: "A third model writes the caption and closing CTA slide, calibrated to the brand's voice and the specific content goal (awareness, conversion, saves)." },
          { label: "6. Queue", body: "Output is written to a scheduling queue. The human gate is editorial review, not production. The team's job becomes curation, not creation." },
        ],
      },
      { type: "p", text: "**The key architectural decision that makes this work:** brand contract separation. The static brand system — typography rules, hex codes, tone guidelines, logo injection method — lives in a Layer 1 prompt that never changes. Dynamic per-slide content lives in Layers 2–4. This means the brand never drifts, regardless of how many posts the pipeline produces. It also means prompt reuse across thousands of renders without quality degradation." },
      { type: "p", text: "**The multi-model fallback approach:** no single model is best at everything. GPT Image handles primary slide rendering. A second model handles CTA slides with logo precision. A third is on standby as fallback. The orchestration layer routes automatically based on task type — the output is consistent; the model is an implementation detail." },
      { type: "h3", text: "The commercial impact" },
      { type: "p", text: "The shift is not cosmetic. When content production moves from a human bottleneck to an automated pipeline:" },
      {
        type: "bullets",
        items: [
          "**Content velocity increases 5–10x** without additional headcount",
          "**Brand consistency improves** — because the brand contract is enforced by the system, not by human memory",
          "**Revenue per employee increases** — content output scales without scaling the team",
          "**Strategic talent is freed** — content managers stop producing and start directing: choosing angles, reviewing outputs, and interpreting what the data is saying",
        ],
      },
      { type: "p", text: "The pipeline described here reduced production time per carousel from approximately 3 hours to under 20 minutes of human review. At 5 posts per week, that is 12+ hours of production work returned to strategy per week, per team." },
      { type: "h3", text: "The blueprint is replicable" },
      { type: "p", text: "This architecture is not proprietary to one content type or one brand. The same pipeline logic — ingest → analyse → deconstruct → reconstruct → queue — applies to:" },
      { type: "bullets", items: ["Product launch sequences", "Thought leadership carousels", "Educational content series", "Competitor response content", "Localised content for multi-market brands"] },
      { type: "p", text: "The parameters change. The architecture does not." },
      { type: "h3", text: "What this means if you are a founder or COO" },
      { type: "p", text: "If your content team is spending more than 60% of their time on production rather than strategy, you have an architecture problem. The solution is not a better brief template or a new social media manager. It is a pipeline." },
      { type: "p", text: "Building one requires decisions about model selection, prompt architecture, brand contract design, fallback logic, and human gate placement. These are design decisions, not just technical ones. Getting them wrong means a pipeline that produces volume without quality — or quality that drifts from brand within weeks." },
      { type: "p", text: "Getting them right means a content operation that compounds." },
    ],
  },

  // ─── Article 2 ───────────────────────────────────────────────────────────────
  {
    slug: "language-learning-app-agentic-build-blueprint",
    title: "One Blueprint. Infinite Markets. How Agentic Coding Changes What a Solo Founder Can Ship.",
    deck: "The build method and scaling blueprint behind a solo founder shipping a production AI app with no engineering team.",
    excerpt: "How agentic coding and a scale-first architecture lets a solo founder ship a production AI app and replicate it across CEFR language markets.",
    topic: "Venture Build",
    date: "2025",
    readTime: "8 min",
    seoTitle: "One Blueprint, Multiple Markets: Agentic Build for Language Learning Apps | Payal Ponkshe",
    seoDescription: "How agentic coding and a scale-first architecture lets a solo founder ship a production AI app and replicate it across CEFR language markets.",
    cta: {
      body: "If you are building a product that needs to scale across markets and want to think through the architecture decisions upfront",
      primaryLabel: "read about my AI Implementation & Operating Model Design service",
      primaryHref: "/services#ai-implementation",
    },
    relatedSlugs: [
      "ai-literacy-platform-senior-demographic-product-strategy",
      "carousel-content-platform-ai-architecture-decisions",
    ],
    faq: [
      {
        q: "What is agentic coding?",
        a: "Agentic coding is a development method where an AI coding agent executes implementation tasks against a human-authored specification. The human role is architect, decision-maker, and QA reviewer — not code writer.",
      },
      {
        q: "Can one person build a production AI app without an engineering team?",
        a: "Yes — with a spec-first approach, quality-gated build sprints, and an agentic coding agent handling implementation. The German exam app described here is live on Google Play, GDPR-compliant, and monetised.",
      },
    ],
    blocks: [
      { type: "h2", text: "The question founders have been asking since AI coding tools appeared" },
      { type: "p", text: "There is a question founders and product operators have been asking since the first AI coding tools appeared: is this real? Can you actually build production software — live, monetised, compliant — without a full engineering team?" },
      { type: "p", text: "The answer is yes. But the method matters enormously." },
      { type: "p", text: "This is the story of a German language exam preparation app built from zero: product strategy, database architecture, content pipeline, AI scoring system, monetisation stack, GDPR compliance, and Google Play launch — with no in-house engineering team. And more importantly, why the blueprint used to build it is designed to scale to every CEFR language market in Europe with minimal additional investment." },
      { type: "h3", text: "The problem this solved" },
      { type: "p", text: "Adult learners preparing for standardised German-language certification exams (CEFR A1–B1) face a specific, underserved problem. The exam formats are highly structured — writing tasks, speaking assessments, reading comprehension with specific rubric rules — but existing tools treat them as generic vocabulary apps. Duolingo is not a CEFR exam tool. Expensive human tutors are the only credible alternative." },
      { type: "p", text: "The gap: an affordable, exam-accurate mobile product that combines authentic test formats with reliable automated scoring and structured feedback. Not a practice vocabulary app. An exam simulation engine." },
      { type: "h3", text: "Why this market matters beyond Germany" },
      { type: "p", text: "Germany is one market. But the CEFR framework governs language certification across 40+ European countries and is the standard for visa applications, employment eligibility, university admission, and professional licensing across the EU. Every language has the same structural exam format. Every market has the same underserved learner." },
      { type: "p", text: "The blueprint built for German A1–B1 is not German-specific. It is a reusable architecture. Swap the language corpus. Adjust the model routing for the target language. Update the content generation pipeline. The infrastructure — Supabase schema, RLS policies, scoring engine, gamification system, subscription stack — does not change." },
      { type: "p", text: "This is the commercial argument for agentic rapid prototyping: build the architecture once, correctly, and replicate it across markets at a fraction of the original build cost." },
      { type: "h2", text: "What agentic coding actually means in practice" },
      { type: "p", text: `"Agentic coding" is not a marketing term for autocomplete. It describes a specific working method:` },
      { type: "steps", items: [
        { label: "Spec first, build second", body: "Every significant decision — database schema, scoring architecture, model routing logic, GDPR erasure flow — was documented in a blueprint before a line of code was written. The coding agent executes against the spec. The human role is architect, QA reviewer, and decision-maker. Not typist." },
        { label: "Quality gates at every stage", body: "Content generation ran in small validated batches before scaling to 850+ questions. Scoring logic was tested against edge cases before deployment. No bulk generation until the small batch proved correct." },
        { label: "The human makes the hard decisions", body: "Hybrid AI + deterministic scoring was a deliberate architectural choice: AI handles content-point detection and qualitative feedback; the backend enforces rubric arithmetic. Pure-LLM grading of writing tasks is unreliable at the arithmetic layer. The model identifies pass/fail correctly but miscalculates point totals. Split the responsibility. The human architect has to know where AI is reliable and where it is not." },
        { label: "Cost optimisation is a design decision", body: "CEFR-based model routing: cheaper model for A1 (lower linguistic complexity), stronger model for A2+. This is not a technical afterthought. It is a commercial design decision that affects unit economics from day one." },
      ]},
      { type: "h3", text: "The production stack — no shortcuts" },
      { type: "p", text: "The app that shipped is not a prototype. It runs on React Native / Expo (Android, Google Play), Supabase with Row-Level Security and Edge Functions, Claude API for content generation and scoring, OpenAI Realtime API for speaking practice, ElevenLabs TTS for native-quality audio, RevenueCat for subscription management, PostHog (EU-hosted) for analytics, Sentry with UUID-only identity (PII-free crash reporting), and a GDPR Art. 17 erasure flow cascading across all third-party services." },
      { type: "p", text: "GDPR compliance was designed in, not bolted on. For a product targeting EU learners, this is not optional — it is a commercial prerequisite for trust and legal operation." },
      { type: "h2", text: "The scaling blueprint" },
      { type: "p", text: "Here is the replication logic for a second language market (French DELF, Spanish DELE, Italian CILS — all CEFR-aligned):" },
      {
        type: "table",
        headers: ["Component", "Rebuild required?", "Effort"],
        rows: [
          ["Supabase schema + RLS", "No", "Zero"],
          ["Scoring engine", "No", "Zero"],
          ["Gamification + subscription stack", "No", "Zero"],
          ["Content generation pipeline", "Partial — prompt language swap", "Low"],
          ["Exam format spec", "Yes — per exam authority", "Medium"],
          ["Audio (TTS)", "Partial — language model swap", "Low"],
          ["App Store submission", "Yes — per market", "Low"],
        ],
      },
      { type: "p", text: "The infrastructure investment happens once. Each subsequent market is primarily a content and localisation problem — not a rebuild. With the agentic coding methodology, a second market can be live within 4–6 weeks of the first." },
      { type: "h3", text: "The commercial implications for founders and operators" },
      { type: "p", text: "If you are building a B2C product that has natural geographic replication — language tools, compliance tools, market-specific fintech products, regulatory education platforms — the question is not 'can we build this?' The question is 'are we building the architecture to scale or the architecture to launch?'" },
      { type: "p", text: "These are different decisions. A launch architecture ships fast and accrues technical debt. A scale architecture takes longer upfront and pays dividends from market two onwards." },
      { type: "p", text: "The exam app was built as a scale architecture from day one: typed database contracts, modular content pipeline, market-agnostic scoring engine, GDPR by design. Not because it was immediately needed. Because the cost of retrofitting those decisions later is prohibitive." },
      { type: "h3", text: "What this means for your product" },
      { type: "p", text: "Agentic rapid prototyping with a scale-first architecture is not just for solo founders. It is the correct approach for any product team that operates in a regulated market where compliance must be built in, has a natural multi-market expansion thesis, wants to maximise revenue per engineer, or is making build-vs-buy decisions on infrastructure components." },
      { type: "p", text: "The method is proven. The tools are production-grade. The question is whether the architecture is designed to compound." },
    ],
  },

  // ─── Article 3 ───────────────────────────────────────────────────────────────
  {
    slug: "ai-workflow-automation-sme-revenue-impact",
    title: "The Automation Gap That Is Costing SMEs More Than They Realise",
    deck: "From natural language to deployable automation — how a three-agent IR pipeline eliminates the translation gap.",
    excerpt: "Natural language to deployable automation — how a three-agent pipeline eliminates the gap between workflow intent and production automation.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
    seoTitle: "AI Workflow Automation for SMEs: The Translation Gap Costing You Hours Every Week | Payal Ponkshe",
    seoDescription: "Natural language to deployable automation — how a three-agent pipeline eliminates the gap between workflow intent and production automation.",
    cta: {
      body: "If you are evaluating AI workflow automation for your operations and want an objective assessment of what to build versus buy",
      primaryLabel: "read about my AI Implementation & Operating Model Design service",
      primaryHref: "/services#ai-implementation",
    },
    relatedSlugs: [
      "ai-content-pipeline-brand-consistency-at-scale",
      "agentic-commerce-eu-regulatory-opportunity",
    ],
    faq: [
      {
        q: "What is the ROI of AI workflow automation for SMEs?",
        a: "A single automated workflow replacing 8–12 minutes of manual work per transaction, at 50 transactions per week, recovers 7–10 hours of operational capacity weekly — worth €10,000–15,000 per year at typical EU operational costs.",
      },
      {
        q: "What is a platform-agnostic workflow IR schema?",
        a: "An Intermediate Representation schema decouples workflow intent from deployment target. The same workflow logic can compile to n8n, Make, or Zapier without redesigning the underlying automation.",
      },
    ],
    blocks: [
      { type: "h2", text: "The automation gap that is costing SMEs more than they realise" },
      { type: "p", text: "Most small and mid-size business operators know they should be automating more. They can describe exactly what needs to happen: 'When a lead books a viewing, update the CRM, notify the agent, and send the confirmation email.' The logic is clear. The intent is clear." },
      { type: "p", text: "And then nothing happens. Because translating that sentence into a working automation requires choosing a platform, understanding its logic model, building a multi-step workflow, connecting APIs, handling errors, and maintaining it when something breaks." },
      { type: "p", text: "The gap between workflow intent and deployed automation is where enormous amounts of operational capacity disappear." },
      { type: "h3", text: "This is not a technology problem. It is a translation problem." },
      { type: "p", text: "The tools exist. Zapier, Make, n8n — mature, capable platforms. The missing layer is translation: from what a business operator describes in plain language to a production-ready, deployable workflow." },
      { type: "p", text: "This is exactly the problem a natural language workflow generation platform solves. The user describes what they want. The system — a three-agent AI pipeline — translates that description into a structured, validated, deployable automation. No workflow builder interface. No API documentation to read. No logic errors to debug." },
      { type: "h2", text: "How the three-agent architecture works" },
      { type: "p", text: "The system works in three sequential stages, each handled by a specialised AI agent:" },
      {
        type: "steps",
        items: [
          { label: "Agent 1 — Intent Capture", body: "Takes the user's natural language description and produces a structured intent model. What triggers the workflow? What are the steps? What data needs to pass between systems? What are the error conditions? This is not a simple parse — it is a reasoning step that surfaces ambiguities and asks clarifying questions before proceeding." },
          { label: "Agent 2 — Workflow Design", body: "Takes the structured intent and produces a platform-agnostic Intermediate Representation (IR) — a typed schema that describes the workflow in terms of triggers, actions, conditions, and data mappings, independent of any specific automation platform. This IR is the core architectural decision: it decouples intent from deployment target, meaning the same workflow can be deployed to n8n, Make, or Zapier without redesigning the logic." },
          { label: "Agent 3 — Deployment", body: "Takes the IR and produces a deployment-ready workflow configuration for the target platform. Validates the output against known error patterns. Returns a deployable artifact." },
        ],
      },
      { type: "p", text: "The human reviews and deploys. The entire translation — from natural language to deployment-ready workflow — takes minutes, not hours." },
      { type: "h3", text: "The Intermediate Representation: why it matters commercially" },
      { type: "p", text: "The IR schema is not a technical detail. It is the business moat." },
      { type: "p", text: "Without an IR layer, a workflow generation system is locked to a single platform. Build for n8n, and every Make user needs a different product. With an IR layer, the platform is an output parameter. The same intent-capture and design logic works across any automation platform the IR can compile to." },
      { type: "p", text: "For a business operator, this means: your automation logic is not trapped in any single tool. Your workflows are portable. When you switch platforms — or when your vendor changes pricing — your automation investment does not start from zero." },
      { type: "h3", text: "The direct commercial impact for SMEs" },
      { type: "p", text: "For a real estate agency running 50+ property viewings per week: manual CRM update, notification, and confirmation sequence takes 8–12 minutes per booking. At 50 bookings per week that is 7–10 hours of administrative work. Automated: under 30 seconds per booking, zero human time. At a blended operational cost of €30/hour: €210–300/week recovered, €10,000–15,000/year." },
      { type: "p", text: "This is a single workflow. Most businesses have 10–20 automatable processes of similar complexity. The compounding effect of eliminating manual work across all of them is not incremental — it is structural." },
      { type: "p", text: "Revenue per employee increases not because employees work harder, but because the repetitive operational layer is handled by systems. Human capacity moves to judgment, relationships, and growth." },
      { type: "h3", text: "What makes this different from just using Zapier" },
      { type: "p", text: "Zapier and similar tools require the operator to understand the platform's logic model. The operator becomes the translator. For technically confident users, this is fine. For the majority of business operators, it is a barrier that never gets crossed." },
      { type: "p", text: "A natural language generation layer removes the translation burden entirely. The operator describes the outcome. The system designs and builds the workflow. The operator reviews and approves. This is the correct division of labour: humans are good at describing what they want; AI systems are increasingly good at translating intent into structured logic." },
      { type: "h3", text: "The frontier model capability that makes this viable now" },
      { type: "p", text: "Three developments in large language model capability converged to make this architecture viable in 2024–2025:" },
      {
        type: "numbered",
        items: [
          { title: "Structured output reliability", body: "Models can now produce typed JSON schemas consistently, enabling the IR to be generated reliably rather than probabilistically." },
          { title: "Multi-step reasoning", body: "Agent-to-agent handoffs with validated contracts reduce hallucination at each stage, because each agent has a narrower, better-defined job." },
          { title: "Tool-use and API knowledge", body: "Models trained on platform documentation can generate valid platform-specific configurations with high accuracy." },
        ],
      },
      { type: "p", text: "None of these capabilities existed reliably 18 months ago. The architecture described here would not have been viable. It is viable now." },
    ],
  },

  // ─── Article 4 ───────────────────────────────────────────────────────────────
  {
    slug: "agentic-commerce-eu-regulatory-opportunity",
    title: "Agentic Commerce Is Coming to Europe. The Regulatory Gap Is an Opportunity, Not a Barrier.",
    deck: "Why the EU regulatory stack is a competitive moat for agentic commerce businesses, not a barrier.",
    excerpt: "The EU AI Act and GDPR are not barriers to agentic commerce — they are qualification criteria. Here is the commercial architecture for EU-native AI businesses.",
    topic: "Fintech & Payments",
    date: "2025",
    readTime: "7 min",
    seoTitle: "Agentic Commerce in Europe: Why the EU Regulatory Stack is a Competitive Moat | Payal Ponkshe",
    seoDescription: "The EU AI Act and GDPR are not barriers to agentic commerce — they are qualification criteria. Here is the commercial architecture for EU-native AI businesses.",
    pullQuote: "The EU regulatory stack is not a barrier to agentic commerce. It is a competitive moat for the businesses that understand it early.",
    cta: {
      body: "If you are building or advising an EU business exploring agentic commerce and want to think through the regulatory, technical, and commercial architecture",
      primaryLabel: "read about my Fractional COO & Strategic Advisory service",
      primaryHref: "/services#fractional-advisory",
    },
    relatedSlugs: [
      "ai-workflow-automation-sme-revenue-impact",
      "ai-content-pipeline-brand-consistency-at-scale",
    ],
    faq: [
      {
        q: "What is agentic commerce?",
        a: "Agentic commerce is a model where AI agents navigate, compare, and transact on behalf of users — querying live inventory, pricing, and availability through standardised integrations like MCP, rather than requiring users to navigate interfaces themselves.",
      },
      {
        q: "How does the EU AI Act affect AI automation businesses?",
        a: "EU-native businesses that build GDPR, EU AI Act, and PSD2/3 compliance into their architecture from day one have a trust and credibility advantage over US platforms in the EU SME market — the regulation is a qualification criterion, not a barrier.",
      },
    ],
    blocks: [
      { type: "h2", text: "Agentic commerce is coming to Europe" },
      { type: "p", text: "In the United States, agentic commerce is already a market category. AI agents that browse, compare, negotiate, and transact on behalf of users are in production at scale. Klarna's AI assistant handles 2.3 million conversations per month. Shopify's Sidekick is embedded in merchant dashboards globally. The commerce layer is becoming programmable." },
      { type: "p", text: "In Europe, the conversation is different. Founders and operators hear 'EU AI Act' and think compliance burden. They hear 'GDPR' and think friction. They hear 'PSD2' and think complexity." },
      { type: "p", text: "This framing is wrong. The EU regulatory stack is not a barrier to agentic commerce. It is a competitive moat for the businesses that understand it early." },
      { type: "h3", text: "What agentic commerce actually means" },
      { type: "p", text: "Agentic commerce is not a chatbot on a product page. It is a fundamentally different interaction model between buyers, sellers, and the systems connecting them." },
      { type: "p", text: "In traditional commerce, the human navigates: searches, filters, compares, decides, and transacts. In agentic commerce, the agent navigates on behalf of the human: receives intent, queries availability, compares options against preferences, negotiates or applies offers, and executes the transaction — presenting the human with a decision, not a journey." },
      { type: "p", text: "**For merchants, this means:** your product is no longer discovered through a search bar. It is discovered by an agent querying for availability that matches a buyer's stated intent. If your catalogue is not agent-readable, you are invisible to a growing share of purchasing intent." },
      { type: "p", text: "This is the MCP (Model Context Protocol) moment for commerce. MCP allows AI models to query live data — inventory, pricing, availability, personalised offers — through standardised integrations. A Shopify store with MCP integration is queryable by any AI agent that supports the protocol. A store without it is not." },
      { type: "h2", text: "The EU regulatory stack as a strategic advantage" },
      { type: "p", text: "The EU AI Act, GDPR, PSD2/3, and related regulations create a compliance overhead that large US platforms are slow to address. Their global codebases are not built for EU-specific data residency, consent management, and transparency requirements." },
      { type: "p", text: "This creates a window. EU-native AI automation businesses that build compliance in from day one can serve the EU SME market with a credibility and trust advantage that US platforms cannot easily replicate. The regulation is not the barrier — it is the qualification criterion." },
      { type: "p", text: "The businesses that will capture the EU agentic commerce market are not the ones with the best AI technology. They are the ones with the best AI technology AND the regulatory architecture to deploy it legally, transparently, and at scale across 27 markets." },
      { type: "h2", text: "The eight commerce segments where agentic AI creates immediate ROI" },
      { type: "p", text: "Not all commerce segments are equally ready for agentic AI. The following eight have the highest near-term return on automation investment:" },
      {
        type: "numbered",
        items: [
          { title: "B2C Retail (Shopify/WooCommerce merchants)", body: "Personalised product recommendations, dynamic pricing, abandoned cart recovery, returns processing. Agents can handle 60–80% of customer service interactions without human escalation." },
          { title: "B2B Wholesale", body: "Order management, reorder triggers, inventory-based pricing, supplier negotiation. High transaction value, high repetition, low tolerance for error — exactly where validated agentic systems create trust." },
          { title: "Marketplaces", body: "Seller onboarding, listing optimisation, category management, performance monitoring. The coordination overhead of marketplace operations is primarily a data problem that agents solve well." },
          { title: "Subscription Commerce", body: "Churn prediction, renewal negotiation, upgrade triggers, usage-based offer generation. LTV optimisation through behavioural signals is a natural agentic use case." },
          { title: "Cross-Border Commerce", body: "VAT calculation, customs documentation, localised pricing, payment rail selection (PSD2-compliant). The friction of EU cross-border commerce is almost entirely automatable." },
          { title: "Financial Services Distribution", body: "Embedded finance offers triggered by transaction signals, insurance bundling, BNPL eligibility assessment. PSD2 open banking data makes this possible; agentic systems make it scalable." },
          { title: "Real Estate & High-Value Transactions", body: "Viewing scheduling, document collection, comparative market analysis, offer management. High-touch, high-value, documentation-heavy — a natural fit for orchestrated agentic workflows." },
          { title: "Professional Services Procurement", body: "Brief-to-shortlist-to-contract workflows for marketing agencies, consulting firms, legal services. The RFP process is a solved problem for a well-designed agentic system." },
        ],
      },
      { type: "h2", text: "The three-layer revenue model for EU agentic commerce businesses" },
      { type: "p", text: "Building an agentic commerce business in Europe is not just a technology play. It is a commercial architecture decision. The businesses that scale combine three revenue layers:" },
      {
        type: "steps",
        items: [
          { label: "Layer 1 — Services", body: "Implementation and integration work for the first 10–15 clients. High margin, immediate cash flow, fast market learning. This is how you validate your agent configurations against real business data." },
          { label: "Layer 2 — Subscriptions", body: "Productise the configurations that proved out in Layer 1. Monthly recurring revenue for ongoing agent operation, monitoring, and optimisation. This is where the business compounds." },
          { label: "Layer 3 — White-label / Channel", body: "License your EU-compliant agent stack to agencies, consultancies, and platform partners who serve your target market. This is where the revenue curve inflects." },
        ],
      },
      { type: "p", text: "Most founders try to skip to Layer 2 or Layer 3 before the configurations are validated. The result is a product built on assumptions rather than evidence. Layer 1 is not a consulting business. It is a research and validation engine funded by client revenue." },
      { type: "h3", text: "What the EU SME market needs right now" },
      { type: "p", text: "The EU SME market — 25 million businesses, 99% of all EU enterprises — is not waiting for a perfect agentic commerce platform. It is waiting for someone who can explain what it means for their specific business, integrate it within their existing stack, and demonstrate ROI before asking for a long-term commitment." },
      { type: "p", text: "The businesses that win in this market will not be the ones with the most sophisticated AI. They will be the ones who can translate frontier model capability into a specific, measurable improvement in a real business operation — and do it in a way that is compliant, explainable, and trusted." },
    ],
  },

  // ─── Article 5 ───────────────────────────────────────────────────────────────
  {
    slug: "ai-literacy-platform-senior-demographic-product-strategy",
    title: "The Most Overlooked Product Strategy Mistake in AgeTech: Building for Passivity",
    deck: "Why every major AgeTech product made the same strategic mistake — and what the contribution-first alternative looks like.",
    excerpt: "Why building for passivity is the wrong assumption — and how a contribution-first platform for adults 60+ opens a genuinely underserved market.",
    topic: "Venture Build",
    date: "2025",
    readTime: "6 min",
    seoTitle: "The Overlooked Product Strategy Mistake in AgeTech | Payal Ponkshe",
    seoDescription: "Why building for passivity is the wrong assumption — and how a contribution-first platform for adults 60+ opens a genuinely underserved market.",
    pullQuote: "Products built around the assumption that older adults are knowledge contributors design for agency. These are fundamentally different products. And the market for the second barely exists.",
    cta: {
      body: "If you are building a zero-to-one product in an underserved market and want to pressure-test your positioning and architecture decisions before committing to a full build",
      primaryLabel: "read about my AI Implementation & Operating Model Design service",
      primaryHref: "/services#ai-implementation",
    },
    relatedSlugs: [
      "language-learning-app-agentic-build-blueprint",
      "carousel-content-platform-ai-architecture-decisions",
    ],
    faq: [
      {
        q: "What is the contribution economy for older adults?",
        a: "The contribution economy positions adults 60+ as knowledge contributors — sharing expertise, mentorship, and personal history — rather than passive recipients of care or companionship technology.",
      },
      {
        q: "What is the market opportunity in AgeTech AI?",
        a: "Adults 60+ are the fastest-growing internet user segment and control approximately 50% of EU consumer spending. Most existing AgeTech products are designed for passivity — the contribution-first category has minimal competition and significant unmet demand.",
      },
    ],
    blocks: [
      { type: "h2", text: "The most overlooked product strategy mistake in AgeTech: building for passivity" },
      { type: "p", text: "Every major technology company building for the 60+ demographic has made the same strategic error. They have built tools that position older adults as recipients: of reminders, of monitoring, of companionship, of care management." },
      { type: "p", text: "The market assumption embedded in this positioning is wrong. And the evidence for the alternative is clearer than most founders realise." },
      { type: "h3", text: "The demographic reality that most product teams are ignoring" },
      { type: "p", text: "Adults 60+ represent the fastest-growing demographic globally and the fastest-growing segment of internet users. By 2030, there will be 1.4 billion people aged 60+ worldwide. In Europe alone, they control approximately 50% of all consumer spending." },
      { type: "p", text: "This is not a niche. It is a majority market that most technology products have designed for incorrectly." },
      { type: "p", text: "The design error is not technical. It is philosophical. Products built around the assumption that older adults are primarily care-receivers design for dependency. Products built around the assumption that older adults are knowledge contributors — accumulated expertise, wisdom, professional history, life experience — design for agency." },
      { type: "p", text: "These are fundamentally different products. And the market for the second barely exists." },
      { type: "h2", text: "What the contribution economy looks like in practice" },
      { type: "p", text: "The insight that drives a contribution-first platform for adults 60+ is straightforward: what most older adults want is not a tool that helps them receive — it is a platform that helps them give." },
      { type: "p", text: "Give knowledge. Give perspective. Give mentorship. Give the benefit of 40 years of domain expertise to people who are 20 years into their careers. Give family history to grandchildren who will outlive everyone who remembers it." },
      { type: "p", text: "The contribution economy for older adults is not a metaphor. It is a product category with measurable demand and almost no supply." },
      { type: "p", text: "A platform built on this insight structures itself entirely differently from a care-receiver product:" },
      {
        type: "bullets",
        items: [
          "**AI Literacy Path** — not 'learn to use AI tools' but 'understand AI well enough to direct it, evaluate it, and deploy it in service of what you already know how to do'",
          "**Story Capsules** — audio and written legacy recording that preserves professional expertise, personal history, and family knowledge in a structured, shareable format",
          "**Help Board** — a community feature where older adults offer their knowledge to others who need it. Not ask for help. Give it.",
          "**Circles** — moderated peer communities organised around shared expertise, not shared age",
        ],
      },
      { type: "p", text: "The product architecture, UX decisions, and community design all derive from the single strategic choice: contributor, not recipient." },
      { type: "h2", text: "Why this matters for product strategy more broadly" },
      { type: "p", text: "The Wyngs case study is not just an AgeTech story. It is a template for a specific type of product strategy decision that applies across many markets." },
      { type: "p", text: "**The contrarian positioning test:** What does the entire competitive landscape assume about its users? What happens if that assumption is wrong?" },
      {
        type: "bullets",
        items: [
          "In AgeTech: the landscape assumes passivity. The contrarian position is agency.",
          "In enterprise software: the landscape assumes complexity tolerance. The contrarian position is radical simplicity.",
          "In language learning: the landscape assumes gamification drives retention. The contrarian position is exam-accuracy drives trust.",
        ],
      },
      { type: "p", text: "Identifying the shared assumption and testing the opposite is one of the most reliable frameworks for finding genuine white space — not differentiation within a category, but a new category definition." },
      { type: "h2", text: "The zero-to-one build architecture" },
      { type: "p", text: "Building Wyngs required four simultaneous workstreams managed without a full team:" },
      {
        type: "steps",
        items: [
          { label: "Workstream 1 — Curriculum architecture", body: "A 10-chapter AI literacy path, each chapter a standalone React JSX component, with verified sourcing for all factual claims. The verification standard was established after a fabricated detail was caught mid-build. The quality gate was not added — it was retroactively enforced and documented as a non-negotiable standard." },
          { label: "Workstream 2 — Feature architecture", body: "Story Capsules, Help Board, and Circles, each designed as standalone modules with defined data models before any implementation. No feature was connected to the core app before its own data model was fully specified. This prevented the accumulating technical debt that kills solo builds." },
          { label: "Workstream 3 — Automation pipeline", body: "A 21-node n8n workflow for content automation and a Facebook Graph API posting pipeline, built to a repeatable weekly schedule. The pipeline produces the content; the founder directs the strategy." },
          { label: "Workstream 4 — Investor positioning", body: "A systems-failure + network-effect investment thesis, designed to answer the specific question that pre-seed investors ask: why will this compound? The answer: because the network effect of a contribution platform is self-reinforcing. Knowledge given attracts knowledge seekers. Knowledge seekers attract more contributors." },
        ],
      },
      { type: "h3", text: "What this means for founders building in underserved markets" },
      { type: "p", text: "The pattern here is generalisable:" },
      {
        type: "numbered",
        items: [
          { title: "Identify the shared assumption", body: "What has the market assumed about its users? Make it explicit before challenging it." },
          { title: "Test the opposite", body: "Not as a positioning claim but as a genuine product hypothesis. Build evidence before committing to the full build." },
          { title: "Build systems-first", body: "Content architecture, feature data models, automation pipelines — before building individual features or chapters." },
          { title: "Design the investor thesis in parallel", body: "With the product, not after it. The commercial logic should inform the architecture from day one." },
        ],
      },
      { type: "p", text: "The AgeTech market is not the only place this pattern applies. The same logic works in any market where the dominant design assumption is out of step with the actual behaviour and aspirations of the users being served." },
    ],
  },

  // ─── Article 6 ───────────────────────────────────────────────────────────────
  {
    slug: "carousel-content-platform-ai-architecture-decisions",
    title: "The Architecture Decision That Separates AI Content Tools from AI Content Systems",
    deck: "The three decisions that determine whether you have an AI content system or an AI content demo.",
    excerpt: "Typed pipeline contracts, variation control, and build sequencing — the decisions that determine whether your AI product scales or breaks.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "7 min",
    seoTitle: "AI Content Tool vs AI Content System: The Three Architecture Decisions That Separate Them | Payal Ponkshe",
    seoDescription: "Typed pipeline contracts, variation control, and build sequencing — the decisions that determine whether your AI product scales or breaks.",
    pullQuote: "The distance between AI content tool and AI content system is entirely architectural.",
    cta: {
      body: "If you are designing an AI-native product and want to think through the architecture decisions before committing to a build approach",
      primaryLabel: "read about my AI Implementation & Operating Model Design service",
      primaryHref: "/services#ai-implementation",
    },
    relatedSlugs: [
      "ai-content-pipeline-brand-consistency-at-scale",
      "language-learning-app-agentic-build-blueprint",
    ],
    faq: [
      {
        q: "What are typed pipeline contracts in AI systems?",
        a: "Typed pipeline contracts are validated data schemas passed between AI pipeline stages. They replace implicit string-passing with structured, validated handoffs — enabling independent retries, caching, and clean component replacement without rebuilding surrounding logic.",
      },
      {
        q: "What separates an AI content tool from an AI content system?",
        a: "Clean separations of responsibility: where variation control lives, how data moves between stages, and which complexity is deferred with an explicit migration seam versus built now.",
      },
    ],
    blocks: [
      { type: "h2", text: "The architecture decision that separates AI content tools from AI content systems" },
      { type: "p", text: "Most AI content tools are prompt wrappers. They take a description, call a model, and return an output. This works for one-off generation. It does not work for a platform — a product where thousands of users generate content at different quality levels, with different brand requirements, expecting consistent output, at scale." },
      { type: "p", text: "The distance between 'AI content tool' and 'AI content system' is entirely architectural. The technology is the same. The decisions around how that technology is structured are what determine whether you have a product or a demo." },
      { type: "p", text: "This article explains the three architectural decisions that define the difference — using the build of Spaarker, an AI carousel generation platform, as the case study." },
      { type: "h3", text: "The problem Spaarker solves" },
      { type: "p", text: "Content creators with an existing audience have a production problem, not an ideas problem. They know what they want to say. They understand their audience. They have a point of view." },
      { type: "p", text: "What they lack is time. The carousel format — multi-slide posts on Instagram and TikTok — consistently outperforms single images on engagement and saves. It is the highest-converting organic format for knowledge-based creators. And it takes 3–5 hours to produce well." },
      { type: "p", text: "No purpose-built tool exists for it. Creators stitch together Canva for design, ChatGPT for copy, a scheduler for distribution, and manual analytics for feedback. Each tool is disconnected. The process is not repeatable. Quality is inconsistent." },
      { type: "p", text: "Spaarker's product thesis: one tool that takes a creator's idea or a piece of existing content and produces a complete, branded, publish-ready carousel in under 15 minutes." },
      { type: "p", text: "**The single test every feature decision passes or fails:** does this get a creator to publish-ready in 15 minutes? If not, it does not ship in v1." },
      { type: "h2", text: "Architectural decision 1: The variation dial" },
      { type: "p", text: "The core user experience question for any AI generation tool is: how much control does the user have over the output? Too little control and the output is AI-generated content that does not sound like the creator. Too much control and the tool becomes a manual editor." },
      { type: "p", text: "The variation dial is the solution to this tension. A 0–5 control that maps to a spectrum from 'closely inspired by the source' to 'completely reimagined with the same strategic logic.'" },
      { type: "p", text: "The architectural insight is where the dial lives: **only the Creative Director node knows what the dial level means.** The Deconstruct node (which analyses the source content) and the Reconstruct node (which generates the new carousel) remain level-agnostic. They receive a creative brief from the Creative Director that expresses the level as specific per-axis freedoms: how much the copy can deviate, whether the narrative structure can change, whether the layout can vary, whether the slide count can change." },
      { type: "p", text: "This keeps the system explainable to users while keeping the underlying nodes clean and reusable. The dial expands into vectors — the Creative Director is the only place complexity lives." },
      { type: "h2", text: "Architectural decision 2: Typed handoff contracts" },
      { type: "p", text: "The second decision: how do data and instructions move between pipeline stages?" },
      { type: "p", text: "The naive approach is to pass a prompt from one model to the next. This works for two stages. It breaks down at three or more, because errors compound: a poorly structured output from Model A becomes an ambiguous input to Model B, which produces an unreliable output that confuses Model C." },
      { type: "p", text: "Typed handoff contracts solve this. Three contract types structure the entire pipeline:" },
      {
        type: "steps",
        items: [
          { label: "Blueprint", body: "The strategic analysis of the source content: hook structure, information architecture, emotional register, pacing, key claims. The Blueprint is the Creative Director's brief to the reconstruction stage." },
          { label: "GenerationPlan", body: "The per-slide specification produced by the Creative Director: exactly what each slide should contain, in what structure, at what variation level. No ambiguity." },
          { label: "RenderedCarousel", body: "The final output: one object per slide, with text, layout specification, and image generation instructions." },
        ],
      },
      { type: "p", text: "At each boundary, the pipeline runs: Validate → Repair → Escalate. If a Blueprint has a malformed field, the system attempts repair before failing. If repair fails, it escalates to a human review queue rather than silently degrading." },
      { type: "p", text: "**The commercial value of typed contracts:** individual slides become independently retriable. If slide 4 fails to render correctly, the system retries slide 4. It does not regenerate the entire carousel. This matters at scale — where a 10% per-slide failure rate without retry logic means 65% of 10-slide carousels have at least one failure." },
      { type: "p", text: "Content-addressed caching is the other benefit: a source piece deconstructed into a Blueprint can be reused across multiple variation levels. The expensive step (deconstruction and analysis) happens once. The variation step is fast. A creator can explore dial levels 1 through 5 on a single source piece without paying the full pipeline cost each time." },
      { type: "h2", text: "Architectural decision 3: Build for v2 from day one" },
      { type: "p", text: "The third decision is about what you do not build yet." },
      { type: "p", text: "An external architectural review recommended moving to Temporal or Inngest — a production-grade orchestration engine — immediately. The counter-decision: ship v1 on n8n with typed contracts and per-slide job architecture, and defer the code-native engine to v2 when concurrency demands it." },
      { type: "p", text: "The reason: the seam for that migration is designed now. The typed contracts mean that swapping the orchestration engine in v2 is a deployment change, not a logic change. The pipeline logic lives in the contracts and the node implementations, not in the orchestration layer. The orchestration layer is replaceable." },
      { type: "p", text: "This is the distinction between **technical debt** and **deferred complexity**. Technical debt is building something you know is wrong. Deferred complexity is building the right abstraction at the right time — with the explicit seam that makes the future migration clean." },
      { type: "p", text: "n8n can handle 10,000 carousel generations per month reliably. The product does not have 10,000 monthly generations yet. Temporal is the right engine for 100,000+ generations. Building for 100,000 generations before proving 1,000 is not engineering excellence — it is premature optimisation funded by build time that should be spent on the product." },
      { type: "h2", text: "What these three decisions have in common" },
      { type: "p", text: "Each decision separates responsibility cleanly: the dial separates variation control from generation logic; typed contracts separate stage outputs from stage logic; build sequencing separates current complexity from future complexity." },
      { type: "p", text: "This is the principle that separates AI content systems from AI content tools: **clean separations that allow individual components to be understood, tested, replaced, and scaled independently.**" },
      { type: "p", text: "A system built on clean separations can be operated by one person at small scale and handed to a team at large scale. The architecture does not change. The team grows into it." },
      { type: "h3", text: "The implications for founders building AI-native products" },
      { type: "p", text: "If you are designing an AI-native product, the three decisions described here apply beyond content generation:" },
      {
        type: "numbered",
        items: [
          { title: "Where does complexity live?", body: "One node should own the difficult reasoning. The others should be level-agnostic and clean." },
          { title: "What do your pipeline contracts look like?", body: "Typed, validated, and documented — or implicit strings passed between prompts?" },
          { title: "What are you deferring, and have you designed the seam?", body: "The answer to this question determines whether your v2 is a migration or a rebuild." },
        ],
      },
      { type: "p", text: "These are product and architecture decisions, not engineering decisions. They belong in the founder's thinking before the first line of code is written." },
    ],
  },
];

export function getPortfolioArticle(slug: string): PortfolioArticle | undefined {
  return portfolioArticles.find((a) => a.slug === slug);
}
