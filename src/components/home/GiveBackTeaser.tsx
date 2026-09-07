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
          <motion.span className="section-label" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut" }}>Give back</motion.span>
          <motion.h2 className="font-display font-bold text-navy text-[26px] md:text-[32px] leading-[1.15]" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}>Rethinking your career for the AI decade?</motion.h2>
          <motion.p className="font-jakarta text-slate text-[16px] leading-[1.75] mt-4" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}>AI is redrawing what work looks like — and which skills hold their value. I run a small number of free 30-minute sessions each month for professionals ready to pivot, upskill, and reposition for what comes next.</motion.p>
          <motion.p className="font-jakarta font-medium text-navy text-[15px] leading-[1.65] mt-5" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}>It&apos;s my way of giving back.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }} className="mt-7">
            <Link href="/give-back" className="font-jakarta font-medium text-[14px] text-navy underline-cyan hover:opacity-75 transition-opacity">About the give-back programme →</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
