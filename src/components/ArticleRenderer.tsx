"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/LinkButton";
import { articles } from "@/lib/articles";
import { ARTICLE_PILLAR, PILLAR_SLUGS, getArticleHref } from "@/lib/insights-meta";
import type { Article, Block, StatItem } from "@/lib/articles";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function estimateWordCount(blocks: Block[]): number {
  let chars = 0;
  for (const b of blocks) {
    if ("text" in b && b.text) chars += b.text.length;
    if ("body" in b && b.body) chars += b.body.length;
    if ("intro" in b && b.intro) chars += b.intro.length;
    if ("items" in b && Array.isArray(b.items)) {
      for (const item of b.items) {
        if (typeof item === "string") chars += item.length;
        else if (item && typeof item === "object") {
          if ("title" in item) chars += (item as { title: string }).title.length;
          if ("body" in item) chars += (item as { body: string }).body.length;
        }
      }
    }
  }
  return Math.round(chars / 5);
}

function getCtaCopy(topic: string): { heading: string; body: string } {
  const t = topic.toLowerCase();
  if (t.includes("ai") || t.includes("agentic") || t.includes("automation"))
    return {
      heading: "Working on AI implementation?",
      body: "Book a 30-minute call to discuss your operating model.",
    };
  if (t.includes("fintech") || t.includes("payments") || t.includes("financial"))
    return {
      heading: "Navigating fintech transformation?",
      body: "Book a 30-minute call to talk through your challenge.",
    };
  if (t.includes("operating") || t.includes("programme") || t.includes("delivery"))
    return {
      heading: "Leading a complex programme?",
      body: "Book a 30-minute call — no pitch, just an honest conversation.",
    };
  return {
    heading: "Ready to work together?",
    body: "Book a 30-minute discovery call — no pitch, no pressure.",
  };
}

// ─── Reveal ───────────────────────────────────────────────────────────────────

type RevealVariant = "default" | "pull-quote" | "highlight";

const REVEAL_INITIAL: Record<RevealVariant, Record<string, number>> = {
  default: { opacity: 0, y: 16 },
  "pull-quote": { opacity: 0, x: -12 },
  highlight: { opacity: 0, scale: 0.97 },
};

function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : REVEAL_INITIAL[variant]}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: variant === "pull-quote" ? 0.5 : 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 16, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
      className="bg-cream-card rounded-card p-6 flex flex-col gap-1"
    >
      <span className="font-mono font-semibold text-primary text-[26px] md:text-[30px] leading-none">
        {stat.value}
      </span>
      <span className="font-jakarta font-medium text-navy text-[13px] leading-[1.4] mt-2">
        {stat.label}
      </span>
      {stat.sub && (
        <span className="font-jakarta text-slate text-[12px] leading-[1.4]">
          {stat.sub}
        </span>
      )}
    </motion.div>
  );
}

// ─── PullQuoteBlock ───────────────────────────────────────────────────────────

function PullQuoteBlock({ text, delay }: { text: string; delay: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Reveal delay={delay} variant="pull-quote">
      <div
        className="relative group border-l-4 pl-7 py-2"
        style={{ borderLeftColor: "#1BAFBF" }}
      >
        <p className="font-jakarta text-navy text-[20px] md:text-[22px] leading-[1.6] italic">
          {text}
        </p>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-mono text-[10px] text-slate border border-rule px-2 py-1 rounded-[2px] hover:border-navy hover:text-navy"
          style={{ backgroundColor: "#F5F3EF" }}
          aria-label="Copy quote"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </Reveal>
  );
}

// ─── BlockRenderer ────────────────────────────────────────────────────────────

