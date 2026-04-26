import type { MetadataRoute } from "next";

/**
 * PWA manifest. Mostly informational at this stage — Rank Point Media
 * is a content site, not a true installable PWA — but providing a
 * proper manifest cleans up Lighthouse Best Practices warnings and
 * gives mobile browsers correct theming for "Add to Home Screen".
 *
 * Icons are auto-served by Next.js at /icon and /apple-icon (see
 * app/icon.tsx and app/apple-icon.tsx).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rank Point Media",
    short_name: "Rank Point",
    description:
      "Custom-coded websites and digital marketing for San Antonio small businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF6",
    theme_color: "#14213D",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
