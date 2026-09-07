import Link from "next/link";

const articles = [
  {
    pillar: "Financial Infrastructure",
    title: "Payments meets inference: what Stripe–OpenRouter and Ramp Router signal for fintech and AI",
    description: "What payments orchestration can teach us about routing intelligence — and why AI economics eventually has to connect to business outcome.",
    href: "/insights/financial-infrastructure/payments-meets-inference-stripe-openrouter-ramp-router",
  },
  {
    pillar: "Financial Infrastructure",
    title: "Agentic commerce is coming to Europe. The regulatory stack can become part of the design.",
    description: "A view on where agent-led commerce meets European regulation, commercial architecture and implementation choices.",
    href: "/insights/financial-infrastructure/agentic-commerce-eu-regulatory-opportunity",
  },
  {
    pillar: "Operating Models",
    title: "AI operating model playbook for regulated firms",
    description: "A practical framework for moving from AI experimentation toward redesigned work, governance and measurable implementation.",
    href: "/insights/operating-models/ai-operating-model-playbook-regulated-firms",
  },
];

export default function SelectedThinking() {
  return (
    <section className="section-spacing border-t border-rule">
      <div className="content-width">
        <span className="section-label">Current thinking</span>
        <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12] max-w-xl">Ideas behind the work.</h2>
        <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-4 max-w-2xl">
          Research and practical thinking across payments infrastructure, enterprise AI and the operating models required to turn new technology into economic value.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-9">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="group block border border-rule p-6 md:p-7 hover:bg-cream-card transition-colors">
              <p className="label-meta">{article.pillar}</p>
              <h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.35] mt-3 group-hover:underline group-hover:decoration-cyan group-hover:decoration-4 group-hover:underline-offset-4">{article.title}</h3>
              <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">{article.description}</p>
              <span className="inline-flex mt-5 font-jakarta font-semibold text-[13px] text-navy">Read →</span>
            </Link>
          ))}
        </div>
        <Link href="/insights" className="inline-flex mt-8 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4">
          Explore all insights →
        </Link>
      </div>
    </section>
  );
}
