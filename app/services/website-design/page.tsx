import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceRelated from "@/components/services/ServiceRelated";
import HeroBackground from "@/components/services/hero/HeroBackground";
import HeroMockups from "@/components/services/hero/HeroMockups";
import HeroMetrics from "@/components/services/hero/HeroMetrics";
import ScrollIndicator from "@/components/services/hero/ScrollIndicator";
import { getService, getRelatedServices } from "@/lib/services-data";

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
      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] bg-brand-dark overflow-hidden">
          <HeroBackground />

          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-16 lg:pt-48 lg:pb-20 flex flex-col min-h-[90vh]">
            <div className="grid grid-cols-12 gap-8 flex-1">
              {/* Left column */}
              <div className="col-span-12 lg:col-span-7 flex flex-col">
                <span className="font-mono-services text-xs uppercase tracking-widest text-brand-teal">
                  &mdash; Website Design
                </span>
                <h1
                  className="font-display-services text-white mt-6 text-balance"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 7.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Websites that{" "}
                  <em className="italic text-brand-teal">actually</em> convert.
                </h1>
                <p className="font-body-services text-lg text-white/70 max-w-xl mt-8">
                  Custom Next.js sites built for speed, SEO, and conversions.
                  Designed for San Antonio businesses who are tired of agencies
                  that overpromise and underdeliver.
                </p>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-teal text-brand-dark font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(20,184,166,0.35)]"
                  >
                    Book Free Audit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold transition-colors duration-200 hover:bg-white/5"
                  >
                    See Pricing
                  </Link>
                </div>
                <p className="mt-4 text-sm text-white/50">
                  Or call{" "}
                  <a
                    href="tel:+12105551234"
                    className="underline-offset-4 hover:underline"
                  >
                    (210) 555-1234
                  </a>
                </p>
              </div>

              {/* Right column (hidden <lg) */}
              <div className="hidden lg:block lg:col-span-5">
                <HeroMockups />
              </div>
            </div>

            {/* Bottom metric row */}
            <div className="mt-16 mb-12">
              <HeroMetrics
                metrics={[
                  { value: "2-3", label: "Weeks" },
                  { value: "$99", label: "Starter Plan" },
                  { value: "95+", label: "Lighthouse" },
                  { value: "2-4", label: "Revisions" },
                ]}
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center">
            <ScrollIndicator />
          </div>
        </section>

        {/* INLINE OVERVIEW — heading + paragraphs only (highlights moved to hero metrics) */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
              Overview
            </span>
            <h2
              className="mt-3 font-heading font-bold text-text"
              style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}
            >
              {service.overview.heading}
            </h2>
            {service.overview.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-gray leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        <ServiceFeatures service={service} />
        <ServiceProcess service={service} />
        <ServiceFAQ service={service} />
        <ServiceRelated services={getRelatedServices(service.relatedSlugs)} />
      </main>
    </>
  );
}
