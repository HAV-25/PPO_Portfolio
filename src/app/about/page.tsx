"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";

const story = [
  {
    label: "The operating thesis",
    body: "I spent 18 years in fintech and payments — at Mastercard leading $25M+ global partnerships, at Wirecard launching the UK's first Apple Wallet implementation, in the DACH market driving digital payments adoption. As a senior fintech executive, I understand how large-scale financial infrastructure works, what breaks it, and what agentic transformation actually requires.",
    highlight: "$25M+",
  },
  {
    label: "The pivot",
    body: "In 2022 I co-founded Skyllfull — a specialised talent platform for DeFi and Web3. We generated €250K+ in qualified pipeline within 30 days of launch and validated product-market fit with startup and enterprise clients. I ran it for two years, then made a deliberate decision to move into AI venture building when I saw where the real opportunity was shifting. Since 2024 I've been building AI ventures independently under AppsBrite UG — shipping production systems in n8n, Claude, Supabase, and MCP integrations that I designed and built myself, not just advised on.",
    highlight: null,
  },
  {
    label: "The rare overlap",
    body: "Most executives haven't built. Most builders haven't run 120-person cross-regional programmes. I operate at the intersection — and I find that's where the most interesting problems live.",
    highlight: "120-person",
  },
];

function StorySection({
  section,
  index,
}: {
  section: (typeof story)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
    >
      <span className="section-label">{section.label}</span>
      <p className="font-jakarta text-navy text-[17px] leading-[1.8]">
        {section.body}
      </p>
    </motion.div>
  );
}

export default function AboutPage() {
  const photoRef = useRef<HTMLDivElement>(null);
  const photoInView = useInView(photoRef, { once: true, margin: "-60px" });
  const eduRef = useRef<HTMLDivElement>(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-60px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero */}
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1
            className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Builder. Executive.{" "}
            <span className="underline-cyan">Neither, fully.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main two-column */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start">
            {/* Photo */}
            <motion.div
              ref={photoRef}
              initial={{ opacity: 0, y: 20 }}
              animate={photoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* TODO: Replace this div with <Image> once portrait photo is available */}
              <div
                className="w-full aspect-[3/4] border border-rule flex items-end p-5"
                style={{ background: "rgba(36,53,110,0.06)" }}
                aria-label="Payal Ponkshe"
                role="img"
              >
                <p
                  className="font-jakarta text-[11px] leading-[1.5] tracking-[0.03em]"
                  style={{ color: "rgba(36,53,110,0.4)" }}
                >
                  Portrait coming soon
                </p>
              </div>
              <p className="font-jakarta font-medium text-slate text-[12px] mt-3 tracking-[0.04em] uppercase">
                Payal Ponkshe &middot; Munich, Germany
              </p>
            </motion.div>

            {/* Story */}
            <div className="flex flex-col gap-10">
              {story.map((section, i) => (
                <StorySection key={section.label} section={section} index={i} />
              ))}

              <motion.p
                className="font-jakarta font-medium text-slate text-[15px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              >
                Based in Germany. German citizen. Open to Europe and remote.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <motion.div
            ref={eduRef}
            initial={{ opacity: 0, y: 20 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <span className="section-label">Education</span>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-jakarta font-bold text-navy text-[16px]">MBA</p>
                    <p className="font-jakarta text-slate text-[15px]">
                      Hult International Business School, USA
                    </p>
                    <p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">
                      2010 – 2011
                    </p>
                  </div>
                  <div>
                    <p className="font-jakarta font-bold text-navy text-[16px]">
                      BE Computer Science
                    </p>
                    <p className="font-jakarta text-slate text-[15px]">
                      Mumbai University, India
                    </p>
                    <p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">
                      2002 – 2006
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="section-label">Languages</span>
                <div className="flex flex-col gap-3">
                  <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                    English — Full Professional
                  </p>
                  <p className="font-jakarta text-navy text-[16px] leading-[1.65]">
                    German — Limited Working
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-b border-rule">
        <div className="content-width">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <p className="font-jakarta font-bold text-navy text-[20px] md:text-[24px] max-w-md leading-[1.3]">
              Ready to work together?
            </p>
            <Button href="/book">Book a 30-minute call →</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
