import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/sections/Pricing";
import PricingAddons from "@/components/sections/PricingAddons";
import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing | Rank Point Media",
  description:
    "Transparent pricing for web design, hosting, and digital marketing. Flexible plans starting at $99/month. No hidden costs.",
  openGraph: {
    title: "Pricing | Rank Point Media",
    description:
      "Transparent pricing for web design, hosting, and digital marketing. Flexible plans starting at $99/month. No hidden costs.",
    url: "https://rankpointmedia.com/pricing",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Rank Point Media",
    description:
      "Transparent pricing for web design, hosting, and digital marketing. Flexible plans starting at $99/month. No hidden costs.",
  },
  alternates: {
    canonical: "https://rankpointmedia.com/pricing",
  },
};

// Service + OfferCatalog schema. Exposes the published prices as
// queryable structured data so generative engines (ChatGPT, Perplexity,
// Google AI Overviews) can cite concrete numbers when answering "how
// much does a website cost?" — the brief's pricing transparency
// principle, made machine-readable. Bump these when the Pricing
// component's plan data changes.
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Hosting",
  name: "Website design, hosting, and digital marketing — Rank Point Media",
  url: "https://rankpointmedia.com/pricing",
  // Reference the canonical org node defined in app/layout.tsx. Both JSON-LD
  // blocks render on the same page, so Google resolves the @id reference.
  // Keeps NAP in one place.
  provider: { "@id": "https://rankpointmedia.com#org" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter — Build + Hosting (monthly)",
        description:
          "Custom-designed responsive website (up to 3 pages), full on-page SEO, contact form, managed hosting and SSL, monthly backups, unlimited edits. 12-month term.",
        price: "99.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99.00",
          priceCurrency: "USD",
          unitCode: "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Business — Build + Hosting (monthly)",
        description:
          "Custom-designed responsive website (up to 5 pages), full on-page SEO, Google Analytics, hosting, SSL, backups, uptime monitoring, unlimited edits. 12-month term.",
        price: "149.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "149.00",
          priceCurrency: "USD",
          unitCode: "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth — Build + Hosting (monthly)",
        description:
          "Custom-designed responsive website (up to 10 pages), full on-page SEO with schema markup, social integrations, Google Analytics, hosting, SSL, backups, uptime monitoring with priority support. 12-month term.",
        price: "249.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "249.00",
          priceCurrency: "USD",
          unitCode: "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Landing Page — Build Only (one-time)",
        description:
          "Single-page custom-designed responsive website with full on-page SEO and contact form. Client owns and hosts after delivery. No ongoing fees.",
        price: "500.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Business — Build Only (one-time)",
        description:
          "Up to 3-page custom-designed responsive website with full on-page SEO, contact form, and Google Analytics. Client owns and hosts after delivery.",
        price: "1000.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth — Build Only (one-time)",
        description:
          "Up to 6-page custom-designed responsive website with full on-page SEO, schema markup, social integrations, and Google Analytics. Client owns and hosts after delivery.",
        price: "1500.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <main className="rpm3">
        {/* B4a — Inverted price-hero (server markup, matches mock verbatim) */}
        <section className="price-hero inverted">
          <div className="wrap">
            <p className="kicker appear">Transparent pricing</p>
            <h1 className="appear">Simple pricing. No surprises.</h1>
            <p className="lede appear">
              Flexible monthly plans that fit your budget. No hidden costs, no
              surprise invoices. You own everything we build.
            </p>
            <div className="hero-ctas appear">
              <Link className="btn" href="/contact#talk-to-us">
                Book a consultation
              </Link>
              <Link className="btn btn-light" href="/services">
                See Services
              </Link>
            </div>
            <div className="hero-metrics appear">
              <div className="hero-metric">
                <div className="m-value">$99</div>
                <div className="m-label">Starter</div>
              </div>
              <div className="hero-metric">
                <div className="m-value">$149</div>
                <div className="m-label">Business</div>
              </div>
              <div className="hero-metric">
                <div className="m-value">$249</div>
                <div className="m-label">Growth</div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <PricingAddons />
        <PreFooterCta />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
