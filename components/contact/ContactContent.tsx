import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons/ContactIcons";
import ContactForm from "@/components/forms/ContactForm";

/**
 * Contact page main content section. Editorial register matching the
 * locked sitewide pattern.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, no numbered editorial eyebrow, font-bold serif H2,
 * rounded-full bordered chip avatars for the "What Happens Next"
 * step numerals in retired text-primary, hover:text-primary on
 * contact rows, and a rounded-2xl + drop-shadow form card that hit
 * the banned card-chrome pattern from CLAUDE.md).
 *
 * Composition now:
 *   - Numbered editorial eyebrow (numeral via prop; defaults to "02" for
 *     the contact page where it follows the DarkHero, set to "05" on the
 *     homepage where it follows Hero/WhyUs/Services/CustomDev). Left-
 *     aligned serif H2 weight 400, graphite lede.
 *   - Two-column split at lg: left has "What happens next" with
 *     serif numerals (no avatar chips) + contact info rows +
 *     trust callout. Right has the form on a hairline-bordered card
 *     with seating shadow only (no rounded-2xl, no drop-shadow).
 *
 * The #talk-to-us anchor stays on the Consultation (Cal.com) section
 * — that's where /contact#talk-to-us CTAs (≈30 across the site) land.
 * On the contact page, ContactContent sits above Consultation so users
 * scrolling past the form still reach the calendar; on the homepage
 * ContactContent is the only contact surface and no anchor is needed.
 */

const steps = [
  {
    num: "i.",
    text: "We review your message within one business day.",
  },
  {
    num: "ii.",
    text: "Jon calls or emails back with a tailored read on what we'd do.",
  },
  {
    num: "iii.",
    text: "You decide whether we're the right fit. No pressure either way.",
  },
];

export default function ContactContent({
  numeral = "02",
}: {
  numeral?: string;
} = {}) {
  return (
    <section
      aria-labelledby="contact-heading"
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
            <span className="font-heading text-base font-normal mr-1">
              {numeral}
            </span>
            &nbsp;/&nbsp; Get in touch
          </div>
        </header>

        {/* H2 */}
        <h2
          id="contact-heading"
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
          Two ways to reach us.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          Tell us about your business in the message below &mdash; or reach
          Jon directly by{" "}
          <a
            href="tel:+12103057372"
            className="font-medium text-accent underline underline-offset-4 hover:text-text"
          >
            phone
          </a>{" "}
          or{" "}
          <a
            href="mailto:info@rankpointmedia.com"
            className="font-medium text-accent underline underline-offset-4 hover:text-text"
          >
            email
          </a>
          . You&rsquo;ll hear back within one business day.
        </p>

        {/* Two-column composition */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — What Happens Next + contact methods */}
          <div className="lg:col-span-5">
            <h3
              className="font-heading text-text"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                fontWeight: 400,
                margin: 0,
              }}
            >
              What happens next.
            </h3>

            {/* Editorial numbered steps — serif numerals, no chips */}
            <ol className="mt-6 border-t border-border">
              {steps.map((step) => (
                <li
                  key={step.num}
                  className="grid grid-cols-1 gap-y-2 border-b border-border py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-x-4 sm:gap-y-0"
                >
                  <span
                    className="font-heading text-accent"
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      paddingTop: "0.15rem",
                    }}
                  >
                    {step.num}
                  </span>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.58,
                      color: "var(--color-brand-text)",
                      margin: 0,
                    }}
                  >
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            {/* Contact info rows */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+12103057372"
                className="flex items-center gap-4 text-text transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-border bg-light-surface">
                  <PhoneIcon />
                </span>
                <span className="text-sm font-medium">(210) 305-7372</span>
              </a>
              <a
                href="mailto:info@rankpointmedia.com"
                className="flex items-center gap-4 text-text transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-border bg-light-surface">
                  <MailIcon />
                </span>
                <span className="text-sm font-medium">
                  info@rankpointmedia.com
                </span>
              </a>
              <div className="flex items-center gap-4 text-text">
                <span className="flex h-10 w-10 items-center justify-center border border-border bg-light-surface">
                  <MapPinIcon />
                </span>
                <span className="text-sm font-medium">
                  San Antonio, TX
                </span>
              </div>
            </div>

            {/* Trust callout — hairline border, no shadow */}
            <div className="mt-10 flex items-center gap-3 border border-border bg-light-surface px-5 py-4">
              <ClockIcon />
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  color: "var(--color-brand-text)",
                  margin: 0,
                }}
              >
                We respond to every message within one business day.
              </p>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="lg:col-span-7">
            <div
              className="border border-border bg-light p-6 sm:p-8"
              style={{ boxShadow: "0 1px 0 rgba(20, 33, 61, 0.08)" }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
