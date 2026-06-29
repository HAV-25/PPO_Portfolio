import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/lib/articles";
import { portfolioArticles, getPortfolioArticle } from "@/lib/portfolio-articles";
import { getPipelineArticle, getPipelineArticleSlugs } from "@/lib/pipeline-content";
import ArticleRenderer from "@/components/ArticleRenderer";
import PortfolioArticleRenderer from "@/components/PortfolioArticleRenderer";
import PipelineArticleRenderer from "@/components/PipelineArticleRenderer";

export function generateStaticParams() {
  return [
    ...articles.map((a) => ({ slug: a.slug })),
    ...portfolioArticles.map((a) => ({ slug: a.slug })),
    ...getPipelineArticleSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticle(slug);
  if (article) {
    const url = `https://payalponkshe.com/insights/${article.slug}`;
    return {
      title: `${article.title} \u2014 Payal Ponkshe`,
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
      title: `${pipeline.title} \u2014 Payal Ponkshe`,
      description: pipeline.description,
      keywords: pipeline.keywords,
      authors: [{ name: "Payal Ponkshe", url: "https://payalponkshe.com" }],
      robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
      openGraph: {
        type: "article",
        title: pipeline.title,
        description: pipeline.description,
        url,
        siteName: "Payal Ponkshe",
        publishedTime: pipeline.publishDate,
        modifiedTime: pipeline.publishDate,
        authors: ["Payal Ponkshe"],
        tags: pipeline.keywords,
        locale: "en_GB",
      },
      twitter: {
        card: "summary_large_image",
        title: pipeline.title,
        description: pipeline.description,
        creator: "@payalponkshe",
        site: "@payalponkshe",
      },
      alternates: { canonical: url },
    };
  }

  return { title: "Article not found \u2014 Payal Ponkshe" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getArticle(slug);
  if (article) return <ArticleRenderer article={article} />;

  const portfolio = getPortfolioArticle(slug);
  if (portfolio) return <PortfolioArticleRenderer article={portfolio} />;

  const pipeline = getPipelineArticle(slug);
  if (pipeline) return <PipelineArticleRenderer article={pipeline} />;

  notFound();
}
