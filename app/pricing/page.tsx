import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import Pricing from "@/components/sections/Pricing";
import PricingAddons from "@/components/sections/PricingAddons";

export const metadata: Metadata = {
  title: "Pricing San Antonio | Rank Point Media",
  description:
    "Transparent pricing for web design, hosting, and digital marketing services in San Antonio. Flexible plans starting at $99/month. No hidden costs.",
  openGraph: {
    title: "Pricing San Antonio | Rank Point Media",
    description:
      "Transparent pricing for web design, hosting, and digital marketing services in San Antonio. Flexible plans starting at $99/month. No hidden costs.",
    url: "https://rankpointmedia.com/pricing",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing San Antonio | Rank Point Media",
    description:
      "Transparent pricing for web design, hosting, and digital marketing services in San Antonio. Flexible plans starting at $99/month. No hidden costs.",
  },
  alternates: {
    canonical: "https://rankpointmedia.com/pricing",
  },
};

// Service + OfferCatalog schema. Exposes the published prices as
// queryable structured data so generative engines (ChatGPT, Perplexity,
// Google AI Overviews) can cite concrete numbers when answering "how
// much does a website in San Antonio cost?" — the brief's pricing
// transparency principle, made machine-readable. Bump these when the
// Pricing component's plan data changes.
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Hosting",
  name: "Website design, hosting, and digital marketing — Rank Point Media",
  url: "https://rankpointmedia.com/pricing",
  provider: {
    "@type": "LocalBusiness",
    name: "Rank Point Media",
    url: "https://rankpointmedia.com",
    telephone: "+1-210-305-7372",
    email: "info@rankpointmedia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "City", name: "San Antonio" },
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
      <main>
        <DarkHero
          kicker="— TRANSPARENT PRICING"
          headline="Simple pricing. No surprises."
          headlineAccent="Simple"
          subheadline="Flexible monthly plans that fit your budget. No hidden costs, no surprise invoices. You own everything we build."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See Services", href: "/services" }}
          showMockups={false}
          metrics={[
            { value: "$99", label: "Starter" },
            { value: "$149", label: "Business" },
            { value: "$249", label: "Growth" },
          ]}
        />
        <Pricing />
        <PricingAddons />
      </main>
      <Footer />
    </>
  );
}
