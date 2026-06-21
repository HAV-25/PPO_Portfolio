"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const highlights = [
  {
    role: "VP, Global Head — Delivery & Operations, R&D",
    company: "Mastercard",
    period: "2020 – 2022",
    metric: "$25M+ partnerships · 4 regions · 120+ team · 30% faster delivery cycles",
  },
  {
    role: "Co-Founder & Head of Operations",
    company: "Skyllfull",
    period: "2022 – 2024",
    metric: "€250K+ qualified pipeline in 30 days of launch · zero-to-one operating model",
  },
  {
    role: "Director, Business Development — Digital Payments",
    company: "Mastercard",
    period: "2017 – 2019",
    metric: "$12M+ market development · 4x conversion uplift · 6 new segments in 12 months",
  },
];

export default function ExperiencePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing">
      <div className="content-width" ref={ref}>
        <span className="section-label">Career highlights</span>

        <h2 className="font-jakarta font-extrabold text-navy text-[36px] md:text-[48px] leading-[1.12] tracking-[-0.01em] max-w-xl mb-10">
          Two decades turning{" "}
          <br className="hidden sm:block" />
          ambition into delivery
        </h2>

        <div className="flex flex-col border-t border-rule">
          {highlights.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 border-b border-rule"
            >
              <div className="flex-1">
                <p className="font-jakarta font-bold text-navy text-[15px] leading-tight">
                  {item.role}
                </p>
                <p className="font-jakarta text-slate text-[13px] mt-1">
                  {item.company} · {item.period}
                </p>
              </div>
              <p className="font-jakarta font-semibold text-navy text-[13px] leading-[1.5] sm:text-right sm:max-w-[260px]">
                {item.metric}
              </p>
              <Link
                href="/experience"
                aria-label={`See full experience at ${item.company}`}
                className="text-slate text-[18px] group-hover:text-navy transition-colors flex-shrink-0"
              >
                →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/experience"
            className="font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
          >
            Full experience →
          </Link>
        </div>
      </div>
    </section>
  );
}
