"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    eyebrow: "Current focus",
    title: "Agentic Commerce Readiness & Enablement",
    description:
      "For organisations working out what needs to change when AI agents move from recommendation to action. Journey readiness, commercial data, interfaces, authority, payments, controls and a narrow implementation path.",
    href: "/agentic-commerce",
    cta: "Explore the focus",
  },
  {
    eyebrow: "Enterprise execution",
    title: "Enterprise Delivery & Transformation",
    description:
      "For complex cross-functional initiatives that need clearer ownership, governance, operating rhythm and implementation momentum — especially in payments, fintech and regulated environments.",
    href: "/services#transformation",
    cta: "See the capability",
  },
  {
    eyebrow: "Applied AI",
    title: "AI Workflow & Operating Model",
    description:
      "For teams moving beyond AI experimentation into redesigned workflows, working proof, controls and measurable operating outcomes — without treating the model itself as the strategy.",
    href: "/services#ai-implementation",
    cta: "See the capability",
  },
];

export default function ServicesSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing" id="services">
      <div className="content-width" ref={ref}>
        <span className="section-label">How I help</span>
        <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12] max-w-2xl">
          Where strategy has to become executable.
        </h2>
        <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-4 max-w-2xl">
          My work sits at the intersection of technology, operating model and implementation. Agentic Commerce is the current market focus; the broader capability is making complex change operational.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-9">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }} className="group bg-cream-card rounded-card p-8 flex flex-col card-hover">
              <p className="font-mono font-semibold text-cyan text-[10px] tracking-[0.1em] uppercase">{service.eyebrow}</p>
              <h3 className="font-jakarta font-bold text-navy text-[18px] leading-[1.3] mt-4">{service.title}</h3>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-3 flex-1">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center gap-1.5 mt-6 font-jakarta font-semibold text-[13px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all">{service.cta} <span aria-hidden="true">→</span></Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/services" className="font-jakarta font-semibold text-[15px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4 transition-all">See broader services and engagement types →</Link>
        </div>
      </div>
    </section>
  );
}
