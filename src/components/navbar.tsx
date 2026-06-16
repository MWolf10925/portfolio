"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const nav = [
  { num: "01", label: "Projects", href: "#projects" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Skills", href: "#skills" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-1.5 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground/60"
                  )}
                >
                  {item.num}
                </span>
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
