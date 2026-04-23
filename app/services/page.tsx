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
          primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
          secondaryCta={{ label: "See Pricing", href: "/pricing" }}
          metrics={[
            { value: "6", label: "Core Services" },
            { value: "100%", label: "Built In-House" },
            { value: "SA", label: "Local Agency" },
            { value: "$99", label: "Starting Monthly" },
          ]}
          mockupVariant="generic"
        />

        {/* Description body copy */}
        <section className="bg-white pt-12 pb-8 lg:pt-16 lg:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-lg text-gray leading-relaxed">
                We build the kind of digital presence that actually moves a business forward. Every engagement starts with a custom-coded website built for speed, clarity, and conversion -- no templates, no shortcuts, no recycled layouts.
              </p>
              <p className="mt-4 text-lg text-gray leading-relaxed">
                From there, we layer in the marketing strategy that fits your market. Local SEO that puts you on the map where customers are searching. Paid ads that generate real phone calls, not vanity clicks. Social media content that reinforces your brand. Reputation management that turns happy customers into your best marketing channel. And AI-powered search optimization so you show up in the answers that Google, ChatGPT, and Perplexity surface next.
              </p>
              <p className="mt-4 text-lg text-gray leading-relaxed">
                No contracts. No account managers shuffling you between specialists. Just one team -- the same team that built your site -- running every campaign and owning every result.
              </p>
            </div>
          </div>
        </section>

        <ServicesShowcase />

        <CustomDevelopmentCallout />

        <FAQ />
      </main>
    </>
  );
}
