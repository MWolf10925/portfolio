import { Bot, Rocket, BrainCircuit } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { WordReveal } from "@/components/animations/word-reveal";
import { site } from "@/data/site";

const ICONS = [Bot, Rocket, BrainCircuit];

/**
 * Thesis / tension section — states the differentiator plainly, then backs it
 * with three pillars. Sets up the "Autonomy → Shipped" scene that follows.
 */
export function Approach() {
  return (
    <section id="approach" className="sec sec-alt scroll-mt-20 py-20 sm:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {site.approach.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            <MaskText text={site.approach.heading} />
          </h2>
          <WordReveal
            text={site.approach.body}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.approach.pillars.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={pillar.title} index={i} className="h-full">
                <div className="group h-full rounded-lg border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
