"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

/**
 * Masked line reveal — the text rises up from behind a clip as it scrolls into
 * view (the signature "premium" heading move). Render inside a semantic tag,
 * e.g. <h2><MaskText text="Skills" /></h2>. Animates once.
 */
export function MaskText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -18% 0px" });
  const reduce = useReducedMotion();
  const shown = inView || reduce;

  return (
    <span
      ref={ref}
      className={`inline-block overflow-hidden pb-[0.12em] align-bottom ${className}`}
    >
      <motion.span
        className="inline-block"
        initial={{ y: reduce ? "0%" : "115%" }}
        animate={{ y: shown ? "0%" : "115%" }}
        transition={{ duration: 0.75, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}
