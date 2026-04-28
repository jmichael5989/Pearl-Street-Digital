"use client";

import { useState } from "react";
import Link from "next/link";
import FeatureIndicator from "@/components/icons/FeatureIndicator";

/**
 * Pricing section. Editorial rebuild matching the homepage register
 * locked at .impeccable.md Resolved Decisions §4 (palette pivot) and
 * the Pricing Transparency design principle.
 *
 * Replaces the prior centered template-family layout (centered bold-sans
 * "Simple Pricing. No Surprises." H2, bg-white shell, max-w-7xl
 * container, rounded-2xl shadow-sm cards, font-extrabold serif prices,
 * pill toggle with bg-primary fill and InfoIcon tooltips, brass-soft
 * "MOST POPULAR" chip fill, hover:border-primary, and a Custom Services
 * trio that ended each tile with "Call for Pricing" / "Contact Us" — the
 * single biggest brief violation per the 2026-04-25 layout audit since
 * pricing transparency is the load-bearing trust trigger for the primary
 * persona).
 *
 * Composition now:
 *   - Warm-white surface, canonical site shell (max-w-[82rem]).
 *   - Numbered editorial eyebrow "02 / Pricing".
 *   - Serif H2 weight 400, left-aligned, max-width 24ch.
 *   - Graphite lede max-width 58ch.
 *   - Engagement-model toggle as a text affordance — brass underline on
 *     active, no pill, no tooltip. The distinction is visible in the
 *     lede, not hidden behind hover.
 *   - Three pricing cards: hairline border-border, no rounded-2xl, no
 *     shadow. Featured Business card stays dark navy with brass-soft 1px
 *     border; "Most popular" badge is brass-soft outlined (not filled,
 *     per CLAUDE.md "brass never as a card or chip fill"). Prices are
 *     serif weight 400, not font-extrabold. Card CTAs anchor to the
 *     homepage Cal.com widget at /#talk-to-us so the page has one verb
 *     with the homepage hero.
 *   - Phase-disclosure paragraph below the cards per .impeccable.md
 *     Early-stage Disclosure Posture: "one additional line may appear on
 *     the pricing page, phrased so the defense rests on the durable
 *     positioning."
 *
 * The Custom Services trio (Marketing / Branding / Custom Web Apps) was
 * removed entirely — those capabilities are already covered in the
 * regular services lineup (Social Media, Brand Management, Custom AI
 * Solutions in services-data.ts and ServicesSection's TOC), so the
 * pricing-page tiles were redundant content with the additional cost of
 * a transparency violation. Relocation to /services would have created
 * duplicates with the existing service pages.
 */

interface PlanFeature {
  text: string;
  emphasized?: boolean;
}

interface Plan {
  name: string;
  buildOnlyName?: string;
  price: string;
  hostedPrice: string;
  hostingAddon: string;
  pages: string;
  buildOnlyPages?: string;
  featured: boolean;
  features: PlanFeature[];
  hostedFeatures: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    buildOnlyName: "Landing Page",
    price: "$500",
    hostedPrice: "$99",
    hostingAddon: "12-month term",
    pages: "Up to 3 pages",
    buildOnlyPages: "1 page",
    featured: false,
    features: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO setup", emphasized: true },
      { text: "Contact form integration" },
      { text: "2 revision rounds" },
    ],
    hostedFeatures: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO setup", emphasized: true },
      { text: "Contact form integration" },
      { text: "Unlimited edits" },
      { text: "Managed hosting and SSL", emphasized: true },
      { text: "Monthly backups and security updates" },
      { text: "Ongoing maintenance" },
    ],
  },
  {
    name: "Business",
    price: "$1,000",
    hostedPrice: "$149",
    hostingAddon: "12-month term",
    pages: "Up to 5 pages",
    buildOnlyPages: "Up to 3 pages",
    featured: true,
    features: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO setup" },
      { text: "Contact form integration" },
      { text: "Google Analytics installation", emphasized: true },
      { text: "3 revision rounds" },
    ],
    hostedFeatures: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO setup" },
      { text: "Contact form integration" },
      { text: "Google Analytics installation", emphasized: true },
      { text: "Unlimited edits" },
      { text: "Managed hosting and SSL" },
      { text: "Monthly backups and security updates" },
      { text: "Uptime monitoring", emphasized: true },
      { text: "Ongoing maintenance" },
    ],
  },
  {
    name: "Growth",
    price: "$1,500",
    hostedPrice: "$249",
    hostingAddon: "12-month term",
    pages: "Up to 10 pages",
    buildOnlyPages: "Up to 6 pages",
    featured: false,
    features: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO with schema markup", emphasized: true },
      { text: "Contact form integration" },
      { text: "Google Analytics installation" },
      { text: "Social media integrations", emphasized: true },
      { text: "4 revision rounds" },
    ],
    hostedFeatures: [
      { text: "Custom-designed responsive website" },
      { text: "Full on-page SEO with schema markup", emphasized: true },
      { text: "Contact form integration" },
      { text: "Google Analytics installation" },
      { text: "Social media integrations", emphasized: true },
      { text: "Unlimited edits" },
      { text: "Managed hosting and SSL" },
      { text: "Monthly backups and security updates" },
      { text: "Uptime monitoring and priority support", emphasized: true },
      { text: "Ongoing maintenance" },
    ],
  },
];

