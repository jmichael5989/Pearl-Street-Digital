import type { Metadata } from "next";
import {
  Source_Serif_4,
  Source_Sans_3,
  Source_Code_Pro,
  Fraunces,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderRouter from "@/components/ui/HeaderRouter";
import MobileCTABar from "@/components/ui/MobileCTABar";
import TransitionProvider from "@/components/transitions/TransitionProvider";

// Primary display face. Locked 2026-04-24 per .impeccable.md Resolved Decisions §1.
// Loaded as a variable font (weight axis 200-900). Italic axis kept solely to
// render the "Point" wordmark in the brand name — no other site usage.
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
  style: ["normal"],
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
  style: ["normal"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

// ── Three-color redesign faces (homepage, phase 1) ──────────────────────────
// Added alongside the Source family, not replacing it: the new homepage uses
// these; every other route still uses Source Serif 4 / Sans 3 / Code Pro.
// Fraunces = display serif (opsz axis kept for optical display sizing); Inter
// Tight = body/UI; JetBrains Mono = small labels + the ghost numerals. Inter
// Tight must be a real loaded family because the voxel hero samples it via
// canvas 2D (`await document.fonts.ready` gates the sampling).
const fraunces = Fraunces({
  variable: "--ff-fraunces",
  subsets: ["latin"],
  // opsz axis intentionally omitted: it enlarges the variable-font payload and
  // the hero <h1> is the LCP element, so a smaller Fraunces file swaps in
  // sooner. Optical sizing is a negligible visual difference at our sizes.
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const interTight = Inter_Tight({
  variable: "--ff-inter-tight",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--ff-jetbrains",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rankpointmedia.com"),
  title: "Web Design & Digital Marketing | Rank Point Media",
  description:
    "Custom-coded websites, local SEO, and Google Ads. A two-person agency. No templates, no account managers, no shortcuts.",
  openGraph: {
    title: "Web Design & Digital Marketing | Rank Point Media",
    description:
      "Custom-coded websites, local SEO, and Google Ads. A two-person agency. No templates, no account managers, no shortcuts.",
    url: "https://rankpointmedia.com",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
    // og:image is provided two ways: a static fallback via the manual
    // <meta> tags in <head> below, and the dynamic `app/opengraph-image.tsx`
    // file convention which Next.js auto-injects. We don't set
    // `openGraph.images` here because the file convention overrides it;
    // emitting the static fallback as a manual <meta> sidesteps the
    // override so both URLs appear as separate og:image tags and social
    // crawlers can fall back if the dynamic one fails. See SEO audit
    // 2026-05-21 §5.1 and the comment block in app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Digital Marketing | Rank Point Media",
    description:
      "Custom-coded websites, local SEO, and Google Ads. A two-person agency. No templates, no account managers, no shortcuts.",
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
      className={`${sourceSerif4.variable} ${sourceSans3.variable} ${sourceCodePro.variable} ${fraunces.variable} ${interTight.variable} ${jetBrainsMono.variable} h-full antialiased`}
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
        {/* Static og:image fallback. Emitted manually because Next.js's
            file convention at `app/opengraph-image.tsx` would otherwise
            override anything we set via `metadata.openGraph.images`.
            Two og:image tags in the head means social crawlers (LinkedIn,
            Facebook, Slack, iMessage) have a guaranteed-working preview
            even if the dynamic ImageResponse fails. The dynamic tag is
            auto-appended by Next.js after these — both URLs will appear.
            Regenerate the static PNG with:
              curl -s -o public/og-image.png http://localhost:3000/opengraph-image
            See SEO audit 2026-05-21 §5.1. */}
        <meta
          property="og:image"
          content="https://rankpointmedia.com/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Rank Point Media — Websites that Rank."
        />
        <meta
          name="twitter:image"
          content="https://rankpointmedia.com/og-image.png"
        />
        {/* Umami analytics — privacy-friendly, cookieless, no PII.
            afterInteractive so it doesn't block first paint; Umami's
            script hooks into the History API so SPA navigations still
            fire pageviews. Tracker dashboard:
            cloud.umami.is/analytics/us/websites/2bef9653-2613-43bc-bffb-e172adc8757f */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="2bef9653-2613-43bc-bffb-e172adc8757f"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 (gtag.js) — production only. We gate on
            VERCEL_ENV so localhost dev traffic and Vercel preview
            deployments don't pollute the GA4 property. The root layout
            is a Server Component, so this branch runs at request time
            and the script tags are simply omitted from non-prod HTML.
            afterInteractive so it doesn't block first paint; gtag.js
            installs a History API listener on `config`, so App Router
            client-side navigations still fire pageviews. */}
        {process.env.VERCEL_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-ZB14MHHYD8"
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ZB14MHHYD8');
              `}
            </Script>
          </>
        )}
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
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://rankpointmedia.com#org",
                  name: "Rank Point Media",
                  alternateName: "JSL Innovations LLC",
                  description:
                    "A two-person digital agency. Custom-coded websites, local SEO, Google Ads, social media, AI search, and reputation management.",
                  url: "https://rankpointmedia.com",
                  telephone: "+1-210-305-7372",
                  email: "info@rankpointmedia.com",
                  priceRange: "$$",
                  sameAs: [],
                },
              ],
            }),
          }}
        />
        <HeaderRouter />
        <TransitionProvider>{children}</TransitionProvider>
        <MobileCTABar />
      </body>
    </html>
  );
}
