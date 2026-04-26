import Link from "next/link";
import type { IndustryData } from "@/lib/industries-data";

/**
 * Industry detail page Solutions section. Numbered editorial card
 * grid mirroring components/services/ServiceFeatures.tsx and
 * components/services/ServiceRelated.tsx (per-card outbound link
 * pattern), with Roman-numeral leaders prefixed by section index 03.
 *
 * Replaces the prior pre-pivot section (bg-dark island disrupting
 * the page's surface alternation, retired text-primary eyebrow with
 * font-bold, font-bold serif H2, rounded-2xl + shadow-sm cards with
 * hover:border-primary, "Learn more" link in retired text-primary).
 *
 * Surface: warm-white to alternate against the parchment
 * IndustryPainPoints above and the parchment IndustryFAQ below.
 */

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustrySolutions({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section
      aria-labelledby="industry-solutions-heading"
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
              03
            </span>
            &nbsp;/&nbsp; How we help
          </div>
        </header>

        {/* H2 */}
        <h2
          id="industry-solutions-heading"
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
          What we build for {industry.title}.
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
          {industry.solutions.length} services tailored to how{" "}
          {industry.title.toLowerCase()} actually find and win customers.
          Each links to the full service page.
        </p>

        {/* Numbered editorial card grid with per-card outbound links */}
        <div className="grid gap-6 sm:grid-cols-2">
          {industry.solutions.map((solution, idx) => (
            <article
              key={solution.title}
              className="flex flex-col gap-3.5 border border-border bg-light-surface p-8 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
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
                {solution.title}
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
                {solution.description}
              </p>
              <Link
                href={`/services/${solution.serviceSlug}`}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                aria-label={`Read more about ${solution.title}`}
              >
                Read more
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
