"use client";

// The shared transition DOM, rendered once by TransitionProvider as the last
// element in <body> so it stacks above the fixed header (z-50) and MobileCTABar.
// Idle = invisible and non-interactive. Decorative (aria-hidden); contains no
// focusable elements so it can never trap focus. Each effect reveals only the
// layers it needs via GSAP; everything starts visibility:hidden. Queried by id
// from the effect modules (no ref threading).

import type { CSSProperties } from "react";

const hidden: CSSProperties = { visibility: "hidden" };
const fill: CSSProperties = { position: "absolute", inset: 0 };

export default function TransitionStage() {
  return (
    <div
      id="tx-stage"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        pointerEvents: "none",
        visibility: "hidden",
      }}
    >
      {/* Navy cover panel — coverWipe (default), overlaySplitText, and the
          spiralDraw backing all use this. */}
      <div
        id="tx-overlay"
        style={{
          ...fill,
          ...hidden,
          backgroundColor: "var(--color-primary)",
          willChange: "transform, opacity",
        }}
      />

      {/* Split curtain panels (contact) — top + bottom navy halves that close
          to cover then part to reveal. */}
      <div
        id="tx-curtain-top"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "50.5%",
          backgroundColor: "var(--color-primary)",
          borderBottom: "2px solid var(--color-accent-dark)",
          willChange: "transform",
          ...hidden,
        }}
      />
      <div
        id="tx-curtain-bottom"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "50.5%",
          backgroundColor: "var(--color-primary)",
          borderTop: "2px solid var(--color-accent-dark)",
          willChange: "transform",
          ...hidden,
        }}
      />

      {/* Vertical slats (pricing) — navy panels sweep down to cover, up to
          reveal, in a left-to-right stagger. Panels overlap slightly (20.4% wide
          at 20% steps) so there are no sub-pixel gaps at full cover. */}
      <div id="tx-slats" style={{ ...fill, ...hidden }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="tx-slat"
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              left: `${i * 20}%`,
              width: "20.4%",
              backgroundColor: "var(--color-primary)",
              borderBottom: "2px solid var(--color-accent-dark)",
              transform: "translateY(-100%)",
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* SVG morph (services) — a navy shape morphs from the bottom edge up to
          full cover, then off the top to reveal. preserveAspectRatio:none so the
          0–100 viewBox stretches to the viewport. */}
      <svg
        id="tx-svg-morph"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ ...fill, width: "100%", height: "100%", ...hidden }}
      >
        <path
          id="tx-morph-path"
          d="M0,100 L100,100 L100,100 L0,100 Z"
          fill="var(--color-primary)"
          stroke="var(--color-accent-dark)"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* SVG spiral (industries / areas) — a brass stroke drawn over the navy
          backing. The path `d` is generated at runtime by the effect. */}
      <svg
        id="tx-spiral"
        viewBox="-200 -200 400 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ ...fill, width: "100%", height: "100%", ...hidden }}
      >
        <path
          id="tx-spiral-path"
          d=""
          fill="none"
          stroke="var(--color-accent-dark)"
          strokeWidth="34"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* WebGL canvas mount (about) — webglDissolve appends a fullscreen
          three.js canvas here; removed again on teardown. */}
      <div id="tx-canvas-mount" style={{ ...fill, ...hidden }} />

      {/* Destination title (case-studies / blog) — serif, warm-white, upright
          (no italic per brand rule). Text + word-split set by the effect. */}
      <div
        id="tx-title"
        style={{
          ...fill,
          ...hidden,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6vw",
          textAlign: "center",
          fontFamily: "var(--font-heading)",
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "-0.02em",
          lineHeight: 1.04,
          fontSize: "clamp(2.5rem, 9vw, 6.5rem)",
          color: "var(--color-text-on-dark)",
        }}
      />
    </div>
  );
}
