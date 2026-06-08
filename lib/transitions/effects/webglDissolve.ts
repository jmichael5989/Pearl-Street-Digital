import type * as THREE from "three";
import type { EffectModule } from "../types";

// About signature: a fullscreen navy veil dissolves in over the page via a
// value-noise (fbm) mask, then dissolves back out to reveal — a WebGL noise
// dissolve. three.js is dynamically imported HERE ONLY, so it never ships to any
// other route's chunk. If three or a WebGL context is unavailable, it falls back
// to a plain navy opacity fade on the shared overlay (no three, no canvas).
//
// The veil is a single fullscreen plane with a solid navy color; only its alpha
// is driven by smoothstep(uProgress ± edge, fbm(uv)). uProgress 1.5 → -0.75
// sweeps the mask from fully transparent to fully opaque.

const NAVY: readonly [number, number, number] = [0.078, 0.129, 0.239]; // #14213D

const VERT = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform float uProgress;
uniform vec3 uColor;
uniform float uAspect;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i + vec2(1.,0.)), c = hash(i + vec2(0.,1.)), d = hash(i + vec2(1.,1.));
  vec2 u = f * f * (3. - 2. * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, amp = 0.5;
  for (int i = 0; i < 4; i++) { v += amp * vnoise(p); p *= 2.0; amp *= 0.5; }
  return v;
}
void main(){
  vec2 uv = vUv; uv.x *= uAspect;
  float n = fbm(uv * 3.5);
  float edge = 0.18;
  float alpha = smoothstep(uProgress - edge, uProgress + edge, n);
  gl_FragColor = vec4(uColor, alpha);
}
`;

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.Camera | null = null;
let material: THREE.ShaderMaterial | null = null;
let mesh: THREE.Mesh | null = null;
let canvas: HTMLCanvasElement | null = null;
let useFallback = false;

function render() {
  if (renderer && scene && camera) renderer.render(scene, camera);
}

async function setupThree() {
  const T = await import("three");
  const mount = document.getElementById("tx-canvas-mount") as HTMLElement;
  renderer = new T.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1));
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas = renderer.domElement;
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
  mount.appendChild(canvas);
  scene = new T.Scene();
  camera = new T.Camera();
  material = new T.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    uniforms: {
      uProgress: { value: 1.5 },
      uColor: { value: new T.Vector3(NAVY[0], NAVY[1], NAVY[2]) },
      uAspect: { value: window.innerWidth / Math.max(1, window.innerHeight) },
    },
  });
  mesh = new T.Mesh(new T.PlaneGeometry(2, 2), material);
  scene.add(mesh);
  render();
}

function disposeThree() {
  try {
    mesh?.geometry?.dispose();
  } catch {
    /* noop */
  }
  try {
    material?.dispose();
  } catch {
    /* noop */
  }
  try {
    renderer?.dispose();
  } catch {
    /* noop */
  }
  if (canvas?.parentNode) canvas.parentNode.removeChild(canvas);
  renderer = null;
  scene = null;
  camera = null;
  material = null;
  mesh = null;
  canvas = null;
}

function overlayEl() {
  return document.getElementById("tx-overlay") as HTMLElement;
}

const webglDissolve: EffectModule = {
  async leave({ gsap }) {
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const mount = document.getElementById("tx-canvas-mount") as HTMLElement;
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    useFallback = false;
    try {
      await setupThree();
    } catch {
      disposeThree();
      useFallback = true;
    }
    if (useFallback || !material) {
      useFallback = true;
      const ov = overlayEl();
      gsap.set(ov, {
        visibility: "visible",
        backgroundColor: "var(--color-primary)",
        transformOrigin: "center",
        scaleX: 1,
        scaleY: 1,
        opacity: 0,
      });
      await gsap.to(ov, { opacity: 1, duration: 0.7, ease: "power2.inOut" });
      return;
    }
    gsap.set(mount, { visibility: "visible" });
    material.uniforms.uProgress.value = 1.5;
    render();
    // Resolve on explicit onComplete rather than the tween thenable — awaiting
    // a tween that targets a plain uniform object did not resolve reliably.
    await new Promise<void>((resolve) => {
      gsap.to(material!.uniforms.uProgress, {
        value: -0.75,
        duration: 1.15,
        ease: "power1.in",
        onUpdate: render,
        onComplete: resolve,
      });
    });
  },

  async enter({ gsap }) {
    if (useFallback || !material) {
      await gsap.to(overlayEl(), { opacity: 0, duration: 0.6, ease: "power2.inOut" });
      return;
    }
    await new Promise<void>((resolve) => {
      gsap.to(material!.uniforms.uProgress, {
        value: 1.5,
        duration: 1.15,
        ease: "power1.in",
        onUpdate: render,
        onComplete: resolve,
      });
    });
  },

  teardown({ gsap }) {
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const mount = document.getElementById("tx-canvas-mount") as HTMLElement;
    const ov = document.getElementById("tx-overlay");
    disposeThree();
    if (ov) gsap.set(ov, { clearProps: "all", visibility: "hidden" });
    gsap.set(mount, { visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
    useFallback = false;
  },
};

export default webglDissolve;
