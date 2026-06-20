import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="sec sec-alt scroll-mt-20 py-16 sm:py-24">
      <div className="container">
        <SectionHeading title="Skills" />
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
