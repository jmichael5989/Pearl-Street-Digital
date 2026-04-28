"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Link data ─────────────────────────────────────────── */
const serviceLinks = [
  { label: "Web Design", href: "/services/website-design" },
  { label: "SEO", href: "/services/local-seo" },
  { label: "Google Ads (PPC)", href: "/services/ppc-google-ads" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "AI Search Optimization", href: "/services/ai-search-optimization" },
  { label: "Brand Management", href: "/services/reputation-management" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ── SVG Social Icons ──────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Kept available for re-enabling once Facebook + Instagram accounts exist —
// the social link block in the footer references neither at the moment.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ── Accordion for mobile ──────────────────────────────── */
function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 lg:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 lg:hidden"
        aria-expanded={open}
      >
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white">
          {title}
        </h3>
        <ChevronDownIcon
          className={`text-text-on-dark-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {/* Desktop: always visible heading */}
      <h3 className="hidden lg:block font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
        {title}
      </h3>
      {/* Content: collapsible on mobile, always open on desktop */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 lg:pb-0 ${
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Pre-Footer CTA Bar ────────────────────────────────── */
/* Editorial outro band shown on inner pages only (homepage hides it
 * via Footer's hidePreFooterCTA prop, since the Consultation section
 * is the actual booking artifact). Parchment surface for a clean
 * handoff into the navy footer below. Two-column at lg: editorial
 * pitch on the left, brass-arrow CTA + phone on the right. The CTA
 * anchors back to the homepage's #talk-to-us Cal.com widget. */
function PreFooterCTA() {
  return (
    <section
      aria-label="Talk to us"
      className="bg-light border-t border-border"
    >
      <div
        className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24"
        style={{ paddingBlock: "clamp(56px, 9vh, 112px)" }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-end lg:gap-16">
          {/* Left: editorial pitch */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Talk to us
            </div>
            <h2
              className="font-heading text-text text-balance"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                maxWidth: "20ch",
                margin: "1.25rem 0 0 0",
              }}
            >
              When you&rsquo;re ready, we&rsquo;re here.
            </h2>
            <p
              className="mt-5 font-body"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-brand-text)",
                maxWidth: "52ch",
              }}
            >
              An hour with Jon. No slides, no script &mdash; just the
              conversation. Pick any open time on the homepage calendar.
            </p>
          </div>

          {/* Right: actions */}
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/#talk-to-us"
              className="inline-flex items-center gap-2 text-base font-semibold text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
            >
              Book an hour
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <a
              href="tel:+12103057372"
              className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              <PhoneIcon />
              (210) 305-7372
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main Footer ───────────────────────────────────────── */
export default function Footer({ hidePreFooterCTA = false }: { hidePreFooterCTA?: boolean } = {}) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {!hidePreFooterCTA && <PreFooterCTA />}
      <footer className="bg-dark text-text-on-dark-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-16">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-10 mb-10">
            {/* Column 1 — Brand */}
            <div className="pb-6 lg:pb-0">
              <Link
                href="/"
                className="font-heading text-text-on-dark mb-4 inline-block"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  letterSpacing: "-0.005em",
                  lineHeight: 1,
                }}
                aria-label="Rank Point Media — home"
              >
                Rank{" "}
                <em className="font-normal italic text-accent-dark">Point</em>{" "}
                Media
              </Link>
              <p className="text-sm leading-relaxed max-w-[280px]">
                Custom-coded websites and digital marketing for San Antonio small businesses.
              </p>
              {/* Social Icons — LinkedIn / Facebook / Instagram hidden
                  until those accounts are live. LinkedInIcon /
                  FacebookIcon / InstagramIcon components below remain
                  defined so they're trivial to re-enable: restore the
                  wrapper <div> and an <a> block per platform. */}
            </div>

            {/* Column 2 — Services (accordion on mobile) */}
            <FooterAccordion title="Services">
              <ul className="space-y-0">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            {/* Column 3 — Company (accordion on mobile) */}
            <FooterAccordion title="Company">
              <ul className="space-y-0">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            {/* Column 4 — Contact Info (always visible) */}
            <div className="pt-4 lg:pt-0">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
                Contact
              </h3>
              <address className="not-italic space-y-3 text-sm">
                <p className="font-medium text-white">Rank Point Media</p>
                <p>San Antonio, TX</p>
                <p>
                  <a
                    href="tel:+12103057372"
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    (210) 305-7372
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@rankpointmedia.com"
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    info@rankpointmedia.com
                  </a>
                </p>
                <p className="text-xs text-text-on-dark-muted">
                  Mon-Fri 9am-5pm CST
                </p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-xs">
              <span className="uppercase tracking-[0.18em] text-[rgba(250,250,246,0.5)]">
                Design by:
              </span>
              <span
                className="uppercase tracking-[0.18em] font-semibold"
                style={{ color: "#B78F3E" }}
              >
                Rank Point Media
              </span>
            </div>

            <p className="mt-4 text-xs text-text-on-dark-muted">
              {currentYear} Rank Point Media. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs text-text-on-dark-muted">
              <Link
                href="/privacy"
                className="py-2 transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="/terms"
                className="py-2 transition-colors duration-300 hover:text-primary"
              >
                Terms of Service
              </Link>
              <span>|</span>
              <Link
                href="/sitemap.xml"
                className="py-2 transition-colors duration-300 hover:text-primary"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
