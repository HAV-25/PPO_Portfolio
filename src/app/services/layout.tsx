import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Payments, AI & Transformation Execution",
  description:
    "Defined consulting engagements across enterprise delivery, AI workflow and operating-model design, and implementation acceleration for payments, fintech and financial-services teams.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
