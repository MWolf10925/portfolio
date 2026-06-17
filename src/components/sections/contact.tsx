import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { site } from "@/data/site";

export function Contact() {
  const hasLinkedIn = Boolean(site.links.linkedin) && (site.links.linkedin as string) !== "#";
  const hasGithub = Boolean(site.links.github) && (site.links.github as string) !== "#";

  return (
    <section id="contact" className="scroll-mt-20 border-y border-white/10 bg-white/[0.05] py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-medium text-primary">
            06 <span className="text-muted-foreground">/ Contact</span>
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            <MaskText text={site.contact.heading} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {site.contact.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={site.links.linkedin}
                target={hasLinkedIn ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          {(!hasLinkedIn || !hasGithub) && (
            <p className="mt-6 text-xs text-muted-foreground/70">
              {/* Reminder for the site owner — remove once links are filled in. */}
              Add your GitHub / LinkedIn URLs in <code>src/data/site.ts</code>.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
