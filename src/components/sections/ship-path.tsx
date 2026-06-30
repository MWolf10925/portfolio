"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Route, GitBranch, CheckCircle2 } from "lucide-react";

/**
 * Signature scroll scene — "Autonomy → Shipped".
 *
 * A single orange line draws across the viewport as you scroll. It starts as a
 * robot's searching autonomous route, straightens into a software pipeline, and
 * resolves into a shipped app. The same line changing form *is* the message:
 * Matthew takes hard problems all the way from idea to shipped.
 *
 * Desktop + motion on  → sticky pinned scene, scroll-linked SVG draw.
 * Mobile / reduced-motion → a clean static three-step diagram (no pin, no draw).
 */

// One continuous path: wandering route (left) → straight pipeline (mid) → rise
// into the shipped state (right). pathLength={1} lets us draw/track by fraction.
const PATH =
  "M 70 210 C 170 60 250 360 340 210 S 500 90 580 210 L 760 210 L 860 210 C 940 210 980 150 1050 150";

const STATES = [
  {
    key: "autonomy",
    Icon: Route,
    label: "Autonomy",
    caption: "A robot searching for its line. C++ routines, odometry, sensors.",
  },
  {
    key: "pipeline",
    Icon: GitBranch,
    label: "Pipeline",
    caption: "The same effort, made repeatable. Automation and AI workflows.",
  },
  {
    key: "shipped",
    Icon: CheckCircle2,
    label: "Shipped",
    caption: "It actually runs. A product live in real stores, on real devices.",
  },
];

function Diagram() {
  // Static, dependency-free version for mobile + reduced motion.
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {STATES.map((s, i) => (
        <div
          key={s.key}
          className="relative rounded-lg border border-border bg-card/60 p-5"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <s.Icon className="h-4 w-4" />
            {s.label}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {s.caption}
          </p>
          <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40">
            0{i + 1}
          </span>
        </div>
      ))}
    </div>
  );
}

const Heading = () => (
  <div className="max-w-2xl">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      How the work moves
    </p>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      From autonomous path to shipped product.
    </h2>
    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
      The same instinct runs through everything I build. Take a hard, unsolved
      path, make it repeatable, and ship it.
    </p>
  </div>
);

export function ShipPath() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // The orange line draws on, and a dot rides its leading edge.
  const drawOffset = useTransform(scrollYProgress, [0.05, 0.78], [1, 0]);
  const dotOffset = useTransform(scrollYProgress, [0.05, 0.78], [1, 0]);

  // Mid + final states reveal as the draw reaches them.
  const nodeReveal = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  const appReveal = useTransform(scrollYProgress, [0.74, 0.86], [0, 1]);
  // Field waypoints exist during the autonomy phase, then clear for the pipeline.
  const fieldReveal = useTransform(scrollYProgress, [0.04, 0.12, 0.34, 0.42], [0, 0.85, 0.85, 0]);

  // Cross-fading captions for the active state (explicit, no hooks-in-loop).
  const cap1 = useTransform(scrollYProgress, [0.05, 0.15, 0.36, 0.44], [0, 1, 1, 0]);
  const cap2 = useTransform(scrollYProgress, [0.4, 0.5, 0.64, 0.72], [0, 1, 1, 0]);
  const cap3 = useTransform(scrollYProgress, [0.68, 0.8, 1, 1], [0, 1, 1, 0]);
  const captionOpacity = [cap1, cap2, cap3];

  if (reduce) {
    return (
      <section id="process" className="sec scroll-mt-20 py-20 sm:py-28">
        <div className="container">
          <Heading />
          <div className="mt-12">
            <Diagram />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={ref} className="sec relative">
      {/* Mobile: static, clean, no pin. */}
      <div className="container py-16 lg:hidden">
        <Heading />
        <div className="mt-10">
          <Diagram />
        </div>
      </div>

      {/* Desktop: pinned cinematic scene, scroll-linked draw. */}
      <div className="hidden lg:block lg:h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          {/* faint schematic grid under the scene */}
          <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

          <div className="container relative">
            <Heading />

            <div className="relative mt-10">
              <svg
                viewBox="0 0 1120 320"
                className="w-full"
                fill="none"
                aria-hidden="true"
              >
                {/* baseline track */}
                <path
                  d={PATH}
                  stroke="hsl(var(--border))"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                {/* field waypoints the autonomous route weaves through */}
                <motion.g style={{ opacity: fieldReveal }}>
                  {[
                    [232, 132],
                    [196, 256],
                    [344, 286],
                    [468, 128],
                  ].map(([cx, cy]) => (
                    <circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r={7}
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  ))}
                </motion.g>
                {/* drawn orange line */}
                <motion.path
                  d={PATH}
                  stroke="hsl(var(--primary))"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1 1"
                  style={{ strokeDashoffset: drawOffset }}
                />
                {/* soft glow halo under the dot */}
                <motion.path
                  d={PATH}
                  stroke="hsl(var(--primary))"
                  strokeWidth={24}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="0.005 0.995"
                  style={{ strokeDashoffset: dotOffset, opacity: 0.22 }}
                />
                {/* dot riding the leading edge */}
                <motion.path
                  d={PATH}
                  stroke="hsl(var(--primary))"
                  strokeWidth={11}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="0.006 0.994"
                  style={{ strokeDashoffset: dotOffset }}
                />

                {/* pipeline nodes (middle state) */}
                <motion.g style={{ opacity: nodeReveal }}>
                  {[640, 720, 800].map((x) => (
                    <rect
                      key={x}
                      x={x - 9}
                      y={201}
                      width={18}
                      height={18}
                      rx={3}
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  ))}
                </motion.g>

                {/* shipped app frame (final state) */}
                <motion.g style={{ opacity: appReveal }}>
                  <rect
                    x={995}
                    y={95}
                    width={96}
                    height={120}
                    rx={10}
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                  <rect x={1009} y={112} width={68} height={8} rx={4} fill="hsl(var(--primary))" />
                  <rect x={1009} y={128} width={50} height={6} rx={3} fill="hsl(var(--muted-foreground))" opacity={0.5} />
                  <rect x={1009} y={140} width={58} height={6} rx={3} fill="hsl(var(--muted-foreground))" opacity={0.5} />
                  <path
                    d="M 1018 176 l 12 12 l 24 -28"
                    stroke="hsl(var(--primary))"
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </motion.g>
              </svg>
            </div>

            {/* cross-fading caption for the active state */}
            <div className="relative mt-6 h-12 max-w-xl">
              {STATES.map((s, i) => (
                <motion.p
                  key={s.key}
                  style={{ opacity: captionOpacity[i] }}
                  className="absolute inset-0 flex items-center gap-2 text-base leading-relaxed text-muted-foreground"
                >
                  <s.Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium text-foreground">{s.label}.</span>{" "}
                    {s.caption}
                  </span>
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
