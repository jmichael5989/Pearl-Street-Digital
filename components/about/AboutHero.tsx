import Image from "next/image";
import Link from "next/link";

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

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden bg-dark">
      {/* Layer 1: Image positioned left (42% width) */}
      <div className="absolute inset-0 z-[1]" style={{ width: "42%" }}>
        <Image
          src="/images/about/team-bg.jpg"
          alt="Tower of the Americas in San Antonio"
          fill
          className="object-cover object-top"
          priority
          quality={70}
          sizes="42vw"
        />
      </div>

      {/* Layer 2: Three gradient overlays matching home hero */}
      {/* Right fade */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to right, transparent 0%, transparent 15%, #0F172A 42%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to top, #0F172A 0%, transparent 40%)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to bottom, rgba(15,23,42,0.6) 0%, transparent 30%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-10 lg:pt-32 lg:pb-12 w-full">
        <div className="ml-auto max-w-3xl text-left lg:pl-8">
          <p className="text-lg font-bold uppercase tracking-[0.12em] text-primary">
            About Us
          </p>
          <h1
            className="mt-3 font-heading font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Meet the Team Behind{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #14B8A6, #8B5CF6)" }}
              >
                Rank Point Media
              </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[rgba(255,255,255,0.7)] max-w-2xl">
            We&apos;re Jon and Stacie -- a husband-and-wife team helping small
            businesses grow with websites that actually work and marketing that
            drives real results. When you work with us, you work directly with
            the people who built this agency.
          </p>

          {/* Navigation links */}
          <div className="mt-10 flex items-center justify-start gap-6">
            <a
              href="#approach"
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
        </div>
      </div>
    </section>
  );
}
