import Link from "next/link";

/**
 * Austin city-hub body. Replaces the generic CityPlaceholder for the
 * /areas/austin route, fleshing the page out from a thin placeholder
 * into a real city landing page per the City Expansion Playbook.
 *
 * Composition (numbered editorial motif, matching the rest of the site):
 *   01 — Where we work          (warm white)
 *   02 — Services               (parchment)
 *   03 — How working with us actually goes  (warm white)
 *   04 — The trade-off + CTA    (parchment)
 *
 * Copy posture:
 *   - Plainspoken; would survive the House Voice Test from .impeccable.md.
 *   - Acknowledges honestly that we are not local in Austin. The two-person
 *     spine is the value proposition; geography is the trade-off, named
 *     directly rather than performed around.
 *   - No invented testimonials. When a real, named Austin client agrees
 *     to be quoted, drop a quote section between sections 03 and 04 and
 *     remove the page-level robots:noindex in app/areas/austin/page.tsx.
 *   - No stock Austin photography. The page ships typographic-only by
 *     design, matching the homepage hero's posture.
 *
 * The page's outbound links route to existing service pages
 * (website-design, local-seo, ppc-google-ads) — service content stays
 * generic and location-flexible per the 2026-03-30 decision; the city
 * page provides the Austin framing.
 */
export default function AustinLanding() {
  return (
    <>
      {/* 01 — Where we work in Austin */}
      <section
        aria-labelledby="austin-where-heading"
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
            id="austin-where-heading"
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
            From San Antonio, north on I-35.
          </h2>

          <div
            className="mt-5 font-body flex flex-col gap-4"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              maxWidth: "62ch",
            }}
          >
            <p>
              Rank Point Media is based in San Antonio &mdash; about
              seventy-five miles south of downtown Austin. We take Austin
              clients selectively. When we do, we drive up.
            </p>
            <p>
              Most of the work happens on a screen. The bookend conversations
              &mdash; the kickoff, the meeting where you decide whether to
              actually hire us, an occasional launch debrief &mdash; work
              better at a table, and we drive up for those. East Austin,
              South Lamar, Mueller, Round Rock, Cedar Park, the Domain: an
              easy day from San Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — What we build for Austin small businesses */}
      <section
        id="services"
        aria-labelledby="austin-services-heading"
        className="bg-light-surface border-t border-border"
        style={{
          paddingTop: "clamp(72px, 12vh, 144px)",
          paddingBottom: "clamp(72px, 12vh, 144px)",
        }}
      >
        <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
          <header className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="font-heading text-base font-normal italic mr-1">
                02
              </span>
              &nbsp;/&nbsp; Services
            </div>
          </header>

          <h2
            id="austin-services-heading"
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
            Three services, all custom-coded.
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
            We do not run a feature factory. Three things, done well, for the
            small businesses we take on &mdash; the same three for Austin
            clients as for San Antonio.
          </p>

          <ol className="grid grid-cols-1 border-t border-border">
            {[
              {
                num: "i",
                title: "Custom websites",
                slug: "website-design",
                body: "Hand-coded in Next.js. No template, no page builder, no twenty-plugin WordPress stack. Faster than a templated site, easier to change, and yours to keep.",
              },
              {
                num: "ii",
                title: "Local SEO",
                slug: "local-seo",
                body: "Google Business Profile work, citations, on-page schema, the technical foundations that decide whether you appear in the local pack. Done the slow way, by the people writing the code.",
              },
              {
                num: "iii",
                title: "Google Ads",
                slug: "ppc-google-ads",
                body: "Search campaigns geo-targeted to the part of Austin you actually serve. Real budget recommendations, no agency markup buried in the management fee.",
              },
            ].map((service) => (
              <li
                key={service.slug}
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
                  02.{service.num}
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
                    {service.title}
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
                    {service.body}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                    aria-label={`Read more about ${service.title}`}
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

      {/* 03 — How working with us actually goes */}
      <section
        aria-labelledby="austin-how-heading"
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
                03
              </span>
              &nbsp;/&nbsp; How it works
            </div>
          </header>

          <h2
            id="austin-how-heading"
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
            You hire us, you get us.
          </h2>

          <div
            className="mt-5 font-body flex flex-col gap-4"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              maxWidth: "62ch",
            }}
          >
            <p>
              Every project at Rank Point Media is run by the two people
              whose names are on the door. Jon writes the code. Stacie
              designs and shoots the photography. There is no project
              manager who appears in week two, no junior who handles the
              pieces of your build we find boring, no overseas team copying
              our tickets at a lower cost.
            </p>
            <p>
              For Austin clients, the rhythm is the same as for our San
              Antonio work. A kickoff call &mdash; often in person, in
              Austin. A scoped quote in plain dollars within forty-eight
              hours. A four-week build. Real launches, not &ldquo;soft
              launches.&rdquo; After launch, the people who answer the phone
              are still the two of us.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — Why an SA agency for an Austin business + closer CTAs */}
      <section
        aria-labelledby="austin-tradeoff-heading"
        className="bg-light-surface border-t border-border"
        style={{
          paddingTop: "clamp(72px, 12vh, 144px)",
          paddingBottom: "clamp(72px, 12vh, 144px)",
        }}
      >
        <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
          <header className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="font-heading text-base font-normal italic mr-1">
                04
              </span>
              &nbsp;/&nbsp; The trade-off
            </div>
          </header>

          <h2
            id="austin-tradeoff-heading"
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
            Honest about the geography.
          </h2>

          <div
            className="mt-5 font-body flex flex-col gap-4"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              maxWidth: "62ch",
            }}
          >
            <p>
              Austin has its own agencies. Some of them are very good. Some
              of them charge what Austin agencies charge &mdash; which is to
              say, what Austin commercial real estate, Austin office leases,
              and Austin account-manager headcount cost.
            </p>
            <p>
              Our prices are San Antonio prices, run by two people. The
              seventy-five miles is the trade. If a four-week build done by
              the people you hired, at small-shop prices, with one drive up
              I-35 for the kickoff is a trade you would make &mdash; that is
              the conversation we want to have.
            </p>
          </div>

          {/* Closer CTAs — same pattern as the homepage hero */}
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <Link
              href="/#talk-to-us"
              className="font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
            >
              Book a consultation
            </Link>
            <Link
              href="/about"
              className="font-body inline-flex items-center gap-2.5 border border-text bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-text hover:text-light"
            >
              See how we work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
