export default function HeroBackground() {
  return (
    <>
      {/* Layer 1 — gradient mesh (blurred) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          filter: "blur(60px)",
          backgroundImage: [
            "radial-gradient(circle at 15% 20%, rgba(20,184,166,0.25), transparent 50%)",
            "radial-gradient(circle at 85% 80%, rgba(139,92,246,0.20), transparent 55%)",
            "radial-gradient(circle at 50% 50%, rgba(15,23,42,0), rgba(2,6,23,0.6) 100%)",
          ].join(", "),
        }}
      />

      {/* Layer 2 — grain noise (uses .grain utility under .services-scope) */}
      <div
        aria-hidden="true"
        className="grain"
        style={{ position: "absolute", inset: 0 }}
      />

      {/* Layer 3 — 80px grid, faded at edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </>
  );
}
