"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Data ──────────────────────────────────────────────────────────────────

const credibilityStrip = [
  {
    stat: "18+ years",
    label: "Payments, fintech, and regulated financial services",
  },
  {
    stat: "120+ team scale",
    label: "Global delivery and implementation teams across four regions",
  },
  {
    stat: "$25M+ partnerships",
    label: "Strategic ecosystem programmes with Microsoft and Verizon",
  },
  {
    stat: "Zero-to-one builder",
    label: "AI-native ventures, automation systems, and operating frameworks",
  },
];

const chapters = [
  {
    chapterLabel: "Current Chapter",
    id: "current",
    title: "Independent AI Venture Builder & Strategic Advisor",
    company: "AppsBrite UG (Founder)",
    location: "Germany",
    period: "August 2024 – Present",
    intro:
      "Building AI-native systems and advising selected regulated fintech and AI ventures on operating model design, GTM architecture, and implementation.",
    bullets: [
      "Designed, built, and shipped AI products hands-on: two live in production (including a German exam-prep app on Google Play), two in active build — across content intelligence, agentic workflows, and mobile AI.",
      "Advised regulated ventures on operating model design, GTM architecture, and AI implementation — including a commercialisation blueprint for ThyssenKrupp\u2019s automotive circularity venture.",
      "Working stack: n8n, Claude API, Supabase, React Native, MCP integrations — production systems, not prototypes.",
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
    intro:
      "Co-founded a specialised talent ecosystem for digital assets, DeFi, Web3, and digital banking clients, translating market demand into a zero-to-one operating model.",
    bullets: [
      "Designed the end-to-end operating model across commercial structure, delivery, vendor partnerships, and client onboarding.",
      "Validated product-market fit through pilots and design partnerships with startup and enterprise clients.",
      "Generated €250K+ qualified pipeline within 30 days of launch.",
      "Transitioned focus toward AI systems and venture building as agentic workflows and intelligent automation became a clearer long-term opportunity.",
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
    intro:
      "Led the global delivery and operating model for Mastercard's R&D and innovation organisation across four regions, connecting emerging technology partnerships, implementation teams, client engagement, and scalable execution governance.",
    bullets: [
      "Structured the operating model for a 120+ person technical implementation organisation across Europe, North America, MEA, and APAC.",
      "Managed $25M+ strategic technology partnerships with Microsoft and Verizon, accelerating cloud, 5G, and emerging payment infrastructure initiatives.",
      "Reduced development cycles by 30% through scalable programme governance and delivery redesign.",
      "Supported 200% year-over-year client engagement growth through multi-region innovation hub execution and executive-facing client experiences.",
      "Supported the evolution of Mastercard's multi-region Innovation Hub environment, including 100+ live client and partner demonstrations.",
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
    intro:
      "Built market development and digital payments adoption across Germany, connecting fintechs, merchants, and enterprise partners into Mastercard's digital ecosystem.",
    bullets: [
      "Led $12M+ market development programmes using a digital-first growth strategy.",
      "Drove nationwide German rollout of an API-first digital wallet solution, contributing to a 4x conversion rate improvement.",
      "Expanded the customer portfolio into six new segments within 12 months, supporting 20% revenue growth.",
      "Reduced deployment timelines by 30% and implementation costs by 10% through onboarding and delivery optimisation.",
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
    intro:
      "Led professional services and customer implementation across issuing, wallet, and payment infrastructure programmes for enterprise clients across Europe.",
    bullets: [
      "Led strategic integrations between Wirecard issuing infrastructure and Visa/Mastercard Digital Enablement Services.",
      "Supported the UK's first fully digitized Apple Wallet implementation.",
      "Directed financial services implementation programmes valued at $5–10M annually.",
      "Delivered payment and wallet solutions for Orange, SFR, and Deutsche Telekom across European telecom markets.",
    ],
    featured: false,
  },
];

const education = [
  {
    degree: "MBA",
    institution: "Hult International Business School",
    location: "USA",
    years: "2010 – 2011",
  },
  {
    degree: "BE Computer Science",
    institution: "Mumbai University",
    location: "India",
    years: "2002 – 2006",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule">
      {credibilityStrip.map((item, i) => (
        <motion.div
          key={item.stat}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          className={`py-7 px-6 ${i > 0 ? "border-l border-rule" : ""}`}
        >
          <p className="font-jakarta font-bold text-navy text-[18px] md:text-[20px] leading-tight mb-1.5">
            {item.stat}
          </p>
          <p className="font-jakarta text-slate text-[13px] leading-[1.55]">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function ChapterEntry({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: index === 0 ? 0.1 : 0 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-6 md:-left-10 top-[7px] w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: chapter.featured ? "#1BAFBF" : "#24262B", opacity: chapter.featured ? 1 : 0.35 }}
      />

      {/* Chapter label */}
      <p className="label-meta mb-3">{chapter.chapterLabel}</p>

      {/* Period */}
      <p className="font-jakarta font-bold text-slate text-[12px] tracking-[0.04em] mb-2">
        {chapter.period}
      </p>

      {/* Role title */}
      <h2
        className={`font-jakarta font-bold text-navy leading-[1.2] mb-1 ${
          chapter.featured
            ? "text-[22px] md:text-[26px]"
            : "text-[19px] md:text-[21px]"
        }`}
      >
        {chapter.title}
      </h2>

      {/* Company line */}
      <p className="font-jakarta font-medium text-slate text-[14px] mb-4">
        {chapter.company} &middot; {chapter.location}
      </p>

      {/* Role intro */}
      {chapter.featured ? (
        <p
          className="font-jakarta text-navy text-[16px] leading-[1.75] mb-5 max-w-2xl pl-5 border-l-[3px]"
          style={{ borderLeftColor: "#1BAFBF" }}
        >
          {chapter.intro}
        </p>
      ) : (
        <p className="font-jakarta text-slate text-[16px] leading-[1.7] mb-5 max-w-2xl">
          {chapter.intro}
        </p>
      )}

      {/* Bullets */}
      <ul className="flex flex-col gap-2.5">
        {chapter.bullets.map((b, j) => (
          <li
            key={j}
            className="font-jakarta text-navy text-[16px] leading-[1.7] flex gap-3"
          >
            <span className="text-slate mt-[3px] flex-shrink-0 text-[12px]">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EarlierFoundations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative"
    >
      <div
        className="absolute -left-6 md:-left-10 top-[7px] w-2.5 h-2.5 rounded-full"
        style={{ background: "#24262B", opacity: 0.25 }}
      />

      <p className="label-meta mb-3">Earlier Foundations</p>

      <h2 className="font-jakarta font-bold text-navy text-[19px] md:text-[21px] leading-[1.2] mb-4">
        Consulting & Delivery Foundations
      </h2>

      <p className="font-jakarta text-slate text-[16px] leading-[1.7] mb-5 max-w-2xl">
        Earlier roles built the foundation in business process architecture, PMO leadership, enterprise systems implementation, and cross-market delivery.
      </p>

      <ul className="flex flex-col gap-2.5">
        <li className="font-jakarta text-navy text-[16px] leading-[1.7] flex gap-3">
          <span className="text-slate mt-[3px] flex-shrink-0 text-[12px]">→</span>
          <span>
            <span className="font-medium">Senior Consultant, NEOS Management Consulting</span>
            {" "}| USA | 2011–2012 — modernised business process architecture for S&P Global Ratings and Enterprise Car Rental.
          </span>
        </li>
        <li className="font-jakarta text-navy text-[16px] leading-[1.7] flex gap-3">
          <span className="text-slate mt-[3px] flex-shrink-0 text-[12px]">→</span>
          <span>
            <span className="font-medium">Team Leader, Dell Technologies</span>
            {" "}| USA & India | 2006–2010 — led PMO work for Harvard Pilgrim Healthcare, supporting Oracle E-Business Suite implementation.
          </span>
        </li>
      </ul>
    </motion.div>
  );
}

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Operating Experience
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[17px] leading-[1.7] mt-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            18+ years across payments and regulated financial services — from VP-level global delivery at Mastercard to co-founding a venture and building AI systems hands-on. Every chapter below carries its numbers.
          </motion.p>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="section-spacing pt-10 pb-0">
        <div className="content-width">
          <CredibilityStrip />
        </div>
      </section>

      {/* Current chapter callout */}
      <section className="pt-10 pb-0">
        <div className="content-width">
          <motion.div
            className="border-l-4 p-6 rounded-card"
            style={{ borderLeftColor: "#1BAFBF", background: "rgba(36,38,43,0.04)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
          >
            <p
              className="font-jakarta font-semibold text-[11px] tracking-[0.1em] uppercase mb-2"
              style={{ color: "#1BAFBF" }}
            >
              Current chapter
            </p>
            <p className="font-jakarta font-bold text-navy text-[16px] leading-[1.6]">
              Since August 2024 I have been building AI products through AppsBrite UG — two live in production — while advising organisations bringing emerging technology into their core operations on operating models, GTM architecture, and implementation. I take on a small number of engagements and, selectively, VP-level mandates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="relative pl-6 md:pl-10">
            {/* Vertical rule */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-navy opacity-15" />

            <div className="flex flex-col gap-16 md:gap-20">
              {chapters.map((chapter, i) => (
                <ChapterEntry key={chapter.id} chapter={chapter} index={i} />
              ))}
              <EarlierFoundations />
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <FadeSection>
            <span className="section-label">Education</span>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16 mt-6">
              {education.map((ed, i) => (
                <div key={i}>
                  <p className="font-jakarta font-bold text-navy text-[17px] mb-1">{ed.degree}</p>
                  <p className="font-jakarta text-slate text-[15px]">{ed.institution}</p>
                  <p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">
                    {ed.location} &middot; {ed.years}
                  </p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Languages & Citizenship */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <FadeSection>
            <span className="section-label">Languages & Citizenship</span>
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                {/* ⚠ CONFIRM: German proficiency level — unified to the conservative value used on /about */}
                English: Full professional proficiency &middot; German: Limited working proficiency
              </p>
              <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                German national &middot; Based in Germany &middot; Remote or onsite as needed
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Beyond the Timeline */}
      <section className="border-t border-rule">
        <div className="content-width py-14 md:py-16">
          <p className="label-meta mb-5">Beyond the timeline</p>
          <p className="font-jakarta text-navy text-[17px] leading-[1.75] max-w-xl mb-8">
            My experience spans enterprise delivery, financial infrastructure, operating model design, and AI-native systems. You can explore how that experience translates into current systems, research, and areas of focus.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/work"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Building <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/insights"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Research &amp; insights <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/book"
              className="font-jakarta font-semibold text-[15px] text-navy hover:opacity-60 transition-opacity flex items-center gap-1.5"
            >
              Connect <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
