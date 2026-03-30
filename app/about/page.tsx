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
  title: "About Us San Antonio | Pearl Street Digital",
  description:
    "Pearl Street Digital is a founder-led digital marketing agency in San Antonio, TX. AI-powered web design, SEO, and marketing for local small businesses. No contracts.",
  openGraph: {
    title: "About Us San Antonio | Pearl Street Digital",
    description:
      "Pearl Street Digital is a founder-led digital marketing agency in San Antonio, TX. AI-powered web design, SEO, and marketing for local small businesses. No contracts.",
    url: "https://pearlstreetdigital.com/about",
    siteName: "Pearl Street Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us San Antonio | Pearl Street Digital",
    description:
      "Pearl Street Digital is a founder-led digital marketing agency in San Antonio, TX. AI-powered web design, SEO, and marketing for local small businesses. No contracts.",
  },
  alternates: {
    canonical: "https://pearlstreetdigital.com/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pearl Street Digital",
  url: "https://pearlstreetdigital.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Pearl Street Digital",
    foundingDate: "2026",
    url: "https://pearlstreetdigital.com",
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
