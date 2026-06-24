"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/button";

const roles = [
  {
    title: "Independent AI Venture Builder & Strategic Advisor",
    period: "Aug 2024 – Present",
    company: "AppsBrite UG (Founder)",
    location: "Germany",
    bullets: [
      "Operating independently: building AI ventures and advising regulated fintech companies on operating model transformation and AI implementation",
      "6 AI ventures in build or live across B2B and B2C — agentic commerce, content intelligence, conversational AI, and workflow automation",
      "Advisory engagements: operating model design and GTM architecture for regulated ventures in fintech and payments",
    ],
  },
  {
    title: "Co-Founder & Head of Operations",
    period: "Jul 2022 – Aug 2024",
    company: "Skyllfull",
    location: "Germany",
    bullets: [
      "Co-founded specialised talent platform for DeFi, Web3, and digital banking clients",
      "Designed end-to-end operating model: commercial structure, delivery, vendor and partner integrations",
      "€250K+ qualified pipeline within 30 days of launch — validated product-market fit with startup and enterprise clients",
      "Made a deliberate transition to AI venture building in 2024 when the opportunity in agentic systems became clear",
    ],
  },
  {
    title: "Vice President, Global Head Delivery & Operations",
    period: "Jan 2020 – Jul 2022",
    company: "Global Card Scheme (Mastercard)",
    location: "Ireland",
    bullets: [
      "Led $25M+ technology partnerships (Microsoft, Verizon) across 4 regions — Europe, North America, Middle East/Africa, Asia-Pacific",
      "120+ technical implementation team members managed across regions",
      "30% reduction in development cycles, 35% improvement in resource allocation efficiency",
      "200% YoY client engagement growth",
      "Pioneered multi-region Innovation Hub with 100+ live demos",
    ],
  },
  {
    title: "Director, Business Development — Digital Payments",
    period: "Apr 2017 – Dec 2019",
    company: "Global Card Scheme (Mastercard)",
    location: "Germany",
    bullets: [
      "Led $12M+ market development funds using digital-first strategy",
      "Nationwide German rollout of API-first digital wallet solution — 4x conversion rate improvement",
      "6 new customer segments in 12 months, 20% revenue growth",
      "30% reduction in deployment times, 10% cost reduction",
    ],
  },
  {
    title: "Team Lead, Professional Services — Customer Implementation",
    period: "Apr 2013 – Apr 2017",
    company: "Wirecard AG (departed Apr 2017 — three years before the company's 2020 collapse)",
    location: "Germany",
    bullets: [
      "Led strategic integration between Wirecard's issuing platform and Visa/Mastercard Digital Enablement Services",
      "Launched the UK's first fully digitised Apple Wallet implementation",
      "Financial services implementation projects $5–10M annually",
      "Clients: Orange, SFR, Deutsche Telekom",
    ],
  },
  {
    title: "Senior Consultant",
    period: "2011 – 2012",
    company: "NEOS Management Consulting",
    location: "USA",
    bullets: [
      "Business process architecture modernisation for S&P Global Ratings and Enterprise Car Rental",
    ],
  },
  {
    title: "Team Leader, PMO",
    period: "2006 – 2010",
    company: "Dell Technologies",
    location: "USA & India",
    bullets: [
      "Led PMO for Harvard Pilgrim Healthcare — Oracle E-Business Suite implementation",
    ],
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

function RoleEntry({ role, index }: { role: (typeof roles)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: index === 0 ? 0.1 : 0 }}
    >
      {/* Dot */}
      <div className="absolute -left-6 md:-left-10 top-[6px] w-2.5 h-2.5 rounded-full bg-navy" />

      <p className="font-jakarta font-bold text-slate text-[12px] tracking-[0.04em] mb-2">
        {role.period}
      </p>
      <h2 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.2] mb-1">
        {role.title}
      </h2>
      <p className="font-jakarta font-medium text-slate text-[14px] mb-4">
        {role.company} &middot; {role.location}
      </p>
      <ul className="flex flex-col gap-2">
        {role.bullets.map((b, j) => (
          <li key={j} className="font-jakarta text-navy text-[15px] leading-[1.65] flex gap-3">
            <span className="text-slate mt-[2px] flex-shrink-0">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BottomSection({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span className="section-label">{label}</span>
      {children}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Professional Experience
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[18px] leading-[1.6] mt-5 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            18+ years leading transformation, partnerships, and delivery across
            regulated financial services, payments, and fintech.
          </motion.p>
        </div>
      </section>

      {/* Current focus callout */}
      <section className="pb-0">
        <div className="content-width">
          <motion.div
            className="border-l-4 p-6 rounded-card"
            style={{ borderLeftColor: "#2dfff8", background: "rgba(36,53,110,0.04)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
          >
            <p className="font-jakarta font-semibold text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#2dfff8" }}>
              Now
            </p>
            <p className="font-jakarta font-bold text-navy text-[16px] leading-[1.5]">
              Operating independently since August 2024 — building AI ventures under AppsBrite UG
              and advising regulated fintech companies on operating model transformation and AI
              implementation. Available for fractional and advisory engagements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="relative pl-6 md:pl-10">
            {/* Vertical rule */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-navy opacity-20" />
            <div className="flex flex-col gap-14 md:gap-16">
              {roles.map((role, i) => (
                <RoleEntry key={i} role={role} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <BottomSection label="Education">
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
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
          </BottomSection>
        </div>
      </section>

      {/* Languages */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <BottomSection label="Languages & Citizenship">
            <div className="flex flex-col gap-2">
              <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                English (Full Professional) &middot; German (Limited Working)
              </p>
              <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                German Citizen &middot; Based in Germany &middot; Open to Europe and Remote
              </p>
            </div>
          </BottomSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-b border-rule">
        <div className="content-width flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-jakarta font-bold text-navy text-[20px] md:text-[24px] max-w-md leading-[1.3]">
            Want to work together?
          </p>
          <Button href="/book">Book a discovery call →</Button>
        </div>
      </section>
    </>
  );
}
