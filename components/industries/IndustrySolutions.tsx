import Link from "next/link";
import type { IndustryData } from "@/lib/industries-data";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function IndustrySolutions({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section className="bg-light py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            How We Help
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Solutions Built for {industry.title}
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Every service is tailored to how {industry.title.toLowerCase()} in
            San Antonio actually find and win customers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industry.solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                {solution.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray mb-4">
                {solution.description}
              </p>
              <Link
                href={`/services/${solution.serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                Learn more
                <ArrowRightIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
