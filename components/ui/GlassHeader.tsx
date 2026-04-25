"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function GlassHeader({
  forceScrolled = false,
}: {
  forceScrolled?: boolean;
}) {
  const [scrolledState, setScrolledState] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = forceScrolled || scrolledState;

  useEffect(() => {
    if (forceScrolled) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolledState(window.scrollY >= 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-[rgba(20,33,61,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[rgba(183,143,62,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-[100px] items-center justify-between">
            <Link
              href="/"
              className="font-heading text-text-on-dark"
              style={{
                fontSize: "1.125rem",
                fontWeight: 400,
                letterSpacing: "-0.005em",
                lineHeight: 1,
              }}
              onClick={() => setMenuOpen(false)}
              aria-label="Rank Point Media — home"
            >
              Rank{" "}
              <em className="font-normal italic text-accent-dark">Point</em>{" "}
              Media
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-200 hover:underline hover:underline-offset-4 decoration-accent-dark ${
                    scrolled ? "text-white/90" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+12105551234"
                className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium tracking-[0.01em] transition-[background-color,border-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] ${
                  scrolled
                    ? "border border-light bg-light text-text hover:bg-accent hover:border-accent hover:text-light"
                    : "border border-[#FAFAF6]/30 text-text-on-dark hover:bg-[#FAFAF6]/10"
                }`}
              >
                (210) 555-1234
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden rounded-lg p-2 text-white"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-start justify-end p-4">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-white"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="flex h-[calc(100%-64px)] flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl md:text-4xl font-semibold text-white transition-colors hover:text-accent-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12105551234"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-accent-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark"
          >
            (210) 555-1234
          </a>
        </div>
      </div>
    </>
  );
}
