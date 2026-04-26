"use client";

import Link from "next/link";

/**
 * Mobile-only sticky CTA bar at the bottom of every page. Two
 * affordances side by side: phone (call now) and book (Cal.com).
 *
 * Tokens migrated from the pre-pivot vocabulary (bg-white shell,
 * bg-dark/bg-primary fills, text-white labels, "Free Audit" copy
 * which violated .impeccable.md anti-reference 1) to the locked
 * editorial register: warm-white shell with edge hairline,
 * navy-fill phone button, brass-fill book button, plainspoken
 * labels routing to the homepage Cal.com widget.
 */

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-14 items-stretch border-t border-border bg-light md:hidden">
      <a
        href="tel:+12103057372"
        className="flex flex-1 items-center justify-center gap-2 bg-text text-sm font-medium text-light transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark"
      >
        <PhoneIcon />
        Call now
      </a>
      <Link
        href="/#talk-to-us"
        className="flex flex-1 items-center justify-center gap-2 bg-accent text-sm font-medium text-light transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-accent-dark"
      >
        Book thirty minutes
      </Link>
    </div>
  );
}
