import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Pearl Street Digital",
  description:
    "Terms of service for Pearl Street Digital. Review the terms and conditions that govern your use of our website and services.",
  alternates: { canonical: "https://pearlstreetdigital.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-dark mb-8">
              Terms of Service
            </h1>
            <p className="text-sm text-gray mb-12">
              Last updated: March 30, 2026
            </p>

            <div className="space-y-8 text-text leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-gray">
                  By accessing or using the Pearl Street Digital website
                  (pearlstreetdigital.com), you agree to be bound by these Terms
                  of Service. Pearl Street Digital is a DBA of JSL Innovations
                  LLC, a Texas limited liability company. If you do not agree to
                  these terms, do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Services
                </h2>
                <p className="text-gray mb-3">
                  Pearl Street Digital provides digital marketing services
                  including website design, local SEO, social media management,
                  PPC advertising, reputation management, and AI search
                  optimization for businesses in San Antonio, TX and surrounding
                  areas.
                </p>
                <p className="text-gray">
                  All services are provided on a project basis unless otherwise
                  agreed in writing. Specific deliverables, timelines, and
                  pricing are outlined in individual project agreements between
                  Pearl Street Digital and the client.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Pricing and Payment
                </h2>
                <ul className="list-disc pl-6 text-gray space-y-2">
                  <li>
                    One-time project pricing is as listed on our website unless
                    otherwise agreed in a signed proposal
                  </li>
                  <li>
                    Payment terms are specified in each project agreement
                  </li>
                  <li>
                    Hosting services are billed monthly at the agreed rate
                  </li>
                  <li>
                    All prices are in US dollars and are subject to change with
                    notice
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Intellectual Property
                </h2>
                <p className="text-gray mb-3">
                  Upon full payment, clients receive ownership of custom website
                  designs and content created specifically for their project.
                  Pearl Street Digital retains the right to display completed
                  work in our portfolio and case studies unless otherwise agreed
                  in writing.
                </p>
                <p className="text-gray">
                  The Pearl Street Digital name, logo, and website content are
                  the intellectual property of JSL Innovations LLC and may not be
                  reproduced without written permission.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 text-gray space-y-2">
                  <li>
                    Provide accurate business information, content, and assets
                    needed to complete the project
                  </li>
                  <li>
                    Respond to requests for feedback and approvals in a timely
                    manner
                  </li>
                  <li>
                    Ensure that any content provided does not infringe on third
                    party intellectual property rights
                  </li>
                  <li>
                    Maintain access credentials for hosting, domain, and
                    third-party accounts as needed
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray">
                  Pearl Street Digital provides services on an &quot;as is&quot;
                  basis. While we strive for excellence in every project, we do
                  not guarantee specific business results such as search engine
                  rankings, traffic volumes, or revenue increases. Our liability
                  is limited to the amount paid for the specific service in
                  question.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Cancellation and Refunds
                </h2>
                <p className="text-gray">
                  Project cancellation policies are outlined in individual
                  project agreements. Generally, work completed prior to
                  cancellation is non-refundable. Monthly hosting services may be
                  cancelled with 30 days written notice.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Website Use
                </h2>
                <p className="text-gray">
                  You may use our website for lawful purposes only. You may not
                  attempt to interfere with the website&apos;s functionality,
                  access restricted areas, or use automated tools to scrape
                  content without permission.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Governing Law
                </h2>
                <p className="text-gray">
                  These terms are governed by the laws of the State of Texas.
                  Any disputes arising from these terms or our services shall be
                  resolved in the courts of Bexar County, Texas.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Changes to These Terms
                </h2>
                <p className="text-gray">
                  We reserve the right to update these terms at any time.
                  Changes take effect when posted to this page. Continued use of
                  our website after changes are posted constitutes acceptance of
                  the updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Contact
                </h2>
                <p className="text-gray">
                  Questions about these terms? Contact us at:
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
