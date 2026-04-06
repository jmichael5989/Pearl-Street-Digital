import type { CaseStudyData } from "@/lib/case-studies-data";

export default function CaseStudyChallenge({ study }: { study: CaseStudyData }) {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            The Challenge
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            {study.challenge.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {study.challenge.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
