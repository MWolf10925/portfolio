import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-card/30 py-24">
      <div className="container grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-medium text-primary">02</span>
              <span className="h-px w-8 bg-border" />
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {site.about.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal index={1} className="mt-8">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
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

        <Reveal index={1}>
          <p className="text-balance text-xl font-light leading-relaxed text-foreground/90">
            {site.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
