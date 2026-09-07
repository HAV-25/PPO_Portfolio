import Link from "next/link";

const humanJourney = ["Discover", "Browse", "Compare", "Authenticate", "Pay", "Manage order"];
const agentJourney = ["Express intent", "Agent discovers", "Evaluates", "Requests authority", "Acts", "Manages exceptions"];

export default function AgenticTransition() {
  return (
    <section className="section-spacing border-t border-rule">
      <div className="content-width">
        <span className="section-label">Current market shift</span>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12] max-w-xl">AI is moving closer to the point of action.</h2>
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-5 max-w-xl">Search, recommendation and assistants were the first wave. The harder transition begins when agents — whether acting for a customer, merchant, marketplace or platform — need live commercial truth, tools, authority, payment or order capability, and operational handoffs.</p>
            <p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4 max-w-xl">The problem is no longer only whether an external buying agent can transact with a business. Merchants and platforms are also building their own shopping and operational agents.</p>
            <p className="font-jakarta font-medium text-navy text-[15px] leading-[1.7] mt-5 max-w-xl">That broader two-sided transition is the problem space I am developing through Agentic Commerce Readiness &amp; Enablement.</p>
            <Link href="/agentic-commerce" className="inline-flex mt-7 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4">Explore the current focus <span className="ml-1.5" aria-hidden="true">→</span></Link>
          </div>

          <div className="grid sm:grid-cols-2 border border-rule bg-cream-card">
            <div className="p-6 md:p-7">
              <p className="label-meta mb-5">Human-operated journey</p>
              <div className="flex flex-col gap-3">{humanJourney.map((step, index) => <div key={step} className="flex items-center gap-3"><span className="font-mono text-[11px] text-slate opacity-60 w-5">{String(index + 1).padStart(2, "0")}</span><span className="font-jakarta font-medium text-navy text-[14px]">{step}</span></div>)}</div>
            </div>
            <div className="p-6 md:p-7 border-t sm:border-t-0 sm:border-l border-rule">
              <p className="label-meta mb-5">Increasingly agent-mediated</p>
              <div className="flex flex-col gap-3">{agentJourney.map((step, index) => <div key={step} className="flex items-center gap-3"><span className="font-mono text-[11px] text-cyan w-5">{String(index + 1).padStart(2, "0")}</span><span className="font-jakarta font-semibold text-navy text-[14px]">{step}</span></div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
