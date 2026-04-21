import type { CaseStudyData } from "@/lib/case-studies-data";

export default function CaseStudyResults({ study }: { study: CaseStudyData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            Results
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            The Numbers Speak for Themselves
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {study.results.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.1)]"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                {result.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-dark">{result.label}</p>
              {result.description && (
                <p className="mt-1 text-xs text-gray">{result.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
