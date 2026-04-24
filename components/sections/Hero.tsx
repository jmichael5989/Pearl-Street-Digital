import Link from "next/link";

/**
 * Homepage hero. Typographic-first editorial composition — replaces the prior
 * auto-playing-video HeroMediaCycle. Locked 2026-04-24 per .impeccable.md:
 *
 *   - Positioning spine sentence as the H1: "Nobody is ever 'looped in.'"
 *   - Dark section, deliberate use per Theme direction.
 *   - Numbered micro-label (01 / Introducing) echoes the Gentlewoman reference.
 *   - One plain text-link CTA (no ghost-button, no aspirational label).
 *   - Photo placeholder — real photography of Jon, Stacie, and George replaces
 *     it before launch per the Pre-Launch Checklist.
 *   - No animation. "Unhurried" + a-little-dry means the hero does not ask
 *     to be looked at; it asks to be read.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introducing Rank Point Media"
      className="relative min-h-screen bg-dark text-text-on-dark"
    >
      <div className="mx-auto flex min-h-screen max-w-[82rem] flex-col gap-y-14 px-6 py-8 sm:gap-y-16 sm:px-10 sm:py-12 lg:gap-y-20 lg:px-24 lg:py-14">
        {/* Top — numbered label + locator */}
        <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-border-dark pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-on-dark-muted">
            01 &thinsp;/&thinsp; Introducing
          </p>
          <p className="text-sm text-text-on-dark-muted">
            Rank Point Media &nbsp;&middot;&nbsp; Leon Springs, San Antonio
          </p>
        </header>

        {/* Center — positioning spine */}
        <div className="flex flex-1 flex-col justify-center gap-6 lg:gap-8">
          <h1
            className="font-heading max-w-[52rem] text-balance text-text-on-dark"
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: 1.03,
              letterSpacing: "-0.018em",
            }}
          >
            Nobody is ever{" "}
            <em className="font-normal italic">&ldquo;looped in.&rdquo;</em>
          </h1>
          <p
            className="font-body max-w-2xl text-text-on-dark"
            style={{ fontSize: "var(--text-body-lg)", lineHeight: 1.45 }}
          >
            Two people who build small-business websites, in front of the work,
            not behind a layer of account managers.
          </p>
          <p className="font-body max-w-xl text-base leading-[1.58] text-text-on-dark-muted">
            Jon, a Fortune 150 product manager, and Stacie, a designer.
            That&rsquo;s the whole company. When the site launches, you talk to
            the person who wrote the CSS. When a campaign misfires, you talk to
            the person who set it up.
          </p>
          <Link
            href="/about"
            className="font-body inline-flex items-center gap-2 self-start border-b border-white/40 pb-[3px] text-[0.9375rem] font-medium text-text-on-dark transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-white"
          >
            Read how we work
          </Link>
        </div>

        {/* Bottom — photo placeholder + caption */}
        <footer className="grid max-w-3xl gap-y-3">
          <div
            className="flex aspect-[16/7] w-full items-center justify-center border border-border-dark bg-dark-surface text-xs uppercase tracking-[0.14em] text-text-on-dark-muted"
            aria-hidden="true"
          >
            Photograph &mdash; Jon &amp; Stacie at the kitchen table
          </div>
          <p className="font-body max-w-2xl text-sm italic leading-[1.55] text-text-on-dark-muted">
            Jon and Stacie, at the kitchen table where most of it actually
            happens. San Antonio, 2026.
          </p>
        </footer>
      </div>
    </section>
  );
}
