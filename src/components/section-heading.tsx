import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01". Rendered in mono accent. */
  number: string;
  title: string;
  description?: string;
}

export function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-primary">{number}</span>
        <span className="h-px w-8 bg-border" />
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
