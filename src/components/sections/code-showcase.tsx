import { Reveal } from "@/components/reveal";

const FILENAME = "localization.cpp";

// A real, lightly-trimmed excerpt from the 3009H competition codebase.
const CODE: string[] = [
  "// Monte Carlo Localization: score every particle by how well its",
  "// predicted distance-sensor readings match the real sensors.",
  "double gaussianProbability(double error, double stdDev) {",
  "    const double normalized = error / stdDev;",
  "    const double exponent   = std::exp(-0.5 * normalized * normalized);",
  "    const double normalizer = stdDev * std::sqrt(2.0 * PI);",
  "    return exponent / normalizer;",
  "}",
  "",
  "// Ray-cast from a particle to the field walls to predict what the",
  "// distance sensor *should* read if the robot were really there.",
  "double predictDistanceToWall(const Particle& p,",
  "                             const DistanceSensorInfo& sensor,",
  "                             double headingDeg) {",
  "    const double rayAngle = degToRad(headingDeg + sensor.angleOffsetDeg);",
  "    const double dirX = std::cos(rayAngle);",
  "    const double dirY = std::sin(rayAngle);",
  "    return nearestWallHit(p, dirX, dirY);  // closest field-bound intersection",
  "}",
];

export function CodeShowcase() {
  return (
    <Reveal className="mt-24">
      <div className="mb-6">
        <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Under the hood
        </h3>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          A real excerpt from the 3009H competition codebase: the Monte Carlo
          localization that estimates the robot&rsquo;s position on the field
          from distance sensors and odometry.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-[hsl(24_10%_7%)] shadow-xl">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[hsl(0_60%_50%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(40_80%_55%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(140_45%_50%)]" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            {FILENAME}
          </span>
          <span className="ml-auto font-mono text-[11px] uppercase tracking-widest text-primary">
            C++
          </span>
        </div>

        {/* code */}
        <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
          <code className="font-mono">
            {CODE.map((line, i) => {
              const isComment = line.trimStart().startsWith("//");
              return (
                <div key={i} className="flex gap-4">
                  <span className="w-6 shrink-0 select-none text-right text-muted-foreground/40">
                    {i + 1}
                  </span>
                  <span
                    className={
                      isComment
                        ? "text-muted-foreground/70"
                        : "text-foreground/90"
                    }
                  >
                    {line || " "}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </Reveal>
  );
}
