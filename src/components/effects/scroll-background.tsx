"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * Fixed ambient background whose colored light blobs (1) slowly drift and
 * (2) shift hue as you scroll the page — orange → magenta → teal and back —
 * so the backdrop visibly transitions section to section.
 */
export function ScrollBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Vibrant hue journey across page scroll.
  const h1 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [24, 305, 195, 24]);
  const h2 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [42, 330, 175, 42]);
  const h3 = useTransform(scrollYProgress, [0, 0.5, 1], [14, 270, 160]);

  const b1 = useMotionTemplate`radial-gradient(circle, hsl(${h1} 90% 56% / 0.5), transparent 65%)`;
  const b2 = useMotionTemplate`radial-gradient(circle, hsl(${h2} 90% 58% / 0.42), transparent 65%)`;
  const b3 = useMotionTemplate`radial-gradient(circle, hsl(${h3} 88% 56% / 0.32), transparent 65%)`;

  // Reduced motion: keep a calm static warm wash, no hue scrubbing.
  if (reduce) {
    return (
      <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
      </div>
    );
  }

  return (
    <div className="aurora" aria-hidden="true">
      <motion.div className="aurora__blob aurora__blob--1" style={{ background: b1 }} />
      <motion.div className="aurora__blob aurora__blob--2" style={{ background: b2 }} />
      <motion.div className="aurora__blob aurora__blob--3" style={{ background: b3 }} />
    </div>
  );
}
