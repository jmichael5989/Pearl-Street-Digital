"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.97)] backdrop-blur-[16px] border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
              <span className="font-heading text-lg font-bold text-white leading-none">
                P
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-heading text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                Pearl Street
              </span>
              <span
                className={`font-heading text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-primary"
                }`}
              >
                Digital
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  scrolled
                    ? "text-gray"
                    : "text-[rgba(240,253,250,0.75)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+12105551234"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled
                  ? "text-gray"
                  : "text-[rgba(240,253,250,0.75)]"
              }`}
            >
              <PhoneIcon className="w-4 h-4" />
              (210) 555-1234
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-br from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
            >
              Free Website Audit
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-dark" : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray transition-colors hover:bg-light hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3 border-t border-border mt-4">
            <a
              href="tel:+12105551234"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (210) 555-1234
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 text-center rounded-lg bg-gradient-to-br from-accent to-accent-dark px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)]"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
