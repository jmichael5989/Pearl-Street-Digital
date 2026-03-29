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
  title: "AI-Powered Marketing San Antonio | Pearl Street Digital",
  description:
    "Pearl Street Digital helps San Antonio small businesses grow with AI-powered websites, SEO, Google Ads, and digital marketing. Fast builds, real results, no long-term contracts.",
  openGraph: {
    title: "AI-Powered Marketing San Antonio | Pearl Street Digital",
    description:
      "San Antonio small business marketing: custom websites, local SEO, Google Ads, and AI-powered digital marketing. No contracts, fast builds.",
    url: "https://pearlstreetdigital.com",
    siteName: "Pearl Street Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Marketing San Antonio | Pearl Street Digital",
    description:
      "San Antonio small business marketing: custom websites, local SEO, Google Ads, and AI-powered digital marketing.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://pearlstreetdigital.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pearl Street Digital",
              description:
                "AI-powered digital marketing agency serving San Antonio small businesses with web design, SEO, Google Ads, and social media marketing.",
              url: "https://pearlstreetdigital.com",
              telephone: "+1-210-555-1234",
              email: "hello@pearlstreetdigital.com",
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
              priceRange: "$250-$1000",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
