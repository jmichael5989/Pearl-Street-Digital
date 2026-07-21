import type { Metadata } from "next";
import LegalHero from "@/components/legal/LegalHero";
import LegalBody, { type LegalSection } from "@/components/legal/LegalBody";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

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

const sections: LegalSection[] = [
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          When you visit our website or submit a contact form, we may collect
          the following information:
        </p>
        <ul>
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
        <ul>
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send project updates and service-related communications</li>
          <li>Improve our website and marketing efforts</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
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
        <a href="mailto:info@rankpointmedia.com">info@rankpointmedia.com</a>.
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
        <p>
          Rank Point Media
          <br />
          Email:{" "}
          <a href="mailto:info@rankpointmedia.com">info@rankpointmedia.com</a>
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
      <main className="rpm3">
        <LegalHero
          kicker="LEGAL"
          headline="Privacy policy"
          lede="How we collect, use, and protect the information you share with us."
          primaryCta={{ label: "Book a consultation", href: "/contact#talk-to-us" }}
          secondaryCta={{ label: "Email us", href: "mailto:info@rankpointmedia.com" }}
        />
        <LegalBody
          number="01"
          label="Privacy policy"
          heading="How we handle your information"
          lastUpdated="March 30, 2026"
          sections={sections}
        />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
