import { ImageResponse } from "next/og";

/**
 * Root-level OG image. Auto-applies to every route that does not define
 * its own `opengraph-image.tsx`.
 *
 * Composition: navy background, brass eyebrow, brand wordmark in serif
 * with italic brass "Point", and the locked tagline ("Websites that
 * Rank.") as the dominant element. 1200x630 per the OG spec.
 *
 * Fonts are fetched from Google Fonts at render time, character-subsetted
 * via the `&text=` parameter so each call returns a single small font
 * file (avoids unicode-range subset parsing). We deliberately omit a
 * User-Agent so Google returns TTF rather than woff2 — Satori in the
 * edge `next/og` runtime cannot decode woff2 ("Unsupported OpenType
 * signature wOF2"), and TTF is always safe. Per-font failure returns
 * `null`; Satori falls back to a system font for any unsupplied family.
 * If every font fails, the outer try/catch returns a fontless visual
 * fallback so the route never 500s — every social share preview
 * depends on this URL.
 *
 * Backstop: `app/layout.tsx`'s `openGraph.images` also lists a static
 * `/og-image.png`, so even a total Satori failure here still leaves a
 * working og:image in the meta tags. See SEO audit 2026-05-21 §5.1.
 *
 * Future work: self-host the three woff2 files in `public/fonts/og/`
 * and read them via `fs.readFile` (requires switching runtime to
 * `nodejs`). Eliminates the external Google Fonts dependency.
 */

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Rank Point Media — Websites that Rank. San Antonio digital agency.";

// Every glyph that appears in the composition below — kept in one place
// so the `&text=` subset stays in sync with the rendered text.
const OG_TEXT = "Websites that Rank. Point Media San Antonio · Texas rankpointmedia.com";

async function loadGoogleFont(
  family: string,
  weight: number,
  style: "normal" | "italic" = "normal",
): Promise<ArrayBuffer | null> {
  try {
    const ital = style === "italic" ? 1 : 0;
    const url =
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}` +
      `:ital,wght@${ital},${weight}&display=swap&text=${encodeURIComponent(OG_TEXT)}`;
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
  weight: 400 | 600;
  style: "normal" | "italic";
};

export default async function Image() {
  try {
    const [serifRegular, serifItalic, sansSemibold] = await Promise.all([
      loadGoogleFont("Source Serif 4", 400),
      loadGoogleFont("Source Serif 4", 400, "italic"),
      loadGoogleFont("Source Sans 3", 600),
    ]);

    const fonts: LoadedFont[] = [];
    if (serifRegular)
      fonts.push({
        name: "Source Serif 4",
        data: serifRegular,
        weight: 400,
        style: "normal",
      });
    if (serifItalic)
      fonts.push({
        name: "Source Serif 4",
        data: serifItalic,
        weight: 400,
        style: "italic",
      });
    if (sansSemibold)
      fonts.push({
        name: "Source Sans 3",
        data: sansSemibold,
        weight: 600,
        style: "normal",
      });

    return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#14213D",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* Top: brand eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontFamily: "Source Sans 3",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B78F3E",
          }}
        >
          <span>San Antonio</span>
          <span style={{ color: "rgba(250,250,246,0.4)" }}>·</span>
          <span>Texas</span>
        </div>

        {/* Middle: tagline H1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontSize: 110,
              color: "#FAFAF6",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.3em",
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
            borderTop: "1px solid rgba(183,143,62,0.4)",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontSize: 38,
              color: "#FAFAF6",
              lineHeight: 1,
              display: "flex",
              alignItems: "baseline",
              gap: "0.22em",
            }}
          >
            <span>Rank</span>
            <span style={{ fontStyle: "italic", color: "#B78F3E" }}>Point</span>
            <span>Media</span>
          </div>
          <div
            style={{
              fontFamily: "Source Sans 3",
              fontSize: 22,
              color: "rgba(250,250,246,0.65)",
              fontWeight: 600,
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
    // so this branch renders a fontless visual (navy field + brass bar)
    // instead. Crawlers that hit this should fail over to the static
    // `/og-image.png` listed in metadata; this just ensures the route
    // returns 200 with a valid image instead of 500.
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#14213D",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#B78F3E",
            }}
          />
        </div>
      ),
      { ...size },
    );
  }
}
