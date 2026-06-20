"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gamepad2, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { ProjectMedia } from "@/components/sections/project-media";
import { games, type Game } from "@/data/games";

/** A single game card — shared by the desktop rail and the mobile grid. */
function GameCard({ game }: { game: Game }) {
  return (
    <SpotlightCard className="h-full" tilt={6}>
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-300 hover:border-primary/50">
        <ProjectMedia src={game.image} alt={`${game.title} cover art`} aspect="aspect-square" />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold tracking-tight">{game.title}</h3>
            <Badge variant="primary">{game.genre}</Badge>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {game.description}
          </p>
          <div className="mt-4">
            {game.href ? (
              <a
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground"
              >
                <Play className="h-3.5 w-3.5" />
                Play on Roblox
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60">
                <Gamepad2 className="h-3.5 w-3.5" />
                Roblox
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Games() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distance = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [sectionH, setSectionH] = useState<number | undefined>(undefined);

  // Vertical scroll through this tall section drives the cards horizontally.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (v) => -(v * distance.current));

  // Decide once whether to run the horizontal rail (desktop + fine pointer +
  // motion allowed). Otherwise we fall back to the plain responsive grid.
  useEffect(() => {
    setIsDesktop(
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Measure how far the track must travel once the rail is mounted; keep the
  // section height in sync so the pin lasts exactly as long as the slide.
  useEffect(() => {
    if (!isDesktop) return;
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      distance.current = d;
      setSectionH(window.innerHeight + d);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop]);

  // Mobile / tablet / reduced-motion: the familiar grid.
  if (!isDesktop) {
    return (
      <section id="games" className="sec sec-alt scroll-mt-20 py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            title="Games I've built"
            description="Roblox games I designed and built across several genres. Over 5,000 total plays."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {games.map((game, i) => (
              <Reveal key={game.title} index={i % 2}>
                <GameCard game={game} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: pinned horizontal rail.
  return (
    <section id="games" ref={sectionRef} className="relative" style={{ height: sectionH }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
        <div className="container">
          <SectionHeading
            title="Games I've built"
            description="Roblox games I designed and built across several genres. Over 5,000 total plays. Keep scrolling."
          />
        </div>
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-[max(1.5rem,calc((100vw-1100px)/2))] pr-[12vw]"
        >
          {games.map((game) => (
            <div key={game.title} className="w-[30rem] shrink-0">
              <GameCard game={game} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
