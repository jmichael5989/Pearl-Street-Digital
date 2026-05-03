"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";

/**
 * Homepage hero. Two-column editorial composition per the option-b.html
 * mock locked at .impeccable.md Resolved Decisions §4 (palette pivot).
 *
 * MOTION PREVIEW (2026-05-03 — owner evaluation pass): four candidate
 * motion treatments are layered on the previously-static composition so
 * the owner can pick which to keep. All motions are GPU-only (transform
 * / opacity), gated on prefers-reduced-motion: no-preference, and run
 * once on mount except Ken Burns which alternates indefinitely.
 *   - Ken Burns: Tower decorative photo scales 1 → 1.008 over 22s,
 *     ease-in-out, alternate. ~0.4% peak — barely perceptible "the page
 *     is breathing" register.
 *   - Eyebrow rule: a 56px brass hairline draws in beneath the "01 /
 *     Rank Point Media" eyebrow on mount, scaleX(0) → scaleX(1).
 *   - Type-in headline: each word fades + rises in sequence, 60ms
 *     stagger, 320ms per word — finishes well under the 800ms ceiling.
 *   - Soft parallax: Tower wrapper translates at 0.08 × scrollY. Wrapper
 *     extends ±64px past the section so translation never exposes an
 *     edge. requestAnimationFrame'd, passive scroll listener.
 *
 * Headline: "Websites that Rank" (set 2026-05-03, owner pick). Overrides
 * the locked tagline ("Higher rankings. More customers.") in CLAUDE.md;
 * the brand identity Tagline line in CLAUDE.md still reads the old
 * value and may need owner review for consistency.
 *
 * Word spacing: each word lives in its own inline-block span so the
 * type-in stagger can target words individually. Spaces between words
 * are rendered as literal text-node spaces *between* the spans, not
 * trailing whitespace *inside* them — CSS collapses internal trailing
 * whitespace on inline-block boxes, which would glue words together.
 */

const HEADLINE_WORDS = ["Websites", "that", "Rank"];
const WORD_STAGGER_MS = 60;

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = parallaxRef.current;
    if (!el) return;

    let raf: number | null = null;
    const update = () => {
      raf = null;
      const y = window.scrollY * 0.08;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-label="Introducing Rank Point Media"
      className="relative overflow-hidden bg-light"
      style={{
        paddingTop: "clamp(80px, 14vh, 160px)",
        paddingBottom: "clamp(48px, 8vh, 96px)",
      }}
    >
      <style>{`
        @keyframes hero-ken-burns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.008); }
        }
        @keyframes hero-word-rise {
          0%   { opacity: 0; transform: translateY(0.35em); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-rule-draw {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .hero-ken-burns {
          animation: hero-ken-burns 22s ease-in-out infinite alternate;
          transform-origin: center center;
          will-change: transform;
        }
        .hero-word {
          display: inline-block;
          opacity: 0;
          will-change: opacity, transform;
          animation: hero-word-rise 0.32s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }
        .hero-rule {
          display: block;
          width: 56px;
          height: 1px;
          background: var(--color-accent);
          transform: scaleX(0);
          transform-origin: left center;
          animation: hero-rule-draw 0.6s 0.18s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }
        .hero-parallax {
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ken-burns,
          .hero-word,
          .hero-rule,
          .hero-parallax {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* Decorative editorial photo — fills the empty left viewport margin
          on wide screens with a small portrait of the Tower of the Americas.
          Wrapper extends ±64px past the section (top/bottom) so the parallax
          translation never exposes a hard edge. The Ken Burns scale lives on
          the Image; the parallax translate lives on this wrapper, so the two
          transforms don't fight over the same property. Hidden below lg. */}
      <div
        ref={parallaxRef}
        aria-hidden="true"
        className="hero-parallax pointer-events-none absolute -top-16 -bottom-16 left-0 hidden lg:block select-none overflow-hidden"
        style={{
          width: "max(220px, calc((100vw - 82rem) / 2 + 12rem))",
          maxWidth: "30vw",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero/Tower.WEBP"
            alt=""
            fill
            priority
            quality={75}
            sizes="30vw"
            className="hero-ken-burns object-cover"
            style={{ objectPosition: "center top" }}
          />
          {/* Right-edge gradient — fades the image into the warm-white
              section. Stronger fade: covers half the image width with
              earlier opacity ramp so the right side dissolves into the
              section rather than reading as a hard rectangle. */}
          <div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{
              background:
                "linear-gradient(to right, rgba(250,250,246,0) 0%, rgba(250,250,246,0.6) 35%, rgba(250,250,246,0.95) 75%, rgba(250,250,246,1) 100%)",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow — italic-serif "01" in brass + sans label, with an
            animated brass rule that draws in beneath. */}
        <header className="mb-12 lg:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              01
            </span>
            &nbsp;/&nbsp; Rank Point Media
          </div>
          <span className="hero-rule mt-3" aria-hidden="true" />
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start lg:gap-16">
          {/* Left column — H1 + sub + CTA row */}
          <div className="flex flex-col gap-8">
            <h1
              className="font-heading text-text text-balance"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <Fragment key={`${word}-${i}`}>
                  {i > 0 && " "}
                  <span
                    className="hero-word"
                    style={{ animationDelay: `${i * WORD_STAGGER_MS}ms` }}
                  >
                    {word}
                  </span>
                </Fragment>
              ))}
            </h1>

            <p
              className="font-body max-w-[42ch]"
              style={{
                fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)",
                lineHeight: 1.5,
                color: "var(--color-brand-text)",
                margin: 0,
              }}
            >
              Websites, SEO, and Google Ads for San Antonio small businesses.
              Two people in front of the work &mdash; not behind a layer of
              account managers.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#talk-to-us"
                className="font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
              >
                Book a consultation
              </Link>
              <Link
                href="/about"
                className="font-body inline-flex items-center gap-2.5 border border-text bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-text hover:text-light"
              >
                See how we work
              </Link>
            </div>
          </div>

          {/* Right column — pull-quote aside */}
          <aside className="flex flex-col gap-4 lg:border-l lg:border-border lg:pl-8 xl:pl-12">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              A note
            </div>
            <blockquote
              className="font-heading text-text italic"
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)",
                lineHeight: 1.4,
                fontWeight: 400,
                margin: 0,
              }}
            >
              &ldquo;You hire us, you get us &mdash; not a team behind a team.
              When the site launches, you talk to the person who built it.
              Once you&rsquo;re a client, you have a direct line to both of
              us.&rdquo;
            </blockquote>
            <cite
              className="font-body text-sm not-italic text-gray"
              style={{
                paddingTop: "14px",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              Jon &middot; Rank Point Media
            </cite>
          </aside>
        </div>
      </div>
    </section>
  );
}
