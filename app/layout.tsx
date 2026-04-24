import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import HeaderRouter from "@/components/ui/HeaderRouter";
import MobileCTABar from "@/components/ui/MobileCTABar";

// Primary display face. Locked 2026-04-24 per .impeccable.md Resolved Decisions §1.
// Loaded as a variable font (weight axis 200-900) with italic — omitting `weight`
// gives us the full variable axis in a single file per style.
const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["Georgia", "Iowan Old Style", "serif"],
});

// Primary body face. Locked 2026-04-24 per .impeccable.md Resolved Decisions §1.
// `display: 'optional'` avoids FOUT on long-read body; fallback is Arial so CLS
// stays near zero when the font is not yet cached.
const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "optional",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

// Mono companion for timestamps, metadata, labels. Same Adobe Source family as
// Source Serif 4 and Source Sans 3 (SIL Open Font License, free, designed to pair).
// Loaded as a variable font; `display: 'swap'` because it's used in UI affordances
// where fallback is acceptable during initial load.
const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
  description:
    "Rank Point Media builds affordable websites and runs local SEO, Google Ads, and digital marketing for San Antonio small businesses. Sites starting at $99/month. Flexible plans.",
  openGraph: {
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites starting at $99/month, local SEO, Google Ads. Flexible plans.",
    url: "https://rankpointmedia.com",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rankpointmedia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rank Point Media - San Antonio Web Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites starting at $99/month, local SEO, Google Ads. Flexible plans.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rankpointmedia.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSerif4.variable} ${sourceSans3.variable} ${sourceCodePro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-14 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "Rank Point Media",
              alternateName: "JSL Innovations LLC",
              description:
                "AI-powered digital marketing agency serving San Antonio small businesses with web design, SEO, Google Ads, and social media marketing.",
              url: "https://rankpointmedia.com",
              telephone: "+1-210-555-1234",
              email: "hello@rankpointmedia.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78257",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.4241,
                longitude: -98.4936,
              },
              areaServed: [
                { "@type": "City", name: "San Antonio", sameAs: "https://en.wikipedia.org/wiki/San_Antonio" },
                { "@type": "City", name: "Leon Springs" },
                { "@type": "City", name: "Boerne" },
                { "@type": "City", name: "Helotes" },
                { "@type": "City", name: "Fair Oaks Ranch" },
                { "@type": "City", name: "New Braunfels" },
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [],
            }),
          }}
        />
        <HeaderRouter />
        {children}
        <MobileCTABar />
      </body>
    </html>
  );
}
