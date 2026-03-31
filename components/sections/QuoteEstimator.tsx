"use client";

import { useState } from "react";

/* ─── Types ──────────────────────────────────────────────── */

type BusinessType =
  | "home-services"
  | "restaurant"
  | "professional"
  | "healthcare"
  | "beauty"
  | "other";

type PageCount = "simple" | "standard" | "full";

const FEATURES = [
  "Contact form",
  "Google Analytics",
  "SEO optimization",
  "Social media links",
  "Photo gallery",
  "Online booking",
  "Menu/pricing display",
  "Blog",
] as const;

type Feature = (typeof FEATURES)[number];

/* ─── Icons (Lucide-style SVGs) ──────────────────────────── */

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function UtensilsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */

const businessTypes: { id: BusinessType; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { id: "home-services", label: "Home Services", Icon: WrenchIcon },
  { id: "restaurant", label: "Restaurant / Food", Icon: UtensilsIcon },
  { id: "professional", label: "Professional Services", Icon: BriefcaseIcon },
  { id: "healthcare", label: "Healthcare", Icon: HeartPulseIcon },
  { id: "beauty", label: "Beauty / Salon", Icon: ScissorsIcon },
  { id: "other", label: "Other", Icon: LayersIcon },
];

const pageOptions: { id: PageCount; label: string; description: string }[] = [
  { id: "simple", label: "Simple (1-3 pages)", description: "Perfect for a clean landing page with contact info and core services." },
  { id: "standard", label: "Standard (4-6 pages)", description: "Room for services, about, testimonials, and a contact page." },
  { id: "full", label: "Full (7-10+ pages)", description: "Comprehensive site with blog, galleries, multiple service pages, and more." },
];

interface TierResult {
  name: string;
  price: string;
  pages: string;
  features: string[];
  recommended: boolean;
}

function computeTier(pageCount: PageCount, selectedFeatures: Feature[]): TierResult {
  const featureCount = selectedFeatures.length;

  if (pageCount === "full" || featureCount >= 5) {
    return {
      name: "Growth",
      price: "$1,000",
      pages: "Up to 10 pages",
      recommended: false,
      features: [
        "Custom-designed responsive website",
        "Full on-page SEO with schema markup",
        "Contact form integration",
        "Google Analytics installation",
        "Social media integrations",
        "4 revision rounds",
        "90-day post-launch support",
      ],
    };
  }

  if (pageCount === "standard" || featureCount >= 3) {
    return {
      name: "Business",
      price: "$500",
      pages: "Up to 6 pages",
      recommended: true,
      features: [
        "Custom-designed responsive website",
        "Basic on-page SEO setup",
        "Contact form integration",
        "Google Analytics installation",
        "3 revision rounds",
        "60-day post-launch support",
      ],
    };
  }

  return {
    name: "Starter",
    price: "$250",
    pages: "Up to 3 pages",
    recommended: false,
    features: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "30-day post-launch support",
    ],
  };
}

/* ─── Progress Bar ───────────────────────────────────────── */

