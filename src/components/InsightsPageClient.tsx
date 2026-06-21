"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { articles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import type { PortfolioArticle } from "@/lib/portfolio-articles";
import type { PipelineArticleMeta } from "@/lib/pipeline-content";

// ─── Category dot colours ─────────────────────────────────────────────────────
const CATEGORY_DOT_COLORS: Record<string, string> = {
  "AI & Technology": "#2dfff8",
  "Fintech & Payments": "#24356e",
  "Leadership": "#5A6A8A",
  "Venture Build": "#D94F4F",
};
function dotColor(topic: string): string {
  return CATEGORY_DOT_COLORS[topic] ?? "#5A6A8A";
}

// ─── Bento layout config ──────────────────────────────────────────────────────
type CardVariant = "A" | "B" | "C" | "D" | "E";

interface CardConfig {
  variant: CardVariant;
  colSpan: 1 | 2 | 3;
  rowSpan: 1 | 2;
}

// Explicit bento order determines CSS Grid auto-placement
const BENTO_SLUGS = [
  "qonto-mcp-fintech-finance-teams",
  "ai-ipo-valuations",
  "ai-in-finance",
  "the-right-to-begin",
  "activity-vs-impact",
  "ai-revenue-per-employee-data",
  "december-recalibration",
  "wrong-ai-problem",
  "transformation-literacy",
  "work-evolution-curve",
  "how-to-set-up-a-claude-project",
  "claude-personal-vs-project-instructions",
  "claude-kickoff-prompt-template",
];

const BENTO_CONFIG: Record<string, CardConfig> = {
  "qonto-mcp-fintech-finance-teams":         { variant: "A", colSpan: 3, rowSpan: 2 },
  "ai-ipo-valuations":                      { variant: "B", colSpan: 1, rowSpan: 1 },
  "ai-in-finance":                          { variant: "B", colSpan: 1, rowSpan: 1 },
  "the-right-to-begin":                     { variant: "B", colSpan: 1, rowSpan: 1 },
  "activity-vs-impact":                     { variant: "C", colSpan: 2, rowSpan: 1 },
  "ai-revenue-per-employee-data":           { variant: "B", colSpan: 1, rowSpan: 1 },
  "december-recalibration":                 { variant: "D", colSpan: 1, rowSpan: 2 },
  "wrong-ai-problem":                       { variant: "E", colSpan: 1, rowSpan: 1 },
  "transformation-literacy":                { variant: "E", colSpan: 1, rowSpan: 1 },
  "work-evolution-curve":                   { variant: "E", colSpan: 1, rowSpan: 1 },
  "how-to-set-up-a-claude-project":         { variant: "C", colSpan: 2, rowSpan: 1 },
  "claude-personal-vs-project-instructions": { variant: "B", colSpan: 1, rowSpan: 1 },
  "claude-kickoff-prompt-template":         { variant: "B", colSpan: 1, rowSpan: 1 },
};

// Maps colSpan → Tailwind md: class (all must be statically present for Tailwind JIT)
const MD_COL_SPAN: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
};
const MD_ROW_SPAN: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
};

function getPullQuote(article: Article): string {
  const block = article.blocks.find((b) => b.type === "pull-quote");
  if (block && block.type === "pull-quote") return block.text;
  return article.excerpt;
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function CategoryLabel({ topic }: { topic: string }) {
  return (
    <div className="flex items-center gap-1.5 flex-shrink-0">
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: dotColor(topic) }}
      />
      <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.06em] uppercase">
        {topic}
      </span>
    </div>
  );
}

function HoverBorder() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-cyan transition-[width] duration-150 ease-in-out"
    />
  );
}

// ─── Card variants ─────────────────────────────────────────────────────────────

