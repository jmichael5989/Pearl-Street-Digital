import Link from "next/link";
import { services } from "@/lib/services-data";

/**
 * Services index TOC. Same numbered editorial pattern as the homepage
 * ServicesSection, with richer per-row content (title + tagline +
 * "Plans from $99/mo" pricing pointer + "Read more" link to the
 * service detail page).
 *
 * Replaces the prior tab/panel widget (ServicesShowcase had a flip-card-
 * adjacent two-column composition with rounded-2xl bg-primary panels,
 * Lucide icons stacked above headings, hover/focus/pointer-enter all
 * triggering panel changes — the exact "feature grid with icons"
 * pattern .impeccable.md Reference 1 explicitly forbids: "the services
 * page is a numbered editorial TOC, not a feature grid with icons.
 * Lucide icons remain permitted for inline UI affordances but are
 * forbidden above headings.").
 *
 * Source of truth for service entries is lib/services-data.ts (slug,
 * title, tagline). The prior component had its own hard-coded services
 * array with per-service "starting at" prices ($99–$2,000) that did
 * not reconcile with the locked /pricing tiers ($99/$149/$249 monthly
 * bundles); those are dropped here in favor of a single global "Plans
 * from $99/mo" reference per row that points at the published
 * pricing — no invented per-service numbers.
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
];

export default function ServicesShowcase() {
  return (
    <section
      id="services-toc"
      aria-labelledby="services-toc-heading"
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
            &nbsp;/&nbsp; Services
          </div>
        </header>

        {/* H2 */}
        <h2
          id="services-toc-heading"
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
          Everything we do.
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
          {services.length} services for small San Antonio businesses. All
          plans include the website build and hosting; ongoing services
          scale with scope. See{" "}
          <Link
            href="/pricing"
            className="font-medium text-accent underline underline-offset-4 hover:text-text"
          >
            pricing
          </Link>{" "}
          for the full breakdown.
        </p>

        {/* Numbered editorial TOC — 2-col at lg, hairline rules between rows */}
        <ol className="grid grid-cols-1 border-t border-border lg:grid-cols-2 lg:gap-x-12">
          {services.map((service, idx) => (
            <li
              key={service.slug}
              className="grid grid-cols-1 gap-y-3 border-b border-border py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-x-6 lg:py-9"
            >
              <span
                className="font-heading italic text-accent"
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  paddingTop: "0.35rem",
                }}
              >
                03.{romanNumerals[idx]}
              </span>
              <div>
                <h3
                  className="font-heading text-text"
                  style={{
                    fontSize: "1.375rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-2 font-body"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.58,
                    color: "var(--color-brand-text)",
                    maxWidth: "52ch",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {service.tagline}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span
                    className="font-body text-xs font-semibold uppercase"
                    style={{
                      letterSpacing: "0.12em",
                      color: "var(--color-gray)",
                    }}
                  >
                    Plans from $99/mo
                  </span>
                  <span
                    className="hidden h-3 w-px bg-border sm:inline-block"
                    aria-hidden="true"
                  />
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                    aria-label={`Read more about ${service.title}`}
                  >
                    Read more
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