function BlockRenderer({ block, index }: { block: Block; index: number }) {
  const delay = Math.min(index * 0.06, 0.3);

  switch (block.type) {
    case "p":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta text-navy text-[18px] leading-[1.8]">
            {block.text}
          </p>
        </Reveal>
      );

    case "bold-p":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta font-bold text-navy text-[18px] leading-[1.8]">
            {block.text}
          </p>
        </Reveal>
      );

    case "pull-quote":
      return <PullQuoteBlock text={block.text} delay={delay} />;

    case "stat-grid": {
      const cols =
        block.stats.length === 2
          ? "grid-cols-2"
          : "grid-cols-2 md:grid-cols-4";
      return (
        <div className={`grid ${cols} gap-4`}>
          {block.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      );
    }

    case "highlight":
      return (
        <Reveal delay={delay} variant="highlight">
          <div
            className="p-7 rounded-card"
            style={{ background: "rgba(36,38,43,0.04)" }}
          >
            <p className="font-jakarta font-semibold text-navy text-[18px] md:text-[20px] leading-[1.65]">
              {block.text}
            </p>
          </div>
        </Reveal>
      );

    case "labeled":
      return (
        <Reveal delay={delay}>
          <div
            className="border-l-4 pl-6"
            style={{ borderLeftColor: "#1BAFBF" }}
          >
            <p className="label-meta mb-3">{block.label}</p>
            <p className="font-jakarta text-navy text-[18px] leading-[1.8]">
              {block.body}
            </p>
          </div>
        </Reveal>
      );

    case "bullets":
      return (
        <Reveal delay={delay}>
          <div>
            {block.intro && (
              <p className="font-jakarta text-navy text-[18px] leading-[1.8] mb-4">
                {block.intro}
              </p>
            )}
            <ul className="flex flex-col gap-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ background: "#1BAFBF" }}
                    aria-hidden="true"
                  />
                  <span className="font-jakarta text-navy text-[18px] leading-[1.8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      );

    case "numbered":
      return (
        <Reveal delay={delay}>
          <ol className="flex flex-col gap-7">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-jakarta font-bold text-navy text-[13px] leading-none mt-0.5"
                  style={{ background: "#1BAFBF" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-jakarta font-semibold text-navy text-[17px] leading-[1.5] mb-2">
                    {item.title}
                  </p>
                  <p className="font-jakarta text-navy text-[16px] leading-[1.85]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "question":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta text-slate text-[18px] leading-[1.7] italic">
            {block.text}
          </p>
        </Reveal>
      );

    default:
      return null;
  }
}

// ─── Main renderer ────────────────────────────────────────────────────────────

export default function ArticleRenderer({ article }: { article: Article }) {
  const reduced = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [showSticky, setShowSticky] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const unsubY = scrollY.on("change", (y) => {
      setShowSticky(y > 120);
      setShowTop(y > 600);
    });
    return unsubY;
  }, [scrollY]);

  // Related articles from same pillar
  const pillar = ARTICLE_PILLAR[article.slug];
  const related = pillar
    ? articles
        .filter((a) => a.live && a.slug !== article.slug && ARTICLE_PILLAR[a.slug] === pillar)
        .slice(0, 3)
    : [];

  const wordCount = estimateWordCount(article.blocks);
  const cta = getCtaCopy(article.topic);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.topic,
    wordCount,
    author: {
      "@type": "Person",
      "@id": "https://payalponkshe.com/#person",
      name: "Payal Ponkshe",
      url: "https://payalponkshe.com",
      jobTitle: "Fintech & Payments Executive | AI Venture Builder",
      sameAs: ["https://www.linkedin.com/in/payalponkshe/"],
    },
    publisher: {
      "@type": "Person",
      name: "Payal Ponkshe",
      url: "https://payalponkshe.com",
    },
    datePublished: article.date,
    keywords: article.keywords?.join(", "),
    url: `https://payalponkshe.com/insights/${article.slug}`,
    mainEntityOfPage: `https://payalponkshe.com/insights/${article.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Insights", item: "https://payalponkshe.com/insights" },
      { "@type": "ListItem", position: 2, name: article.title, item: `https://payalponkshe.com/insights/${article.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Reading progress bar */}
      {!reduced && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
          style={{ scaleX, backgroundColor: "#24262B" }}
        />
      )}

      {/* Sticky article strip */}
      {!reduced && (
        <motion.div
          className="fixed left-0 right-0 z-40 border-b border-rule"
          style={{ top: "3px", backgroundColor: "#F5F3EF" }}
          initial={{ y: -60, opacity: 0 }}
          animate={showSticky ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="content-width flex items-center justify-between h-11 gap-4">
            <span className="font-jakarta font-semibold text-navy text-[13px] truncate flex-1">
              {article.title.length > 60 ? article.title.slice(0, 60) + "…" : article.title}
            </span>
            <Link
              href="/book"
              className="flex-shrink-0 font-jakarta font-semibold text-[12px] text-cream bg-navy px-3 py-1.5 rounded-[2px] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a call &rarr;
            </Link>
          </div>
        </motion.div>
      )}

      {/* Breadcrumb */}
      <div className="pt-[100px] md:pt-[120px]">
        <div className="content-width py-4 border-b border-rule">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
            >
              Insights
            </Link>
            {pillar && PILLAR_SLUGS[pillar] && (
              <>
                <span className="text-slate opacity-40 text-[13px]">/</span>
                <Link
                  href={`/insights/${PILLAR_SLUGS[pillar]}`}
                  className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
                >
                  {pillar}
                </Link>
              </>
            )}
            <span className="text-slate opacity-40 text-[13px]">/</span>
            <span className="font-jakarta font-medium text-[13px] text-navy opacity-70 line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article hero */}
      <section className="section-spacing pb-0">
        <div className="content-width">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span
                  className="font-jakarta font-semibold text-navy text-[11px] tracking-[0.08em] uppercase px-3 py-1 rounded-tag"
                  style={{ background: "rgba(36,38,43,0.08)" }}
                >
                  {article.topic}
                </span>
                <span className="text-slate opacity-40 text-[13px]">&middot;</span>
                <span className="font-mono text-[11px] text-slate bg-navy/[0.06] px-2 py-0.5 rounded-[2px]">
                  {article.readTime}
                </span>
                <span className="text-slate opacity-40 text-[13px]">&middot;</span>
                <span className="font-jakarta font-medium text-slate text-[13px]">
                  {article.date}
                </span>
              </div>

              <h1 className="font-display font-bold text-navy text-[32px] md:text-[44px] leading-[1.1]">
                {article.title}
              </h1>

              <p className="font-jakarta text-slate text-[17px] leading-[1.75] mt-6">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="max-w-2xl flex flex-col gap-10">
            {article.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} index={i} />
            ))}

            {/* Related articles */}
            {related.length > 0 && (
              <div className="border-t border-rule pt-10">
                <p className="font-mono font-semibold text-slate text-[10px] tracking-[0.08em] uppercase mb-6">
                  Related reading
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r, i) => (
                    <motion.div
                      key={r.slug}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.07 }}
                    >
                      <Link href={getArticleHref(r.slug)} className="block group">
                        <div className="relative border border-rule p-4 overflow-hidden">
                          <span
                            className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-[width] duration-150 ease-in-out"
                            style={{ backgroundColor: "#1BAFBF" }}
                            aria-hidden="true"
                          />
                          <p className="font-mono text-[9px] tracking-[0.08em] uppercase text-slate mb-2">
                            {r.readTime} read
                          </p>
                          <p className="font-jakarta font-semibold text-navy text-[14px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[3px] group-hover:underline-offset-3 transition-all duration-150">
                            {r.title}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-rule" />

            {/* Author + contextual CTA */}
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <p className="font-jakarta font-bold text-navy text-[15px]">
                    Payal Ponkshe
                  </p>
                  <p className="font-jakarta text-slate text-[13px] mt-0.5">
                    Fintech &amp; Payments Executive &middot; AI Venture Builder
                  </p>
                  <a
                    href="https://linkedin.com/in/payalponkshe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jakarta font-medium text-[13px] text-navy underline-cyan hover:opacity-70 transition-opacity inline-block mt-3"
                  >
                    Follow on LinkedIn &rarr;
                  </a>
                </div>
                <div className="sm:text-right sm:flex-shrink-0">
                  <p className="font-jakarta font-semibold text-navy text-[14px] mb-1">
                    {cta.heading}
                  </p>
                  <p className="font-jakarta text-slate text-[13px] mb-4">
                    {cta.body}
                  </p>
                  <Button href="/book">Book a discovery call &rarr;</Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <Link
                href="/insights"
                className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
              >
                &larr; Back to all insights
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Back-to-top */}
      {!reduced && (
        <motion.button
          className="fixed bottom-8 right-8 z-40 w-10 h-10 flex items-center justify-center border border-rule hover:bg-navy hover:text-cream hover:border-navy transition-colors duration-150 font-jakarta font-bold text-navy text-[14px]"
          style={{ backgroundColor: "#F5F3EF" }}
          initial={{ opacity: 0 }}
          animate={showTop ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          &uarr;
        </motion.button>
      )}
    </>
  );
}
