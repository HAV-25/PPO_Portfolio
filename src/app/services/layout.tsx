import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Advisory",
  description:
    "Consulting and advisory services from a senior fintech executive: enterprise transformation, agentic transformation and AI operating model design, and fractional COO services for regulated financial services companies.",
  keywords: [
    "fintech consulting",
    "agentic transformation services",
    "AI operating model design",
    "fractional COO fintech",
    "enterprise transformation advisory",
    "payments consulting Europe",
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
