import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-jakarta", display: "swap", preload: true });
const plexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap", preload: true });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap", preload: true });

export const metadata: Metadata = {
  title: {
    template: "%s — Payal Ponkshe",
    default: "Payal Ponkshe — Payments, AI & Transformation Execution",
  },
  description:
    "Payments and fintech operator with 18+ years across Mastercard, Wirecard and regulated financial services. Independent advisor and builder working across enterprise delivery, AI-enabled operating models and the emerging Agentic Commerce transition. Europe & UAE.",
  keywords: [
    "payments transformation",
    "fintech transformation",
    "enterprise delivery",
    "AI operating model",
    "Agentic Commerce readiness",
    "Agentic Commerce implementation",
    "financial services AI",
    "payments consulting Europe",
    "enterprise implementation",
  ],
  authors: [{ name: "Payal Ponkshe" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Payal Ponkshe — Payments, AI & Transformation Execution",
    description:
      "Enterprise payments experience meets hands-on AI capability. Working where emerging technology, operating models and implementation need to become real.",
    url: "https://payalponkshe.com",
    siteName: "Payal Ponkshe",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payal Ponkshe — Payments, AI & Transformation Execution",
    description:
      "Payments, enterprise transformation and hands-on AI — with a current focus on Agentic Commerce Readiness & Enablement.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://payalponkshe.com/#person",
      name: "Payal Ponkshe",
      jobTitle: "Payments, AI & Transformation Advisor",
      description:
        "Payments and fintech operator with 18+ years across Mastercard, Wirecard and regulated financial services, combining enterprise execution with hands-on AI systems work.",
      url: "https://payalponkshe.com",
      sameAs: ["https://www.linkedin.com/in/payalponkshe/"],
      knowsAbout: [
        "Payments infrastructure",
        "Fintech transformation",
        "Enterprise implementation",
        "Professional Services",
        "AI workflow design",
        "AI operating models",
        "Agentic Commerce readiness",
        "Enterprise transformation",
        "Regulated financial services",
      ],
      worksFor: { "@type": "Organization", name: "AppsBrite UG", location: "Germany" },
      alumniOf: [
        { "@type": "Organization", name: "Mastercard" },
        { "@type": "Organization", name: "Wirecard AG" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "DE", addressRegion: "Germany" },
    },
    {
      "@type": "WebSite",
      "@id": "https://payalponkshe.com/#website",
      url: "https://payalponkshe.com",
      name: "Payal Ponkshe — Payments, AI & Transformation Execution",
      description:
        "Portfolio, insights and consulting site for Payal Ponkshe, focused on payments, enterprise execution, AI-enabled operating models and Agentic Commerce readiness.",
      author: { "@id": "https://payalponkshe.com/#person" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="bg-cream text-navy font-jakarta antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
