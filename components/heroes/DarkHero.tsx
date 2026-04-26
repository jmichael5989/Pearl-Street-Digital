import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBackground from "@/components/services/hero/HeroBackground";
import HeroMetrics from "@/components/services/hero/HeroMetrics";
import HeroMockups, { type MockupVariant } from "@/components/services/hero/HeroMockups";
import ScrollIndicator from "@/components/services/hero/ScrollIndicator";

export interface DarkHeroProps {
  kicker: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  phoneDisplay?: string;
  metrics?: Array<{ value: string; label: string }>;
  showMockups?: boolean;
  mockupVariant?: MockupVariant;
}

function isExternalHref(href: string) {
  return href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
}

function CtaButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center gap-2 px-8 py-4 border border-light bg-light text-text font-medium transition-[background-color,border-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-accent-dark hover:border-accent-dark hover:text-light"
      : "inline-flex items-center px-8 py-4 border border-white/30 text-text-on-dark font-medium transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-white/10 hover:border-white/60";

  if (isExternalHref(href)) {
    return (
      <a href={href} className={className}>
        {children}
        {variant === "primary" && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {variant === "primary" && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}

function HeadlineWithAccent({
  headline,
  accent,
}: {
  headline: string;
  accent?: string;
}) {
  if (!accent) return <>{headline}</>;
  const idx = headline.indexOf(accent);
  if (idx === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, idx)}
      <em className="italic text-accent-dark">{accent}</em>
      {headline.slice(idx + accent.length)}
    </>
  );
}

export default function DarkHero({
  kicker,
  headline,
  headlineAccent,
  subheadline,
  primaryCta,
  secondaryCta,
  phoneDisplay,
  metrics,
  showMockups = true,
  mockupVariant = "generic",
}: DarkHeroProps) {
  const phoneMatch = phoneDisplay?.match(/(\(\d{3}\)\s*\d{3}-\d{4})/);
  const phoneNumber = phoneMatch?.[1];
  const phoneTel = phoneNumber ? `tel:+1${phoneNumber.replace(/[^\d]/g, "")}` : null;

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-brand-dark overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-32 lg:pt-48 lg:pb-20 flex flex-col min-h-[85vh] lg:min-h-[90vh]">
        <div className="grid grid-cols-12 gap-8 flex-1">
          {/* LEFT: copy + CTAs */}
          <div
            className={`col-span-12 ${showMockups ? "lg:col-span-7" : "lg:col-span-9"} flex flex-col`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark break-words">
              {kicker}
            </span>
            <h1
              className="font-heading text-white mt-6 text-balance"
              style={{
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              <HeadlineWithAccent headline={headline} accent={headlineAccent} />
            </h1>
            <p className="font-body text-lg text-white/70 max-w-xl mt-8">
              {subheadline}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CtaButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CtaButton>
              {secondaryCta && (
                <CtaButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CtaButton>
              )}
            </div>
            {phoneDisplay && (
              <p className="mt-4 text-sm text-white/50">
                {phoneTel && phoneNumber ? (
                  <>
                    {phoneDisplay.slice(0, phoneDisplay.indexOf(phoneNumber))}
                    <a
                      href={phoneTel}
                      className="underline-offset-4 hover:underline"
                    >
                      {phoneNumber}
                    </a>
                    {phoneDisplay.slice(
                      phoneDisplay.indexOf(phoneNumber) + phoneNumber.length,
                    )}
                  </>
                ) : (
                  phoneDisplay
                )}
              </p>
            )}
          </div>

          {/* RIGHT: mockups */}
          {showMockups && (
            <div className="hidden lg:block lg:col-span-5">
              <HeroMockups variant={mockupVariant} />
            </div>
          )}
        </div>

        {metrics && metrics.length > 0 && (
          <div className="mt-16 mb-12">
            <HeroMetrics metrics={metrics} />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
