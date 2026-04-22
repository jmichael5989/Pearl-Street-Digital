import type { Metadata } from "next";
import { Outfit, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MobileCTABar from "@/components/ui/MobileCTABar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
  description:
    "Rank Point Media builds affordable websites and runs local SEO, Google Ads, and digital marketing for San Antonio small businesses. Sites from $250. Flexible plans.",
  openGraph: {
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites from $250, local SEO, Google Ads. Flexible plans.",
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
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites from $250, local SEO, Google Ads. Flexible plans.",
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
      className={`${outfit.variable} ${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
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
        {children}
        <MobileCTABar />
      </body>
    </html>
  );
}
