import type { IndustryData } from "@/lib/industries-data";

export default function IndustryPricing({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            Pricing
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Transparent, One-Time Pricing
          </h2>
          <p className="mt-4 text-gray">
            No monthly contracts. No hidden fees. Just a great website and
            marketing foundation for your business.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-lg">
          <div className="rounded-2xl border border-accent-dark bg-dark p-8 sm:p-10 text-center shadow-lg relative overflow-hidden">
            <span className="absolute top-0 left-0 right-0 bg-accent-dark py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Most Popular
            </span>
            <div className="mt-4">
              <h3 className="font-heading text-xl font-bold text-white">
                {industry.pricingTier.name} Tier
              </h3>
              <p className="mt-4 font-heading text-5xl font-bold text-white">
                {industry.pricingTier.price}
              </p>
              <p className="mt-1 text-sm text-text-on-dark-muted">one-time build</p>
              <p className="mt-6 text-sm text-text-on-dark-muted leading-relaxed">
                {industry.pricingTier.description}
              </p>
              <a
                href="/contact"
                className="btn-primary mt-8 inline-flex items-center justify-center rounded-xl bg-light px-8 py-3.5 font-heading font-semibold text-primary hover:bg-accent-dark hover:text-white w-full"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
