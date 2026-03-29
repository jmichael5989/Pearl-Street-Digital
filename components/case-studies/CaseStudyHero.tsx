import type { CaseStudyData } from "@/lib/case-studies-data";

export default function CaseStudyHero({ study }: { study: CaseStudyData }) {
  return (
    <section className="bg-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${
              study.industryColor === "teal"
                ? "bg-[rgba(20,184,166,0.12)] text-primary"
                : "bg-[rgba(139,92,246,0.12)] text-accent"
            }`}
          >
            {study.industry}
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-white">
            {study.clientName}
          </h1>
          <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">
            {study.heroTagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {study.serviceSlugs.map((slug) => (
              <span
                key={slug}
                className="rounded-lg border border-[rgba(139,92,246,0.3)] px-3 py-1 text-xs font-medium text-[#C4B5FD] uppercase tracking-wider"
              >
                {slug.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
