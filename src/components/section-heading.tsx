import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { WordReveal } from "@/components/animations/word-reveal";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01". Rendered in mono accent. */
  number: string;
  title: string;
  description?: string;
}

export function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3">
        <Reveal>
          <span className="font-mono text-sm font-medium text-primary">{number}</span>
        </Reveal>
        <span className="h-px w-8 bg-border" />
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          <MaskText text={title} />
        </h2>
      </div>
      {description && (
        <WordReveal
          text={description}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
        />
      )}
    </div>
  );
}
