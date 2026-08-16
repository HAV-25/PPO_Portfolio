"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { portfolioArticles } from "@/lib/portfolio-articles";
import type { PortfolioArticle, PortfolioBlock } from "@/lib/portfolio-articles";
import { ARTICLE_PILLAR, PILLAR_SLUGS, getArticleHref } from "@/lib/insights-meta";

// ─── Inline bold parser ────────────────────────────────────────────────────────
function parseInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-navy">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

// ─── Scroll reveal wrapper ─────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Block renderer ────────────────────────────────────────────────────────────
function BlockRenderer({ block, index }: { block: PortfolioBlock; index: number }) {
  const delay = Math.min(index * 0.04, 0.24);

  switch (block.type) {
    case "h2":
      return (
        <Reveal delay={delay}>
          <h2 className="font-display font-bold text-navy text-[22px] md:text-[24px] leading-[1.3] mt-4">
            {block.text}
          </h2>
        </Reveal>
      );

    case "h3":
      return (
        <Reveal delay={delay}>
          <h3 className="font-jakarta font-semibold text-navy text-[19px] md:text-[20px] leading-[1.3] mt-2">
            {block.text}
          </h3>
        </Reveal>
      );

    case "p":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta text-navy text-[16px] md:text-[18px] leading-[1.8]">
            {parseInline(block.text)}
          </p>
        </Reveal>
      );

    case "steps":
      return (
        <Reveal delay={delay}>
          <ol className="flex flex-col gap-6">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 mt-1 h-full w-px bg-cyan self-stretch"
                  style={{ minHeight: "100%" }}
                  aria-hidden="true"
                />
                <div className="flex-1 pl-1">
                  <p className="font-jakarta font-bold text-navy text-[15px] leading-[1.4] mb-1.5">
                    {item.label}
                  </p>
                  <p className="font-jakarta text-navy text-[16px] leading-[1.8]">
                    {parseInline(item.body)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "bullets":
      return (
        <Reveal delay={delay}>
          <ul className="flex flex-col gap-3.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="mt-[9px] flex-shrink-0 w-2 h-2 rounded-full bg-cyan"
                  aria-hidden="true"
                />
                <span className="font-jakarta text-navy text-[16px] md:text-[18px] leading-[1.8]">
                  {parseInline(item)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case "numbered":
      return (
        <Reveal delay={delay}>
          <ol className="flex flex-col gap-7">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-5 items-start">
                {/* Cyan numbered badge */}
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-jakarta font-bold text-navy text-[13px] leading-none mt-0.5"
                  style={{ background: "#1BAFBF" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="font-jakarta font-semibold text-navy text-[16px] leading-[1.4] mb-1.5">
                    {item.title}
                  </p>
                  <p className="font-jakarta text-navy text-[16px] leading-[1.8]">
                    {parseInline(item.body)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "table":
      return (
        <Reveal delay={delay}>
          <div className="overflow-x-auto rounded-card">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-navy">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="font-jakarta font-semibold text-navy text-[13px] tracking-[0.04em] pb-3 pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-rule">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="font-jakarta font-semibold text-navy text-[13px] py-3 pr-6 align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      );

    default:
      return null;
  }
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────
function FAQAccordion({ faq }: { faq: PortfolioArticle["faq"] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-rule">
      {faq.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-jakarta font-semibold text-navy text-[16px] leading-[1.4]">
              {item.q}
            </span>
            <span
              className="font-jakarta font-bold text-navy text-[20px] flex-shrink-0 transition-transform duration-200 leading-none"
              style={{ transform: open === i ? "rotate(45deg)" : "none" }}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
            style={{ maxHeight: open === i ? "400px" : "0px" }}
          >
            <p className="font-jakarta text-slate text-[15px] leading-[1.8] pb-6">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Related article card ─────────────────────────────────────────────────────
function RelatedCard({ article }: { article: PortfolioArticle }) {
  return (
    <Link href={getArticleHref(article.slug)} className="block h-full group">
      <div className="flex flex-col justify-between h-full p-6 bg-cream-card rounded-card card-hover">
        <div>
          <span className="font-jakarta font-semibold text-slate text-[11px] tracking-[0.08em] uppercase block mb-3">
            {article.topic}
          </span>
          <h3 className="font-jakarta font-bold text-navy text-[16px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h3>
          <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-4">
          <span className="font-jakarta font-semibold text-[13px] text-navy flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-200">
            Read more <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── CTA block ─────────────────────────────────────────────────────────────────
function ArticleCTA({ article }: { article: PortfolioArticle }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-navy rounded-card p-8 md:p-10"
    >
      <p className="font-jakarta text-cream text-[15px] leading-[1.75] mb-7">
        {article.cta.body}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href={article.cta.primaryHref}
          className="inline-flex items-center gap-2 bg-cream text-navy font-jakarta font-semibold text-[14px] px-5 py-2.5 rounded-btn hover:bg-white transition-colors duration-150"
        >
          {article.cta.primaryLabel} <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/book"
          className="font-jakarta font-medium text-[14px] text-cream opacity-60 hover:opacity-100 transition-opacity"
        >
          or book a 30-minute discovery call
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Schema JSON-LD ────────────────────────────────────────────────────────────
function SchemaMarkup({ article }: { article: PortfolioArticle }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    author: { "@type": "Person", name: "Payal Ponkshe" },
    publisher: { "@type": "Person", name: "Payal Ponkshe" },
    datePublished: "2025-06-01",
    inLanguage: "en",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// ─── Main renderer ─────────────────────────────────────────────────────────────
export default function PortfolioArticleRenderer({ article }: { article: PortfolioArticle }) {
  const related = article.relatedSlugs
    .map((slug) => portfolioArticles.find((a) => a.slug === slug))
    .filter(Boolean) as PortfolioArticle[];

  // Split topic into pills if it contains "·"
  const topicPills = article.topic.split("·").map((t) => t.trim()).filter(Boolean);
  const pillar = ARTICLE_PILLAR[article.slug];
  const pillarSlug = pillar ? PILLAR_SLUGS[pillar] : null;

  return (
    <>
      <SchemaMarkup article={article} />

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
            {pillar && pillarSlug && (
              <>
                <span className="text-slate opacity-40 text-[13px]">/</span>
                <Link
                  href={`/insights/${pillarSlug}`}
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

      {/* Hero */}
      <section className="section-spacing pb-10">
        <div className="content-width">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Topic pills */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {topicPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-jakarta font-semibold text-navy text-[11px] tracking-[0.08em] uppercase px-3 py-1 rounded-tag"
                    style={{ background: "rgba(36,38,43,0.08)" }}
                  >
                    {pill}
                  </span>
                ))}
                <span className="text-slate opacity-40 text-[13px]">&middot;</span>
                <span className="font-jakarta font-medium text-slate text-[13px]">
                  {article.readTime} read
                </span>
              </div>

              <h1 className="font-display font-bold text-navy text-[32px] md:text-[48px] leading-[1.1]">
                {article.title}
              </h1>

              <p className="font-jakarta text-slate text-[17px] leading-[1.75] mt-6 max-w-[600px]">
                {article.deck}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="content-width">
        <div className="max-w-[720px] border-t border-rule" />
      </div>

      {/* Article body */}
      <section className="section-spacing pt-10">
        <div className="content-width">
          <div className="max-w-[720px] flex flex-col gap-7">
            {article.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="pb-12">
        <div className="content-width">
          <div className="max-w-[720px]">
            <ArticleCTA article={article} />
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-spacing pt-12 border-t border-rule">
          <div className="content-width">
            <div className="max-w-[720px]">
              <p className="section-label mb-8">Related articles</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <RelatedCard key={r.slug} article={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ accordion */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <div className="max-w-[720px]">
            <p className="section-label mb-6">Frequently asked</p>
            <FAQAccordion faq={article.faq} />
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="pb-16">
        <div className="content-width">
          <div className="max-w-[720px]">
            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
            >
              &larr; Back to insights
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
