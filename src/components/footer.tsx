import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {site.name}. Built with Next.js.
        </p>
        <p className="text-xs">{site.location}</p>
      </div>
    </footer>
  );
}
