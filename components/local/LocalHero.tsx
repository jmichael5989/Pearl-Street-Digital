/**
 * Matrix-page hero. Editorial section header (eyebrow "01 / Local
 * marketing") plus the H1 ("Local SEO for Dentists in Stone Oak")
 * plus a one-sentence subhead pulled from service.shortDesc. Two
 * CTAs: book a consultation anchoring to the homepage Cal.com embed
 * at /contact#talk-to-us, and a secondary outline link to /pricing.
 *
 * No motion. Matrix pages are SEO-conversion surface, not brand-
 * marketing surface. The H1 reads as a single line; the prior italic
 * split on the "for {vertical} in {neighborhood}" tail was retired
 * 2026-06-07 with the site-wide no-italics rule.
 */

import Link from "next/link";
import type { Service, Vertical, Neighborhood } from "@/lib/local-matrix/types";

type LocalHeroProps = {
  service: Service;
  vertical: Vertical;
  neighborhood: Neighborhood;
};

export default function LocalHero({ service, vertical, neighborhood }: LocalHeroProps) {
  return (
    <section
      aria-label={`${service.displayName} for ${vertical.displayNamePlural} in ${neighborhood.displayName}`}
      className="relative overflow-hidden bg-light"
      style={{
        paddingTop: "clamp(80px, 14vh, 160px)",
        paddingBottom: "clamp(48px, 8vh, 96px)",
      }}
    >
      <div className="relative mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        <header className="mb-12 lg:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal mr-1">
              01
            </span>
            &nbsp;/&nbsp; Local marketing
          </div>
        </header>

        <div className="flex flex-col gap-8 max-w-4xl">
          <h1
            className="font-heading text-text text-balance"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {service.displayName}{" "}
            <em className="font-normal not-italic">
              for {vertical.displayNamePlural} in {neighborhood.displayName}
            </em>
          </h1>

          <p
            className="font-body max-w-[52ch]"
            style={{
              fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)",
              lineHeight: 1.5,
              color: "var(--color-brand-text)",
              margin: 0,
            }}
          >
            {service.shortDesc}.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact#talk-to-us"
              className="font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
            >
              Book a consultation
            </Link>
            <Link
              href="/pricing"
              className="font-body inline-flex items-center gap-2.5 border border-text bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-text hover:text-light"
            >
              See our pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
