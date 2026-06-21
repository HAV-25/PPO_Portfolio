"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const programmes = [
  "Career Re-Entry — a free 30-minute session for professionals navigating their return after a break",
  "Pivot, Upskill & Position — for those ready to change direction into fintech, AI, or adjacent fields",
  "No agenda. No pitch. One honest conversation — from someone who has hired and been hired.",
];

export default function GiveBackTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing border-t border-rule" ref={ref}>
      <div className="content-width">
        <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-start">
          <div>
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Professional Give-Back
            </motion.span>
            <motion.h2
              className="font-jakarta font-bold text-navy text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.01em]"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            >
              Re-entering the workforce after a break?
            </motion.h2>
            <motion.p
              className="font-jakarta text-slate text-[16px] leading-[1.7] mt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            >
              I offer a small number of free 30-minute sessions for professionals
              navigating career re-entry or a strategic pivot. Not coaching.
              Not consulting. Just an honest read from someone who has sat on both
              sides of the hiring table.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.22 }}
              className="mt-6"
            >
              <Link
                href="/give-back"
                className="font-jakarta font-medium text-[14px] text-navy underline-cyan hover:opacity-75 transition-opacity"
              >
                See all programmes →
              </Link>
            </motion.div>
          </div>

          <ul className="flex flex-col gap-3">
            {programmes.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 + i * 0.07 }}
                className="flex gap-3 items-start"
              >
                <span
                  className="flex-shrink-0 mt-[8px] w-1.5 h-1.5 rounded-full"
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
      </div>
    </section>
  );
}
