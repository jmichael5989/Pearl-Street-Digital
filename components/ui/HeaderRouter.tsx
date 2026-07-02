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
  // Homepage runs the three-color redesign (phase 1) with its own hamburger
  // header. Every other route stays on the navy GlassHeader until re-themed.
  if (pathname === "/") return <VoxelHeader />;
  return <GlassHeader forceScrolled={isLightHeroRoute(pathname)} />;
}
