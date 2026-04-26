import { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import IndustryPainPoints from "@/components/industries/IndustryPainPoints";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import { getIndustry } from "@/lib/industries-data";

const industry = getIndustry("auto");

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

export default function AutoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Auto Repair Website Design and Marketing San Antonio",
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
      <main>
        <DarkHero
          kicker="AUTO"
          headline={industry.heroHeading}
          subheadline={industry.heroSubtitle}
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See pricing", href: "/pricing" }}
          showMockups={false}
        />
        <IndustryPainPoints industry={industry} />
        <IndustrySolutions industry={industry} />
        <IndustryFAQ industry={industry} />
      </main>
      <Footer />
    </>
  );
}
