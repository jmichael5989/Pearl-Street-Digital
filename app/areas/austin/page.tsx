/**
 * Austin city landing page.
 *
 * Per project_city_expansion.md (City Expansion Playbook), this is the
 * Austin hub: it tells the Austin-specific story (where we work, which
 * services, how working with us goes, the geography trade-off) and links
 * outward to the existing generic service pages (website-design,
 * local-seo, ppc-google-ads). Service-page content stays location-flexible
 * per the 2026-03-30 decision; this page provides the city framing.
 *
 * **noindex is intentional.** Until a real, named Austin client agrees to
 * be quoted on this page, it stays out of Google's index. When that
 * proof point lands, drop a quote section into AustinLanding (between
 * sections 03 and 04) and remove `robots: { index: false }` below.
 *
 * Other pre-flip work to pair with the noindex removal:
 *   - Add a Service / page-scoped LocalBusiness JSON-LD with areaServed
 *     covering Austin / Travis County. The site-wide LocalBusiness
 *     schema in app/layout.tsx covers SA + immediate metro only by
 *     design; an Austin-specific overlay is added when the page is
 *     actually meant to rank.
 *   - Build the city+service combo pages (/areas/austin/web-design,
 *     /areas/austin/local-seo, /areas/austin/google-ads) that handle
 *     high-intent ranking. Hub-only is a deliberate first step.
 *   - Add a "Service Areas" footer column linking to /areas/austin and
 *     siblings. Header nav stays untouched — city pages reach visitors
 *     through search, not through site navigation.
 */
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import AustinLanding from "@/components/sections/AustinLanding";

export const metadata: Metadata = {
  title: "Web Design Austin | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, and Google Ads for Austin small businesses. From Rank Point Media — a two-person agency in San Antonio.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://rankpointmedia.com/areas/austin" },
};

export default function AustinPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="AUSTIN, TX"
          headline="Custom websites for Austin small businesses."
          headlineAccent="Austin"
          subheadline="Custom-coded websites, local SEO, and Google Ads for small businesses in Austin and central Texas. Two people in front of the work — not behind a layer of account managers."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />
        <AustinLanding />
      </main>
      <Footer />
    </>
  );
}
