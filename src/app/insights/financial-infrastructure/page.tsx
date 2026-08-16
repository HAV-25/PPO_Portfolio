import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import { getAllPipelineArticles } from "@/lib/pipeline-content";
import { ARTICLE_TYPE, ARTICLE_PILLAR, getArticleHref } from "@/lib/insights-meta";
import PillarPageTemplate, { type PillarArticle } from "@/components/PillarPageTemplate";

const PILLAR = "Financial Infrastructure";
const PILLAR_SLUG = "financial-infrastructure";
const DESCRIPTION =
  "Payments infrastructure, open banking, embedded finance, AI-native commerce, and how regulatory ecosystems shape market expansion. Writing grounded in 18+ years building and leading in regulated financial services.";

export const metadata: Metadata = {
  title: "Financial Infrastructure — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "fintech infrastructure",
    "payments technology",
    "open banking",
    "embedded finance",
    "EU payments regulation",
    "ISO 20022",
    "agentic commerce",
    "fintech transformation",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `Financial Infrastructure — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function FinancialInfrastructurePage() {
  const pillarArticles: PillarArticle[] = [];

  for (const a of portfolioArticles) {
    if (ARTICLE_PILLAR[a.slug] === PILLAR) {
      pillarArticles.push({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        readTime: a.readTime,
        date: a.date,
        type: ARTICLE_TYPE[a.slug] ?? "Essay",
        href: getArticleHref(a.slug),
      });
    }
  }

  for (const a of articles) {
    if (a.live && ARTICLE_PILLAR[a.slug] === PILLAR) {
      pillarArticles.push({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        readTime: a.readTime,
        date: a.date,
        type: ARTICLE_TYPE[a.slug] ?? "Essay",
        href: getArticleHref(a.slug),
      });
    }
  }

  for (const a of getAllPipelineArticles()) {
    if (ARTICLE_PILLAR[a.slug] === PILLAR) {
      pillarArticles.push({
        slug: a.slug,
        title: a.title,
        excerpt: a.description,
        readTime: a.readTime,
        date: a.publishDate,
        type: ARTICLE_TYPE[a.slug] ?? "Research Note",
        href: getArticleHref(a.slug),
      });
    }
  }

  pillarArticles.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PillarPageTemplate
      pillar={PILLAR}
      pillarSlug={PILLAR_SLUG}
      description={DESCRIPTION}
      articles={pillarArticles}
    />
  );
}
