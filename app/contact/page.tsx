import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import DarkHero from "@/components/heroes/DarkHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us San Antonio | Rank Point Media",
  description:
    "Book a 60-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
  openGraph: {
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Book a 60-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
    url: "https://rankpointmedia.com/contact",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Book a 60-minute consultation with Jon Michael at Rank Point Media. A two-person agency in Leon Springs serving small businesses in San Antonio.",
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
    telephone: "+1-210-305-7372",
    email: "info@rankpointmedia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78257",
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
          kicker="CONTACT"
          headline="Tell us about your business."
          subheadline="A 60-minute conversation with Jon. We listen first, then tell you what we'd actually do — and whether we're the right fit."
          primaryCta={{ label: "Book a consultation", href: "/#talk-to-us" }}
          secondaryCta={{ label: "Email us", href: "mailto:info@rankpointmedia.com" }}
          showMockups={false}
        />
        <ContactContent />
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
