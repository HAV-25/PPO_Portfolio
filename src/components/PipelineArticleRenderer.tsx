import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPipelineArticles } from '@/lib/pipeline-content'
import type { PipelineArticle } from '@/lib/pipeline-content'
import { ARTICLE_PILLAR, PILLAR_SLUGS, getArticleHref } from '@/lib/insights-meta'

// ─── MDX component overrides (design system) ──────────────────────────────────

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display font-bold text-navy text-[28px] md:text-[36px] leading-[1.15] mt-12 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-jakarta font-bold text-navy text-[22px] md:text-[26px] leading-[1.25] mt-10 mb-4 border-l-4 pl-4" style={{ borderLeftColor: '#1BAFBF' }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-jakarta font-semibold text-navy text-[18px] leading-[1.3] mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-jakarta text-navy text-[18px] leading-[1.8] mb-0" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-navy" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-navy" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="flex flex-col gap-2 pl-0 list-none" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="flex flex-col gap-2 pl-0 list-none counter-reset-list" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="font-jakarta text-navy text-[18px] leading-[1.8] flex gap-3 items-start">
      <span className="mt-[10px] flex-shrink-0 w-2 h-2 rounded-full" style={{ background: '#1BAFBF' }} aria-hidden="true" />
      <span {...props} />
    </li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-4 pl-7 py-2 my-6" style={{ borderLeftColor: '#1BAFBF' }}>
      <div className="font-jakarta text-navy text-[20px] leading-[1.6] italic" {...props} />
    </blockquote>
  ),
  hr: () => <hr className="border-0 border-t border-rule my-8" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-navy underline decoration-[#1BAFBF] decoration-2 underline-offset-2 hover:opacity-70 transition-opacity"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8 -mx-1">
      <table
        className="w-full border-collapse font-jakarta text-navy text-[14px]"
        style={{ borderTop: '2px solid #24262B' }}
        {...props}
      />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead style={{ background: 'rgba(36,38,43,0.06)' }} {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left font-bold text-[11px] tracking-[0.08em] uppercase text-slate px-4 py-3"
      style={{ borderBottom: '1px solid rgba(36,38,43,0.2)' }}
      {...props}
    />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className="transition-colors duration-100 hover:bg-[rgba(27,175,191,0.06)]"
      style={{ borderBottom: '1px solid rgba(36,38,43,0.12)' }}
      {...props}
    />
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 align-top leading-[1.65] text-[14px]" {...props}>
      {children}
    </td>
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-[14px] bg-navy/[0.06] px-1.5 py-0.5 rounded text-navy" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-navy/[0.04] border border-rule p-5 overflow-x-auto my-6 font-mono text-[14px] text-navy leading-[1.7]" {...props} />
  ),
}

// ─── Category label map ────────────────────────────────────────────────────────

function categoryLabel(category: string): string {
  const MAP: Record<string, string> = {
    agentic_builds: 'Agentic Builds',
    fintech_strategy: 'Fintech Strategy',
    ai_implementation: 'AI Implementation',
    regulatory: 'Regulatory',
    notes: 'Notes',
  }
  return MAP[category] ?? category.replace(/_/g, ' ')
}

// ─── Main component ────────────────────────────────────────────────────────────

