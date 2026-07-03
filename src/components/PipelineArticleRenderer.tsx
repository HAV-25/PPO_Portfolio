import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { PipelineArticle } from '@/lib/pipeline-content'

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
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    author: {
      '@type': 'Person',
      '@id': 'https://payalponkshe.com/#payal',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Back nav */}
      <div className="pt-[100px] md:pt-[120px] border-b border-rule">
        <div className="content-width py-4">
          <Link
            href="/insights"
            className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
          >
            &larr; Back to Insights
          </Link>
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

            <h1 className="font-display font-bold text-navy text-[32px] md:text-[44px] leading-[1.1]">
              {article.title}
            </h1>

            <p className="font-jakarta text-slate text-[17px] leading-[1.75] mt-6">
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

            <div className="border-t border-rule mt-4" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
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

            <Link
              href="/insights"
              className="font-jakarta font-medium text-[13px] text-slate hover:text-navy transition-colors flex items-center gap-1.5"
            >
              &larr; Back to all insights
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
