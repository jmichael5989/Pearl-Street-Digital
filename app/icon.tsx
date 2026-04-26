import { ImageResponse } from "next/og";

/**
 * Favicon — generated at request time via ImageResponse so it stays in
 * sync with the brand palette (no separate asset to keep aligned).
 *
 * Design: navy serif "R" left, navy upward arrow right, warm-white
 * background. Same composition reused at apple-icon size (180x180);
 * see app/apple-icon.tsx.
 */

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  }).then((r) => r.text());
  const fontUrl = css.match(/url\((https:\/\/[^)]+\.woff2)\)/)?.[1];
  if (!fontUrl) throw new Error(`No font URL for ${family} ${weight}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function Icon() {
  const serif = await loadGoogleFont("Source Serif 4", 600);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAF6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1px",
        }}
      >
        <span
          style={{
            fontFamily: "Source Serif 4",
            fontSize: 24,
            fontWeight: 600,
            color: "#14213D",
            lineHeight: 1,
          }}
        >
          R
        </span>
        {/* Upward arrow as a single-line glyph */}
        <svg width="10" height="20" viewBox="0 0 10 20">
          <line
            x1="5"
            y1="18"
            x2="5"
            y2="3"
            stroke="#14213D"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <polyline
            points="2,7 5,3 8,7"
            fill="none"
            stroke="#14213D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Source Serif 4",
          data: serif,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
