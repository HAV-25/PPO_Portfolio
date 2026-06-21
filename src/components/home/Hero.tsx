"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const engagementItems = [
  "Turning AI investments into measurable revenue impact",
  "Delivering complex fintech and payments programmes in regulated markets",
  "Building the operating structure your venture needs to scale",
];

const previouslyAt = ["Mastercard", "Wirecard", "Skyllfull"];

export default function Hero() {
  return (
    <section className="section-spacing pt-[140px] md:pt-[160px]">
      <div className="content-width">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-12 items-center">
          {/* Left column */}
          <div>
            <motion.h1
              className="font-jakarta font-extrabold text-navy text-[40px] md:text-[56px] lg:text-[62px] leading-[1.08] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Fintech &amp; payments executive.{" "}
              <span className="underline-cyan">AI-first venture builder.</span>
            </motion.h1>

            <motion.p
              className="font-jakarta font-normal text-slate text-[17px] md:text-[18px] leading-[1.7] mt-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              I&apos;ve run $25M+ delivery programmes at Mastercard and built 6 AI
              ventures from scratch since 2024. I take on a small number of engagements
              where that dual experience — at scale and hands-on — is exactly what&apos;s needed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            >
              <Link href="#work" className="btn-primary">
                View my work <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/book" className="btn-secondary">
                Book a 30-min call <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            >
              <span
                className="font-jakarta font-medium text-slate text-[11px] tracking-[0.08em] uppercase"
              >
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

          {/* Right column — Currently Focused On card */}
          <motion.div
            className="bg-navy rounded-card p-8 lg:p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            <p className="font-jakarta font-semibold text-cyan text-[11px] tracking-[0.1em] uppercase mb-5">
              Where I add the most value
            </p>

            <ul className="flex flex-col gap-4">
              {engagementItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-[7px] w-2 h-2 rounded-full bg-cyan"
                    aria-hidden="true"
                  />
                  <span className="font-jakarta font-medium text-cream text-[15px] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="my-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
            />

            <p className="font-jakarta text-[14px] leading-[1.5]" style={{ color: "rgba(245,241,232,0.6)" }}>
              Germany · Open to Europe &amp; Remote
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
