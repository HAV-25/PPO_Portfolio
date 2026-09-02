import Link from "next/link";

const layers = ["Discoverable", "Interpretable", "Callable", "Authorised", "Transactable", "Fulfillable", "Governable", "Measurable"];
const stages = [
  { label: "ASSESS", title: "Find where the journey breaks", body: "Map one commercially important journey across the readiness layers and identify what should be solved first." },
  { label: "PROVE", title: "Make one journey work", body: "Build enough of a deliberately narrow journey to test the data, interfaces, authority, transaction and controls in practice." },
  { label: "SCALE", title: "Turn proof into capability", body: "Translate a working pattern into an operating model that can extend across products, channels and markets." },
];

export default function AgenticCommercePreview() {
  return (
    <section className="section-spacing border-t border-rule">
      <div className="content-width">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="section-label">Current focus</span>
            <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12]">
              Agentic Commerce Readiness &amp; Enablement
            </h2>
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-5">
              The useful question is not which protocol wins. It is whether the business can support an agent-mediated journey safely, commercially and operationally — from discovery through fulfilment and measurement.
            </p>
            <div className="flex flex-wrap gap-2 mt-7">
              {layers.map((layer) => <span key={layer} className="stack-tag">{layer}</span>)}
            </div>
            <Link
              href="/agentic-commerce"
              data-analytics-event="agentic_home_cta"
              className="inline-flex mt-8 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4"
            >
              See the readiness model and Launchpad <span className="ml-1.5" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <div key={stage.label} className="bg-cream-card border border-rule p-6 flex flex-col">
                <p className="font-mono font-semibold text-cyan text-[11px] tracking-[0.1em]">{stage.label}</p>
                <h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.3] mt-4">{stage.title}</h3>
                <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
