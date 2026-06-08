"use client";

// The shared transition DOM, rendered once by TransitionProvider as the last
// element in <body> so it stacks above the fixed header (z-50) and MobileCTABar.
// Idle = invisible and non-interactive. Decorative (aria-hidden); contains no
// focusable elements so it can never trap focus. Effects reveal only the layers
// they need via GSAP. Queried by id from the provider (no ref threading).

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
      <div
        id="tx-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--color-primary)",
          visibility: "hidden",
          willChange: "transform",
        }}
      />
      <div
        id="tx-title"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6vw",
          textAlign: "center",
          visibility: "hidden",
        }}
      />
    </div>
  );
}
