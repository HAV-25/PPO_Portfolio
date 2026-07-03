import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pivot, Upskill & Position — Give-Back Programme",
  description:
    "Free 30-minute sessions with Payal Ponkshe for professionals repositioning their careers as AI reshapes work — an honest gap assessment, a concrete upskilling focus, and a first step on positioning. Priority to fintech, payments, and technology professionals.",
  keywords: [
    "career pivot AI",
    "upskilling for AI",
    "career repositioning fintech",
    "AI career transition",
  ],
};

export default function GiveBackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
