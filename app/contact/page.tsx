import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us San Antonio | Rank Point Media",
  description:
    "Book a 30-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
  openGraph: {
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Book a 30-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
    url: "https://rankpointmedia.com/contact",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Book a 30-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
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
    "@type": "LocalBusiness",
    name: "Rank Point Media",
    telephone: "+1-210-555-1234",
    email: "hello@rankpointmedia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "San Antonio",
    },
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
          kicker="— LET'S TALK"
          headline="Tell us about your business."
          headlineAccent="your business"
          subheadline="Free 30-minute consultation. We'll listen first, then show you exactly how Rank Point Media can help you grow."
          primaryCta={{ label: "Call (210) 555-1234", href: "tel:+12105551234" }}
          secondaryCta={{ label: "Email Us", href: "mailto:hello@rankpointmedia.com" }}
          showMockups={false}
        />
        <ContactContent />
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
