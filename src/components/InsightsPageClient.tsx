"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { articles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import type { PortfolioArticle } from "@/lib/portfolio-articles";
import type { PipelineArticleMeta } from "@/lib/pipeline-content";
import {
  ARTICLE_TYPE,
  ARTICLE_PILLAR,
  PILLAR_SLUGS,
  getYear,
  getArticleHref,
} from "@/lib/insights-meta";

// ─── Static config ────────────────────────────────────────────────────────────

const FILTERS = [
  "All",
  "Financial Infrastructure",
  "AI Systems",
  "Operating Models",
  "Physical AI & Robotics",
  "Leadership & Human Systems",
  "Personal Essays",
];

const FEATURED_SLUGS = [
  "agentic-commerce-eu-regulatory-opportunity",
  "ai-content-pipeline-brand-consistency-at-scale",
  "ai-workflow-automation-sme-revenue-impact",
];

const PERSONAL_SLUGS = ["the-right-to-begin", "december-recalibration"];

const CURRENT_THINKING_SLUGS = [
  "qonto-mcp-fintech-finance-teams",
  "ai-revenue-per-employee-data",
  "wrong-ai-problem",
  "work-evolution-curve",
  "activity-vs-impact",
  "ai-in-finance",
  "transformation-literacy",
  "ai-ipo-valuations",
  "engineering-principles-ai-coding-agents",
  "how-to-set-up-a-claude-project",
  "claude-kickoff-prompt-template",
  "claude-personal-vs-project-instructions",
];

const PRINCIPLES = [
  "Technology only creates value when it can be operationalised.",
  "Operating models are often a stronger competitive advantage than technology itself.",
  "Human judgment remains the most important component in intelligent systems.",
  "Regulation should inform design rather than slow innovation.",
  "The future belongs to organisations that combine people with intelligent systems.",
];

const RESEARCH_AREAS: {
  title: string;
  body: string;
  filter: string;
  emerging?: boolean;
}[] = [
  {
    title: "Financial Infrastructure",
    body: "Payments infrastructure, open banking, embedded finance, AI-native commerce, regulated ecosystems, and partner-led market expansion.",
    filter: "Financial Infrastructure",
  },
  {
    title: "AI Systems",
    body: "Agentic workflows, human-in-the-loop design, automation architecture, content intelligence, and AI operating models.",
    filter: "AI Systems",
  },
  {
    title: "Physical AI & Robotics",
    body: "Consumer robotics, service robotics, embodied intelligence, edge computing, multi-agent physical systems, human-robot collaboration, and the infrastructure required for large-scale deployment.",
    filter: "Physical AI & Robotics",
    emerging: true,
  },
  {
    title: "Leadership & Human Systems",
    body: "How organisations adapt to new technology, build trust, redesign work, and combine human judgement with intelligent systems.",
    filter: "Leadership & Human Systems",
  },
];

const ARCHIVE_PILLARS = [
  "Financial Infrastructure",
  "AI Systems",
  "Operating Models",
  "Physical AI & Robotics",
  "Leadership & Human Systems",
  "Personal Essays",
];

// ─── Shared components ────────────────────────────────────────────────────────

function HoverBorder() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-[width] duration-150 ease-in-out"
      style={{ backgroundColor: "#1BAFBF" }}
    />
  );
}

function ReadTimePill({ readTime }: { readTime: string }) {
  return (
    <span className="font-mono text-[11px] text-slate bg-navy/[0.06] px-2 py-0.5 rounded-[2px] flex-shrink-0">
      {readTime}
    </span>
  );
}

function ArticleMeta({
  slug,
  readTime,
  date,
}: {
  slug: string;
  readTime: string;
  date: string;
}) {
  const type = ARTICLE_TYPE[slug] ?? "Essay";
  const pillar = ARTICLE_PILLAR[slug] ?? "";
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
        {type}
      </span>
      {pillar && (
        <>
          <span className="text-slate opacity-30 text-[10px]">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
            {pillar}
          </span>
        </>
      )}
      <span className="text-slate opacity-30 text-[10px]">&middot;</span>
      <ReadTimePill readTime={readTime} />
      <span className="text-slate opacity-30 text-[10px]">&middot;</span>
      <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
        {getYear(date)}
      </span>
    </div>
  );
}

