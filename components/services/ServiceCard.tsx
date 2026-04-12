"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/ServiceIcons";

interface ServiceCardProps {
  slug: string;
  title: string;
  tagline: string;
  image?: string;
  video?: string;
}

export default function ServiceCard({ slug, title, tagline, image, video }: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const firstSentence = tagline.split(/(?<=[.!?])\s/)[0] || tagline;

  return (
    <Link
      href={`/services/${slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-light-surface shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image/Video strip */}
      <div className="relative h-36 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={`${title} for San Antonio businesses`}
            fill
            className={`object-cover transition-all duration-500 ${video ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        )}
        {video && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(255,255,255,0.4) 60%, #ffffff 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-heading text-lg font-semibold text-dark mb-2">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-gray mb-4">
          {firstSentence}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
