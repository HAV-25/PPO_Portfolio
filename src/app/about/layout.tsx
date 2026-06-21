import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Payal Ponkshe is a senior fintech executive, agentic transformation specialist, and AI venture builder with 18+ years at Mastercard, Wirecard, and across regulated financial services. Based in Germany.",
  keywords: [
    "Payal Ponkshe",
    "senior fintech executive",
    "AI venture builder",
    "agentic transformation",
    "Germany",
    "fintech advisor",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
