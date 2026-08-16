import Link from "next/link";
import { articles } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import { getAllPipelineArticles } from "@/lib/pipeline-content";
import {
  ARTICLE_TYPE,
  ARTICLE_PILLAR,
  PILLARS,
  PILLAR_SLUGS,
  getYear,
  getArticleHref,
} from "@/lib/insights-meta";

// ─── Data assembly ────────────────────────────────────────────────────────────

type ArchiveEntry = {
  slug: string;
  title: string;
  readTime: string;
  date: string;
  year: string;
  href: string;
};

function buildArchive(): Record<string, ArchiveEntry[]> {
  const grouped: Record<string, ArchiveEntry[]> = {};
  for (const p of PILLARS) grouped[p] = [];

  for (const a of portfolioArticles) {
    const pillar = ARTICLE_PILLAR[a.slug];
    if (pillar && grouped[pillar]) {
      grouped[pillar].push({
        slug: a.slug,
        title: a.title,
        readTime: a.readTime,
        date: a.date,
        year: getYear(a.date),
        href: getArticleHref(a.slug),
      });
    }
  }

  for (const a of articles) {
    if (!a.live) continue;
    const pillar = ARTICLE_PILLAR[a.slug];
    if (pillar && grouped[pillar]) {
      grouped[pillar].push({
        slug: a.slug,
        title: a.title,
        readTime: a.readTime,
        date: a.date,
        year: getYear(a.date),
        href: getArticleHref(a.slug),
      });
    }
  }

  for (const a of getAllPipelineArticles()) {
    const pillar = ARTICLE_PILLAR[a.slug];
    if (pillar && grouped[pillar]) {
      grouped[pillar].push({
        slug: a.slug,
        title: a.title,
        readTime: a.readTime,
        date: a.publishDate,
        year: getYear(a.publishDate),
        href: getArticleHref(a.slug),
      });
    }
  }

  // Sort each pillar: most recent year first, then by array order within year
  for (const pillar of PILLARS) {
    grouped[pillar].sort((a, b) => Number(b.year) - Number(a.year));
  }

  return grouped;
}

// ─── Components ───────────────────────────────────────────────────────────────

function ArchiveRow({ entry }: { entry: ArchiveEntry }) {
  const type = ARTICLE_TYPE[entry.slug] ?? "Essay";
  return (
    <Link
      href={entry.href}
      className="group flex items-baseline gap-4 py-3.5 border-b border-rule hover:border-navy transition-colors duration-150"
    >
      <span className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase flex-shrink-0 w-[110px]">
        {type}
      </span>
      <span className="font-jakarta font-semibold text-navy text-[15px] leading-[1.35] flex-1 group-hover:underline group-hover:decoration-cyan group-hover:decoration-[3px] group-hover:underline-offset-3 transition-all duration-150">
        {entry.title}
      </span>
      <span className="font-jakarta text-slate text-[12px] flex-shrink-0 hidden sm:block w-16 text-right">
        {entry.readTime}
      </span>
      <span className="font-jakarta text-slate text-[12px] flex-shrink-0 hidden sm:block w-10 text-right">
        {entry.year}
      </span>
    </Link>
  );
}

function PillarSection({
  pillar,
  entries,
}: {
  pillar: string;
  entries: ArchiveEntry[];
}) {
  const isPhysical = pillar === "Physical AI & Robotics";
  const anchorId = PILLAR_SLUGS[pillar] ?? pillar.toLowerCase().replace(/\s/g, "-");

  // Group by year
  const byYear: Record<string, ArchiveEntry[]> = {};
  for (const e of entries) {
    if (!byYear[e.year]) byYear[e.year] = [];
    byYear[e.year].push(e);
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id={anchorId} className="pt-14 first:pt-0 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-navy flex-shrink-0" aria-hidden="true" />
        <h2 className="font-jakarta font-bold text-slate text-[11px] tracking-[0.08em] uppercase">
          {pillar}
        </h2>
        {isPhysical && (
          <span
            className="font-jakarta font-bold text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-tag"
            style={{ background: "rgba(27,175,191,0.18)", color: "#24262B" }}
          >
            Emerging Focus
          </span>
        )}
      </div>

      {isPhysical && entries.length === 0 ? (
        <div className="border-l-4 border-rule pl-5 py-2 max-w-lg">
          <p className="font-jakarta font-semibold text-navy text-[15px] leading-[1.5]">
            Research in progress
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {[
              "Consumer robotics ecosystems",
              "Embodied AI and edge intelligence",
              "Multi-agent physical systems",
              "Human-robot collaboration",
              "Operating models for large-scale deployment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-jakarta text-slate text-[13px] mt-[2px] flex-shrink-0">
                  &middot;
                </span>
                <span className="font-jakarta text-slate text-[14px] leading-[1.6]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : entries.length === 0 ? (
        <p className="font-jakarta text-slate text-[14px] py-4">
          Coming soon.
        </p>
      ) : (
        <div>
          {years.map((year) => (
            <div key={year} className="mb-2">
              {years.length > 1 && (
                <p className="font-jakarta font-bold text-slate text-[10px] tracking-[0.08em] uppercase mb-0 pt-2 pb-1 opacity-50">
                  {year}
                </p>
              )}
              {byYear[year].map((entry) => (
                <ArchiveRow key={entry.slug} entry={entry} />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
  const archive = buildArchive();

  return (
    <div className="pt-[120px] md:pt-[140px] pb-24">
      <div className="content-width">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Link
            href="/insights"
            className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5 mb-8"
          >
            &larr; Back to Insights
          </Link>
          <h1 className="font-display font-bold text-navy text-[36px] md:text-[48px] leading-[1.06]">
            Article Archive
          </h1>
          <p className="font-jakarta text-slate text-[17px] leading-[1.65] mt-5">
            A complete archive of essays, frameworks, research notes, and field
            observations across financial infrastructure, AI systems, operating
            models, and emerging technologies.
          </p>
        </div>

        {/* Pillar nav */}
        <nav
          className="flex flex-wrap gap-x-7 gap-y-2 pb-6 mb-14 border-b border-rule"
          aria-label="Jump to pillar"
        >
          {PILLARS.map((pillar) => (
            <a
              key={pillar}
              href={`#${PILLAR_SLUGS[pillar]}`}
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors duration-150"
            >
              {pillar}
            </a>
          ))}
        </nav>

        {/* Archive sections */}
        <div className="max-w-3xl">
          {PILLARS.map((pillar) => (
            <PillarSection
              key={pillar}
              pillar={pillar}
              entries={archive[pillar]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
