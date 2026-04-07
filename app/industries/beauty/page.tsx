import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryPainPoints from "@/components/industries/IndustryPainPoints";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryPricing from "@/components/industries/IndustryPricing";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import { getIndustry } from "@/lib/industries-data";

const industry = getIndustry("beauty");

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: `https://rankpointmedia.com/industries/${industry.slug}`,
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: industry.metaTitle,
    description: industry.metaDescription,
  },
  alternates: {
    canonical: `https://rankpointmedia.com/industries/${industry.slug}`,
  },
};

export default function BeautyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Salon and Barber Shop Website Design San Antonio",
              description: industry.metaDescription,
              provider: {
                "@type": "LocalBusiness",
                name: "Rank Point Media",
                url: "https://rankpointmedia.com",
              },
              areaServed: { "@type": "City", name: "San Antonio" },
              url: `https://rankpointmedia.com/industries/${industry.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: industry.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />
      <Header />
      <main>
        <IndustryHero industry={industry} />
        <IndustryPainPoints industry={industry} />
        <IndustrySolutions industry={industry} />
        <IndustryPricing industry={industry} />
        <IndustryFAQ industry={industry} />
      </main>
      <Footer />
    </>
  );
}
