import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyChallenge from "@/components/case-studies/CaseStudyChallenge";
import CaseStudySolution from "@/components/case-studies/CaseStudySolution";
import CaseStudyResults from "@/components/case-studies/CaseStudyResults";
import CaseStudyTestimonial from "@/components/case-studies/CaseStudyTestimonial";
import { getCaseStudy } from "@/lib/case-studies-data";

const study = getCaseStudy("modern-day-pest-control");

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.metaDescription,
  openGraph: {
    title: study.metaTitle,
    description: study.metaDescription,
    url: `https://rankpointmedia.com/case-studies/${study.slug}`,
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: study.metaTitle,
    description: study.metaDescription,
  },
  alternates: {
    canonical: `https://rankpointmedia.com/case-studies/${study.slug}`,
  },
};

export default function ModernDayPestControlCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${study.clientName} Case Study`,
            description: study.metaDescription,
            publisher: {
              "@type": "LocalBusiness",
              name: "Rank Point Media",
              url: "https://rankpointmedia.com",
            },
            url: `https://rankpointmedia.com/case-studies/${study.slug}`,
          }),
        }}
      />
      <Header />
      <main>
        <CaseStudyHero study={study} />
        <CaseStudyChallenge study={study} />
        <CaseStudySolution study={study} />
        <CaseStudyResults study={study} />
        <CaseStudyTestimonial study={study} />
      </main>
      <Footer />
    </>
  );
}
