import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";
import Consultation from "@/components/sections/Consultation";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

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
      <link rel="preconnect" href="https://app.cal.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cal.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        href="https://app.cal.com/embed/embed.js"
        as="script"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="rpm3">
        <ContactHero />
        <Consultation />
        <ContactContent />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
