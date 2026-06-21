"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*
 * TODO — PRIORITY BEFORE LAUNCH
 * Replace the placeholder entries below with real testimonials/recommendations.
 * Sources to draw from:
 *   - LinkedIn recommendations (direct quotes with permission)
 *   - Written references from Mastercard, Wirecard, or advisory clients
 *   - Even one strong quote from a senior fintech peer changes the conversion equation.
 *
 * Each entry needs: quote, name, title, company.
 * If a name must remain anonymous: use "VP, [Company Type]" e.g. "COO, Berlin-based fintech"
 */

const testimonials: {
  quote: string;
  name: string;
  title: string;
  company: string;
}[] = [
  // PLACEHOLDER — Replace with real testimonial
  {
    quote:
      "Payal brings something genuinely rare: the rigour of a senior delivery executive and the hands-on instinct of someone who has actually built production AI systems. She doesn't just advise — she works alongside you.",
    name: "[Name]",
    title: "[Title]",
    company: "[Company]",
  },
  // PLACEHOLDER — Replace with real testimonial
  {
    quote:
      "Working with Payal on our operating model gave us more clarity in four weeks than six months of internal workshops. She asked the questions we hadn't thought to ask and was honest when our assumptions were wrong.",
    name: "[Name]",
    title: "[Title]",
    company: "[Company]",
  },
  // PLACEHOLDER — Replace with real testimonial (or remove if only 2 available)
  {
    quote:
      "Payal's understanding of the EU regulatory landscape combined with her practical AI systems knowledge is exactly what we needed. She translated complex compliance requirements into concrete architecture decisions.",
    name: "[Name]",
    title: "[Title]",
    company: "[Company]",
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-spacing border-t border-rule" ref={ref}>
      <div className="content-width">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          From colleagues &amp; clients
        </motion.span>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              className="bg-cream-card rounded-card p-7 flex flex-col"
            >
              <blockquote className="font-jakarta text-navy text-[15px] leading-[1.8] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-rule">
                <p className="font-jakarta font-bold text-navy text-[14px]">{t.name}</p>
                <p className="font-jakarta text-slate text-[13px] mt-0.5">
                  {t.title} &middot; {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
