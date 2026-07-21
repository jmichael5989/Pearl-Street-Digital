import { ImageResponse } from "next/og";

/**
 * Root-level OG image. Auto-applies to every route that does not define
 * its own `opengraph-image.tsx`.
 *
 * Composition (three-color system, 2026-07-20): black background, a mono
 * "WEB · MARKETING" eyebrow in grey, the locked tagline ("Websites that
 * Rank.") in Fraunces as the dominant element, and the brand wordmark
 * with "Point" in grey (NOT italic — the redesign de-italicized it).
 * 1200x630 per the OG spec.
 *
 * Fonts are fetched from Google Fonts at render time, character-subsetted
 * via the `&text=` parameter so each call returns a single small font
 * file (avoids unicode-range subset parsing). We deliberately omit a
 * modern User-Agent so Google returns TTF rather than woff2 — Satori in
 * the edge `next/og` runtime cannot decode woff2 ("Unsupported OpenType
 * signature wOF2"), and TTF is always safe. Per-font failure returns
 * `null`; Satori falls back to a system font for any unsupplied family.
 * If every font fails, the outer try/catch returns a fontless visual
 * fallback so the route never 500s — every social share preview
 * depends on this URL.
 *
 * Backstop: `app/layout.tsx`'s manual og:image <meta> also lists a static
 * `/og-image.png`, so even a total Satori failure here still leaves a
 * working og:image in the meta tags. See SEO audit 2026-05-21 §5.1.
 *
 * Future work: self-host the woff2 files in `public/fonts/og/` and read
 * them via `fs.readFile` (requires switching runtime to `nodejs`).
 */

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rank Point Media — Websites that Rank.";

// Every glyph that appears in the composition below — kept in one place
// so the `&text=` subset stays in sync with the rendered text. Includes
// the literal uppercase eyebrow so the subset carries those glyphs.
const OG_TEXT =
  "WEB · MARKETING Websites that Rank. Point Media rankpointmedia.com";

async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer | null> {
  try {
    const url =
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}` +
      `:wght@${weight}&display=swap&text=${encodeURIComponent(OG_TEXT)}`;
    // Partial UA explicitly triggers TTF rather than woff2. Modern UAs
    // get woff2, which Satori in the edge `next/og` runtime cannot decode
    // ("Unsupported OpenType signature wOF2"). Setting it explicitly keeps
    // us TTF-only regardless of whatever default UA the runtime might send.
    const css = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }).then((r) => r.text());
    const fontUrl = css.match(
      /url\((https:\/\/[^)]+)\)\s*format\(['"]truetype['"]\)/,
    )?.[1];
    if (!fontUrl) return null;
    const res = await fetch(fontUrl);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: 500;
  style: "normal";
};

export default async function Image() {
  try {
    const [fraunces, jetbrains] = await Promise.all([
      loadGoogleFont("Fraunces", 500),
      loadGoogleFont("JetBrains Mono", 500),
    ]);

    const fonts: LoadedFont[] = [];
    if (fraunces)
      fonts.push({ name: "Fraunces", data: fraunces, weight: 500, style: "normal" });
    if (jetbrains)
      fonts.push({ name: "JetBrains Mono", data: jetbrains, weight: 500, style: "normal" });

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "80px",
          }}
        >
          {/* Top: mono eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.16em",
              color: "#9C9C9C",
            }}
          >
            <span>WEB</span>
            <span style={{ color: "#4d4d4d" }}>·</span>
            <span>MARKETING</span>
          </div>

          {/* Middle: tagline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Fraunces",
                fontWeight: 500,
                fontSize: 118,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                display: "flex",
              }}
            >
              <span>Websites that Rank.</span>
            </div>
          </div>

          {/* Bottom: wordmark + URL */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderTop: "1px solid #333333",
              paddingTop: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "Fraunces",
                fontWeight: 500,
                fontSize: 40,
                color: "#FFFFFF",
                lineHeight: 1,
                display: "flex",
                alignItems: "baseline",
                gap: "0.22em",
              }}
            >
              <span>Rank</span>
              <span style={{ color: "#9C9C9C" }}>Point</span>
              <span>Media</span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontWeight: 500,
                fontSize: 22,
                color: "#9C9C9C",
                letterSpacing: "0.04em",
              }}
            >
              rankpointmedia.com
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts,
      },
    );
  } catch {
    // Catastrophic fallback: Satori needs at least one font to render text,
    // so this branch renders a fontless visual (black field + white bar)
    // instead. Crawlers that hit this should fail over to the static
    // `/og-image.png` listed in metadata; this just ensures the route
    // returns 200 with a valid image instead of 500.
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000000",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div style={{ width: "100%", height: "12px", background: "#FFFFFF" }} />
        </div>
      ),
      { ...size },
    );
  }
}
