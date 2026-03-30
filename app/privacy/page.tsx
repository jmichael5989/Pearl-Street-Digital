import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Pearl Street Digital",
  description:
    "Privacy policy for Pearl Street Digital. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://pearlstreetdigital.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-dark mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray mb-12">
              Last updated: March 30, 2026
            </p>

            <div className="prose-custom space-y-8 text-text leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray mb-3">
                  Pearl Street Digital (a DBA of JSL Innovations LLC) collects
                  information you voluntarily provide when you use our website or
                  contact us. This includes:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2">
                  <li>
                    Name, email address, and phone number submitted through our
                    contact form
                  </li>
                  <li>
                    Information about the services you are interested in
                  </li>
                  <li>
                    Messages and communications you send to us
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Automatically Collected Information
                </h2>
                <p className="text-gray mb-3">
                  When you visit our website, we may automatically collect
                  certain information through cookies and similar technologies:
                </p>
                <ul className="list-disc pl-6 text-gray space-y-2">
                  <li>
                    Browser type, device type, and operating system
                  </li>
                  <li>
                    Pages visited, time spent on pages, and navigation paths
                  </li>
                  <li>
                    IP address and approximate geographic location
                  </li>
                  <li>
                    Referring website or search terms used to find us
                  </li>
                </ul>
                <p className="text-gray mt-3">
                  We use Google Analytics 4 and Google Tag Manager to collect
                  this data. Google&apos;s privacy policy applies to data
                  collected by their services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-gray space-y-2">
                  <li>
                    To respond to your inquiries and provide the services you
                    request
                  </li>
                  <li>
                    To improve our website and marketing materials
                  </li>
                  <li>
                    To send follow-up communications related to your inquiry
                    (you can opt out at any time)
                  </li>
                  <li>
                    To analyze website traffic and usage patterns
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Information Sharing
                </h2>
                <p className="text-gray">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information with trusted service
                  providers who assist us in operating our website and conducting
                  our business, provided they agree to keep your information
                  confidential. We may also disclose information when required by
                  law or to protect our rights.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Cookies
                </h2>
                <p className="text-gray">
                  Our website uses cookies to enhance your browsing experience
                  and to collect analytics data. You can control cookie settings
                  through your browser preferences. Disabling cookies may affect
                  some website functionality.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Data Security
                </h2>
                <p className="text-gray">
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, alteration, or
                  disclosure. However, no method of internet transmission or
                  electronic storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Your Rights
                </h2>
                <p className="text-gray">
                  You have the right to request access to, correction of, or
                  deletion of your personal information. To exercise these
                  rights, contact us at hello@pearlstreetdigital.com. We will
                  respond to your request within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray">
                  We may update this privacy policy from time to time. Changes
                  will be posted on this page with an updated revision date. We
                  encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Contact Us
                </h2>
                <p className="text-gray">
                  If you have questions about this privacy policy or our data
                  practices, contact us at:
                </p>
                <p className="text-gray mt-3">
                  Pearl Street Digital (JSL Innovations LLC)
                  <br />
                  San Antonio, TX
                  <br />
                  Email: hello@pearlstreetdigital.com
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+12105551234"
                    className="text-primary hover:underline"
                  >
                    (210) 555-1234
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
