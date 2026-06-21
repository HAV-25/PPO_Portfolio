"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Article, Block, StatItem } from "@/lib/articles";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
      className="bg-cream-card rounded-card p-6 flex flex-col gap-1"
    >
      <span className="font-jakarta font-bold text-navy text-[26px] md:text-[30px] leading-none">
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

function BlockRenderer({ block, index }: { block: Block; index: number }) {
  const delay = Math.min(index * 0.06, 0.3);

  switch (block.type) {
    case "p":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta text-navy text-[17px] leading-[1.85]">
            {block.text}
          </p>
        </Reveal>
      );

    case "bold-p":
      return (
        <Reveal delay={delay}>
          <p className="font-jakarta font-bold text-navy text-[17px] leading-[1.85]">
            {block.text}
          </p>
        </Reveal>
      );

    case "pull-quote":
      return (
        <Reveal delay={delay}>
          <div
            className="border-l-4 pl-7 py-2"
            style={{ borderLeftColor: "#2dfff8" }}
          >
            <p className="font-jakarta text-navy text-[20px] md:text-[22px] leading-[1.6] italic">
              {block.text}
            </p>
          </div>
        </Reveal>
      );

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
        <Reveal delay={delay}>
          <div
            className="p-7 rounded-card"
            style={{ background: "rgba(36,53,110,0.04)" }}
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
            style={{ borderLeftColor: "#2dfff8" }}
          >
            <p className="label-meta mb-3">{block.label}</p>
            <p className="font-jakarta text-navy text-[17px] leading-[1.85]">
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
              <p className="font-jakarta text-navy text-[17px] leading-[1.85] mb-4">
                {block.intro}
              </p>
            )}
            <ul className="flex flex-col gap-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ background: "#2dfff8" }}
                    aria-hidden="true"
                  />
                  <span className="font-jakarta text-navy text-[17px] leading-[1.85]">
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
                  style={{ background: "#2dfff8" }}
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

export default function ArticleRenderer({ article }: { article: Article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: "Payal Ponkshe",
      url: "https://payalponkshe.com",
      jobTitle: "Fintech & Payments Executive | AI Venture Builder",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[100px] md:pt-[120px] border-b border-rule">
        <div className="content-width py-4">
          <Link
            href="/insights"
            className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
          >
            &larr; Back to Insights
          </Link>
        </div>
      </div>

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
                  style={{ background: "rgba(36,53,110,0.08)" }}
                >
                  {article.topic}
                </span>
                <span className="text-slate opacity-40 text-[13px]">&middot;</span>
                <span className="font-jakarta font-medium text-slate text-[13px]">
                  {article.readTime} read
                </span>
                <span className="text-slate opacity-40 text-[13px]">&middot;</span>
                <span className="font-jakarta font-medium text-slate text-[13px]">
                  {article.date}
                </span>
              </div>

              <h1 className="font-jakarta font-extrabold text-navy text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em]">
                {article.title}
              </h1>

              <p className="font-jakarta text-slate text-[17px] leading-[1.75] mt-6">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="content-width">
          <div className="max-w-2xl flex flex-col gap-10">
            {article.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} index={i} />
            ))}

            <div className="border-t border-rule" />

            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
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
                <Button href="/book">Book a discovery call &rarr;</Button>
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
    </>
  );
}
