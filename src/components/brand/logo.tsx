import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Adds classes used by the preloader to draw the strokes in. */
  animated?: boolean;
}

/**
 * MW monogram — recreated as an inline SVG so it can self-draw (preloader),
 * scale crisply, and inherit color. White strokes use `currentColor`; the two
 * diagonal accents use the brand orange.
 *
 * Drop the real artwork at /public/logo.svg (or .png) if you'd rather use the
 * exact original — see Navbar/Preloader for where it's referenced.
 */
export function Logo({ className, animated = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 132"
      className={cn("text-foreground", className)}
      role="img"
      aria-label="Matthew Wolf monogram"
      fill="none"
    >
      {/* M — peaks up (top half) */}
      <path
        d="M21 100 L13 24 L60 70 L107 24 L99 100"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        pathLength={1}
        className={animated ? "logo-stroke" : undefined}
      />
      {/* W — valleys down (bottom half), interlocks at center */}
      <path
        d="M21 60 L29 108 L60 64 L91 108 L99 60"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        pathLength={1}
        className={animated ? "logo-stroke logo-stroke--delay" : undefined}
      />
      {/* Orange diagonal accents */}
      <polygon
        points="30,74 52,74 44,90 22,90"
        fill="hsl(var(--primary))"
        className={animated ? "logo-slash" : undefined}
      />
      <polygon
        points="68,74 90,74 98,90 76,90"
        fill="hsl(var(--primary))"
        className={animated ? "logo-slash logo-slash--delay" : undefined}
      />
    </svg>
  );
}
