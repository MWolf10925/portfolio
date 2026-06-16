"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Scroll-LINKED reveal — each word brightens from dim → full as you scroll
 * through the paragraph (opacity tied to scroll progress, scrubs both ways).
 * Use on ONE statement, not every paragraph.
 */
export function ScrollRevealText({
  paragraph,
  className = "",
}: {
  paragraph: string;
  className?: string;
}) {
  const container = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = paragraph.split(" ");

  if (reduce) {
    return <p className={className}>{paragraph}</p>;
  }

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[0.28em] mt-[0.1em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
