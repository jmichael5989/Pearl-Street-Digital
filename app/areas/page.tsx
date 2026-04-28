/**
 * Service Areas hub. Lists the cities Rank Point Media serves with a
 * link to each city's landing page (or the homepage in San Antonio's
 * case, since the homepage is the SA experience).
 *
 * Per project_city_expansion.md (City Expansion Playbook), the routes
 * for Austin / Houston / Dallas are scaffolded as placeholders — they
 * are `noindex` until real content lands (city-specific case studies,
 * local proof points, unique copy distinct from the SA pages). This
 * hub page is also `noindex` until at least two city sub-pages are
 * fully launched, so it doesn't link to thin pages from an indexable
 * surface.
 *
 * Before flipping to indexable:
 *   - At least two of the three city sub-pages are fully populated.
 *   - Each city sub-page has a real testimonial or case study.
 *   - Remove `robots: { index: false }` from metadata below.
 */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";

export const metadata: Metadata = {
  title: "Service Areas | Rank Point Media",
  description:
    "Custom-coded websites and digital marketing for small businesses across Texas. Based in San Antonio; expanding to Austin, Houston, and Dallas.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://rankpointmedia.com/areas" },
};

interface AreaCard {
  city: string;
  href: string;
  status: "Live" | "Coming soon";
  body: string;
}

const areas: AreaCard[] = [
  {
    city: "San Antonio",
    href: "/",
    status: "Live",
    body: "Our home base. Two people building websites and running digital marketing for small businesses across the SA metro and surrounding cities.",
  },
  {
    city: "Austin",
    href: "/areas/austin",
    status: "Coming soon",
    body: "Expanding into Austin as we take on clients in the Hill Country and central Texas. Get in touch to be among the first.",
  },
  {
    city: "Houston",
    href: "/areas/houston",
    status: "Coming soon",
    body: "Serving Houston and the Gulf Coast region. Reach out if you're a Houston small business — we'd like to talk.",
  },
  {
    city: "Dallas",
    href: "/areas/dallas",
    status: "Coming soon",
    body: "DFW expansion in the works. Same lean two-person model, no account-manager markup, custom-coded sites only.",
  },
];

export default function AreasPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="SERVICE AREAS"
          headline="Texas small businesses, served from San Antonio."
          subheadline="We're based in San Antonio and currently expanding across Texas. As we add cities, dedicated landing pages will live below."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "See services", href: "/services" }}
          showMockups={false}
        />

        <section
          aria-labelledby="areas-heading"
          className="bg-light border-t border-border"
          style={{
            paddingTop: "clamp(72px, 12vh, 144px)",
            paddingBottom: "clamp(72px, 12vh, 144px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            <header className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="font-heading text-base font-normal italic mr-1">
                  01
                </span>
                &nbsp;/&nbsp; Where we work
              </div>
            </header>

            <h2
              id="areas-heading"
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
              San Antonio first. Texas next.
            </h2>

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
              Our home market is San Antonio &mdash; that&rsquo;s where the
              two of us live and where most of our clients are. We&rsquo;re
              opening dedicated city landing pages as we take on work
              elsewhere in Texas, starting with Austin, Houston, and Dallas.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => (
                <Link
                  key={area.city}
                  href={area.href}
                  className="flex h-full flex-col border border-border bg-light p-6 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
                >
                  <h3
                    className="font-heading text-text"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    {area.city}
                  </h3>
                  <p
                    className="mt-3 mb-6 flex-1 font-body text-sm leading-[1.55]"
                    style={{ color: "var(--color-brand-text)" }}
                  >
                    {area.body}
                  </p>
                  <span className="inline-flex w-fit items-center border border-border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray">
                    {area.status}
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
