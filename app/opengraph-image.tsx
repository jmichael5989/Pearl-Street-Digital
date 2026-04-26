import { ImageResponse } from "next/og";

/**
 * Root-level OG image. Auto-applies to every route that does not define
 * its own `opengraph-image.tsx` — currently every route. Replaces the
 * static `/og-image.png` reference that was 404ing in social previews.
 *
 * Composition: navy background, brass eyebrow, brand wordmark in serif
 * with italic brass "Point", and the locked tagline ("Higher rankings.
 * More customers.") as the dominant element. 1200x630 per the OG spec.
 *
 * Fonts are fetched from Google Fonts at build/render time. The CSS
 * endpoint must be hit with a desktop User-Agent so it returns woff2
 * URLs (the default UA returns ttf for older clients, which Satori
 * rejects). One round-trip per font weight per style.
 */

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Rank Point Media — Higher rankings. More customers. San Antonio digital agency.";

async function loadGoogleFont(
  family: string,
  weight: number,
  style: "normal" | "italic" = "normal",
): Promise<ArrayBuffer> {
  const ital = style === "italic" ? 1 : 0;
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:ital,wght@${ital},${weight}&display=swap`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  }).then((r) => r.text());
  const fontUrl = css.match(/url\((https:\/\/[^)]+\.woff2)\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`Could not extract font URL for ${family} ${weight}`);
  }
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [serifRegular, serifItalic, sansSemibold] = await Promise.all([
    loadGoogleFont("Source Serif 4", 400),
    loadGoogleFont("Source Serif 4", 400, "italic"),
    loadGoogleFont("Source Sans 3", 600),
  ]);

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
            <span>Higher rankings.</span>
            <span style={{ fontStyle: "italic" }}>More customers.</span>
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
            }}
          >
            Rank{" "}
            <span style={{ fontStyle: "italic", color: "#B78F3E" }}>Point</span>{" "}
            Media
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
      fonts: [
        {
          name: "Source Serif 4",
          data: serifRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Source Serif 4",
          data: serifItalic,
          weight: 400,
          style: "italic",
        },
        {
          name: "Source Sans 3",
          data: sansSemibold,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
