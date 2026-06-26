import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise — Payal Ponkshe",
  description:
    "Operating model transformation, AI systems design, market expansion, and zero-to-one venture building. Systems-level expertise for founders and executive teams in regulated industries and financial infrastructure.",
  keywords: [
    "fintech operating model",
    "AI systems design",
    "enterprise transformation",
    "market expansion payments",
    "venture operating model",
    "regulated financial services expertise",
  ],
};

export default function ExpertiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
