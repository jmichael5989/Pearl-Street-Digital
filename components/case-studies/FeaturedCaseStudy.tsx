import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";

export default function FeaturedCaseStudy({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 rounded-3xl overflow-hidden bg-white border border-border shadow-xl">
          {/* Image side */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] bg-light-surface overflow-hidden">
            <Image
              src={caseStudy.heroImageUrl}
              alt={caseStudy.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase z-10">
              Featured Case Study
            </span>
          </div>

          {/* Content side */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              {caseStudy.industry}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-tight tracking-tight">
              {caseStudy.outcomeHeadline}
            </h2>
            <p className="text-base text-brand-text mb-8 leading-relaxed">
              {caseStudy.summary}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
              {caseStudy.heroMetrics.map((m) => (
                <div key={m.label}>
                  <div className="font-heading font-bold text-3xl text-accent">
                    {m.value}
                  </div>
                  <div className="text-xs text-gray uppercase tracking-wider mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Services chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudy.services.map((service) => (
                <span
                  key={service}
                  className="text-xs font-semibold text-brand-text bg-light-surface px-3 py-1.5 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors w-fit focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
