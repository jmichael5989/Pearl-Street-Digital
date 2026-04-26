/**
 * PLACEHOLDER — Austin city landing page.
 *
 * Per project_city_expansion.md (City Expansion Playbook), this route
 * is part of the Texas expansion and is `noindex` until real content
 * lands. The page renders coherent placeholder copy so a visitor who
 * guesses the URL sees something sensible, but Google should not index
 * a thin placeholder.
 *
 * Before flipping to indexable (remove robots:noindex below):
 *   - At least one real Austin client testimonial or case study.
 *   - Update LocalBusiness JSON-LD with Austin service area.
 *   - Replace the placeholder body copy with city-specific content
 *     (Austin neighborhoods, local landmarks, Hill Country / central
 *     TX framing). Keep distinct from the SA pages — duplicate content
 *     will hurt rankings.
 *   - Build /areas/austin/[service] combo pages for high-intent
 *     keywords (web-design, local-seo, google-ads).
 *   - Add Austin to the alternates list on the homepage and other
 *     city pages.
 */
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import CityPlaceholder from "@/components/sections/CityPlaceholder";

export const metadata: Metadata = {
  title: "Web Design Austin | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, and Google Ads for Austin small businesses. From Rank Point Media — a two-person agency based in San Antonio expanding into central Texas.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://rankpointmedia.com/areas/austin" },
};

export default function AustinPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="AUSTIN"
          headline="Custom websites for Austin small businesses."
          headlineAccent="Austin"
          subheadline="We build hand-coded websites and run local SEO for small businesses across central Texas. Two people, no account managers, no agency markup."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />
        <CityPlaceholder city="Austin" />
      </main>
      <Footer />
    </>
  );
}
