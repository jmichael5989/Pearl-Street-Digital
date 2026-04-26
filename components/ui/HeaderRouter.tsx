"use client";

import { usePathname } from "next/navigation";
import GlassHeader from "./GlassHeader";
import LegacyHeader from "./LegacyHeader";

// Routes whose first section is light-bg. The transparent State A would render
// invisible white-on-white text there, so we force GlassHeader into State B
// (navy translucent strip with warm-white wordmark — visible on light hero).
// After the DarkHero rollout, only /industries (overview) and the /blog
// surface (index + post detail) still have light editorial heroes.
const LIGHT_HERO_EXACT = new Set<string>(["/industries"]);
const LIGHT_HERO_PREFIXES = ["/blog"];

function isLightHeroRoute(pathname: string): boolean {
  if (LIGHT_HERO_EXACT.has(pathname)) return true;
  return LIGHT_HERO_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/"),
  );
}

export default function HeaderRouter() {
  const pathname = usePathname();
  if (pathname === "/") return <LegacyHeader />;
  return <GlassHeader forceScrolled={isLightHeroRoute(pathname)} />;
}
