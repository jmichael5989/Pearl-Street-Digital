import Image from "next/image";
import Link from "next/link";
import DarkHero from "@/components/heroes/DarkHero";
import type { CaseStudy } from "@/lib/case-studies-data";

/**
 * Case study detail template. Editorial register matching the locked
 * homepage / About / Pricing / /services / 8 service detail pages.
 *
 * Replaces the prior pre-pivot template (bespoke navy hero band on
 * bg-primary instead of the locked DarkHero component, font-bold serif
 * headings throughout, brass vanity-metric tiles in the hero band that
 * directly violated .impeccable.md anti-reference 2 + the brass-as-fill
 * ban from §4, rounded-2xl shadow-2xl hero image with negative-margin
 * overlap (boutique-agency anti-reference), bg-white outcome cards,
 * rounded-full service chips, and a closing bg-primary CTA band that
 * duplicated what the PreFooterCTA already drives on every inner page).
 *
 * Composition now:
 *   01 DarkHero (kicker = client name + industry, headline =
 *     outcomeHeadline, subheadline pulled from summary first sentence,
 *     primary CTA = Book a consultation → /#talk-to-us, secondary CTA
 *     = More case studies → /case-studies). No metrics in hero — the
 *     facts list lives in section 02 to keep the hero clean.
 *   Hero image — full-width editorial photo with typographic caption.
 *   02 At a glance — typographic facts list (label / value rows) +
 *     summary paragraph. heroMetrics data preserved, displayed
 *     editorially without brass-on-numbers fill.
 *   03 The challenge — narrative paragraph at 65ch.
 *   04 Our approach — narrative + services tagged inline as italic
 *     graphite caption (no rounded-full chips).
 *   05 What we delivered — outcomes as numbered hairline-divided
 *     editorial rows (FAQ-style pattern), each row is title + body.
 *   06 In their words — pull-quote (conditional) in italic Source Serif
 *     with named-and-attributed citation. Left-aligned per editorial
 *     register; the prior centered treatment broke pattern with the
 *     rest of the site.
 *
 * Closing CTA band dropped — PreFooterCTA already covers the
 * /#talk-to-us prompt on every inner page.
 */
