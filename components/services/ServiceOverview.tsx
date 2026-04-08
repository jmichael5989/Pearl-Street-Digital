import type { ServiceData } from "@/lib/services-data";

export default function ServiceOverview({ service }: { service: ServiceData }) {
  const { overview } = service;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Overview
            </span>
            <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              {overview.heading}
            </h2>
            {overview.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-5 text-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right column -- highlight cards */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {overview.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-xl border border-border bg-white p-5"
              >
                <p className="font-heading text-2xl font-bold text-primary">
                  {highlight.value}
                </p>
                <p className="mt-1 text-xs text-gray uppercase tracking-[0.08em]">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
