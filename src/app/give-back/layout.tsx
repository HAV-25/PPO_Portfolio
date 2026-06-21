import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Re-Entry Programme",
  description:
    "Free 30-minute career re-entry sessions with Payal Ponkshe — senior fintech executive offering honest guidance for professionals returning to work after a career break. Priority to fintech, payments, and technology professionals.",
  keywords: [
    "career re-entry fintech",
    "return to work support",
    "career break fintech",
    "fintech career coaching",
  ],
};

export default function GiveBackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
