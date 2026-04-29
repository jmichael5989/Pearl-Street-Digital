import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
  description:
    "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads for small businesses in San Antonio.",
  openGraph: {
    title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
    description:
      "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads for small businesses in San Antonio.",
    url: "https://rankpointmedia.com/about",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
    description:
      "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads for small businesses in San Antonio.",
  },
  alternates: {
    canonical: "https://rankpointmedia.com/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Rank Point Media",
  url: "https://rankpointmedia.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Rank Point Media",
    foundingDate: "2026",
    url: "https://rankpointmedia.com",
    telephone: "+1-210-305-7372",
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
    member: [
      {
        "@type": "Person",
        name: "Jon",
        jobTitle: "Founder & Lead Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Rank Point Media",
        },
      },
      {
        "@type": "Person",
        name: "Stacie",
        jobTitle: "Marketing Lead & Social Media Manager",
        worksFor: {
          "@type": "Organization",
          name: "Rank Point Media",
        },
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}
