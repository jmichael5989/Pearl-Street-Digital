"use client";

/**
 * VoxelHeader — the homepage header for the three-color redesign.
 *
 * A hamburger-only header (no inline nav) that opens a full-screen black
 * Fraunces menu, reimplemented from the mock's `.menu` / `.hamburger` with
 * React state. Escape closes it and body scroll is locked while open.
 *
 * The bar sits fixed over a full-viewport hero that scrolls into a white body,
 * so the hamburger switches from warm-grey (over the dark hero) to black (over
 * the white body) past the fold — the same adaptive idea as GlassHeader.
 */

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const PHONE_DISPLAY = "(210) 305-7372";
const PHONE_HREF = "tel:+12103057372";

export default function VoxelHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const barColor = scrolled ? "bg-black" : "bg-[#cfcabf]";

  return (
    <>
      {/* Hamburger — fixed top-right, hidden while the menu is open.
          opacity/pointer-events are set inline: Tailwind v4 is not emitting the
          bare opacity-0/opacity-100 utilities in this project, so the toggle
          would otherwise have no backing CSS. */}
      <div
        className="fixed right-[clamp(22px,5vw,90px)] top-5 z-[60] transition-opacity duration-200"
        style={{
          opacity: open ? 0 : 1,
          pointerEvents: open ? "none" : "auto",
        }}
      >
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="group flex h-[26px] w-[34px] flex-col justify-center gap-[6px] p-0"
        >
          <span className={`block h-[1.5px] w-full transition-colors ${barColor} group-hover:bg-white`} />
          <span className={`block h-[1.5px] w-full transition-colors ${barColor} group-hover:bg-white`} />
          <span className={`block h-[1.5px] w-full transition-colors ${barColor} group-hover:bg-white`} />
        </button>
      </div>

      {/* Full-screen menu */}
      <nav
        aria-label="Main menu"
        aria-hidden={!open}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[clamp(4px,1.1vh,14px)] bg-[#0A0A0A] transition-[opacity,visibility] duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-[clamp(20px,5vw,90px)] top-5 h-[42px] w-[42px] text-[34px] leading-none text-[#EDE7DC] transition-colors hover:text-[#9C9C9C]"
        >
          &times;
        </button>

        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--ff-fraunces)] text-[clamp(28px,6.2vw,54px)] font-medium uppercase leading-[1.22] tracking-[0.015em] text-[#EDE7DC] transition-colors hover:text-[#9C9C9C]"
          >
            {item.label}
          </Link>
        ))}

        <a
          href={PHONE_HREF}
          className="mt-[clamp(22px,4.5vh,46px)] inline-flex items-center gap-[9px] font-[family-name:var(--ff-jetbrains)] text-sm tracking-[0.07em] text-[#9a958c] transition-colors hover:text-[#EDE7DC]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {PHONE_DISPLAY}
        </a>
      </nav>
    </>
  );
}
