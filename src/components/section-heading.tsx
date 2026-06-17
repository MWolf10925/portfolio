import { MaskText } from "@/components/animations/mask-text";
import { WordReveal } from "@/components/animations/word-reveal";

interface SectionHeadingProps {
  /** Optional; no longer rendered (sections show just the words). */
  number?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        <MaskText text={title} />
      </h2>
      {description && (
        <WordReveal
          text={description}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
        />
      )}
    </div>
  );
}
