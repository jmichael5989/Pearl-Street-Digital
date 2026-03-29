import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceRelated from "@/components/services/ServiceRelated";
import CTABanner from "@/components/sections/CTABanner";
import { getService, getRelatedServices } from "@/lib/services-data";

const service = getService("reputation-management");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `https://pearlstreetdigital.com/services/${service.slug}`,
    siteName: "Pearl Street Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
  },
  alternates: {
    canonical: `https://pearlstreetdigital.com/services/${service.slug}`,
  },
};

export default function ReputationManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} San Antonio`,
            description: service.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: "Pearl Street Digital",
              url: "https://pearlstreetdigital.com",
            },
            areaServed: { "@type": "City", name: "San Antonio" },
            url: `https://pearlstreetdigital.com/services/${service.slug}`,
          }),
        }}
      />
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceFeatures service={service} />
        <ServiceProcess service={service} />
        <ServiceFAQ service={service} />
        <CTABanner />
        <ServiceRelated services={getRelatedServices(service.relatedSlugs)} />
      </main>
      <Footer />
    </>
  );
}
