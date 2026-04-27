import { Metadata } from "next";
import DarkHero from "@/components/heroes/DarkHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceRelated from "@/components/services/ServiceRelated";
import { getService, getRelatedServices } from "@/lib/services-data";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

const service = getService("ppc-google-ads");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `https://rankpointmedia.com/services/${service.slug}`,
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
  },
  alternates: {
    canonical: `https://rankpointmedia.com/services/${service.slug}`,
  },
};

export default function PpcGoogleAdsPage() {
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
            provider: { "@id": "https://rankpointmedia.com#org" },
            areaServed: { "@type": "City", name: "San Antonio" },
            url: `https://rankpointmedia.com/services/${service.slug}`,
          }),
        }}
      />
      <BreadcrumbsSchema
        items={[
          { name: "Home", url: "https://rankpointmedia.com" },
          { name: "Services", url: "https://rankpointmedia.com/services" },
          {
            name: service.title,
            url: `https://rankpointmedia.com/services/${service.slug}`,
          },
        ]}
      />
      <main>
        <DarkHero
          kicker="— GOOGLE ADS"
          headline="Leads today, not someday."
          headlineAccent="today"
          subheadline="Targeted ad campaigns that put your San Antonio business in front of customers actively searching for your services right now. Pay for results, not impressions."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See Pricing", href: "/pricing" }}
          metrics={[
            { value: "48hr", label: "Campaign Launch" },
            { value: "$500", label: "Starting Budget" },
            { value: "100%", label: "Transparent Reporting" },
          ]}
          mockupVariant="ppc"
        />
        <ServiceOverview service={service} />
        <ServiceFeatures service={service} />
        <ServiceProcess service={service} />
        <ServiceFAQ service={service} />
        <ServiceRelated services={getRelatedServices(service.relatedSlugs)} />
      </main>
    </>
  );
}
