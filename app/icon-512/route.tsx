import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

/**
 * 512x512 Android install icon (manifest purpose "any"). Route Handler serving
 * at /icon-512 (see app/icon-192/route.tsx for why a handler, not the metadata
 * convention). Same R + upward-arrow as app/icon.tsx, scaled to fill 512.
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
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "Source Serif 4",
            fontSize: 380,
            fontWeight: 600,
            color: "#14213D",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <svg width="150" height="300" viewBox="0 0 10 20">
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
      width: 512,
      height: 512,
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
