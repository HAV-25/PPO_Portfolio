"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { easing } from "@/lib/motion";

const services = [
  {
    title: "Scale complex initiatives",
    description:
      "Operating models, transformation programmes, PMOs, delivery organisations, and cross-functional execution across multiple markets and stakeholder groups.",
    href: "/expertise#operating-models",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
  },
  {
    title: "Build new products",
    description:
      "From opportunity identification through architecture, launch, and commercialisation — applied across AI systems, automation platforms, and regulated financial products.",
    href: "/expertise#ai-systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Design systems",
    description:
      "Creating repeatable operating structures that align people, technology, and business outcomes — from governance frameworks to agentic workflow architecture.",
    href: "/expertise#venture-operating-systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
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

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: easing, delay: i * 0.1 }}
              className="group bg-cream-card rounded-card p-8 flex flex-col card-hover"
            >
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
