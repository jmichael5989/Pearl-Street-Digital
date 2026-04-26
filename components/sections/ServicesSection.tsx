import Link from "next/link";

/**
 * Homepage Services section. Numbered editorial TOC per .impeccable.md
 * Reference 1 ("the services page is a numbered editorial TOC, not a
 * feature grid with icons"). Mirrors the spacing pattern locked in WhyUs.
 *
 * Replaces the prior flip-card photo-tile grid (8 aspect-square cards
 * with rotateY hover, gradient-darkened photos, white-on-image titles,
 * centered "What We Do" eyebrow, centered bold H2). That treatment was
 * the page's only template-feeling block — the layout audit at
 * 2026-04-25 flagged it on six counts: missing numbered eyebrow (the
 * gap that produced 01 → 02 → 03 → ??? → 05 in the section motif),
 * centered bold-sans H2 against the locked left-aligned weight-400
 * pattern, container width drift (max-w-[1360px] vs the rest of the
 * page's max-w-[82rem]), template-family flip-card aesthetic, retired
 * tokens (bg-white, bg-primary, bg-dark, text-primary), and stock-y
 * photographic tile treatment.
 *
 * Composition now:
 *   - Parchment surface (alternates against WhyUs's warm-white above
 *     and CustomDevelopmentCallout's warm-white below).
 *   - Edge hairline at the top to mark the section transition.
 *   - Numbered eyebrow "04 / Services" — italic-serif numeral in brass.
 *   - Serif H2 in navy weight 400, left-aligned, max-width 24ch.
 *   - Graphite lede max-width 58ch.
 *   - <ol> of eight services as numbered editorial rows. Each row:
 *     italic-serif numeral (03.i–03.viii) in the left rail, serif title
 *     + graphite one-sentence body in the body column, sans-uppercase
 *     "Read more" link in brass beneath. Hairline border-b between
 *     rows. 2-column at lg, single-column on mobile.
 *
 * Service count (currently 8) is a Phase 3C content decision per
 * .impeccable.md — layout ships first, content audit is separate.
 */

const services = [
  {
    title: "Website Design",
    slug: "website-design",
    description:
      "Custom-coded sites built for speed, SEO, and conversions — written for your business, not assembled from a template.",
  },
  {
    title: "SEO",
    slug: "local-seo",
    description:
      "Rank higher on Google Maps and local search. We optimize your presence so customers find you first.",
  },
  {
    title: "Social Media",
    slug: "social-media",
    description:
      "Strategic content and management across Instagram, Facebook, and LinkedIn that builds trust and drives engagement.",
  },
  {
    title: "Ad Campaigns",
    slug: "ppc-google-ads",
    description:
      "Targeted ad campaigns that put your business in front of customers actively searching for your services.",
  },
  {
    title: "AI Search Optimization",
    slug: "ai-search-optimization",
    description:
      "Get your business recommended by AI assistants and voice search. The next frontier of local visibility.",
  },
  {
    title: "Brand Management",
    slug: "reputation-management",
    description:
      "Monitor, respond to, and grow your online reviews. Build the 5-star reputation your business has earned.",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description:
      "Email campaigns and automated flows that turn one-time customers into repeat buyers — the highest-ROI channel in marketing.",
  },
  {
    title: "Custom AI Solutions",
    slug: "custom-ai-solutions",
    description:
      "Automated follow-ups, lead qualification, chatbots, and workflow automation built for your specific business.",
  },
];

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
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
          id="services-heading"
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
          What we do, in plain terms.
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
          Eight things we do for small San Antonio businesses. Built by us,
          run by us, billed honestly.
        </p>

        {/* Numbered editorial list — 2-col at lg, hairline rules between rows */}
        <ol className="grid grid-cols-1 border-t border-border lg:grid-cols-2 lg:gap-x-12">
          {services.map((service, idx) => (
            <li
              key={service.slug}
              className="group grid grid-cols-1 gap-y-3 border-b border-border py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-x-6 lg:py-9"
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
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
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
