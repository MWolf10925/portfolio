import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { ScrollRevealText } from "@/components/animations/scroll-reveal-text";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="sec scroll-mt-20 py-24">
      <div className="container">
        {/* Heading + philosophy */}
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <MaskText text={site.about.heading} />
          </h2>
          <ScrollRevealText
            paragraph={site.about.body}
            className="text-xl font-light leading-relaxed text-foreground/90"
          />
        </div>

        {/* Building toward · Learning · Education */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <Reveal>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <Target className="h-4 w-4 text-primary" />
              Building toward
            </h3>
            <ul className="space-y-3">
              {site.about.buildingToward.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1}>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Currently learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.about.learning.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal index={2}>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              Education
            </h3>
            <ul className="space-y-4">
              {site.education.map((ed) => (
                <li key={ed.school}>
                  <p className="text-sm font-medium text-foreground">{ed.school}</p>
                  <p className="text-sm text-muted-foreground">{ed.detail}</p>
                  <p className="mt-0.5 font-mono text-xs text-primary/80">{ed.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
