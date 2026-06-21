import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on fintech transformation, agentic AI, payments infrastructure, and what it actually takes to build AI-first operating models in regulated financial services.",
  keywords: [
    "fintech insights",
    "agentic AI",
    "AI transformation",
    "payments technology",
    "fintech thought leadership",
    "agentic transformation",
  ],
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
