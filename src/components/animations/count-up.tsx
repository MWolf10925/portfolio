"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Animates a number from 0 to `to` when scrolled into view (once). */
export function CountUp({
  to,
  decimals = 0,
  comma = false,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  comma?: boolean;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce, duration]);

  const fixed = val.toFixed(decimals);
  const formatted = comma
    ? Number(fixed).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : fixed;

  return (
    <span ref={ref}>
      {formatted}
      {suffix && <span className="text-primary">{suffix}</span>}
    </span>
  );
}
