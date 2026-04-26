/**
 * PLACEHOLDER — Houston city landing page. See austin/page.tsx for the
 * fuller comment block on what to fill in before flipping `noindex` off.
 * Same checklist applies, scoped to Houston / Gulf Coast.
 */
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import CityPlaceholder from "@/components/sections/CityPlaceholder";

export const metadata: Metadata = {
  title: "Web Design Houston | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, and Google Ads for Houston small businesses. From Rank Point Media — a two-person agency based in San Antonio expanding into the Gulf Coast region.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://rankpointmedia.com/areas/houston" },
};

export default function HoustonPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="HOUSTON"
          headline="Custom websites for Houston small businesses."
          headlineAccent="Houston"
          subheadline="We build hand-coded websites and run local SEO for small businesses across Houston and the Gulf Coast. Two people, no account managers, no agency markup."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />
        <CityPlaceholder city="Houston" />
      </main>
      <Footer />
    </>
  );
}
