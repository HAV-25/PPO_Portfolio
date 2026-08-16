import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import { getAllPipelineArticles } from "@/lib/pipeline-content";
import { ARTICLE_TYPE, ARTICLE_PILLAR, getArticleHref } from "@/lib/insights-meta";
import PillarPageTemplate, { type PillarArticle } from "@/components/PillarPageTemplate";

const PILLAR = "Leadership & Human Systems";
const PILLAR_SLUG = "leadership-human-systems";
const DESCRIPTION =
  "How organisations build trust, develop leaders, and combine human judgement with intelligent systems. Writing on what it takes to lead through technology transformation — and why the human layer is often the hardest part.";

export const metadata: Metadata = {
  title: "Leadership & Human Systems — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "leadership",
    "human systems",
    "organisational change",
    "AI leadership",
    "enterprise leadership",
    "fintech leadership",
    "transformation leadership",
    "AI transformation",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `Leadership & Human Systems — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function LeadershipHumanSystemsPage() {
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
        type: ARTICLE_TYPE[a.slug] ?? "Essay",
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
