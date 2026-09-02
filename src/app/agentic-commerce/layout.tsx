import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Commerce Readiness & Enablement",
  description:
    "Agentic Commerce readiness and implementation for payments, fintech, financial-services and commerce businesses. Assess readiness, prove one agent-ready journey and build the capability to scale.",
  alternates: { canonical: "/agentic-commerce" },
  openGraph: {
    title: "Is your business ready for Agentic Commerce?",
    description: "Assess the journey. Find the gaps. Prove one agent-ready transaction pattern. Build the capability to scale.",
    url: "https://payalponkshe.com/agentic-commerce",
    type: "website",
  },
};

export default function AgenticCommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
