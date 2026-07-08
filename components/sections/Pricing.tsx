"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Pricing section — three-color redesign (Phase B).
 * Re-skin of the prior navy/brass Pricing.tsx to the .rpm3 design system,
 * matching public/mocks/hero/pricing.html verbatim.
 *
 * KEEP: plans[] data (Starter/Business featured/Growth; hostedPrice/price;
 * hostingAddon; pages/buildOnlyPages; features/hostedFeatures with emphasized).
 * KEEP: const [hosted, setHosted] = useState(true).
 * DROP: FeatureIndicator import, all Tailwind/navy tokens, inline font-size styles.
 *
 * LOCKED BRAND RULE: "Most popular" badge renders ONLY when plan.featured === true
 * AND hosted === true (Business tier, Monthly hosting). Never visible in build mode.
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

interface TierProps {
  plan: Plan;
  hosted: boolean;
}

function PricingTier({ plan, hosted }: TierProps) {
  const name = hosted ? plan.name : (plan.buildOnlyName ?? plan.name);
  const pages = hosted ? plan.pages : (plan.buildOnlyPages ?? plan.pages);
  const price = hosted ? plan.hostedPrice : plan.price;
  const unit = hosted ? "/month" : "one-time";
  const term = hosted ? plan.hostingAddon : "";
  const feats = hosted ? plan.hostedFeatures : plan.features;

  return (
    <div className={"tier" + (plan.featured ? " featured" : "")}>
      {/* LOCKED BRAND RULE: badge shown ONLY when featured AND hosted (Business tier,
          Monthly hosting tab). Never rendered in build mode. */}
      {plan.featured && hosted && (
        <span className="tier-badge">Most popular</span>
      )}
      <h3>{name}</h3>
      <p className="tier-pages">{pages}</p>
      <div className="tier-price-row">
        <span className="tier-price">{price}</span>
        <span className="tier-unit">{unit}</span>
      </div>
      {/* tier-term holds layout height even when empty in build mode */}
      <p className="tier-term" style={{ visibility: term ? "visible" : "hidden" }}>
        {term || " "}
      </p>
      <ul className="tier-feats">
        {feats.map((f) => (
          <li key={f.text} className={f.emphasized ? "emph" : undefined}>
            {f.text}
          </li>
        ))}
      </ul>
      <Link className="tier-cta" href="/contact#talk-to-us">
        Book a consultation
      </Link>
    </div>
  );
}

export default function Pricing() {
  const [hosted, setHosted] = useState(true);

  return (
    <section id="pricing">
      <div className="wrap">
        <header className="price-head">
          {/* Numbered kicker: spine-outline numeral + label, matching the mock's
              <span class="spine-outline" style="font-size:1em">02</span> idiom */}
          <p className="kicker appear">
            <span
              className="spine spine-outline"
              style={{ fontSize: "1em", WebkitTextStroke: "1px var(--grey)" }}
            >
              02
            </span>
            &nbsp;/&nbsp;Pricing
          </p>
          <h2 className="appear">What it costs. No surprises.</h2>
          <p className="price-lede appear">
            Three plans, two engagement models.{" "}
            <strong>Monthly hosting</strong> bundles everything we recommend on
            a 12-month term, hosting, security, backups, ongoing edits.{" "}
            <strong>One-time build</strong> is a project handoff: you own the
            site and host it yourself after delivery.
          </p>
        </header>

        <div
          className="toggle appear"
          role="group"
          aria-label="Choose an engagement model"
        >
          <button
            type="button"
            className={hosted ? "active" : undefined}
            onClick={() => setHosted(true)}
            aria-pressed={hosted}
          >
            Monthly hosting
          </button>
          <button
            type="button"
            className={!hosted ? "active" : undefined}
            onClick={() => setHosted(false)}
            aria-pressed={!hosted}
          >
            One-time build
          </button>
        </div>

        <div className="tiers">
          {plans.map((plan) => (
            <PricingTier key={plan.name} plan={plan} hosted={hosted} />
          ))}
        </div>
      </div>
    </section>
  );
}
