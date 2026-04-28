import Link from "next/link";

/**
 * Pricing add-ons rail. Sits below the three pricing tiers on /pricing
 * as nine bookable services that layer on top of a website build —
 * Local SEO, Google Ads, social, email, content, brand identity, AI
 * solutions, photography, e-commerce.
 *
 * Originally shipped as a "Coming next" roadmap rail with `Coming soon`
 * tags (see prior commit on this file). Owner moved it to bookable
 * 2026-04-26: real prices, real CTAs. Pricing is set at the lower end
 * of typical Fiverr ranges, anchored to the existing $99/mo website
 * floor so the add-ons read as natural extensions of the entry plan.
 *
 * The lede carries the value-prop blurb that justifies Fiverr-floor
 * pricing without Fiverr-quality work — custom-coded, direct founder
 * access, no offshore developers, no generic AI templates. That
 * positioning has to land near the price for the comparison to feel
 * fair to a prospect who's only ever seen Fiverr.
 *
 * AI Solutions does NOT use the "From $X" pattern — it's billed
 * hourly because scope varies wildly (chatbot vs custom integration
 * vs full app like appealproai.com). Tile shows the hourly rate
 * directly and routes to the same Cal.com consultation for scoping.
 *
 * Visual register matches the rest of /pricing: parchment surface for
 * alternation off Pricing's warm-white, hairline edge border on tiles
 * (no rounded-2xl, no shadow), serif H3 weight 400, price text at the
 * bottom in navy. Each tile is a Link to the homepage Cal.com widget.
 */

interface AddOn {
  name: string;
  description: string;
  price: string;
}

const addOns: AddOn[] = [
  {
    name: "Local SEO",
    description:
      "Google Business Profile optimization, citation cleanup, and local keyword targeting so San Antonio searchers find you first.",
    price: "From $99/mo",
  },
  {
    name: "Google Ads management",
    description:
      "Campaign setup and ongoing optimization for paid search — landing pages, keyword bidding, and conversion tracking.",
    price: "From $149/mo",
  },
  {
    name: "Social media management",
    description:
      "Monthly content calendar, post scheduling, and engagement on the platforms that actually drive your customers.",
    price: "From $149/mo",
  },
  {
    name: "Email marketing",
    description:
      "Automated sequences, monthly newsletters, and list growth that turn one-time visitors into repeat customers.",
    price: "From $99 setup",
  },
  {
    name: "Monthly content",
    description:
      "Blog posts, landing pages, and on-site copy written for SEO and the way your customers actually search.",
    price: "From $99/mo",
  },
  {
    name: "Brand identity refresh",
    description:
      "Logo, color, type, and brand-guide updates when the website gets a glow-up but the rest of the brand hasn't.",
    price: "From $100 one-time",
  },
  {
    name: "AI solutions",
    description:
      "Custom AI integrations — chatbots, content generators, workflow automation, full apps like appealproai.com. Built from scratch, not bolted on.",
    price: "Custom · $60/hr",
  },
  {
    name: "Brand photography",
    description:
      "Half-day or full-day shoots for the website, social, and product imagery. Real photos of your business, not stock.",
    price: "From $250/session",
  },
  {
    name: "E-commerce setup",
    description:
      "Shopify or custom Stripe storefront, product pages, checkout, and inventory wired into the website you already have.",
    price: "From $500 one-time",
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
            &nbsp;/&nbsp; Add-ons
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
            maxWidth: "62ch",
          }}
        >
          A website is the foundation. Layer on the marketing services that
          compound the investment &mdash; at prices that beat Fiverr, with
          work that doesn&rsquo;t. Every add-on is custom-coded by Jon and
          Stacie directly. No account managers, no offshore developers, no
          generic AI templates. The prices below are the floor; scope drives
          the final number. Mention which ones you want at your consultation.
        </p>

        {/* Add-on tiles */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ marginTop: "clamp(40px, 5vh, 64px)" }}
        >
          {addOns.map((addon) => (
            <Link
              key={addon.name}
              href="/#talk-to-us"
              className="group flex h-full flex-col border border-border bg-light p-6 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
              aria-label={`Book a consultation for ${addon.name}`}
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
              <div
                className="flex items-center justify-between gap-3 border-t border-border pt-4"
                style={{ marginTop: "auto" }}
              >
                <span className="font-body text-sm font-semibold text-text">
                  {addon.price}
                </span>
                <span
                  className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-transform duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  Book &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
