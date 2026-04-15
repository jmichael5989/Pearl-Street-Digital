import Link from "next/link";
import type { CaseStudyData } from "@/lib/case-studies-data";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
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

const cardBackgrounds: Record<string, string> = {
  "rank-point-media": "/images/brand/logo-r.jpg",
  "modern-day-pest-control": "/images/brand/modern-day-pest-control-logo-v2.jpg",
};

export default function CaseStudyCard({ study }: { study: CaseStudyData }) {
  const primaryResult = study.results[0];
  const secondaryResult = study.results[2];
  const backgroundImage = cardBackgrounds[study.slug];

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative rounded-2xl border border-border bg-light-surface shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-light-surface/75 pointer-events-none" />
      )}
      <div className="relative p-8">
        {/* Industry tag */}
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${
            study.industryColor === "teal"
              ? "bg-[rgba(37,99,235,0.08)] text-primary"
              : "bg-[rgba(37,99,235,0.08)] text-primary"
          }`}
        >
          {study.industry}
        </span>

        {/* Client name */}
        <h3 className="mt-4 font-heading text-xl font-bold text-text">
          {study.clientName}
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm text-gray leading-relaxed line-clamp-2">
          {study.heroTagline}
        </p>

        {/* Key metrics */}
        <div className="mt-6 flex items-center gap-6">
          {primaryResult && (
            <div>
              <p className="font-heading text-2xl font-bold text-primary">
                {primaryResult.value}
              </p>
              <p className="text-xs text-gray">{primaryResult.label}</p>
            </div>
          )}
          {secondaryResult && (
            <div className="border-l border-border pl-6">
              <p className="font-heading text-2xl font-bold text-primary">
                {secondaryResult.value}
              </p>
              <p className="text-xs text-gray">{secondaryResult.label}</p>
            </div>
          )}
        </div>

        {/* Service tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {study.serviceSlugs.map((slug) => (
            <span
              key={slug}
              className="rounded-md border border-[rgba(37,99,235,0.2)] px-2.5 py-0.5 text-xs font-medium text-primary capitalize"
            >
              {slug.replace(/-/g, " ")}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
          View case study
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
