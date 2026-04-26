/**
 * PLACEHOLDER — Dallas city landing page. See austin/page.tsx for the
 * fuller comment block on what to fill in before flipping `noindex` off.
 * Same checklist applies, scoped to Dallas / DFW metro.
 */
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import CityPlaceholder from "@/components/sections/CityPlaceholder";

export const metadata: Metadata = {
  title: "Web Design Dallas | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, and Google Ads for Dallas small businesses. From Rank Point Media — a two-person agency based in San Antonio expanding into the DFW metro.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://rankpointmedia.com/areas/dallas" },
};

export default function DallasPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="DALLAS"
          headline="Custom websites for Dallas small businesses."
          headlineAccent="Dallas"
          subheadline="We build hand-coded websites and run local SEO for small businesses across Dallas–Fort Worth. Two people, no account managers, no agency markup."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />
        <CityPlaceholder city="Dallas" />
      </main>
      <Footer />
    </>
  );
}
