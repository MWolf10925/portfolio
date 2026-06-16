import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

// Flatten the most "logo-able" skills into one marquee row.
const marqueeItems = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "Lua",
  "SQL",
  "Next.js",
  "VEX V5",
  "PROS",
  "Odometry",
  "PID control",
  "Automation",
  "Chrome Extensions",
  "AI workflows",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading number="03" title="Skills" />
      </div>

      {/* Full-bleed infinite marquee */}
      <div className="marquee-mask relative my-2 w-full overflow-hidden py-4">
        <div
          className="marquee"
          style={{ "--marquee-duration": "40s" } as React.CSSProperties}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-3 font-mono text-sm text-muted-foreground"
                >
                  {item}
                  <span className="ml-6 text-primary/40">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} index={i % 2}>
              <Card className="h-full p-6">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
