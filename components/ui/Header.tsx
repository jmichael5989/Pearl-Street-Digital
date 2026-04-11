"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/#pricing" },
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
      width="52"
      height="52"
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
      width="52"
      height="52"
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
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

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      {/* Persistent top bar — desktop only, hides on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 hidden md:block bg-dark text-center transition-all duration-300 ${
          scrolled || menuOpen ? "h-0 opacity-0 overflow-hidden" : "h-8 opacity-100"
        }`}
      >
        <p className="text-[13px] leading-8 text-[rgba(255,255,255,0.7)] font-medium">
          San Antonio&apos;s Premiere AI-Powered Digital Agency
          <span className="text-[rgba(255,255,255,0.3)] mx-2">|</span>
          No Contracts
        </p>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "top-0" : "md:top-8 top-0"
        } ${
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-[rgba(255,255,255,0.97)] backdrop-blur-[16px] border-b border-border shadow-sm"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-[100px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group" onClick={() => setMenuOpen(false)}>
              <div className="relative h-[88px] w-[88px] overflow-hidden rounded-xl shadow-md shrink-0">
                <Image
                  src="/images/brand/logo-r.jpg"
                  alt="Rank Point Media logo"
                  fill
                  className="object-cover"
                  priority
                  sizes="88px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-heading text-xl font-bold tracking-tight transition-colors duration-300 ${transparent ? "text-white" : "text-dark"}`}
                >
                  Rank Point
                </span>
                <span className="font-heading text-xl font-bold tracking-tight text-primary">
                  Media
                </span>
              </div>
              <span
                className={`hidden lg:block font-body italic text-base leading-snug max-w-[160px] pl-4 border-l transition-colors duration-300 ${transparent ? "text-[rgba(255,255,255,0.85)] border-[rgba(255,255,255,0.2)]" : "text-gray border-border"}`}
              >
                a digital agency
              </span>
            </Link>

            {/* Right side: Phone + CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+12105551234"
                className={`hidden sm:flex items-center gap-2 text-base font-semibold transition-colors duration-300 hover:text-primary ${transparent ? "text-[rgba(255,255,255,0.9)]" : "text-dark"}`}
              >
                <PhoneIcon className="w-5 h-5" />
                (210) 555-1234
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-lg transition-colors ${transparent ? "text-white" : "text-dark"}`}
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
        className={`fixed inset-0 z-40 bg-dark transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-full flex flex-col items-center justify-center px-4">
          <nav className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-primary"
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
              href="tel:+12105551234"
              className="flex items-center gap-2 text-base font-medium text-[rgba(255,255,255,0.7)] hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              (210) 555-1234
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
