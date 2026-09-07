import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { portfolioArticles } from '@/lib/portfolio-articles'
import { getPipelineArticleSlugs } from '@/lib/pipeline-content'
import { getArticleHref } from '@/lib/insights-meta'

const BASE_URL = 'https://payalponkshe.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/agentic-commerce`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/articles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/insights/financial-infrastructure`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/insights/ai-systems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/insights/operating-models`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/insights/physical-ai-robotics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/insights/leadership-human-systems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/insights/personal-essays`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/experience`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/give-back`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/causes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const portfolioArticlePages: MetadataRoute.Sitemap = portfolioArticles.map((article) => ({
    url: `${BASE_URL}${getArticleHref(article.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const liveArticlePages: MetadataRoute.Sitemap = articles
    .filter((article) => article.live)
    .map((article) => ({
      url: `${BASE_URL}${getArticleHref(article.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))

  const pipelineArticlePages: MetadataRoute.Sitemap = getPipelineArticleSlugs().map((slug) => ({
    url: `${BASE_URL}${getArticleHref(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...portfolioArticlePages, ...liveArticlePages, ...pipelineArticlePages]
}
