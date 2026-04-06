import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Rank Point Media",
  description: "Terms of Service for Rank Point Media. Review our terms and conditions for using our website and services.",
  alternates: { canonical: "https://rankpointmedia.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-dark pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Terms of Service</h1>
            <p className="mt-3 text-[#94A3B8]">Last updated: March 30, 2026</p>
          </div>
        </section>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-gray leading-relaxed text-base">
              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Agreement to Terms</h2>
                <p>By accessing or using the Rank Point Media website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Services</h2>
                <p>Rank Point Media provides web design, development, SEO, digital marketing, and related services. Specific service terms, deliverables, timelines, and pricing are outlined in individual project agreements between Rank Point Media and each client.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Intellectual Property</h2>
                <p>Upon full payment, clients own all website code, content, images, and domain credentials created as part of their project. Rank Point Media retains the right to display completed work in our portfolio and case studies unless otherwise agreed in writing.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Payment Terms</h2>
                <p>Payment terms are specified in individual project agreements. One-time website builds require a deposit before work begins and final payment upon delivery. Monthly retainer services are billed at the beginning of each billing period.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Client Responsibilities</h2>
                <p>Clients are responsible for providing accurate business information, content, images, and timely feedback during the project. Delays in providing required materials may extend project timelines.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Limitation of Liability</h2>
                <p>Rank Point Media is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Cancellation and Refunds</h2>
                <p>Clients may cancel a project at any time. Refunds are prorated based on work completed at the time of cancellation. Monthly retainer services may be canceled with 30 days written notice.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Website Use</h2>
                <p>You may not use this website for any unlawful purpose, attempt to gain unauthorized access to our systems, or interfere with the proper functioning of the website.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Governing Law</h2>
                <p>These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Bexar County, Texas.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Changes to Terms</h2>
                <p>We reserve the right to update these Terms of Service at any time. Changes take effect upon posting to this page.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-dark mb-3" style={{ fontSize: "var(--text-h3)" }}>Contact Us</h2>
                <p>Questions about these terms? Contact us at:</p>
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
