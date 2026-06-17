"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { frame, cancelFrame } from "framer-motion";

/**
 * Weighted, inertial smooth scroll (Lenis), driven off Framer Motion's RAF so
 * useScroll / useTransform stay perfectly in sync (no double-RAF jitter).
 * In-page anchor links are smooth-scrolled via Lenis. Respects reduced-motion.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);

    // Section snap: commit off the full-height hero on scroll, then gentle
    // proximity snap (in the scroll direction) for the content sections.
    let snapTimer: ReturnType<typeof setTimeout> | undefined;
    let prevY = window.scrollY;
    let dir = 1;
    function onScroll() {
      const cy = window.scrollY;
      if (cy !== prevY) dir = cy > prevY ? 1 : -1;
      prevY = cy;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis || (lenis as { isScrolling?: boolean }).isScrolling) return;
        const y = window.scrollY;
        const vh = window.innerHeight;
        const tops = Array.from(document.querySelectorAll("section[id]"))
          .map((s) => s.getBoundingClientRect().top + y - 64)
          .sort((a, b) => a - b);
        if (tops.length < 2) return;

        // Snap to the nearest section, never against the scroll direction.
        let nearest = tops[0];
        for (const t of tops) if (Math.abs(t - y) < Math.abs(nearest - y)) nearest = t;
        let target = nearest;
        if (dir > 0 && target < y - 4) {
          const ahead = tops.find((t) => t > y + 4);
          if (ahead != null) target = ahead;
        } else if (dir < 0 && target > y + 4) {
          const behind = [...tops].reverse().find((t) => t < y - 4);
          if (behind != null) target = behind;
        }
        // Only when "close enough" (within ~40% of the viewport).
        const dist = Math.abs(target - y);
        if (dist > 6 && dist < vh * 0.4) {
          lenis.scrollTo(target, { duration: 0.8 });
        }
      }, 140);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Smooth-scroll in-page anchor clicks through Lenis.
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as
        | HTMLAnchorElement
        | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenisRef.current?.lenis?.scrollTo(el as HTMLElement, { offset: -64 });
    }
    document.addEventListener("click", onClick);

    return () => {
      cancelFrame(update);
      clearTimeout(snapTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.1,
        smoothWheel: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
