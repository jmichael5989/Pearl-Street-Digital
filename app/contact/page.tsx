import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import ContactContent from "@/components/contact/ContactContent";
import Consultation from "@/components/sections/Consultation";

export const metadata: Metadata = {
  title: "Contact Us | Rank Point Media",
  description:
    "Book a 60-minute consultation with Jon at Rank Point Media. A two-person digital agency. We listen first, then tell you what we'd actually do.",
  openGraph: {
    title: "Contact Us | Rank Point Media",
    description:
      "Book a 60-minute consultation with Jon at Rank Point Media. A two-person digital agency. We listen first, then tell you what we'd actually do.",
    url: "https://rankpointmedia.com/contact",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rank Point Media",
    description:
      "Book a 60-minute consultation with Jon at Rank Point Media. A two-person digital agency. We listen first, then tell you what we'd actually do.",
  },
  alternates: {
    canonical: "https://rankpointmedia.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Rank Point Media",
  url: "https://rankpointmedia.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Rank Point Media",
    telephone: "+1-210-305-7372",
    email: "info@rankpointmedia.com",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main>
        <DarkHero
          kicker="CONTACT"
          headline="Tell us about your business."
          subheadline="A 60-minute conversation with Jon. We listen first, then tell you what we'd actually do — and whether we're the right fit."
          primaryCta={{ label: "Book a consultation", href: "#talk-to-us" }}
          secondaryCta={{ label: "(210) 305-7372", href: "tel:+12103057372" }}
          showMockups={false}
        />
        <Consultation />
        <ContactContent numeral="03" />
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
