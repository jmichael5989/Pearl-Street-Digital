"use client";

import { usePathname } from "next/navigation";
import GlassHeader from "./GlassHeader";
import VoxelHeader from "@/components/home/VoxelHeader";

// Routes whose first section is light-bg. The transparent State A would render
// invisible white-on-white text there, so we force GlassHeader into State B
// (navy translucent strip with warm-white wordmark — visible on light hero).
// After the DarkHero rollout, only /industries (overview) and the /blog
// surface (index + post detail) still have light editorial heroes.
const LIGHT_HERO_EXACT = new Set<string>(["/industries"]);
const LIGHT_HERO_PREFIXES = ["/blog", "/local"];

function isLightHeroRoute(pathname: string): boolean {
  if (LIGHT_HERO_EXACT.has(pathname)) return true;
  return LIGHT_HERO_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/"),
  );
}

export default function HeaderRouter() {
  const pathname = usePathname();
  // Three-color redesign routes get the VoxelHeader (shared hamburger menu):
  // the homepage uses the floating "hero" variant over its dark voxel hero;
  // inner three-color pages (About, and future ports) use the sticky white
  // "bar" variant. Every other route stays on the navy GlassHeader until ported.
  if (pathname === "/") return <VoxelHeader variant="hero" />;
  if (pathname === "/about") return <VoxelHeader variant="bar" />;
  if (pathname === "/services" || pathname.startsWith("/services/")) return <VoxelHeader variant="bar" />;
  if (pathname === "/case-studies") return <VoxelHeader variant="bar" />;
  if (pathname === "/pricing") return <VoxelHeader variant="bar" />;
  return <GlassHeader forceScrolled={isLightHeroRoute(pathname)} />;
}
