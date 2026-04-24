import { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import {
  getFeaturedCaseStudy,
  getGridCaseStudies,
} from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies San Antonio | Rank Point Media",
  description:
    "Real results for real San Antonio businesses. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  openGraph: {
    title: "Case Studies San Antonio | Rank Point Media",
    description:
      "Real results for real San Antonio businesses. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
    url: "https://rankpointmedia.com/case-studies",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies San Antonio | Rank Point Media",
    description:
      "Real results for real San Antonio businesses. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  },
  alternates: { canonical: "https://rankpointmedia.com/case-studies" },
};

export default function CaseStudiesPage() {
  const featured = getFeaturedCaseStudy();
  const gridItems = getGridCaseStudies();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Case Studies - Rank Point Media",
            description:
              "Real results for real San Antonio businesses. Portfolio of digital marketing and web design projects.",
            url: "https://rankpointmedia.com/case-studies",
            provider: {
              "@type": "LocalBusiness",
              name: "Rank Point Media",
              url: "https://rankpointmedia.com",
            },
          }),
        }}
      />
      <main>
        <DarkHero
          kicker="— CASE STUDIES"
          headline="Real results for real San Antonio businesses."
          headlineAccent="Real results"
          subheadline="From HVAC to restaurants to law firms, see how local businesses use Rank Point Media to grow traffic, leads, and revenue."
          primaryCta={{ label: "Start Your Project", href: "/contact" }}
          secondaryCta={{ label: "See Services", href: "/services" }}
          showMockups={false}
        />

        {featured && <FeaturedCaseStudy caseStudy={featured} />}

        {gridItems.length > 0 && <CaseStudyGrid caseStudies={gridItems} />}
      </main>
      <Footer />
    </>
  );
}
