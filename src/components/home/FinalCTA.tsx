"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { easing } from "@/lib/motion";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing" ref={ref}>
      <div className="content-width">
        <motion.div
          className="bg-navy rounded-cta px-8 py-16 md:px-20 md:py-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: easing }}
        >
          <h2 className="font-jakarta font-extrabold text-cream text-[32px] md:text-[40px] leading-[1.15]">
            Let&apos;s start with the work.
          </h2>
          <p
            className="font-jakarta text-[16px] md:text-[17px] leading-[1.65] mt-4 max-w-md"
            style={{ color: "rgba(245,241,232,0.75)" }}
          >
            Explore selected projects, leadership experience, and areas of current research. If there&apos;s alignment, we can continue the conversation.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn-cream">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
