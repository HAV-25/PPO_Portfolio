import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { portfolioArticles } from '@/lib/portfolio-articles'
import { getPipelineArticleSlugs, getPipelineArticle } from '@/lib/pipeline-content'

const BASE = 'https://payalponkshe.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/experience`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/expertise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/give-back`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const staticArticles: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const portfolioPages: MetadataRoute.Sitemap = portfolioArticles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const pipelinePages: MetadataRoute.Sitemap = getPipelineArticleSlugs()
    .map((slug) => getPipelineArticle(slug))
    .filter((a) => a !== null && a.status === 'published')
    .map((a) => ({
      url: `${BASE}/insights/${a!.slug}`,
      lastModified: new Date(a!.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...staticPages, ...staticArticles, ...portfolioPages, ...pipelinePages]
}
