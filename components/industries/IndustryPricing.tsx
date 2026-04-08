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
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
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
          <div className="rounded-2xl border-2 border-accent bg-dark p-8 sm:p-10 text-center shadow-lg relative overflow-hidden">
            <span className="absolute top-0 left-0 right-0 bg-[#2563EB] py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Most Popular
            </span>
            <div className="mt-4">
              <h3 className="font-heading text-xl font-bold text-white">
                {industry.pricingTier.name} Tier
              </h3>
              <p className="mt-4 font-heading text-5xl font-bold text-white">
                {industry.pricingTier.price}
              </p>
              <p className="mt-1 text-sm text-[#94A3B8]">one-time build</p>
              <p className="mt-6 text-sm text-[#CBD5E1] leading-relaxed">
                {industry.pricingTier.description}
              </p>
              <a
                href="/contact"
                className="btn-primary mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-heading font-semibold text-white w-full"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                }}
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
