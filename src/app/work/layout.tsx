import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Ventures",
  description:
    "AI ventures, enterprise programmes, and fintech case studies from senior fintech executive Payal Ponkshe — covering agentic transformation pipelines, AI-native products, and operating model design.",
  keywords: [
    "AI ventures",
    "fintech case studies",
    "agentic transformation",
    "AI pipeline architecture",
    "n8n workflows",
    "enterprise programme delivery",
    "AI operating model",
  ],
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
