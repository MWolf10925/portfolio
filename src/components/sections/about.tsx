import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-card/30 py-24">
      <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {site.about.heading}
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="text-balance text-xl font-light leading-relaxed text-foreground/90">
            {site.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
