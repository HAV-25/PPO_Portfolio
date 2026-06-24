"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const operatingFocus = [
  {
    title: "Financial Infrastructure",
    description:
      "Building and scaling payment ecosystems, commercial partnerships, and operating models in regulated environments.",
  },
  {
    title: "AI Systems",
    description:
      "Designing AI-native products, automation platforms, and agentic workflows from concept through implementation.",
  },
  {
    title: "Emerging Technology",
    description:
      "Exploring the operating models, infrastructure, and ecosystem opportunities shaping Physical AI, robotics, and intelligent systems.",
  },
];

const previouslyAt = ["Mastercard", "Wirecard", "Skyllfull"];

export default function Hero() {
  return (
    <section className="section-spacing pt-[140px] md:pt-[160px]">
      <div className="content-width">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <div>
            <motion.h1
              className="font-jakarta font-extrabold text-navy text-[38px] md:text-[52px] lg:text-[58px] leading-[1.1] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Building systems at the intersection of{" "}
              <span className="underline-cyan">fintech, AI, and emerging technology.</span>
            </motion.h1>

            <motion.div
              className="mt-7 space-y-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <p className="font-jakarta font-normal text-slate text-[17px] md:text-[18px] leading-[1.75]">
                For nearly two decades I&apos;ve helped organisations scale products, partnerships, and operations across payments and financial infrastructure.
              </p>
              <p className="font-jakarta font-normal text-slate text-[17px] md:text-[18px] leading-[1.75]">
                Today I&apos;m applying the same systems-thinking to AI-native products, automation platforms, and the next generation of intelligent technologies.
              </p>
              <p className="font-jakarta font-normal text-slate text-[17px] md:text-[18px] leading-[1.75]">
                From global fintech programmes to venture-scale experimentation, my work sits where strategy, technology, and execution meet.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            >
              <Link href="#work" className="btn-primary">
                Explore my work <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/experience" className="btn-secondary">
                Career journey <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            >
              <span className="font-jakarta font-medium text-slate text-[11px] tracking-[0.08em] uppercase">
                Previously at
              </span>
              {previouslyAt.map((name, i) => (
                <span key={name} className="flex items-center gap-3">
                  <span className="font-jakarta font-semibold text-navy text-[14px]">
                    {name}
                  </span>
                  {i < previouslyAt.length - 1 && (
                    <span className="text-slate opacity-40 text-[13px]">·</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — Operating Focus card */}
          <motion.div
            className="bg-navy rounded-card p-8 lg:p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            <p className="font-jakarta font-semibold text-cyan text-[11px] tracking-[0.1em] uppercase mb-6">
              Operating Focus
            </p>

            <div className="flex flex-col gap-0">
              {operatingFocus.map((item, i) => (
                <div key={item.title}>
                  <div className="py-5">
                    <p className="font-jakarta font-bold text-cream text-[15px] leading-tight mb-2">
                      {item.title}
                    </p>
                    <p className="font-jakarta font-normal text-[14px] leading-[1.65]" style={{ color: "rgba(245,241,232,0.65)" }}>
                      {item.description}
                    </p>
                  </div>
                  {i < operatingFocus.length - 1 && (
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} />
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
            />
            <p className="font-jakarta text-[13px] leading-[1.5] mt-4" style={{ color: "rgba(245,241,232,0.5)" }}>
              Germany · Open to Europe &amp; Remote
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
