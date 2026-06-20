"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";
import { Logo } from "@/components/brand/logo";
import { site } from "@/data/site";

// 3D hero is desktop-only and lazy (WebGL never blocks first paint / mobile).
const MW3D = dynamic(() => import("@/components/three/mw-3d"), { ssr: false });

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// Key words rendered in solid brand orange in the headline.
const ACCENT_WORDS = new Set(["robotics", "automation", "AI"]);

const wordVariant = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [show3D, setShow3D] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShow3D(ok);
  }, []);

  // Cinematic exit: the headline drifts up and fades as you scroll past it.
  // Linked to scroll position (never moves on its own), so it can't feel queasy.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const words = site.hero.headline.split(" ");

  return (
    <section
      ref={sectionRef}
      id="top"
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[hsl(20_14%_4%)]"
    >
      <div ref={spotlightRef} className="spotlight pointer-events-none absolute inset-0 -z-10" />

      {/* 3D MW monogram (desktop) — or a faint flat watermark (tablet) */}
      {show3D ? (
        <div className="pointer-events-none absolute inset-0 z-0">
          <MW3D />
        </div>
      ) : (
        <Logo className="pointer-events-none absolute -right-10 top-1/2 -z-10 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-foreground opacity-[0.04] md:block lg:hidden" />
      )}

      <motion.div
        className="container relative z-10 max-w-5xl"
        variants={container}
        initial="hidden"
        animate="visible"
        style={reduce ? undefined : { y: exitY, opacity: exitOpacity }}
      >
        {/* Giant word-by-word headline; key words in solid brand orange. */}
        <motion.h1
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
        >
          {words.map((word, i) => {
            const clean = word.replace(/[^a-zA-Z]/g, "");
            const isAccent = ACCENT_WORDS.has(clean);
            return (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  variants={wordVariant}
                  className={`mr-[0.22em] inline-block ${isAccent ? "text-accent" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          {site.hero.subheadline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </motion.span>
      </motion.a>
    </section>
  );
}
