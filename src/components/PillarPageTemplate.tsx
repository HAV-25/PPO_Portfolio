"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { PILLAR_SLUGS } from "@/lib/insights-meta";

export type PillarArticle = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  type: string;
  href: string;
};

type PillarPageTemplateProps = {
  pillar: string;
  pillarSlug: string;
  description: string;
  articles: PillarArticle[];
  isEmpty?: boolean;
};

function ArticleCard({ article, index }: { article: PillarArticle; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <Link href={article.href} className="block h-full group">
      <motion.div
        ref={ref}
        className="group relative flex flex-col justify-between h-full p-5 md:p-6 border border-rule overflow-hidden cursor-pointer min-h-[180px]"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: reduced ? 0 : (index % 3) * 0.06 }}
      >
        {/* Hover border accent */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-[width] duration-150 ease-in-out"
          style={{ backgroundColor: "#1BAFBF" }}
        />

        <div>
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
              {article.type}
            </span>
            <span className="text-slate opacity-30 text-[10px]">&middot;</span>
            <span className="font-mono text-[11px] text-slate bg-navy/[0.06] px-2 py-0.5 rounded-[2px]">
              {article.readTime}
            </span>
            <span className="text-slate opacity-30 text-[10px]">&middot;</span>
            <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase">
              {article.date.slice(0, 4)}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[4px] group-hover:underline-offset-4 transition-all duration-150">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2.5 line-clamp-3">
            {article.excerpt}
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

export default function PillarPageTemplate({
  pillar,
  pillarSlug,
  description,
  articles,
  isEmpty = false,
}: PillarPageTemplateProps) {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `https://payalponkshe.com/insights/${pillarSlug}`,
    name: `${pillar} — Insights by Payal Ponkshe`,
    description,
    url: `https://payalponkshe.com/insights/${pillarSlug}`,
    author: {
      "@type": "Person",
      "@id": "https://payalponkshe.com/#person",
      name: "Payal Ponkshe",
    },
    isPartOf: {
      "@type": "WebSite",
      url: "https://payalponkshe.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Insights", item: "https://payalponkshe.com/insights" },
      { "@type": "ListItem", position: 2, name: pillar, item: `https://payalponkshe.com/insights/${pillarSlug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-[100px] md:pt-[120px]">
        <div className="content-width py-4 border-b border-rule">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
            >
              Insights
            </Link>
            <span className="text-slate opacity-40 text-[13px]">/</span>
            <span className="font-jakarta font-medium text-[13px] text-navy opacity-70">
              {pillar}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-spacing pb-10">
        <div className="content-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="font-mono font-semibold text-slate text-[11px] tracking-[0.08em] uppercase mb-4">
              Insights &middot; {pillar}
            </p>
            <h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]">
              {pillar}
            </h1>
            <div className="w-16 h-1 mt-4" style={{ backgroundColor: "#1BAFBF" }} />
            <p className="font-jakarta text-slate text-[18px] leading-[1.65] mt-6 max-w-2xl">
              {description}
            </p>
            {articles.length > 0 && (
              <p className="font-mono text-[12px] text-slate mt-4 opacity-60">
                {articles.length} {articles.length === 1 ? "article" : "articles"}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-spacing pt-0 border-t border-rule">
        <div className="content-width">
          {isEmpty || articles.length === 0 ? (
            <div className="border border-rule p-8 max-w-xl">
              <p className="font-jakarta font-semibold text-navy text-[16px] mb-2">
                Articles in progress
              </p>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7]">
                Writing in this area is underway. Check back soon, or{" "}
                <Link
                  href="/insights"
                  className="text-navy underline decoration-cyan decoration-2 underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  browse all insights
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-2xl">
            <div>
              <p className="font-jakarta font-semibold text-navy text-[16px]">
                Explore all writing
              </p>
              <p className="font-jakarta text-slate text-[14px] mt-1">
                Browse the complete archive by topic.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/articles"
                className="font-jakarta font-medium text-navy text-[14px] underline decoration-cyan decoration-2 underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Full archive &rarr;
              </Link>
              <Link
                href="/insights"
                className="font-jakarta font-medium text-navy text-[14px] underline decoration-cyan decoration-2 underline-offset-2 hover:opacity-70 transition-opacity"
              >
                All insights &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
