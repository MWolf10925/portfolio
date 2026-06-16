"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

/**
 * Word-by-word fade + rise as the element scrolls into view. Soft (no hard
 * clip) so it reads well for body copy. Animates once.
 */
export function WordReveal({
  text,
  className = "",
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: 0.05 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.5em" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="mr-[0.25em] inline-block">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
