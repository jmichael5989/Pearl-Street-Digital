import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutStats from "@/components/about/AboutStats";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
  description:
    "Meet Jon and Stacie, the husband-and-wife team behind Rank Point Media. We build fast, high-performing websites and run results-driven marketing campaigns for San Antonio small businesses.",
  openGraph: {
    title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
    description:
      "Meet Jon and Stacie, the husband-and-wife team behind Rank Point Media. We build fast, high-performing websites and run results-driven marketing campaigns for San Antonio small businesses.",
    url: "https://rankpointmedia.com/about",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rank Point Media | San Antonio Web Design & Marketing Team",
    description:
      "Meet Jon and Stacie, the husband-and-wife team behind Rank Point Media. We build fast, high-performing websites and run results-driven marketing campaigns for San Antonio small businesses.",
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
    member: [
      {
        "@type": "Person",
        name: "Jon Michael",
        jobTitle: "Founder & Lead Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Rank Point Media",
        },
      },
      {
        "@type": "Person",
        name: "Stacie Michael",
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
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutStats />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