function SectionHeader({
  label,
  intro,
}: {
  label: string;
  intro?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-8 bg-navy flex-shrink-0" aria-hidden="true" />
        <p className="font-jakarta font-bold text-slate text-[11px] tracking-[0.08em] uppercase">
          {label}
        </p>
      </div>
      {intro && (
        <p className="font-jakarta text-slate text-[16px] leading-[1.65] max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}

function FilterTab({
  label,
  active,
  onClick,
  count,
  disabled,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span
        className="relative pb-3 font-jakarta font-medium text-[13px] whitespace-nowrap text-slate opacity-40 cursor-not-allowed"
        title="Coming soon — articles in this area are in progress"
      >
        {label}
        {count !== undefined && (
          <span className="ml-1 opacity-60">({count})</span>
        )}
      </span>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative pb-3 font-jakarta font-medium text-[13px] whitespace-nowrap transition-colors duration-150 ${
        active ? "text-navy" : "text-slate hover:text-navy"
      }`}
    >
      {label}
      {count !== undefined && count > 0 && (
        <span className={`ml-1 text-[12px] ${active ? "opacity-60" : "opacity-40"}`}>
          ({count})
        </span>
      )}
      {active && (
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

// ─── Featured Essay Cards ─────────────────────────────────────────────────────

function FeaturedLeadCard({ article }: { article: PortfolioArticle }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={getArticleHref(article.slug)} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-8 md:p-10 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HoverBorder />
        <div>
          <ArticleMeta
            slug={article.slug}
            readTime={article.readTime}
            date={article.date}
          />
          <h2 className="font-display font-bold text-navy text-[26px] md:text-[36px] leading-[1.12] mt-5 max-w-2xl group-hover:underline group-hover:decoration-cyan group-hover:decoration-[6px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <p className="font-jakarta text-slate text-[16px] leading-[1.75] mt-5 max-w-xl">
            {article.excerpt}
          </p>
          {article.pullQuote && (
            <blockquote className="border-l-4 border-cyan pl-5 mt-8">
              <p className="font-jakarta font-semibold text-navy text-[18px] md:text-[20px] leading-[1.5] italic">
                &ldquo;{article.pullQuote}&rdquo;
              </p>
            </blockquote>
          )}
        </div>
        <div className="mt-8">
          <span className="font-jakarta font-medium text-[14px] text-navy flex items-center gap-2 group-hover:gap-3 transition-[gap] duration-200">
            Read essay <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function FeaturedSecondaryCard({
  article,
  delay,
}: {
  article: PortfolioArticle;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={getArticleHref(article.slug)} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-6 md:p-7 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div>
          <ArticleMeta
            slug={article.slug}
            readTime={article.readTime}
            date={article.date}
          />
          <h2 className="font-jakarta font-bold text-navy text-[19px] md:text-[21px] leading-[1.25] mt-4 group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-6">
          <span className="font-jakarta font-medium text-[13px] text-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-[gap] duration-200">
            Read essay <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Current Thinking Card ────────────────────────────────────────────────────

function ThinkingCard({
  article,
  delay,
  typeOverride,
}: {
  article: Article;
  delay: number;
  typeOverride?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const type = typeOverride ?? ARTICLE_TYPE[article.slug] ?? "Essay";

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-5 md:p-6 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
            {type}
          </span>
          <span className="text-slate opacity-30 text-[10px]">&middot;</span>
          <ReadTimePill readTime={article.readTime} />
          <span className="text-slate opacity-30 text-[10px]">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
            {getYear(article.date)}
          </span>
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-4 transition-all duration-150">
          {article.title}
        </h2>
        <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2.5 line-clamp-2">
          {article.excerpt}
        </p>
      </div>
      {article.live && (
        <div className="mt-4">
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
            Read <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      )}
    </motion.div>
  );

  return article.live ? (
    <Link href={getArticleHref(article.slug)} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

// ─── Pipeline card (used in merged Current Thinking section) ──────────────────

function PipelineCard({
  article,
  delay,
}: {
  article: PipelineArticleMeta;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const type = ARTICLE_TYPE[article.slug] ?? "Field Note";

  return (
    <Link href={getArticleHref(article.slug)} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-5 md:p-6 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
              {type}
            </span>
            <span className="text-slate opacity-30 text-[10px]">&middot;</span>
            <ReadTimePill readTime={article.readTime} />
          </div>
          <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2.5 line-clamp-2">
            {article.description}
          </p>
        </div>
        <div className="mt-4">
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
            Read <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Personal Essay Card ──────────────────────────────────────────────────────

function PersonalEssayCard({
  article,
  delay,
}: {
  article: Article;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-6 md:p-8 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
            Personal Essay
          </span>
          <span className="text-slate opacity-30 text-[10px]">&middot;</span>
          <ReadTimePill readTime={article.readTime} />
          <span className="text-slate opacity-30 text-[10px]">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
            {getYear(article.date)}
          </span>
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
          {article.title}
        </h2>
        <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-3">
          {article.excerpt}
        </p>
      </div>
      {article.live && (
        <div className="mt-5">
          <span className="font-jakarta font-medium text-[13px] text-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-[gap] duration-200">
            Read essay <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      )}
    </motion.div>
  );

  return article.live ? (
    <Link href={getArticleHref(article.slug)} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

// ─── Filtered results grid ────────────────────────────────────────────────────

type UnifiedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  href: string;
};

function FilteredGrid({ items }: { items: UnifiedArticle[] }) {
  if (items.length === 0) {
    return (
      <p className="font-jakarta text-slate text-[15px] py-16">
        No articles in this area yet — check back soon.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.06 }}
          className="h-full"
        >
          <Link href={item.href} className="block h-full">
            <div className="group relative flex flex-col justify-between h-full p-5 md:p-6 border border-rule overflow-hidden cursor-pointer min-h-[180px]">
              <HoverBorder />
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
                    {ARTICLE_TYPE[item.slug] ?? "Essay"}
                  </span>
                  <span className="text-slate opacity-30 text-[10px]">&middot;</span>
                  <ReadTimePill readTime={item.readTime} />
                  <span className="text-slate opacity-30 text-[10px]">&middot;</span>
                  <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
                    {getYear(item.date)}
                  </span>
                </div>
                <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-4 transition-all duration-150">
                  {item.title}
                </h2>
                <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2.5 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <div className="mt-4">
                <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
                  Read <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export function InsightsPageClient({
  pipelineArticles = [],
}: {
  pipelineArticles?: PipelineArticleMeta[];
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const articleMap = useMemo(
    () => new Map(articles.map((a) => [a.slug, a])),
    []
  );
  const portfolioMap = useMemo(
    () => new Map(portfolioArticles.map((a) => [a.slug, a])),
    []
  );

  const featuredArticles = useMemo(
    () =>
      FEATURED_SLUGS.map((s) => portfolioMap.get(s)).filter(
        Boolean
      ) as PortfolioArticle[],
    [portfolioMap]
  );

  const currentThinkingArticles = useMemo(
    () =>
      CURRENT_THINKING_SLUGS.map((s) => articleMap.get(s)).filter(
        Boolean
      ) as Article[],
    [articleMap]
  );

  const personalEssays = useMemo(
    () =>
      PERSONAL_SLUGS.map((s) => articleMap.get(s)).filter(
        Boolean
      ) as Article[],
    [articleMap]
  );

  const allWriting = useMemo<UnifiedArticle[]>(() => {
    const items: UnifiedArticle[] = [];
    for (const a of portfolioArticles) {
      items.push({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        readTime: a.readTime,
        date: a.date,
        href: getArticleHref(a.slug),
      });
    }
    for (const a of articles) {
      if (a.live) {
        items.push({
          slug: a.slug,
          title: a.title,
          excerpt: a.excerpt,
          readTime: a.readTime,
          date: a.date,
          href: getArticleHref(a.slug),
        });
      }
    }
    for (const a of pipelineArticles) {
      items.push({
        slug: a.slug,
        title: a.title,
        excerpt: a.description,
        readTime: a.readTime,
        date: a.publishDate,
        href: getArticleHref(a.slug),
      });
    }
    return items;
  }, [pipelineArticles]);

  // Article counts per pillar (for filter tabs and archive)
  const pillarCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allWriting.length };
    for (const item of allWriting) {
      const pillar = ARTICLE_PILLAR[item.slug];
      if (pillar) counts[pillar] = (counts[pillar] ?? 0) + 1;
    }
    return counts;
  }, [allWriting]);

  const filteredItems = useMemo<UnifiedArticle[]>(() => {
    if (activeFilter === "All" || activeFilter === "Physical AI & Robotics")
      return [];
    return allWriting.filter(
      (item) => ARTICLE_PILLAR[item.slug] === activeFilter
    );
  }, [activeFilter, allWriting]);

  const isFiltered = activeFilter !== "All";

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Insights
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[18px] leading-[1.65] mt-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            Writing on financial infrastructure, AI systems, operating models,
            and emerging technologies — grounded in what I have built, led, and
            studied.
          </motion.p>

          {/* Editorial framing block */}
          <motion.div
            className="mt-10 pt-8 border-t border-rule max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="font-jakarta font-bold text-navy text-[11px] tracking-[0.07em] uppercase mb-4">
              How I think about technology
            </p>
            <p className="font-jakarta font-semibold text-navy text-[16px] leading-[1.6]">
              Technology, operating models, and human systems evolve together.
            </p>
            <p className="font-jakarta text-slate text-[15px] leading-[1.75] mt-3">
              My writing explores how organisations adopt new capabilities, how
              products move from experimentation to scale, and how intelligent
              systems create lasting value in the real world.
            </p>
          </motion.div>

          {/* Principles — positioned as an upfront positioning statement */}
          <motion.div
            className="mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
          >
            <p className="font-jakarta font-bold text-navy text-[11px] tracking-[0.07em] uppercase mb-4">
              Principles that shape my work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {PRINCIPLES.map((principle, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-3 border-b border-rule md:odd:pr-8"
                >
                  <span className="font-mono font-semibold text-slate text-[11px] tracking-[0.04em] pt-[2px] flex-shrink-0 opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-jakarta font-semibold text-navy text-[14px] leading-[1.5]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="mt-10 border-b border-rule"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
          >
            <div className="flex flex-wrap gap-x-7 gap-y-0 overflow-x-auto">
              {FILTERS.map((f) => {
                const count = pillarCounts[f] ?? 0;
                const isPhysical = f === "Physical AI & Robotics";
                return (
                  <FilterTab
                    key={f}
                    label={f}
                    active={activeFilter === f}
                    onClick={() => !isPhysical && setActiveFilter(f)}
                    count={f === "All" ? undefined : count}
                    disabled={isPhysical}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {isFiltered ? (
        /* ── Filtered view ── */
        <section className="section-spacing">
          <div className="content-width">
            <SectionHeader
              label={activeFilter}
              intro={
                activeFilter === "Physical AI & Robotics"
                  ? "Consumer robotics, embodied intelligence, edge computing, and multi-agent physical systems. Articles in this area are coming soon."
                  : undefined
              }
            />
            <FilteredGrid items={filteredItems} />
          </div>
        </section>
      ) : (
        <>
          {/* ── Featured Essays ── */}
          <section className="section-spacing">
            <div className="content-width">
              <SectionHeader
                label="Featured Essays"
                intro="Longer-form pieces that connect market shifts, operating models, and the systems required to make emerging technology useful."
              />
              {featuredArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(260px,auto)]">
                  <div className="md:col-span-2 md:row-span-2">
                    <FeaturedLeadCard article={featuredArticles[0]} />
                  </div>
                  {featuredArticles.slice(1, 3).map((a, i) => (
                    <div key={a.slug} className="md:col-span-1">
                      <FeaturedSecondaryCard
                        article={a}
                        delay={0.12 + i * 0.08}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ── Current Thinking (merged with Field Notes) ── */}
          <section className="section-spacing border-t border-rule">
            <div className="content-width">
              <SectionHeader
                label="Current Thinking"
                intro="Shorter observations, frameworks, and field notes from what I am building, reading, and noticing across fintech, AI systems, and emerging technology."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentThinkingArticles.map((a, i) => (
                  <ThinkingCard
                    key={a.slug}
                    article={a}
                    delay={(i % 3) * 0.07}
                  />
                ))}
                {pipelineArticles.map((a, i) => (
                  <PipelineCard
                    key={a.slug}
                    article={a}
                    delay={(i % 3) * 0.07}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── Current Areas of Research ── */}
          <section className="section-spacing border-t border-rule">
            <div className="content-width">
              <SectionHeader
                label="Current Areas of Research"
                intro="A few themes I am actively studying as financial infrastructure, AI systems, and intelligent technologies continue to converge."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {RESEARCH_AREAS.map((area, i) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: i * 0.07,
                    }}
                  >
                    <div className="border-l-4 border-navy pl-5">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-jakarta font-bold text-navy text-[18px] leading-[1.25]">
                          {area.title}
                        </h3>
                        {area.emerging && (
                          <span
                            className="font-jakarta font-bold text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-tag"
                            style={{ background: "rgba(27,175,191,0.18)", color: "#24262B" }}
                          >
                            Emerging Focus
                          </span>
                        )}
                      </div>
                      <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-2">
                        {area.body}
                      </p>
                      {!area.emerging && (
                        <button
                          onClick={() => setActiveFilter(area.filter)}
                          className="font-jakarta font-medium text-navy text-[13px] mt-3 inline-block hover:opacity-70 transition-opacity duration-150 underline-cyan"
                        >
                          View related writing &rarr;
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Personal Essays ── */}
          {personalEssays.length > 0 && (
            <section className="section-spacing border-t border-rule">
              <div className="content-width">
                <SectionHeader
                  label="Personal Essays"
                  intro="Reflective essays on work, reinvention, leadership, learning, and the personal side of building through change."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalEssays.map((a, i) => (
                    <PersonalEssayCard
                      key={a.slug}
                      article={a}
                      delay={i * 0.08}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Article Archive ── */}
          <section className="section-spacing border-t border-rule">
            <div className="content-width">
              <SectionHeader
                label="Article Archive"
                intro="Browse the complete archive by topic and theme."
              />
              <div className="flex flex-col gap-0 max-w-xl">
                {ARCHIVE_PILLARS.map((pillar) => {
                  const count = pillarCounts[pillar] ?? 0;
                  return (
                    <Link
                      key={pillar}
                      href={`/articles#${PILLAR_SLUGS[pillar]}`}
                      className="group flex items-center justify-between py-3.5 border-b border-rule hover:border-navy transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.08em] uppercase group-hover:text-navy transition-colors duration-150">
                          {pillar}
                        </span>
                        {count > 0 && (
                          <span className="font-mono text-[10px] text-slate opacity-50 group-hover:opacity-70 transition-opacity">
                            {count} {count === 1 ? "article" : "articles"}
                          </span>
                        )}
                      </div>
                      <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em] group-hover:text-navy transition-colors duration-150">
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link
                  href="/articles"
                  className="font-jakarta font-medium text-navy text-[14px] underline-cyan hover:opacity-70 transition-opacity duration-150"
                >
                  View full archive &rarr;
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
