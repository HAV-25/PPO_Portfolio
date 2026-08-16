import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/lib/articles";
import { portfolioArticles, getPortfolioArticle } from "@/lib/portfolio-articles";
import { getPipelineArticle, getPipelineArticleSlugs } from "@/lib/pipeline-content";
import { ARTICLE_PILLAR, PILLAR_SLUGS, SLUG_TO_PILLAR } from "@/lib/insights-meta";
import ArticleRenderer from "@/components/ArticleRenderer";
import PortfolioArticleRenderer from "@/components/PortfolioArticleRenderer";
import PipelineArticleRenderer from "@/components/PipelineArticleRenderer";

export function generateStaticParams() {
  const params: { pillar: string; slug: string }[] = [];

  for (const a of portfolioArticles) {
    const pillar = ARTICLE_PILLAR[a.slug];
    if (pillar && PILLAR_SLUGS[pillar]) {
      params.push({ pillar: PILLAR_SLUGS[pillar], slug: a.slug });
    }
  }

  for (const a of articles) {
    const pillar = ARTICLE_PILLAR[a.slug];
    if (pillar && PILLAR_SLUGS[pillar]) {
      params.push({ pillar: PILLAR_SLUGS[pillar], slug: a.slug });
    }
  }

  for (const slug of getPipelineArticleSlugs()) {
    const pillar = ARTICLE_PILLAR[slug];
    if (pillar && PILLAR_SLUGS[pillar]) {
      params.push({ pillar: PILLAR_SLUGS[pillar], slug });
    }
  }

  return params;
}

type RouteParams = Promise<{ pillar: string; slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { pillar: pillarSlug, slug } = await params;
  const pillarName = SLUG_TO_PILLAR[pillarSlug];
  const canonicalBase = `https://payalponkshe.com/insights/${pillarSlug}/${slug}`;

  const article = getArticle(slug);
  if (article) {
    return {
      title: `${article.title} — Payal Ponkshe`,
      description: article.excerpt,
      keywords: article.keywords,
      authors: [{ name: "Payal Ponkshe", url: "https://payalponkshe.com" }],
      openGraph: {
        type: "article",
        title: article.title,
        description: article.excerpt,
        url: canonicalBase,
        siteName: "Payal Ponkshe",
        publishedTime: article.date,
        authors: ["Payal Ponkshe"],
        tags: article.keywords,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.excerpt,
        creator: "@payalponkshe",
      },
      alternates: { canonical: canonicalBase },
    };
  }

  const portfolio = getPortfolioArticle(slug);
  if (portfolio) {
    return {
      title: portfolio.seoTitle,
      description: portfolio.seoDescription,
      openGraph: { type: "article", url: canonicalBase },
      alternates: { canonical: canonicalBase },
    };
  }

  const pipeline = getPipelineArticle(slug);
  if (pipeline) {
    return {
      title: `${pipeline.title} — Payal Ponkshe`,
      description: pipeline.description,
      keywords: [pipeline.targetKeyword],
      authors: [{ name: "Payal Ponkshe", url: "https://payalponkshe.com" }],
      openGraph: {
        type: "article",
        title: pipeline.title,
        description: pipeline.description,
        url: canonicalBase,
        siteName: "Payal Ponkshe",
        publishedTime: pipeline.publishDate,
        authors: ["Payal Ponkshe"],
      },
      twitter: {
        card: "summary_large_image",
        title: pipeline.title,
        description: pipeline.description,
        creator: "@payalponkshe",
      },
      alternates: { canonical: canonicalBase },
    };
  }

  void pillarName; // used for future validation
  return { title: "Article not found — Payal Ponkshe" };
}

export default async function NestedArticlePage({ params }: { params: RouteParams }) {
  const { pillar: pillarSlug, slug } = await params;

  // Validate that pillar in URL matches the article's actual pillar
  const expectedPillar = ARTICLE_PILLAR[slug];
  const expectedPillarSlug = expectedPillar ? PILLAR_SLUGS[expectedPillar] : null;
  if (expectedPillarSlug && expectedPillarSlug !== pillarSlug) {
    redirect(`/insights/${expectedPillarSlug}/${slug}`);
  }

  const article = getArticle(slug);
  if (article) return <ArticleRenderer article={article} />;

  const portfolio = getPortfolioArticle(slug);
  if (portfolio) return <PortfolioArticleRenderer article={portfolio} />;

  const pipeline = getPipelineArticle(slug);
  if (pipeline) return <PipelineArticleRenderer article={pipeline} />;

  notFound();
}
