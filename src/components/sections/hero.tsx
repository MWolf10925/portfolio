"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-texture opacity-60" />

      <motion.div
        className="container max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-foreground/90">
            <span className="status-dot" />
            {site.hero.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {site.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {site.hero.subheadline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 flex items-center gap-2 font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">currently</span>
          <span className="text-primary">→</span>
          <span className="text-foreground/80">{site.hero.currently}</span>
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
