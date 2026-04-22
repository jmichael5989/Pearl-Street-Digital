import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { services } from "@/lib/services-data";
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
      <Footer />
    </>
  );
}
