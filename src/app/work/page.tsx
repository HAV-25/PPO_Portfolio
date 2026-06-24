"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import StackIcon from "@/components/ui/StackIcon";

type StatusVariant = "live" | "build" | "prototype" | "concept" | "delivered";

type Project = {
  id: string;
  title: string;
  status: StatusVariant;
  statusLabel: string;
  capability: string;
  group: "ai" | "enterprise";
  problem: string;
  approach: string;
  stack: string[];
  keyDecisions: string[];
  outcome: string;
  capabilitySignal: string;
};

const projects: Project[] = [
  {
    id: "ai-content-pipeline",
    title: "AI Content Intelligence Pipeline — Brand-Locked Reconstruction at Scale",
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
    title: "AI-Native Language Exam Prep Platform — CEFR A1–B1",
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
    title: "AI Carousel Generation Platform — Content Intelligence at Creator Scale",
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
    title: "Natural Language → Deployable Automation — AI Workflow Generator",
    status: "prototype",
    statusLabel: "Prototype",
    capability: "Multi-Agent Architecture · Product Design · AI Systems",
    group: "ai",
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
    title: "AI Literacy & Community Platform — Positioning Older Adults as Knowledge Contributors",
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
  {
    id: "agentic-commerce",
    title: "EU-Specific Operating System for Agentic Commerce — Solo AI Studio Architecture",
    status: "concept",
    statusLabel: "Concept",
    capability: "Venture Design · EU Regulatory · GTM Architecture",
    group: "ai",
    problem:
      "European SMEs are underserved by AI automation tooling that is both commercially viable and EU regulatory-compliant. No ready-made playbook exists for a solo founder to launch, price, and scale a multi-product AI automation studio across the fragmented EU market.",
    approach:
      "Designed the full operating system for the studio from scratch — EU-specific, covering market segmentation, offer design, technical architecture, GTM motion, and monetisation structure. Structured around a sense/reason/act mental model applied to 8 commerce segments, with a three-layer revenue progression (services → subscriptions → white-label).",
    stack: ["LangGraph", "n8n", "Langfuse", "pgvector", "Hetzner", "Scaleway", "OVHcloud", "GA4", "Meta Ads API", "Google Ads API", "Shopify", "Amazon Seller API"],
    keyDecisions: [
      "Geography scope lock — pivoted from DACH/UK to EU-wide, requiring full rebuild of regulatory framework, payment rails, language stack, and niche targeting. Not a patch — a rebuild.",
      "Offer architecture — designed 15 sellable agent offers with integration specs, ROI hooks, and a prioritisation matrix for which 4 to lead with first.",
      "Pricing discipline — kept pricing illustrative with explicit discovery-call validation gates rather than presenting unvalidated figures as market-ready.",
    ],
    outcome:
      "Comprehensive operating manual delivered — 9 sections, 3 appendices, 90-day launch checklist, EUR pricing reference, discovery call question bank. Pre-launch, not yet tested against live clients.",
    capabilitySignal:
      "Venture design from first principles; EU regulatory fluency (GDPR, EU AI Act, PSD2/3, DAC7); productisation thinking (bespoke-to-SaaS ladder, white-label channel model); agentic AI stack literacy with EU-residency constraints; GTM discipline with niche selection framework.",
  },
  {
    id: "thyssenkrupp",
    title: "Commercialisation Strategy & Ecosystem Framework — Automotive Circularity Venture",
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
    title: "Zero-to-One Talent Platform — DeFi, Web3 & Digital Banking",
    status: "delivered",
    statusLabel: "Delivered",
    capability: "Co-Founder · Operating Model · Zero-to-One GTM",
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
      aria-label={`View case study: ${project.title}`}
    >
      {/* Status pill */}
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <Tag variant="status" status={project.status}>
          {project.statusLabel}
        </Tag>
      </div>

      {/* Capability tags */}
      <p className="font-jakarta font-medium text-slate text-[11px] tracking-[0.06em] uppercase mt-3">
        {project.capability}
      </p>

      {/* Title */}
      <h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] mt-3">
        {project.title}
      </h3>

      {/* Problem */}
      <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3 flex-1 line-clamp-4">
        {project.problem}
      </p>

      {/* Stack tags */}
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

      {/* View link */}
      <div className="mt-5">
        <span className="font-jakarta font-semibold text-[13px] text-navy flex items-center gap-1.5 group-hover:opacity-70 transition-opacity">
          View case study <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
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
            aria-label="Close case study"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Modal content */}
      <div className="content-width py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="font-jakarta font-extrabold text-navy text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.01em]">
            {project.title}
          </h2>

          <div className="w-16 h-[3px] bg-cyan mt-6 mb-10" />

          {/* Problem */}
          <div className="mb-10">
            <span className="section-label">The problem</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="mb-10">
            <span className="section-label">My approach</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.approach}
            </p>
          </div>

          {/* Stack */}
          <div className="mb-10">
            <span className="section-label">Tech stack & tools</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="stack-tag inline-flex items-center gap-1.5">
                  <StackIcon name={t} size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key decisions */}
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

          {/* Outcome */}
          <div
            className="mb-10 p-6 rounded-card border-l-4"
            style={{ borderLeftColor: "#2dfff8", background: "rgba(36,53,110,0.04)" }}
          >
            <span className="section-label">Outcome</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.75]">
              {project.outcome}
            </p>
          </div>

          {/* Capability signal */}
          <div className="mb-12">
            <span className="section-label">Capability signal</span>
            <p className="font-jakarta text-slate text-[15px] leading-[1.75]">
              {project.capabilitySignal}
            </p>
          </div>

          {/* Micro-CTA */}
          <div className="border-t border-rule pt-8">
            <Button href="/book">
              Book a discovery call to discuss this →
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  const aiProjects = projects.filter((p) => p.group === "ai");
  const enterpriseProjects = projects.filter((p) => p.group === "enterprise");

  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-jakarta font-extrabold text-navy text-[40px] md:text-[52px] leading-[1.08] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Work &amp; Ventures
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[17px] leading-[1.65] mt-5 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            A record of what I&apos;ve built, led, and shipped. The AI ventures below
            are independently self-funded builds — proof of technical depth and
            product thinking, not client-commissioned work. The enterprise entries
            are where I delivered for organisations at scale.
          </motion.p>
        </div>
      </section>

      {/* AI Ventures */}
      <section className="section-spacing">
        <div className="content-width">
          <span className="section-label">AI Ventures — Independently Built</span>
          <p className="font-jakarta text-slate text-[15px] leading-[1.65] mt-2 mb-8 max-w-2xl">
            Self-funded, solo-built ventures designed and shipped since 2024.
            These demonstrate hands-on AI systems capability — not advisory at a distance.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {aiProjects.map((project, i) => (
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

      {/* Enterprise & Venture */}
      <section className="section-spacing">
        <div className="content-width">
          <span className="section-label">Enterprise & Venture</span>
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

      {/* Bottom CTA band */}
      <section className="bg-cream-card">
        <div className="content-width py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-jakarta font-extrabold text-navy text-[26px] md:text-[32px] leading-[1.2] max-w-sm">
            See something relevant to your challenge?
          </p>
          <Button href="/book">
            Book a discovery call →
          </Button>
        </div>
      </section>

      {/* Case study modal */}
      <AnimatePresence>
        {selected && (
          <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
