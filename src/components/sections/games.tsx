import { Gamepad2, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { ProjectMedia } from "@/components/sections/project-media";
import { games } from "@/data/games";

export function Games() {
  return (
    <section id="games" className="sec sec-alt scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          number="02"
          title="Games I've built"
          description="Roblox games I designed and built across several genres. Over 5,000 total plays."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game, i) => (
            <Reveal key={game.title} index={i % 4}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
