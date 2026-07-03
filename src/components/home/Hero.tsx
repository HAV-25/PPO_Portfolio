"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const proofRows = [
  {
    title: "Enterprise scale",
    description:
      "VP Global Head of Delivery & Operations at Mastercard — 120+ specialists across 4 regions, $25M+ technology partnerships.",
  },
  {
    title: "Hands-on AI builds",
    description:
      "Production agentic systems designed and shipped personally — n8n, Claude, Supabase, React Native. Live products, not slideware.",
  },
  {
    title: "Regulated-market depth",
    description:
      "18+ years in payments and regulated financial services across Europe — GDPR, EU AI Act, and compliance treated as design inputs.",
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
              className="font-display font-bold text-navy text-[38px] md:text-[52px] lg:text-[58px] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              The executive who runs the programme.{" "}
              <span className="underline-cyan">The builder who ships the system.</span>
            </motion.h1>

            <motion.div
              className="mt-7 space-y-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <p className="font-jakarta font-normal text-slate text-[18px] md:text-[19px] leading-[1.75]">
                18+ years in fintech and payments — leading a 120+ person global
                delivery organisation at Mastercard and $25M+ technology
                partnerships across 4 regions.
              </p>
              <p className="font-jakarta font-normal text-slate text-[18px] md:text-[19px] leading-[1.75]">
                Since 2024, an independent AI venture builder shipping production
                agentic systems hands-on. I help European fintech and regulated
                financial services turn AI ambition into operating reality —
                because I have done both sides of that work myself.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            >
              <Link href="/book" className="btn-primary">
                Book a 30-minute call <span aria-hidden="true">→</span>
              </Link>
              <Link href="#work" className="btn-secondary">
                See what I&apos;ve built <span aria-hidden="true">↓</span>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            >
              <span className="label-meta">Previously at</span>
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

          {/* Right column — proof card */}
          <motion.div
            className="bg-navy rounded-card p-8 lg:p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            <p className="font-mono font-medium text-cyan text-[12px] tracking-[0.1em] uppercase mb-6">
              Why clients call
            </p>

            <div className="flex flex-col gap-0">
              {proofRows.map((item, i) => (
                <div key={item.title}>
                  <div className="py-5">
                    <p className="font-jakarta font-bold text-cream text-[15px] leading-tight mb-2">
                      {item.title}
                    </p>
                    <p className="font-jakarta font-normal text-[14px] leading-[1.65]" style={{ color: "rgba(245,243,239,0.65)" }}>
                      {item.description}
                    </p>
                  </div>
                  {i < proofRows.length - 1 && (
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} />
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
            />
            <p className="font-jakarta text-[13px] leading-[1.5] mt-4" style={{ color: "rgba(245,243,239,0.5)" }}>
              Germany · Open to Europe &amp; Remote
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
