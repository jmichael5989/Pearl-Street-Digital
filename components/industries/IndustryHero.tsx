import type { IndustryData } from "@/lib/industries-data";

export default function IndustryHero({ industry }: { industry: IndustryData }) {
  return (
    <section className="bg-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-accent-dark">
            {industry.title}
          </span>
          <h1 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {industry.heroHeading}
          </h1>
          <p className="mt-5 text-lg text-text-on-dark-muted leading-relaxed">
            {industry.heroSubtitle}
          </p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex items-center justify-center rounded-xl bg-light px-8 py-3.5 font-heading font-semibold text-primary hover:bg-accent-dark hover:text-white"
          >
            Get a Free {industry.title.split("&")[0].trim()} Website Audit
          </a>
        </div>
      </div>
    </section>
  );
}
