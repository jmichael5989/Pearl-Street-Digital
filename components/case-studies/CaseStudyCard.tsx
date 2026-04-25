import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";

export default function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const metricLine = caseStudy.cardMetrics
    .map((m) => `${m.value} ${m.label}`)
    .join(" \u00b7 ");

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all duration-300 block focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-light-surface overflow-hidden">
        <Image
          src={caseStudy.thumbnailUrl}
          alt={caseStudy.thumbnailAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-text text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          {caseStudy.industry}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-text mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {caseStudy.outcomeHeadline}
        </h3>
        <p className="text-sm text-brand-text mb-5 line-clamp-2 leading-relaxed">
          {caseStudy.summary}
        </p>
        <p className="text-xs font-semibold text-gray uppercase tracking-wider mb-5">
          {metricLine}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-border">
          <span className="text-xs text-gray">
            {caseStudy.services.slice(0, 2).join(", ")}
          </span>
          <span className="text-sm font-semibold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            View case study
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
