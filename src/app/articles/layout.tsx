import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article Archive — Payal Ponkshe",
  description:
    "A complete archive of essays, frameworks, research notes, and field observations across financial infrastructure, AI systems, operating models, and emerging technologies.",
  keywords: [
    "fintech essays",
    "AI systems writing",
    "operating models",
    "financial infrastructure",
    "thought leadership",
    "physical AI robotics",
  ],
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
