"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

// Set to true when you have video files at /public/videos/hero.webm and hero.mp4
const USE_VIDEO_HERO = true;

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesRef = useRef(false);

  useEffect(() => {
    if (particlesRef.current) return;
    particlesRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const count = window.innerWidth < 640 ? 8 : 20;
    const generated: Particle[] = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 8,
        color:
          Math.random() < 0.7
            ? "rgba(37,99,235,0.4)"
            : "rgba(37,99,235,0.4)",
      });
    }
    setParticles(generated);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        {/* Layer 1: Background (Photo with Ken Burns OR Self-hosted Video) */}
        {USE_VIDEO_HERO ? (
          <div className="absolute inset-0 z-[1]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero/Tower.WEBP"
              className="absolute inset-0 w-full h-full object-cover hidden sm:block"
            >
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            {/* Static image fallback for mobile (saves data) */}
            <div className="absolute inset-0 sm:hidden">
              <Image
                src="/images/hero/Tower.WEBP"
                alt="Tower of the Americas in San Antonio, Texas"
                fill
                className="object-cover object-center"
                priority
                quality={60}
                sizes="100vw"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 z-[1]">
              <div
                className="hero-ken-burns absolute inset-0 will-change-transform"
                style={{
                  animation: "kenBurns 25s ease-in-out infinite alternate",
                }}
              >
                <Image
                  src="/images/hero/Tower.WEBP"
                  alt="Tower of the Americas in San Antonio, Texas"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={60}
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Gradient Mesh */}
            <div
              className="hero-gradient-mesh absolute inset-0 z-[1]"
              style={{
                backgroundImage: [
                  "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(37,99,235,0.25), transparent 60%)",
                  "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(37,99,235,0.2), transparent 55%)",
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(15,23,42,0.5), transparent 80%)",
                ].join(", "),
                backgroundSize: "200% 200%, 200% 200%, 200% 200%",
                animation: "gradientMesh 12s ease-in-out infinite alternate",
              }}
            />

            {/* Floating Particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="hero-particle absolute z-[1] rounded-full pointer-events-none"
                style={{
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
                }}
              />
            ))}
          </>
        )}

        {/* Layer 2: Dark Overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.7) 50%, rgba(15,23,42,0.85) 100%)",
          }}
        />

        {/* Layer 3: Content */}
        <div className="relative z-[3] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-[660px] mx-auto text-center">
            {/* Badge */}
            <div
              className="hero-fade-up inline-flex items-center gap-2.5 rounded-full border border-[rgba(20,184,166,0.3)] bg-[rgba(20,184,166,0.08)] px-4 py-2 mb-6"
              style={{
                animation: "fadeUp 1s ease-out 0.5s both",
              }}
            >
              <span
                className="hero-badge-pulse block h-1.5 w-1.5 rounded-full bg-green-400"
                style={{ animation: "badgePulse 2s ease-in-out infinite" }}
              />
              <span className="text-[0.8125rem] font-medium uppercase tracking-[0.04em] text-[#14B8A6]">
                AI-Powered Digital Marketing
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-fade-up font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-white mb-6"
              style={{
                textShadow:
                  "0 2px 20px rgba(15,23,42,0.8), 0 0 40px rgba(15,23,42,0.5)",
                animation: "fadeUp 1s ease-out 0.6s both",
              }}
            >
              Websites and marketing that{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #14B8A6 0%, #5EEAD4 50%, #14B8A6 100%)",
                }}
              >
                actually bring you customers
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-fade-up text-lg sm:text-xl leading-relaxed mb-8 max-w-[600px] mx-auto"
              style={{
                color: "rgba(255,255,255,0.7)",
                textShadow:
                  "0 1px 12px rgba(15,23,42,0.9), 0 0 30px rgba(15,23,42,0.6)",
                animation: "fadeUp 1s ease-out 0.75s both",
              }}
            >
              We build high-performance websites and run local SEO campaigns
              for local small businesses. No long-term contracts. No
              fluff. Just more calls and foot traffic.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-fade-up flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-0"
              style={{ animation: "fadeUp 1s ease-out 0.9s both" }}
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Site Audit
                  <ArrowRightIcon />
                </span>
                <span
                  className="hero-shimmer absolute inset-0 z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.25)] bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_4px_14px_rgba(255,255,255,0.1)]"
              >
                <PlayIcon />
                See Our Work
              </Link>
            </div>

            {/* Trust Signals */}
            <div
              className="hero-fade-up flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 pt-8"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                animation: "fadeUp 1s ease-out 1.1s both",
              }}
            >
              <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <CheckIcon /> No contracts
              </span>
              <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <CheckIcon /> Sites from $250
              </span>
              <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <CheckIcon /> Results in 30 days
              </span>
            </div>
          </div>
        </div>

        {/* Layer 4: Scroll Indicator (hidden on mobile) */}
        <div
          className="hero-fade-up absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] hidden sm:flex flex-col items-center gap-2"
          style={{ animation: "fadeUp 1s ease-out 1.3s both" }}
        >
          <div
            className="flex flex-col items-center justify-start pt-2 rounded-full"
            style={{
              width: 20,
              height: 32,
              border: "1.5px solid rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="hero-scroll-dot rounded-full bg-primary"
              style={{
                width: 3,
                height: 6,
                animation: "scrollDot 2s ease-in-out infinite",
              }}
            />
          </div>
          <span
            className="text-xs uppercase"
            style={{
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.1em",
              fontSize: "0.75rem",
            }}
          >
            Scroll
          </span>
        </div>

        {/* Layer 5: Accent Line */}
        <div
          className="hero-accent-line absolute bottom-0 left-0 right-0 z-[5] h-[3px]"
          style={{
            background: "linear-gradient(90deg, #2563EB, #2563EB, #2563EB)",
            backgroundSize: "200% 100%",
            animation: "accentLine 6s ease-in-out infinite",
          }}
        />
      </section>
    </>
  );
}
