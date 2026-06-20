import { Fragment } from "react";

const WORDS = ["Robotics", "Automation", "AI", "Builder", "Shipping", "C++"];

/**
 * Kinetic marquee band — big display words sliding edge to edge, every other
 * one outlined for depth. Pure CSS animation (see .marquee in globals.css),
 * paused on hover and stopped entirely under reduced-motion. The track is
 * duplicated so the loop is seamless.
 */
export function Marquee() {
  const sequence = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {WORDS.map((word, i) => (
        <Fragment key={word}>
          <span
            className="font-display text-5xl font-semibold tracking-tight sm:text-7xl"
            style={
              i % 2 === 1
                ? {
                    color: "transparent",
                    WebkitTextStroke: "1.5px hsl(var(--muted-foreground) / 0.6)",
                  }
                : { color: "hsl(var(--foreground))" }
            }
          >
            {word}
          </span>
          <span className="text-3xl text-primary sm:text-5xl">✦</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee-mask relative overflow-hidden border-y border-border/60 py-10">
      <div className="marquee">
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
