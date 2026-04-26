import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Process section. Numbered editorial step list with
 * italic-serif Roman numeral leaders prefixed by the section index
 * (04.i, 04.ii, ...) on a hairline-divided single-column layout.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, centered text-primary eyebrow with font-bold, font-bold
 * serif H2, and a vertical timeline of rounded-full bordered bubbles
 * containing the step number in font-bold text-primary — the
 * rounded-full circular toggles with brand fills the brief retired).
 *
 * Section number 04 in the detail-page rhythm. Surface is warm-white to
 * alternate against the parchment Features above and the parchment FAQ
 * below.
 *
 * Note: lib/services-data.ts has step.number on each ServiceStep, but
 * this component uses index-based Roman numerals to keep the editorial
 * register consistent with the rest of the site. The data field becomes
 * a redundant artifact; safe to leave for now.
 */

const romanNumerals = [
  "i",
  "ii",
  "iii",
  "iv",
  "v",
  "vi",
  "vii",
  "viii",
];

export default function ServiceProcess({ service }: { service: ServiceData }) {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-light border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              04
            </span>
            &nbsp;/&nbsp; How it works
          </div>
        </header>

        {/* H2 */}
        <h2
          id="process-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          Our {service.title} process.
        </h2>

        {/* Numbered single-column step list — hairline-divided */}
        <ol
          className="border-t border-border"
          style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
        >
          {service.process.map((step, idx) => (
            <li
              key={step.title}
              className="grid grid-cols-1 gap-y-3 border-b border-border py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-x-6 lg:py-9"
            >
              <span
                className="font-heading italic text-accent"
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  paddingTop: "0.35rem",
                }}
              >
                04.{romanNumerals[idx]}
              </span>
              <div>
                <h3
                  className="font-heading text-text"
                  style={{
                    fontSize: "1.375rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 font-body"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--color-brand-text)",
                    maxWidth: "58ch",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
