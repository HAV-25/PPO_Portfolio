"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Tag from "@/components/ui/tag";
import StackIcon from "@/components/ui/StackIcon";

const featured = [
  {
    title: "Content Intelligence & Reconstruction Engine",
    subtitle:
      "AI system for analysing, deconstructing, and reconstructing high-performing content within defined brand frameworks.",
    stack: ["n8n", "Claude API", "GPT Image", "Supabase"],
    status: "live" as const,
    capability: "AI Pipeline Architecture",
  },
  {
    title: "Adaptive Language Learning Platform",
    subtitle:
      "AI-native certification preparation platform combining content generation, scoring, and learning progression.",
    stack: ["React Native", "Supabase", "Claude API", "OpenAI Realtime"],
    status: "live" as const,
    capability: "Product Ownership · Mobile · AI",
  },
  {
    title: "Automated Content Production System",
    subtitle:
      "AI-assisted workflow for transforming content strategy into structured, production-ready media assets.",
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
        <span className="section-label">Systems I&apos;m building</span>

        <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mb-10 max-w-2xl">
          Alongside my leadership career in payments and financial infrastructure, I actively design and build AI-native systems, automation platforms, and venture concepts. These projects serve as laboratories for exploring how emerging technologies move from concept to scalable adoption.
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
                {project.subtitle}
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
