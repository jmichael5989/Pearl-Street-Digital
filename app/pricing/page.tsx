import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
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
      <main className="pt-[100px] md:pt-[132px]">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
