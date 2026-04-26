import Link from "next/link";

/**
 * Shared body section for the placeholder city pages under /areas/*.
 * Renders coherent placeholder copy with the city name woven in, plus a
 * CTA back to the homepage Cal.com widget. The accompanying city pages
 * are `noindex` so this content is not Google-facing — it exists so a
 * visitor who guesses the URL sees something real.
 *
 * When a city page is fully launched, replace this component with city-
 * specific content (case studies, testimonials, neighborhood mentions).
 * Keeping each city distinct from the SA pages is required to avoid
 * duplicate-content penalties under the City Expansion Playbook.
 */
export default function CityPlaceholder({ city }: { city: string }) {
  return (
    <section
      aria-label={`Rank Point Media in ${city}`}
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
              01
            </span>
            &nbsp;/&nbsp; {city}
          </div>
        </header>

        {/* H2 */}
        <h2
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
          Now serving {city}.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
          }}
        >
          We&rsquo;re based in San Antonio and expanding into {city} as we
          take on clients there. Same lean two-person model that runs every
          project &mdash; you talk to the people writing the code, not a
          rotating cast of account managers. Custom-coded sites only, no
          templates, no agency markup.
        </p>

        {/* Status note */}
        <p
          className="mt-8 font-body italic max-w-2xl"
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            paddingTop: "16px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          We&rsquo;re actively building out our {city} presence. If
          you&rsquo;re a {city} small business that wants a real website
          and direct access to the people building it, get in touch &mdash;
          we&rsquo;d like to talk.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Link
            href="/#talk-to-us"
            className="font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
          >
            Book a consultation
          </Link>
          <Link
            href="/about"
            className="font-body inline-flex items-center gap-2.5 border border-text bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-text hover:text-light"
          >
            See how we work
          </Link>
        </div>
      </div>
    </section>
  );
}
