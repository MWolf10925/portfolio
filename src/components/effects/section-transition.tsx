"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Varied, content-aware section reveals — now true 3D.
 *
 * Every variant works in real perspective space instead of flat 2D wipes.
 *   curtain — the cover lifts off and tilts back into depth as it goes
 *   doors   — two panels swing open on their outer hinges (rotateY) like doors
 *   blinds  — five slats flip open around their top edge (rotateX) like a real
 *             venetian blind catching the light
 *   iris    — clip-path circle reveal (kept for reference, currently unused)
 * Underneath every panel variant the content itself rises out of depth: it
 * starts slightly scaled, tilted away (rotateX) and low, then settles flat.
 *
 * All are one-shot + scroll-triggered (never scrubbed → no seasick feel) and
 * skipped for prefers-reduced-motion. Do NOT use the panel variants on a section
 * that contains position: sticky (the overflow-hidden would break the pin).
 */

export type SectionVariant = "curtain" | "doors" | "blinds" | "iris";

const EASE = [0.76, 0, 0.24, 1] as const;
const VP = { once: true, margin: "0px 0px -140px 0px" } as const;
const PANEL = "pointer-events-none absolute z-30 bg-[hsl(30_4%_7%)]";

export function SectionTransition({
  children,
  variant = "curtain",
  className = "",
}: {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  // Iris reveals the content itself (no overlay), so it needs no overflow clip.
  if (variant === "iris") {
    return (
      <motion.div
        className={className}
        initial={{ clipPath: "circle(0% at 50% 42%)", opacity: 0.5, scale: 1.05 }}
        whileInView={{ clipPath: "circle(135% at 50% 42%)", opacity: 1, scale: 1 }}
        viewport={VP}
        transition={{ duration: 1, ease: EASE }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      // Shared vanishing point so the panels and the settling content all
      // rotate in the same 3D space.
      style={{ perspective: 1200 }}
    >
      {/* Content: NO fade — text is fully opaque from the first frame, with
          only a tiny physical rise as it arrives. All the 3D drama lives in
          the panels; the moment they clear, the copy is simply there. */}
      <motion.div
        initial={{ scale: 1.015, y: 12 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center 70%" }}
      >
        {children}
      </motion.div>

      {variant === "curtain" && (
        <motion.div
          aria-hidden="true"
          className={`${PANEL} inset-0 border-b-[3px] border-primary`}
          initial={{ y: "0%", rotateX: 0 }}
          whileInView={{ y: "-101%", rotateX: 14 }}
          viewport={VP}
          transition={{ duration: 0.64, ease: EASE }}
          style={{ transformOrigin: "top center", backfaceVisibility: "hidden" }}
        />
      )}

      {variant === "doors" && (
        <>
          {/* Hinged on their outer edges; each swings away into the screen.
              Past 90° the hidden backface makes them vanish cleanly. */}
          <motion.div
            aria-hidden="true"
            className={`${PANEL} inset-y-0 left-0 w-[51%] border-r-2 border-primary`}
            initial={{ rotateY: 0 }}
            whileInView={{ rotateY: 104 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
          />
          <motion.div
            aria-hidden="true"
            className={`${PANEL} inset-y-0 right-0 w-[51%] border-l-2 border-primary`}
            initial={{ rotateY: 0 }}
            whileInView={{ rotateY: -104 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ transformOrigin: "right center", backfaceVisibility: "hidden" }}
          />
        </>
      )}

      {variant === "blinds" && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              aria-hidden="true"
              className={`${PANEL} inset-x-0`}
              // Each slat flips open around its top edge like a venetian blind.
              // At -94° (just past edge-on, backface hidden) it disappears.
              style={{
                top: `${i * 20}%`,
                height: "20.2%",
                transformOrigin: "top center",
                backfaceVisibility: "hidden",
              }}
              initial={{ rotateX: 0 }}
              whileInView={{ rotateX: -94 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            />
          ))}
        </>
      )}
    </div>
  );
}
