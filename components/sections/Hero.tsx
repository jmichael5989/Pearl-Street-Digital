import Link from "next/link";

/**
 * Homepage hero. Two-column editorial composition per the option-b.html
 * mock locked at .impeccable.md Resolved Decisions §4 (palette pivot).
 *
 * Composition:
 *   - Warm-white section background. The prior dark-navy hero (commit
 *     c69a11d) is superseded by the mock's lighter editorial register —
 *     dark sections on the homepage are now the footer only. .impeccable.md
 *     Theme direction said "dark sections are used sparingly... for the
 *     hero and CTA banner or footer"; the mock relegates dark to the
 *     footer alone, which the owner picked.
 *   - Numbered eyebrow with italic-serif section number ("01") in brass +
 *     sans uppercase letter-spaced label, matching the option-b mock.
 *   - Two columns on desktop (1.2fr text / 0.8fr aside), stacks on mobile.
 *   - H1 is the locked brand tagline ("Higher rankings. More customers.")
 *     so a cold visitor reads the category and value within one second.
 *     The "Nobody is ever 'looped in.'" positioning-spine line, previously
 *     the H1, is preserved verbatim in the aside as the lead sentence of
 *     the pull-quote — owner override of the prior .impeccable.md call to
 *     keep that line in the H1 slot, taken 2026-04-25 after a homepage
 *     review where the editorial H1 read as too cryptic for a service
 *     business that needs to introduce itself in one screen.
 *   - Subline names the disciplines (websites, SEO, Google Ads) plus the
 *     positioning beat ("in front of the work") so the H1's commercial
 *     promise lands with concrete services rather than abstract claims.
 *   - Two CTAs: primary is solid navy with hard-edged 1px border (per
 *     CLAUDE.md Colors §4 button spec); anchors to the Cal.com Consultation
 *     embed below. Secondary is transparent + navy border + navy text;
 *     inverts on hover.
 *
 * Photography: the photo placeholder from the prior Hero is intentionally
 * removed — the pull-quote aside delivers comparable trust signal without
 * a placeholder feeling unfinished. Real photography of Jon, Stacie, and
 * George remains a Pre-Launch Checklist item; when those photos exist
 * they can be added back as a dedicated section below the hero or composed
 * into the aside slot.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introducing Rank Point Media"
      className="bg-light"
      style={{
        paddingTop: "clamp(80px, 14vh, 160px)",
        paddingBottom: "clamp(48px, 8vh, 96px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow — italic-serif "01" in brass + sans label */}
        <header className="mb-12 lg:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              01
            </span>
            &nbsp;/&nbsp; Rank Point Media
          </div>
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
              Higher rankings.{" "}
              <em className="font-normal italic">More customers.</em>
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
              &ldquo;Nobody is ever &lsquo;looped in.&rsquo; When the site
              launches, you talk to the person who wrote the CSS. When a
              campaign misfires, you talk to the person who set it up.&rdquo;
            </blockquote>
            <cite
              className="font-body text-sm not-italic text-gray"
              style={{
                paddingTop: "14px",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              Jon Michael &middot; Rank Point Media
            </cite>
          </aside>
        </div>
      </div>
    </section>
  );
}
