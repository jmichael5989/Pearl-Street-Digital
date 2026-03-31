import type { IndustryData } from "@/lib/industries-data";

export default function IndustryHero({ industry }: { industry: IndustryData }) {
  return (
    <section className="bg-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
            {industry.title}
          </span>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white">
            {industry.heroHeading}
          </h1>
          <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">
            {industry.heroSubtitle}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-heading font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
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
