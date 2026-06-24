import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/button";
import Link from "next/link";

const CONTACT_EMAIL = "payalponkshe@gmail.com";

export const metadata: Metadata = {
  title: "Causes",
  description:
    "The causes Payal Ponkshe cares about — career re-entry for professionals after breaks, financial inclusion, and responsible AI.",
};

const causes = [
  {
    title: "Career re-entry after a break",
    why: "Career breaks are still treated as gaps rather than choices. The financial services industry in particular hasn't caught up with the reality that some of the most capable people have non-linear histories. I've been on the hiring side long enough to know the difference between a gap and a red flag — and most gaps aren't red flags.",
    whatIDo:
      "I run a small, free Give-Back Programme — 30-minute sessions for professionals re-entering the workforce after a career break. Priority to people in fintech, payments, and technology.",
    action: { label: "Apply for a session →", href: "/give-back" },
  },
  {
    title: "Financial inclusion and access to regulated services",
    why: "18 years in payments means I've seen both sides: the infrastructure that makes financial services work, and the populations that infrastructure routinely excludes. Access to regulated financial services — not just digital wallets, but credit, insurance, savings infrastructure — is still profoundly unequal. I believe the people building that infrastructure have a responsibility to think about who it reaches.",
    whatIDo:
      "This shapes the commercial judgements I make about which clients and projects I take on. I won't advise on systems designed to extract rather than serve.",
    action: null,
  },
  {
    title: "Responsible AI in regulated industries",
    why: "The EU AI Act is a starting point, not a ceiling. In financial services, healthcare, and education — the sectors where AI can do the most good — the failure modes are also the highest stakes. I'm not opposed to moving fast. I'm opposed to moving fast while ignoring the failure modes that are already visible.",
    whatIDo:
      "When I design agentic systems or advise on AI implementation, GDPR compliance, explainability, and audit trails are part of the architecture — not a retrofit. I write about this in Perspectives.",
    action: { label: "Read my thinking on responsible AI →", href: "/perspectives" },
  },
  {
    title: "Women in fintech and payments leadership",
    why: "The pipeline problem in financial services isn't a supply problem — there are plenty of capable women in the sector. It's a visibility and sponsorship problem. I've benefited from sponsors who saw potential and made room. I try to do the same.",
    whatIDo:
      "I mentor informally, make introductions when I can, and try to be specific and honest in feedback rather than encouraging but vague.",
    action: null,
  },
];

export default function CausesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-[140px] md:pt-[160px]">
        <h1 className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em] max-w-2xl">
          Causes I care about
        </h1>
        <p className="font-jakarta text-slate text-[18px] leading-[1.6] mt-5 max-w-xl">
          Work without values is just activity. These are the things I actually
          care about — not as mission statements, but as positions I hold and
          act on.
        </p>
      </Section>

      {/* Causes */}
      <Section>
        <div className="flex flex-col gap-0">
          {causes.map((cause, i) => (
            <div
              key={cause.title}
              className={`py-12 ${i > 0 ? "border-t border-rule" : ""}`}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                {/* Title column */}
                <div>
                  <h2 className="font-jakarta font-bold text-navy text-[22px] md:text-[24px] leading-[1.25]">
                    {cause.title}
                  </h2>
                </div>

                {/* Content column */}
                <div>
                  <div className="mb-5">
                    <p className="label-meta mb-2">Why this matters to me</p>
                    <p className="font-jakarta text-navy text-[15px] leading-[1.7]">
                      {cause.why}
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="label-meta mb-2">What I actually do about it</p>
                    <p className="font-jakarta text-slate text-[15px] leading-[1.7]">
                      {cause.whatIDo}
                    </p>
                  </div>
                  {cause.action && (
                    <Link
                      href={cause.action.href}
                      className="font-jakarta font-medium text-[14px] text-navy underline-cyan hover:opacity-75 transition-opacity"
                    >
                      {cause.action.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Community initiatives */}
      <Section>
        <h2 className="font-jakarta font-bold text-navy text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em] max-w-xl mb-2">
          Community initiatives
        </h2>
        <p className="font-jakarta text-slate text-[16px] leading-[1.7] max-w-xl mb-10">
          Separate from my professional give-back programme, I support three
          ongoing community initiatives. These are longer-term commitments —
          not one-off conversations.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              tag: "Senior Care · Technology",
              title: "AI Empowerment for Seniors",
              body: "I'm building Wyngs — an AI literacy and community platform for adults 60+ designed to position older adults as knowledge contributors, not passive users. It includes a 10-chapter AI literacy curriculum, a Story Capsules feature for capturing and sharing life experience, and a social community layer. If you're 60+, work with older adults, or want to support this build — reach out.",
              cta: "Express interest",
              href: `mailto:${CONTACT_EMAIL}?subject=Wyngs — Senior AI Empowerment`,
            },
            {
              tag: "Senior Care · Volunteering",
              title: "Hospice Elder Companion Programme",
              body: "I organise and participate in volunteer companion visits to hospice elders in Germany who have few or no regular visitors. This isn't about skills or professional development. It's about showing up — conversation, presence, and time. If you're based in Germany and want to volunteer, I'd like to hear from you.",
              cta: "Get involved",
              href: `mailto:${CONTACT_EMAIL}?subject=Hospice Volunteer — I'd like to get involved`,
            },
            {
              tag: "Education · Children",
              title: "Education Access for Children",
              body: "I support educational access for children from economically underserved backgrounds — through tutoring support, mentorship connections, and resource contributions. If you're an educator, NGO, or parent working in this space, or if you'd like to contribute time or resources, I'd like to connect.",
              cta: "Get in touch",
              href: `mailto:${CONTACT_EMAIL}?subject=Education Support — Children`,
            },
          ].map((initiative) => (
            <div key={initiative.title} className="bg-cream-card rounded-card p-7 flex flex-col" style={{ border: "1px solid rgba(36,53,110,0.1)" }}>
              <p className="font-jakarta font-medium text-slate text-[11px] tracking-[0.06em] uppercase mb-3">
                {initiative.tag}
              </p>
              <h3 className="font-jakarta font-bold text-navy text-[18px] leading-[1.3] mb-4">
                {initiative.title}
              </h3>
              <p className="font-jakarta text-slate text-[14px] leading-[1.8] flex-1">
                {initiative.body}
              </p>
              <div className="mt-6 pt-4 border-t border-rule">
                <a
                  href={initiative.href}
                  className="font-jakarta font-semibold text-[13px] text-navy flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                >
                  {initiative.cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Give-Back CTA */}
      <Section ruled="both">
        <div className="max-w-xl">
          <h2 className="font-jakarta font-bold text-navy text-[28px] leading-[1.2]">
            Re-entering the workforce?
          </h2>
          <p className="font-jakarta text-slate text-[16px] leading-[1.65] mt-4">
            If you&apos;re navigating a return after a career break — in fintech,
            payments, tech, or adjacent fields — I offer a small number of free
            sessions per month. No pitch, no programme to sell you.
          </p>
          <div className="mt-6">
            <Button href="/give-back">
              Apply for a Give-Back Session →
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