function PricingCard({ plan, hosted }: { plan: Plan; hosted: boolean }) {
  const displayPrice = hosted ? plan.hostedPrice : plan.price;
  const displayFeatures = hosted ? plan.hostedFeatures : plan.features;
  const displayName = hosted ? plan.name : plan.buildOnlyName || plan.name;
  const displayPages = hosted
    ? plan.pages
    : plan.buildOnlyPages || plan.pages;
  const priceLabel = hosted ? "/month" : "one-time";

  if (plan.featured && hosted) {
    return (
      <div className="relative flex h-full flex-col border border-accent-dark bg-brand-dark p-8 pt-14 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:-translate-y-[3px]">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center border border-accent-dark bg-brand-dark px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-dark whitespace-nowrap">
          Most popular
        </span>
        <div className="mb-6">
          <h3
            className="font-heading text-text-on-dark"
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {displayName}
          </h3>
          <p className="mt-1 font-body text-sm text-text-on-dark-muted">
            {displayPages}
          </p>
        </div>
        <div className="mb-2 flex items-baseline gap-2">
          <span
            className="font-heading text-text-on-dark"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {displayPrice}
          </span>
          <span className="font-body text-sm text-text-on-dark-muted">
            {priceLabel}
          </span>
        </div>
        {hosted ? (
          <p className="mb-6 font-body text-sm font-medium text-accent-dark">
            {plan.hostingAddon}
          </p>
        ) : (
          <div className="mb-6" />
        )}
        <ul className="mb-8 flex-1 space-y-3">
          {displayFeatures.map((f) => (
            <li key={f.text} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-accent-dark">
                <FeatureIndicator />
              </span>
              <span
                className={`font-body text-sm text-text-on-dark-muted ${
                  f.emphasized ? "font-medium text-text-on-dark" : ""
                }`}
              >
                {f.text}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/#talk-to-us"
          className="block w-full border border-light bg-light py-3.5 text-center font-body text-sm font-medium tracking-[0.01em] text-text transition-[background-color,border-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-accent-dark hover:border-accent-dark hover:text-light"
        >
          Book a consultation
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col border border-border bg-light p-8 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]">
      <div className="mb-6">
        <h3
          className="font-heading text-text"
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {displayName}
        </h3>
        <p className="mt-1 font-body text-sm text-gray">{displayPages}</p>
      </div>
      <div className="mb-2 flex items-baseline gap-2">
        <span
          className="font-heading text-text"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.25rem)",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {displayPrice}
        </span>
        <span className="font-body text-sm text-gray">{priceLabel}</span>
      </div>
      {hosted ? (
        <p
          className="mb-6 font-body text-sm font-medium"
          style={{ color: "var(--color-brand-text)" }}
        >
          {plan.hostingAddon}
        </p>
      ) : (
        <div className="mb-6" />
      )}
      <ul className="mb-8 flex-1 space-y-3">
        {displayFeatures.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-accent">
              <FeatureIndicator />
            </span>
            <span
              className={`font-body text-sm ${
                f.emphasized ? "font-medium text-text" : ""
              }`}
              style={{ color: "var(--color-brand-text)" }}
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/#talk-to-us"
        className="block w-full border border-text bg-text py-3.5 text-center font-body text-sm font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
      >
        Book a consultation
      </Link>
    </div>
  );
}

export default function Pricing() {
  const [hosted, setHosted] = useState(true);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
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
            &nbsp;/&nbsp; Pricing
          </div>
        </header>

        {/* H2 */}
        <h2
          id="pricing-heading"
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
          What it costs. No surprises.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
          }}
        >
          Three plans, two engagement models.{" "}
          <strong className="font-medium text-text">Monthly hosting</strong>{" "}
          bundles everything we recommend on a 12-month term &mdash;
          hosting, security, backups, ongoing edits.{" "}
          <strong className="font-medium text-text">One-time build</strong>{" "}
          is a project handoff: you own the site and host it yourself
          after delivery.
        </p>

        {/* Engagement-model toggle — text affordance with brass underline on active */}
        <div className="mt-10 inline-flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em]">
          <button
            type="button"
            onClick={() => setHosted(true)}
            className={`pb-1 transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] ${
              hosted
                ? "border-b-2 border-accent text-text"
                : "border-b-2 border-transparent text-gray hover:text-text"
            }`}
            aria-pressed={hosted}
          >
            Monthly hosting
          </button>
          <button
            type="button"
            onClick={() => setHosted(false)}
            className={`pb-1 transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] ${
              !hosted
                ? "border-b-2 border-accent text-text"
                : "border-b-2 border-transparent text-gray hover:text-text"
            }`}
            aria-pressed={!hosted}
          >
            One-time build
          </button>
        </div>

        {/* Pricing cards */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch"
          style={{ marginTop: "clamp(40px, 5vh, 64px)" }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} hosted={hosted} />
          ))}
        </div>

        {/* Phase-disclosure — per .impeccable.md Early-stage Disclosure Posture */}
        <div className="mt-16 lg:mt-20 max-w-2xl">
          <p
            className="font-body italic"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
              paddingTop: "16px",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            We use AI agents to help build and scale our solutions, so we
            don&rsquo;t need the big staff a traditional agency requires
            &mdash; and we don&rsquo;t pass the cost onto you.
          </p>
        </div>
      </div>
    </section>
  );
}
