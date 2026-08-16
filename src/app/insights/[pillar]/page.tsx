import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/lib/articles";
import { portfolioArticles, getPortfolioArticle } from "@/lib/portfolio-articles";
import { getPipelineArticle, getPipelineArticleSlugs } from "@/lib/pipeline-content";
import { ARTICLE_PILLAR, PILLAR_SLUGS } from "@/lib/insights-meta";
import ArticleRenderer from "@/components/ArticleRenderer";
import PortfolioArticleRenderer from "@/components/PortfolioArticleRenderer";
import PipelineArticleRenderer from "@/components/PipelineArticleRenderer";

// Only generate static params for articles that have NO pillar mapping.
// Articles with a pillar redirect to /insights/[pillar]/[slug].
// The param is named "pillar" because this folder is [pillar], but at this
// route level it's actually catching flat article slugs (e.g. /insights/some-slug).
export function generateStaticParams() {
  const noPillar = (slug: string) => !ARTICLE_PILLAR[slug];
  return [
    ...articles.filter((a) => noPillar(a.slug)).map((a) => ({ pillar: a.slug })),
    ...portfolioArticles.filter((a) => noPillar(a.slug)).map((a) => ({ pillar: a.slug })),
    ...getPipelineArticleSlugs().filter(noPillar).map((slug) => ({ pillar: slug })),
  ];
}

type RouteParams = Promise<{ pillar: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { pillar: slug } = await params;

  const article = getArticle(slug);
  if (article) {
    const url = `https://payalponkshe.com/insights/${article.slug}`;
    return {
      title: `${article.title} — Payal Ponkshe`,
      description: article.excerpt,
      keywords: article.keywords,
      authors: [{ name: "Payal Ponkshe", url: "https://payalponkshe.com" }],
      openGraph: {
        type: "article",
        title: article.title,
        description: article.excerpt,
        url,
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
      alternates: { canonical: url },
    };
  }

  const portfolio = getPortfolioArticle(slug);
  if (portfolio) {
    return {
      title: portfolio.seoTitle,
      description: portfolio.seoDescription,
      openGraph: { type: "article" },
    };
  }

  const pipeline = getPipelineArticle(slug);
  if (pipeline) {
    const url = `https://payalponkshe.com/insights/${pipeline.slug}`;
    return {
      title: `${pipeline.title} — Payal Ponkshe`,
      description: pipeline.description,
      keywords: [pipeline.targetKeyword],
      authors: [{ name: "Payal Ponkshe", url: "https://payalponkshe.com" }],
      openGraph: {
        type: "article",
        title: pipeline.title,
        description: pipeline.description,
        url,
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
      alternates: { canonical: url },
    };
  }

  return { title: "Article not found — Payal Ponkshe" };
}

export default async function ArticlePage({ params }: { params: RouteParams }) {
  const { pillar: slug } = await params;

  // Redirect to pillar-nested URL if this article has a pillar mapping
  const pillar = ARTICLE_PILLAR[slug];
  if (pillar && PILLAR_SLUGS[pillar]) {
    redirect(`/insights/${PILLAR_SLUGS[pillar]}/${slug}`);
  }

  const article = getArticle(slug);
  if (article) return <ArticleRenderer article={article} />;

  const portfolio = getPortfolioArticle(slug);
  if (portfolio) return <PortfolioArticleRenderer article={portfolio} />;

  const pipeline = getPipelineArticle(slug);
  if (pipeline) return <PipelineArticleRenderer article={pipeline} />;

  notFound();
}
