import { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import CaseStudiesTOC from "@/components/case-studies/CaseStudiesTOC";
import { caseStudies } from "@/lib/case-studies-data";

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
  const sorted = [...caseStudies].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

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
          kicker="CASE STUDIES"
          headline="Real work for real San Antonio businesses."
          headlineAccent="Real work"
          subheadline="Each entry is a single project — the problem the owner brought us, what we built, and what shipped."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See Services", href: "/services" }}
          showMockups={false}
        />

        <CaseStudiesTOC caseStudies={sorted} />
      </main>
      <Footer />
    </>
  );
}
