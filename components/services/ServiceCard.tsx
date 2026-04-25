import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  slug: string;
  title: string;
  tagline: string;
  image?: string;
  video?: string;
}

export default function ServiceCard({ slug, title, tagline, image }: ServiceCardProps) {
  return (
    <div className="group aspect-square [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front face */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-sm">
          {image && (
            <Image
              src={image}
              alt={`${title} for San Antonio businesses`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
              loading="lazy"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-heading text-sm md:text-base font-semibold text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-dark flex flex-col items-center justify-center p-6 text-center">
          <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mb-6">
            {tagline}
          </p>
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Explore {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
