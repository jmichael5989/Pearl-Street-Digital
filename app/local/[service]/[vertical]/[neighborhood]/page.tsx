import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/Footer";
import LocalHero from "@/components/local/LocalHero";
import LocalSection from "@/components/local/LocalSection";
import LocalFAQ from "@/components/local/LocalFAQ";
import LocalCTA from "@/components/local/LocalCTA";
import DraftStatusBanner from "@/components/local/DraftStatusBanner";
import {
  getAllCombinations,
  getPageData,
  getPluralLower,
} from "@/lib/local-matrix/matrix";
import type {
  ServiceSlug,
  VerticalSlug,
  NeighborhoodSlug,
} from "@/lib/local-matrix/types";

/**
 * Matrix detail page. Pre-renders all 24 valid {service, vertical,
 * neighborhood} tuples at build time. Pages are noindex,nofollow by
 * default; the metadata flips to index,follow only when the
 * MATRIX_PAGES_LIVE env var is exactly the string "true". The sitemap
 * gates on the same env var so the two stay in sync.
 *
 * Section order per the locked spec:
 *   01 Hero  →  02 Neighborhood reality  →  03 Vertical context (altBg)
 *   04 Our approach  →  05 What's included (altBg)  →  06 Questions
 *   Related block (between 06 and 07)
 *   07 Talk to us (navy)
 */

type PageParams = {
  service: ServiceSlug;
  vertical: VerticalSlug;
  neighborhood: NeighborhoodSlug;
};

export function generateStaticParams(): PageParams[] {
  return getAllCombinations();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { service, vertical, neighborhood } = await params;
  const data = getPageData(service, vertical, neighborhood);
  if (!data) return {};

  const title = `${data.service.displayName} for ${data.vertical.displayNamePlural} in ${data.neighborhood.displayName} | Rank Point Media`;
  const description = `${data.service.shortDesc} for ${getPluralLower(data.vertical.slug)} in ${data.neighborhood.displayName}, San Antonio. Two-person agency, no account managers.`;
  const url = `https://rankpointmedia.com/local/${service}/${vertical}/${neighborhood}`;

  // MATRIX_PAGES_LIVE must be exactly the string "true" to make the
  // matrix indexable. Anything else (undefined, "false", "1", etc.)
  // keeps the page noindex,nofollow.
  const live = process.env.MATRIX_PAGES_LIVE === "true";

  return {
    title,
    description,
    robots: {
      index: live,
      follow: live,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Rank Point Media",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

const ROMAN_NUMERALS = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii.", "ix.", "x."];

export default async function LocalMatrixDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { service, vertical, neighborhood } = await params;
  const data = getPageData(service, vertical, neighborhood);
  if (!data) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rank Point Media",
    url: `https://rankpointmedia.com/local/${service}/${vertical}/${neighborhood}`,
    description: data.service.shortDesc,
    areaServed: {
      "@type": "Place",
      name: `${data.neighborhood.displayName}, San Antonio, TX`,
    },
    serviceType: data.service.displayName,
    audience: {
      "@type": "BusinessAudience",
      audienceType: data.vertical.displayName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "+1-210-305-7372",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main>
        <LocalHero
          service={data.service}
          vertical={data.vertical}
          neighborhood={data.neighborhood}
        />

        {/* 02 — Neighborhood reality */}
        <LocalSection
          eyebrow={`02 / The ${data.neighborhood.displayName} reality`}
          heading={`Why ${data.neighborhood.displayName} ${getPluralLower(data.vertical.slug)} are different.`}
        >
          <p
            className="font-body mb-6"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            {data.introLine}
          </p>
          <p
            className="font-body"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            {data.neighborhoodParagraph}
          </p>
        </LocalSection>

        {/* 03 — Vertical context (altBg) */}
        <LocalSection
          eyebrow="03 / The vertical context"
          heading={`What running a ${data.vertical.singularNoun} in San Antonio actually involves.`}
          altBg
        >
          <p
            className="font-body mb-6"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            {data.verticalParagraph}
          </p>
          <p
            className="font-body"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            {data.closingLine}
          </p>
        </LocalSection>

        {/* 04 — Our approach */}
        <LocalSection
          eyebrow="04 / How we approach this"
          heading={`Our approach to ${data.service.displayName} for ${data.vertical.displayNamePlural}.`}
        >
          <p
            className="font-body"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            {data.serviceVerticalParagraph}
          </p>
        </LocalSection>

        {/* 05 — What's included (altBg) */}
        <LocalSection
          eyebrow="05 / What's included"
          heading="What you get."
          altBg
        >
          <ol className="list-none m-0 p-0">
            {data.service.deliverables.map((deliverable, i) => (
              <li
                key={i}
                className="flex gap-5 items-baseline py-4 border-b border-border last:border-b-0"
              >
                <span
                  className="font-heading italic text-accent shrink-0"
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 400,
                    minWidth: "2ch",
                  }}
                >
                  {ROMAN_NUMERALS[i] ?? `${i + 1}.`}
                </span>
                <span
                  className="font-body text-text"
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.55,
                  }}
                >
                  {deliverable}
                </span>
              </li>
            ))}
          </ol>
          <p
            className="font-body mt-8"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            Starting at ${data.service.startingPrice}/mo.{" "}
            <Link
              href="/pricing"
              className="text-accent underline decoration-accent decoration-1 underline-offset-4 hover:text-text"
            >
              See full pricing
            </Link>
            .
          </p>
        </LocalSection>

        {/* 06 — Questions */}
        <LocalFAQ
          eyebrow="06 / Common questions"
          heading="Common questions, straight answers."
          faqs={data.faqs}
        />

        {/* Related block (between FAQ and CTA) */}
        <section
          className="bg-light border-t border-border"
          style={{
            paddingTop: "clamp(48px, 8vh, 96px)",
            paddingBottom: "clamp(48px, 8vh, 96px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              Related
            </div>
            <ul className="list-none m-0 p-0">
              {data.related.map((link, i) => (
                <li
                  key={i}
                  className="border-t border-border first:border-t-0 py-3"
                >
                  <Link
                    href={link.href}
                    className="font-body text-text underline decoration-accent decoration-1 underline-offset-4 hover:text-accent transition-colors"
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 07 — Talk to us (navy) */}
        <LocalCTA
          eyebrow="07 / Talk to us"
          heading="An hour with Jon. Pick a time."
          copy={data.ctaCopy}
        />

        <DraftStatusBanner />
      </main>
      <Footer />
    </>
  );
}
