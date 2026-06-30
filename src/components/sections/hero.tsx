"use client";

import { useRef } from "react";
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

// 3D monogram — desktop-only, lazy (WebGL never blocks first paint / mobile).
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
const ACCENT_WORDS = new Set(["ship", "shipped", "robotics", "automation", "AI"]);

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
  const reduce = useReducedMotion();

  // Cinematic exit: the headline drifts up and fades as you scroll past it.
  // Linked to scroll position (never moves on its own), so it can't feel queasy.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  // The 3D monogram fades gently as the hero clears.
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.92], [1, 0]);

  const words = site.hero.headline.split(" ");

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[hsl(30_4%_5%)]"
    >
      {/* Desktop: 3D monogram (calm float + parallax, fades on scroll).
          Tablet (no WebGL): a faint flat MW watermark instead. */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={reduce ? undefined : { opacity: sceneOpacity }}
      >
        <MW3D />
      </motion.div>
      <Logo className="pointer-events-none absolute -right-10 top-1/2 -z-10 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-foreground opacity-[0.05] md:block lg:hidden" />

      <motion.div
        className="container relative z-10 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
        style={reduce ? undefined : { y: exitY, opacity: exitOpacity }}
      >
        {/* Word-by-word headline; key words in solid brand orange. */}
        <motion.h1
          variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {words.map((word, i) => {
            const clean = word.replace(/[^a-zA-Z]/g, "");
            const isAccent = ACCENT_WORDS.has(clean);
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  variants={wordVariant}
                  className={`mr-[0.25em] inline-block ${isAccent ? "text-accent" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {site.hero.subheadline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.hero.primaryCta.href}>
                {site.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href={site.hero.secondaryCta.href}>
                <Mail className="h-4 w-4" />
                {site.hero.secondaryCta.label}
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
