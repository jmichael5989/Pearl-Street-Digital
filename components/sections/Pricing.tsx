"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-primary"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface Plan {
  name: string;
  price: string;
  hostedPrice: string;
  hostingAddon: string;
  pages: string;
  featured: boolean;
  features: string[];
  hostedFeatures: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$250",
    hostedPrice: "$99",
    hostingAddon: "12-month term",
    pages: "Up to 3 pages",
    featured: false,
    features: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "30-day post-launch support",
    ],
    hostedFeatures: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
      "Ongoing maintenance",
    ],
  },
  {
    name: "Business",
    price: "$500",
    hostedPrice: "$179",
    hostingAddon: "12-month term",
    pages: "Up to 6 pages",
    featured: true,
    features: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Google Analytics installation",
      "3 revision rounds",
      "60-day post-launch support",
    ],
    hostedFeatures: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Google Analytics installation",
      "3 revision rounds",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
      "Uptime monitoring",
      "Ongoing maintenance",
    ],
  },
  {
    name: "Growth",
    price: "$1,000",
    hostedPrice: "$249",
    hostingAddon: "12-month term",
    pages: "Up to 10 pages",
    featured: false,
    features: [
      "Custom-designed responsive website",
      "Full on-page SEO with schema markup",
      "Contact form integration",
      "Google Analytics installation",
      "Social media integrations",
      "4 revision rounds",
      "90-day post-launch support",
    ],
    hostedFeatures: [
      "Custom-designed responsive website",
      "Full on-page SEO with schema markup",
      "Contact form integration",
      "Google Analytics installation",
      "Social media integrations",
      "4 revision rounds",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
      "Uptime monitoring and priority support",
      "Ongoing maintenance",
    ],
  },
];

function PricingCard({ plan, hosted }: { plan: Plan; hosted: boolean }) {
  const displayPrice = hosted ? plan.hostedPrice : plan.price;
  const displayFeatures = hosted ? plan.hostedFeatures : plan.features;
  const priceLabel = hosted ? "/month" : "one-time";

  if (plan.featured) {
    return (
      <div className="relative flex h-full flex-col rounded-2xl border-2 border-primary bg-dark p-8 pt-12 shadow-[0_4px_20px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1">
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          }}
        >
          Most Popular
        </span>
        <div className="mb-6">
          <h3 className="font-heading text-xl font-bold text-text-on-dark">
            {plan.name}
          </h3>
          <p className="text-sm text-text-on-dark-muted mt-1">{plan.pages}</p>
        </div>
        <div className="mb-2">
          <span className="font-heading text-4xl font-extrabold text-white">
            {displayPrice}
          </span>
          <span className="text-sm text-text-on-dark-muted ml-2">{priceLabel}</span>
        </div>
        {hosted && (
          <p className="text-base font-semibold text-primary mb-6">
            {plan.hostingAddon}
          </p>
        )}
        {!hosted && <div className="mb-6" />}
        <ul className="space-y-3 mb-8 flex-1">
          {displayFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              <span className="text-sm text-[#CBD5E1]">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          className="btn-primary block w-full rounded-xl py-3 text-center text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
          }}
        >
          Get Started
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-light-surface p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-text">
          {plan.name}
        </h3>
        <p className="text-sm text-gray mt-1">{plan.pages}</p>
      </div>
      <div className="mb-2">
        <span className="font-heading text-4xl font-extrabold text-text">
          {displayPrice}
        </span>
        <span className="text-sm text-gray ml-2">{priceLabel}</span>
      </div>
      {hosted && (
        <p className="text-base font-semibold text-primary mb-6">
          {plan.hostingAddon}
        </p>
      )}
      {!hosted && <div className="mb-6" />}
      <ul className="space-y-3 mb-8 flex-1">
        {displayFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-0.5">
              <CheckIcon />
            </span>
            <span className="text-sm text-gray">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="btn-dark block w-full rounded-xl bg-dark py-3 text-center text-sm font-semibold text-white"
      >
        Get Started
      </a>
    </div>
  );
}

export default function Pricing() {
  const [hosted, setHosted] = useState(true);

  return (
    <section id="pricing" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Transparent Pricing
            </span>
            <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Simple Pricing. No Surprises.
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Flexible plans that fit your budget. No hidden costs, no surprise invoices.
              You own everything we build.
            </p>

            {/* Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-light-surface p-1.5">
              <button
                type="button"
                onClick={() => setHosted(true)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  hosted
                    ? "bg-white text-text shadow-sm"
                    : "text-gray hover:text-text"
                }`}
              >
                Build + Hosting
              </button>
              <button
                type="button"
                onClick={() => setHosted(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  !hosted
                    ? "bg-white text-text shadow-sm"
                    : "text-gray hover:text-text"
                }`}
              >
                Build Only
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} hosted={hosted} />
          ))}
        </div>
        </ScrollReveal>

        <p className="mt-10 text-center text-sm text-gray">
          No hidden fees. No surprise invoices. You own everything we build.
        </p>
      </div>
    </section>
  );
}
