import { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import FoundingClientCTA from "@/components/case-studies/FoundingClientCTA";
import {
  caseStudies,
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
  const totalCount = caseStudies.length;
  const showCTAProminent = totalCount < 4;

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
        {/* Page header */}
        <section className="pt-36 md:pt-44 pb-16 lg:pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-extrabold tracking-widest uppercase text-teal-600 mb-4">
              Our Work
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-900 mb-6 leading-tight tracking-tight">
              Real Results for Real Businesses
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every project starts with a real problem and ends with
              measurable results. Here is what we have delivered for
              businesses in San Antonio and beyond.
            </p>
          </div>
        </section>

        {/* Zone 1: Featured hero */}
        {featured && <FeaturedCaseStudy caseStudy={featured} />}

        {/* Zone 3a: Prominent Founding Client CTA (count < 4) */}
        {showCTAProminent && <FoundingClientCTA variant="prominent" />}

        {/* Zone 2: Grid (count >= 2) */}
        {gridItems.length > 0 && <CaseStudyGrid caseStudies={gridItems} />}

        {/* Zone 3b: Compact CTA at bottom (count >= 4) */}
        {!showCTAProminent && <FoundingClientCTA variant="compact" />}
      </main>
      <Footer />
    </>
  );
}
