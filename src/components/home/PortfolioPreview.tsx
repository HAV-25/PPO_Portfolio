"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import StackIcon from "@/components/ui/StackIcon";

const featured = [
  {
    title: "AI content intelligence pipeline",
    problem:
      "A fully automated pipeline that ingests viral slideshows, understands why they work, and reconstructs them at volume in a proprietary brand system — without legal risk or platform detection.",
    stack: ["n8n", "Claude API", "GPT Image", "Supabase"],
    status: "live" as const,
    capability: "AI Pipeline Architecture",
  },
  {
    title: "AI-native language exam prep — CEFR A1–B1",
    problem:
      "Adult learners preparing for German-language certification lack affordable, exam-accurate tools combining authentic test formats with reliable automated scoring.",
    stack: ["React Native", "Supabase", "Claude API", "OpenAI Realtime"],
    status: "live" as const,
    capability: "Product Ownership · Mobile · AI",
  },
  {
    title: "AI carousel generation platform",
    problem:
      "Content creators stitch together 4–5 disconnected tools to produce a single carousel — the highest-converting format on Instagram and TikTok. One pipeline, end to end.",
    stack: ["Next.js", "Supabase", "OpenAI", "n8n"],
    status: "build" as const,
    capability: "AI Product Strategy · Full-Stack",
  },
];

export default function PortfolioPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing" id="work">
      <div className="content-width" ref={ref}>
        <span className="section-label">Selected work — independently built</span>

        <h2 className="font-jakarta font-extrabold text-navy text-[36px] md:text-[48px] leading-[1.12] tracking-[-0.01em] max-w-xl mb-3">
          AI ventures,{" "}
          <br className="hidden sm:block" />
          shipped end to end
        </h2>
        <p className="font-jakarta text-slate text-[15px] leading-[1.65] mb-8 max-w-lg">
          Self-funded, solo-built since 2024 — demonstrating what hands-on AI systems work
          looks like in practice, not just in a strategy deck.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="group bg-cream-card rounded-card p-7 flex flex-col card-hover"
            >
              {/* Status + capability */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag variant="status" status={project.status}>
                  {project.status === "live" ? "Live" : "In build"}
                </Tag>
                <span className="font-jakarta font-medium text-slate text-[11px] tracking-[0.06em] uppercase">
                  {project.capability}
                </span>
              </div>

              <h3 className="font-jakarta font-bold text-navy text-[16px] leading-[1.35] mt-4">
                {project.title}
              </h3>

              <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3 flex-1">
                {project.problem}
              </p>

              <div className="mt-5 pt-4 border-t border-rule flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span key={t} className="stack-tag inline-flex items-center gap-1.5">
                    <StackIcon name={t} size={12} />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/work"
            className="font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-2 transition-all"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
