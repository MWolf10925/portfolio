import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading number="05" title="Experience" />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-border sm:block" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${job.role}`} index={Math.min(i, 2)}>
                <div className="relative sm:pl-8">
                  <span className="absolute left-[-3.5px] top-2 hidden h-2 w-2 rounded-full bg-primary ring-4 ring-background sm:block" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    {job.period && (
                      <span className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {job.org}
                  </p>
                  {job.bullets && (
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((bullet, b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
