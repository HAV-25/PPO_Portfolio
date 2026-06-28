import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s — Payal Ponkshe",
    default: "Payal Ponkshe — Senior Fintech & Payments Executive | Agentic AI Transformation",
  },
  description:
    "Senior fintech and payments executive with 18+ years across Mastercard, Wirecard, and DeFi. Specialist in agentic transformation, AI operating models, and enterprise change programmes. Consulting and advisory for founders, COOs, and boards in regulated financial services. Based in Germany, open to Europe and remote.",
  keywords: [
    "senior fintech executive",
    "agentic transformation",
    "AI operating model",
    "fintech transformation consultant",
    "payments executive",
    "fractional COO fintech",
    "AI implementation",
    "regulated financial services",
    "enterprise transformation",
    "agentic AI",
    "fintech advisory Germany",
    "payments consulting Europe",
    "Mastercard",
    "AI venture builder",
  ],
  authors: [{ name: "Payal Ponkshe" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Payal Ponkshe — Senior Fintech & Payments Executive | Agentic AI Transformation",
    description:
      "Senior fintech and payments executive with 18+ years across Mastercard, Wirecard, and DeFi. Specialist in agentic transformation, AI operating models, and enterprise change programmes. Based in Germany, open to Europe and remote.",
    url: "https://payalponkshe.com",
    siteName: "Payal Ponkshe",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payal Ponkshe — Senior Fintech & Payments Executive | Agentic AI Transformation",
    description:
      "Senior fintech and payments executive with 18+ years across Mastercard, Wirecard, and DeFi. Specialist in agentic transformation, AI operating models, and enterprise change programmes.",
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
      jobTitle: "Senior Fintech & Payments Executive | Agentic AI Transformation Specialist",
      description:
        "Senior fintech executive with 18+ years at Mastercard, Wirecard, and DeFi. Specialist in agentic transformation, AI operating models, and enterprise change programmes.",
      url: "https://payalponkshe.com",
      sameAs: ["https://www.linkedin.com/in/payalponkshe/"],
      knowsAbout: [
        "Fintech transformation",
        "Agentic AI transformation",
        "Payments infrastructure",
        "Enterprise operating model design",
        "AI implementation",
        "Fractional COO services",
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
      name: "Payal Ponkshe — Senior Fintech Executive & Agentic Transformation Specialist",
      description:
        "Portfolio and consulting site for Payal Ponkshe, senior fintech executive and agentic transformation specialist.",
      author: { "@id": "https://payalponkshe.com/#person" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is agentic transformation in fintech?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agentic transformation refers to redesigning financial services operating models around autonomous AI agents that can sense, reason, and act — replacing manual workflows with AI-first processes that improve revenue per employee, not just operational efficiency.",
          },
        },
        {
          "@type": "Question",
          name: "What does a senior fintech executive do as a fractional COO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A fractional fintech COO provides embedded executive support for early-to-growth stage fintech and payments companies — designing operating models, building governance frameworks, leading partner strategy, and navigating regulatory complexity — without the cost or commitment of a full-time hire.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Payal Ponkshe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payal Ponkshe is a senior fintech and payments executive with 18+ years of experience across Mastercard, Wirecard, DeFi, and regulated financial services. She specialises in agentic transformation, AI operating model design, and enterprise change programmes. Based in Germany, she works with founders, COOs, and boards across Europe and remotely.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Payal Ponkshe offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Payal offers three core services: enterprise transformation and programme delivery for regulated financial services; AI implementation and agentic operating model design for founders and COOs; and fractional COO / strategic advisory for fintech and payments scale-ups.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-navy font-jakarta antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
