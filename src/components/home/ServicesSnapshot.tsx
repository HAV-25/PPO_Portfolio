"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    title: "Enterprise transformation & programme delivery",
    description:
      "Leading complex, cross-border change programmes in regulated financial services — from governance design to multi-region delivery.",
    href: "/services#transformation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "AI implementation & operating-model design",
    description:
      "Designing and building AI-first operating models that connect to revenue per employee, throughput, and innovation metrics.",
    href: "/services#ai-implementation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    title: "Fractional CIO / CCO advisory",
    description:
      "Hands-on leadership for scale-ups and venture teams — strategy into disciplined execution, with the rigour large programmes demand.",
    href: "/services#fractional",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export default function ServicesSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing" id="services">
      <div className="content-width" ref={ref}>
        <span className="section-label">What I do</span>

        <h2 className="font-jakarta font-extrabold text-navy text-[36px] md:text-[48px] leading-[1.12] tracking-[-0.01em] max-w-xl mb-10">
          Strategy and execution,{" "}
          <br className="hidden sm:block" />
          built as one discipline
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="group bg-cream-card rounded-card p-8 flex flex-col card-hover"
            >
              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-6 text-navy flex-shrink-0"
                style={{ background: "rgba(45,255,248,0.15)" }}
              >
                {service.icon}
              </div>

              <h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3]">
                {service.title}
              </h3>
              <p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3 flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 mt-6 font-jakarta font-semibold text-[13px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
