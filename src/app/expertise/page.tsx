"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const expertiseAreas = [
  {
    id: "operating-models",
    title: "Operating Models & Enterprise Transformation",
    description:
      "Helping regulated organisations simplify complexity, align leadership teams, and create operating structures that scale.",
    outcomes: [
      "Faster executive decision-making",
      "Clear accountability across teams",
      "Scalable governance structures",
      "Reduced delivery friction",
      "More predictable transformation execution",
      "Cross-regional alignment",
      "Alignment across product, technology, commercial, and executive stakeholders",
    ],
    deliverables: [
      "Target operating model",
      "Governance framework",
      "Delivery cadence and KPI system",
      "Executive reporting structure",
      "Transformation roadmap",
    ],
    evidence: {
      bold: "Mastercard · 120+ team scale · 4 regions · 30% faster delivery cycles",
      supporting:
        "Built and scaled the global R&D operating model supporting technical implementation teams across Europe, North America, MEA, and APAC.",
    },
    link: { label: "Explore experience", href: "/experience" },
  },
  {
    id: "ai-systems",
    title: "AI Systems & Intelligent Operations",
    description:
      "Helping organisations move from isolated AI pilots to intelligent systems that create measurable operational value.",
    outcomes: [
      "AI initiatives tied directly to business value",
      "Reduced manual operational overhead",
      "Repeatable intelligent workflows",
      "Clear governance for human-in-the-loop systems",
      "Faster experimentation with lower implementation risk",
      "Operating models designed for AI-native organisations",
    ],
    deliverables: [
      "AI operating blueprint",
      "Automation opportunity map",
      "Implementation roadmap",
      "Workflow architecture",
      "Governance and escalation model",
    ],
    evidence: {
      bold: "AI-native systems · content intelligence · workflow automation · language learning",
      supporting:
        "Built and deployed applied AI systems across content intelligence, workflow automation, conversational interfaces, and mobile learning products.",
    },
    link: { label: "Explore building", href: "/work" },
  },
  {
    id: "financial-ecosystems",
    title: "Financial Ecosystems & Market Expansion",
    description:
      "Helping payments, fintech, and technology organisations build the commercial and partner ecosystems required for market expansion.",
    outcomes: [
      "Go-to-market architecture",
      "Partner ecosystem design",
      "Commercial operating models",
      "Market entry frameworks",
      "Enterprise relationship development",
      "Cross-functional execution plans",
    ],
    deliverables: [
      "Market expansion blueprint",
      "Partnership operating model",
      "Commercial rollout framework",
      "Stakeholder engagement strategy",
      "Market development plan",
    ],
    evidence: {
      bold: "Mastercard Germany · 6 new segments · 20% revenue growth",
      supporting:
        "Led digital payments growth initiatives and ecosystem expansion across merchants, fintechs, and enterprise partners.",
    },
    link: { label: "Explore experience", href: "/experience" },
  },
  {
    id: "venture-operating-systems",
    title: "Venture Operating Systems",
    description:
      "Helping founders move from concept to operational reality through clear commercial models, execution structures, and scalable operating systems.",
    outcomes: [
      "Commercial model design",
      "Operating structures",
      "Team design",
      "Vendor ecosystems",
      "Early-stage governance",
      "GTM frameworks",
      "Execution roadmaps",
    ],
    deliverables: [
      "Operating blueprint",
      "Commercial model",
      "GTM architecture",
      "Execution roadmap",
      "Partner and vendor structure",
    ],
    evidence: {
      bold: "Zero-to-one operating models · AI ventures · automotive circularity",
      supporting:
        "Built operating models across digital talent ecosystems, AI ventures, and automotive circularity initiatives.",
    },
    link: { label: "Explore building", href: "/work" },
  },
];

function ExpertiseBlock({ area }: { area: (typeof expertiseAreas)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id={area.id}
      ref={ref}
      className="section-spacing border-t border-rule scroll-mt-24"
    >
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            {/* Left column */}
            <div>
              <h2 className="font-jakarta font-bold text-navy text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.01em]">
                {area.title}
              </h2>

              <p className="font-jakarta text-slate text-[16px] leading-[1.75] mt-5 mb-8">
                {area.description}
              </p>

              <div className="mb-8">
                <p className="label-meta mb-3">Example deliverables</p>
                <ul className="flex flex-col gap-2">
                  {area.deliverables.map((d) => (
                    <li
                      key={d}
                      className="font-jakarta text-slate text-[14px] leading-[1.6] flex gap-2 items-baseline"
                    >
                      <span className="text-navy font-bold flex-shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={area.link.href}
                className="inline-flex items-center gap-1.5 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
              >
                {area.link.label} <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="label-meta mb-4">Typical outcomes</p>
                <ul className="flex flex-col gap-3">
                  {area.outcomes.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 + i * 0.06 }}
                      className="flex gap-3 items-start"
                    >
                      <span
                        className="flex-shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full"
                        style={{ background: "#2dfff8" }}
                        aria-hidden="true"
                      />
                      <span className="font-jakarta text-navy text-[15px] leading-[1.65]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 border-l-4"
                style={{ borderLeftColor: "#2dfff8", background: "rgba(36,53,110,0.03)" }}
              >
                <p className="label-meta mb-3">Evidence</p>
                <p className="font-jakarta font-bold text-navy text-[14px] leading-[1.6] mb-2">
                  {area.evidence.bold}
                </p>
                <p className="font-jakarta text-navy text-[14px] leading-[1.75] opacity-80">
                  {area.evidence.supporting}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-80px" });

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
            Where I create the most value
          </motion.h1>
          <motion.div
            className="mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <p className="font-jakarta text-slate text-[18px] leading-[1.7]">
              My work typically sits at the intersection of technology, operating models,
              and commercial execution.
            </p>
            <p className="font-jakarta text-slate text-[18px] leading-[1.7] mt-4">
              Whether inside regulated financial institutions, AI-native ventures, or emerging
              technology businesses, the challenge is usually the same:
            </p>
            <p
              className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.5] mt-5 pl-5 border-l-[3px]"
              style={{ borderLeftColor: "#2dfff8" }}
            >
              Translating ambitious technology goals into systems that can operate at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise blocks */}
      {expertiseAreas.map((area) => (
        <ExpertiseBlock key={area.id} area={area} />
      ))}

      {/* Closing section */}
      <div ref={closingRef} className="section-spacing border-t border-rule">
        <div className="content-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="section-label">How I approach complex change</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.85] mt-4">
              I prefer working on challenges where technology, operating models, and commercial
              outcomes need to evolve together.
            </p>
            <p className="font-jakarta text-navy text-[16px] leading-[1.85] mt-4">
              The work may involve strategy, implementation leadership, or hands-on systems
              building — but always with a clear path to operational adoption and measurable outcomes.
            </p>
            <p className="font-jakarta text-navy text-[16px] leading-[1.85] mt-4">
              I prioritise a small number of long-term engagements where meaningful change
              matters more than short-term activity.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                { label: "Experience", href: "/experience" },
                { label: "Building", href: "/work" },
                { label: "Insights", href: "/insights" },
                { label: "Connect", href: "/book" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
                >
                  {label} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