export default function CaseStudyDetailTemplate({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  // First sentence of summary used as DarkHero subhead so the hero
  // stays single-screen-readable without truncating the full summary
  // (which appears in section 02).
  const summaryFirstSentence =
    caseStudy.summary.split(/(?<=[.!?])\s/)[0] ?? caseStudy.summary;

  return (
    <>
      {/* 01 — DarkHero */}
      <DarkHero
        kicker={`${caseStudy.industry.toUpperCase()} · ${caseStudy.client.toUpperCase()}`}
        headline={caseStudy.outcomeHeadline}
        subheadline={summaryFirstSentence}
        primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
        secondaryCta={{ label: "More case studies", href: "/case-studies" }}
        showMockups={false}
      />

      {/* Hero image — editorial transition between hero and content */}
      <section
        className="bg-light"
        style={{
          paddingTop: "clamp(48px, 8vh, 96px)",
          paddingBottom: "clamp(24px, 4vh, 48px)",
        }}
      >
        <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
          <figure>
            <div className="relative w-full overflow-hidden border border-border bg-light-surface" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={caseStudy.heroImageUrl}
                alt={caseStudy.heroImageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className="mt-3 font-body italic"
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.5,
                color: "var(--color-gray)",
              }}
            >
              {caseStudy.heroImageAlt}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 02 — At a glance (facts list + summary) */}
      <section
        aria-labelledby="cs-overview-heading"
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
                02
              </span>
              &nbsp;/&nbsp; At a glance
            </div>
          </header>

          <h2
            id="cs-overview-heading"
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
            What shipped, in numbers.
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            {/* Facts list — typographic label/value rows, hairline-divided */}
            <dl className="border-t border-border">
              {caseStudy.heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                >
                  <dt
                    className="font-body text-xs font-semibold uppercase"
                    style={{
                      letterSpacing: "0.12em",
                      color: "var(--color-gray)",
                    }}
                  >
                    {m.label}
                  </dt>
                  <dd
                    className="font-heading italic text-text"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Summary paragraph */}
            <p
              className="font-body"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-brand-text)",
                maxWidth: "65ch",
              }}
            >
              {caseStudy.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 03 — The challenge */}
      <section
        aria-labelledby="cs-challenge-heading"
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
                03
              </span>
              &nbsp;/&nbsp; The challenge
            </div>
          </header>

          <h2
            id="cs-challenge-heading"
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
            What we started with.
          </h2>

          <p
            className="mt-8 font-body"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              maxWidth: "65ch",
            }}
          >
            {caseStudy.challenge}
          </p>
        </div>
      </section>

      {/* 04 — Our approach */}
      <section
        aria-labelledby="cs-approach-heading"
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
                04
              </span>
              &nbsp;/&nbsp; Our approach
            </div>
          </header>

          <h2
            id="cs-approach-heading"
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
            What we built.
          </h2>

          <p
            className="mt-8 font-body"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              maxWidth: "65ch",
            }}
          >
            {caseStudy.approach}
          </p>

          {/* Services as italic graphite caption — no rounded-full chips */}
          <p
            className="mt-6 font-body italic"
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.5,
              color: "var(--color-gray)",
            }}
          >
            Services: {caseStudy.services.join(", ")}.
          </p>
        </div>
      </section>

      {/* 05 — What we delivered (outcomes as numbered hairline rows) */}
      <section
        aria-labelledby="cs-outcomes-heading"
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
                05
              </span>
              &nbsp;/&nbsp; What we delivered
            </div>
          </header>

          <h2
            id="cs-outcomes-heading"
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
            The outcomes.
          </h2>

          <ol
            className="border-t border-border"
            style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
          >
            {caseStudy.outcomes.map((outcome, idx) => (
              <li
                key={outcome.title}
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
                  05.{["i", "ii", "iii", "iv", "v", "vi"][idx]}
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
                    {outcome.title}
                  </h3>
                  <p
                    className="mt-2 font-body"
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--color-brand-text)",
                      maxWidth: "65ch",
                      margin: "0.5rem 0 0 0",
                    }}
                  >
                    {outcome.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — In their words (pull quote, conditional) */}
      {caseStudy.pullQuote && (
        <section
          aria-labelledby="cs-quote-heading"
          className="bg-light border-t border-border"
          style={{
            paddingTop: "clamp(72px, 12vh, 144px)",
            paddingBottom: "clamp(72px, 12vh, 144px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            <header className="mb-6">
              <div
                id="cs-quote-heading"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"
              >
                <span className="font-heading text-base font-normal italic mr-1">
                  06
                </span>
                &nbsp;/&nbsp; In their words
              </div>
            </header>

            <blockquote
              className="font-heading text-text italic"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                fontWeight: 400,
                maxWidth: "32ch",
                margin: 0,
              }}
            >
              &ldquo;{caseStudy.pullQuote.text}&rdquo;
            </blockquote>

            <cite
              className="mt-6 block font-body text-sm not-italic"
              style={{
                paddingTop: "16px",
                borderTop: "1px solid var(--color-border)",
                color: "var(--color-gray)",
                maxWidth: "32ch",
              }}
            >
              <span className="font-medium" style={{ color: "var(--color-text)" }}>
                {caseStudy.pullQuote.author}
              </span>
              {" · "}
              {caseStudy.pullQuote.title}
            </cite>
          </div>
        </section>
      )}

      {/* Back-to-index navigation — small footer link */}
      <section
        className="bg-light border-t border-border"
        style={{ paddingBlock: "clamp(40px, 6vh, 64px)" }}
      >
        <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
          >
            <span aria-hidden="true">&larr;</span>
            All case studies
          </Link>
        </div>
      </section>
    </>
  );
}
