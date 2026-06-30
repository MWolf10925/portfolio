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
 * Branded page-transition curtain (App Router).
 *
 * On an internal navigation, a set of matte panels sweeps up to cover the
 * screen (the MW monogram flashes at full cover), the route changes underneath,
 * then the panels sweep off the top to reveal the new page. On-brand, not a
 * generic fade. Respects prefers-reduced-motion (instant navigation, no curtain).
 */

type Stage = "idle" | "cover" | "reveal";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export const useTransitionRouter = () => useContext(TransitionContext);

const COLS = 6;
const DURATION = 0.42;
const STAGGER = 0.04;
const EASE = [0.76, 0, 0.24, 1] as const; // strong ease-in-out for a confident wipe
// Time until the screen is fully covered (last panel settled).
const COVER_MS = (DURATION + (COLS - 1) * STAGGER) * 1000;

const container = {
  idle: {},
  cover: { transition: { staggerChildren: STAGGER, delayChildren: 0 } },
  reveal: { transition: { staggerChildren: STAGGER, delayChildren: 0 } },
};

const col = {
  // Parked below the fold; reset is instant so it never sweeps the wrong way.
  idle: { y: "101%", transition: { duration: 0 } },
  cover: { y: "0%", transition: { duration: DURATION, ease: EASE } },
  reveal: { y: "-101%", transition: { duration: DURATION, ease: EASE } },
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
  // sweep the panels away. Depends ONLY on pathname: a stage change must not
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

      {/* Curtain overlay */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[200] flex"
        style={{ pointerEvents: stage === "idle" ? "none" : "auto" }}
        variants={container}
        initial="idle"
        animate={stage}
      >
        {Array.from({ length: COLS }).map((_, i) => (
          <motion.div
            key={i}
            variants={col}
            className="h-full flex-1 border-t-2 border-primary bg-[hsl(30_4%_6%)]"
          />
        ))}

        {/* Monogram flashes at full cover */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: stage === "cover" ? 1 : 0,
            scale: stage === "cover" ? 1 : 0.86,
          }}
          transition={{ duration: 0.3, ease: "easeOut", delay: stage === "cover" ? 0.12 : 0 }}
        >
          <Logo className="h-20 w-20 text-foreground" />
        </motion.div>
      </motion.div>
    </TransitionContext.Provider>
  );
}

/**
 * Internal link that plays the curtain. Stays a real <a> (crawlable, supports
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
