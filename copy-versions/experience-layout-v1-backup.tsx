import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "18+ years of fintech and payments leadership across Mastercard, Wirecard, DeFi, and regulated financial services. Senior fintech executive with a track record in agentic transformation, enterprise delivery, and AI venture building.",
  keywords: [
    "fintech executive career",
    "Mastercard",
    "payments leadership",
    "enterprise transformation",
    "senior fintech experience",
  ],
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
