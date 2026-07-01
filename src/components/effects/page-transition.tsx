"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/logo";

/**
 * Branded page transition (App Router) — the brand icons ARE the transition.
 *
 * On an internal navigation a dark stage fades in and a swarm of brand assets
 * (shards, cube, pyramid, camera, phone, an orange speed-bar) rushes in from
 * every edge to blanket the screen while the route swaps underneath; then they
 * scatter back out as the new page is revealed. Respects prefers-reduced-motion
 * (instant navigation, no curtain).
 */

type Stage = "idle" | "cover" | "reveal";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export const useTransitionRouter = () => useContext(TransitionContext);

const EASE = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
// Time until the screen is fully covered (stage opaque + icons settled).
const COVER_MS = 580;

const container = { idle: {}, cover: {}, reveal: {} };

// The dark stage the icons perform on. Fades in fast, out on reveal.
const veil = {
  idle: { opacity: 0, transition: { duration: 0 } },
  cover: { opacity: 1, transition: { duration: 0.3, ease: EASE } },
  reveal: { opacity: 0, transition: { duration: 0.36, ease: EASE, delay: 0.06 } },
};

/**
 * The brand icons that make up the transition. Each rushes in from off-screen
 * (`dx`/`dy`) to its resting spot spread across the viewport, then scatters out
 * (`ox`/`oy`, defaulting back the way it came) as the new page reveals.
 */
type FlyAsset = {
  src: string;
  w: number;
  left: string;
  top: string;
  dx: string;
  dy: string;
  ox?: string;
  oy?: string;
  fr: number; // rotation entering
  r: number; // rotation at rest
  or: number; // rotation exiting
  op: number; // opacity at rest
  d: number; // extra stagger delay
};

const FLY: FlyAsset[] = [
  { src: "3d/shard.png", w: 300, left: "30%", top: "33%", dx: "-40vw", dy: "-30vh", fr: -30, r: -8, or: -70, op: 0.95, d: 0.0 },
  { src: "flat/cube.png", w: 240, left: "70%", top: "30%", dx: "40vw", dy: "-28vh", fr: 28, r: 8, or: 64, op: 0.95, d: 0.04 },
  { src: "3d/pyramid.png", w: 210, left: "32%", top: "72%", dx: "-34vw", dy: "34vh", fr: 20, r: 6, or: 50, op: 0.9, d: 0.08 },
  { src: "flat/triangle.png", w: 210, left: "70%", top: "72%", dx: "34vw", dy: "32vh", fr: -22, r: -8, or: -52, op: 0.9, d: 0.06 },
  { src: "flat/camera.png", w: 200, left: "16%", top: "52%", dx: "-46vw", dy: "6vh", fr: -16, r: -6, or: -40, op: 0.85, d: 0.1 },
  { src: "flat/phone.png", w: 128, left: "85%", top: "55%", dx: "42vw", dy: "8vh", fr: 16, r: 8, or: 44, op: 0.85, d: 0.1 },
  { src: "flat/shard-orange.png", w: 150, left: "50%", top: "17%", dx: "0vw", dy: "-42vh", fr: -30, r: -10, or: -60, op: 0.95, d: 0.12 },
  { src: "3d/tri-white.png", w: 190, left: "50%", top: "85%", dx: "0vw", dy: "42vh", fr: 24, r: 6, or: 52, op: 0.85, d: 0.12 },
  { src: "flat/bar-orange.png", w: 240, left: "50%", top: "50%", dx: "-74vw", dy: "0vh", ox: "74vw", oy: "0vh", fr: -14, r: -14, or: -14, op: 0.9, d: 0.14 },
];

const flyVariants = (a: FlyAsset) => ({
  idle: { x: a.dx, y: a.dy, rotate: a.fr, opacity: 0, transition: { duration: 0 } },
  cover: {
    x: "0vw",
    y: "0vh",
    rotate: a.r,
    opacity: a.op,
    transition: { duration: 0.5, ease: EASE_OUT, delay: 0.06 + a.d },
  },
  reveal: {
    x: a.ox ?? a.dx,
    y: a.oy ?? a.dy,
    rotate: a.or,
    opacity: 0,
    transition: { duration: 0.42, ease: EASE, delay: a.d * 0.4 },
  },
});

