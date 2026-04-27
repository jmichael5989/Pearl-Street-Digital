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
  metadataBase: new URL("https://rankpointmedia.com"),
  title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
  description:
    "A two-person agency in Leon Springs building custom-coded websites and digital marketing for small businesses in San Antonio. Transparent pricing from $99/mo.",
  openGraph: {
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "A two-person agency in Leon Springs building custom-coded websites and digital marketing for small businesses in San Antonio. Transparent pricing from $99/mo.",
    url: "https://rankpointmedia.com",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
    // Image is provided by app/opengraph-image.tsx — Next.js auto-injects
    // it into og:image and twitter:image at build time. Removing the
    // static `/og-image.png` reference (which 404'd in production) lets
    // the dynamic OG image take over.
  },
  twitter: {
    card: "summary_large_image",
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "A two-person agency in Leon Springs building custom-coded websites and digital marketing for small businesses in San Antonio. Transparent pricing from $99/mo.",
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
      <head>
        {/* Cal.com resource hints — the booking widget on the homepage is
            the highest-leverage interactive element on the site. Preconnect
            opens TCP/TLS to the embed origins (app.cal.com serves embed.js,
            cal.com serves the iframe content). Preload starts fetching the
            ~50KB embed.js during HTML parse so it's already in the cache by
            the time Consultation's useEffect appends the script tag — saves
            ~200-500ms of "Loading the calendar..." on first visit. */}
        <link
          rel="preconnect"
          href="https://app.cal.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cal.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://app.cal.com/embed/embed.js"
          as="script"
          crossOrigin="anonymous"
        />
        {/* Geo meta tags — site-wide local-search signals. Old-school but
            still parsed by some local-search crawlers (notably Bing Local
            and a handful of niche directory parsers). Cost is two lines of
            HTML, so we ship them. Coordinates are the Leon Springs
            neighborhood centroid that the LocalBusiness JSON-LD also
            references; keep them in sync if either changes. */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content="29.4241;-98.4936" />
        <meta name="ICBM" content="29.4241, -98.4936" />
      </head>
      <body className="min-h-full flex flex-col pb-14 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://rankpointmedia.com#website",
                  url: "https://rankpointmedia.com",
                  name: "Rank Point Media",
                  publisher: { "@id": "https://rankpointmedia.com#org" },
                },
                {
                  "@type": ["LocalBusiness", "MarketingAgency"],
                  "@id": "https://rankpointmedia.com#org",
                  name: "Rank Point Media",
              alternateName: "JSL Innovations LLC",
              description:
                "A two-person web agency in Leon Springs, San Antonio, building custom-coded websites and running local SEO, Google Ads, and digital marketing for small businesses across Texas.",
              url: "https://rankpointmedia.com",
              telephone: "+1-210-305-7372",
              email: "info@rankpointmedia.com",
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
                },
              ],
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
