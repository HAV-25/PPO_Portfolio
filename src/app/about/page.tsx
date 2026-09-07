"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/LinkButton";

const story = [
  {
    label: "The operating thesis",
    body: "I spent 18 years in fintech and payments — at Mastercard leading $25M+ global partnerships, at Wirecard leading digital-wallet and payment implementations including boon’s UK Apple Pay launch, and in the DACH market driving digital payments adoption. As a senior fintech executive, I understand how large-scale financial infrastructure works, what breaks it, and what major technology shifts require operationally.",
    highlight: "$25M+",
  },
  {
    label: "The pivot",
    body: "In 2022 I co-founded Skyllfull — a specialised talent platform for DeFi and Web3. We generated €250K+ in qualified pipeline within 30 days of launch and validated product-market fit with startup and enterprise clients. Since 2024 I've been building AI ventures independently under AppsBrite UG — two products live in production today, including a German exam-prep app on Google Play. My broader working toolkit spans n8n, Supabase, React Native and MCP integrations, alongside Anthropic Claude, Claude Code and Cowork, plus OpenAI ChatGPT, Codex and APIs across research, product design, coding and workflow implementation.",
    highlight: null,
  },
  {
    label: "How I work",
    body: "I bring both sides of that experience to every engagement: the operating discipline from running 120-person cross-regional programmes, and the practical judgement that comes from building production systems with my own hands. Clients get someone who can shape the strategy in the boardroom and then sit down and make it work.",
    highlight: "120-person",
  },
];

function StorySection({ section, index }: { section: (typeof story)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}>
      <span className="section-label">{section.label}</span>
      <p className="font-jakarta text-navy text-[18px] leading-[1.8]">{section.body}</p>
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
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-0">
        <div className="content-width">
          <motion.h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>I&apos;m Payal Ponkshe.</motion.h1>
          <motion.p className="font-jakarta text-slate text-[18px] md:text-[19px] leading-[1.75] mt-6 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>
            A fintech and payments executive, AI venture builder, and advisor to organisations bringing emerging technology into the heart of how they work. 18+ years across Mastercard, Wirecard, and regulated financial services — now also designing and shipping AI products hands-on.
          </motion.p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start">
            <motion.div ref={photoRef} initial={{ opacity: 0, y: 20 }} animate={photoInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="w-full aspect-[3/4] border border-rule flex items-end p-5" style={{ background: "rgba(36,38,43,0.06)" }} aria-label="Payal Ponkshe" role="img">
                <p className="font-jakarta text-[11px] leading-[1.5] tracking-[0.03em]" style={{ color: "rgba(36,38,43,0.4)" }}>Portrait coming soon</p>
              </div>
              <p className="font-jakarta font-medium text-slate text-[12px] mt-3 tracking-[0.04em] uppercase">Payal Ponkshe · Germany</p>
            </motion.div>

            <div className="flex flex-col gap-10">
              {story.map((section, i) => <StorySection key={section.label} section={section} index={i} />)}
              <motion.p className="font-jakarta font-medium text-slate text-[15px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}>
                German national, based in Germany — working remote or onsite as the engagement needs. I take on a small number of consulting engagements at a time — and, selectively, senior executive-level mandates in organisations putting emerging technology at the centre of their transformation.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <motion.div ref={eduRef} initial={{ opacity: 0, y: 20 }} animate={eduInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, ease: "easeOut" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <span className="section-label">Education</span>
                <div className="flex flex-col gap-6">
                  <div><p className="font-jakarta font-bold text-navy text-[16px]">MBA</p><p className="font-jakarta text-slate text-[15px]">Hult International Business School, USA</p><p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">2010 – 2011</p></div>
                  <div><p className="font-jakarta font-bold text-navy text-[16px]">BE Computer Science</p><p className="font-jakarta text-slate text-[15px]">Mumbai University, India</p><p className="font-jakarta font-bold text-slate text-[12px] mt-1 tracking-[0.04em]">2002 – 2006</p></div>
                </div>
              </div>
              <div>
                <span className="section-label">Languages</span>
                <div className="flex flex-col gap-3"><p className="font-jakarta text-navy text-[16px] leading-[1.65]">English — Full Professional</p><p className="font-jakarta text-navy text-[16px] leading-[1.65]">German — Limited Working</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-b border-rule">
        <div className="content-width">
          <motion.div ref={ctaRef} initial={{ opacity: 0, y: 20 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, ease: "easeOut" }} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-jakarta font-bold text-navy text-[20px] md:text-[24px] max-w-md leading-[1.3]">Ready to explore working together?</p>
            <Button href="/book">Explore a project →</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
