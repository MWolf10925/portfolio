"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// MW monogram geometry (same as the SVG logo), SVG space y-down.
const M_PTS: [number, number][] = [
  [36, 76],
  [30, 16],
  [60, 56],
  [90, 16],
  [84, 76],
];
const W_PTS: [number, number][] = [
  [36, 56],
  [30, 116],
  [60, 76],
  [90, 116],
  [84, 56],
];
const SLASH_POLYS: [number, number][][] = [
  [[32, 60], [51, 69], [51, 81], [32, 72]],
  [[88, 60], [69, 69], [69, 81], [88, 72]],
];

const S = 1 / 30; // svg units -> world units
const HALF_W = 6.5 * S; // half the stroke width

function map([x, y]: [number, number]): [number, number] {
  return [(x - 60) * S, -(y - 66) * S];
}

// Convert a centerline polyline into a clean closed outline (mitred joins).
function strokeOutline(pts: [number, number][], hw: number): [number, number][] {
  const n = pts.length;
  const normals: [number, number][] = [];
  for (let i = 0; i < n - 1; i++) {
    const dx = pts[i + 1][0] - pts[i][0];
    const dy = pts[i + 1][1] - pts[i][1];
    const len = Math.hypot(dx, dy) || 1;
    normals.push([-dy / len, dx / len]);
  }
  const left: [number, number][] = [];
  const right: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    let nx: number, ny: number;
    if (i === 0) [nx, ny] = normals[0];
    else if (i === n - 1) [nx, ny] = normals[n - 2];
    else {
      const a = normals[i - 1];
      const b = normals[i];
      let mx = a[0] + b[0];
      let my = a[1] + b[1];
      const ml = Math.hypot(mx, my) || 1;
      mx /= ml;
      my /= ml;
      const cosHalf = mx * a[0] + my * a[1];
      const scale = 1 / Math.max(cosHalf, 0.4); // clamp miter spikes
      nx = mx * scale;
      ny = my * scale;
    }
    left.push([pts[i][0] + nx * hw, pts[i][1] + ny * hw]);
    right.push([pts[i][0] - nx * hw, pts[i][1] - ny * hw]);
  }
  return [...left, ...right.reverse()];
}

function shapeFrom(outline: [number, number][]): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(outline[0][0], outline[0][1]);
  for (let i = 1; i < outline.length; i++) s.lineTo(outline[i][0], outline[i][1]);
  s.closePath();
  return s;
}

function extrude(shape: THREE.Shape, depth: number): THREE.ExtrudeGeometry {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.04,
    bevelSegments: 2,
    curveSegments: 3,
  });
  geo.translate(0, 0, -depth / 2);
  geo.computeVertexNormals();
  return geo;
}

// Overshooting ease for the entrance pop.
function easeOutBack(x: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

/** A white light that slowly orbits the logo so a highlight sweeps the metal. */
function SweepLight() {
  const ref = useRef<THREE.DirectionalLight>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.set(Math.sin(t * 0.45) * 6, 2.5 + Math.sin(t * 0.3) * 1.5, Math.cos(t * 0.45) * 5 + 3);
  });
  return <directionalLight ref={ref} intensity={1.5} color="#ffffff" />;
}

function MWModel() {
  const ref = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const spin = useRef(0); // continuous base rotation
  const start = useRef(-1); // entrance start time
  const tiltX = useRef(0);
  const tiltY = useRef(0);

  const geom = useMemo(() => {
    const m = extrude(shapeFrom(strokeOutline(M_PTS.map(map), HALF_W)), 0.34);
    const w = extrude(shapeFrom(strokeOutline(W_PTS.map(map), HALF_W)), 0.34);
    const slashes = SLASH_POLYS.map((poly) => extrude(shapeFrom(poly.map(map)), 0.5));
    return { m, w, slashes };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      geom.m.dispose();
      geom.w.dispose();
      geom.slashes.forEach((g) => g.dispose());
    };
  }, [geom]);

  useFrame((state, dt) => {
    const g = ref.current;
    if (!g) return;
    const d = Math.min(dt, 0.05);

    // Entrance: spin-in + scale pop with overshoot, once.
    if (start.current < 0) start.current = state.clock.elapsedTime;
    const e = Math.min(1, (state.clock.elapsedTime - start.current) / 1.25);
    const entered = easeOutBack(e);

    // Continuous slow turn so the static studio sweeps highlights across it.
    spin.current += d * 0.2;

    // Mouse parallax (damped) + a little extra entrance spin.
    tiltX.current = THREE.MathUtils.damp(tiltX.current, mouse.current.y * 0.32, 4, d);
    tiltY.current = THREE.MathUtils.damp(tiltY.current, mouse.current.x * 0.6, 5, d);

    const entranceSpin = (1 - e) * Math.PI * 1.6;
    g.rotation.x = tiltX.current;
    g.rotation.y = spin.current + tiltY.current + entranceSpin;
    g.scale.setScalar(entered);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.14} floatIntensity={0.6}>
      <group ref={ref} scale={0}>
        <mesh geometry={geom.m}>
          <meshPhysicalMaterial
            color="#f4f2ee"
            metalness={0.55}
            roughness={0.17}
            clearcoat={1}
            clearcoatRoughness={0.14}
            envMapIntensity={1.05}
          />
        </mesh>
        <mesh geometry={geom.w}>
          <meshPhysicalMaterial
            color="#f4f2ee"
            metalness={0.55}
            roughness={0.17}
            clearcoat={1}
            clearcoatRoughness={0.14}
            envMapIntensity={1.05}
          />
        </mesh>
        {geom.slashes.map((g, i) => (
          <mesh key={i} geometry={g} position={[0, 0, 0.06]}>
            <meshPhysicalMaterial
              color="#F26A1B"
              metalness={0.35}
              roughness={0.22}
              clearcoat={1}
              clearcoatRoughness={0.2}
              emissive="#F26A1B"
              emissiveIntensity={0.85}
            />
          </mesh>
        ))}
        {/* Orange glow bleeding onto the white metal (fake bloom). */}
        <pointLight position={[0, 0, 1.2]} intensity={6} distance={4} decay={2} color="#ff7a2a" />
      </group>
    </Float>
  );
}

export default function MW3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 32 }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 6]} intensity={1.3} />
      <directionalLight position={[-5, 2, 3]} intensity={0.7} />
      <SweepLight />

      {/* Mostly-white studio with just a hint of warm/cool in the reflections. */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={["#0a0a0a"]} />
        {/* small hot panel = sharp glare highlight */}
        <Lightformer color="#ffffff" intensity={7} position={[-1.4, 2, 5]} scale={[1.6, 1.6, 1]} />
        <Lightformer color="#ffffff" intensity={3} position={[-2, 2.5, 4]} scale={[5, 5, 1]} />
        <Lightformer color="#ffffff" intensity={2.2} position={[3, 1.5, 4]} scale={[5, 5, 1]} />
        <Lightformer color="#ffd9b0" intensity={1.1} position={[2, -2, 3]} scale={[4, 4, 1]} />
        <Lightformer color="#bcd0ff" intensity={0.8} position={[0, 3, -4]} scale={[5, 4, 1]} />
      </Environment>

      <group position={[1.85, 0, 0]} scale={0.55}>
        <MWModel />
      </group>
    </Canvas>
  );
}
