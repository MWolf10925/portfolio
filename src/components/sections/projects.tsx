import { ArrowUpRight, Lock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { ProjectMedia } from "@/components/sections/project-media";
import { CodeShowcase } from "@/components/sections/code-showcase";
import { projects, type Project } from "@/data/projects";

function isPrivateStatus(status?: string) {
  if (!status) return false;
  return /private|confidential/i.test(status);
}

/** Big alternating image/text row for a featured project. */
function FeaturedRow({ project, flip }: { project: Project; flip: boolean }) {
  const locked = isPrivateStatus(project.status);
  return (
    <Reveal className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={flip ? "md:order-2" : ""}>
        <SpotlightCard tilt={4}>
          <ProjectMedia src={project.image} alt={project.title} />
        </SpotlightCard>
      </div>

      <div className={flip ? "md:order-1" : ""}>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Featured
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        {project.status && (
          <div className="mt-3">
            <Badge variant={locked ? "outline" : "primary"}>{project.status}</Badge>
          </div>
        )}
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
        {project.href && (
          <div className="mt-6">
            <Button asChild variant="outline" size="sm">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                View project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/** Compact spotlight card for secondary projects. */
function ProjectCard({ project }: { project: Project }) {
  const locked = isPrivateStatus(project.status);
  const card = (
    <Card className="group relative h-full overflow-hidden transition-colors duration-300 hover:border-primary/50">
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
            <Badge variant={locked ? "outline" : "primary"}>{project.status}</Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
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

  const tilted = (
    <SpotlightCard className="h-full" tilt={6}>
      {card}
    </SpotlightCard>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
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
    <section id="projects" className="scroll-mt-20 border-t border-white/10 py-24">
      <div className="container">
        <SectionHeading
          number="01"
          title="Featured projects"
          description="Competition robotics, internship automation, and independent builds. A few stay private to protect competitive or confidential code."
        />

        {/* Big alternating image rows */}
        <div className="flex flex-col gap-20">
          {featured.map((project, i) => (
            <FeaturedRow key={project.title} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Real code excerpt */}
        <CodeShowcase />

        {/* Secondary work */}
        {rest.length > 0 && (
          <>
            <Reveal className="mb-8 mt-24">
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                More work
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {rest.map((project, i) => (
                <Reveal key={project.title} index={i % 2}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
