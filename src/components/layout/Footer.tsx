import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-cream mt-auto">
      <div className="content-width py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-jakarta font-bold text-navy text-[17px]">Payal Ponkshe</p>
            <p className="font-jakarta font-medium text-navy text-[13px] mt-1 leading-[1.6]">Payments · AI · Transformation Execution</p>
            <p className="font-jakarta text-slate text-[13px] mt-1 leading-[1.6]">Europe &amp; UAE · English-first · Remote or onsite</p>
            <div className="flex items-center gap-4 mt-4 flex-wrap"><a href="https://linkedin.com/in/payalponkshe" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[13px] text-navy hover:opacity-70 transition-opacity">LinkedIn</a><a href="mailto:payalponkshe@gmail.com" className="font-jakarta text-[13px] text-navy hover:opacity-70 transition-opacity">payalponkshe@gmail.com</a></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div><p className="label-meta mb-4">Work</p><ul className="flex flex-col gap-2.5"><li><Link href="/agentic-commerce" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Agentic Commerce</Link></li><li><Link href="/services" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Services</Link></li><li><Link href="/work" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Work</Link></li><li><Link href="/experience" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Experience</Link></li></ul></div>
            <div><p className="label-meta mb-4">Thinking</p><ul className="flex flex-col gap-2.5"><li><Link href="/insights" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Insights</Link></li><li><Link href="/articles" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Article archive</Link></li></ul></div>
            <div><p className="label-meta mb-4">More</p><ul className="flex flex-col gap-2.5"><li><Link href="/about" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">About</Link></li><li><Link href="/book" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Explore a project</Link></li><li><Link href="/give-back" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Give back</Link></li></ul></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10 pt-6 border-t border-rule gap-3"><p className="font-jakarta text-slate text-[12px]">© 2026 Payal Ponkshe. All rights reserved.</p><span className="font-jakarta font-bold text-navy text-[13px] tracking-tight" aria-hidden="true">PP</span></div>
      </div>
    </footer>
  );
}
