import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Commerce Readiness & Enablement",
  description:
    "Agentic Commerce readiness and enablement for payments, fintech, retailers, marketplaces and commerce platforms. Prepare the commerce stack for trusted agent-mediated buying, selling and transactions.",
  alternates: { canonical: "/agentic-commerce" },
  openGraph: {
    title: "Is your commerce stack ready for AI agents?",
    description: "Assess the journey. Find the gaps. Prove one agent-mediated pattern. Build the capability to scale.",
    url: "https://payalponkshe.com/agentic-commerce",
    type: "website",
  },
};

export default function AgenticCommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
