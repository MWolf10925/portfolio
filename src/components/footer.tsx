import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: `mailto:${site.email}`, label: "Email", Icon: Mail, external: false },
    { href: site.links.github, label: "GitHub", Icon: Github, external: true },
    { href: site.links.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/70">
            {site.location} · built with Next.js
          </p>
        </div>
        <div className="flex items-center gap-2">
          {links.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
