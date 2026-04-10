import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { services } from "@/lib/services-data";
import { serviceIconMap, ArrowRightIcon } from "@/components/icons/ServiceIcons";
import FAQ from "@/components/sections/FAQ";

const serviceImages: Record<string, string> = {
  "website-design": "/images/services/website-design.jpg",
  "local-seo": "/images/services/local-seo.jpg",
  "social-media": "/images/services/social-media.jpg",
  "ppc-google-ads": "/images/services/ppc-google-ads.jpg",
  "ai-search-optimization": "/images/services/ai-search.jpg",
  "reputation-management": "/images/services/reputation.jpg",
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
        {/* Hero */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Our Services
              </span>
              <h1 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Digital Marketing Services for San Antonio Businesses
              </h1>
              <p className="mt-5 text-lg text-gray leading-relaxed">
                From custom websites to local SEO, paid ads, and AI-powered
                search optimization -- everything your business needs to win
                online, managed by a single team that knows San Antonio.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-light py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = serviceIconMap[service.iconName];
                const firstSentence =
                  service.tagline.split(/(?<=[.!?])\s/)[0] || service.tagline;

                const image = serviceImages[service.slug];

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-light-surface shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
                  >
                    {/* Image strip */}
                    {image && (
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={image}
                          alt={`${service.title} for San Antonio businesses`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(255,255,255,0.4) 60%, #ffffff 100%)",
                          }}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 pt-5">
                      {Icon && (
                        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-service-bg border border-icon-service-border text-primary ${image ? "-mt-12 relative z-10 shadow-sm" : "mb-5"}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      )}
                      <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray mb-4">
                        {firstSentence}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
