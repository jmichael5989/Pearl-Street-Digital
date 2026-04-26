import Link from "next/link";
import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Related section. Numbered editorial TOC mirroring
 * components/services/ServicesShowcase.tsx, with Roman-numeral leaders
 * prefixed by the section index (06.i, 06.ii, ...).
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, centered text-primary eyebrow with font-bold, font-bold
 * serif H2, rounded-2xl + shadow-sm + bg-white + hover:border-primary
 * cards with Lucide ArrowRightIcon — same retired card aesthetic as
 * the old ServiceFeatures and the old ServicesShowcase).
 *
 * Section number 06 in the detail-page rhythm. Warm-white surface to
 * alternate against the parchment FAQ above and the navy footer below.
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

export default function ServiceRelated({
  services,
}: {
  services: ServiceData[];
}) {
  if (services.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
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
              06
            </span>
            &nbsp;/&nbsp; Related
          </div>
        </header>

        {/* H2 */}
        <h2
          id="related-heading"
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
          More of what we do.
        </h2>

        {/* Numbered editorial TOC */}
        <ol
          className="grid grid-cols-1 border-t border-border lg:grid-cols-2 lg:gap-x-12"
          style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
        >
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
                06.{romanNumerals[idx]}
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
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                  aria-label={`Read more about ${service.title}`}
                >
                  Read more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
