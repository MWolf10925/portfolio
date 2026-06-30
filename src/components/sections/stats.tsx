import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/animations/count-up";
import { bigStats, proofPoints } from "@/data/stats";

export function Stats() {
  return (
    <section id="proof" className="sec sec-alt scroll-mt-20">
      <div className="container py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Proof
          </p>
        </Reveal>

        {/* Big animated numbers */}
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8">
          {bigStats.map((s, i) => (
            <Reveal key={s.label} index={Math.min(i, 2)}>
              <div>
                <div className="font-display text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  <CountUp
                    to={s.value}
                    decimals={s.decimals}
                    comma={s.comma}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Qualitative proof */}
        <Reveal index={1} className="mt-10">
          <div className="flex flex-wrap items-center gap-y-2 border-t border-border pt-6 font-mono text-sm text-muted-foreground">
            {proofPoints.map((p, i) => (
              <span key={p} className="inline-flex items-center">
                {p}
                {i < proofPoints.length - 1 && (
                  <span className="mx-3 text-primary">/</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
