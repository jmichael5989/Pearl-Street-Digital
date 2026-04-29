import { ImageResponse } from "next/og";
import { readFileSync } from "fs";

/**
 * Favicon — generated at request time via ImageResponse so it stays in
 * sync with the brand palette (no separate asset to keep aligned).
 *
 * Design: navy serif "R" left, navy upward arrow right, warm-white
 * background. Same composition reused at apple-icon size (180x180);
 * see app/apple-icon.tsx.
 *
 * 96×96 to clear Google's SERP favicon 48px minimum (anything below 48
 * gets replaced by their globe fallback). Multiple of 48 keeps the
 * icon eligible at every scaling tier Google uses.
 *
 * Font is loaded from a co-located TTF instead of fetched at request
 * time. The previous fetch-from-fonts.googleapis.com pattern broke for
 * two reasons: (1) the edge runtime's fetch was failing in production,
 * and (2) Google's CSS now returns .ttf rather than the .woff2 the
 * previous regex expected. Bundling the binary makes this route
 * deterministic and removes a runtime network dependency.
 */

export const runtime = "nodejs";
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

const sourceSerif600 = readFileSync(
  new URL("./_fonts/source-serif-4-600.ttf", import.meta.url),
);

export default async function Icon() {
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
          gap: "3px",
        }}
      >
        <span
          style={{
            fontFamily: "Source Serif 4",
            fontSize: 72,
            fontWeight: 600,
            color: "#14213D",
            lineHeight: 1,
          }}
        >
          R
        </span>
        {/* Upward arrow as a single-line glyph */}
        <svg width="30" height="60" viewBox="0 0 10 20">
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
          data: sourceSerif600,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
