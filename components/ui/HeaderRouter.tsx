"use client";

import { usePathname } from "next/navigation";
import VoxelHeader from "@/components/home/VoxelHeader";

/**
 * Site-wide header. The three-color VoxelHeader is now the global default:
 * the homepage uses the floating "hero" variant over its dark voxel hero;
 * every other route uses the sticky white "bar" variant.
 *
 * The navy GlassHeader/LegacyHeader and the per-route allow-list were removed
 * 2026-07-20 once every page was ported to the three-color system.
 */
export default function HeaderRouter() {
  const pathname = usePathname();
  if (pathname === "/") return <VoxelHeader variant="hero" />;
  return <VoxelHeader variant="bar" />;
}
