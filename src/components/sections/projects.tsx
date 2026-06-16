import { ArrowUpRight, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

function isPrivateStatus(status?: string) {
  if (!status) return false;
  return /private|confidential/i.test(status);
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A mix of competition robotics, internship automation work, and independent builds. Some are kept private to protect competitive or confidential code."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => {
            const locked = isPrivateStatus(project.status);
            const content = (
              <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{project.title}</CardTitle>
                    {project.href ? (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    ) : locked ? (
                      <Lock className="h-4 w-4 shrink-0 text-muted-foreground" />
                    ) : null}
                  </div>
                  {project.status && (
                    <div className="pt-1">
                      <Badge variant={locked ? "outline" : "primary"}>
                        {project.status}
                      </Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <Reveal key={project.title} index={i % 2}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
