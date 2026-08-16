import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import { getAllPipelineArticles } from "@/lib/pipeline-content";
import { ARTICLE_TYPE, ARTICLE_PILLAR, getArticleHref } from "@/lib/insights-meta";
import PillarPageTemplate, { type PillarArticle } from "@/components/PillarPageTemplate";

const PILLAR = "AI Systems";
const PILLAR_SLUG = "ai-systems";
const DESCRIPTION =
  "Agentic workflows, human-in-the-loop design, automation architecture, content intelligence pipelines, and AI operating models. Writing grounded in hands-on venture builds and production deployments across n8n, Claude API, Supabase, and MCP integrations.";

export const metadata: Metadata = {
  title: "AI Systems — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "agentic AI",
    "AI operating model",
    "automation architecture",
    "AI implementation",
    "multi-agent systems",
    "AI workflows",
    "n8n automation",
    "Claude API",
    "agentic systems",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `AI Systems — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function AISystemsPage() {
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
