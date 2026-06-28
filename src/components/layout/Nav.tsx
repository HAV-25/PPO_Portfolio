"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/work", label: "Building" },
  { href: "/experience", label: "Experience" },
  { href: "/expertise", label: "Expertise" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_1px_0_rgba(36,53,110,0.1)]"
            : "border-b border-rule"
        }`}
        style={{
          background: "rgba(251,250,247,0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="content-width">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Payal Ponkshe — Home"
            >
              <span
                className="w-9 h-9 rounded-[10px] bg-navy flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="font-jakarta font-bold text-cream text-sm leading-none tracking-tight">
                  PP
                </span>
              </span>
              <span className="font-jakarta font-bold text-navy text-[15px] hidden sm:block group-hover:opacity-80 transition-opacity">
                Payal Ponkshe
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`font-jakarta font-medium text-[14px] transition-colors duration-150 relative ${
                        active
                          ? "text-navy after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#4F7C72] after:rounded-none"
                          : "text-slate hover:text-navy"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-navy text-cream font-jakarta font-semibold text-[14px] px-5 py-2.5 rounded-btn transition-colors duration-150 hover:bg-[#2d4080]"
              >
                Connect <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-navy transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-16 md:hidden" style={{ background: "rgba(251,250,247,0.96)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}>
          <div className="content-width py-10 flex flex-col h-full">
            <ul className="flex flex-col gap-1 flex-1" role="list">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block font-jakarta font-bold text-[28px] py-3 border-b border-rule transition-colors ${
                        active ? "text-navy" : "text-slate hover:text-navy"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="pb-8">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-navy text-cream font-jakarta font-medium text-[15px] px-6 py-3"
              >
                Connect <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
