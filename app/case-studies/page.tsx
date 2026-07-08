import type { Metadata } from "next";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudyEntries from "@/components/case-studies/CaseStudyEntries";
import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies | Rank Point Media",
  description:
    "Real work, real results. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  openGraph: {
    title: "Case Studies | Rank Point Media",
    description:
      "Real work, real results. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
    url: "https://rankpointmedia.com/case-studies",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Rank Point Media",
    description:
      "Real work, real results. See how Rank Point Media delivers high-performance websites, local SEO, and digital marketing that drives measurable growth.",
  },
  alternates: { canonical: "https://rankpointmedia.com/case-studies" },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies - Rank Point Media",
  description:
    "Real work, real results. Portfolio of digital marketing and web design projects.",
  url: "https://rankpointmedia.com/case-studies",
  provider: {
    "@type": "Organization",
    name: "Rank Point Media",
    url: "https://rankpointmedia.com",
  },
};

// Case studies overview — three-color redesign (phase 4). Full story inlined
// per the approved mock; the individual detail pages were retired (301 -> here).
export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="rpm3">
        <CaseStudiesHero />
        <CaseStudyEntries />
        <PreFooterCta />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
