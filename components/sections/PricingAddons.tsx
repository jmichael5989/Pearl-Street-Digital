/**
 * Pricing add-ons rail. Sits below the three pricing tiers on /pricing as
 * a "Coming next" rail — small editorial tiles that signal capabilities
 * we plan to offer alongside the website build, each tagged with a status
 * so visitors understand they aren't bookable yet.
 *
 * Why this exists rather than the prior "Custom Services" trio (removed
 * in the 2026-04-25 audit, see Pricing.tsx doc-comment §"Custom Services
 * trio... was removed entirely"): the prior trio violated the Pricing
 * Transparency principle by ending each tile with "Call for Pricing".
 * This rail sidesteps the violation by being explicit about non-
 * availability — clearly-labeled roadmap is honest non-disclosure, not
 * hidden pricing. Aligns with .impeccable.md Early-stage Disclosure
 * Posture ("Disclosed, not sold").
 *
 * When an add-on launches, swap that single tile's `status` from
 * "Coming soon" to a concrete "From $X/mo" with a Cal.com CTA — the rest
 * of the structure carries over.
 *
 * Visual register matches the rest of /pricing: parchment surface for
 * alternation off Pricing's warm-white, hairline edge border on tiles
 * (no rounded-2xl, no shadow), serif H3 weight 400, status tag is a
 * mute-gray uppercase pill with edge border (per CLAUDE.md "brass never
 * as a chip fill" — keeps tags subtle and within palette rules).
 */

interface AddOn {
  name: string;
  description: string;
  status: "Coming soon";
}

const addOns: AddOn[] = [
  {
    name: "Local SEO",
    description:
      "Google Business Profile optimization, citation cleanup, and local keyword targeting so San Antonio searchers find you first.",
    status: "Coming soon",
  },
  {
    name: "Google Ads management",
    description:
      "Campaign setup and ongoing optimization for paid search — landing pages, keyword bidding, and conversion tracking.",
    status: "Coming soon",
  },
  {
    name: "Social media management",
    description:
      "Monthly content calendar, post scheduling, and engagement on the platforms that actually drive your customers.",
    status: "Coming soon",
  },
  {
    name: "Email marketing",
    description:
      "Automated sequences, monthly newsletters, and list growth that turn one-time visitors into repeat customers.",
    status: "Coming soon",
  },
  {
    name: "Monthly content",
    description:
      "Blog posts, landing pages, and on-site copy written for SEO and the way your customers actually search.",
    status: "Coming soon",
  },
  {
    name: "Brand identity refresh",
    description:
      "Logo, color, type, and brand-guide updates when the website gets a glow-up but the rest of the brand hasn't.",
    status: "Coming soon",
  },
];

export default function PricingAddons() {
  return (
    <section
      aria-labelledby="addons-heading"
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
            &nbsp;/&nbsp; Coming next
          </div>
        </header>

        {/* H2 */}
        <h2
          id="addons-heading"
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
          Beyond the build.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
          }}
        >
          A new website is a starting point. These add-ons compound the
          investment &mdash; more traffic, better conversion, lasting brand.
          We&rsquo;re rolling them out one at a time. Tell us at your
          consultation which ones matter to you and we&rsquo;ll prioritize.
        </p>

        {/* Add-on tiles */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ marginTop: "clamp(40px, 5vh, 64px)" }}
        >
          {addOns.map((addon) => (
            <article
              key={addon.name}
              className="flex h-full flex-col border border-border bg-light p-6 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
            >
              <h3
                className="font-heading text-text"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {addon.name}
              </h3>
              <p
                className="mt-3 mb-6 flex-1 font-body text-sm leading-[1.55]"
                style={{ color: "var(--color-brand-text)" }}
              >
                {addon.description}
              </p>
              <span className="inline-flex w-fit items-center border border-border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray">
                {addon.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
