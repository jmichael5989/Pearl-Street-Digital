import { ImageResponse } from "next/og";
import { readFileSync } from "fs";

/**
 * Apple touch icon — 180x180 per iOS spec. Same R + upward-arrow
 * composition as the favicon (app/icon.tsx) at homescreen scale.
 *
 * Font is loaded from a co-located TTF for the same reasons as
 * app/icon.tsx — see that file for context.
 */

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const sourceSerif600 = readFileSync(
  new URL("./_fonts/source-serif-4-600.ttf", import.meta.url),
);

export default async function AppleIcon() {
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
          data: sourceSerif600,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
