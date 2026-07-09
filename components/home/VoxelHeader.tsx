"use client";

/**
 * VoxelHeader — the three-color redesign header. Two variants share one
 * full-screen Fraunces menu:
 *
 *  - variant="hero" (homepage): a floating hamburger over the full-viewport
 *    voxel hero. Bars switch from warm-grey (over the dark hero) to black
 *    (over the white body) past the fold.
 *  - variant="bar" (inner three-color pages, e.g. /about): a sticky white bar
 *    with the "Rank Point Media" wordmark on the left and a black hamburger on
 *    the right — the right treatment for light content pages.
 *
 * Escape closes the menu; body scroll is locked while it's open. Menu items are
 * next/link, so the site's page transitions still play on navigation.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const SWASH_OFF = { fontFeatureSettings: '"liga" 0, "calt" 0, "dlig" 0, "clig" 0' };

export default function VoxelHeader({
  variant = "hero",
}: {
  variant?: "hero" | "bar";
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the committed route changes. The transition engine
  // intercepts the menu-item click in the capture phase and calls
  // stopImmediatePropagation, so the item's own onClick never fires — this
  // route-change effect is what actually dismisses the menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (variant !== "hero") return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const heroBar = scrolled ? "bg-black" : "bg-[#cfcabf]";

  return (
    <>
      {variant === "hero" ? (
        /* Floating hamburger — fixed top-right, hidden while the menu is open.
           opacity/pointer-events are set inline: Tailwind v4 is not emitting the
           bare opacity utilities in this project, so the toggle would otherwise
           have no backing CSS. */
        <div
          className="fixed right-[clamp(22px,5vw,90px)] top-5 z-[60] transition-opacity duration-200"
          style={{ opacity: open ? 0 : 1, pointerEvents: open ? "none" : "auto" }}
        >
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="group flex h-12 w-12 flex-col justify-center gap-[9px] p-0"
          >
            <span className={`block h-[2px] w-full transition-colors ${heroBar} group-hover:bg-white`} />
            <span className={`block h-[2px] w-full transition-colors ${heroBar} group-hover:bg-white`} />
            <span className={`block h-[2px] w-full transition-colors ${heroBar} group-hover:bg-white`} />
          </button>
        </div>
      ) : (
        /* Sticky white bar for inner light pages. */
        <header className="sticky top-0 z-[60] border-b border-[#9C9C9C] bg-[rgba(255,255,255,0.93)] backdrop-blur-[8px]">
          {/* Full-width gutter matching the homepage hamburger's
              right-[clamp(22px,5vw,90px)] inset, so the hamburger lands in the
              same spot on both pages (not pulled in to a 1320px container). */}
          <div className="flex h-[74px] items-center justify-between px-[clamp(22px,5vw,90px)]">
            <Link
              href="/"
              className="font-[family-name:var(--ff-fraunces)] text-[21px] font-semibold tracking-[-0.01em] text-black"
              style={SWASH_OFF}
            >
              Rank <span className="text-[#9c9c9c]">Point</span> Media
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="group -mr-2 flex h-11 w-11 flex-col items-end justify-center gap-[6px] p-0"
            >
              <span className="block h-[1.5px] w-[34px] bg-black transition-colors group-hover:bg-[#9C9C9C]" />
              <span className="block h-[1.5px] w-[34px] bg-black transition-colors group-hover:bg-[#9C9C9C]" />
              <span className="block h-[1.5px] w-[34px] bg-black transition-colors group-hover:bg-[#9C9C9C]" />
            </button>
          </div>
        </header>
      )}

      {/* Full-screen menu (shared by both variants) */}
      <nav
        aria-label="Main menu"
        aria-hidden={!open}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[clamp(4px,1.1vh,14px)] bg-[#0A0A0A] transition-[opacity,visibility] duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden", overscrollBehavior: "none" }}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-[clamp(20px,5vw,80px)] top-6 flex h-[64px] w-[64px] items-center justify-center text-[#EDE7DC] transition-colors hover:text-[#9C9C9C]"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 5 19 19M19 5 5 19" />
          </svg>
        </button>

        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--ff-fraunces)] text-[clamp(28px,6.2vw,54px)] font-medium uppercase leading-[1.22] tracking-[0.015em] text-[#EDE7DC] transition-colors hover:text-[#9C9C9C]"
            style={SWASH_OFF}
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
