import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Process section — three-color port (phase A).
 * Uses .detail-row + .spine.spine-outline pattern from CaseStudyEntries.tsx.
 * Col1 = spine numeral, col2 = step title h3, col3 = step description.
 * Section 04 in the detail-page rhythm.
 */
export default function ServiceProcess({ service }: { service: ServiceData }) {
  return (
    <section>
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">04</span>&nbsp;/&nbsp;How it works
        </p>
        <h2 className="appear">Our {service.title} process.</h2>
        {service.process.map((step, i) => (
          <div className="detail-row appear" key={step.title}>
            <span className="spine spine-outline">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
            </div>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
