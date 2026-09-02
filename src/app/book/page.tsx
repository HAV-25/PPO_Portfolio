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

  return <div className="calendly-inline-widget w-full rounded-none border border-rule" data-url={url} style={{ minWidth: "280px", height: "700px" }} />;
}

const expects = [
  "A focused discussion of the business problem or transaction journey",
  "A first view on where the constraint may actually sit",
  "Two or three concrete observations or questions worth testing",
  "An honest assessment of whether I can help",
  "If there is a fit, a clear next step",
];

export default function BookPage() {
  return (
    <section className="section-spacing pt-[120px] md:pt-[140px]">
      <div className="content-width">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-14 md:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
            <h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]">Discuss a project.</h1>
            <p className="font-jakarta text-slate text-[17px] leading-[1.7] mt-6 max-w-sm">Bring the problem that is not moving. In 30 minutes we can look at the current constraint, the outcome you need, and whether a defined engagement could help move it forward.</p>
            <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-sm">If you are exploring Agentic Commerce, bring one customer, payment, procurement or service journey you think agents may eventually influence. We can use the conversation to identify where the likely readiness constraints sit and whether a Sprint or MVP would be useful.</p>
            <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-sm">You do not need protocol knowledge or a prepared brief. A clear description of the journey and what makes it difficult is enough.</p>

            <div className="mt-10">
              <p className="label-meta mb-4">What to expect</p>
              <ul className="flex flex-col gap-3">
                {expects.map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 + i * 0.07 }} className="flex gap-3 items-start">
                    <span className="text-navy font-bold flex-shrink-0 mt-[2px]">→</span>
                    <span className="font-jakarta text-navy text-[15px] leading-[1.65]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-rule">
              <p className="label-meta mb-3">What to bring</p>
              <p className="font-jakarta text-slate text-[15px] leading-[1.7]">If possible, come with the current workflow or programme, who is involved, where it gets stuck, and what a better outcome would look like. If you do not have that documented, we can start from the problem itself.</p>
            </div>
            <p className="font-jakarta text-slate text-[13px] italic opacity-75 mt-6">I take on a small number of engagements at a time.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}>
            <CalendlyEmbed url={CALENDLY_URL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
