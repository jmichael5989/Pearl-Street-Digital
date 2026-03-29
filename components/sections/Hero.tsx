"use client";

import Link from "next/link";
import Image from "next/image";

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(160deg,#0F172A,#0c1527,#111c36)]">
      {/* Tower of Americas Image - Left Side */}
      <div className="absolute inset-y-0 left-0 w-[42%] max-[900px]:w-full max-[900px]:opacity-30">
        <Image
          src="/images/hero/Tower.WEBP"
          alt="Tower of the Americas in San Antonio, Texas"
          fill
          className="object-cover object-center"
          priority
          quality={60}
          sizes="(max-width: 900px) 100vw, 42vw"
        />
        {/* Right fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(15,23,42,0.15) 30%, rgba(15,23,42,0.7) 65%, #0F172A 92%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0F172A 0%, rgba(15,23,42,0.5) 25%, transparent 55%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.7) 0%, transparent 25%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Teal glow - top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at center, #14B8A6, transparent 70%)",
        }}
      />

      {/* Violet glow - bottom left */}
      <div
        className="absolute bottom-0 left-[20%] w-[500px] h-[500px] opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle at center, #8B5CF6, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-[660px] max-[900px]:mx-auto max-[900px]:text-center ml-auto">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 mb-6">
            <ZapIcon className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(240,253,250,0.7)]">
              AI-Powered Marketing for San Antonio Businesses
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-white mb-6"
            style={{
              textShadow:
                "0 2px 20px rgba(15,23,42,0.8), 0 0 40px rgba(15,23,42,0.5)",
            }}
          >
            Your Customers Are{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Searching Right Now
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-[rgba(226,232,240,0.85)] leading-relaxed mb-8 max-w-[560px] max-[900px]:mx-auto"
            style={{
              textShadow:
                "0 1px 12px rgba(15,23,42,0.9), 0 0 30px rgba(15,23,42,0.6)",
            }}
          >
            We build high-performance websites and run the SEO, ads, and
            marketing that put San Antonio small businesses in front of the
            right people — fast.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 max-[900px]:justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(20,184,166,0.35)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(20,184,166,0.5)] hover:-translate-y-0.5"
            >
              Get Your Free Audit
              <ArrowRightIcon />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center rounded-lg border border-[rgba(148,163,184,0.25)] bg-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(148,163,184,0.4)]"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[rgba(148,163,184,0.7)] max-[900px]:justify-center">
            <span>No Monthly Commitment</span>
            <span className="text-[rgba(148,163,184,0.3)]">|</span>
            <span>Bilingual (EN/ES)</span>
            <span className="text-[rgba(148,163,184,0.3)]">|</span>
            <span>Websites in 2-3 Weeks</span>
            <span className="text-[rgba(148,163,184,0.3)]">|</span>
            <span>Lighthouse 95+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
