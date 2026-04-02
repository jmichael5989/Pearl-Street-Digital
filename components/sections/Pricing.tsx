"use client";

import { useState } from "react";

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
    hostedPrice: "$250",
    hostingAddon: "$50/mo",
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
      "30-day post-launch support",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
    ],
  },
  {
    name: "Business",
    price: "$500",
    hostedPrice: "$500",
    hostingAddon: "$75/mo",
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
      "60-day post-launch support",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
      "Uptime monitoring",
    ],
  },
  {
    name: "Growth",
    price: "$1,000",
    hostedPrice: "$1,000",
    hostingAddon: "$100/mo",
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
      "90-day post-launch support",
      "Managed hosting and SSL",
      "Monthly backups and security updates",
      "Uptime monitoring and priority support",
    ],
  },
];

function PricingCard({ plan, hosted }: { plan: Plan; hosted: boolean }) {
  const displayPrice = hosted ? plan.hostedPrice : plan.price;
  const displayFeatures = hosted ? plan.hostedFeatures : plan.features;
  const priceLabel = hosted ? "one-time + hosting" : "one-time";

  if (plan.featured) {
    return (
      <div className="relative rounded-2xl border-2 border-accent bg-dark p-8 pt-12 shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1">
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          }}
        >
          Most Popular
        </span>
        <div className="mb-6">
          <h3 className="font-heading text-xl font-bold text-[#EFF6FF]">
            {plan.name}
          </h3>
          <p className="text-sm text-[#64748B] mt-1">{plan.pages}</p>
        </div>
        <div className="mb-2">
          <span className="font-heading text-4xl font-extrabold text-white">
            {displayPrice}
          </span>
          <span className="text-sm text-[#64748B] ml-2">{priceLabel}</span>
        </div>
        {hosted && (
          <p className="text-xs text-primary mb-6">
            + {plan.hostingAddon} hosting
          </p>
        )}
        {!hosted && <div className="mb-6" />}
        <ul className="space-y-3 mb-8">
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
          className="block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
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
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.1)]">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-dark">
          {plan.name}
        </h3>
        <p className="text-sm text-gray mt-1">{plan.pages}</p>
      </div>
      <div className="mb-2">
        <span className="font-heading text-4xl font-extrabold text-dark">
          {displayPrice}
        </span>
        <span className="text-sm text-gray ml-2">{priceLabel}</span>
      </div>
      {hosted && (
        <p className="text-xs text-primary mb-6">
          + {plan.hostingAddon} hosting
        </p>
      )}
      {!hosted && <div className="mb-6" />}
      <ul className="space-y-3 mb-8">
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
        className="block w-full rounded-xl bg-dark py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
      >
        Get Started
      </a>
    </div>
  );
}

export default function Pricing() {
  const [hosted, setHosted] = useState(false);

  return (
    <section id="pricing" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Transparent Pricing
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Simple Pricing. No Surprises.
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            One-time payment. No contracts, no monthly fees, no hidden costs.
            You own everything we build.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-gray-bg p-1.5">
            <button
              type="button"
              onClick={() => setHosted(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                !hosted
                  ? "bg-white text-dark shadow-sm"
                  : "text-gray hover:text-dark"
              }`}
            >
              Build Only
            </button>
            <button
              type="button"
              onClick={() => setHosted(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                hosted
                  ? "bg-white text-dark shadow-sm"
                  : "text-gray hover:text-dark"
              }`}
            >
              Build + Hosting
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} hosted={hosted} />
          ))}
        </div>
      </div>
    </section>
  );
}
