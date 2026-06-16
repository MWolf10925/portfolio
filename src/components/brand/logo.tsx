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
      {/* M — wide peaks up, deep center valley (top half) */}
      <path
        d="M36 76 L30 16 L60 56 L90 16 L84 76"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit={9}
        pathLength={1}
        className={animated ? "logo-stroke" : undefined}
      />
      {/* W — splayed tips down, center peak up; interlocks at center */}
      <path
        d="M36 56 L30 116 L60 76 L90 116 L84 56"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit={9}
        pathLength={1}
        className={animated ? "logo-stroke logo-stroke--delay" : undefined}
      />
      {/* Orange slashes angled into the central X */}
      <polygon
        points="32,60 51,69 51,81 32,72"
        fill="hsl(var(--primary))"
        className={animated ? "logo-slash" : undefined}
      />
      <polygon
        points="88,60 69,69 69,81 88,72"
        fill="hsl(var(--primary))"
        className={animated ? "logo-slash logo-slash--delay" : undefined}
      />
    </svg>
  );
}
