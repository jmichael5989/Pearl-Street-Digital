import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { getAllIndustries } from "@/lib/industries-data";

const industryImages: Record<string, string> = {
  restaurants: "/images/industries/restaurants.jpg",
  beauty: "/images/industries/beauty.jpg",
  auto: "/images/industries/auto.jpg",
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Industries We Serve San Antonio | Rank Point Media",
  description:
    "Digital marketing and website design for San Antonio restaurants, salons, barber shops, and auto repair businesses. Industry-specific strategies that drive real results.",
  openGraph: {
    title: "Industries We Serve San Antonio | Rank Point Media",
    description:
      "Digital marketing and website design for San Antonio restaurants, salons, barber shops, and auto repair businesses. Industry-specific strategies that drive real results.",
    url: "https://rankpointmedia.com/industries",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve San Antonio | Rank Point Media",
    description:
      "Digital marketing and website design for San Antonio restaurants, salons, barber shops, and auto repair businesses.",
  },
  alternates: { canonical: "https://rankpointmedia.com/industries" },
};

export default function IndustriesPage() {
  const industries = getAllIndustries();

  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve San Antonio",
    description:
      "Digital marketing and website design for San Antonio restaurants, salons, barber shops, and auto repair businesses.",
    url: "https://rankpointmedia.com/industries",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((industry, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://rankpointmedia.com/industries/${industry.slug}`,
        name: industry.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
                Industries We Serve
              </span>
              <h1 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Marketing That Understands Your Industry
              </h1>
              <p className="mt-5 text-lg text-gray leading-relaxed">
                Every industry has different customers, different search
                patterns, and different conversion triggers. We build strategies
                that match how your customers actually find and choose
                businesses like yours in San Antonio.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="bg-light py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => {
                const image = industryImages[industry.slug];
                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.1)]"
                  >
                    {image && (
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={image}
                          alt=""
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
                    <div className="p-8 pt-5">
                      <h3 className="font-heading text-xl font-bold text-dark mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray mb-4">
                        {industry.heroSubtitle.split(".")[0]}.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent">
                        View solutions
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
