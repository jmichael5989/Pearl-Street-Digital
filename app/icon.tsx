import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

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
 * Font is loaded from a co-located TTF inside the handler. History of
 * approaches and why each failed:
 *   1. Edge runtime + fetch(fonts.googleapis.com) — runtime sandbox
 *      blocked the network call AND Google's CSS now returns .ttf,
 *      not .woff2 the regex expected.
 *   2. nodejs runtime + readFileSync(new URL(...)) at module init —
 *      Turbopack's bundled URL object isn't a real file: URL, so fs
 *      rejected it at runtime ("Received an instance of URL").
 *   3. nodejs runtime + fetch(new URL(...)) inside handler —
 *      Turbopack's SSR sandbox raised "not implemented yet" for
 *      file:// fetch during the build's prerender pass.
 * Current pattern: convert the URL to a string path via fileURLToPath
 * (sidesteps the URL-class mismatch from #2) and read with fs inside
 * the handler (defers I/O off module init from #2). dynamic =
 * "force-dynamic" skips the prerender pass that broke #3.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default async function Icon() {
  const fontPath = fileURLToPath(
    new URL("./_fonts/source-serif-4-600.ttf", import.meta.url),
  );
  const sourceSerif600 = readFileSync(fontPath);

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
