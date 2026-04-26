import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import Pricing from "@/components/sections/Pricing";

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

export default function PricingPage() {
  return (
    <>
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
      </main>
      <Footer />
    </>
  );
}
