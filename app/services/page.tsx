import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/services/ServiceCard";
import FAQ from "@/components/sections/FAQ";

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
        {/* Blue accent strip between header and hero */}
        <div className="pt-[100px] md:pt-[132px]">
          <div className="h-2" style={{ background: "#2563EB" }} />
        </div>

        {/* Hero */}
        <section className="bg-white pt-12 pb-8 lg:pt-16 lg:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Our Services
              </span>
              <h1 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Digital Marketing Services for Local Businesses
              </h1>
              <p className="mt-5 text-lg text-gray leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                From custom websites to SEO, ad campaigns, and AI-powered search optimization -- everything your business needs to win online. Managed by a team that knows your market.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-light pt-8 pb-16 lg:pt-10 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Custom Development Callout */}
        <section className="bg-[#F8FAFC] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-heading text-2xl md:text-3xl font-bold italic text-dark leading-snug">
              Every site we build is custom-coded from the ground up -- no WordPress templates, no drag-and-drop page builders, no shortcuts.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-heading text-base font-semibold text-dark">
                  Custom Schema Markup
                </p>
                <p className="mt-2 text-sm text-gray leading-relaxed">
                  Hand-coded structured data tags that tell Google exactly what your business does, where you are, and what services you offer -- giving you rich results that generic sites never get.
                </p>
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-dark">
                  Performance-First Code
                </p>
                <p className="mt-2 text-sm text-gray leading-relaxed">
                  No bloated plugins or unused CSS. Every line of code serves a purpose, which is why our sites load in under 2 seconds and score 95+ on Google Lighthouse.
                </p>
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-dark">
                  Built for Your Business
                </p>
                <p className="mt-2 text-sm text-gray leading-relaxed">
                  Your site is designed around your specific goals, customers, and market -- not squeezed into a template that a thousand other businesses already use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
