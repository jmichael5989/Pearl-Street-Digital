import Link from "next/link";

/**
 * About-page hero. Plain navy slab — no image, no gradients. Tower-
 * of-Americas image was removed 2026-04-26 when the same image moved
 * to the homepage hero as a small editorial inset; About hero now
 * carries the agency-as-fact H1 and quiet-credentials subhead alone
 * against bg-brand-dark.
 *
 * Eyebrow uses the locked numbered editorial pattern — italic-serif
 * "01" in brass-soft + sans uppercase "About" — same shape as the
 * homepage Hero. About-page sections then continue 02–04 (Story,
 * Approach, Team).
 */

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden bg-brand-dark">
      <div className="relative z-[1] mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24 pt-28 pb-12 lg:pt-32 lg:pb-16 w-full">
        <div className="max-w-3xl text-left">
          {/* Editorial eyebrow — italic-serif "01" in brass-soft + sans label */}
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark">
            <span className="font-heading text-base font-normal italic mr-1">
              01
            </span>
            &nbsp;/&nbsp; About
          </div>

          <h1
            className="mt-6 font-heading text-text-on-dark text-balance"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: "1.5rem 0 0 0",
            }}
          >
            Two of us. <em className="font-normal italic">That&rsquo;s the company.</em>
          </h1>

          <p
            className="mt-5 font-body leading-[1.55] text-text-on-dark-muted"
            style={{
              fontSize: "clamp(1.0625rem, 1.4vw, 1.1875rem)",
              maxWidth: "58ch",
            }}
          >
            Jon writes the code. Stacie runs design and marketing. Two
            people, in front of the work &mdash; not behind a layer of
            account managers.
          </p>

          {/* Inline navigation links — brass-soft on dark, hover to warm white */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#approach"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent-dark transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-text-on-dark"
            >
              How we work
              <ArrowDownIcon />
            </a>
            <span className="h-4 w-px bg-text-on-dark-muted/40" aria-hidden="true" />
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent-dark transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-text-on-dark"
            >
              See our work
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
