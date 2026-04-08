import type { CaseStudyData } from "@/lib/case-studies-data";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CaseStudySolution({ study }: { study: CaseStudyData }) {
  return (
    <section className="bg-light-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Our Approach
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            {study.solution.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {study.solution.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {study.solution.tactics.map((tactic, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-gray leading-relaxed">{tactic}</span>
              </li>
            ))}
          </ul>
          {study.techStack && study.techStack.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
