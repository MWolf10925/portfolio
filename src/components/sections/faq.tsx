import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionDecor } from "@/components/decor/section-decor";
import { faqs } from "@/data/faq";

/**
 * Objection handling. Native <details>/<summary> so it is keyboard-accessible
 * and works with zero JS (progressive enhancement). Honest answers only.
 */
export function Faq() {
  return (
    <section id="faq" className="sec isolate scroll-mt-20 py-16 sm:py-24">
      <SectionDecor preset="faq" />
      <div className="container">
        <SectionHeading
          title="Questions you might have"
          description="The honest answers, up front. No overpromising."
        />

        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((item, i) => (
            <Reveal key={item.q} index={Math.min(i, 2)} as="div">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-primary" />
                </summary>
                <p className="pb-5 pr-9 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
