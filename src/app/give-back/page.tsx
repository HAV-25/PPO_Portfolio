"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PIVOT_URL = "https://calendly.com/payalponkshe/pivot-upskill-position";
const CONTACT_EMAIL = "payalponkshe@gmail.com";

const heroHighlights = [
  "For professionals rethinking their careers as AI and automation redraw the map",
  "An honest gap assessment, an upskilling focus, and a first step on positioning",
  "Free, 30 minutes, no pitch, no follow-up — just an honest conversation",
];

const professionalProgrammes = [
  {
    tag: "Free · 30 min · Limited slots",
    subtitle: "Pivot, Upskill & Position",
    title: "Ready to reposition for the AI decade?",
    forWhom:
      "You can see the shift coming — AI and automation are changing what your role, sector, or skill set is worth. You want to move into a new direction, build real fluency in AI tools, or develop a professional position that opens doors. You don't need a career coach. You need someone who has hired, built teams, made this pivot herself — and builds these systems hands-on.",
    whatYouGet: [
      "An honest gap assessment — where you are vs where the market is going",
      "A concrete upskilling focus, not a list of courses",
      "A practical first step on positioning and visibility",
      "What to stop doing, what to double down on",
    ],
    limits:
      "A small number of sessions per month. Priority to professionals in fintech, payments, technology, and AI-adjacent transitions. All conversations confidential.",
    cta: "Book a free session",
    href: PIVOT_URL,
  },
];


function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProfessionalCard({
  programme,
  index,
}: {
  programme: (typeof professionalProgrammes)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="bg-cream-card rounded-card flex flex-col p-7 card-hover"
    >
      {/* Status pill */}
      <span className="status-live w-fit">{programme.tag}</span>

      {/* Programme type + title */}
      <p className="label-meta mt-5 mb-2">{programme.subtitle}</p>
      <h3 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.25]">
        {programme.title}
      </h3>

      <div className="border-t border-rule my-5" />

      {/* Who it's for */}
      <div className="mb-5">
        <span className="section-label">Who this is for</span>
        <p className="font-jakarta text-slate text-[14px] leading-[1.8]">
          {programme.forWhom}
        </p>
      </div>

      {/* What you get */}
      <div className="flex-1 mb-5">
        <span className="section-label">What you get</span>
        <ul className="flex flex-col gap-3">
          {programme.whatYouGet.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-cyan"
                aria-hidden="true"
              />
              <span className="font-jakarta text-navy text-[14px] leading-[1.65]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Limits note */}
      <div
        className="p-4 border-l-4 mb-6"
        style={{ borderLeftColor: "#1BAFBF", background: "rgba(36,38,43,0.03)" }}
      >
        <p className="font-jakarta text-slate text-[13px] leading-[1.75] italic">
          {programme.limits}
        </p>
      </div>

      {/* CTA */}
      <a
        href={programme.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-fit"
      >
        {programme.cta} <span aria-hidden="true">→</span>
      </a>
    </motion.div>
  );
}


export default function GiveBackPage() {
  return (
    <>
      {/* Hero — 2-col layout matching home page */}
      <section className="section-spacing pt-[140px] md:pt-[160px]">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-12 items-start">
            {/* Left column */}
            <div>
              <motion.span
                className="section-label"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Give-Back Programmes
              </motion.span>
              <motion.h1
                className="font-display font-bold text-navy text-[40px] md:text-[52px] leading-[1.06] mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              >
                The work is changing.{" "}
                <span className="underline-cyan">Reposition for it.</span>
              </motion.h1>
              <motion.p
                className="font-jakarta font-normal text-slate text-[17px] md:text-[18px] leading-[1.7] mt-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              >
                AI and automation are redrawing what work looks like — which
                roles persist, which skills compound, and how careers get
                rebuilt. I run a small number of free sessions each month for
                professionals navigating that shift. Not consulting. No funnel.
              </motion.p>
            </div>

            {/* Right column — navy card matching home hero */}
            <motion.div
              className="bg-navy rounded-card p-8 lg:p-9"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            >
              <p className="font-jakarta font-semibold text-cyan text-[11px] tracking-[0.1em] uppercase mb-5">
                What I run
              </p>
              <ul className="flex flex-col gap-4">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-[7px] w-2 h-2 rounded-full bg-cyan"
                      aria-hidden="true"
                    />
                    <span className="font-jakarta font-medium text-cream text-[14px] leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="my-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              />
              <p
                className="font-jakarta text-[13px] leading-[1.5]"
                style={{ color: "rgba(245,243,239,0.6)" }}
              >
                All professional sessions are free &middot; 30 minutes &middot; Limited slots
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional programmes */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <Reveal>
            <span className="section-label">For professionals</span>
            <h2 className="font-display font-bold text-navy text-[28px] md:text-[36px] leading-[1.12] max-w-xl mb-10">
              One honest conversation. No agenda.
            </h2>
          </Reveal>

          <div className="max-w-2xl">
            {professionalProgrammes.map((programme, i) => (
              <ProfessionalCard key={programme.subtitle} programme={programme} index={i} />
            ))}
          </div>

          <Reveal delay={0.1} className="mt-8">
            <p className="font-jakarta text-slate text-[13px] leading-[1.7] max-w-xl italic">
              The programme is free, limited to a small number of sessions per
              month, and runs at my discretion based on availability and fit. If
              slots are full, I keep a short waitlist.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What these are not */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <Reveal className="max-w-2xl">
            <span className="section-label">What these are not</span>
            <p className="font-jakarta text-navy text-[16px] leading-[1.85] italic opacity-80">
              &ldquo;This is not a sales funnel. I don&apos;t pitch services,
              ask for referrals, or follow up commercially. One conversation.
              One honest read. That&apos;s it.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Causes pointer */}
      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <Reveal>
            <p className="font-jakarta text-slate text-[15px] leading-[1.75] max-w-xl">
              Beyond these professional sessions, I support a small number of community initiatives
              in senior care and education access — separately from this programme.{" "}
              <a
                href="/causes"
                className="font-jakarta font-semibold text-navy underline decoration-[#1BAFBF] decoration-2 underline-offset-2 hover:opacity-75 transition-opacity"
              >
                Read about my causes →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — navy card matching home FinalCTA */}
      <section className="section-spacing">
        <div className="content-width">
          <Reveal>
            <div className="bg-navy rounded-cta px-8 py-16 md:px-20 md:py-20 flex flex-col items-center text-center">
              <h2 className="font-jakarta font-extrabold text-cream text-[28px] md:text-[36px] leading-[1.15]">
                Not sure if this session is for you?
              </h2>
              <p
                className="font-jakarta text-[16px] leading-[1.65] mt-4 max-w-md"
                style={{ color: "rgba(245,243,239,0.75)" }}
              >
                Drop me a line with where you are and where you want to go.
                I&apos;ll tell you honestly whether 30 minutes with me will help.
              </p>
              <div className="mt-8">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Give-Back — I'd like to know more`}
                  className="btn-cream"
                >
                  Send a message <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
