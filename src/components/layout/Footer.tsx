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
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a href="https://linkedin.com/in/payalponkshe" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[13px] text-navy hover:opacity-70 transition-opacity flex items-center gap-1.5" aria-label="Payal Ponkshe on LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:payalponkshe@gmail.com" className="font-jakarta text-[13px] text-navy hover:opacity-70 transition-opacity">payalponkshe@gmail.com</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div>
              <p className="label-meta mb-4">Work</p>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/agentic-commerce" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Agentic Commerce</Link></li>
                <li><Link href="/services" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Services</Link></li>
                <li><Link href="/work" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Work</Link></li>
                <li><Link href="/experience" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Experience</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-meta mb-4">Thinking</p>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/insights" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Insights</Link></li>
                <li><Link href="/articles" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Article archive</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-meta mb-4">More</p>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/about" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">About</Link></li>
                <li><Link href="/book" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Discuss a project</Link></li>
                <li><Link href="/give-back" className="font-jakarta text-[14px] text-slate hover:text-navy transition-colors">Give back</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10 pt-6 border-t border-rule gap-3">
          <p className="font-jakarta text-slate text-[12px]">© 2026 Payal Ponkshe. All rights reserved.</p>
          <span className="font-jakarta font-bold text-navy text-[13px] tracking-tight" aria-hidden="true">PP</span>
        </div>
      </div>
    </footer>
  );
}