export default async function PipelineArticleRenderer({ article }: { article: PipelineArticle }) {
  // Related articles from same category
  const allPipeline = getAllPipelineArticles()
  const relatedArticles = allPipeline
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  const pillar = ARTICLE_PILLAR[article.slug]
  const pillarSlug = pillar ? PILLAR_SLUGS[pillar] : null

  const wordCount = Math.round(article.content.split(/\s+/).length)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    articleSection: categoryLabel(article.category),
    wordCount,
    author: {
      '@type': 'Person',
      '@id': 'https://payalponkshe.com/#person',
      name: 'Payal Ponkshe',
      jobTitle: 'Fintech & Payments Executive | AI Venture Builder',
      url: 'https://payalponkshe.com',
      sameAs: ['https://www.linkedin.com/in/payalponkshe/'],
    },
    publisher: {
      '@type': 'Person',
      name: 'Payal Ponkshe',
      url: 'https://payalponkshe.com',
    },
    url: `https://payalponkshe.com/insights/${article.slug}`,
    mainEntityOfPage: `https://payalponkshe.com/insights/${article.slug}`,
    keywords: article.targetKeyword,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Insights', item: 'https://payalponkshe.com/insights' },
      { '@type': 'ListItem', position: 2, name: article.title, item: `https://payalponkshe.com/insights/${article.slug}` },
    ],
  }

  return (
    <>
      <div id="top" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb nav */}
      <div className="pt-[100px] md:pt-[120px]">
        <div className="content-width py-4 border-b border-rule">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
            >
              Insights
            </Link>
            {pillar && pillarSlug && (
              <>
                <span className="text-slate opacity-40 text-[13px]">/</span>
                <Link
                  href={`/insights/${pillarSlug}`}
                  className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
                >
                  {pillar}
                </Link>
              </>
            )}
            <span className="text-slate opacity-40 text-[13px]">/</span>
            <span className="font-jakarta font-medium text-[13px] text-navy opacity-70 line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-spacing pb-0">
        <div className="content-width">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span
                className="font-jakarta font-semibold text-navy text-[11px] tracking-[0.08em] uppercase px-3 py-1 rounded-tag"
                style={{ background: 'rgba(36,38,43,0.08)' }}
              >
                {categoryLabel(article.category)}
              </span>
              <span className="text-slate opacity-40 text-[13px]">&middot;</span>
              <span className="font-jakarta font-medium text-slate text-[13px]">
                {article.readTime} read
              </span>
              <span className="text-slate opacity-40 text-[13px]">&middot;</span>
              <span className="font-jakarta font-medium text-slate text-[13px]">
                {article.publishDate}
              </span>
            </div>

            <h1 className="font-display font-bold text-navy text-[32px] md:text-[48px] leading-[1.1]">
              {article.title}
            </h1>

            <p className="font-jakarta text-slate text-[17px] leading-[1.75] mt-6 max-w-[600px]">
              {article.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {article.heroImage && (
        <div className="content-width pb-0">
          <div className="max-w-3xl">
            <img
              src={article.heroImage}
              alt={article.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              style={{ maxHeight: '420px' }}
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="max-w-2xl flex flex-col gap-7">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="section-spacing pt-0 border-t border-rule">
          <div className="content-width">
            <div className="max-w-2xl">
              <p className="font-mono font-semibold text-slate text-[10px] tracking-[0.08em] uppercase mb-6">
                Related reading
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((r) => (
                  <Link key={r.slug} href={getArticleHref(r.slug)} className="block group">
                    <div className="relative border border-rule p-4 overflow-hidden">
                      <span
                        className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-[width] duration-150 ease-in-out"
                        style={{ backgroundColor: '#1BAFBF' }}
                        aria-hidden="true"
                      />
                      <p className="font-mono text-[9px] tracking-[0.08em] uppercase text-slate mb-2">
                        {r.readTime}
                      </p>
                      <p className="font-jakarta font-semibold text-navy text-[14px] leading-[1.3] group-hover:underline group-hover:decoration-cyan group-hover:decoration-[3px] group-hover:underline-offset-3 transition-all duration-150">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Author + CTA */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <div className="max-w-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-jakarta font-bold text-navy text-[15px]">
                Payal Ponkshe
              </p>
              <p className="font-jakarta text-slate text-[13px] mt-0.5">
                Fintech &amp; Payments Executive &middot; AI Venture Builder
              </p>
              <a
                href="https://linkedin.com/in/payalponkshe"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jakarta font-medium text-[13px] text-navy underline-cyan hover:opacity-70 transition-opacity inline-block mt-3"
              >
                Follow on LinkedIn &rarr;
              </a>
            </div>
            <Link
              href="/book"
              className="inline-block font-jakarta font-bold text-cream bg-navy px-6 py-3 text-[14px] hover:opacity-90 transition-opacity"
            >
              Book a discovery call &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <div className="pb-16">
        <div className="content-width">
          <div className="max-w-2xl flex items-center justify-between">
            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
            >
              &larr; Back to insights
            </Link>
            <a
              href="#top"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors"
            >
              &uarr; Top
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
