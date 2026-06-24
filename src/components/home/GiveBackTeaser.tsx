"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function GiveBackTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing border-t border-rule" ref={ref}>
      <div className="content-width">
        <div className="max-w-2xl">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Open office hours
          </motion.span>

          <motion.h2
            className="font-jakarta font-bold text-navy text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
          >
            A small number of conversations, each month.
          </motion.h2>

          <motion.p
            className="font-jakarta text-slate text-[16px] leading-[1.75] mt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          >
            I reserve a small number of conversations each month for professionals navigating leadership transitions, fintech, AI transformation, or new venture ideas.
          </motion.p>

          <motion.p
            className="font-jakarta text-slate text-[16px] leading-[1.75] mt-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            These discussions are informal, practical, and grounded in real-world experience building products, teams, and operating models across multiple markets.
          </motion.p>

          <motion.p
            className="font-jakarta font-medium text-navy text-[15px] leading-[1.65] mt-5"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          >
            No programme. No funnel. Just thoughtful conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            className="mt-7"
          >
            <Link
              href="/give-back"
              className="font-jakarta font-medium text-[14px] text-navy underline-cyan hover:opacity-75 transition-opacity"
            >
              Request a conversation →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
