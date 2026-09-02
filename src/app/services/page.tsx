"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/LinkButton";

const services = [
  {
    id: "transformation",
    label: "Capability 01",
    title: "Enterprise Delivery & Transformation",
    forWhom:
      "Payments, fintech, financial-services and technology organisations navigating complex cross-functional initiatives that need stronger execution.",
    whatYouGet: [
      "Programme and workstream architecture",
      "Operating model and decision rights",
      "Portfolio and delivery visibility",
      "Governance and executive operating cadence",
      "Implementation mobilisation and handover",
    ],
    evidence:
      "At Mastercard, led global R&D delivery and operations across four regions and a 120+ specialist organisation, with development cycles reduced by approximately 30%.",
    engagements: ["Defined transformation project", "Short-term programme leadership", "Mobilisation and handover"],
  },
  {
    id: "ai-implementation",
    label: "Capability 02",
    title: "AI Workflow & Operating Model",
    forWhom:
      "Teams moving beyond AI experimentation into redesigned workflows, working proof, controls and measurable operating outcomes.",
    whatYouGet: [
      "Use-case and workflow prioritisation",
      "Current-state and future-state workflow design",
      "Working proof or prototype where appropriate",
      "Architecture and build-vs-buy decisions",
      "Controls, measurement and implementation backlog",
    ],
    evidence:
      "Hands-on experience designing and shipping AI-enabled products and workflow systems across automation, content intelligence and mobile applications.",
    engagements: ["Workflow value sprint", "Implementation sprint", "Operating model project"],
  },
  {
    id: "enterprise-delivery",
    label: "Capability 03",
    title: "Enterprise Delivery & Implementation Acceleration",
    forWhom:
      "B2B payments, fintech and enterprise-technology companies where customer onboarding or implementation has become slow, bespoke or difficult to scale.",
    whatYouGet: [
      "Implementation lifecycle and friction map",
      "Sales-to-delivery handoff redesign",
      "Requirements traceability and stage gates",
      "Standardisation and selective automation",
      "Implementation KPI and operating playbook",
    ],
    evidence:
      "Led Professional Services and enterprise payment implementation at Wirecard before moving into global delivery and operating-model leadership at Mastercard.",
    engagements: ["Delivery diagnostic", "4–6 week acceleration project", "Implementation operating model"],
  },
];

function ServiceBlock({ service }: { service: (typeof services)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id={service.id} ref={ref} className="section-spacing border-t border-rule scroll-mt-20">
      <div className="content-width">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: "easeOut" }}>
          <span className="label-meta block mb-2">{service.label}</span>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-display font-bold text-navy text-[28px] md:text-[34px] leading-[1.15]">{service.title}</h2>
              <div className="mt-6 mb-8"><p className="label-meta mb-2">Who it&apos;s for</p><p className="font-jakarta text-slate text-[16px] leading-[1.7]">{service.forWhom}</p></div>
              <div className="mb-8">
                <p className="label-meta mb-2">Engagement types</p>
                <ul className="flex flex-col gap-1.5">{service.engagements.map((e) => <li key={e} className="font-jakarta text-slate text-[14px] leading-[1.6] flex gap-2 items-baseline"><span className="text-navy font-bold">→</span>{e}</li>)}</ul>
              </div>
              <Button href="/book">Discuss a project →</Button>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="label-meta mb-4">What you get</p>
                <ul className="flex flex-col gap-3">{service.whatYouGet.map((item, i) => <motion.li key={item} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 + i * 0.07 }} className="flex gap-3 items-start"><span className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full" style={{ background: "#1BAFBF" }} aria-hidden="true" /><span className="font-jakarta text-navy text-[16px] leading-[1.65]">{item}</span></motion.li>)}</ul>
              </div>
              <div className="p-6 border-l-4" style={{ borderLeftColor: "#1BAFBF", background: "rgba(36,38,43,0.03)" }}><p className="label-meta mb-2">Evidence</p><p className="font-jakarta text-navy text-[16px] leading-[1.75]">{service.evidence}</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const focusRef = useRef<HTMLDivElement>(null);
  const focusInView = useInView(focusRef, { once: true, margin: "-80px" });

  return (
    <>
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.p className="font-mono font-medium text-slate text-[11px] tracking-[0.1em] uppercase mb-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>Payments · AI · Transformation Execution</motion.p>
          <motion.h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>How I help</motion.h1>
          <motion.p className="font-jakarta text-slate text-[18px] leading-[1.65] mt-5 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>I work where complex technology, customer implementation and operating execution meet. The starting point is a defined business problem; the goal is to leave a clearer operating pathway, working proof or execution system behind — not an open-ended advisory dependency.</motion.p>
        </div>
      </section>

      <section ref={focusRef} className="section-spacing pb-0">
        <div className="content-width">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={focusInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, ease: "easeOut" }} className="bg-navy rounded-card p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl"><p className="font-mono font-semibold text-cyan text-[11px] tracking-[0.1em] uppercase">Current market focus</p><h2 className="font-display font-bold text-cream text-[26px] md:text-[32px] leading-[1.15] mt-3">Agentic Commerce Readiness &amp; Enablement</h2><p className="font-jakarta text-[15px] leading-[1.7] mt-3" style={{ color: "rgba(245,243,239,0.72)" }}>A focused pilot around what businesses need to change when AI agents move from recommendation toward action — assessed journey-first and independently of any single protocol or platform.</p></div>
            <Link href="/agentic-commerce" className="btn-cream flex-shrink-0">Explore current focus →</Link>
          </motion.div>
        </div>
      </section>

      {services.map((service) => <ServiceBlock key={service.id} service={service} />)}

      <div className="section-spacing border-t border-b border-rule"><div className="content-width flex flex-col items-center text-center gap-6"><p className="font-display font-bold text-navy text-[28px] md:text-[36px] leading-[1.15] max-w-xl">Bring the problem, not a pre-written scope.</p><p className="font-jakarta text-slate text-[17px] leading-[1.65] max-w-lg">We can start with what is stuck, what outcome matters and where the real constraint appears to sit.</p><Button href="/book">Discuss a project →</Button></div></div>
    </>
  );
}
