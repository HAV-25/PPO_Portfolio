"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/button";

const services = [
  {
    id: "transformation",
    label: "Service 01",
    title: "Enterprise Transformation & Programme Delivery",
    forWhom:
      "Scale-ups and regulated financial services businesses navigating complex, cross-border change programmes.",
    whatYouGet: [
      "Programme governance frameworks",
      "Operating model design",
      "Portfolio management",
      "Multi-region delivery leadership",
      "Executive stakeholder alignment",
    ],
    evidence:
      "Led Mastercard R&D global operating model transformation — 30% faster development cycles, 35% efficiency gain across 4 regions and 120+ team members.",
    engagements: ["Fractional programme director", "Interim VP Transformation", "Advisory"],
  },
  {
    id: "ai-implementation",
    label: "Service 02",
    title: "AI Implementation & Operating Model Design",
    forWhom:
      "Founders and COOs navigating agentic transformation — designing AI-first operating models that connect directly to revenue per employee, not just innovation metrics.",
    whatYouGet: [
      "AI readiness assessment",
      "Operating model redesign for AI-first workflows",
      "Agentic system architecture",
      "n8n / automation pipeline design",
      "Build-vs-buy decision frameworks",
    ],
    evidence:
      "Built 6 AI ventures hands-on across agentic transformation, multi-agent systems, MCP integrations, and production deployments. Not advised on — built.",
    engagements: ["Advisory retainer", "Implementation sprint", "Fractional Chief AI Officer"],
  },
  {
    id: "fractional",
    label: "Service 03",
    title: "Fractional COO / Strategic Advisory",
    forWhom:
      "Early-to-growth stage fintech and payments companies needing operating rigour without a full-time COO hire.",
    whatYouGet: [
      "Operating model design",
      "OKR and governance frameworks",
      "Partner and ecosystem strategy",
      "Commercial model design",
      "Team structure and hiring advisory",
    ],
    evidence:
      "Co-founded and scaled Skyllfull from zero — €250K pipeline in 30 days. Advised ThyssenKrupp automotive circularity venture on GTM and regulatory structure.",
    engagements: ["Fractional COO (meaningful engagement, typically 3–6 months)", "Strategic advisor", "Board observer"],
  },
];

function ServiceBlock({
  service,
}: {
  service: (typeof services)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id={service.id}
      ref={ref}
      className="section-spacing border-t border-rule scroll-mt-20"
    >
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="label-meta block mb-2">{service.label}</span>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            {/* Left */}
            <div>
              <h2 className="font-jakarta font-bold text-navy text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.01em]">
                {service.title}
              </h2>

              <div className="mt-6 mb-8">
                <p className="label-meta mb-2">Who it&apos;s for</p>
                <p className="font-jakarta text-slate text-[16px] leading-[1.7]">
                  {service.forWhom}
                </p>
              </div>

              <div className="mb-8">
                <p className="label-meta mb-2">Engagement types</p>
                <ul className="flex flex-col gap-1.5">
                  {service.engagements.map((e) => (
                    <li
                      key={e}
                      className="font-jakarta text-slate text-[14px] leading-[1.6] flex gap-2 items-baseline"
                    >
                      <span className="text-navy font-bold">→</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/book">Book a discovery call →</Button>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="label-meta mb-4">What you get</p>
                <ul className="flex flex-col gap-3">
                  {service.whatYouGet.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 + i * 0.07 }}
                      className="flex gap-3 items-start"
                    >
                      <span
                        className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                        style={{ background: "#2dfff8" }}
                        aria-hidden="true"
                      />
                      <span className="font-jakarta text-navy text-[16px] leading-[1.65]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 border-l-4"
                style={{ borderLeftColor: "#2dfff8", background: "rgba(36,53,110,0.03)" }}
              >
                <p className="label-meta mb-2">Evidence</p>
                <p className="font-jakarta text-navy text-[15px] leading-[1.7]">
                  {service.evidence}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const dontRef = useRef<HTMLDivElement>(null);
  const dontInView = useInView(dontRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width" ref={heroRef}>
          <motion.h1
            className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            How I work with you
          </motion.h1>
          <motion.p
            className="font-jakarta text-slate text-[18px] leading-[1.65] mt-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            I work with a small number of clients at a time — founders, COOs, and operators
            in fintech, payments, and AI-first companies who need someone who has done it
            at scale and can build alongside them.
          </motion.p>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}

      {/* What I don't do */}
      <div ref={dontRef} className="section-spacing border-t border-rule">
        <div className="content-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={dontInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="section-label">What I don&apos;t do</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.8] italic opacity-80">
              &ldquo;I don&apos;t take on roles where AI is a reporting metric rather than a revenue
              lever. I don&apos;t do one-off calls or one-week workshops — I work in engagements
              long enough to make a real dent. I&apos;m not available for roles requiring full-time
              office presence outside Germany. I work with a small number of clients at a time —
              if we&apos;re not the right fit, I&apos;ll say so on the call.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="section-spacing border-t border-b border-rule">
        <div className="content-width flex flex-col items-center text-center gap-6">
          <p className="font-jakarta font-bold text-navy text-[28px] md:text-[36px] leading-[1.2] max-w-xl tracking-[-0.01em]">
            Book a 30-minute discovery call.
          </p>
          <p className="font-jakarta text-slate text-[17px] leading-[1.65] max-w-lg">
            No pitch, no pressure — an honest conversation about where I can help and whether
            we&apos;re the right fit.
          </p>
          <Button href="/book">Book your discovery call →</Button>
        </div>
      </div>
    </>
  );
}
