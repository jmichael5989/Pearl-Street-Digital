import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

const industriesList = [
  {
    title: "Medical & Dental Practices",
    description:
      "A single new patient is worth $3,000+ to your practice. We build the digital presence that keeps your schedule full and your reputation strong.",
  },
  {
    title: "Legal & Financial Services",
    description:
      "Your next client is searching \"attorney near me\" right now. We make sure your firm is the first result they see -- and the one they call.",
  },
  {
    title: "Home Services",
    description:
      "HVAC, plumbing, electrical, roofing. In a Texas summer, the homeowner who finds you first gets the job. We make sure that's you.",
  },
  {
    title: "Med Spas & Aesthetics",
    description:
      "Your clients research treatments online before they ever book. We position your brand as the premium choice in San Antonio's fastest-growing market.",
  },
  {
    title: "Real Estate & Property Management",
    description:
      "San Antonio added 24,000 new residents last year. We help agents, brokerages, and property managers capture demand in a market that won't slow down.",
  },
  {
    title: "Restaurants & Hospitality",
    description:
      "36.8 million visitors come to San Antonio every year. We help established restaurants and hospitality brands own the searches that drive reservations and bookings.",
  },
];

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
  robots: { index: false, follow: false },
};

export default function IndustriesPage() {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve San Antonio",
    description:
      "Digital marketing and website design for San Antonio medical, legal, home services, med spa, real estate, and hospitality businesses.",
    url: "https://rankpointmedia.com/industries",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industriesList.map((industry, i) => ({
        "@type": "ListItem",
        position: i + 1,
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
      <main>
        {/* Hero */}
        <section className="bg-white py-16 lg:py-24">
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
        <section className="bg-light py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industriesList.map((industry) => (
                <Link
                  key={industry.title}
                  href="/contact"
                  className="group rounded-2xl border border-border bg-light-surface shadow-sm p-10 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(20,184,166,0.15)]"
                >
                  <h3 className="font-heading text-xl font-bold text-dark mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray mb-5">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-base font-semibold text-accent transition-colors group-hover:text-accent">
                    Get a custom strategy
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
