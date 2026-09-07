"use client";

import { motion } from "framer-motion";

const PROJECT_CAL_URL = "https://cal.com/payal-ponkshe/explore";

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
            <h1 className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06]">Explore a project.</h1>
            <p className="font-jakarta text-slate text-[17px] leading-[1.7] mt-6 max-w-sm">Bring the problem that is not moving. In 30 minutes we can look at the current constraint, the outcome you need, and whether a defined engagement could help move it forward.</p>
            <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-sm">If you are exploring agent-mediated commerce, bring one customer, merchant, payment, procurement or service journey you think AI agents may influence. We can use the conversation to identify where the likely readiness constraints sit and whether a Sprint or MVP would be useful.</p>
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
            <iframe
              src={PROJECT_CAL_URL}
              title="Explore a project with Payal Ponkshe"
              className="w-full border border-rule bg-cream-card"
              style={{ minWidth: "280px", height: "760px" }}
              loading="lazy"
            />
            <p className="font-jakarta text-slate text-[12px] leading-[1.6] mt-3">
              Calendar not loading? <a href={PROJECT_CAL_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-cyan decoration-2 underline-offset-2">Open the booking page →</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
