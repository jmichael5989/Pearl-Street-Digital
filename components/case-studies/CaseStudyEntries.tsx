import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";

const CASE_NUM = ["01", "02", "03", "04", "05", "06", "07", "08"];

// Case study entries — three-color redesign (phase 4). One .case section per
// client: work-row (image + meta) followed by the full Challenge / Approach /
// Outcomes story inlined (the approved mock supersedes the old detail pages).
export default function CaseStudyEntries() {
  return (
    <>
      {caseStudies.map((cs, i) => (
        <section key={cs.slug} className={i % 2 === 1 ? "case alt" : "case"}>
          <div className="wrap">
            <div className="work-row appear">
              <div className="work-media">
                <Image
                  src={cs.heroImageUrl}
                  alt={cs.heroImageAlt}
                  fill
                  sizes="(min-width: 820px) 46vw, 100vw"
                />
              </div>
              <div className="work-meta">
                <p className="work-index">
                  {CASE_NUM[i]} / {cs.industry}
                </p>
                <p className="client">{cs.client}</p>
                <h3 className="outcome">{cs.outcomeHeadline}</h3>
                <p className="work-summary">{cs.summary}</p>
                <div className="work-metrics">
                  {cs.heroMetrics.map((m) => (
                    <div className="metric" key={m.label}>
                      <div className="m-value">{m.value}</div>
                      <div className="m-label">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="work-tags">{cs.services.join(" · ")}</p>
              </div>
            </div>

            <div className="detail-row appear">
              <span className="spine spine-outline">01</span>
              <div>
                <p className="detail-eyebrow">Challenge</p>
                <h3>The problem</h3>
              </div>
              <p>{cs.challenge}</p>
            </div>

            <div className="detail-row appear">
              <span className="spine spine-outline">02</span>
              <div>
                <p className="detail-eyebrow">Approach</p>
                <h3>What we built</h3>
              </div>
              <p>{cs.approach}</p>
            </div>

            <div className="detail-row appear">
              <span className="spine spine-outline">03</span>
              <div>
                <p className="detail-eyebrow">Outcomes</p>
                <h3>What shipped</h3>
              </div>
              <div className="outcomes-list">
                {cs.outcomes.map((o) => (
                  <div className="outcome-item" key={o.title}>
                    <h3>{o.title}</h3>
                    <p>{o.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
