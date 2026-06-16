"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// MW monogram polylines (same geometry as the SVG logo), SVG space y-down.
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
const SLASHES: [[number, number], [number, number]][] = [
  [[32, 66], [50, 74]],
  [[88, 66], [70, 74]],
];

const S = 1 / 30; // scale svg units -> world units
const THICK = 13 * S;
const DEPTH = 11 * S;

function map(p: [number, number]): [number, number] {
  return [(p[0] - 60) * S, -(p[1] - 66) * S];
}

interface Seg {
  pos: [number, number];
  angle: number;
  len: number;
}

function segments(pts: [number, number][]): Seg[] {
  const out: Seg[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = map(pts[i]);
    const b = map(pts[i + 1]);
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    out.push({
      pos: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2],
      angle: Math.atan2(dy, dx),
      len: Math.hypot(dx, dy),
    });
  }
  return out;
}

function Beam({
  seg,
  color,
  emissive = 0,
}: {
  seg: Seg;
  color: string;
  emissive?: number;
}) {
  return (
    <mesh position={[seg.pos[0], seg.pos[1], 0]} rotation={[0, 0, seg.angle]}>
      <boxGeometry args={[seg.len + THICK * 0.55, THICK, DEPTH]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.32}
        emissive={color}
        emissiveIntensity={emissive}
      />
    </mesh>
  );
}

function MWModel() {
  const ref = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  const white = useMemo(() => [...segments(M_PTS), ...segments(W_PTS)], []);
  const orange = useMemo(() => SLASHES.map((s) => segments(s)[0]), []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    const g = ref.current;
    if (!g) return;
    const d = Math.min(dt, 0.05);
    const sp =
      typeof window !== "undefined"
        ? Math.min(1, window.scrollY / (window.innerHeight || 1))
        : 0;
    const targetX = mouse.current.y * 0.3;
    const targetY = mouse.current.x * 0.5 + sp * Math.PI * 0.6;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, d);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 4, d);
    g.position.y = THREE.MathUtils.damp(g.position.y, -sp * 1.4, 4, d);
  });

  return (
    <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.7}>
      <group ref={ref}>
        {white.map((seg, i) => (
          <Beam key={`w${i}`} seg={seg} color="#f4f1ee" />
        ))}
        {orange.map((seg, i) => (
          <Beam key={`o${i}`} seg={seg} color="#F26A1B" emissive={0.3} />
        ))}
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
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={1.5} />
      <pointLight position={[-4, -2, 3]} color="#F26A1B" intensity={1.6} />
      <group position={[2.0, 0.15, 0]} scale={0.68}>
        <MWModel />
      </group>
    </Canvas>
  );
}
