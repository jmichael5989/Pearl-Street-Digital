"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY >= 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            ? "bg-[rgba(15,23,42,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[rgba(20,184,166,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
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
              className="flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative h-[72px] w-[72px] overflow-hidden rounded-xl shadow-md shrink-0">
                <Image
                  src="/images/brand/logo-r.jpg"
                  alt="Rank Point Media"
                  fill
                  className="object-cover"
                  priority
                  sizes="72px"
                />
              </div>
              <span
                className={`font-display-services font-semibold text-xl transition-colors duration-300 ${
                  scrolled ? "text-white/90" : "text-white"
                }`}
              >
                Rank Point Media
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body-services text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-200 hover:underline hover:underline-offset-4 decoration-brand-teal ${
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
                className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                  scrolled
                    ? "bg-brand-teal text-brand-dark hover:brightness-110 hover:scale-[1.02]"
                    : "border border-white/30 text-white hover:bg-white/10"
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
              className="font-display-services text-3xl md:text-4xl font-semibold text-white transition-colors hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12105551234"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark"
          >
            (210) 555-1234
          </a>
        </div>
      </div>
    </>
  );
}
