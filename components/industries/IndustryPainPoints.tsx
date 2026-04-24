import type { IndustryData } from "@/lib/industries-data";

export default function IndustryPainPoints({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            Common Challenges
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Sound Familiar?
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            These are the problems we hear from {industry.title.toLowerCase()} every week.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industry.painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-gray">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
