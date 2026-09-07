"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const credibilityStrip = [
  { stat: "18+ years", label: "Payments, fintech, and regulated financial services" },
  { stat: "120+ team scale", label: "Global delivery and implementation teams across four regions" },
  { stat: "$25M+ partnerships", label: "Strategic ecosystem programmes with Microsoft and Verizon" },
  { stat: "Zero-to-one builder", label: "AI-native ventures, automation systems, and operating frameworks" },
];

const chapters = [
  {
    chapterLabel: "Current Chapter",
    id: "current",
    title: "Independent AI Venture Builder & Strategic Advisor",
    company: "AppsBrite UG (Founder)",
    location: "Germany",
    period: "August 2024 – Present",
    intro: "Building AI-native systems and applying enterprise transformation, commercialisation and operating-model experience to selected consulting work.",
    bullets: [
      "Designed, built, and shipped AI products hands-on: two live in production, including a German exam-prep app on Google Play, alongside active builds across content intelligence, agentic workflows, and mobile AI.",
      "Delivered commercialisation and operating-model consulting work, including a blueprint for thyssenkrupp’s automotive circularity initiative.",
      "Working toolkit spans n8n, Supabase, React Native and MCP integrations, alongside Anthropic Claude, Claude Code and Cowork, plus OpenAI ChatGPT, Codex and APIs across research, product design, coding and implementation.",
    ],
    featured: false,
  },
  {
    chapterLabel: "Zero-to-One Operating Models",
    id: "skyllfull",
    title: "Co-Founder & Head of Operations",
    company: "Skyllfull",
    location: "Germany",
    period: "July 2022 – August 2024",
    intro: "Co-founded a specialised talent ecosystem for digital assets, DeFi, Web3, and digital banking clients, translating market demand into a zero-to-one operating model.",
    bullets: [
      "Designed the end-to-end operating model across commercial structure, delivery, vendor partnerships, and client onboarding.",
      "Validated product-market fit through pilots and design partnerships with startup and enterprise clients.",
      "Generated €250K+ qualified pipeline within 30 days of launch.",
    ],
    featured: false,
  },
  {
    chapterLabel: "Enterprise Scale",
    id: "mastercard-vp",
    title: "Vice President, Global Head Delivery & Operations",
    company: "Mastercard",
    location: "Ireland",
    period: "January 2020 – July 2022",
    intro: "Led the global delivery and operating model for Mastercard's R&D and innovation organisation across four regions, connecting emerging-technology partnerships, implementation teams, client engagement, and scalable execution governance.",
    bullets: [
      "Structured the operating model for a 120+ person technical implementation organisation across Europe, North America, MEA, and APAC.",
      "Managed $25M+ strategic technology partnerships with Microsoft and Verizon.",
      "Reduced development cycles by approximately 30% through scalable programme governance and delivery redesign.",
      "Supported 200% year-over-year client engagement growth through multi-region innovation-hub execution and executive-facing client experiences.",
    ],
    featured: true,
  },
  {
    chapterLabel: "Market Expansion",
    id: "mastercard-bd",
    title: "Director, Business Development — Digital Payments",
    company: "Mastercard",
    location: "Germany",
    period: "April 2017 – December 2019",
    intro: "Built market development and digital-payments adoption across Germany, connecting fintechs, merchants, and enterprise partners into Mastercard's digital ecosystem.",
    bullets: [
      "Led $12M+ market-development programmes using a digital-first growth strategy.",
      "Drove nationwide German rollout of an API-first digital-wallet solution.",
      "Expanded the customer portfolio into six new segments within 12 months, supporting 20% revenue growth.",
      "Reduced deployment timelines by approximately 30% and implementation costs by approximately 10% through onboarding and delivery optimisation.",
    ],
    featured: false,
  },
  {
    chapterLabel: "Payment Infrastructure Implementation",
    id: "wirecard",
    title: "Team Lead, Professional Services — Customer Implementation",
    company: "Wirecard AG",
    location: "Germany",
    period: "April 2013 – April 2017",
    intro: "Led Professional Services and customer implementation across issuing, wallet, and payment-infrastructure programmes for enterprise clients across Europe.",
    bullets: [
      "Led strategic integrations between Wirecard issuing infrastructure and Visa/Mastercard Digital Enablement Services.",
      "Supported Wirecard boon’s UK Apple Pay launch, a fully digitalised bank-independent mobile-payment solution.",
      "Directed financial-services implementation programmes valued at $5–10M annually.",
      "Delivered payment and wallet solutions for Orange, SFR, and Deutsche Telekom across European telecom markets.",
    ],
    featured: false,
  },
];

const education = [
  { degree: "MBA", institution: "Hult International Business School", location: "USA", years: "2010 – 2011" },
  { degree: "BE Computer Science", institution: "Mumbai University", location: "India", years: "2002 – 2006" },
];

