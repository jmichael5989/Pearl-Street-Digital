import { Metadata } from "next";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceRelated from "@/components/services/ServiceRelated";
import { getService, getRelatedServices } from "@/lib/services-data";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

const service = getService("website-design");

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

export default function WebsiteDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: { "@id": "https://rankpointmedia.com#org" },
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
      <main className="rpm3">
        <ServiceDetailHero
          kicker="WEBSITE DESIGN"
          headline="Websites that convert."
          lede="Custom Next.js sites built for speed, SEO, and conversions. For business owners who are tired of agencies that overpromise and underdeliver."
          primaryCta={{ label: "Book a consultation", href: "/contact#talk-to-us" }}
          secondaryCta={{ label: "See Pricing", href: "/pricing" }}
          metrics={[
            { value: "2-3", label: "Weeks Timeline" },
            { value: "$99", label: "Starter Plan" },
            { value: "95+", label: "Lighthouse" },
          ]}
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
