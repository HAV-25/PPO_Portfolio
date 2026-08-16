import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { portfolioArticles } from "@/lib/portfolio-articles";
import { getAllPipelineArticles } from "@/lib/pipeline-content";
import { ARTICLE_TYPE, ARTICLE_PILLAR, getArticleHref } from "@/lib/insights-meta";
import PillarPageTemplate, { type PillarArticle } from "@/components/PillarPageTemplate";

const PILLAR = "Operating Models";
const PILLAR_SLUG = "operating-models";
const DESCRIPTION =
  "How organisations adopt new capabilities, build governance frameworks, and redesign work around intelligent systems. Writing from programme leadership at Mastercard and independent advisory work across fintech and AI-first companies.";

export const metadata: Metadata = {
  title: "Operating Models — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "operating model design",
    "enterprise transformation",
    "AI operating model",
    "programme delivery",
    "organisational design",
    "fintech operating models",
    "revenue per employee",
    "AI implementation strategy",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `Operating Models — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function OperatingModelsPage() {
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
        type: ARTICLE_TYPE[a.slug] ?? "Playbook",
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
