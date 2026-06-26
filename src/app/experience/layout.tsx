import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operating Experience — Payal Ponkshe",
  description:
    "18+ years building, scaling, and operationalizing systems across payments, regulated financial services, AI ventures, and emerging technology environments. VP-level delivery at Mastercard, payment infrastructure at Wirecard, AI-native systems building.",
  keywords: [
    "fintech operating experience",
    "Mastercard VP",
    "payments infrastructure",
    "enterprise operating model",
    "AI systems builder",
    "regulated financial services",
  ],
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
