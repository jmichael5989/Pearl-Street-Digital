import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies-data";

/**
 * Case studies index TOC. Numbered editorial pattern mirroring
 * ServicesShowcase, replacing the prior "Featured + Grid"
 * composition (FeaturedCaseStudy.tsx and CaseStudyGrid.tsx +
 * CaseStudyCard.tsx — all three retired in this commit).
 *
 * The prior layout promoted one study to a giant rounded-3xl
 * shadow-xl card and gridded the rest. With one case study currently
 * in lib/case-studies-data.ts, the grid section never rendered, so
 * the index was DarkHero + one giant card and stopped — gap-then-
 * footer felt jarring. The TOC pattern reads as complete with one
 * entry or twelve.
 *
 * Reference: .impeccable.md Reference 1 — "structural motif we reuse
 * across the services index, the process page, case studies, and the
 * journal index."
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

export default function CaseStudiesTOC({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  if (caseStudies.length === 0) return null;

  return (
    <section
      aria-labelledby="case-studies-toc-heading"
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
            &nbsp;/&nbsp; Case studies
          </div>
        </header>

        {/* H2 */}
        <h2
          id="case-studies-toc-heading"
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
          Real work for real San Antonio businesses.
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
          Each entry is a single project &mdash; the problem the owner
          brought us, what we built, and what shipped.
        </p>

        {/* Numbered editorial TOC */}
        <ol className="grid grid-cols-1 border-t border-border lg:grid-cols-2 lg:gap-x-12">
          {caseStudies.map((cs, idx) => (
            <li
              key={cs.slug}
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
                02.{romanNumerals[idx]}
              </span>
              <div>
                {/* Thumbnail — visual anchor at top of the right column.
                    Clickable; routes to the same detail page as the
                    "Read the case study" link below. Aspect ratio matches
                    the source screenshot crops (~2:1). */}
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block mb-5"
                  aria-label={`Read the ${cs.client} case study`}
                  tabIndex={-1}
                >
                  <div className="relative aspect-[2/1] overflow-hidden border border-border bg-light-surface">
                    <Image
                      src={cs.thumbnailUrl}
                      alt={cs.thumbnailAlt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-[var(--motion-duration-medium)] ease-[var(--motion-ease-out)] group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                {/* Client + industry tagline */}
                <p
                  className="font-body text-xs font-semibold uppercase"
                  style={{
                    letterSpacing: "0.12em",
                    color: "var(--color-gray)",
                  }}
                >
                  {cs.industry} &middot; {cs.client}
                </p>

                {/* Outcome headline as h3 */}
                <h3
                  className="mt-2 font-heading text-text text-balance"
                  style={{
                    fontSize: "1.375rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {cs.outcomeHeadline}
                </h3>

                {/* Summary */}
                <p
                  className="mt-2 font-body"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.58,
                    color: "var(--color-brand-text)",
                    maxWidth: "58ch",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {cs.summary}
                </p>

                {/* Services + Read more */}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span
                    className="font-body text-xs italic"
                    style={{ color: "var(--color-gray)" }}
                  >
                    {cs.services.join(", ")}
                  </span>
                  <span
                    className="hidden h-3 w-px bg-border sm:inline-block"
                    aria-hidden="true"
                  />
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                    aria-label={`Read the ${cs.client} case study`}
                  >
                    Read the case study
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
