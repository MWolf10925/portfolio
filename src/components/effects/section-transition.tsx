"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Varied, content-aware section reveals (inspired by common Awwwards / Codrops
 * scroll-transition techniques: clip-path wipes, venetian-blind masks, split
 * "doors", and an iris/circle reveal). Each section picks the variant that fits
 * its content, so handoffs feel intentional rather than one repeated wipe.
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
  // It also scales/fades in for depth — the section "focuses in" as it opens.
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
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content settles into focus (subtle scale + fade) as the panel lifts —
          the tail of the settle reads after the wipe, adding cinematic depth. */}
      <motion.div
        initial={{ scale: 1.045, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={VP}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {variant === "curtain" && (
        <motion.div
          aria-hidden="true"
          className={`${PANEL} inset-0 border-b-[3px] border-primary`}
          initial={{ y: "0%" }}
          whileInView={{ y: "-101%" }}
          viewport={VP}
          transition={{ duration: 0.72, ease: EASE }}
        />
      )}

      {variant === "doors" && (
        <>
          <motion.div
            aria-hidden="true"
            className={`${PANEL} inset-y-0 left-0 w-[51%] border-r-2 border-primary`}
            initial={{ x: "0%" }}
            whileInView={{ x: "-101%" }}
            viewport={VP}
            transition={{ duration: 0.74, ease: EASE }}
          />
          <motion.div
            aria-hidden="true"
            className={`${PANEL} inset-y-0 right-0 w-[51%] border-l-2 border-primary`}
            initial={{ x: "0%" }}
            whileInView={{ x: "101%" }}
            viewport={VP}
            transition={{ duration: 0.74, ease: EASE }}
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
              // Collapse each slat to nothing from its top edge — a real blind
              // open, so every band actually uncovers (translate only moved a
              // slat by its own height and left the rest covered).
              style={{ top: `${i * 20}%`, height: "20.2%", transformOrigin: "top center" }}
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
            />
          ))}
        </>
      )}
    </div>
  );
}
