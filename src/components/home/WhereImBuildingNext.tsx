"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const domains = [
  {
    title: "Financial infrastructure",
    status: "Operating since 2006",
    body: "Payments, digital commerce, ecosystem partnerships, and regulated platforms — the domain where I have spent 18+ years operating at scale.",
  },
  {
    title: "AI systems",
    status: "Building now",
    body: "Agentic workflows, automation platforms, and AI-native products — designed and shipped hands-on, live in production.",
  },
  {
    title: "Physical AI & robotics",
    status: "Researching",
    body: "How intelligence moves from software into the physical world — robotics ecosystems, embodied AI, and what they will mean for work and skills. A research focus today; writing to follow.",
  },
];

export default function WhereImBuildingNext() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing border-t border-rule" ref={ref}>
      <div className="content-width">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Where I operate — and where I&apos;m looking next
        </motion.span>

        <motion.p
          className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
        >
          My career runs on one thread: taking a technology wave from concept to operating reality. Payments first, AI systems now — and a research eye on what comes after software.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className={`py-8 pr-8 ${i > 0 ? "md:pl-8 md:border-l border-rule" : ""}`}
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ background: "#1BAFBF" }}
                aria-hidden="true"
              />
              <p className="label-meta mb-2">{domain.status}</p>
              <h3 className="font-jakarta font-bold text-navy text-[18px] leading-tight mb-3">
                {domain.title}
              </h3>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7]">
                {domain.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-jakarta font-medium text-navy text-[15px] leading-[1.65] mt-10 pt-8 border-t border-rule max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.42 }}
        >
          The pattern repeats across every wave: technology creates value only when someone builds the operating model that lets it run at scale. That is the work.
        </motion.p>
      </div>
    </section>
  );
}
