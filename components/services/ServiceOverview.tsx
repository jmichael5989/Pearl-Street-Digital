import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Overview section. Editorial register matching the locked
 * homepage / About / Pricing / /services pattern.
 *
 * Replaces the prior pre-pivot two-column layout (bg-white shell,
 * max-w-7xl container, retired text-primary eyebrow, font-bold serif H2,
 * graphite paragraphs in text-gray, plus a right-column grid of
 * rounded-xl border-border bg-white highlight cards with text-2xl
 * font-bold text-primary numerals — the cards-as-metric-container
 * pattern that the brief retired). The highlights data is orphaned by
 * this rebuild; if it needs to surface anywhere on a detail page, the
 * hero metrics array on that page's DarkHero is the single source.
 *
 * Section number 02 in the detail-page rhythm:
 *   01 DarkHero → 02 Overview → 03 Features → 04 Process → 05 FAQ →
 *   06 Related → navy footer.
 */
export default function ServiceOverview({ service }: { service: ServiceData }) {
  const { overview } = service;

  return (
    <section
      aria-labelledby="overview-heading"
      className="bg-light border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              02
            </span>
            &nbsp;/&nbsp; Overview
          </div>
        </header>

        {/* H2 */}
        <h2
          id="overview-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          {overview.heading}
        </h2>

        {/* Body — graphite paragraphs at 65ch measure */}
        <div
          className="mt-8 flex flex-col gap-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "65ch",
          }}
        >
          {overview.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
