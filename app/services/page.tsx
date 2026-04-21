import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/services/ServiceCard";
import FAQ from "@/components/sections/FAQ";
import CustomDevelopmentCallout from "@/components/sections/CustomDevelopmentCallout";

const serviceImages: Record<string, string> = {
  "website-design": "/images/services/website-design.jpg",
  "local-seo": "/images/services/local-seo.jpg",
  "social-media": "/images/services/social-media.jpg",
  "ppc-google-ads": "/images/services/ppc-google-ads.jpg",
  "ai-search-optimization": "/images/services/ai-search.jpg",
  "reputation-management": "/images/services/reputation.jpg",
};

const serviceVideos: Record<string, string> = {
  "website-design": "/videos/services/website-design.mp4",
  "local-seo": "/videos/services/local-seo.mp4",
  "social-media": "/videos/services/social-media.mp4",
  "ppc-google-ads": "/videos/services/ppc-google-ads.mp4",
  "ai-search-optimization": "/videos/services/ai-search.mp4",
  "reputation-management": "/videos/services/reputation.mp4",
};

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
      <Header />
      <main>
        {/* Blue hero banner containing eyebrow + H1 */}
        <section className="pt-[100px] md:pt-[132px]" style={{ background: "#2563EB" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-10 lg:pb-14">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                Our Services
              </span>
              <h1 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Digital Marketing Services for Local Businesses
              </h1>
            </div>
          </div>
        </section>

        {/* Description body copy */}
        <section className="bg-white pt-12 pb-8 lg:pt-16 lg:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
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

        {/* Services Grid */}
        <section className="bg-light pt-8 pb-16 lg:pt-10 lg:pb-24">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  tagline={service.tagline}
                  image={serviceImages[service.slug]}
                  video={serviceVideos[service.slug]}
                />
              ))}
            </div>
          </div>
        </section>

        <CustomDevelopmentCallout />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
