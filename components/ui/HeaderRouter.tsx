"use client";

import { usePathname } from "next/navigation";
import GlassHeader from "./GlassHeader";
import LegacyHeader from "./LegacyHeader";

export default function HeaderRouter() {
  const pathname = usePathname();
  return pathname === "/" ? <LegacyHeader /> : <GlassHeader />;
}
