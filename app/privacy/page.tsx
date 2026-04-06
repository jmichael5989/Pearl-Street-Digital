import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Rank Point Media",
  description: "Privacy Policy for Rank Point Media. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://rankpointmedia.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-dark pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Privacy Policy</h1>
            <p className="mt-3 text-[#94A3B8]">Last updated: March 30, 2026</p>
          </div>
        </section>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray">
            {/* Use a series of divs with proper styling instead of prose */}
            <div className="space-y-8 text-gray leading-relaxed text-base">
              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Information We Collect</h2>
                <p>When you visit our website or submit a contact form, we may collect the following information:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Name, email address, and phone number (when you submit our contact form)</li>
                  <li>Service interest and project details you share with us</li>
                  <li>Browser type, IP address, and device information (collected automatically)</li>
                  <li>Pages visited and time spent on our website (via analytics)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send project updates and service-related communications</li>
                  <li>Improve our website and marketing efforts</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-2">We do not sell, trade, or rent your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Cookies and Analytics</h2>
                <p>We use Google Analytics to understand how visitors interact with our website. This service may use cookies to collect anonymous usage data. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Third-Party Services</h2>
                <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Your Rights</h2>
                <p>You have the right to request access to, correction of, or deletion of your personal information. To make such a request, contact us at hello@rankpointmedia.com.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Text Message Consent</h2>
                <p>If you opt in to receive text messages from Rank Point Media, standard message and data rates may apply. You may opt out at any time by replying STOP. Consent to receive text messages is not a condition of purchasing any services.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Contact Us</h2>
                <p>If you have questions about this Privacy Policy, contact us at:</p>
                <p className="mt-2">
                  Rank Point Media<br />
                  Email: hello@rankpointmedia.com<br />
                  Phone: (210) 555-1234
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