function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule">
      {credibilityStrip.map((item, i) => (
        <motion.div key={item.stat} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }} className={`py-7 px-6 ${i > 0 ? "border-l border-rule" : ""}`}>
          <p className="font-jakarta font-bold text-navy text-[18px] md:text-[20px] leading-tight mb-1.5">{item.stat}</p>
          <p className="font-jakarta text-slate text-[13px] leading-[1.55]">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ChapterEntry({ chapter, index }: { chapter: (typeof chapters)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, ease: "easeOut", delay: index === 0 ? 0.1 : 0 }} className="relative">
      <div className="absolute -left-6 md:-left-10 top-[7px] w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: chapter.featured ? "#1BAFBF" : "#24262B", opacity: chapter.featured ? 1 : 0.35 }} />
      <p className="label-meta mb-3">{chapter.chapterLabel}</p>
      <p className="font-jakarta font-bold text-slate text-[12px] tracking-[0.04em] mb-2">{chapter.period}</p>
      <h2 className={`font-jakarta font-bold text-navy leading-[1.2] mb-1 ${chapter.featured ? "text-[22px] md:text-[26px]" : "text-[19px] md:text-[21px]"}`}>{chapter.title}</h2>
      <p className="font-jakarta font-medium text-slate text-[14px] mb-4">{chapter.company} · {chapter.location}</p>
      <p className={`${chapter.featured ? "text-navy pl-5 border-l-[3px]" : "text-slate"} font-jakarta text-[16px] leading-[1.75] mb-5 max-w-2xl`} style={chapter.featured ? { borderLeftColor: "#1BAFBF" } : undefined}>{chapter.intro}</p>
      <ul className="flex flex-col gap-2.5">
        {chapter.bullets.map((b, j) => <li key={j} className="font-jakarta text-navy text-[16px] leading-[1.7] flex gap-3"><span className="text-slate mt-[3px] flex-shrink-0 text-[12px]">→</span><span>{b}</span></li>)}
      </ul>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>Operating Experience</motion.h1>
          <motion.p className="font-jakarta text-slate text-[17px] leading-[1.7] mt-5 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>18+ years across payments and regulated financial services — from VP-level global delivery at Mastercard to co-founding a venture and building AI systems hands-on.</motion.p>
        </div>
      </section>

      <section className="section-spacing pt-10 pb-0"><div className="content-width"><CredibilityStrip /></div></section>

      <section className="pt-10 pb-0">
        <div className="content-width">
          <motion.div className="border-l-4 p-6 rounded-card" style={{ borderLeftColor: "#1BAFBF", background: "rgba(36,38,43,0.04)" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}>
            <p className="font-jakarta font-semibold text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#1BAFBF" }}>Current chapter</p>
            <p className="font-jakarta font-bold text-navy text-[16px] leading-[1.6]">Since August 2024 I have been building AI products through AppsBrite UG while advising organisations bringing emerging technology into their core operations on operating models, GTM architecture, and implementation. I take on a small number of engagements and, selectively, senior executive-level mandates.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="content-width">
          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-navy opacity-15" />
            <div className="flex flex-col gap-16 md:gap-20">{chapters.map((chapter, i) => <ChapterEntry key={chapter.id} chapter={chapter} index={i} />)}</div>
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">Earlier foundations</span>
          <p className="font-jakarta text-slate text-[16px] leading-[1.75] max-w-2xl mb-5">Earlier consulting and delivery roles built the foundation in business-process architecture, PMO leadership, enterprise systems implementation, and cross-market delivery.</p>
          <ul className="flex flex-col gap-3 max-w-3xl">
            <li className="font-jakarta text-navy text-[16px] leading-[1.7]">→ Senior Consultant, NEOS Management Consulting | USA | 2011–2012 — business-process architecture work for S&P Global Ratings and Enterprise Car Rental.</li>
            <li className="font-jakarta text-navy text-[16px] leading-[1.7]">→ Team Leader, Dell Technologies | USA & India | 2006–2010 — PMO work for Harvard Pilgrim Healthcare supporting Oracle E-Business Suite implementation.</li>
          </ul>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">Education</span>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16 mt-6">{education.map((ed) => <div key={ed.degree}><p className="font-jakarta font-bold text-navy text-[17px] mb-1">{ed.degree}</p><p className="font-jakarta text-slate text-[15px]">{ed.institution}</p><p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">{ed.location} · {ed.years}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="content-width py-14 md:py-16">
          <p className="label-meta mb-5">Beyond the timeline</p>
          <p className="font-jakarta text-navy text-[17px] leading-[1.75] max-w-xl mb-8">My experience spans enterprise delivery, financial infrastructure, operating-model design, and AI-native systems.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/work" className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity">Building →</Link>
            <Link href="/insights" className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity">Research & insights →</Link>
            <Link href="/book" className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity">Explore a project →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
