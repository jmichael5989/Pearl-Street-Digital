import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";

export default function CaseStudyDetailTemplate({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <>
      {/* 1. Hero band */}
      <section className="relative bg-primary pt-36 md:pt-44 pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent-dark text-sm font-semibold hover:text-white mb-8 focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All case studies
          </Link>

          <p className="text-sm font-semibold tracking-widest uppercase text-accent-dark mb-4">
            {caseStudy.industry}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 leading-tight tracking-tight">
            {caseStudy.outcomeHeadline}
          </h1>
          <p className="text-lg md:text-xl text-text-on-dark-muted mb-12">
            {caseStudy.client}
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-dark">
            {caseStudy.heroMetrics.map((m) => (
              <div key={m.label}>
                <div className="font-heading font-bold text-3xl md:text-4xl text-accent-dark">
                  {m.value}
                </div>
                <div className="text-xs text-text-on-dark-muted uppercase tracking-wider mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Hero image */}
      <section className="px-6 -mt-16 md:-mt-20 relative z-10 mb-20">
        <div className="max-w-6xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-light-surface">
          <div className="relative w-full h-full">
            <Image
              src={caseStudy.heroImageUrl}
              alt={caseStudy.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Challenge */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            The Challenge
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6 leading-tight">
            The problem we started with
          </h2>
          <p className="text-lg text-brand-text leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>
      </section>

      {/* 4. Approach */}
      <section className="py-20 px-6 bg-light-surface">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Our Approach
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6 leading-tight">
            What we did
          </h2>
          <p className="text-lg text-brand-text leading-relaxed mb-8">
            {caseStudy.approach}
          </p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.services.map((service) => (
              <span
                key={service}
                className="text-xs font-semibold text-brand-text bg-white border border-border px-3 py-1.5 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            The Results
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 leading-tight">
            What we delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="p-8 rounded-2xl border border-border bg-white"
              >
                <h3 className="font-heading font-bold text-lg text-text mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-brand-text leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pull quote (optional) */}
      {caseStudy.pullQuote && (
        <section className="py-20 px-6 bg-light-surface">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="mx-auto w-16 h-0.5 bg-border mb-8"
              aria-hidden="true"
            />
            <blockquote className="font-heading font-semibold text-2xl md:text-3xl text-text leading-snug mb-8">
              &ldquo;{caseStudy.pullQuote.text}&rdquo;
            </blockquote>
            <p className="text-base text-brand-text font-semibold">
              {caseStudy.pullQuote.author}
            </p>
            <p className="text-sm text-gray">
              {caseStudy.pullQuote.title}
            </p>
          </div>
        </section>
      )}

      {/* 7. Final CTA band */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Ready to be our next success story?
          </h2>
          <p className="text-lg text-text-on-dark-muted mb-8">
            Let&apos;s talk about what we can do for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-light hover:bg-accent-dark text-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
