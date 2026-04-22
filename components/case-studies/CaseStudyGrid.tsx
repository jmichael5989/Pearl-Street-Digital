import type { CaseStudy } from "@/lib/case-studies-data";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3 text-center">
          More Work
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-12 text-center">
          Every project. Every result.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
