import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

/**
 * 192x192 Android home-screen icon (manifest purpose "any").
 *
 * A Route Handler (not the Next metadata `icon` file convention, which only
 * matches names like `icon` / `icon1`, never `icon-192`) so it reliably serves
 * at /icon-192 for app/manifest.ts. Same R + upward-arrow composition as
 * app/icon.tsx, scaled 2x from the 96px favicon. Font read at request time via
 * fileURLToPath + fs (see app/icon.tsx for the full why); path is ../_fonts/
 * because this module sits one directory deeper than app/icon.tsx.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const fontPath = fileURLToPath(
    new URL("../_fonts/source-serif-4-600.ttf", import.meta.url),
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
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "Source Serif 4",
            fontSize: 144,
            fontWeight: 600,
            color: "#14213D",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <svg width="60" height="120" viewBox="0 0 10 20">
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
      width: 192,
      height: 192,
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
