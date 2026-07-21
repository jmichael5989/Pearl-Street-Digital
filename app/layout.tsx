import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderRouter from "@/components/ui/HeaderRouter";
import MobileCTABar from "@/components/ui/MobileCTABar";
import TransitionProvider from "@/components/transitions/TransitionProvider";

// ── Three-color faces (the site's only type system) ─────────────────────────
// Fraunces / Inter Tight / JetBrains Mono are the locked faces (see
// .impeccable.md §5). The prior Source Serif 4 / Sans 3 / Code Pro family was
// removed 2026-07-20 once every route was on the three-color system.
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
  appleWebApp: {
    capable: true,
    title: "Rank Point",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#14213D" },
  ],
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
      className={`${fraunces.variable} ${interTight.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
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
      <body className="min-h-full flex flex-col pb-[calc(3.5rem_+_env(safe-area-inset-bottom))] md:pb-0">
        {/* Pre-paint capability flag: matches VoxelHero's WebGL gate exactly.
            Adds `voxel-cap` to <html> before first paint (persists across SPA
            nav) so the homepage hero statement is hidden via CSS until the glass
            wordmark drops — no verbiage flash on entry. Harmless on other routes. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var m=window.matchMedia;if(m('(min-width: 900px) and (pointer: fine), (min-width: 1024px)').matches&&!m('(prefers-reduced-motion: reduce)').matches&&!(navigator.connection&&navigator.connection.saveData)){document.documentElement.classList.add('voxel-cap')}}catch(e){}",
          }}
        />
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
