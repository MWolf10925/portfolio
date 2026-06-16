"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  tilt?: number;
}

/**
 * Card that (1) shows a radial glow following the cursor and (2) tilts in 3D
 * toward the cursor. Smoothed with springs; resets on leave.
 */
export function SpotlightCard({ children, className, tilt = 6 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalized cursor position (-0.5 .. 0.5) for tilt.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 150, damping: 18 });
  const sy = useSpring(py, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [tilt, -tilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-tilt, tilt]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Glow position as CSS vars.
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    // Tilt input.
    px.set(x / rect.width - 0.5);
    py.set(y / rect.height - 0.5);
  }

  function handleLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`glow-card [transform-style:preserve-3d] ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
