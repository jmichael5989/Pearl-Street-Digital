"use client";

import { useState } from "react";
import { Megaphone, Palette, Code2, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureIndicator from "@/components/icons/FeatureIndicator";

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="opacity-70"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

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
  const displayName = hosted ? plan.name : (plan.buildOnlyName || plan.name);
  const displayPages = hosted ? plan.pages : (plan.buildOnlyPages || plan.pages);
  const priceLabel = hosted ? "/month" : "one-time";

  if (plan.featured && hosted) {
    return (
      <div className="relative flex h-full flex-col rounded-2xl border border-accent-dark bg-dark p-8 pt-12 transition-all duration-300 hover:-translate-y-1">
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-accent-dark px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
        >
          Most Popular
        </span>
        <div className="mb-6">
          <h3 className="font-display text-xl font-bold text-text-on-dark">
            {displayName}
          </h3>
          <p className="text-sm text-text-on-dark-muted mt-1">{displayPages}</p>
        </div>
        <div className="mb-2">
          <span className="font-display text-4xl font-extrabold text-white">
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
            <li key={f.text} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-primary">
                <FeatureIndicator />
              </span>
              <span className={`text-sm text-text-on-dark-muted ${f.emphasized ? "font-semibold" : ""}`}>{f.text}</span>
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          className="btn-primary block w-full rounded-xl bg-light py-3 text-center text-sm font-semibold text-primary hover:bg-accent-dark hover:text-white"
        >
          Get Started
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-light-surface p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1">
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-text">
          {displayName}
        </h3>
        <p className="text-sm text-gray mt-1">{displayPages}</p>
      </div>
      <div className="mb-2">
        <span className="font-display text-4xl font-extrabold text-text">
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
          <li key={f.text} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-primary">
              <FeatureIndicator />
            </span>
            <span className={`text-sm text-gray ${f.emphasized ? "font-semibold" : ""}`}>{f.text}</span>
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
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
              Transparent Pricing
            </span>
            <h2 className="mt-3 font-display font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Simple Pricing. No Surprises.
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Flexible plans that fit your budget. No hidden costs, no surprise invoices.
              You own everything we build.
            </p>

            {/* Toggle */}
            <div className="mt-8 inline-flex flex-col items-center">
              <span className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-gray">
                Choose Your Model
              </span>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-light-surface p-1.5">
                <button
                  type="button"
                  onClick={() => setHosted(true)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer md:px-8 md:py-3 md:text-base ${
                    hosted
                      ? "bg-primary text-white"
                      : "text-text/75 hover:bg-white/60 hover:text-text"
                  }`}
                >
                  Build + Hosting
                  <span className="group/info relative inline-flex cursor-help">
                    <InfoIcon />
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-lg bg-dark px-3 py-2 text-xs font-normal leading-relaxed tracking-normal text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/info:opacity-100 group-focus-within/info:opacity-100 normal-case"
                    >
                      Monthly subscription. We handle hosting, security, backups, and ongoing updates.
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setHosted(false)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer md:px-8 md:py-3 md:text-base ${
                    !hosted
                      ? "bg-primary text-white"
                      : "text-text/75 hover:bg-white/60 hover:text-text"
                  }`}
                >
                  Build Only
                  <span className="group/info relative inline-flex cursor-help">
                    <InfoIcon />
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-lg bg-dark px-3 py-2 text-xs font-normal leading-relaxed tracking-normal text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/info:opacity-100 group-focus-within/info:opacity-100 normal-case"
                    >
                      One-time project. You own and host the site yourself after delivery.
                    </span>
                  </span>
                </button>
              </div>
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

        {/* Custom Services — Call for Pricing */}
        <ScrollReveal delay={300}>
          <div className="mt-20 text-center">
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
              Custom Services
            </span>
            <h3 className="mt-3 font-display font-bold text-text" style={{ fontSize: "var(--text-h3)", lineHeight: 1.2 }}>
              Scoped to Your Business. Priced to Match.
            </h3>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Some projects move beyond a standard website build. For these, we scope the work together and price based on the specific requirements.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {customServices.map((svc) => (
              <CustomServiceCard key={svc.title} service={svc} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface CustomService {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const customServices: CustomService[] = [
  {
    title: "Social Media Advertising",
    icon: Megaphone,
    description:
      "Paid campaigns across Facebook, Instagram, and TikTok that put your business in front of the right audience at the right moment.",
    features: [
      "Campaign strategy and audience targeting",
      "Creative development and copywriting",
      "Ongoing optimization and reporting",
      "Budget recommendations tailored to your goals",
    ],
  },
  {
    title: "Graphic Design Services",
    icon: Palette,
    description:
      "Logos, brand identity, print collateral, and digital assets designed to make your business look as credible as it is.",
    features: [
      "Logo and brand identity design",
      "Print collateral and signage",
      "Social media graphics and templates",
      "Brand guidelines and asset libraries",
    ],
  },
  {
    title: "Custom Web Apps with AI",
    icon: Code2,
    description:
      "Purpose-built web applications with AI integrations that automate workflows, answer customer questions, and unlock new revenue streams.",
    features: [
      "Custom application development",
      "AI chat, search, and workflow integrations",
      "API and third-party system connections",
      "Ongoing support and feature roadmap",
    ],
  },
];

function CustomServiceCard({ service }: { service: CustomService }) {
  const Icon = service.icon;
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-light-surface p-8 shadow-sm transition-all duration-200 hover:border-primary hover:-translate-y-1 hover:shadow-lg">
      <Icon
        className="w-8 h-8 text-primary mb-4"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div className="mb-6">
        <h4 className="font-display text-xl font-bold text-text">
          {service.title}
        </h4>
        <p className="text-base text-text/80 mt-3 leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="mb-1">
        <span className="text-base font-semibold text-text">
          Call for Pricing
        </span>
      </div>
      <p className="text-sm font-medium text-gray mb-6">
        Scoped to your project
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-primary">
              <FeatureIndicator />
            </span>
            <span className="text-base text-text/85">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="btn-dark block w-full rounded-xl bg-dark py-3 text-center text-sm font-semibold text-white"
      >
        Contact Us
      </a>
    </div>
  );
}
