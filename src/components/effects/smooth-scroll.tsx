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

    // Proximity snap: when scrolling settles near a section top, glide to it.
    let snapTimer: ReturnType<typeof setTimeout> | undefined;
    function onScroll() {
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis || (lenis as { isScrolling?: boolean }).isScrolling) return;
        const y = window.scrollY;
        const vh = window.innerHeight;
        const sections = Array.from(document.querySelectorAll("section[id]"));
        let nearest: number | null = null;
        let best = Infinity;
        for (const s of sections) {
          const top = s.getBoundingClientRect().top + y - 64;
          const d = Math.abs(top - y);
          if (d < best) {
            best = d;
            nearest = top;
          }
        }
        // Only snap when "close enough" (within ~22% of the viewport).
        if (nearest != null && best > 6 && best < vh * 0.22) {
          lenis.scrollTo(nearest, { duration: 0.8 });
        }
      }, 160);
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
