import { Metadata } from "next";
import DarkHero from "@/components/heroes/DarkHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceRelated from "@/components/services/ServiceRelated";
import { getService, getRelatedServices } from "@/lib/services-data";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

const service = getService("social-media");

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

export default function SocialMediaPage() {
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
              name: "Rank Point Media",
              url: "https://rankpointmedia.com",
            },
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
          kicker="— SOCIAL MEDIA"
          headline="Content that actually builds a following."
          headlineAccent="actually"
          subheadline="Consistent, on-brand social content for San Antonio businesses. Post strategy, creative production, and community management — done for you, done right."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See Pricing", href: "/pricing" }}
          metrics={[
            { value: "3-5x", label: "Posts Per Week" },
            { value: "4", label: "Platforms Managed" },
            { value: "24hr", label: "Response Time" },
            { value: "Monthly", label: "Performance Reports" },
          ]}
          mockupVariant="social"
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