// Orange path-line that draws across the stage (echoes the ship-path scene).
const lineVariants = {
  idle: { pathLength: 0, opacity: 0, transition: { duration: 0 } },
  cover: { pathLength: 1, opacity: 0.7, transition: { duration: 0.55, ease: EASE, delay: 0.1 } },
  reveal: { pathLength: 0, opacity: 0, transition: { duration: 0.34, ease: EASE } },
};

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("idle");
  const target = useRef<string | null>(null);
  const coverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const watchdog = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback(
    (href: string) => {
      const to = href.split("#")[0] || "/";
      // Same page, hash-only, or reduced motion → just navigate, no curtain.
      if (reduce || to === pathname) {
        router.push(href);
        return;
      }
      target.current = href;
      setStage("cover");
      if (coverTimer.current) clearTimeout(coverTimer.current);
      coverTimer.current = setTimeout(() => {
        if (target.current) router.push(target.current);
      }, COVER_MS);
      // Safety net: never let the curtain get stuck if a navigation never
      // resolves to the expected pathname (redirect, same-route push, etc.).
      if (watchdog.current) clearTimeout(watchdog.current);
      watchdog.current = setTimeout(() => {
        target.current = null;
        setStage("idle");
      }, COVER_MS + 2500);
    },
    [pathname, reduce, router]
  );

  // Once the route has actually changed (new page mounted under the cover),
  // sweep the stage away. Depends ONLY on pathname: a stage change must not
  // re-run this effect, or its cleanup would clear the idle timer and strand
  // the overlay with pointer-events: auto (blocking every click).
  useEffect(() => {
    if (target.current && pathname === (target.current.split("#")[0] || "/")) {
      target.current = null;
      setStage("reveal");
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setStage("idle"), COVER_MS + 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(
    () => () => {
      if (coverTimer.current) clearTimeout(coverTimer.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (watchdog.current) clearTimeout(watchdog.current);
    },
    []
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      {/* Transition overlay — the brand icons are the star. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
        style={{ pointerEvents: stage === "idle" ? "none" : "auto" }}
        variants={container}
        initial="idle"
        animate={stage}
      >
        {/* Dark stage the icons perform on. */}
        <motion.div variants={veil} className="absolute inset-0 bg-[hsl(30_4%_6%)]" />
        {/* Soft orange glow so the stage has depth, not dead flat. */}
        <motion.div
          variants={veil}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 42rem at 50% 45%, hsl(22 90% 54% / 0.10), transparent 60%)",
          }}
        />

        {/* Orange path-line drawing across (ship-path echo). */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M -4 84 C 26 66 40 40 62 34 S 92 20 104 10"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            variants={lineVariants}
          />
        </svg>

        {/* Faint monogram anchor, behind the icon swarm. */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: stage === "cover" ? 0.5 : 0,
            scale: stage === "cover" ? 1 : 0.86,
          }}
          transition={{ duration: 0.3, ease: "easeOut", delay: stage === "cover" ? 0.14 : 0 }}
        >
          <Logo className="h-16 w-16 text-foreground/70" />
        </motion.div>

        {/* The brand icon swarm — rushes in to blanket the screen, then scatters.
            Outer div anchors + centres (static transform); inner motion.img owns
            the fly translate/rotate so the two transforms never fight. */}
        <div className="absolute inset-0">
          {FLY.map((a) => (
            <div
              key={a.src}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: a.left, top: a.top, width: a.w }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={`/decor/${a.src}`}
                alt=""
                draggable={false}
                loading="eager"
                variants={flyVariants(a)}
                className="block w-full select-none"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </TransitionContext.Provider>
  );
}

/**
 * Internal link that plays the transition. Stays a real <a> (crawlable, supports
 * cmd/ctrl-click to open in a new tab) — only plain left-clicks are intercepted.
 */
export function TransitionLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const { navigate } = useTransitionRouter();
  return (
    <a
      href={href}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
