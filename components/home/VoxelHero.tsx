"use client";

/**
 * VoxelHero — the homepage hero.
 *
 * The "Rank Point Media" wordmark forms as a solid mirror-glass title, holds,
 * then shatters into ~hundreds of instanced glass cubes that fall with real
 * Rapier physics, bounce, and settle into a pile. Ported verbatim (physics
 * constants, sampling, materials, choreography) from the approved static mock
 * at public/mocks/hero/voxel-drop.html.
 *
 * Production adaptations over the mock:
 *  - three + rapier are dynamically imported inside the effect, deferred to
 *    requestIdleCallback, so they stay off the server bundle and the LCP
 *    path (mirrors HeroOrbit's lazy-GSAP pattern). A capability gate skips
 *    the import entirely on mobile/touch/reduced-motion/save-data — those
 *    visitors get the static CSS wordmark fallback instead (see .no-webgl).
 *  - The Fraunces statement is a server-rendered <h1>. On capable clients a
 *    pre-paint inline script (app/layout.tsx) adds `voxel-cap` to <html>, and
 *    CSS hides the statement FROM FIRST PAINT (color/filter, never opacity) so
 *    the glass wordmark shows alone until it drops — no verbiage flash on entry.
 *    "reveal-in" fades it back in once the shards settle. Visitors on the
 *    fallback path (mobile/touch/reduced-motion/save-data — no `voxel-cap`) keep
 *    the statement visible from first paint, so it stays their fast LCP element.
 *  - Full GL + physics disposal on unmount (renderer.forceContextLoss, world
 *    .free, all timers/observers/listeners) because React remounts on client
 *    navigation, unlike the one-shot static mock.
 *  - An IntersectionObserver + visibilitychange pause the loop off-screen.
 */

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ============================ TUNING KNOBS ============================ */
const DROP_DELAY_MS = 2500; // hold the formed wordmark this long (visible time), then drop
const REVEAL_DELAY_MS = 1300; // after the drop, wait for blocks to reach the floor, then reveal scramble
const GRID_COLS = 72; // voxelization width (cube count scales with this). Lowered
// from 96 for the production port: ~2x fewer rigid bodies keeps the settle cheap
// on the main thread (Lighthouse mobile TBT). Still legible as a wordmark.
const ASPECT = 0.46; // grid height : width
const VOXEL = 0.06; // world size of one cube (raised with the lower density so the
// wordmark keeps the same footprint)
const GRAVITY = -10.0; // world gravity (more negative = snappier drop)
const SUBSTEPS = 4; // physics steps per frame — small cubes fall fast, restored
// to the mock's value now that this only ever runs on capable desktop clients
const REST = 0.82; // cube restitution (bounce) — higher = livelier
const REST_FLOOR = 0.65; // floor restitution (raised — the floor impact is
// the most visible bounce, so it gets the strongest kick back)
const FRICTION = 0.42; // cube friction (lower = slides/scatters more on landing)
const LIN_DAMP = 0.03; // linear damping (low = keeps bouncing longer)
const ANG_DAMP = 0.13; // angular damping (low = more tumbling)
const SCATTER = 0.75; // horizontal break-apart velocity range
const SPIN = 9; // tumble (angular velocity) range
const POP_MIN = 0.18; // minimum upward kick on drop — every cube gets at least
const POP_RANGE = 0.5; // this much lift, so none of them just fall flat; a
// pure Math.random() kick let some cubes roll near-zero and drop with no
// visible bounce at all
const MAX_SIM_FRAMES = 1500; // hard cap: force the sim to stop even if it never sleeps
/* ===================================================================== */

const QUOTES = [
  "Rank Higher",
  "Imagination is power",
  "Code is poetry",
  "Creativity takes courage",
  "Design is intelligence made visible",
  "Every pixel has a purpose",
  "Simplicity is the ultimate sophistication",
];

