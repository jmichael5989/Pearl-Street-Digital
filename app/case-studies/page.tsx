import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTABanner from "@/components/sections/CTABanner";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies San Antonio | Pearl Street Digital",
  description:
    "Real results for real San Antonio businesses. See how Pearl Street Digital delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  openGraph: {
    title: "Case Studies San Antonio | Pearl Street Digital",
    description:
      "Real results for real San Antonio businesses. See how Pearl Street Digital delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
    url: "https://pearlstreetdigital.com/case-studies",
    siteName: "Pearl Street Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies San Antonio | Pearl Street Digital",
    description:
      "Real results for real San Antonio businesses. See how Pearl Street Digital delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  },
  alternates: { canonical: "https://pearlstreetdigital.com/case-studies" },
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Case Studies - Pearl Street Digital",
            description:
              "Real results for real San Antonio businesses. Portfolio of digital marketing and web design projects.",
            url: "https://pearlstreetdigital.com/case-studies",
            provider: {
              "@type": "LocalBusiness",
              name: "Pearl Street Digital",
              url: "https://pearlstreetdigital.com",
            },
          }),
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Our Work
              </span>
              <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-dark">
                Real Results for Real Businesses
              </h1>
              <p className="mt-5 text-lg text-gray leading-relaxed">
                Every project starts with a real problem and ends with
                measurable results. Here is what we have delivered for
                businesses in San Antonio and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-light py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
