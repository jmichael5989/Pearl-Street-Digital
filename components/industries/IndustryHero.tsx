import type { IndustryData } from "@/lib/industries-data";

export default function IndustryHero({ industry }: { industry: IndustryData }) {
  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            {industry.title}
          </span>
          <h1 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {industry.heroHeading}
          </h1>
          <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">
            {industry.heroSubtitle}
          </p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-heading font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
              boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            }}
          >
            Get a Free {industry.title.split("&")[0].trim()} Website Audit
          </a>
        </div>
      </div>
    </section>
  );
}
