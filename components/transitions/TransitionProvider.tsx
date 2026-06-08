"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import TransitionStage from "./TransitionStage";
import { focusMain, getInternalHref, getNamespace } from "@/lib/transitions/dom";
import { DESTINATION_TITLES, resolveEffect } from "@/lib/transitions/registry";
import { loadGsap } from "@/lib/transitions/gsap";
import type {
  EffectModule,
  TransitionContext,
  TransitionStageRefs,
} from "@/lib/transitions/types";

type State = "idle" | "leaving" | "navigating" | "entering";

/**
 * Page-transition engine. Replaces Barba's lifecycle for the Next App Router:
 *   capture-phase click interception → effect.leave (cover) → router.push →
 *   pathname change → effect.enter (reveal) → teardown.
 *
 * The enter phase is triggered by a usePathname effect: when the committed route
 * changes, React has already mounted the new page subtree (passive effects run
 * post-commit), so it's a reliable "new page is in the DOM" signal — no extra
 * template.tsx needed. A failsafe timer guarantees the cover never sticks if the
 * pathname signal is somehow missed. Reduced motion and any failure fall back to
 * a plain router.push. The shared stage is rendered once and persists (it lives
 * in the root layout).
 */
export default function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const stateRef = useRef<State>("idle");
  const pendingRef = useRef<{
    effect: EffectModule;
    ctx: TransitionContext;
    targetPath: string;
  } | null>(null);
  const failsafeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runEnterRef = useRef<(force?: boolean) => void>(() => {});

  useEffect(() => {
    function getStage(): TransitionStageRefs | null {
      const root = document.getElementById("tx-stage");
      const overlay = document.getElementById("tx-overlay");
      const title = document.getElementById("tx-title");
      if (!root || !overlay || !title) return null;
      return { root, overlay, title };
    }

    function clearFailsafe() {
      if (failsafeRef.current) {
        clearTimeout(failsafeRef.current);
        failsafeRef.current = null;
      }
    }

    async function runEnter(force = false) {
      const pending = pendingRef.current;
      if (!pending) return;
      // Only run once the committed URL matches the target (the pathname effect
      // can fire for other reasons); the failsafe passes force=true to break stalls.
      if (!force && window.location.pathname !== pending.targetPath) return;
      pendingRef.current = null;
      clearFailsafe();
      stateRef.current = "entering";
      window.scrollTo(0, 0);
      try {
        await pending.effect.enter(pending.ctx);
      } catch {
        /* ignore — teardown still runs */
      } finally {
        try {
          pending.effect.teardown(pending.ctx);
        } catch {
          /* ignore */
        }
        focusMain();
        stateRef.current = "idle";
      }
    }
    runEnterRef.current = (force?: boolean) => {
      void runEnter(force);
    };

    async function navigate(href: string) {
      // Busy → swallow (default already prevented by the click handler).
      if (stateRef.current !== "idle") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }
      const stage = getStage();
      if (!stage) {
        router.push(href);
        return;
      }

      const targetPath = new URL(href, window.location.origin).pathname;
      const fromNamespace = getNamespace(window.location.pathname);
      const toNamespace = getNamespace(targetPath);

      let gsapInstance;
      let effect: EffectModule;
      try {
        gsapInstance = await loadGsap();
        effect = await resolveEffect(toNamespace)();
      } catch {
        router.push(href);
        return;
      }

      const ctx: TransitionContext = {
        gsap: gsapInstance,
        stage,
        fromNamespace,
        toNamespace,
        targetPath,
        destinationTitle: DESTINATION_TITLES[toNamespace] ?? "",
        reducedMotion: false,
      };

      stateRef.current = "leaving";
      try {
        await effect.leave(ctx);
      } catch {
        try {
          effect.teardown(ctx);
        } catch {
          /* ignore */
        }
        stateRef.current = "idle";
        router.push(href);
        return;
      }

      pendingRef.current = { effect, ctx, targetPath };
      stateRef.current = "navigating";
      router.push(href);
      clearFailsafe();
      failsafeRef.current = setTimeout(() => {
        void runEnter(true);
      }, 1800);
    }

    function onClick(e: MouseEvent) {
      const href = getInternalHref(e);
      if (!href) return;
      // Capture phase + stopImmediatePropagation runs before Next's <Link>
      // handler, so we fully own the navigation (no double-push, no instant
      // swap before the cover is up).
      e.preventDefault();
      e.stopImmediatePropagation();
      void navigate(href);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      clearFailsafe();
    };
  }, [router]);

  // When the committed route changes, reveal the incoming page.
  useEffect(() => {
    runEnterRef.current(false);
  }, [pathname]);

  return (
    <>
      {children}
      <TransitionStage />
    </>
  );
}
