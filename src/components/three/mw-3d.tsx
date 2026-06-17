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

function MWModel() {
  const ref = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

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

  useFrame((_, dt) => {
    const g = ref.current;
    if (!g) return;
    const d = Math.min(dt, 0.05);
    const sp =
      typeof window !== "undefined"
        ? Math.min(1, window.scrollY / (window.innerHeight || 1))
        : 0;
    const targetX = mouse.current.y * 0.3;
    const targetY = mouse.current.x * 0.5 + sp * Math.PI * 0.55;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, d);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 4, d);
    g.position.y = THREE.MathUtils.damp(g.position.y, -sp * 1.4, 4, d);
  });

  return (
    <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.65}>
      <group ref={ref}>
        <mesh geometry={geom.m}>
          <meshStandardMaterial color="#f4f2ee" metalness={0.45} roughness={0.32} envMapIntensity={0.5} />
        </mesh>
        <mesh geometry={geom.w}>
          <meshStandardMaterial color="#f4f2ee" metalness={0.45} roughness={0.32} envMapIntensity={0.5} />
        </mesh>
        {geom.slashes.map((g, i) => (
          <mesh key={i} geometry={g} position={[0, 0, 0.06]}>
            <meshStandardMaterial
              color="#F26A1B"
              metalness={0.4}
              roughness={0.28}
              emissive="#F26A1B"
              emissiveIntensity={0.5}
            />
          </mesh>
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
      <directionalLight position={[4, 5, 6]} intensity={1.6} />
      <directionalLight position={[-5, 2, 3]} intensity={0.8} />

      {/* Mostly-white studio with just a hint of warm/cool in the reflections. */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={["#0a0a0a"]} />
        <Lightformer color="#ffffff" intensity={3} position={[-2, 2.5, 4]} scale={[5, 5, 1]} />
        <Lightformer color="#ffffff" intensity={2.2} position={[3, 1.5, 4]} scale={[5, 5, 1]} />
        <Lightformer color="#ffd9b0" intensity={1} position={[2, -2, 3]} scale={[4, 4, 1]} />
        <Lightformer color="#bcd0ff" intensity={0.8} position={[0, 3, -4]} scale={[5, 4, 1]} />
      </Environment>

      <group position={[1.85, 0, 0]} scale={0.55}>
        <MWModel />
      </group>
    </Canvas>
  );
}
