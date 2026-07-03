"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/payalponkshe/discovery-call";

function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-none border border-rule"
      data-url={url}
      style={{ minWidth: "280px", height: "700px" }}
    />
  );
}

const expects = [
  "A diagnosis of your current challenge",
  "2–3 concrete observations or ideas",
  "An honest assessment of fit",
  "A clear sense of what working together would involve",
];

export default function BookPage() {
  return (
    <section className="section-spacing pt-[120px] md:pt-[140px]">
      <div className="content-width">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-14 md:gap-20 items-start">
          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]">
              Let&apos;s talk.
            </h1>

            <p className="font-jakarta text-slate text-[17px] leading-[1.7] mt-6 max-w-sm">
              In 30 minutes I&apos;ll give you an honest read on where I can help,
              what that would look like, and whether we&apos;re the right fit. No
              pitch. No pressure.
            </p>

            <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-sm">
              Consulting, advisory, fractional — or an executive-search
              conversation: all start the same way. Mention which in the
              booking notes.
            </p>

            <div className="mt-10">
              <p className="label-meta mb-4">What to expect</p>
              <ul className="flex flex-col gap-3">
                {expects.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 + i * 0.07 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-navy font-bold flex-shrink-0 mt-[2px]">→</span>
                    <span className="font-jakarta text-navy text-[15px] leading-[1.65]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-rule">
              <p className="label-meta mb-3">What to prepare</p>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7]">
                Come with your top challenge and where you feel stuck. Nothing
                else needed.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-jakarta text-slate text-[13px] italic opacity-75">
                I take on a small number of engagements at a time.
              </p>
            </div>
          </motion.div>

          {/* Right — Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          >
            <CalendlyEmbed url={CALENDLY_URL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
