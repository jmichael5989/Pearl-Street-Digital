# Scroll Card Deck (demo)

A standalone, no-build demo of a scroll-pinned "card deck" section — the
incredibles.dev homepage effect — using GSAP ScrollTrigger for the scroll
math and Lenis for smooth scrolling. Fully isolated from the Rank Point
Media Next.js app; nothing here is wired into the site.

## How to open

No build step. Serve the folder over HTTP (file:// will break the
ScrollTrigger start/end math and CORS-block the vendor scripts):

```bash
cd demos/scroll-card-deck
python3 -m http.server 8123
# open http://localhost:8123
```

`index.html` loads GSAP / ScrollTrigger / Lenis from jsdelivr; if the CDN
request fails (offline, blocked network) each script has an inline
fallback that writes a `<script>` tag pointing at the matching file in
`vendor/`, so the page also works with no internet access at all.

## Files

- `index.html` — markup: intro/outro spacer sections + the `.deck` /
  `.deck__stage` / `.card` structure (4 cards: Website Design, SEO, AI
  Search Optimization, Ad Campaigns).
- `deck.css` — all component styling, plus the `.deck-static` reduced-motion
  fallback and the debug panel's styles.
- `deck.js` — the ScrollTrigger + Lenis wiring and the debug panel. All
  tunables are named constants at the top of the file.
- `vendor/` — local copies of `gsap.min.js`, `ScrollTrigger.min.js`, and
  `lenis.min.js` (pulled via `npm pack`, not npm-installed into this repo).

## Tunables (deck.js, top of file)

| constant | default | meaning |
|---|---|---|
| `COUNT` | `4` | number of cards (keep in sync with `.deck { --count }`) |
| `SCALE_STEP_DEFAULT` | `0.125` | scale lost per unit of depth `d` |
| `FADE_STEP_DEFAULT` | `0.1` | overlay opacity gained per unit of depth `d` |
| `FADE_MAX_DEFAULT` | `0.3` | overlay opacity ceiling |
| `TRAVEL_DEFAULT` | `120` | px an active card travels as it slides up and out |
| `VISIBLE_DEPTH_DEFAULT` | `3` | cards with `d > this` are hidden entirely (never composite more than 4) |

Card sizing lives in `deck.css` as custom properties on `.deck`
(`--card-w` / `--card-h`), with breakpoints at 1080px and 576px.

## Debug panel

Press **d** to toggle a fixed top-right panel: live `progress` / `p`
readout, plus range sliders for every tunable above (scale step, fade
step, fade max, travel, visible depth). Sliders write into a live `tuning`
object that the per-frame `onUpdate` reads from — no page reload needed.

## Accessibility

The whole init is gated on `prefers-reduced-motion: reduce`. Reduced-motion
users never get Lenis or ScrollTrigger — `deck.js` returns immediately
after adding a `.deck-static` class to `<body>`, and `deck.css` turns that
into a plain static vertical stack of the four cards (no pin, no fixed
positioning, overlay forced to 0 opacity).

## Lifting this into the Next.js site

This is a component demo, not a page — if/when Rank Point Media wants this
effect on a real route:

- Port `.deck` / `.deck__stage` / `.card` / `.card__overlay` into a
  client component (`"use client"`), since it touches `window`, GSAP, and
  Lenis directly.
- `import` GSAP/ScrollTrigger/Lenis as real npm dependencies instead of
  CDN/vendor scripts, and load the component itself via `next/dynamic`
  with `ssr: false` — same pattern already used for `VoxelHero` — so none
  of this ships in the server bundle or blocks the LCP path.
- Keep the `prefers-reduced-motion` gate. On the real site it should
  degrade to the same static-list fallback rather than skip the section.
- Re-run the `.deck` sizing/breakpoints against the site's real type scale
  (`--display` / `--body` in `.rpm3`) instead of the system-font stack used
  here — this demo intentionally avoids the project's Google Fonts to stay
  a zero-dependency, drop-anywhere file.
- Registering `ScrollTrigger.create` inside a `useEffect` with a cleanup
  (`ScrollTrigger.kill()` / `lenis.destroy()`) is required in React — this
  demo's plain `<script>` never unmounts, so it never needed one.
