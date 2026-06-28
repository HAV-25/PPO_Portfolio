"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easing } from "@/lib/motion";

const domains = [
  {
    title: "Financial Infrastructure",
    body: "Payments, digital commerce, ecosystem partnerships, regulated platforms, and market-scale operating models.",
  },
  {
    title: "AI Systems",
    body: "Agentic workflows, automation platforms, AI-native products, and intelligent operating systems.",
  },
  {
    title: "Physical AI & Robotics",
    body: "Consumer robotics, commercial robotics ecosystems, embodied intelligence, edge computing, and intelligent infrastructure.",
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
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: easing }}
        >
          Where I&apos;m building next
        </motion.span>

        <motion.p
          className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] max-w-2xl mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: easing, delay: 0.08 }}
        >
          Technology evolves in waves. My career began in payments infrastructure, expanded into digital platforms and AI systems, and is increasingly focused on technologies that move intelligence beyond software.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: easing, delay: 0.1 + i * 0.1 }}
              className={`py-8 pr-8 ${i > 0 ? "md:pl-8 md:border-l border-rule" : ""}`}
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ background: "#2dfff8" }}
                aria-hidden="true"
              />
              <h3 className="font-jakarta font-bold text-navy text-[18px] leading-tight mb-3">
                {domain.title}
              </h3>
              <p className="font-jakarta text-slate text-[14px] leading-[1.7]">
                {domain.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-jakarta font-medium text-navy text-[15px] leading-[1.65] mt-10 pt-8 border-t border-rule max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: easing, delay: 0.42 }}
        >
          The common thread across all three domains is systems: understanding how technology moves from concept to scalable adoption.
        </motion.p>
      </div>
    </section>
  );
}
