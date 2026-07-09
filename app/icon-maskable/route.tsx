import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

/**
 * 512x512 MASKABLE Android icon (manifest purpose "maskable"). Route Handler
 * serving at /icon-maskable. Same composition as icon-512 but the R + arrow is
 * held inside an inner 80% box, leaving a full-bleed #FAFAF6 padding zone so the
 * OS adaptive-icon mask never clips the glyph (maskable safe-area spec).
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
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "13px",
          }}
        >
          <span
            style={{
              fontFamily: "Source Serif 4",
              fontSize: 304,
              fontWeight: 600,
              color: "#14213D",
              lineHeight: 1,
            }}
          >
            R
          </span>
          <svg width="120" height="240" viewBox="0 0 10 20">
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
