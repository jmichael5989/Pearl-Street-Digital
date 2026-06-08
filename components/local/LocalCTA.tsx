/**
 * Matrix-page bottom CTA banner. Navy background, brass-soft accent
 * for the eyebrow numeral and label, H2 in serif weight 400, primary
 * CTA links to the homepage Cal.com section at /contact#talk-to-us,
 * secondary CTA is the tel: link. Mirrors the dark-section copy block
 * treatment used on inner pages site-wide.
 */

import Link from "next/link";

type LocalCTAProps = {
  eyebrow: string;
  heading: string;
  copy: string;
};

export default function LocalCTA({ eyebrow, heading, copy }: LocalCTAProps) {
  const [num, ...labelParts] = eyebrow.split(" / ");
  const label = labelParts.join(" / ");

  return (
    <section
      className="bg-dark border-t border-border-dark text-text-on-dark"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark">
            <span className="font-heading text-base font-normal mr-1">
              {num}
            </span>
            &nbsp;/&nbsp; {label}
          </div>
        </header>
        <h2
          className="font-heading text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
            color: "var(--color-text-on-dark)",
          }}
        >
          {heading}
        </h2>
        <p
          className="font-body mt-6 max-w-[60ch]"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-text-on-dark)",
          }}
        >
          {copy}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Link
            href="/contact#talk-to-us"
            className="font-body inline-flex items-center gap-2.5 border border-light bg-light px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-accent-dark hover:border-accent-dark hover:text-light"
          >
            Book a consultation
          </Link>
          <a
            href="tel:+12103057372"
            className="font-body inline-flex items-center gap-2.5 border border-light bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-light hover:text-text"
          >
            (210) 305-7372
          </a>
        </div>
      </div>
    </section>
  );
}
