import type { IndustryData } from "@/lib/industries-data";

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default function IndustryPainPoints({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
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
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-icon-industry-bg border border-icon-industry-border text-primary">
                <AlertIcon className="h-5 w-5" />
              </div>
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
