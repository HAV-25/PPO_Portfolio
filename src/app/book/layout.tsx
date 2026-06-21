import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a free 30-minute discovery call with Payal Ponkshe, senior fintech executive and agentic transformation specialist. No pitch — an honest conversation about your challenge.",
  keywords: [
    "book fintech consultant",
    "fractional COO discovery call",
    "agentic transformation advisory",
    "fintech consulting call",
  ],
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
