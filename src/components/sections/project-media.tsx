"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Logo } from "@/components/brand/logo";

/**
 * Shows the project photo (via next/image, so it is responsive + AVIF/WebP) if
 * it loads; otherwise a branded placeholder frame with an optional label.
 * When `parallax` is set, the image drifts within its frame as you scroll.
 * Drop real images in /public/projects/ and they appear automatically.
 */
export function ProjectMedia({
  src,
  alt,
  aspect = "aspect-[16/10]",
  parallax = false,
  reveal = false,
  placeholder,
}: {
  src?: string;
  alt: string;
  aspect?: string;
  parallax?: boolean;
  /** Clip-path wipe as the frame scrolls into view (featured rows). */
  reveal?: boolean;
  /** Custom label for the placeholder frame when no image is present. */
  placeholder?: string;
}) {
  const [errored, setErrored] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const showImage = Boolean(src) && !errored;
  const useParallax = parallax && !reduce;
  const useReveal = reveal && !reduce;

  return (
    <motion.div
      ref={ref}
      initial={useReveal ? { clipPath: "inset(0 100% 0 0)" } : false}
      whileInView={useReveal ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${aspect} w-full overflow-hidden rounded-lg border border-border bg-card`}
    >
      {showImage ? (
        <motion.div
          style={useParallax ? { y } : undefined}
          className="absolute inset-x-0 -top-[8%] h-[116%] w-full"
        >
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setErrored(true)}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-card via-background to-card px-6 text-center">
          <div className="grid-texture absolute inset-0 opacity-40" />
          <Logo className="relative h-16 w-16 opacity-25" />
          <span className="relative inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
            <ImageIcon className="h-3.5 w-3.5" />
            {placeholder ?? "photo"}
          </span>
        </div>
      )}
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
