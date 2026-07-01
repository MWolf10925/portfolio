"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { frame, cancelFrame } from "framer-motion";

/**
 * Weighted, inertial smooth scroll (Lenis), driven off Framer Motion's RAF so
 * useScroll / useTransform stay in sync.
 *
 * Section snapping (desktop, pointer:fine only): one wheel gesture / arrow key
 * advances to the next section — a fullPage-style, section-by-section feel. The
 * exception is sections TALLER than the viewport (the ship-path scene, the
 * projects list): you scroll through those normally and only snap to the next
 * section once you reach their bottom edge, so a tall scene is never skipped.
 * Touch and reduced-motion get plain native scrolling (no hijack).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // Reset scroll to the top on every route change (Lenis persists across
  // navigations and would otherwise keep the previous page's scroll offset).
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const OFFSET = 64; // sticky navbar height
    // Small tolerance for "this section's edge is reached". Kept tight so a tall
    // section (the ship-path scene, the experience/resume timeline) is scrolled
    // essentially all the way to its bottom before the snap advances — a larger
    // value let it jump early, cutting off the last of the section.
    const EDGE = 10;

    let animating = false;
    let cooldownUntil = 0;
    let sections: { top: number; bottom: number }[] = [];

    function recompute() {
      const y = window.scrollY;
      sections = Array.from(document.querySelectorAll("section[id]"))
        .map((el) => {
          const r = el.getBoundingClientRect();
          const top = r.top + y;
          return { top, bottom: top + r.height };
        })
        .sort((a, b) => a.top - b.top);
    }

    function jumpTo(target: number) {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) return;
      animating = true;
      lenis.scrollTo(Math.max(0, target), {
        duration: 0.85,
        lock: true,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => {
          animating = false;
          cooldownUntil = performance.now() + 130;
        },
      });
    }

    /**
     * Where a gesture in `dir` should go, or null to let it free-scroll
     * (i.e. there's more of a tall current section to reveal in that direction).
     */
    function nextTarget(dir: number): number | null {
      if (sections.length < 2) return null;
      const y = window.scrollY;
      const vh = window.innerHeight;
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].top - OFFSET <= y + 6) idx = i;
      }
      const cur = sections[idx];
      if (dir > 0) {
        // more of this (tall) section below the viewport → keep scrolling it
        if (cur.bottom > y + vh + EDGE) return null;
        const next = sections[idx + 1];
        return next ? next.top - OFFSET : null;
      }
      // dir < 0: more of this section above the viewport → keep scrolling it
      if (cur.top - OFFSET < y - EDGE) return null;
      const prev = sections[idx - 1];
      return prev ? prev.top - OFFSET : null;
    }

    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) < 4 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (animating || performance.now() < cooldownUntil) {
        // Keep the lock alive while trackpad momentum keeps firing, so one
        // flick advances exactly one section instead of several.
        cooldownUntil = Math.max(cooldownUntil, performance.now() + 130);
        e.preventDefault();
        return;
      }
      const t = nextTarget(e.deltaY > 0 ? 1 : -1);
      if (t == null) return; // free-scroll within a tall section / page ends
      e.preventDefault();
      jumpTo(t);
    }

    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable) return;
      let dir = 0;
      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) dir = 1;
      else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) dir = -1;
      if (!dir) return;
      if (animating || performance.now() < cooldownUntil) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const t = nextTarget(dir);
      if (t != null) jumpTo(t);
      else {
        // page through a tall section by ~85% of the viewport
        const lenis = lenisRef.current?.lenis;
        lenis?.scrollTo(window.scrollY + dir * window.innerHeight * 0.85, { duration: 0.6 });
      }
    }

    // Smooth-scroll in-page anchor clicks through Lenis.
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenisRef.current?.lenis?.scrollTo(target as HTMLElement, { offset: -OFFSET, duration: 0.9 });
    }

    recompute();
    const recomputeTimer = setTimeout(recompute, 1200); // after fonts/images settle
    window.addEventListener("resize", recompute);
    document.addEventListener("click", onClick);
    if (finePointer) {
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKey);
    }

    return () => {
      cancelFrame(update);
      clearTimeout(recomputeTimer);
      window.removeEventListener("resize", recompute);
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
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
