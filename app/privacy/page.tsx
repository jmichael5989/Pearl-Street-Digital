import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Rank Point Media",
  description:
    "Privacy Policy for Rank Point Media. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Rank Point Media",
    description:
      "Privacy Policy for Rank Point Media. How we collect, use, and protect your personal information.",
    url: "https://rankpointmedia.com/privacy",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Rank Point Media",
    description:
      "How we collect, use, and protect your personal information.",
  },
  alternates: { canonical: "https://rankpointmedia.com/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          When you visit our website or submit a contact form, we may collect
          the following information:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            Name, email address, and phone number (when you submit our contact
            form)
          </li>
          <li>Service interest and project details you share with us</li>
          <li>
            Browser type, IP address, and device information (collected
            automatically)
          </li>
          <li>Pages visited and time spent on our website (via analytics)</li>
        </ul>
      </>
    ),
  },
  {
    title: "How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send project updates and service-related communications</li>
          <li>Improve our website and marketing efforts</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-3">
          We do not sell, trade, or rent your personal information to third
          parties.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and analytics",
    body: (
      <p>
        We use Google Analytics to understand how visitors interact with our
        website. This service may use cookies to collect anonymous usage
        data. You can opt out of Google Analytics by installing the Google
        Analytics Opt-out Browser Add-on.
      </p>
    ),
  },
  {
    title: "Data security",
    body: (
      <p>
        We implement reasonable security measures to protect your personal
        information. However, no method of transmission over the Internet is
        100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Third-party services",
    body: (
      <p>
        Our website may contain links to third-party websites or services. We
        are not responsible for the privacy practices of these external
        sites. We encourage you to review their privacy policies.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You have the right to request access to, correction of, or deletion
        of your personal information. To make such a request, contact us at{" "}
        <a
          href="mailto:info@rankpointmedia.com"
          className="font-medium text-accent underline underline-offset-4 hover:text-text"
        >
          info@rankpointmedia.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Text message consent",
    body: (
      <p>
        If you opt in to receive text messages from Rank Point Media,
        standard message and data rates may apply. You may opt out at any
        time by replying STOP. Consent to receive text messages is not a
        condition of purchasing any services.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated revision date.
      </p>
    ),
  },
  {
    title: "Contact us",
    body: (
      <>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p className="mt-3">
          Rank Point Media
          <br />
          Email:{" "}
          <a
            href="mailto:info@rankpointmedia.com"
            className="font-medium text-accent underline underline-offset-4 hover:text-text"
          >
            info@rankpointmedia.com
          </a>
          <br />
          Phone: (210) 305-7372
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main>
        <DarkHero
          kicker="LEGAL"
          headline="Privacy policy."
          subheadline="How we collect, use, and protect the information you share with us."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "Email us", href: "mailto:info@rankpointmedia.com" }}
          showMockups={false}
        />

        <section
          aria-labelledby="privacy-heading"
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
                  02
                </span>
                &nbsp;/&nbsp; Privacy policy
              </div>
            </header>

            {/* H2 */}
            <h2
              id="privacy-heading"
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
              How we handle your information.
            </h2>

            {/* Last updated caption */}
            <p
              className="mt-5 font-body italic"
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.5,
                color: "var(--color-gray)",
              }}
            >
              Last updated: March 30, 2026.
            </p>

            {/* Policy sections — hairline-divided */}
            <div
              className="mt-12 max-w-3xl border-t border-border"
              style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
            >
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="border-b border-border py-8 lg:py-10"
                >
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
                    {section.title}
                  </h3>
                  <div
                    className="mt-3 font-body"
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--color-brand-text)",
                      maxWidth: "65ch",
                    }}
                  >
                    {section.body}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
