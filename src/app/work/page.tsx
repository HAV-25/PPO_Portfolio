"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Tag from "@/components/ui/StatusTag";
import StackIcon from "@/components/ui/StackIcon";
import Link from "next/link";

type StatusVariant = "live" | "build" | "prototype" | "concept" | "delivered";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  status: StatusVariant;
  statusLabel: string;
  capability: string;
  group: "ai" | "enterprise" | "framework";
  problem: string;
  approach: string;
  stack: string[];
  keyDecisions: string[];
  outcome: string;
  capabilitySignal: string;
};

const projects: Project[] = [
  // ─── Enterprise Systems ───────────────────────────────────────────────────
  {
    id: "thyssenkrupp",
    // ⚠ CONFIRM: client naming approved for public use (named in internal brief as ThyssenKrupp)
    title: "Automotive circularity operating model — ThyssenKrupp",
    subtitle: "Commercialisation strategy for an industrial circularity venture: partner economics, operational structure, and EU compliance designed as one system.",
    status: "delivered",
    statusLabel: "Delivered",
    capability: "Operating Model · GTM Architecture · EU Regulatory",
    group: "enterprise",
    problem:
      "A major European industrial group needed to translate EU regulatory requirements for product circularity into a viable go-to-market blueprint — spanning partner economics, operational structure, compliance design, and commercialisation roadmap across a new venture.",
    approach:
      "Architected commercialisation strategy and ecosystem framework for the circularity initiative. Translated EU regulatory requirements into a go-to-market blueprint. Designed partner economics, operational structure, and compliance design as an integrated system rather than separate workstreams.",
    stack: ["Operating Model Design", "GTM Architecture", "EU Regulatory Framework", "Ecosystem Design", "Commercial Modelling"],
    keyDecisions: [
      "Integrated design over sequential workstreams — partner economics, operational structure, and compliance were designed as a single system to avoid incentive misalignment at go-live",
      "Regulatory-first commercialisation — EU circularity requirements were treated as the commercial brief, not a compliance constraint layered on top",
    ],
    outcome:
      "Full blueprint delivered — commercialisation strategy, ecosystem framework, partner economics, operational structure, compliance design, and regulatory roadmap.",
    capabilitySignal:
      "Enterprise advisory at strategic level; EU regulatory translation into commercial design; ecosystem orchestration; operating model design for new ventures; cross-functional navigation (legal, compliance, commercial, operational).",
  },
  {
    id: "skyllfull",
    title: "Skyllfull — DeFi & digital banking talent platform",
    subtitle: "Co-founded and scaled from zero: end-to-end operating model, €250K+ qualified pipeline within 30 days of launch.",
    status: "delivered",
    statusLabel: "Delivered",
    capability: "Operating Model · Commercial Architecture · Zero-to-One GTM",
    group: "enterprise",
    problem:
      "Digital assets, DeFi protocols, and digital banking clients lacked a specialised talent platform connecting them with vetted technical and non-technical professionals in an emerging sector with no established recruiting infrastructure.",
    approach:
      "Co-founded and scaled a specialised talent platform from zero. Designed the end-to-end operating model — commercial structure, delivery, vendor and partner integrations. Validated product-market fit through pilots and design partnerships with startup and enterprise clients across markets.",
    stack: ["Platform Design", "Operating Model", "Go-to-Market Design", "Partnership Architecture", "Commercial Modelling"],
    keyDecisions: [
      "Niche first, then breadth — locked to DeFi/Web3/digital banking to build credibility and pipeline density before expanding; validated in 30 days",
      "Design partnerships as GTM — used design partnerships (not paid pilots) to reduce friction for early enterprise clients and generate evidence faster",
    ],
    outcome:
      "€250K+ qualified pipeline within 30 days of launch. Zero-to-one go-to-market execution. Pilots with startup and enterprise clients across multiple markets.",
    capabilitySignal:
      "Founder-operator execution; zero-to-one go-to-market velocity; operating model design from scratch; commercial modelling; partnership and ecosystem development; validated product-market fit in an emerging sector.",
  },

  // ─── AI Systems ──────────────────────────────────────────────────────────
  {
    id: "ai-content-pipeline",
    title: "Content intelligence & reconstruction engine",
    subtitle: "Live production pipeline: ingests high-performing content, deconstructs why it works, and rebuilds it inside a locked brand system — across three AI models with fallback chains.",
    status: "live",
    statusLabel: "Live",
    capability: "AI Pipeline Architecture · Prompt Engineering · Production Automation",
    group: "ai",
    problem:
      "Viral content performs well but repurposing it manually at scale is bottlenecked by human effort and lacks brand consistency. The gap was a fully automated pipeline that could ingest viral slideshows, understand why they work, and reconstruct them at volume in a proprietary brand system — without legal/IP exposure or platform detection risk.",
    approach:
      "Designed and built the end-to-end system architecture from scratch — database schema, n8n workflow orchestration, AI prompt engineering across three models, brand system codification, and multi-model fallback logic. Structured as a multi-stage pipeline (Ingest → Analyse → Deconstruct → Reconstruct → Caption → CTA → Queue) with explicit human gates and strategic guardrails injected per-slide from viral analysis.",
    stack: ["n8n", "Claude API", "GPT Image 1", "GPT Image 2", "Gemini Flash", "Supabase", "React Native", "Next.js", "Postiz", "RevenueCat", "Virlo API"],
    keyDecisions: [
      "Brand contract vs per-slide payload separation — decoupling the static brand system from dynamic slide JSON enabled prompt reuse across thousands of renders without quality drift",
      "Logo injection via PNG image input — discovered that passing the wordmark as an actual image input produces pixel-perfect fidelity, eliminating post-render compositing",
      "Defensive type-checking for text blocks + CTA exclusion — both required explicit guards to prevent workflow crashes at scale",
    ],
    outcome:
      "V1 live — reconstruction workflow processing carousels end-to-end including automated CTA outro generation. Two queues validated end-to-end. CTA prompt at brand spec, captions written to processing queue.",
    capabilitySignal:
      "Full-stack AI pipeline architecture; multi-model orchestration with fallback chains; prompt engineering at systems level; production n8n workflow engineering; cross-functional product thinking including IP risk, platform detection, EU data residency.",
  },
  {
    id: "german-exam-app",
    // ⚠ CONFIRM: public product name + Google Play link
    title: "German exam preparation app — CEFR A1–B1",
    subtitle: "Live on Google Play: 850+ exam-aligned questions, hybrid AI + deterministic scoring, speaking practice on the OpenAI Realtime API, GDPR by design.",
    status: "live",
    statusLabel: "Live",
    capability: "Product Ownership · AI Systems · Mobile · Monetisation",
    group: "ai",
    problem:
      "Adult learners preparing for standardised German-language certification exams lack affordable, exam-accurate tools combining authentic test formats with reliable automated scoring. Existing options are either generic vocabulary apps or expensive human-tutored courses.",
    approach:
      "Owned product, content strategy, database architecture, and the automated content-generation pipeline end-to-end. Spec-first and evidence-grounded: every content format cross-referenced against official exam PDFs. Quality-gated sprints — validate on small batch, then defer bulk generation. Strict data-safety rules throughout.",
    stack: ["React Native", "Expo", "Supabase", "n8n", "Claude API", "OpenAI Realtime API", "gpt-4o-transcribe", "ElevenLabs", "RevenueCat", "PostHog", "Sentry", "OneSignal", "Resend"],
    keyDecisions: [
      "Hybrid AI + deterministic scoring — AI handles content-point detection and qualitative feedback; backend enforces rubric arithmetic. Keeps learner-facing outcomes trustworthy.",
      "LLM cost optimisation — routed content generation by CEFR level (cheaper model for A1, stronger for A2+), cutting pipeline cost while maintaining exam accuracy",
      "Security & GDPR by design — RLS audit, screen-capture protection, API-key leak audit, PII-free crash reporting (UUID-only identity), GDPR Art. 17 erasure flow cascading across third-party services",
    ],
    outcome:
      "Live on Google Play — 850+ exam-aligned questions across A1/A2/B1, gamification system (streak mechanics, badge progression, leaderboard), subscription business with multiple tiers.",
    capabilitySignal:
      "End-to-end product ownership of AI-native venture; LLM orchestration with cost/quality discipline; hybrid AI + deterministic system design; mobile monetisation; applied data engineering; GDPR compliance; speccing and directing an AI coding agent.",
  },
  {
    id: "spaarker",
    title: "Spaarker — AI carousel content platform",
    subtitle: "Purpose-built carousel generation for creators: a 38-screen product spec, typed pipeline contracts, and a 0–5 creative-variation dial. In active build.",
    status: "build",
    statusLabel: "In Build",
    capability: "AI Product Strategy · Pipeline Architecture · Full-Stack",
    group: "ai",
    problem:
      "Content creators with an audience know what they want to say but lack time to produce it. The carousel/slideshow format is the highest-converting content type on Instagram and TikTok, yet no purpose-built tool exists — creators stitch together 4–5 disconnected tools to produce a single post.",
    approach:
      "Locked a single-format product thesis (carousel ownership), then worked backwards from the core promise — 'a week of content in 15 minutes' — to make every feature, screen, and architecture decision pass or fail against that test. Built product spec, IA & screen flow map, and screen-by-screen spec as a three-document canonical source of truth.",
    stack: ["Next.js 14", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Supabase", "Clerk", "Stripe", "OpenAI GPT Image-2", "Claude Vision", "n8n", "Virlo API", "Postiz"],
    keyDecisions: [
      "0–5 dial architecture — only the Creative Director node understands the level mapping; Deconstruct and Reconstruct stay level-agnostic. Keeps the dial user-explainable and individual nodes reusable.",
      "Typed handoff contracts — Blueprint → GenerationPlan → RenderedCarousel with Validate → Repair → Escalate at each boundary. Enables per-slide child jobs independently retriable and content-addressed caching.",
      "v1 on n8n, seams preserved for v2 — ship on n8n with typed contracts; defer code-native orchestration engine to v2 when concurrency demands it. The swap seam is designed now.",
    ],
    outcome:
      "Specification complete and locked. Three foundational documents produced. CLAUDE.md and three-layer documentation system set up for AI coding agent handoff. Existing n8n workflows operational. Active build — v1 target: 4 weeks.",
    capabilitySignal:
      "AI product strategy at depth; full-stack technical ownership; senior product specification quality (38-screen spec with state machines, failure modes, error states); build velocity judgment; AI pipeline architecture with guardrails, caching, and child job fan-out.",
  },
  {
    id: "humanlyreal",
    title: "HumanlyReal — intent-to-automation platform",
    subtitle: "Natural language in, deployable automation out: a 3-layer multi-agent architecture with a platform-agnostic IR schema at its core.",
    status: "prototype",
    statusLabel: "Prototype",
    capability: "Multi-Agent Architecture · Product Design · AI Systems",
    group: "framework",
    problem:
      "Business operators — particularly in real estate and SMB sectors — lack a fast, accessible way to translate workflow intent into deployable automation. The gap is between natural language ('when a lead books a showing, update my CRM and notify the team') and production-ready automation.",
    approach:
      "Designed and architected a full-stack AI workflow generation platform as a solo builder. Structured as a 3-layer hybrid system: a guided UI, an n8n-based multi-agent orchestration backend (3 sequential agents), and a Supabase knowledge/data layer. Defined a proprietary Intermediate Representation (IR) schema as the platform-agnostic translation layer between user intent and deployable automation.",
    stack: ["n8n", "OpenAI GPT-4 Turbo", "Supabase", "Lovable.dev", "Vercel", "Stripe", "Postman", "JavaScript"],
    keyDecisions: [
      "Hybrid architecture over pure no-code or pure code — n8n as visual orchestration backend enables fast solo development while preserving clean migration path to code-native engine",
      "IR Schema as core moat — platform-agnostic format decouples intent capture from deployment target (n8n, Make, Zapier), making the system extensible without rebuilding",
      "Token efficiency principles — short purposeful prompts, no large datasets in context, stepwise reasoning, tool calls only when value-additive",
    ],
    outcome:
      "Prototype/concept stage with fully documented 30-day build plan. Day 1 infrastructure designed and ready to execute.",
    capabilitySignal:
      "AI systems architecture; multi-agent pipeline design with defined roles, handoffs, and validation layers; product thinking across UX, architecture, and commercial model; pragmatic build judgment — hybrid approach, staged migration strategy, cost-aware AI design.",
  },
  {
    id: "wyngs",
    title: "Wyngs — AI literacy platform for adults 60+",
    subtitle: "Positioning older adults as knowledge contributors, not care receivers: 10-chapter curriculum, Story Capsules, and a 21-node automation pipeline.",
    status: "build",
    statusLabel: "In Build",
    capability: "Zero-to-One Product · AI Curriculum · Automation",
    group: "ai",
    problem:
      "AI literacy platforms are built around passive consumption — monitoring, reminders, companionship. There is no infrastructure positioning older adults as knowledge contributors, and no platform helping them acquire AI skills for creative and economic agency.",
    approach:
      "Designed and led full product build across four simultaneous tracks: a 10-chapter AI literacy curriculum, a Story Capsules feature (audio/written legacy recording and family sharing), social community infrastructure, and a content automation pipeline. Built systems-first — reusable content architecture before individual chapters, repeatable automation frameworks before individual posts.",
    stack: ["React Native", "Expo", "expo-av", "expo-speech", "Claude API", "Perplexity sonar-pro", "n8n", "DALL-E 3", "Facebook Graph API v19"],
    keyDecisions: [
      "Contribution-first positioning over care-receiver framing — genuine white space validated through competitive analysis. Shaped every UX decision and investor pitch framing.",
      "No seeded community features at pitch time — identified that the network-effect investment thesis collapses if community features are artificially populated. Hard constraint: social features must reach authentic use before any fundraising conversation.",
      "Verified sourcing as non-negotiable — established strict verified sourcing standard for all content after fabricated details identified mid-build. Quality gate now governs all content development.",
    ],
    outcome:
      "Chapters 1–3 fully content-complete as production-ready React JSX components. 21-node n8n automation pipeline built. Facebook posting pipeline live. Pre-revenue, pre-seed positioning, active build.",
    capabilitySignal:
      "Zero-to-one product architecture; evidence-based product decisions (35-feature backlog tied to named academic sources); technical specification depth; AI toolchain fluency; investor-grade positioning; senior UX standards fluency; content quality governance.",
  },

  // ─── Operating Frameworks ─────────────────────────────────────────────────
  {
    id: "agentic-commerce",
    title: "Agentic commerce operating framework — EU",
    subtitle: "A full operating manual for launching AI automation offers across the EU: 15 agent offers, regulatory framework, pricing architecture. Concept stage — not yet client-tested.",
    status: "concept",
    statusLabel: "Concept",
    capability: "Venture Design · EU Regulatory · GTM Architecture",
    group: "framework",
    problem:
      "European SMEs are underserved by AI automation tooling that is both commercially viable and EU regulatory-compliant. No ready-made playbook exists for a solo founder to launch, price, and scale a multi-product AI automation studio across the fragmented EU market.",
    approach:
      "Designed the full operating system for the studio from scratch — EU-specific, covering market segmentation, offer design, technical architecture, GTM motion, and monetisation structure. Structured around a sense/reason/act mental model applied to 8 commerce segments, with a three-layer revenue progression (services → subscriptions → white-label).",
    stack: ["LangGraph", "n8n", "Langfuse", "pgvector", "Hetzner", "Scaleway", "OVHcloud", "GA4", "Meta Ads API", "Google Ads API", "Shopify", "Amazon Seller API"],
    keyDecisions: [
      "Geography scope lock — pivoted from DACH/UK to EU-wide, requiring full rebuild of regulatory framework, payment rails, language stack, and niche targeting. Not a patch — a rebuild.",
      "Offer architecture — designed 15 sellable agent offers with integration specs, ROI hooks, and a prioritisation matrix for which 4 to lead with first.",
      "Pricing discipline — kept pricing illustrative with explicit validation gates rather than presenting unvalidated figures as market-ready.",
    ],
    outcome:
      "Comprehensive operating manual delivered — 9 sections, 3 appendices, 90-day launch checklist, EUR pricing reference, question bank. Pre-launch, not yet tested against live clients.",
    capabilitySignal:
      "Venture design from first principles; EU regulatory fluency (GDPR, EU AI Act, PSD2/3, DAC7); productisation thinking (bespoke-to-SaaS ladder, white-label channel model); agentic AI stack literacy with EU-residency constraints; GTM discipline with niche selection framework.",
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 2) * 0.1 }}
      className="group bg-cream-card rounded-card flex flex-col p-7 cursor-pointer card-hover"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(project)}
      aria-label={`View system: ${project.title}`}
    >
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <Tag variant="status" status={project.status}>
          {project.statusLabel}
        </Tag>
      </div>

      <p className="font-jakarta font-medium text-slate text-[11px] tracking-[0.06em] uppercase mt-3">
        {project.capability}
      </p>

      <h3 className="font-jakarta font-bold text-navy text-[18px] leading-[1.3] mt-3">
        {project.title}
      </h3>

      <p className="font-jakarta text-slate text-[15px] leading-[1.65] mt-3 flex-1">
        {project.subtitle}
      </p>

      <div className="mt-5 pt-4 border-t border-rule flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((t) => (
          <span key={t} className="stack-tag inline-flex items-center gap-1.5">
            <StackIcon name={t} size={12} />
            {t}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="stack-tag" style={{ opacity: 0.6 }}>+{project.stack.length - 5}</span>
        )}
      </div>

      <div className="mt-5">
        <span className="font-jakarta font-semibold text-[13px] text-navy flex items-center gap-1.5 group-hover:opacity-70 transition-opacity">
          View system <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({
  project,
  onClose,
  allProjects,
}: {
  project: Project;
  onClose: () => void;
  allProjects: Project[];
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[currentIndex + 1] ?? null;

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-cream overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Sticky close bar */}
      <div className="sticky top-0 z-10 bg-cream border-b border-rule">
        <div className="content-width flex items-center justify-between h-14">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag variant="status" status={project.status}>
              {project.statusLabel}
            </Tag>
            <span className="label-meta hidden sm:inline">{project.capability}</span>
          </div>
          <button
            onClick={onClose}
            className="font-jakarta font-bold text-navy text-[18px] leading-none w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Modal content */}
      <div className="content-width py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-navy text-[28px] md:text-[36px] leading-[1.12]">
            {project.title}
          </h2>
          <p className="font-jakarta text-slate text-[16px] leading-[1.65] mt-3">
            {project.subtitle}
          </p>

          <div className="w-16 h-[3px] bg-cyan mt-6 mb-10" />

          <div className="mb-10">
            <span className="section-label">The problem</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.problem}
            </p>
          </div>

          <div className="mb-10">
            <span className="section-label">The approach</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.approach}
            </p>
          </div>

          <div className="mb-10">
            <span className="section-label">Stack & tools</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="stack-tag inline-flex items-center gap-1.5">
                  <StackIcon name={t} size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <span className="section-label">Key decisions</span>
            <ul className="flex flex-col gap-4">
              {project.keyDecisions.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-cyan font-bold mt-[2px] flex-shrink-0">•</span>
                  <p className="font-jakarta text-navy text-[16px] leading-[1.7]">{d}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mb-10 p-6 rounded-card border-l-4"
            style={{ borderLeftColor: "#1BAFBF", background: "rgba(36,38,43,0.04)" }}
          >
            <span className="section-label">Outcome</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.outcome}
            </p>
          </div>

          <div className="mb-12">
            <span className="section-label">Capability signal</span>
            <p className="font-jakarta text-slate text-[15px] leading-[1.75]">
              {project.capabilitySignal}
            </p>
          </div>

          <div className="border-t border-rule pt-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/book" className="btn-primary">
                Discuss a system like this <span aria-hidden="true">→</span>
              </Link>
              <span className="font-jakarta text-slate text-[14px]">
                30 minutes, no pitch — an honest read on whether this applies to your problem.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={onClose}
                className="font-jakarta font-semibold text-[14px] text-navy hover:opacity-70 transition-opacity flex items-center gap-1.5"
              >
                <span aria-hidden="true">←</span> Back to all systems
              </button>
              {nextProject && (
                <span className="font-jakarta text-slate text-[13px]">
                  Next: {nextProject.title} →
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const whereNext = [
  {
    title: "Financial Infrastructure",
    body: "Payments, digital commerce, ecosystem partnerships, regulated platforms, and market-scale operating models.",
  },
  {
    title: "AI Systems",
    body: "Agentic workflows, automation platforms, AI-native products, and intelligent operating systems.",
  },
  {
    title: "Physical AI & Robotics",
    body: "A research focus, not yet a build: how intelligence moves into the physical world, what robotics ecosystems need to commercialise, and what that shift means for work and skills. Writing to follow.",
  },
];

export default function WorkPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  const enterpriseProjects = projects.filter((p) => p.group === "enterprise");
  const aiProjects = projects.filter((p) => p.group === "ai");
  const frameworkProjects = projects.filter((p) => p.group === "framework");

  const principlesRef = useRef<HTMLDivElement>(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-80px" });

  const whereRef = useRef<HTMLDivElement>(null);
  const whereInView = useInView(whereRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Built, shipped, delivered
          </motion.h1>
          <motion.div
            className="mt-6 max-w-2xl space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <p className="font-jakarta text-slate text-[18px] leading-[1.75]">
              Two AI products live in production. Two more in active build. An enterprise advisory blueprint delivered, and a venture co-founded and scaled from zero. Every case study includes the architecture decisions and what they demonstrate — statuses are labelled honestly.
            </p>
            <p className="font-jakarta text-slate text-[18px] leading-[1.75]">
              The work spans enterprise organisations, venture environments, and independent builds — and it reflects a single belief:
            </p>
            <blockquote className="font-display font-bold text-navy text-[24px] md:text-[28px] leading-[1.35] pl-6 border-l-[4px] border-cyan mt-6 mb-2">
              Technology only creates value when it can be operationalized.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Systems */}
      <section className="section-spacing">
        <div className="content-width">
          <span className="section-label">Enterprise & venture delivery</span>
          <p className="font-jakarta text-slate text-[16px] leading-[1.65] mt-2 mb-8 max-w-2xl">
            Delivered engagements where commercial outcomes, operational execution, and regulatory design carried equal weight with the technology.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {enterpriseProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Systems */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">AI systems & products</span>
          <p className="font-jakarta text-slate text-[16px] leading-[1.65] mt-2 mb-10 max-w-2xl">
            Designed, architected, and shipped solo — schema to prompt architecture to app store. These are the systems behind the AI transformation services: the client work draws on exactly this build capability.
          </p>

          {/* Featured system */}
          <div className="mb-6">
            <p className="label-meta mb-5">Featured system</p>
            {aiProjects.filter((p) => p.id === "german-exam-app").map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group bg-navy rounded-card flex flex-col md:flex-row gap-0 cursor-pointer overflow-hidden card-hover-invert"
                onClick={() => setSelected(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(project)}
                aria-label={`View featured system: ${project.title}`}
              >
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <Tag variant="status" status={project.status}>
                      {project.statusLabel}
                    </Tag>
                    <span className="font-jakarta font-medium text-[11px] tracking-[0.06em] uppercase" style={{ color: "rgba(27,175,191,0.8)" }}>
                      {project.capability}
                    </span>
                  </div>
                  <h3 className="font-jakarta font-bold text-cream text-[22px] md:text-[26px] leading-[1.25] mb-3">
                    {project.title}
                  </h3>
                  <p className="font-jakarta text-[15px] leading-[1.65]" style={{ color: "rgba(245,243,239,0.7)" }}>
                    {project.subtitle}
                  </p>
                </div>
                <div className="md:w-64 px-8 md:px-10 pb-8 md:py-10 md:border-l flex flex-col justify-center gap-3" style={{ borderColor: "rgba(36,38,43,0.3)" }}>
                  {[
                    "Live on Google Play",
                    "850+ exam-aligned questions",
                    "Hybrid AI + deterministic scoring",
                    "Subscription business model",
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <span style={{ color: "#1BAFBF" }} className="mt-[3px] flex-shrink-0 text-[12px]">•</span>
                      <span className="font-jakarta text-[13px] leading-[1.5]" style={{ color: "rgba(245,243,239,0.75)" }}>{h}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(245,243,239,0.15)" }}>
                    <span className="font-jakarta font-semibold text-[13px] flex items-center gap-1.5 group-hover:opacity-70 transition-opacity" style={{ color: "#1BAFBF" }}>
                      View system <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="label-meta mt-10 mb-5">Applied AI systems</p>
          <div className="grid md:grid-cols-2 gap-5">
            {aiProjects.filter((p) => p.id !== "german-exam-app").map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operating Frameworks */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">In the lab</span>
          <p className="font-jakarta text-slate text-[16px] leading-[1.65] mt-2 mb-8 max-w-2xl">
            Earlier-stage work, labelled as such: prototypes and operating frameworks that test ideas before they earn a build. Statuses here mean what they say.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {frameworkProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing border-t border-rule" ref={principlesRef}>
        <div className="content-width">
          <motion.p
            className="font-jakarta font-medium text-navy text-[17px] leading-[1.65] mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            The technologies evolve. The underlying principles rarely do.
          </motion.p>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.06 }}
          >
            Principles that shape my work
          </motion.span>
          <motion.p
            className="font-jakarta text-slate text-[16px] leading-[1.75] max-w-2xl mt-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            Across payments, AI systems, and emerging technologies, these ideas consistently shape how I approach products, operating models, and long-term adoption.
          </motion.p>
          <div className="flex flex-col divide-y divide-rule">
            {[
              "Systems matter more than individual tools.",
              "Operating models are often a stronger competitive advantage than technology itself.",
              "Regulation should inform design rather than slow innovation.",
              "The future belongs to organisations that combine human judgment with intelligent systems.",
            ].map((principle, i) => (
              <motion.p
                key={i}
                className="font-jakarta font-medium text-navy text-[18px] md:text-[20px] leading-[1.5] py-6"
                initial={{ opacity: 0, x: -12 }}
                animate={principlesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 + i * 0.08 }}
              >
                {principle}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Where I'm Building Next */}
      <section className="section-spacing border-t border-rule" ref={whereRef}>
        <div className="content-width">
          <motion.h2
            className="font-display font-bold text-navy text-[28px] md:text-[36px] leading-[1.12]"
            initial={{ opacity: 0, y: 16 }}
            animate={whereInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Where I operate — and where I&apos;m looking next
          </motion.h2>

          <motion.p
            className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] max-w-2xl mt-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={whereInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
          >
            My career runs on one thread: taking a technology wave from concept to operating reality. Payments first, AI systems now — and a research eye on what comes after software.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
            {whereNext.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                animate={whereInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                className={`py-8 pr-8 ${i > 0 ? "md:pl-8 md:border-l border-rule" : ""}`}
              >
                <div
                  className="w-2 h-2 rounded-full mb-5"
                  style={{ background: "#1BAFBF" }}
                  aria-hidden="true"
                />
                <h3 className="font-jakarta font-bold text-navy text-[18px] leading-tight mb-3">
                  {domain.title}
                </h3>
                <p className="font-jakarta text-slate text-[14px] leading-[1.7]">
                  {domain.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="font-jakarta font-medium text-navy text-[15px] leading-[1.65] mt-10 pt-8 border-t border-rule max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={whereInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.42 }}
          >
            The pattern repeats across every wave: technology creates value only when someone builds the operating model that lets it run at scale. That is the work.
          </motion.p>
        </div>
      </section>

      {/* Beyond the Systems */}
      <section className="border-t border-rule">
        <div className="content-width py-14 md:py-16">
          <p className="label-meta mb-5">Beyond the systems</p>
          <p className="font-jakarta text-navy text-[17px] leading-[1.75] max-w-xl mb-8">
            My work spans enterprise leadership, AI-native products, and emerging technology research. You can explore that journey through my experience, writing, and ongoing areas of exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/experience"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Experience <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/insights"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Research &amp; insights <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Current areas of focus <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case study modal */}
      <AnimatePresence>
        {selected && (
          <CaseStudyModal
            project={selected}
            onClose={() => setSelected(null)}
            allProjects={projects}
          />
        )}
      </AnimatePresence>
    </>
  );
}
