"use client";

import { usePathname } from "next/navigation";
import GlassHeader from "./GlassHeader";
import LegacyHeader from "./LegacyHeader";

// Routes whose first section is light-bg. The transparent State A would render
// invisible white-on-white text there, so we force GlassHeader into State B.
// After the DarkHero rollout, only /industries (overview) still has a light hero.
const LIGHT_HERO_EXACT = new Set<string>(["/industries"]);

function isLightHeroRoute(pathname: string): boolean {
  return LIGHT_HERO_EXACT.has(pathname);
}

export default function HeaderRouter() {
  const pathname = usePathname();
  if (pathname === "/") return <LegacyHeader />;
  return <GlassHeader forceScrolled={isLightHeroRoute(pathname)} />;
}
