import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ARTICLE_TYPE, ARTICLE_PILLAR, getArticleHref } from "@/lib/insights-meta";
import PillarPageTemplate, { type PillarArticle } from "@/components/PillarPageTemplate";

const PILLAR = "Personal Essays";
const PILLAR_SLUG = "personal-essays";
const DESCRIPTION =
  "Reflective writing on reinvention, career breaks, the personal side of building, and learning through change. Essays written from the inside of transitions, not from a safe distance.";

export const metadata: Metadata = {
  title: "Personal Essays — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "career reinvention",
    "career break",
    "re-entry workforce",
    "personal leadership",
    "founder journey",
    "professional reinvention",
    "career transition",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `Personal Essays — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function PersonalEssaysPage() {
  const pillarArticles: PillarArticle[] = articles
    .filter((a) => a.live && ARTICLE_PILLAR[a.slug] === PILLAR)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      readTime: a.readTime,
      date: a.date,
      type: ARTICLE_TYPE[a.slug] ?? "Personal Essay",
      href: getArticleHref(a.slug),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PillarPageTemplate
      pillar={PILLAR}
      pillarSlug={PILLAR_SLUG}
      description={DESCRIPTION}
      articles={pillarArticles}
    />
  );
}
