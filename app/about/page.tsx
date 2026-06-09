import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Rank Point Media | Two-Person Digital Agency",
  description:
    "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads. No account managers, no offshore developers.",
  openGraph: {
    title: "About Rank Point Media | Two-Person Digital Agency",
    description:
      "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads. No account managers, no offshore developers.",
    url: "https://rankpointmedia.com/about",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rank Point Media | Two-Person Digital Agency",
    description:
      "Jon and Stacie, the two-person team behind Rank Point Media. Custom-coded websites, local SEO, and Google Ads. No account managers, no offshore developers.",
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
