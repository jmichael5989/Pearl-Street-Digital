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
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
          {/* Image side */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            <Image
              src={caseStudy.heroImageUrl}
              alt={caseStudy.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-violet-500/10"
              aria-hidden="true"
            />
            <span className="absolute top-6 left-6 bg-gradient-to-r from-teal-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase z-10">
              Featured Case Study
            </span>
          </div>

          {/* Content side */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4">
              {caseStudy.industry}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4 leading-tight tracking-tight">
              {caseStudy.outcomeHeadline}
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              {caseStudy.summary}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-200">
              {caseStudy.heroMetrics.map((m) => (
                <div key={m.label}>
                  <div className="font-heading font-bold text-3xl bg-gradient-to-r from-teal-500 to-violet-500 bg-clip-text text-transparent">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
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
                  className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-fit focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
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
