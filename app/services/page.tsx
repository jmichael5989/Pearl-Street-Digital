import { Metadata } from "next";
import { services } from "@/lib/services-data";
import DarkHero from "@/components/heroes/DarkHero";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import FAQ from "@/components/sections/FAQ";
import CustomDevelopmentCallout from "@/components/sections/CustomDevelopmentCallout";

export const metadata: Metadata = {
  title: "Digital Marketing Services San Antonio | Rank Point Media",
  description:
    "Full-service digital marketing for San Antonio businesses. Website design, local SEO, social media, Google Ads, AI search optimization, and reputation management.",
  openGraph: {
    title: "Digital Marketing Services San Antonio | Rank Point Media",
    description:
      "Full-service digital marketing for San Antonio businesses. Website design, local SEO, social media, Google Ads, AI search optimization, and reputation management.",
    url: "https://rankpointmedia.com/services",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services San Antonio | Rank Point Media",
    description:
      "Full-service digital marketing for San Antonio businesses. Website design, local SEO, social media, Google Ads, AI search optimization, and reputation management.",
  },
  alternates: { canonical: "https://rankpointmedia.com/services" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digital Marketing Services San Antonio",
  description:
    "Full-service digital marketing for San Antonio businesses. Website design, local SEO, social media, Google Ads, AI search optimization, and reputation management.",
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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <main>
        <DarkHero
          kicker="— OUR SERVICES"
          headline="Six ways to grow your business online."
          headlineAccent="grow"
          subheadline="From custom websites to AI search optimization, we give San Antonio small businesses the digital marketing toolkit of a much larger agency — at prices built for local owners."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See Pricing", href: "/pricing" }}
          metrics={[
            { value: "6", label: "Core Services" },
            { value: "100%", label: "Built In-House" },
            { value: "SA", label: "Local Agency" },
            { value: "$99", label: "Starting Monthly" },
          ]}
          mockupVariant="generic"
        />

        {/* Editorial slab — section header + body copy */}
        <section
          aria-labelledby="services-intro-heading"
          className="bg-light border-t border-border"
          style={{
            paddingTop: "clamp(72px, 12vh, 144px)",
            paddingBottom: "clamp(72px, 12vh, 144px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            {/* Eyebrow */}
            <header className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="font-heading text-base font-normal italic mr-1">
                  02
                </span>
                &nbsp;/&nbsp; The work
              </div>
            </header>

            {/* H2 */}
            <h2
              id="services-intro-heading"
              className="font-heading text-text text-balance"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                maxWidth: "24ch",
                margin: 0,
              }}
            >
              The presence small businesses actually need.
            </h2>

            {/* Body — graphite paragraphs at 65ch measure */}
            <div
              className="mt-8 flex flex-col gap-5 font-body"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-brand-text)",
                maxWidth: "65ch",
              }}
            >
              <p>
                Every engagement starts with a custom-coded website built
                for speed, clarity, and conversion &mdash; no templates,
                no shortcuts, no recycled layouts. From there we layer in
                the marketing that fits your market: local SEO, paid ads
                that generate real phone calls, social content, reputation
                management.
              </p>
              <p>
                No contracts. No account managers shuffling you between
                specialists. One team &mdash; the same team that built
                your site &mdash; running every campaign and owning every
                result.
              </p>
            </div>
          </div>
        </section>

        <ServicesShowcase />

        <CustomDevelopmentCallout numeral="04" />

        <FAQ />
      </main>
    </>
  );
}
