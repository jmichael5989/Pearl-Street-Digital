import { Metadata } from "next";
import { industries } from "@/lib/industries-data";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesList from "@/components/industries/IndustriesList";

export const metadata: Metadata = {
  title: "Industries We Serve | Rank Point Media",
  description:
    "Website design and digital marketing for restaurants, beauty businesses, and auto repair shops. Industry-specific strategies that drive real results.",
  openGraph: {
    title: "Industries We Serve | Rank Point Media",
    description:
      "Website design and digital marketing for restaurants, beauty businesses, and auto repair shops.",
    url: "https://rankpointmedia.com/industries",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Rank Point Media",
    description:
      "Website design and digital marketing for restaurants, beauty businesses, and auto repair shops.",
  },
  alternates: { canonical: "https://rankpointmedia.com/industries" },
};

export default function IndustriesPage() {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve",
    description:
      "Website design and digital marketing for restaurants, beauty businesses, and auto repair shops.",
    url: "https://rankpointmedia.com/industries",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((industry, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: industry.title,
        url: `https://rankpointmedia.com/industries/${industry.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />
      <main className="rpm3">
        <IndustriesHero
          kicker="INDUSTRIES"
          headline="Marketing that fits how your customers actually search."
          lede="Every industry has different customers, different search patterns, and different conversion triggers. We build the strategy around how the work actually moves in your category."
          primaryCta={{ label: "Book a consultation", href: "/contact#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
        />
        <IndustriesList />
      </main>
    </>
  );
}
