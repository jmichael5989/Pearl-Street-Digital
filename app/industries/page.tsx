import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import { industries } from "@/lib/industries-data";

/**
 * Industries index page. Inner-page DarkHero + numbered editorial TOC
 * mirroring /services and /case-studies index patterns.
 *
 * Replaces the prior pre-pivot index that displayed six hardcoded
 * industry cards (medical, legal, home services, med spas, real
 * estate, restaurants/hospitality) — three of which had no detail
 * page built and routed users to /contact instead. The honest TOC
 * shows only the three industries with real detail pages
 * (restaurants, beauty, auto) sourced from lib/industries-data.ts;
 * the others can be added when their detail pages are built.
 */

export const metadata: Metadata = {
  title: "Industries We Serve San Antonio | Rank Point Media",
  description:
    "Website design and digital marketing for San Antonio restaurants, beauty businesses, and auto repair shops. Industry-specific strategies that drive real results.",
  openGraph: {
    title: "Industries We Serve San Antonio | Rank Point Media",
    description:
      "Website design and digital marketing for San Antonio restaurants, beauty businesses, and auto repair shops.",
    url: "https://rankpointmedia.com/industries",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve San Antonio | Rank Point Media",
    description:
      "Website design and digital marketing for San Antonio restaurants, beauty businesses, and auto repair shops.",
  },
  alternates: { canonical: "https://rankpointmedia.com/industries" },
};

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustriesPage() {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve San Antonio",
    description:
      "Website design and digital marketing for San Antonio restaurants, beauty businesses, and auto repair shops.",
    url: "https://rankpointmedia.com/industries",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((industry, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: industry.title,
        url: `https://rankpointmedia.com/industries/${industry.slug}`,
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
        <DarkHero
          kicker="INDUSTRIES"
          headline="Marketing that fits how your customers actually search."
          subheadline="Every industry has different customers, different search patterns, and different conversion triggers. We build the strategy around how the work actually moves in your category."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />

        {/* Industries TOC */}
        <section
          aria-labelledby="industries-toc-heading"
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
                &nbsp;/&nbsp; Industries we serve
              </div>
            </header>

            {/* H2 */}
            <h2
              id="industries-toc-heading"
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
              Where we&rsquo;ve done the work.
            </h2>

            {/* Lede */}
            <p
              className="mt-5 font-body"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-brand-text)",
                maxWidth: "58ch",
                marginBottom: "clamp(48px, 6vh, 64px)",
              }}
            >
              Three categories with real detail pages today. We work with
              other industries too &mdash; if yours isn&rsquo;t listed,{" "}
              <Link
                href="/#talk-to-us"
                className="font-medium text-accent underline underline-offset-4 hover:text-text"
              >
                book a call
              </Link>{" "}
              and we&rsquo;ll talk.
            </p>

            {/* Numbered editorial TOC */}
            <ol className="grid grid-cols-1 border-t border-border lg:grid-cols-2 lg:gap-x-12">
              {industries.map((industry, idx) => (
                <li
                  key={industry.slug}
                  className="grid grid-cols-1 gap-y-3 border-b border-border py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-x-6 lg:py-9"
                >
                  <span
                    className="font-heading italic text-accent"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      paddingTop: "0.35rem",
                    }}
                  >
                    02.{romanNumerals[idx]}
                  </span>
                  <div>
                    <h3
                      className="font-heading text-text"
                      style={{
                        fontSize: "1.375rem",
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      {industry.title}
                    </h3>
                    <p
                      className="mt-2 font-body"
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.58,
                        color: "var(--color-brand-text)",
                        maxWidth: "58ch",
                        margin: "0.5rem 0 0 0",
                      }}
                    >
                      {industry.heroSubtitle}
                    </p>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                      aria-label={`Read more about ${industry.title}`}
                    >
                      Read more
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
