import Link from "next/link";

/**
 * Pricing add-ons — three-color redesign (Phase B).
 * Re-skin of the prior navy/brass PricingAddons.tsx to the .rpm3 design system,
 * matching public/mocks/hero/pricing.html verbatim.
 *
 * Menu trimmed 2026-07-22 from 11 add-ons to the 5 that tell the
 * build -> rank -> get cited story (see tasks/todo.md). The cut services
 * (social, email, reputation, brand identity, photography, custom AI) are
 * still sellable to existing clients but are no longer advertised here;
 * their /services pages remain live for SEO.
 *
 * Each addon tile is a <Link> to /contact#talk-to-us so the whole tile is clickable.
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
      "Google Business Profile optimization, citation cleanup, and local keyword targeting so local searchers find you first.",
    price: "From $99/mo",
  },
  {
    name: "AI search optimization",
    description:
      "Get your business cited by ChatGPT, Google AI Overviews, Perplexity, and voice assistants. The next frontier of local visibility, before your competitors catch on.",
    price: "From $99/mo",
  },
  {
    name: "Google Ads management",
    description:
      "Campaign setup and ongoing optimization for paid search, landing pages, keyword bidding, and conversion tracking.",
    price: "From $149/mo",
  },
  {
    name: "Monthly content",
    description:
      "Blog posts, landing pages, and on-site copy written for SEO and the way your customers actually search.",
    price: "From $99/mo",
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
    <section className="addons">
      <div className="wrap">
        <header className="addons-head">
          {/* Numbered kicker: spine-outline numeral + label, same idiom as Pricing (02) */}
          <p className="kicker appear">
            <span
              className="spine spine-outline"
              style={{ fontSize: "1em", WebkitTextStroke: "1px var(--grey)" }}
            >
              03
            </span>
            &nbsp;/&nbsp;Add-ons
          </p>
          <h2 className="appear">Beyond the build.</h2>
          <p className="addons-lede appear">
            A website is the foundation. Layer on the marketing services that
            compound the investment, at prices that beat Fiverr, with work that
            doesn&rsquo;t. Every add-on is custom-coded by Jon and Stacie
            directly. No account managers, no offshore developers, no generic AI
            templates. The prices below are the floor; scope drives the final
            number. Mention which ones you want at your consultation.
          </p>
        </header>

        <div className="addon-grid appear">
          {addOns.map((addon) => (
            <Link
              key={addon.name}
              href="/contact#talk-to-us"
              className="addon"
              aria-label={`Book a consultation for ${addon.name}`}
            >
              <h3>{addon.name}</h3>
              <p>{addon.description}</p>
              <div className="addon-foot">
                <span className="addon-price">{addon.price}</span>
                <span className="addon-book">Book</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
