import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'insights')

export interface FAQItem {
  question: string
  answer: string
}

export interface PipelineArticleMeta {
  slug: string
  title: string
  description: string
  publishDate: string
  category: string
  readTime: string
  targetKeyword: string
  keywords: string[]
  status: string
  heroImage?: string
}

export interface PipelineArticle extends PipelineArticleMeta {
  content: string
  faqItems?: FAQItem[]
}

function slugFromFile(filename: string): string {
  return filename.replace(/\.mdx$/, '')
}

export function getPipelineArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(slugFromFile)
}

export function getPipelineArticle(slug: string): PipelineArticle | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  // Read companion meta.json for FAQs and extended keyword list
  let faqItems: FAQItem[] | undefined
  let additionalKeywords: string[] = []
  const metaPath = path.join(CONTENT_DIR, `${slug}.meta.json`)
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
      if (Array.isArray(meta.faqItems)) faqItems = meta.faqItems
      if (Array.isArray(meta.additionalKeywords)) additionalKeywords = meta.additionalKeywords
    } catch {
      // meta.json malformed — continue without it
    }
  }

  // Merge keywords: frontmatter array > meta.json additionalKeywords > targetKeyword
  const fmKeywords: string[] = Array.isArray(data.keywords) ? data.keywords : []
  const keywords = fmKeywords.length > 0
    ? fmKeywords
    : additionalKeywords.length > 0
      ? additionalKeywords
      : [data.targetKeyword ?? '']

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    publishDate: data.publishDate ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '8 min',
    targetKeyword: data.targetKeyword ?? '',
    keywords,
    status: data.status ?? 'draft',
    heroImage: data.heroImage,
    content,
    faqItems,
  }
}

export function getAllPipelineArticles(): PipelineArticleMeta[] {
  return getPipelineArticleSlugs()
    .map((slug) => {
      const a = getPipelineArticle(slug)
      if (!a) return null
      const { content: _content, faqItems: _faq, ...meta } = a // eslint-disable-line @typescript-eslint/no-unused-vars
      return meta
    })
    .filter(Boolean) as PipelineArticleMeta[]
}