function ProgressDots({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i <= current
                ? "bg-primary scale-110"
                : "bg-border"
            }`}
          />
          {i < 3 && (
            <div
              className={`hidden sm:block h-0.5 w-8 rounded transition-colors duration-300 ${
                i < current ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Step Components ────────────────────────────────────── */

function StepBusinessType({
  selected,
  onSelect,
}: {
  selected: BusinessType | null;
  onSelect: (v: BusinessType) => void;
}) {
  return (
    <div>
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dark text-center mb-2">
        What kind of business do you have?
      </h3>
      <p className="text-gray text-center mb-8 text-sm">
        Select the category that best describes your business.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {businessTypes.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,184,166,0.12)] ${
              selected === id
                ? "border-primary bg-light shadow-[0_8px_24px_rgba(20,184,166,0.12)]"
                : "border-border bg-white hover:border-primary/50"
            }`}
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
              selected === id
                ? "bg-primary/10 text-primary"
                : "bg-icon-service-bg text-gray"
            }`}>
              <Icon className="h-6 w-6" />
            </div>
            <span className="font-heading text-sm font-semibold text-dark">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepPageCount({
  selected,
  onSelect,
}: {
  selected: PageCount | null;
  onSelect: (v: PageCount) => void;
}) {
  return (
    <div>
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dark text-center mb-2">
        How many pages do you need?
      </h3>
      <p className="text-gray text-center mb-8 text-sm">
        Pick the scope that fits your goals. You can always add more later.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {pageOptions.map(({ id, label, description }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`flex flex-col items-start rounded-2xl border-2 p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,184,166,0.12)] ${
              selected === id
                ? "border-primary bg-light shadow-[0_8px_24px_rgba(20,184,166,0.12)]"
                : "border-border bg-white hover:border-primary/50"
            }`}
          >
            <span className="font-heading text-base font-semibold text-dark mb-2">
              {label}
            </span>
            <span className="text-xs leading-relaxed text-gray">
              {description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepFeatures({
  selected,
  onToggle,
}: {
  selected: Feature[];
  onToggle: (f: Feature) => void;
}) {
  return (
    <div>
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dark text-center mb-2">
        What features matter most?
      </h3>
      <p className="text-gray text-center mb-8 text-sm">
        Select all that apply. These help us recommend the right package.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
        {FEATURES.map((feature) => {
          const isSelected = selected.includes(feature);
          return (
            <button
              key={feature}
              type="button"
              onClick={() => onToggle(feature)}
              className={`flex items-center gap-3 rounded-xl border-2 px-5 py-3.5 text-left transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-light"
                  : "border-border bg-white hover:border-primary/50"
              }`}
            >
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors ${
                  isSelected
                    ? "bg-primary text-white"
                    : "border-2 border-border bg-white"
                }`}
              >
                {isSelected && <CheckIcon className="h-3.5 w-3.5" />}
              </div>
              <span className="text-sm font-medium text-dark">
                {feature}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepResults({
  tier,
  businessType,
  pageCount,
  features,
}: {
  tier: TierResult;
  businessType: BusinessType;
  pageCount: PageCount;
  features: Feature[];
}) {
  const businessLabel =
    businessTypes.find((b) => b.id === businessType)?.label || "Other";
  const pageLabel =
    pageOptions.find((p) => p.id === pageCount)?.label || "";

  const queryParams = new URLSearchParams({
    service: "web-design",
    message: `Quote Estimator Results:\n- Business: ${businessLabel}\n- Pages: ${pageLabel}\n- Features: ${features.join(", ")}\n- Recommended Tier: ${tier.name} (${tier.price})`,
  });

  return (
    <div>
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dark text-center mb-2">
        Your Recommended Plan
      </h3>
      <p className="text-gray text-center mb-8 text-sm">
        Based on your selections, here is the best fit for your project.
      </p>

      <div className="mx-auto max-w-sm animate-[fadeInUp_0.5s_ease-out]">
        {tier.recommended ? (
          <div className="relative rounded-2xl border-2 border-accent bg-dark p-8 pt-12 shadow-[0_20px_50px_rgba(139,92,246,0.15)]">
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
              }}
            >
              Recommended
            </span>
            <div className="mb-6">
              <h4 className="font-heading text-xl font-bold text-[#F0FDFA]">
                {tier.name}
              </h4>
              <p className="text-sm text-[#64748B] mt-1">{tier.pages}</p>
            </div>
            <div className="mb-8">
              <span className="font-heading text-4xl font-extrabold text-white">
                {tier.price}
              </span>
              <span className="text-sm text-[#64748B] ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon className="text-primary" />
                  </span>
                  <span className="text-sm text-[#CBD5E1]">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/contact?${queryParams.toString()}`}
              className="block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
              }}
            >
              Get Your Exact Quote
            </a>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h4 className="font-heading text-xl font-bold text-dark">
                {tier.name}
              </h4>
              <p className="text-sm text-gray mt-1">{tier.pages}</p>
            </div>
            <div className="mb-8">
              <span className="font-heading text-4xl font-extrabold text-dark">
                {tier.price}
              </span>
              <span className="text-sm text-gray ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon className="text-primary" />
                  </span>
                  <span className="text-sm text-gray">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/contact?${queryParams.toString()}`}
              className="block w-full rounded-xl bg-dark py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
            >
              Get Your Exact Quote
            </a>
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href="tel:+12105550127"
            className="inline-flex items-center gap-2 text-sm text-gray hover:text-primary transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            Or call us: (210) 555-0127
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

export default function QuoteEstimator() {
  const [step, setStep] = useState(0);
  const [businessType, setBusinessType] = useState<BusinessType | null>(null);
  const [pageCount, setPageCount] = useState<PageCount | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  function goNext() {
    setDirection("forward");
    setStep((s) => s + 1);
  }

  function goBack() {
    setDirection("back");
    setStep((s) => s - 1);
  }

  function handleBusinessSelect(v: BusinessType) {
    setBusinessType(v);
    setTimeout(goNext, 200);
  }

  function handlePageSelect(v: PageCount) {
    setPageCount(v);
    setTimeout(goNext, 200);
  }

  function toggleFeature(f: Feature) {
    setFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  }

  const tier =
    pageCount && step === 3 ? computeTier(pageCount, features) : null;

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
            Quote Estimator
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Get Your Free Estimate in 60 Seconds
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Answer three quick questions and we will recommend the right
            package for your San Antonio business.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-sm">
          <ProgressDots current={step} />

          {/* Step container with slide animation */}
          <div
            key={step}
            className={`${
              direction === "forward"
                ? "animate-[slideInRight_0.3s_ease-out]"
                : "animate-[slideInLeft_0.3s_ease-out]"
            }`}
          >
            {step === 0 && (
              <StepBusinessType
                selected={businessType}
                onSelect={handleBusinessSelect}
              />
            )}
            {step === 1 && (
              <StepPageCount
                selected={pageCount}
                onSelect={handlePageSelect}
              />
            )}
            {step === 2 && (
              <StepFeatures selected={features} onToggle={toggleFeature} />
            )}
            {step === 3 && tier && businessType && pageCount && (
              <StepResults
                tier={tier}
                businessType={businessType}
                pageCount={pageCount}
                features={features}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray hover:text-primary transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back
              </button>
            ) : (
              <div />
            )}
            {step === 2 && (
              <button
                type="button"
                onClick={goNext}
                className="rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #14B8A6, #0D9488)",
                  boxShadow: "0 4px 14px rgba(20,184,166,0.3)",
                }}
              >
                See My Estimate
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
