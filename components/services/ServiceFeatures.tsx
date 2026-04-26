import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Features section. Numbered editorial card grid matching
 * the locked homepage WhyUs pattern, with Roman-numeral leaders prefixed
 * by the section index (03.i, 03.ii, ...).
 *
 * Replaces the prior pre-pivot section (bg-dark island disrupting the
 * page's surface alternation, centered text-primary eyebrow with
 * font-bold, font-bold serif H2, rounded-2xl + shadow-sm + bg-white +
 * hover:border-primary cards, and a CheckCircleIcon stacked above each
 * feature heading — the exact "feature grid with icons" pattern
 * .impeccable.md Reference 1 forbids: "Lucide-style SVG icons remain
 * permitted for inline UI affordances but are forbidden above
 * headings.").
 *
 * Section number 03 in the detail-page rhythm. Surface is parchment to
 * alternate against the warm-white Overview above and the warm-white
 * Process below.
 */

const romanNumerals = [
  "i",
  "ii",
  "iii",
  "iv",
  "v",
  "vi",
  "vii",
  "viii",
  "ix",
  "x",
  "xi",
  "xii",
];

export default function ServiceFeatures({ service }: { service: ServiceData }) {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-light-surface border-t border-border"
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
              03
            </span>
            &nbsp;/&nbsp; What&rsquo;s included
          </div>
        </header>

        {/* H2 */}
        <h2
          id="features-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "28ch",
            margin: 0,
          }}
        >
          Everything you get with {service.title}.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          {service.features.length} concrete deliverables. Every plan
          includes all of them &mdash; no upsells, no premium tiers
          unlocked behind paywalls.
        </p>

        {/* Numbered editorial card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, idx) => (
            <article
              key={feature.title}
              className="flex flex-col gap-3.5 border border-border bg-light p-8 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
            >
              <div
                className="font-heading italic text-accent"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  paddingBottom: "14px",
                  marginBottom: "8px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                03.{romanNumerals[idx]}
              </div>
              <h3
                className="font-heading text-text"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.58,
                  color: "var(--color-brand-text)",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
