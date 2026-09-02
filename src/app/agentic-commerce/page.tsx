import Link from "next/link";

const readinessLayers = [
  { n: "01", title: "Discoverable", question: "Can agents find what you offer?", body: "Products, services and capabilities must be visible through channels and data structures agents can reliably access." },
  { n: "02", title: "Interpretable", question: "Can agents understand the commercial truth?", body: "Pricing, availability, eligibility, product attributes, service conditions and policies must be machine-readable and current." },
  { n: "03", title: "Callable", question: "Can agents interact directly with your systems?", body: "Agents need coherent capabilities and interfaces rather than depending entirely on browser navigation or scraping." },
  { n: "04", title: "Authorised", question: "Can you establish who the agent represents and what it may do?", body: "Agent identity, user or business identity, delegated authority, limits, approvals and expiry need to be explicit." },
  { n: "05", title: "Transactable", question: "Can the agent complete the economic action?", body: "Quote, reserve, order, purchase, pay or execute another defined transaction in a controlled way." },
  { n: "06", title: "Fulfillable", question: "Can the organisation complete what the agent started?", body: "Confirmation, delivery, booking, cancellation, return, refund, amendment and exception handling must work beyond payment." },
  { n: "07", title: "Governable", question: "Can the organisation control and audit agent activity?", body: "Policies, human escalation, risk rules, permissions, logs and accountability need to exist." },
  { n: "08", title: "Measurable", question: "Can you see whether the channel creates value?", body: "Agent source, conversion, failures, economics, risk, cost and business outcomes need to be observable." },
];

const failurePoints = [
  { title: "Commercial truth is not agent-readable", body: "Agents cannot reliably understand products, services, price, availability, eligibility or policy." },
  { title: "Discovery does not lead to action", body: "The agent can recommend the business but still has to hand the customer back to a human-operated journey to complete anything." },
  { title: "APIs are not an agent interface", body: "Technical endpoints exist, but capabilities, state, permissions, errors and handoffs have not been designed for autonomous use." },
  { title: "Authority is unclear", body: "Existing identity, authentication, risk and payment controls assume the person operating the interface is the person initiating the transaction." },
  { title: "The new channel is invisible operationally", body: "The organisation cannot reliably measure agent traffic, completed actions, failure points, risk or economic contribution." },
];

const packages = [
  {
    id: "readiness-sprint",
    label: "ASSESS · 2–3 WEEKS",
    title: "Agentic Commerce Readiness Sprint",
    promise: "Find where your business is ready — and where an agent-mediated journey will break.",
    body: "Select one or more commercially important journeys and assess them across the Readiness Stack. The output is a prioritised implementation view rather than a generic future-state report.",
    outputs: ["Readiness score", "Current and future journey", "Architecture map", "Readiness gaps", "Protocol/platform applicability", "Authority and risk considerations", "Prioritised backlog", "Recommended MVP", "90-day roadmap"],
    cta: "Discuss a Readiness Sprint",
    event: "agentic_readiness_cta",
  },
  {
    id: "mvp",
    label: "PROVE · TYPICALLY 4–8 WEEKS",
    title: "Agentic Commerce MVP",
    promise: "Make one priority commerce journey agent-ready enough to prove the pattern.",
    body: "Take a deliberately narrow journey and implement enough of the end-to-end chain to test how agent-mediated commerce should work inside the organisation — without pretending the whole enterprise has been transformed.",
    outputs: ["Commercial data", "Agent interface", "Intent and identity context", "Delegated authority", "Quote / order / action", "Payment path", "Fulfilment", "Exception handling", "Observability", "Governance", "Handover"],
    cta: "Discuss an MVP",
    event: "agentic_mvp_cta",
    featured: true,
  },
  {
    id: "operating-model",
    label: "SCALE",
    title: "Agentic Commerce Operating Model",
    promise: "Move from one working journey to an organisational capability.",
    body: "Once a transaction pattern is proven, define how it should scale across products, channels, markets and teams without fragmented integrations or uncontrolled agent behaviour.",
    outputs: ["Canonical commerce model", "Protocol/adaptor strategy", "Agent identity policy", "Delegated-authority framework", "Payment controls", "Post-transaction lifecycle", "Observability framework", "Product and business ownership", "Governance model", "Scale roadmap"],
    cta: "Discuss scaling",
    event: "agentic_scale_cta",
  },
];

