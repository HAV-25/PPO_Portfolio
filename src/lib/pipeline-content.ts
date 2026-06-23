import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'insights')

export interface PipelineArticleMeta {
  slug: string
  title: string
  description: string
  publishDate: string
  category: string
  readTime: string
  targetKeyword: string
  status: string
}

export interface PipelineArticle extends PipelineArticleMeta {
  content: string
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
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    publishDate: data.publishDate ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '8 min',
    targetKeyword: data.targetKeyword ?? '',
    status: data.status ?? 'draft',
    content,
  }
}

export function getAllPipelineArticles(): PipelineArticleMeta[] {
  return getPipelineArticleSlugs()
    .map((slug) => {
      const a = getPipelineArticle(slug)
      if (!a) return null
      const { content: _content, ...meta } = a // eslint-disable-line @typescript-eslint/no-unused-vars
      return meta
    })
    .filter(Boolean) as PipelineArticleMeta[]
}
