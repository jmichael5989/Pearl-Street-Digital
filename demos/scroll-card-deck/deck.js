/* ==========================================================================
   Scroll Card Deck — animation logic
   Standalone GSAP ScrollTrigger + Lenis implementation of the
   incredibles.dev-style pinned "card deck" scroll effect.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     TUNABLE CONSTANTS (defaults)
     Every knob the debug panel exposes lives here first. Change these to
     retune the effect statically; the debug panel lets you retune live.
     ------------------------------------------------------------------------ */
  var COUNT = 4; // number of cards in the deck — keep in sync with .deck { --count }
  var SCALE_STEP_DEFAULT = 0.125; // scale lost per unit of depth d (1 - d * SCALE_STEP)
  var FADE_STEP_DEFAULT = 0.1; // overlay opacity gained per unit of depth d
  var FADE_MAX_DEFAULT = 0.3; // overlay opacity never exceeds this
  var TRAVEL_DEFAULT = 120; // px a card travels once it becomes (and stays) active
  var VISIBLE_DEPTH_DEFAULT = 3; // cards with d > this are fully hidden (opacity 0) — never composite more than 4

  /** Live, mutable copy of the constants above. The debug panel sliders
   *  write into this object; the onUpdate loop reads from it every frame. */
  var tuning = {
    scaleStep: SCALE_STEP_DEFAULT,
    fadeStep: FADE_STEP_DEFAULT,
    fadeMax: FADE_MAX_DEFAULT,
    travel: TRAVEL_DEFAULT,
    visibleDepth: VISIBLE_DEPTH_DEFAULT,
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  /* ------------------------------------------------------------------------
     Reduced motion: bail out entirely before touching GSAP/Lenis/ScrollTrigger.
     Reduced-motion users get a static vertical list of the four cards via the
     `.deck-static` CSS-only fallback class on <body> — no Lenis, no pin.
     ------------------------------------------------------------------------ */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.body.classList.add("deck-static");
    return;
  }

  /* ------------------------------------------------------------------------
     Boot once the DOM is ready.
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    if (!window.gsap || !window.ScrollTrigger || !window.Lenis) {
      console.error(
        "[scroll-card-deck] gsap, ScrollTrigger, or Lenis failed to load (CDN and local vendor fallback both unavailable)."
      );
      return;
    }

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    var Lenis = window.Lenis;
    gsap.registerPlugin(ScrollTrigger);

    var deckEl = document.querySelector(".deck");
    var stageEl = document.querySelector(".deck__stage");
    var cardEls = Array.prototype.slice.call(document.querySelectorAll(".card"));

    if (!deckEl || !stageEl || cardEls.length === 0) return;

    // Stack order: card i must render above card i+1.
    cardEls.forEach(function (el, i) {
      el.style.zIndex = String(cardEls.length - i);
    });

    /* ----------------------------------------------------------------------
       Lenis smooth scrolling, synced to GSAP's ticker.
       ---------------------------------------------------------------------- */
    var lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    /* ----------------------------------------------------------------------
       Debug panel — plain DOM, no dependencies. Hidden by default, toggled
       with the "d" key. Sliders mutate `tuning` live; the next onUpdate
       tick picks the new values up automatically (scrub means it also
       reacts immediately to slider input via ScrollTrigger.update()).
       Built BEFORE the ScrollTrigger below, since render() (used both by
       onUpdate and for the immediate initial paint) writes into its readout.
       ---------------------------------------------------------------------- */
    var debug = buildDebugPanel(tuning, function () {
      // NOTE: ScrollTrigger.update() is a no-op when the scroll position
      // hasn't actually moved (its scrub optimization skips onUpdate when
      // progress is unchanged), so it can't be used to make slider edits
      // "apply live" while the page is stationary. Call render() directly
      // with the trigger's current progress instead — this repaints
      // immediately regardless of whether scroll position changed.
      render(trigger.progress);
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "d" || e.key === "D") {
        // Ignore while typing in the panel's own inputs.
        var tag = document.activeElement && document.activeElement.tagName;
        if (tag === "INPUT" && document.activeElement.type !== "range") return;
        debug.panel.classList.toggle("is-open");
      }
    });

    function updateDebugReadout(progress, p) {
      debug.readout.textContent =
        "progress " + progress.toFixed(3) + "\np        " + p.toFixed(3);
    }

    /* ----------------------------------------------------------------------
       Core animation: map scroll progress -> a continuous "depth index" p,
       then derive each card's scale / overlay fade / y-travel from its
       distance d = clamp(i - p, 0, COUNT) below the active card.
       ---------------------------------------------------------------------- */
    function render(progress) {
      var p = progress * (COUNT - 1);

      cardEls.forEach(function (el, i) {
        var d = clamp(i - p, 0, COUNT);
        var scale = 1 - d * tuning.scaleStep;
        var fade = Math.min(tuning.fadeMax, d * tuning.fadeStep);
        var y = -(p - i) * tuning.travel;
        var hidden = d > tuning.visibleDepth;

        // One gsap.set() per card per frame.
        gsap.set(el, {
          y: y,
          scale: scale,
          opacity: hidden ? 0 : 1,
          "--fade": fade,
        });
      });

      updateDebugReadout(progress, p);
    }

    var trigger = ScrollTrigger.create({
      trigger: deckEl,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onToggle: function (self) {
        // DIVERGENCE (see deck.css .deck__stage comment): this standalone
        // page has spacer content above/below the deck, unlike the original
        // incredibles.dev homepage where the deck IS the page. The fixed
        // stage must only be visible while its ScrollTrigger is actually
        // active, or it would float on top of the spacer sections.
        stageEl.style.visibility = self.isActive ? "visible" : "hidden";
      },
      onUpdate: function (self) {
        render(self.progress);
      },
    });

    // Paint the initial state immediately. Without this, landing exactly on
    // the trigger's start pixel with zero prior scroll delta (e.g. a reload
    // mid-deck, or a jump-to-anchor) can skip GSAP's first onUpdate call
    // (it bails when progress hasn't changed since creation), leaving the
    // cards with no inline transform at all instead of their d=i baseline.
    render(trigger.progress);

    // Also sync the stage's initial visibility directly from the real
    // scroll position, rather than trusting `trigger.isActive` here: that
    // flag (and onToggle) only updates on a detected boundary *crossing*,
    // so landing already inside [start, end] with zero prior scroll delta
    // (same class of edge case as above) leaves it permanently unset and
    // the pinned stage stuck at its default hidden state. onToggle remains
    // the ongoing driver for real scroll interaction going forward.
    var initialScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    stageEl.style.visibility =
      initialScrollY >= trigger.start && initialScrollY <= trigger.end ? "visible" : "hidden";
  }

  /* ------------------------------------------------------------------------
     Debug panel builder — returns { panel, readout } and wires up sliders
     for scale step, fade step, fade max, travel, and visible depth.
     ------------------------------------------------------------------------ */
  function buildDebugPanel(tuning, onChange) {
    var panel = document.createElement("div");
    panel.className = "deck-debug";
    panel.setAttribute("aria-hidden", "true");

    var title = document.createElement("div");
    title.className = "deck-debug__title";
    title.textContent = "Deck Debug (d to toggle)";
    panel.appendChild(title);

    var readout = document.createElement("div");
    readout.className = "deck-debug__readout";
    readout.textContent = "progress 0.000\np        0.000";
    panel.appendChild(readout);

    var sliders = [
      { key: "scaleStep", label: "scale step", min: 0, max: 0.4, step: 0.005 },
      { key: "fadeStep", label: "fade step", min: 0, max: 0.4, step: 0.005 },
      { key: "fadeMax", label: "fade max", min: 0, max: 1, step: 0.01 },
      { key: "travel", label: "travel (px)", min: 0, max: 400, step: 2 },
      { key: "visibleDepth", label: "visible depth", min: 1, max: COUNT, step: 1 },
    ];

    sliders.forEach(function (cfg) {
      var row = document.createElement("div");
      row.className = "deck-debug__row";

      var label = document.createElement("label");
      label.textContent = cfg.label;
      var labelId = "deck-debug-" + cfg.key;
      label.setAttribute("for", labelId);

      var input = document.createElement("input");
      input.type = "range";
      input.id = labelId;
      input.min = String(cfg.min);
      input.max = String(cfg.max);
      input.step = String(cfg.step);
      input.value = String(tuning[cfg.key]);

      var output = document.createElement("output");
      output.textContent = Number(tuning[cfg.key]).toFixed(3);

      input.addEventListener("input", function () {
        var val = parseFloat(input.value);
        tuning[cfg.key] = val;
        output.textContent = val.toFixed(3);
        onChange();
      });

      row.appendChild(label);
      row.appendChild(input);
      row.appendChild(output);
      panel.appendChild(row);
    });

    var hint = document.createElement("div");
    hint.className = "deck-debug__hint";
    hint.textContent = "COUNT is fixed at " + COUNT + " (set in deck.js / deck.css)";
    panel.appendChild(hint);

    document.body.appendChild(panel);
    return { panel: panel, readout: readout };
  }

  // COUNT needs to be visible to buildDebugPanel above; keep it accessible
  // via closure by hoisting the constant to module scope (already is).
})();
