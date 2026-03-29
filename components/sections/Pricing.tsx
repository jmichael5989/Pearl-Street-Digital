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
  pages: string;
  featured: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$250",
    pages: "Up to 3 pages",
    featured: false,
    features: [
      "Custom-designed responsive website",
      "Basic on-page SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "30-day post-launch support",
    ],
  },
  {
    name: "Business",
    price: "$500",
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
  },
  {
    name: "Growth",
    price: "$1,000",
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
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  if (plan.featured) {
    return (
      <div className="relative rounded-2xl border-2 border-accent bg-dark p-8 pt-12 shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all duration-300 hover:-translate-y-1">
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
          }}
        >
          Most Popular
        </span>
        <div className="mb-6">
          <h3 className="font-heading text-xl font-bold text-[#F0FDFA]">
            {plan.name}
          </h3>
          <p className="text-sm text-[#64748B] mt-1">{plan.pages}</p>
        </div>
        <div className="mb-8">
          <span className="font-heading text-4xl font-extrabold text-white">
            {plan.price}
          </span>
          <span className="text-sm text-[#64748B] ml-2">one-time</span>
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              <span className="text-sm text-[#CBD5E1]">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
            boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
          }}
        >
          Get Started
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-dark">
          {plan.name}
        </h3>
        <p className="text-sm text-gray mt-1">{plan.pages}</p>
      </div>
      <div className="mb-8">
        <span className="font-heading text-4xl font-extrabold text-dark">
          {plan.price}
        </span>
        <span className="text-sm text-gray ml-2">one-time</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-0.5">
              <CheckIcon />
            </span>
            <span className="text-sm text-gray">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block w-full rounded-xl bg-dark py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
      >
        Get Started
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-icon-service-border bg-icon-service-bg p-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <p className="font-heading font-semibold text-dark">
              Optional: Hosting and Maintenance
            </p>
            <span className="shrink-0 font-heading text-lg font-bold text-[#0D9488]">
              $100/mo
            </span>
          </div>
          <p className="text-sm text-gray mt-1">
            We handle updates, security, backups, and uptime monitoring so you
            never have to think about it.
          </p>
        </div>
      </div>
    </section>
  );
}
