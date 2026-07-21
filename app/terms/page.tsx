import type { Metadata } from "next";
import LegalHero from "@/components/legal/LegalHero";
import LegalBody, { type LegalSection } from "@/components/legal/LegalBody";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service | Rank Point Media",
  description: "Terms of Service for Rank Point Media. Review our terms and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | Rank Point Media",
    description: "Terms of Service for Rank Point Media.",
    url: "https://rankpointmedia.com/terms",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Rank Point Media",
    description: "Terms of Service for Rank Point Media.",
  },
  alternates: { canonical: "https://rankpointmedia.com/terms" },
};

const sections: LegalSection[] = [
  {
    title: "Agreement to Terms",
    body: (
      <p>
        By accessing or using the Rank Point Media website, you agree to be
        bound by these Terms of Service. If you do not agree to these terms,
        please do not use our website.
      </p>
    ),
  },
  {
    title: "Services",
    body: (
      <p>
        Rank Point Media provides web design, development, SEO, digital
        marketing, and related services. Specific service terms,
        deliverables, timelines, and pricing are outlined in individual
        project agreements between Rank Point Media and each client.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <p>
        Upon full payment, clients own all website code, content, images, and
        domain credentials created as part of their project. Rank Point Media
        retains the right to display completed work in our portfolio and case
        studies unless otherwise agreed in writing.
      </p>
    ),
  },
  {
    title: "Payment Terms",
    body: (
      <p>
        Payment terms are specified in individual project agreements. One-time
        website builds require a deposit before work begins and final payment
        upon delivery. Monthly retainer services are billed at the beginning
        of each billing period.
      </p>
    ),
  },
  {
    title: "Client Responsibilities",
    body: (
      <p>
        Clients are responsible for providing accurate business information,
        content, images, and timely feedback during the project. Delays in
        providing required materials may extend project timelines.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        Rank Point Media is not liable for any indirect, incidental, or
        consequential damages arising from the use of our website or services.
        Our total liability shall not exceed the amount paid for the specific
        service in question.
      </p>
    ),
  },
  {
    title: "Cancellation and Refunds",
    body: (
      <p>
        Clients may cancel a project at any time. Refunds are prorated based
        on work completed at the time of cancellation. Monthly retainer
        services may be canceled with 30 days written notice.
      </p>
    ),
  },
  {
    title: "Website Use",
    body: (
      <p>
        You may not use this website for any unlawful purpose, attempt to gain
        unauthorized access to our systems, or interfere with the proper
        functioning of the website.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of the State of Texas. Any
        disputes shall be resolved in the courts of Bexar County, Texas.
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    body: (
      <p>
        We reserve the right to update these Terms of Service at any time.
        Changes take effect upon posting to this page.
      </p>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p>Questions about these terms? Contact us at:</p>
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

export default function TermsPage() {
  return (
    <>
      <main className="rpm3">
        <LegalHero
          kicker="LEGAL"
          headline="Terms of service"
          lede="The terms and conditions for using our website and working with us."
          primaryCta={{ label: "Book a consultation", href: "/contact#talk-to-us" }}
          secondaryCta={{ label: "Email us", href: "mailto:info@rankpointmedia.com" }}
        />
        <LegalBody
          number="01"
          label="Terms of service"
          heading="Terms and conditions"
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
