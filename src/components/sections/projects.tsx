import { ArrowUpRight, Lock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { projects, type Project } from "@/data/projects";

function isPrivateStatus(status?: string) {
  if (!status) return false;
  return /private|confidential/i.test(status);
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const locked = isPrivateStatus(project.status);
  const card = (
    <Card
      className={`group relative h-full overflow-hidden transition-colors duration-300 hover:border-primary/50 ${
        featured ? "border-primary/30" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {featured && <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />}
            <CardTitle className={featured ? "text-xl" : ""}>{project.title}</CardTitle>
          </div>
          {project.href ? (
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          ) : locked ? (
            <Lock className="h-4 w-4 shrink-0 text-muted-foreground" />
          ) : null}
        </div>
        {project.status && (
          <div className="pt-1">
            <Badge variant={locked ? "outline" : "primary"}>{project.status}</Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <p
          className={`leading-relaxed text-muted-foreground ${
            featured ? "max-w-xl text-base" : "text-sm"
          }`}
        >
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

  const tilted = (
    <SpotlightCard className="h-full" tilt={featured ? 3 : 6}>
      {card}
    </SpotlightCard>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {tilted}
      </a>
    );
  }
  return tilted;
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          number="01"
          title="Featured projects"
          description="A mix of competition robotics, internship automation work, and independent builds. Some are kept private to protect competitive or confidential code."
        />

        <div className="flex flex-col gap-5">
          {featured.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.title} index={i % 2}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
