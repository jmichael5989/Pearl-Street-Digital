export default function HeroBackground() {
  return (
    <>
      {/* Grain noise (uses .grain utility) */}
      <div
        aria-hidden="true"
        className="grain"
        style={{ position: "absolute", inset: 0 }}
      />

      {/* 80px grid, faded at edges */}
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
