import { Metadata } from "next";
import { services } from "@/lib/services-data";
import { SERVICE_FAQS } from "@/lib/service-faqs";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesToc from "@/components/services/ServicesToc";
import ServicesBuild from "@/components/services/ServicesBuild";
import ServicesFaq from "@/components/services/ServicesFaq";
import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, Google Ads, social media, AI search, and reputation management. A two-person agency.",
  openGraph: {
    title: "Digital Marketing Services | Rank Point Media",
    description:
      "Custom-coded websites, local SEO, Google Ads, social media, AI search, and reputation management. A two-person agency.",
    url: "https://rankpointmedia.com/services",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Rank Point Media",
    description:
      "Custom-coded websites, local SEO, Google Ads, social media, AI search, and reputation management. A two-person agency.",
  },
  alternates: { canonical: "https://rankpointmedia.com/services" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digital Marketing Services",
  description:
    "Custom-coded websites, local SEO, Google Ads, social media, AI search, and reputation management. A two-person agency.",
  url: "https://rankpointmedia.com/services",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://rankpointmedia.com/services/${service.slug}`,
      name: service.title,
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

// Services overview page — three-color redesign (phase 3). Body scoped under
// .rpm3; the sticky bar header + full-screen menu are supplied by
// HeaderRouter -> VoxelHeader (variant="bar").
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="rpm3">
        <ServicesHero />
        <ServicesIntro />
        <ServicesToc />
        <ServicesBuild />
        <ServicesFaq />
        <PreFooterCta />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
