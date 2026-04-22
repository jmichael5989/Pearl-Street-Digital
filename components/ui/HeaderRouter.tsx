"use client";

import { usePathname } from "next/navigation";
import GlassHeader from "./GlassHeader";
import LegacyHeader from "./LegacyHeader";

// Routes whose first section is light-bg. The transparent State A would render
// invisible white-on-white text there, so we force GlassHeader into State B.
const LIGHT_HERO_EXACT = new Set<string>([
  "/case-studies",
  "/industries",
  "/pricing",
  "/services",
]);

// /services/* uses ServiceHero (bg-white) EXCEPT website-design which has its
// own dark hero.
function isLightHeroRoute(pathname: string): boolean {
  if (LIGHT_HERO_EXACT.has(pathname)) return true;
  if (pathname.startsWith("/services/") && pathname !== "/services/website-design") {
    return true;
  }
  return false;
}

export default function HeaderRouter() {
  const pathname = usePathname();
  if (pathname === "/") return <LegacyHeader />;
  return <GlassHeader forceScrolled={isLightHeroRoute(pathname)} />;
}
