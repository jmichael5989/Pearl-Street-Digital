import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us San Antonio | Rank Point Media",
  description:
    "Get in touch with Rank Point Media for a free consultation. AI-powered web design, SEO, and digital marketing for San Antonio small businesses.",
  openGraph: {
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Get in touch with Rank Point Media for a free consultation. AI-powered web design, SEO, and digital marketing for San Antonio small businesses.",
    url: "https://rankpointmedia.com/contact",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us San Antonio | Rank Point Media",
    description:
      "Get in touch with Rank Point Media for a free consultation. AI-powered web design, SEO, and digital marketing for San Antonio small businesses.",
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
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
