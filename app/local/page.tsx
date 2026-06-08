import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import DraftStatusBanner from "@/components/local/DraftStatusBanner";
import {
  getAllCombinations,
  getPageData,
} from "@/lib/local-matrix/matrix";
import type { ServiceSlug } from "@/lib/local-matrix/types";

/**
 * Matrix index. Lists all 24 detail routes grouped by service. Plain
 * H2 group headings and plain-text links per the owner-approved
 * Sample D adjustment.
 *
 * Always noindex regardless of MATRIX_PAGES_LIVE — the directory page
 * exists for owner navigation and AI-search discovery, not crawl
 * coverage. The matrix index also stays out of the public sitemap.
 */

export const metadata: Metadata = {
  title: "Local Marketing Matrix | Rank Point Media",
  description:
    "Directory of programmatic local marketing pages by service, vertical, and San Antonio neighborhood.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://rankpointmedia.com/local" },
};

const SERVICE_ORDER: ServiceSlug[] = [
  "local-seo",
  "website-design",
  "ppc-google-ads",
  "social-media",
];

export default function LocalMatrixIndexPage() {
  const tuples = getAllCombinations();

  // Group tuples by service for the index display.
  const groups = SERVICE_ORDER.map((serviceSlug) => {
    const serviceTuples = tuples.filter((t) => t.service === serviceSlug);
    const entries = serviceTuples
      .map((t) => {
        const data = getPageData(t.service, t.vertical, t.neighborhood);
        if (!data) return null;
        return {
          href: `/local/${t.service}/${t.vertical}/${t.neighborhood}`,
          text: `${data.service.displayName} for ${data.vertical.displayNamePlural} in ${data.neighborhood.displayName}`,
        };
      })
      .filter((e): e is { href: string; text: string } => e !== null);
    const serviceDisplayName = entries[0]?.text.split(" for ")[0] ?? serviceSlug;
    return { serviceSlug, serviceDisplayName, entries };
  });

  return (
    <>
      <main>
        <section
          className="bg-light border-b border-border"
          style={{
            paddingTop: "clamp(80px, 14vh, 160px)",
            paddingBottom: "clamp(48px, 8vh, 96px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            <header className="mb-12 lg:mb-16">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="font-heading text-base font-normal mr-1">
                  00
                </span>
                &nbsp;/&nbsp; Matrix
              </div>
            </header>
            <h1
              className="font-heading text-text text-balance"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                margin: 0,
                maxWidth: "20ch",
              }}
            >
              Local marketing{" "}
              <em className="font-normal not-italic">across San Antonio</em>.
            </h1>
            <p
              className="font-body mt-8 max-w-[52ch]"
              style={{
                fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)",
                lineHeight: 1.5,
                color: "var(--color-brand-text)",
                margin: 0,
              }}
            >
              {tuples.length} pages covering {SERVICE_ORDER.length} services across
              three verticals and two neighborhoods. Each page is written for the
              specific combination, not generated from a template alone.
            </p>
          </div>
        </section>

        {groups.map((group, idx) => (
          <section
            key={group.serviceSlug}
            className={`${
              idx % 2 === 0 ? "bg-light" : "bg-light-surface"
            } border-t border-border`}
            style={{
              paddingTop: "clamp(48px, 8vh, 96px)",
              paddingBottom: "clamp(48px, 8vh, 96px)",
            }}
          >
            <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
              <h2
                className="font-heading text-text"
                style={{
                  fontSize: "1.75rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {group.serviceDisplayName}
              </h2>
              <ul className="mt-6 grid gap-x-12 gap-y-2 sm:grid-cols-2">
                {group.entries.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="font-body text-text underline decoration-accent decoration-1 underline-offset-4 hover:text-accent transition-colors"
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {entry.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
        <DraftStatusBanner />
      </main>
      <Footer />
    </>
  );
}
