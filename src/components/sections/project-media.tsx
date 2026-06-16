"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Logo } from "@/components/brand/logo";

/**
 * Shows the project photo if it loads; otherwise a branded placeholder frame.
 * Drop real images in /public/projects/ and they appear automatically.
 */
export function ProjectMedia({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-card">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-card via-background to-card">
          <div className="grid-texture absolute inset-0 opacity-40" />
          <Logo className="relative h-20 w-20 opacity-25" />
          <span className="relative inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">
            <ImageIcon className="h-3.5 w-3.5" />
            photo
          </span>
        </div>
      )}
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
