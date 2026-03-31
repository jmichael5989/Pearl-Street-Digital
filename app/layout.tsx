import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
  description:
    "Rank Point Media builds affordable websites and runs local SEO, Google Ads, and digital marketing for San Antonio small businesses. Sites from $250. No contracts.",
  openGraph: {
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites from $250, local SEO, Google Ads. No contracts.",
    url: "https://rankpointmedia.com",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Antonio Web Design & Digital Marketing | Rank Point Media",
    description:
      "Affordable web design and digital marketing for San Antonio small businesses. Custom sites from $250, local SEO, Google Ads. No contracts.",
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
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
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
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "San Antonio",
                sameAs: "https://en.wikipedia.org/wiki/San_Antonio",
              },
              priceRange: "$250-$1,000",
              openingHours: "Mo-Fr 09:00-17:00",
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
