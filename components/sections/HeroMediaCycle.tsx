"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroSlides, type HeroSlide } from "@/config/heroSlides";

const MOBILE_QUERY = "(max-width: 768px)";
const CROSSFADE_MS = 1000;

type MediaLayerProps = {
  slide: HeroSlide;
  index: number;
  currentIndex: number;
  nextIndex: number;
  videoRef: (el: HTMLVideoElement | null) => void;
  onError: (index: number) => void;
};

function MediaLayer({ slide, index, currentIndex, nextIndex, videoRef, onError }: MediaLayerProps) {
  const isActive = index === currentIndex;
  const isPrimed = index === currentIndex || index === nextIndex;

  const base =
    "absolute inset-0 transition-opacity ease-out pointer-events-none";
  const opacity = isActive ? "opacity-100" : "opacity-0";

  if (slide.type === "image") {
    return (
      <div
        className={`${base} ${opacity}`}
        style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
        aria-hidden="true"
      >
        <Image
          src={slide.src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className="object-cover"
          onError={() => onError(index)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${base} ${opacity}`}
      style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={slide.poster}
        preload={isPrimed ? "auto" : "none"}
        onError={() => onError(index)}
        className="object-cover w-full h-full"
      >
        <source src={slide.src} type="video/mp4" />
      </video>
    </div>
  );
}

type StaticSlideProps = {
  slide: HeroSlide;
};

function StaticSlide({ slide }: StaticSlideProps) {
  const src = slide.poster ?? slide.src;
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
    </div>
  );
}

function GradientFallback() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, rgba(20,184,166,0.2) 100%)",
      }}
    />
  );
}

export default function HeroMediaCycle() {
  const reducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const totalSlides = heroSlides.length;
  const allFailed = failedIndexes.size >= totalSlides;

  const firstSlide = heroSlides[0];
  const currentSlide = heroSlides[currentIndex] ?? firstSlide;

  const nextIndex = useMemo(() => {
    if (totalSlides === 0) return 0;
    for (let step = 1; step <= totalSlides; step++) {
      const candidate = (currentIndex + step) % totalSlides;
      if (!failedIndexes.has(candidate)) return candidate;
    }
    return currentIndex;
  }, [currentIndex, failedIndexes, totalSlides]);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia(MOBILE_QUERY);
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const shouldCycle =
    mounted && !isMobile && !reducedMotion && !allFailed && totalSlides > 1;

  useEffect(() => {
    if (!shouldCycle) return;
    const slide = heroSlides[currentIndex];
    if (!slide) return;
    const timer = window.setTimeout(() => {
      setCurrentIndex((prev) => {
        if (totalSlides === 0) return prev;
        for (let step = 1; step <= totalSlides; step++) {
          const candidate = (prev + step) % totalSlides;
          if (!failedIndexes.has(candidate)) return candidate;
        }
        return prev;
      });
    }, slide.duration);
    return () => window.clearTimeout(timer);
  }, [shouldCycle, currentIndex, failedIndexes, totalSlides]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
        try {
          video.currentTime = 0;
        } catch {
          // Some browsers reject currentTime writes before metadata loads.
        }
      }
    });
  }, [currentIndex, mounted]);

  const handleMediaError = useCallback(
    (index: number) => {
      setFailedIndexes((prev) => {
        if (prev.has(index)) return prev;
        const next = new Set(prev);
        next.add(index);
        return next;
      });
      setCurrentIndex((prev) => {
        if (prev !== index) return prev;
        if (totalSlides === 0) return prev;
        for (let step = 1; step <= totalSlides; step++) {
          const candidate = (prev + step) % totalSlides;
          if (candidate === index) continue;
          return candidate;
        }
        return prev;
      });
    },
    [totalSlides],
  );

  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el;
    },
    [],
  );

  const textSlide = allFailed ? firstSlide : currentSlide;
  const motionDisabled = !mounted || reducedMotion || isMobile;

  const headlineMotion = motionDisabled
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.6 },
      };

  const subheadMotion = motionDisabled
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.6, delay: 0.15 },
      };

  const showStatic = isMobile || reducedMotion || allFailed;
  const showProgress = !showStatic && mounted && totalSlides > 1;

  return (
    <section
      aria-label="Rank Point Media hero showcase"
      className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-[#0F172A] flex items-center"
    >
      {allFailed ? (
        <GradientFallback />
      ) : showStatic ? (
        <StaticSlide slide={firstSlide} />
      ) : (
        heroSlides.map((slide, index) => (
          <MediaLayer
            key={slide.id}
            slide={slide}
            index={index}
            currentIndex={currentIndex}
            nextIndex={nextIndex}
            videoRef={setVideoRef(index)}
            onError={handleMediaError}
          />
        ))
      )}

      {!allFailed && (
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {motionDisabled ? (
          <>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4">
              {textSlide.headline}
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-200 mb-8">
              {textSlide.subhead}
            </p>
          </>
        ) : (
          <AnimatePresence mode="wait">
            <div key={textSlide.id}>
              <motion.h1
                {...headlineMotion}
                className="font-heading font-bold text-4xl md:text-6xl text-white mb-4"
              >
                {textSlide.headline}
              </motion.h1>
              <motion.p
                {...subheadMotion}
                className="font-body text-lg md:text-xl text-gray-200 mb-8"
              >
                {textSlide.subhead}
              </motion.p>
            </div>
          </AnimatePresence>
        )}
      </div>

      {showProgress && (
        <div
          role="group"
          aria-label="Slide progress"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex gap-2"
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            const isFailed = failedIndexes.has(index);
            if (isActive) {
              return (
                <div
                  key={slide.id}
                  className="w-12 h-1 rounded-full bg-white/20 overflow-hidden"
                  aria-current="true"
                >
                  <motion.div
                    key={`${slide.id}-${currentIndex}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: slide.duration / 1000, ease: "linear" }}
                    className="h-full rounded-full bg-[#14B8A6]"
                  />
                </div>
              );
            }
            return (
              <div
                key={slide.id}
                className={`w-8 h-1 rounded-full ${isFailed ? "bg-white/10" : "bg-white/30"}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