const SCRAM_SLOTS: Array<{
  top: string;
  left?: string;
  right?: string;
  align: "left" | "right" | "center";
}> = [
  { top: "12%", left: "6%", align: "left" },
  { top: "11%", right: "7%", align: "right" },
  { top: "18%", align: "center" },
  { top: "32%", left: "5%", align: "left" },
  { top: "38%", right: "6%", align: "right" },
  { top: "44%", left: "7%", align: "left" },
  { top: "43%", right: "8%", align: "right" },
  { top: "26%", right: "11%", align: "right" },
];

const SCRAM_CHARS = "!<>-_\\/[]{}=+*^?#________";

export default function VoxelHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const replayRef = useRef<HTMLButtonElement | null>(null);
  const statementRef = useRef<HTMLHeadingElement | null>(null);
  const horizonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    let disposed = false;
    let cleanup: (() => void) | null = null;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Capability gate. The three.js + Rapier hero is a large-screen enhancement:
    // on a throttled mobile CPU the physics settle jams the main thread
    // (Lighthouse mobile TBT/LCP). Run it on desktops (fine pointer, >=900px) AND
    // on any wide screen >=1024px — so touch-screen laptops / hybrids (which
    // report `pointer: coarse` even with a mouse) get the animation too, while
    // phones (incl. landscape ~<=930px) and small/portrait tablets stay on the
    // fast static hero (the server-rendered <h1> + CTA), with three/rapier never
    // imported. Reduced-motion + save-data are always honored.
    // NOTE: keep this media string IDENTICAL to the pre-paint voxel-cap gate in
    // app/layout.tsx — a mismatch hides the statement without a wordmark (or v.v.).
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const capable =
      !reduce &&
      window.matchMedia(
        "(min-width: 900px) and (pointer: fine), (min-width: 1024px)",
      ).matches &&
      !(conn && conn.saveData);

    if (!capable) {
      section.classList.add("no-webgl");
      return; // no heavy import, no physics, no listeners to tear down
    }

    // Defer the heavy import + init to browser idle so it never competes with
    // hydration or the LCP paint. Falls back to a short timeout where
    // requestIdleCallback is unavailable (Safari).
    const idle = window as unknown as {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const hasRIC = typeof idle.requestIdleCallback === "function";
    const startInit = () => {
      if (disposed) return;
      init().catch((err) => {
        console.error("[voxel-hero] init failed:", err);
        section.classList.add("no-webgl");
      });
    };
    const idleId = hasRIC
      ? idle.requestIdleCallback!(startInit, { timeout: 2500 })
      : window.setTimeout(startInit, 600);

    async function init() {
      const THREE = await import("three");
      if (disposed) return;
      const { RoomEnvironment } = await import(
        "three/examples/jsm/environments/RoomEnvironment.js"
      );
      const { FontLoader } = await import(
        "three/examples/jsm/loaders/FontLoader.js"
      );
      const { TextGeometry } = await import(
        "three/examples/jsm/geometries/TextGeometry.js"
      );
      const RAPIER = (await import("@dimforge/rapier3d-compat")).default;
      if (disposed || !canvas || !section) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        if (!renderer.getContext()) throw new Error("no webgl context");
      } catch {
        section.classList.add("no-webgl");
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.95;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);

      const camera = new THREE.PerspectiveCamera(
        42,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
      );
      camera.position.set(0, 0.15, 5.4);

      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;
      const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
      keyLight.position.set(2.5, 4, 4);
      scene.add(keyLight);
      const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
      rimLight.position.set(-3, 1.5, -4);
      scene.add(rimLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.12));

      /* ---- sample the wordmark into a pixel grid ---- */
      const GRID_ROWS = Math.round(GRID_COLS * ASPECT);
      const sCanvas = document.createElement("canvas");
      sCanvas.width = GRID_COLS;
      sCanvas.height = GRID_ROWS;

      function paintWordmark() {
        const ctx = sCanvas.getContext("2d", { willReadFrequently: true })!;
        ctx.clearRect(0, 0, GRID_COLS, GRID_ROWS);
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const fs = Math.round(GRID_ROWS * 0.42);
        ctx.font = `700 ${fs}px "Inter Tight", system-ui, sans-serif`;
        ctx.fillText("RANK POINT", GRID_COLS / 2, GRID_ROWS * 0.34);
        ctx.fillText("MEDIA", GRID_COLS / 2, GRID_ROWS * 0.7);
        return ctx.getImageData(0, 0, GRID_COLS, GRID_ROWS).data;
      }

      // Wait for Inter Tight before sampling, so the grid matches the rendered font.
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch {
          /* fonts.ready can reject; sampling with the fallback is acceptable */
        }
      }
      if (disposed) {
        renderer.dispose();
        return;
      }

      const data = paintWordmark();
      const homes: Array<{ x: number; y: number; z: number; b: number }> = [];
      const standY = 0.55;
      for (let r = 0; r < GRID_ROWS; r++) {
        for (let c = 0; c < GRID_COLS; c++) {
          const a = data[(r * GRID_COLS + c) * 4 + 3];
          if (a > 90) {
            const x = (c - GRID_COLS / 2) * VOXEL;
            const y = standY + (GRID_ROWS / 2 - r) * VOXEL;
            const z = (Math.random() - 0.5) * VOXEL * 0.6;
            const b = 0.86 + Math.random() * 0.14; // brightness mix #9a958c -> #cfcabf
            homes.push({ x, y, z, b });
          }
        }
      }
      const N = homes.length;
      // Floor kept close to the wordmark so fit() frames tightly and the
      // wordmark reads large; the visual floor plane is hidden (all-black
      // lower half) and a gold horizon line marks where the shards land.
      const floorY = -0.7;

      let minX = Infinity,
        maxX = -Infinity,
        minY = Infinity,
        maxY = -Infinity;
      for (const h of homes) {
        if (h.x < minX) minX = h.x;
        if (h.x > maxX) maxX = h.x;
        if (h.y < minY) minY = h.y;
        if (h.y > maxY) maxY = h.y;
      }
      const wmW = maxX - minX;

      function fit() {
        camera.aspect = window.innerWidth / window.innerHeight;
        const vHalf = Math.tan(((camera.fov * Math.PI) / 180) / 2);
        const topY = maxY;
        const botY = floorY;
        const centerY = (topY + botY) / 2;
        // Tight margins so the wordmark reads large (near edge-to-edge on width).
        const halfH = ((topY - botY) / 2) * 1.05;
        const halfW = (wmW / 2) * 1.04;
        const distH = halfH / vHalf;
        const distW = halfW / (vHalf * camera.aspect);
        const dist = Math.max(distH, distW) + 0.12;
        camera.position.set(0, centerY + 0.06, dist);
        camera.lookAt(0, centerY, 0);
        camera.updateProjectionMatrix();

        // Park the gold horizon line just below the wordmark's projected
        // bottom, so it tracks the wordmark across aspect ratios.
        if (horizonRef.current) {
          const nd = new THREE.Vector3((minX + maxX) / 2, minY, 0).project(
            camera,
          );
          const yPct = ((1 - nd.y) / 2) * 100 + 4;
          horizonRef.current.style.top = `${yPct}%`;
        }
      }

      /* ---- instanced cubes (the shards; hidden until the drop) ---- */
      // Same family of physical properties as the formed glassMat below (a
      // transmissive dielectric, not a mirror), so the shards read as small
      // pieces of the same glass the wordmark was made of, not chrome ball
      // bearings. transmission/thickness are lighter than the wordmark's
      // since each cube is tiny — a thick attenuation reads as opaque at
      // this scale.
      const geo = new THREE.BoxGeometry(VOXEL * 0.92, VOXEL * 0.92, VOXEL * 0.92);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, // instance color (below) tints this per-cube
        metalness: 0.08,
        roughness: 0.08,
        transmission: 0.5,
        thickness: VOXEL * 2.4,
        ior: 1.45,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        envMapIntensity: 1.9,
        emissive: 0xcfcabf,
        emissiveIntensity: 0.12,
        transparent: true,
      });
      const mesh = new THREE.InstancedMesh(geo, mat, N);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      const dummy = new THREE.Object3D();
      const tmpC = new THREE.Color();
      for (let i = 0; i < N; i++) {
        const t = (homes[i].b - 0.86) / 0.14;
        tmpC.setRGB(0.604 + 0.208 * t, 0.584 + 0.208 * t, 0.549 + 0.2 * t); // #9a958c -> #cfcabf
        mesh.setColorAt(i, tmpC);
      }
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.visible = false; // solid glass wordmark shows first; cubes appear on drop
      scene.add(mesh);

      /* ---- solid glass wordmark — the formed state that shatters into the cubes ---- */
      const font = await new Promise<import("three/examples/jsm/loaders/FontLoader.js").Font>(
        (res, rej) =>
          new FontLoader().load(
            "/fonts/helvetiker_bold.typeface.json",
            res,
            undefined,
            rej,
          ),
      );
      if (disposed) {
        geo.dispose();
        mat.dispose();
        renderer.dispose();
        return;
      }
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xcfcabf,
        transmission: 0.4,
        thickness: 0.5,
        roughness: 0.13,
        ior: 1.45,
        metalness: 0.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        envMapIntensity: 1.6,
        emissive: 0xcfcabf,
        emissiveIntensity: 0.14,
        transparent: true,
        attenuationColor: new THREE.Color(0xcfcabf),
        attenuationDistance: 1.0,
        specularIntensity: 1.0,
      });
      function makeLine(str: string) {
        const g = new TextGeometry(str, {
          font,
          size: 1,
          depth: 0.22,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0.02,
          bevelSize: 0.016,
          bevelSegments: 2,
        });
        g.computeBoundingBox();
        const b = g.boundingBox!;
        g.translate(
          -(b.max.x + b.min.x) / 2,
          -(b.max.y + b.min.y) / 2,
          -(b.max.z + b.min.z) / 2,
        );
        return g;
      }
      const wordmarkMesh = new THREE.Group();
      const lineGap = 1.32;
      const line1Geo = makeLine("RANK POINT");
      const line2Geo = makeLine("MEDIA");
      const m1 = new THREE.Mesh(line1Geo, glassMat);
      m1.position.y = lineGap / 2;
      const m2 = new THREE.Mesh(line2Geo, glassMat);
      m2.position.y = -lineGap / 2;
      wordmarkMesh.add(m1, m2);
      {
        const gb = new THREE.Box3().setFromObject(wordmarkMesh);
        const s = Math.min(
          (maxX - minX) / (gb.max.x - gb.min.x),
          (maxY - minY) / (gb.max.y - gb.min.y),
        );
        wordmarkMesh.scale.setScalar(s);
        const gb2 = new THREE.Box3().setFromObject(wordmarkMesh);
        wordmarkMesh.position.x += -(gb2.max.x + gb2.min.x) / 2;
        wordmarkMesh.position.y += (minY + maxY) / 2 - (gb2.max.y + gb2.min.y) / 2;
      }
      scene.add(wordmarkMesh);

      // visual floor
      const floorGeo = new THREE.PlaneGeometry(40, 40);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x0c0c0c,
        roughness: 1.0,
        metalness: 0.0,
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = floorY;
      // Visual floor hidden: the lower half stays uniform near-black (the scene
      // background) and a gold horizon line marks the landing plane instead.
      // The Rapier physics floor collider (created separately below) is untouched,
      // so the shards still land and pile.
      floor.visible = false;
      scene.add(floor);

      /* ---- Rapier physics ---- */
      await RAPIER.init();
      if (disposed) {
        geo.dispose();
        mat.dispose();
        glassMat.dispose();
        line1Geo.dispose();
        line2Geo.dispose();
        floorGeo.dispose();
        floorMat.dispose();
        renderer.dispose();
        return;
      }
      const world = new RAPIER.World({ x: 0, y: GRAVITY, z: 0 });
      world.integrationParameters.dt = 1 / (60 * SUBSTEPS); // realtime, finer steps

      const MAX = RAPIER.CoefficientCombineRule.Max; // cube's restitution wins

      world.createCollider(
        RAPIER.ColliderDesc.cuboid(20, 0.1, 20)
          .setTranslation(0, floorY - 0.1, 0)
          .setRestitution(REST_FLOOR)
          .setRestitutionCombineRule(MAX)
          .setFriction(0.9),
      );

      const half = VOXEL * 0.46;
      const bodies = new Array<import("@dimforge/rapier3d-compat").RigidBody>(N);
      for (let i = 0; i < N; i++) {
        const h = homes[i];
        const body = world.createRigidBody(
          RAPIER.RigidBodyDesc.fixed()
            .setTranslation(h.x, h.y, h.z)
            .setLinearDamping(LIN_DAMP)
            .setAngularDamping(ANG_DAMP),
        );
        world.createCollider(
          RAPIER.ColliderDesc.cuboid(half, half, half)
            .setRestitution(REST)
            .setRestitutionCombineRule(MAX)
            .setFriction(FRICTION),
          body,
        );
        bodies[i] = body;
      }

      function syncInstances() {
        for (let i = 0; i < N; i++) {
          const t = bodies[i].translation();
          const q = bodies[i].rotation();
          dummy.position.set(t.x, t.y, t.z);
          dummy.quaternion.set(q.x, q.y, q.z, q.w);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      }
      fit();
      syncInstances();

      /* ---- drive loop ---- */
      let simulating = false;
      let simFrames = 0;
      let visible = !document.hidden;
      let rafId: number | null = null;

      /* ---- scramble quotes ---- */
      const scramEls = SCRAM_SLOTS.map((s) => {
        const d = document.createElement("div");
        d.className = "scram";
        d.style.top = s.top;
        d.style.textAlign = s.align;
        if (s.align === "center") {
          d.style.left = "50%";
          d.style.transform = "translateX(-50%)";
        } else {
          if (s.left) d.style.left = s.left;
          if (s.right) d.style.right = s.right;
        }
        section!.appendChild(d);
        return d as HTMLDivElement & { _raf?: number };
      });
      let scramRunning = false;
      let scramTimer: ReturnType<typeof setTimeout> | null = null;
      let qIndex = 0;
      let revealed = false;

      function scrambleTo(
        el: HTMLDivElement & { _raf?: number },
        text: string,
      ) {
        return new Promise<void>((resolve) => {
          const queue: Array<{
            to: string;
            start: number;
            end: number;
            char: string | null;
          }> = [];
          for (let i = 0; i < text.length; i++) {
            const start = Math.floor(Math.random() * 18);
            queue.push({
              to: text[i],
              start,
              end: start + 8 + Math.floor(Math.random() * 18),
              char: null,
            });
          }
          let frame = 0;
          (function tick() {
            let out = "",
              done = 0;
            for (let i = 0; i < queue.length; i++) {
              const q = queue[i];
              if (frame >= q.end) {
                done++;
                out += q.to;
              } else if (frame >= q.start) {
                if (!q.char || Math.random() < 0.28)
                  q.char =
                    SCRAM_CHARS[Math.floor(Math.random() * SCRAM_CHARS.length)];
                out += '<span class="dud">' + q.char + "</span>";
              } else out += " ";
            }
            el.innerHTML = out;
            if (done === queue.length) resolve();
            else {
              frame++;
              el._raf = requestAnimationFrame(tick);
            }
          })();
        });
      }
      async function runScram(
        el: HTMLDivElement & { _raf?: number },
        text: string,
      ) {
        el.classList.add("on");
        await scrambleTo(el, text);
        await new Promise((r) => setTimeout(r, 1500 + Math.random() * 900));
        el.classList.remove("on");
        setTimeout(() => {
          if (!el.classList.contains("on")) el.innerHTML = "";
        }, 700);
      }
      function scramSpawn() {
        if (!scramRunning || !visible) return;
        const free = scramEls.filter((e) => !e.classList.contains("on"));
        if (free.length)
          runScram(
            free[Math.floor(Math.random() * free.length)],
            QUOTES[qIndex++ % QUOTES.length],
          );
        scramTimer = setTimeout(scramSpawn, 850 + Math.random() * 900);
      }
      function startScram() {
        if (scramRunning) return;
        scramRunning = true;
        scramSpawn();
      }
      function stopScram() {
        scramRunning = false;
        if (scramTimer) clearTimeout(scramTimer);
        scramEls.forEach((e) => {
          if (e._raf) cancelAnimationFrame(e._raf);
          e.classList.remove("on");
          e.innerHTML = "";
        });
      }

      // On capable clients the statement is hidden from first paint (the
      // voxel-cap html class + CSS), so the glass wordmark shows alone during
      // the hold. "reveal" fades it back in over the settled shard pile via the
      // "reveal-in" class (color/filter only, never opacity).
      function showReveal() {
        revealed = true;
        statementRef.current?.classList.add("reveal-in");
        startScram();
      }
      function hideReveal() {
        revealed = false;
        // Removing reveal-in re-applies the CSS hide (voxel-cap :not(.reveal-in)).
        statementRef.current?.classList.remove("reveal-in");
        stopScram();
      }

      function renderOnce() {
        renderer.render(scene, camera);
      }

      function frameStep() {
        rafId = null;
        if (simulating && visible) {
          for (let s = 0; s < SUBSTEPS; s++) world.step();
          simFrames++;
          syncInstances();
          if (simFrames > 40 && allAsleep()) simulating = false;
          else if (simFrames > MAX_SIM_FRAMES) simulating = false;
        }
        renderOnce();
        if (simulating && visible) schedule();
      }
      function schedule() {
        if (rafId == null) rafId = requestAnimationFrame(frameStep);
      }
      function stop() {
        if (rafId != null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
      function allAsleep() {
        for (let i = 0; i < N; i++) if (!bodies[i].isSleeping()) return false;
        return true;
      }

      let revealTimer: ReturnType<typeof setTimeout> | null = null;

      function drop() {
        if (simulating) return;
        simulating = true;
        simFrames = 0;
        wordmarkMesh.visible = false;
        mesh.visible = true;
        // Fade out the CTA + "Established 2025" as the wordmark shatters.
        section!.classList.add("dropped");
        if (revealTimer) clearTimeout(revealTimer);
        revealTimer = setTimeout(showReveal, REVEAL_DELAY_MS);
        for (let i = 0; i < N; i++) {
          const b = bodies[i];
          b.setBodyType(RAPIER.RigidBodyType.Dynamic, true);
          b.setLinvel(
            {
              x: (Math.random() - 0.5) * SCATTER,
              y: POP_MIN + Math.random() * POP_RANGE,
              z: (Math.random() - 0.5) * SCATTER,
            },
            true,
          );
          b.setAngvel(
            {
              x: (Math.random() - 0.5) * SPIN,
              y: (Math.random() - 0.5) * SPIN,
              z: (Math.random() - 0.5) * SPIN,
            },
            true,
          );
        }
        schedule();
      }

      function reform() {
        stop();
        simulating = false;
        simFrames = 0;
        mesh.visible = false;
        wordmarkMesh.visible = true;
        if (revealTimer) clearTimeout(revealTimer);
        hideReveal();
        section!.classList.remove("dropped");
        for (let i = 0; i < N; i++) {
          const b = bodies[i],
            h = homes[i];
          b.setBodyType(RAPIER.RigidBodyType.Fixed, true);
          b.setTranslation({ x: h.x, y: h.y, z: h.z }, true);
          b.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
          b.setLinvel({ x: 0, y: 0, z: 0 }, true);
          b.setAngvel({ x: 0, y: 0, z: 0 }, true);
        }
        syncInstances();
        renderOnce();
      }

      function replay() {
        reform();
        requestDrop();
      }

      /* ---- auto-sequence: hold, then drop (only counts down while visible) ---- */
      renderOnce();
      // The statement is already hidden from first paint on capable clients (the
      // voxel-cap html class + CSS), so the glass wordmark shows alone during the
      // hold; nothing to dim here.
      let wantDrop = false;
      let holdTimer: ReturnType<typeof setTimeout> | null = null;
      function startHoldTimer() {
        if (wantDrop && holdTimer == null && visible)
          holdTimer = setTimeout(() => {
            holdTimer = null;
            wantDrop = false;
            drop();
          }, DROP_DELAY_MS);
      }
      function pauseHoldTimer() {
        if (holdTimer != null) {
          clearTimeout(holdTimer);
          holdTimer = null;
        }
      }
      function requestDrop() {
        wantDrop = true;
        pauseHoldTimer();
        startHoldTimer();
      }
      if (!reduce) requestDrop();

      /* ---- controls ---- */
      const onReplayClick = () => replay();
      const onCanvasClick = () => {
        if (!simulating) replay();
      };
      replayRef.current?.addEventListener("click", onReplayClick);
      canvas.addEventListener("click", onCanvasClick);

      /* ---- pause when offscreen or tab hidden ---- */
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting && !document.hidden;
          if (visible) {
            startHoldTimer();
            if (simulating) schedule();
            else renderOnce();
            if (revealed) startScram();
          } else {
            pauseHoldTimer();
            stop();
            stopScram();
          }
        },
        { threshold: 0 },
      );
      io.observe(canvas);

      const onVisibility = () => {
        visible = !document.hidden;
        if (visible) {
          startHoldTimer();
          if (simulating) schedule();
          else renderOnce();
          if (revealed) startScram();
        } else {
          pauseHoldTimer();
          stop();
          stopScram();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        fit();
        renderOnce();
      };
      window.addEventListener("resize", onResize);

      /* ---- teardown ---- */
      cleanup = () => {
        stop();
        pauseHoldTimer();
        if (revealTimer) clearTimeout(revealTimer);
        stopScram();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("resize", onResize);
        replayRef.current?.removeEventListener("click", onReplayClick);
        canvas.removeEventListener("click", onCanvasClick);
        scramEls.forEach((e) => e.remove());
        geo.dispose();
        mat.dispose();
        glassMat.dispose();
        line1Geo.dispose();
        line2Geo.dispose();
        floorGeo.dispose();
        floorMat.dispose();
        envTex.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        world.free();
      };
    }

    return () => {
      disposed = true;
      if (hasRIC && idle.cancelIdleCallback) idle.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section ref={sectionRef} className="voxel-hero" aria-label="Rank Point Media">
      <canvas ref={canvasRef} className="gl-canvas" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      {/* Gold horizon line — the "floor". Positioned by fit() just below the
          wordmark; the shards fall and pile below it. */}
      <div ref={horizonRef} className="voxel-horizon" aria-hidden="true" />
      <div className="gl-fallback" aria-hidden="true">
        <div className="mark">
          Rank Point
          <br />
          Media
        </div>
      </div>

      <h1 ref={statementRef} className="voxel-statement">
        <span className="vs-base">
          Designing for the <span className="hl">digital universe</span>.
          Experiences as impactful as the brands they{"’"}re for.
        </span>
        {/* Decorative bright copy for the tracing-light sweep (see .vs-shine in
            globals.css). aria-hidden so the statement isn't read twice. */}
        <span className="vs-shine" aria-hidden="true">
          Designing for the digital universe. Experiences as impactful as the
          brands they{"’"}re for.
        </span>
      </h1>

      {/* Small "Established 2025" line under the wordmark. Like the CTA, it's
          visible while the wordmark is formed and fades out once it shatters
          (the .voxel-hero.dropped state). */}
      <p className="voxel-established">Established 2025</p>

      <div className="voxel-overlay">
        <div className="voxel-bottom">
          <Link className="voxel-cta" href="/contact#talk-to-us">
            Book a consultation
          </Link>
          <div className="voxel-controls">
            <button ref={replayRef} className="voxel-ctrl" type="button">
              Replay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
