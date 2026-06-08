// Shared types for the page-transition engine.

export type Namespace =
  | "home"
  | "about"
  | "services"
  | "caseStudies"
  | "blog"
  | "industries"
  | "areas"
  | "pricing"
  | "contact"
  | "legal"
  | "local"
  | "default";

// The GSAP core instance type, derived from the package so we don't need a
// value import at module scope (gsap is dynamically imported at runtime).
export type Gsap = (typeof import("gsap"))["gsap"];

// Stable references to the shared transition DOM rendered once by the provider.
export interface TransitionStageRefs {
  root: HTMLElement; // #tx-stage — the fixed full-screen layer
  overlay: HTMLElement; // #tx-overlay — the navy cover panel
  title: HTMLElement; // #tx-title — destination headline host (used by later effects)
}

export interface TransitionContext {
  gsap: Gsap;
  stage: TransitionStageRefs;
  fromNamespace: Namespace;
  toNamespace: Namespace;
  targetPath: string;
  destinationTitle: string;
  reducedMotion: boolean;
}

// An effect is a leave (cover) + enter (reveal) pair plus a teardown that always
// returns the stage to its idle/hidden state. Each effect is code-split.
export interface EffectModule {
  leave(ctx: TransitionContext): Promise<void>;
  enter(ctx: TransitionContext): Promise<void>;
  teardown(ctx: TransitionContext): void;
}
