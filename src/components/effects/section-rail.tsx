"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "games", label: "Games" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/**
 * Slim active-section rail on the right edge (desktop). The current section's
 * tick widens to orange and reveals its label; clicking jumps there (smooth-
 * scrolled by Lenis via the anchor). Desktop-only — mobile uses the menu.
 */
export function SectionRail() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-3 py-1"
          >
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-widest transition-all duration-300",
                isActive
                  ? "text-foreground opacity-100"
                  : "text-muted-foreground opacity-0 group-hover:opacity-100"
              )}
            >
              {s.label}
            </span>
            <span
              className={cn(
                "h-px transition-all duration-300",
                isActive
                  ? "w-9 bg-primary"
                  : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-foreground"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
