"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
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
      width="64"
      height="64"
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
      width="64"
      height="64"
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

export default function LegacyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          transparent
            ? "bg-brand-dark border-b border-transparent"
            : "bg-[rgba(250,250,246,0.95)] backdrop-blur-[16px] border-b border-border shadow-sm"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-[100px] items-center justify-between">
            {/* Wordmark + descriptor slug */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={`font-heading transition-colors duration-300 ${
                  transparent ? "text-text-on-dark" : "text-text"
                }`}
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
                <em
                  className={`font-normal italic transition-colors duration-300 ${
                    transparent ? "text-accent-dark" : "text-accent"
                  }`}
                >
                  Point
                </em>{" "}
                Media
              </Link>

              {/* Brass hairline + stacked descriptor — small-business
                  category slug to the right of the wordmark. Hidden below
                  sm to keep the mobile header uncluttered. */}
              <div
                className="hidden sm:flex items-center gap-3"
                aria-hidden="true"
              >
                <div
                  className={`h-9 w-px transition-colors duration-300 ${
                    transparent ? "bg-accent-dark" : "bg-accent"
                  }`}
                />
                <div
                  className={`font-body flex flex-col uppercase font-semibold transition-colors duration-300 ${
                    transparent ? "text-text-on-dark-muted" : "text-gray"
                  }`}
                  style={{
                    fontSize: "0.5625rem",
                    letterSpacing: "0.18em",
                    lineHeight: 1.25,
                  }}
                >
                  <span>Web</span>
                  <span>Service</span>
                  <span>Agency</span>
                </div>
              </div>
            </div>

            {/* Right side: Phone + CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+12103057372"
                className={`hidden sm:flex items-center gap-2 text-lg font-semibold transition-colors duration-300 ${
                  transparent
                    ? "text-text-on-dark hover:text-accent-dark"
                    : "text-text hover:text-accent"
                }`}
              >
                <PhoneIcon className="w-6 h-6" />
                (210) 305-7372
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  transparent ? "text-text-on-dark" : "text-text"
                }`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        inert={!menuOpen ? true : undefined}
      >
        <div className="h-full flex flex-col items-center justify-center px-4">
          <nav className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-text-on-dark transition-all duration-300 hover:text-accent-dark"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 500ms ease ${i * 60 + 200}ms, transform 500ms ease ${i * 60 + 200}ms, color 300ms ease`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact info at bottom of overlay */}
          <div
            className="mt-12 sm:mt-16 flex flex-col items-center gap-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 500ms ease ${navLinks.length * 60 + 300}ms, transform 500ms ease ${navLinks.length * 60 + 300}ms`,
            }}
          >
            <a
              href="tel:+12103057372"
              className="flex items-center gap-2 text-base font-medium text-[rgba(250,250,246,0.7)] hover:text-accent-dark transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              (210) 305-7372
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