function CardA({ article, delay }: { article: Article; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-7 md:p-8 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div>
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <CategoryLabel topic={article.topic} />
          <span className="text-slate opacity-30">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.readTime} read
          </span>
          <span className="text-slate opacity-30">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.date}
          </span>
          {article.live && <span className="status-live">Live</span>}
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[24px] md:text-[28px] leading-[1.25] max-w-2xl group-hover:underline group-hover:decoration-cyan group-hover:decoration-[6px] group-hover:underline-offset-4 transition-all duration-150">
          {article.title}
        </h2>
        <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-xl line-clamp-3">
          {article.excerpt}
        </p>
      </div>
      <div className="mt-6">
        <span className="font-jakarta font-medium text-[13px] text-navy flex items-center gap-1.5 group-hover:gap-3 transition-[gap] duration-200">
          Read article <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </motion.div>
  );

  return article.live ? (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function CardB({ article, delay }: { article: Article; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-6 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <CategoryLabel topic={article.topic} />
          <span className="text-slate opacity-30">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.readTime}
          </span>
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
          {article.title}
        </h2>
        <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3 line-clamp-2">
          {article.excerpt}
        </p>
      </div>
      {article.live && (
        <div className="mt-4">
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
            Read article <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      )}
    </motion.div>
  );

  return article.live ? (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function CardC({ article, delay }: { article: Article; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col md:flex-row h-full border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      {/* Left column — title */}
      <div className="flex flex-col justify-center p-6 md:w-[40%] flex-shrink-0">
        <div className="mb-3">
          <CategoryLabel topic={article.topic} />
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.25] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
          {article.title}
        </h2>
        {article.live && (
          <div className="mt-4">
            <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
              Read article <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        )}
      </div>
      {/* Vertical divider — desktop only */}
      <div className="hidden md:block w-px bg-rule flex-shrink-0" />
      {/* Horizontal divider — mobile only */}
      <div className="md:hidden h-px bg-rule mx-6" />
      {/* Right column — excerpt */}
      <div className="flex flex-col justify-center p-6 flex-1">
        <p className="font-jakarta text-slate text-[15px] leading-[1.7]">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.readTime} read
          </span>
          <span className="text-slate opacity-30">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.date}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return article.live ? (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function CardD({ article, delay }: { article: Article; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const pullQuote = getPullQuote(article);

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-6 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div className="flex-1 flex flex-col justify-center py-4">
        <blockquote className="border-l-[6px] border-cyan pl-4">
          <p className="font-jakarta font-bold text-navy text-[19px] md:text-[21px] leading-[1.5]">
            &ldquo;{pullQuote}&rdquo;
          </p>
        </blockquote>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
        <CategoryLabel topic={article.topic} />
        {article.live && (
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200 flex-shrink-0">
            Read article <span aria-hidden="true">&rarr;</span>
          </span>
        )}
      </div>
    </motion.div>
  );

  return article.live ? (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function CardE({ article, delay }: { article: Article; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const inner = (
    <motion.div
      ref={ref}
      className="group relative flex flex-col justify-between h-full p-5 border border-rule overflow-hidden cursor-pointer"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      <HoverBorder />
      <div>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <CategoryLabel topic={article.topic} />
          <span className="text-slate opacity-30">&middot;</span>
          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">
            {article.date}
          </span>
        </div>
        <h2 className="font-jakarta font-bold text-navy text-[15px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-3 transition-all duration-150">
          {article.title}
        </h2>
      </div>
      <div className="mt-3 flex justify-end">
        <span
          aria-hidden="true"
          className="font-jakarta font-bold text-navy text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        >
          &rarr;
        </span>
      </div>
    </motion.div>
  );

  return article.live ? (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function ArticleCard({
  article,
  variant,
  delay,
}: {
  article: Article;
  variant: CardVariant;
  delay: number;
}) {
  switch (variant) {
    case "A": return <CardA article={article} delay={delay} />;
    case "C": return <CardC article={article} delay={delay} />;
    case "D": return <CardD article={article} delay={delay} />;
    case "E": return <CardE article={article} delay={delay} />;
    default:  return <CardB article={article} delay={delay} />;
  }
}

// ─── Filter pill ───────────────────────────────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-jakarta font-bold text-[12px] tracking-[0.04em] px-4 py-1.5 rounded-tag border transition-colors duration-150 ${
        active
          ? "bg-navy text-cream border-navy"
          : "bg-cream text-slate border-rule hover:border-navy hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Portfolio bento config ───────────────────────────────────────────────────
// 3-column grid, auto-placement order:
// [A4 A:col1-2×2] [A3 B:col3] / [cont] [A5 B:col3]
// [A1 A:col1-2×2] [A6 D:col3×2] / [cont] [D cont]
// [A2 C:col1-3 full]

const PORTFOLIO_BENTO_SLUGS = [
  "agentic-commerce-eu-regulatory-opportunity",
  "ai-workflow-automation-sme-revenue-impact",
  "ai-literacy-platform-senior-demographic-product-strategy",
  "ai-content-pipeline-brand-consistency-at-scale",
  "carousel-content-platform-ai-architecture-decisions",
  "language-learning-app-agentic-build-blueprint",
];

const PORTFOLIO_BENTO_CONFIG: Record<string, { variant: CardVariant; colSpan: 1 | 2 | 3; rowSpan: 1 | 2 }> = {
  "agentic-commerce-eu-regulatory-opportunity":            { variant: "A", colSpan: 2, rowSpan: 2 },
  "ai-workflow-automation-sme-revenue-impact":             { variant: "B", colSpan: 1, rowSpan: 1 },
  "ai-literacy-platform-senior-demographic-product-strategy": { variant: "B", colSpan: 1, rowSpan: 1 },
  "ai-content-pipeline-brand-consistency-at-scale":        { variant: "A", colSpan: 2, rowSpan: 2 },
  "carousel-content-platform-ai-architecture-decisions":   { variant: "D", colSpan: 1, rowSpan: 2 },
  "language-learning-app-agentic-build-blueprint":         { variant: "C", colSpan: 3, rowSpan: 1 },
};

const MD_PORTFOLIO_COL_SPAN: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
};

// ─── Portfolio card components ────────────────────────────────────────────────

function PortfolioCardA({ article, delay }: { article: PortfolioArticle; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-7 md:p-8 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div>
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <CategoryLabel topic={article.topic} />
            <span className="text-slate opacity-30">&middot;</span>
            <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">{article.readTime} read</span>
            <span className="text-slate opacity-30">&middot;</span>
            <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">{article.date}</span>
          </div>
          <h2 className="font-jakarta font-bold text-navy text-[22px] md:text-[26px] leading-[1.25] max-w-2xl group-hover:underline group-hover:decoration-cyan group-hover:decoration-[6px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-xl line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-6">
          <span className="font-jakarta font-medium text-[13px] text-navy flex items-center gap-1.5 group-hover:gap-3 transition-[gap] duration-200">
            Read article <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function PortfolioCardB({ article, delay }: { article: PortfolioArticle; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-6 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <CategoryLabel topic={article.topic} />
            <span className="text-slate opacity-30">&middot;</span>
            <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">{article.readTime}</span>
          </div>
          <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-4">
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
            Read article <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function PortfolioCardC({ article, delay }: { article: PortfolioArticle; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col md:flex-row h-full border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div className="flex flex-col justify-center p-6 md:w-[40%] flex-shrink-0">
          <div className="mb-3"><CategoryLabel topic={article.topic} /></div>
          <h2 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.25] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>
          <div className="mt-4">
            <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
              Read article <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </div>
        <div className="hidden md:block w-px bg-rule flex-shrink-0" />
        <div className="md:hidden h-px bg-rule mx-6" />
        <div className="flex flex-col justify-center p-6 flex-1">
          <p className="font-jakarta text-slate text-[15px] leading-[1.7]">{article.excerpt}</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">{article.readTime} read</span>
            <span className="text-slate opacity-30">&middot;</span>
            <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.04em]">{article.date}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function PortfolioCardD({ article, delay }: { article: PortfolioArticle; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const quote = article.pullQuote ?? article.excerpt;

  return (
    <Link href={`/insights/${article.slug}`} className="block h-full">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-6 border border-rule overflow-hidden cursor-pointer"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : delay }}
      >
        <HoverBorder />
        <div className="flex-1 flex flex-col justify-center py-4">
          <blockquote className="border-l-[6px] border-cyan pl-4">
            <p className="font-jakarta font-bold text-navy text-[18px] md:text-[20px] leading-[1.5]">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        </div>
        <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
          <CategoryLabel topic={article.topic} />
          <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200 flex-shrink-0">
            Read article <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function PortfolioCard({ article, variant, delay }: { article: PortfolioArticle; variant: CardVariant; delay: number }) {
  switch (variant) {
    case "A": return <PortfolioCardA article={article} delay={delay} />;
    case "C": return <PortfolioCardC article={article} delay={delay} />;
    case "D": return <PortfolioCardD article={article} delay={delay} />;
    default:  return <PortfolioCardB article={article} delay={delay} />;
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export function InsightsPageClient({ pipelineArticles = [] }: { pipelineArticles?: PipelineArticleMeta[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.topic)));
    return ["All", ...cats];
  }, []);

  const isFiltered = activeCategory !== "All";

  const portfolioBentoArticles = useMemo(() => {
    const map = new Map(portfolioArticles.map((a) => [a.slug, a]));
    return PORTFOLIO_BENTO_SLUGS.map((slug) => map.get(slug)).filter(Boolean) as PortfolioArticle[];
  }, []);

  // Bento order — reorders articles array for correct CSS Grid auto-placement
  const bentoArticles = useMemo(() => {
    const map = new Map(articles.map((a) => [a.slug, a]));
    return BENTO_SLUGS.map((slug) => map.get(slug)).filter(Boolean) as Article[];
  }, []);

  const filteredArticles = useMemo(() => {
    if (!isFiltered) return bentoArticles;
    return articles.filter((a) => a.topic === activeCategory);
  }, [activeCategory, isFiltered, bentoArticles]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-spacing pt-[140px] md:pt-[160px]">
        <div className="content-width">
          <motion.h1
            className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Insights
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[18px] leading-[1.6] mt-5 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            Writing on fintech, payments, AI transformation, and what it
            actually takes to build at the intersection of enterprise delivery
            and emerging technology.
          </motion.p>

          {/* Category filter row */}
          <motion.div
            className="flex flex-wrap gap-2 mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
          >
            {allCategories.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio insights bento ── */}
      <section className="section-spacing pt-10 md:pt-12">
        <div className="content-width">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-4 bg-navy" aria-hidden="true" />
            <p className="section-label">In depth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(200px,auto)]">
            {portfolioBentoArticles.map((article, i) => {
              const config = PORTFOLIO_BENTO_CONFIG[article.slug] ?? { variant: "B" as CardVariant, colSpan: 1, rowSpan: 1 };
              const colClass = MD_PORTFOLIO_COL_SPAN[config.colSpan] ?? "md:col-span-1";
              const rowClass = MD_ROW_SPAN[config.rowSpan] ?? "md:row-span-1";
              return (
                <div key={article.slug} className={`col-span-1 ${colClass} ${rowClass}`}>
                  <PortfolioCard article={article} variant={config.variant} delay={(i % 3) * 0.08} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Thought leadership grid ── */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-4 bg-navy" aria-hidden="true" />
            <p className="section-label">Short reads</p>
          </div>
          {isFiltered ? (
            /* Filtered view — simple 3-column standard grid */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(220px,auto)]">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: i * 0.06 }}
                  className="h-full"
                >
                  <ArticleCard article={article} variant="B" delay={0} />
                </motion.div>
              ))}
            </div>
          ) : (
            /* Bento grid — 4-column with variable spans */
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(200px,auto)]">
              {bentoArticles.map((article, i) => {
                const config = BENTO_CONFIG[article.slug] ?? {
                  variant: "B" as CardVariant,
                  colSpan: 1,
                  rowSpan: 1,
                };
                const colClass = MD_COL_SPAN[config.colSpan] ?? "md:col-span-1";
                const rowClass = MD_ROW_SPAN[config.rowSpan] ?? "md:row-span-1";
                const staggerDelay = (i % 4) * 0.08;
                return (
                  <div
                    key={article.slug}
                    className={`col-span-1 ${colClass} ${rowClass}`}
                  >
                    <ArticleCard
                      article={article}
                      variant={config.variant}
                      delay={staggerDelay}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Pipeline articles (auto-published by CWA) ── */}
      {pipelineArticles.length > 0 && (
        <section className="section-spacing border-t border-rule">
          <div className="content-width">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-4 bg-navy" aria-hidden="true" />
              <p className="section-label">Weekly insights</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pipelineArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                  className="h-full"
                >
                  <Link href={`/insights/${article.slug}`} className="block h-full">
                    <div className="group relative flex flex-col justify-between h-full p-6 border border-rule overflow-hidden cursor-pointer">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-cyan transition-[width] duration-150 ease-in-out"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-jakarta font-bold text-slate text-[11px] tracking-[0.06em] uppercase">
                            {article.category.replace(/_/g, ' ')}
                          </span>
                          <span className="text-slate opacity-30">&middot;</span>
                          <span className="font-jakarta font-bold text-slate text-[11px]">
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[5px] group-hover:underline-offset-4 transition-all duration-150">
                          {article.title}
                        </h2>
                        <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <span className="font-jakarta font-medium text-[12px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
                          Read article <span aria-hidden="true">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
