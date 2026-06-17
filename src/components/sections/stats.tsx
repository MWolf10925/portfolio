import { Reveal } from "@/components/reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="sec sec-alt">
      <div className="container py-16">
        <Reveal className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Proof
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="bg-card">
              <div className="h-full p-6">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  {stat.label}
                </p>
                {stat.detail && (
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {stat.detail}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
