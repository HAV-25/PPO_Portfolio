"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    title: "AI transformation & operating model design",
    description:
      "For founders and COOs who want AI tied to revenue per employee, not innovation theatre. Readiness assessment, agentic system architecture, automation pipeline design — built by someone who ships these systems herself.",
    href: "/services#ai-implementation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Enterprise transformation & programme delivery",
    description:
      "For regulated financial services navigating complex, cross-border change. Programme governance, operating model design, multi-region delivery leadership — proven at Mastercard scale.",
    href: "/services#transformation",
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
    title: "Fractional COO & strategic advisory",
    description:
      "For early-to-growth fintech and payments companies that need operating rigour without a full-time hire. Commercial models, governance, partner strategy — from someone who has built zero-to-one and run 120+ teams.",
    href: "/services#fractional",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
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
        <span className="section-label">How I work with clients</span>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="group bg-cream-card rounded-card p-8 flex flex-col card-hover"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-6 text-navy flex-shrink-0"
                style={{ background: "rgba(27,175,191,0.15)" }}
              >
                {service.icon}
              </div>

              <h3 className="font-jakarta font-bold text-navy text-[18px] leading-[1.3]">
                {service.title}
              </h3>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-3 flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 mt-6 font-jakarta font-semibold text-[13px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
              >
                See the service <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="font-jakarta font-semibold text-[15px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4 transition-all"
          >
            All services, engagement types, and evidence →
          </Link>
        </div>
      </div>
    </section>
  );
}
