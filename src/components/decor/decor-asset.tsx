"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative brand asset (car, city, shard, dashboard, etc.), cut from the
 * MattBrand asset sheets. Purely ornamental: absolutely positioned, never
 * interactive, hidden from assistive tech. Each asset gets a slow idle float
 * plus gentle scroll parallax; both are disabled for prefers-reduced-motion.
 *
 * Sizing is driven by a Tailwind width class (responsive), and the image keeps
 * its own aspect ratio. Intrinsic pixel sizes live in the DECOR manifest so the
 * <img> can reserve the right ratio before the file loads.
 */

// Intrinsic dimensions of every curated cutout in /public/decor.
export const DECOR = {
  "flat/car": { iw: 466, ih: 169 },
  "flat/city": { iw: 509, ih: 247 },
  "flat/road": { iw: 366, ih: 224 },
  "flat/camera": { iw: 248, ih: 172 },
  "flat/phone": { iw: 125, ih: 224 },
  "flat/dashboard": { iw: 494, ih: 158 },
  "flat/shard-silver": { iw: 87, ih: 135 },
  "flat/shard-orange": { iw: 79, ih: 139 },
  "flat/shard-charcoal": { iw: 104, ih: 139 },
  "flat/shard-dark": { iw: 120, ih: 140 },
  "flat/cube": { iw: 175, ih: 197 },
  "flat/triangle": { iw: 161, ih: 132 },
  "flat/bar-orange": { iw: 158, ih: 92 },
  "flat/bar-silver": { iw: 155, ih: 90 },
  "flat/bar-charcoal": { iw: 153, ih: 92 },
  "3d/car": { iw: 512, ih: 272 },
  "3d/city": { iw: 490, ih: 362 },
  "3d/camera": { iw: 270, ih: 233 },
  "3d/road": { iw: 329, ih: 331 },
  "3d/phone": { iw: 227, ih: 296 },
  "3d/shard": { iw: 209, ih: 247 },
  "3d/shard-sm": { iw: 60, ih: 130 },
  "3d/cube": { iw: 170, ih: 170 },
  "3d/dashboard": { iw: 348, ih: 288 },
  "3d/tri-white": { iw: 170, ih: 140 },
  "3d/tri-dark": { iw: 106, ih: 116 },
  "3d/pyramid": { iw: 237, ih: 116 },
} as const;

export type DecorName = keyof typeof DECOR;

export type DecorAssetProps = {
  name: DecorName;
  /** Tailwind width class, e.g. "w-[220px] sm:w-[320px]". */
  size: string;
  /** Tailwind position utilities, e.g. "right-[6%] top-[10%]". */
  className?: string;
  opacity?: number;
  /** px of gaussian blur (depth-of-field feel). */
  blur?: number;
  /** base rotation in degrees. */
  rotate?: number;
  /** total scroll-parallax travel in px (0 disables). */
  parallax?: number;
  /** idle float amplitude in px (0 disables). */
  float?: number;
  /** float cycle duration in seconds. */
  dur?: number;
  delay?: number;
};

export function DecorAsset({
  name,
  size,
  className = "",
  opacity = 0.12,
  blur = 0,
  rotate = 0,
  parallax = 40,
  float = 8,
  dur = 11,
  delay = 0,
}: DecorAssetProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax / 2, -parallax / 2]);
  const { iw, ih } = DECOR[name];

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/decor/${name}.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      decoding="async"
      width={iw}
      height={ih}
      className="block h-auto w-full select-none"
      style={blur ? { filter: `blur(${blur}px)` } : undefined}
    />
  );

  if (reduce) {
    return (
      <div className={`absolute ${size} ${className}`} style={{ opacity }}>
        <div style={{ transform: `rotate(${rotate}deg)` }}>{img}</div>
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={`absolute ${size} ${className}`} style={{ y, opacity }}>
      <motion.div
        initial={{ rotate }}
        animate={
          float
            ? {
                y: [0, -float, 0],
                rotate: [rotate, rotate + 1.4, rotate],
                // Gentle sway around the vertical axis — reads as an object
                // drifting in space rather than a flat sticker.
                rotateY: [0, 6, 0],
              }
            : { rotate }
        }
        transition={
          float
            ? { duration: dur, repeat: Infinity, ease: "easeInOut", delay }
            : undefined
        }
        style={{ transformPerspective: 800 }}
      >
        {img}
      </motion.div>
    </motion.div>
  );
}
