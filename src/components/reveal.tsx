"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  // Whisper of 3D tilt-up (rotateX with perspective) so entrances share the
  // depth language of the section transitions. Kept tiny — any more and text
  // visibly warps while you are trying to read it.
  hidden: { opacity: 0, y: 18, rotateX: 2, transformPerspective: 900 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 900,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.08 },
  }),
};

interface RevealProps {
  children: ReactNode;
  /** Stagger index — multiplies the entrance delay. */
  index?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Restrained scroll-into-view entrance. Animates once, respects
 * prefers-reduced-motion automatically (Framer Motion handles this).
 */
export function Reveal({ children, index = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}
