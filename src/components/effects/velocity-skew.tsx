"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Award-site scroll skew: the wrapped content shears slightly based on how fast
 * you're scrolling, then springs back to flat when you stop. Desktop + fine
 * pointer only, and fully disabled under reduced-motion (renders a plain div).
 */
export function VelocitySkew({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      window.matchMedia("(min-width: 768px) and (pointer: fine)").matches
    );
  }, []);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 350, mass: 0.6 });
  // Map scroll speed (px/s) to a gentle shear, clamped so it never gets silly.
  const skew = useTransform(smooth, [-2400, 0, 2400], [-2.4, 0, 2.4], {
    clamp: true,
  });

  const active = !reduce && enabled;

  return (
    <motion.div
      style={
        active
          ? { skewY: skew, transformOrigin: "center", willChange: "transform" }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
