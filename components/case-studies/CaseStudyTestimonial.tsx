import type { CaseStudyData } from "@/lib/case-studies-data";

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.3 2.7c-4.2 1.8-7 5.7-7 10.3 0 2.8 1.7 5 4 5 2 0 3.7-1.7 3.7-3.7 0-2-1.7-3.7-3.7-3.7-.3 0-.7 0-1 .1.8-2.4 2.8-4.5 5.2-5.5L11.3 2.7zm10 0c-4.2 1.8-7 5.7-7 10.3 0 2.8 1.7 5 4 5 2 0 3.7-1.7 3.7-3.7 0-2-1.7-3.7-3.7-3.7-.3 0-.7 0-1 .1.8-2.4 2.8-4.5 5.2-5.5L21.3 2.7z" />
    </svg>
  );
}

export default function CaseStudyTestimonial({
  study,
}: {
  study: CaseStudyData;
}) {
  if (!study.testimonial) return null;

  return (
    <section className="bg-gray-bg py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <QuoteIcon className="mx-auto mb-6 text-primary/20" />
          <blockquote className="font-heading text-xl sm:text-2xl font-medium text-dark leading-relaxed">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-heading font-semibold text-dark">
              {study.testimonial.name}
            </p>
            <p className="text-sm text-gray">{study.testimonial.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
