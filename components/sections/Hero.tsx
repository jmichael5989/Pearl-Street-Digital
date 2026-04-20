"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesRef = useRef(false);

  // Fallback: show video after 2s regardless of event
  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Seamless video loop: restart 0.15s before end to hide the gap
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

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
              ref={videoRef}
              onCanPlayThrough={() => setVideoReady(true)}
              onPlaying={() => setVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover hidden sm:block transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
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
              "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.35) 50%, rgba(15,23,42,0.35) 100%)",
          }}
        />

        {/* Layer 3: Content */}
        <div className="relative z-[3] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-[660px]">
            {/* Headline */}
            <h1
              className="hero-fade-up font-heading font-extrabold leading-[1.08] tracking-tight text-white mb-6"
              style={{
                fontSize: "var(--text-h1)",
                textShadow:
                  "0 2px 20px rgba(15,23,42,0.8), 0 0 40px rgba(15,23,42,0.5)",
                animation: "fadeUp 1s ease-out 0.6s both",
              }}
            >
              Custom Websites and{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #14B8A6, #8B5CF6)",
                }}
              >
                Marketing That Actually
              </span>{" "}
              Brings You Customers
            </h1>

            {/* Subtitle */}
            <p
              className="hero-fade-up text-lg leading-relaxed mb-8 max-w-[540px]"
              style={{
                color: "rgba(255,255,255,0.7)",
                textShadow:
                  "0 1px 12px rgba(15,23,42,0.9), 0 0 30px rgba(15,23,42,0.6)",
                animation: "fadeUp 1s ease-out 0.75s both",
              }}
            >
              Stop losing customers to competitors with better websites.
              We build fast, SEO-optimized sites and run campaigns that
              drive real calls and foot traffic.
            </p>

            {/* Navigation links */}
            <div
              className="hero-fade-up flex items-center gap-6"
              style={{ animation: "fadeUp 1s ease-out 0.9s both" }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:text-white"
              >
                What We Do
                <ArrowDownIcon />
              </a>
              <span className="h-5 w-px bg-[rgba(255,255,255,0.3)]" />
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:text-white"
              >
                View Our Work
                <ArrowRightIcon />
              </Link>
            </div>

            {/* Trust Signals */}
            <div
              className="hero-fade-up flex flex-wrap items-center gap-x-6 gap-y-3 mt-8"
              style={{
                animation: "fadeUp 1s ease-out 1.1s both",
              }}
            >
              <span className="relative flex items-center gap-2 text-sm rounded-full border border-[rgba(255,255,255,0.15)] px-3 py-1 overflow-hidden" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="relative z-10 flex items-center gap-2">
                  <CheckIcon /> Flexible terms
                </span>
                <span
                  className="hero-shimmer absolute inset-0 z-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />
              </span>
              <span className="relative flex items-center gap-2 text-sm rounded-full border border-[rgba(255,255,255,0.15)] px-3 py-1 overflow-hidden" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="relative z-10 flex items-center gap-2">
                  <CheckIcon /> Results in 30 days
                </span>
                <span
                  className="hero-shimmer absolute inset-0 z-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    animation: "shimmer 3s ease-in-out infinite 1s",
                  }}
                />
              </span>
            </div>

            {/* Phone */}
            <a
              href="tel:+12105551234"
              className="hero-fade-up inline-flex items-center gap-2 mt-6 text-sm font-medium text-[rgba(255,255,255,0.5)] hover:text-[#2563EB] transition-colors"
              style={{ animation: "fadeUp 1s ease-out 1.2s both" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (210) 555-1234
            </a>
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
            background: "linear-gradient(90deg, #2563EB, #1D4ED8, #2563EB)",
            backgroundSize: "200% 100%",
            animation: "accentLine 6s ease-in-out infinite",
          }}
        />
      </section>
    </>
  );
}
