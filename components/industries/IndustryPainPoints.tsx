import type { IndustryData } from "@/lib/industries-data";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustryPainPoints({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section>
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">02</span>&nbsp;/&nbsp;Common challenges
        </p>
        <h2 className="appear">The patterns we hear most often.</h2>
        {industry.painPoints.map((point, i) => (
          <div className="detail-row appear" key={point.title}>
            <span className="spine spine-outline">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{point.title}</h3>
            </div>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
