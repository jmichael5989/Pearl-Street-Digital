import { ImageResponse } from "next/og";

/**
 * Apple touch icon — 180x180 per iOS spec. Same R + upward-arrow
 * composition as the favicon (app/icon.tsx) at homescreen scale.
 */

export const runtime = "edge";
export const size = { width: 180, height: 180 };
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

export default async function AppleIcon() {
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
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "Source Serif 4",
            fontSize: 130,
            fontWeight: 600,
            color: "#14213D",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <svg width="56" height="110" viewBox="0 0 56 110">
          <line
            x1="28"
            y1="100"
            x2="28"
            y2="14"
            stroke="#14213D"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <polyline
            points="10,32 28,12 46,32"
            fill="none"
            stroke="#14213D"
            strokeWidth="6"
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