const audiences = [
  { title: "Payments & fintech infrastructure", body: "Providers that need to support customers, merchants or enterprise clients as agent-mediated transactions become material." },
  { title: "Commerce & platform businesses", body: "Businesses with complex product, booking, procurement, marketplace or transactional journeys." },
  { title: "AI & enterprise software", body: "Technology companies building agents or AI products that need commerce, payments or regulated-market transaction expertise." },
];

export default function AgenticCommercePage() {
  return (
    <>
      <section className="section-spacing pt-[140px] md:pt-[160px] pb-12 md:pb-16">
        <div className="content-width">
          <p className="font-mono font-semibold text-cyan text-[11px] tracking-[0.11em] uppercase">Agentic Commerce Readiness &amp; Enablement</p>
          <h1 className="font-display font-bold text-navy text-[40px] md:text-[54px] lg:text-[60px] leading-[1.05] mt-5 max-w-4xl">Prepare for commerce increasingly mediated by AI agents.</h1>
          <div className="max-w-3xl mt-7 space-y-4">
            <p className="font-jakarta text-slate text-[18px] md:text-[19px] leading-[1.75]">AI agents are beginning to move from search and recommendation toward taking actions on behalf of customers and businesses — discovering offers, checking conditions, requesting authority, initiating payments or orders, and managing what happens next.</p>
            <p className="font-jakarta text-slate text-[18px] md:text-[19px] leading-[1.75]">I am developing a readiness and implementation practice around what organisations need to change when that becomes material: commercial data, agent interfaces, delegated authority, payments, fulfilment, controls and measurement.</p>
          </div>
          <p className="font-jakarta font-bold text-navy text-[18px] leading-[1.5] mt-7">Assess readiness. Prove one journey. Build the capability to scale it.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/book" data-analytics-event="agentic_book_click" className="btn-primary">Discuss your readiness <span aria-hidden="true">→</span></Link>
            <a href="#readiness-stack" className="btn-secondary">See the readiness model <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule bg-cream-card">
        <div className="content-width grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <div>
            <span className="section-label">Why now</span>
            <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12]">The harder shift begins after the recommendation.</h2>
          </div>
          <div className="space-y-4">
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75]">The first wave of generative AI changed how people search, research and make decisions. The next wave changes what happens after the decision.</p>
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75]">Agents increasingly need live commercial information, direct system access, defined authority, transaction capability and downstream operational support.</p>
            <p className="font-jakarta font-semibold text-navy text-[17px] leading-[1.7]">The strategic question is not which platform or protocol wins. It is whether your business can participate when agents become a meaningful part of the customer or business journey.</p>
          </div>
        </div>
      </section>

      <section id="readiness-stack" className="section-spacing scroll-mt-20">
        <div className="content-width">
          <span className="section-label">Agentic Commerce Readiness Stack</span>
          <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12] max-w-2xl">An agent-mediated journey is only as strong as its weakest layer.</h2>
          <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-4 max-w-2xl">A business may be visible to an AI assistant and still be far from operationally ready. Discovery is only the first step.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {readinessLayers.map((layer) => (
              <div key={layer.title} className="border border-rule p-6 bg-cream-card">
                <div className="flex items-center justify-between gap-4"><span className="font-mono text-cyan text-[11px] font-semibold">{layer.n}</span><span className="font-mono text-slate text-[10px] tracking-[0.08em] uppercase">{layer.title}</span></div>
                <h3 className="font-jakarta font-bold text-navy text-[16px] leading-[1.4] mt-5">{layer.question}</h3>
                <p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">{layer.body}</p>
              </div>
            ))}
          </div>
          <p className="font-jakarta font-bold text-navy text-[18px] leading-[1.55] mt-9 border-l-4 border-cyan pl-5">Agent readiness is not a single integration. It is an end-to-end operating capability.</p>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">Where businesses are likely to break</span>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-0 border-t border-rule mt-7">
            {failurePoints.map((point, index) => (
              <div key={point.title} className="py-6 border-b border-rule flex gap-4"><span className="font-mono text-cyan text-[11px] mt-1">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.35]">{point.title}</h3><p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-2">{point.body}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule bg-cream-card">
        <div className="content-width">
          <span className="section-label">How we can start</span>
          <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12]">Agentic Commerce Launchpad</h2>
          <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-4 max-w-2xl">A progression from understanding the readiness problem to proving it operationally. The first engagement should be narrow enough to learn quickly and concrete enough to leave something usable behind.</p>
          <div className="grid lg:grid-cols-3 gap-5 mt-10">
            {packages.map((pkg) => (
              <div key={pkg.id} id={pkg.id} className={`${pkg.featured ? "bg-navy" : "bg-cream"} border border-rule p-7 md:p-8 flex flex-col scroll-mt-24`}>
                <p className={`font-mono font-semibold text-[10px] tracking-[0.1em] uppercase ${pkg.featured ? "text-cyan" : "text-slate"}`}>{pkg.label}</p>
                <h3 className={`font-jakarta font-bold text-[21px] leading-[1.25] mt-4 ${pkg.featured ? "text-cream" : "text-navy"}`}>{pkg.title}</h3>
                <p className={`font-jakarta font-semibold text-[15px] leading-[1.55] mt-3 ${pkg.featured ? "text-cream" : "text-navy"}`}>{pkg.promise}</p>
                <p className="font-jakarta text-[14px] leading-[1.7] mt-4" style={pkg.featured ? { color: "rgba(245,243,239,0.7)" } : { color: "#5A6470" }}>{pkg.body}</p>
                <div className={`mt-6 pt-5 border-t ${pkg.featured ? "border-white/15" : "border-rule"}`}>
                  <p className={`label-meta mb-3 ${pkg.featured ? "text-cyan" : ""}`}>Typical outputs</p>
                  <ul className="flex flex-col gap-2">{pkg.outputs.map((output) => <li key={output} className={`font-jakarta text-[13px] leading-[1.5] flex gap-2 ${pkg.featured ? "text-cream" : "text-slate"}`}><span className={pkg.featured ? "text-cyan" : "text-navy"}>→</span>{output}</li>)}</ul>
                </div>
                <Link href="/book" data-analytics-event={pkg.event} className={`inline-flex mt-7 font-jakarta font-semibold text-[14px] ${pkg.featured ? "text-cyan" : "text-navy"}`}>{pkg.cta} →</Link>
              </div>
            ))}
          </div>
          <p className="font-jakarta font-bold text-navy text-[18px] leading-[1.55] mt-9 text-center">Don&apos;t just assess whether you&apos;re ready. Prove one journey.</p>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="section-label">Implementation principle</span>
            <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12]">Start with the journey — not the protocol.</h2>
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-5">Agentic Commerce is developing across multiple standards, networks and platforms. The implementation should not assume today&apos;s leading interface will be the only one that matters tomorrow.</p>
            <p className="font-jakarta text-slate text-[16px] md:text-[17px] leading-[1.75] mt-4">Define the commercial capabilities, data, authority, transaction logic and controls the business requires first — then determine how emerging protocols and platforms should connect to that model.</p>
          </div>
          <div className="border border-rule p-7 bg-cream-card"><p className="label-meta mb-5">Ecosystem under evaluation</p><div className="flex flex-wrap gap-2">{["UCP", "ACP", "AP2", "MCP", "A2A", "Visa", "Mastercard"].map((item) => <span key={item} className="stack-tag">{item}</span>)}</div><p className="font-jakarta text-slate text-[13px] leading-[1.65] mt-5">These labels indicate relevant ecosystem technologies and initiatives. They do not imply partnership, certification or endorsement.</p></div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">Why this intersection</span>
          <h2 className="font-display font-bold text-navy text-[32px] md:text-[42px] leading-[1.12]">Payments expertise. Enterprise implementation. Hands-on AI.</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-9">
            <div className="bg-cream-card p-7 border border-rule"><h3 className="font-jakarta font-bold text-navy text-[18px]">Payments &amp; financial infrastructure</h3><p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3">18+ years across payments and financial services, including enterprise issuing, digital-wallet implementation and market development.</p></div>
            <div className="bg-cream-card p-7 border border-rule"><h3 className="font-jakarta font-bold text-navy text-[18px]">Enterprise execution</h3><p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3">Former Mastercard VP leading global R&amp;D delivery and operations across four regions and a 120+ specialist organisation.</p></div>
            <div className="bg-cream-card p-7 border border-rule"><h3 className="font-jakarta font-bold text-navy text-[18px]">Hands-on AI capability</h3><p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3">Modern AI-enabled products and workflow systems designed and shipped personally — providing practical understanding of what agents and automation can actually do.</p></div>
          </div>
          <p className="font-jakarta font-bold text-navy text-[18px] leading-[1.55] mt-8 border-l-4 border-cyan pl-5">I understand the transaction, the organisation around it, and increasingly the technology now changing both.</p>
        </div>
      </section>

      <section className="section-spacing border-t border-rule bg-cream-card">
        <div className="content-width">
          <span className="section-label">Who this is for</span>
          <p className="font-jakarta text-slate text-[16px] leading-[1.7] max-w-2xl mb-8">The framework is deliberately cross-industry. The pilot focus is narrower.</p>
          <div className="grid md:grid-cols-3 gap-5">{audiences.map((audience) => <div key={audience.title} className="bg-cream border border-rule p-7"><h3 className="font-jakarta font-bold text-navy text-[17px] leading-[1.35]">{audience.title}</h3><p className="font-jakarta text-slate text-[14px] leading-[1.7] mt-3">{audience.body}</p></div>)}</div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div><span className="section-label">Planned demonstrator</span><h2 className="font-display font-bold text-navy text-[30px] md:text-[38px] leading-[1.12]">B2B agentic procurement</h2><p className="font-jakarta text-slate text-[15px] leading-[1.7] mt-4">A reference journey to pressure-test multiple readiness layers — not presented as client work or a finished product.</p></div>
          <div className="bg-navy p-7 md:p-8"><p className="font-mono text-cyan text-[10px] tracking-[0.1em] uppercase">Illustrative instruction</p><p className="font-jakarta font-semibold text-cream text-[17px] leading-[1.6] mt-4">“Purchase 100 units of component X. Use approved suppliers only. Maximum €40 per unit. Delivery required by Friday. Obtain human approval if total commitment exceeds €10,000.”</p><div className="flex flex-wrap gap-2 mt-6">{["Intent", "Discovery", "Offer comparison", "Availability", "Policy", "Authority", "Human approval", "Order / payment", "Confirmation", "Audit"].map((step) => <span key={step} className="font-mono text-[10px] px-2.5 py-1.5 border border-white/20 text-cream">{step}</span>)}</div></div>
        </div>
      </section>

      <section className="section-spacing border-t border-rule">
        <div className="content-width">
          <span className="section-label">Related execution capability</span>
          <h2 className="font-display font-bold text-navy text-[30px] md:text-[38px] leading-[1.12] max-w-2xl">The underlying work goes beyond Agentic Commerce.</h2>
          <p className="font-jakarta text-slate text-[16px] leading-[1.75] mt-4 max-w-2xl">Many Agentic Commerce programmes expose broader implementation problems. I also work selectively on the capabilities underneath them.</p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <div className="border border-rule p-6"><h3 className="font-jakarta font-bold text-navy text-[17px]">Enterprise Delivery</h3><p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">Redesign enterprise onboarding and implementation processes that have become slow, bespoke or difficult to scale.</p></div>
            <div className="border border-rule p-6"><h3 className="font-jakarta font-bold text-navy text-[17px]">AI Workflow Redesign</h3><p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">Identify and implement AI-enabled workflow changes where measurable operating outcomes matter more than experimentation.</p></div>
            <div className="border border-rule p-6"><h3 className="font-jakarta font-bold text-navy text-[17px]">Transformation Mobilisation</h3><p className="font-jakarta text-slate text-[14px] leading-[1.65] mt-3">Turn strategically important initiatives into executable workstreams, governance and first-wave delivery.</p></div>
          </div>
          <Link href="/services" className="inline-flex mt-7 font-jakarta font-semibold text-[14px] text-navy hover:underline hover:decoration-cyan hover:decoration-2 hover:underline-offset-4">See broader services →</Link>
        </div>
      </section>

      <section className="section-spacing"><div className="content-width"><div className="bg-navy rounded-cta px-8 py-14 md:px-16 md:py-16 text-center"><h2 className="font-display font-bold text-cream text-[30px] md:text-[40px] leading-[1.15]">Start with one journey worth understanding.</h2><p className="font-jakarta text-[16px] leading-[1.7] mt-4 max-w-xl mx-auto" style={{ color: "rgba(245,243,239,0.72)" }}>Bring a customer, payment, procurement, booking or service journey you think agents may eventually influence. We can work out where the real readiness questions sit.</p><Link href="/book" data-analytics-event="agentic_book_click" className="btn-cream inline-flex mt-7">Discuss the journey →</Link></div></div></section>
    </>
  );
}
