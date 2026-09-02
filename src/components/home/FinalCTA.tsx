"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing" ref={ref}>
      <div className="content-width">
        <motion.div className="bg-navy rounded-cta px-8 py-16 md:px-20 md:py-20 flex flex-col items-center text-center" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: "easeOut" }}>
          <h2 className="font-display font-bold text-cream text-[32px] md:text-[40px] leading-[1.15]">Bring me the problem that isn&apos;t moving.</h2>
          <p className="font-jakarta text-[16px] md:text-[17px] leading-[1.65] mt-4 max-w-xl" style={{ color: "rgba(245,243,239,0.75)" }}>
            Whether the constraint sits in an emerging commerce journey, enterprise implementation, an AI-enabled workflow or a wider transformation programme, we can start with the problem and work out what actually needs to move.
          </p>
          <div className="mt-8"><Link href="/book" className="btn-cream">Discuss a project <span aria-hidden="true">→</span></Link></div>
        </motion.div>
      </div>
    </section>
  );
}
