import Image from "next/image";

/**
 * Full-bleed cinematic scene band — the one big 3D moment away from the hero.
 *
 * It scrolls naturally with the page (no parallax drift — that read as the band
 * moving on its own instead of the user scrolling). Its top and bottom edges are
 * melted into the matte background with gradients so it feels like part of the
 * page rather than a hard image block. Purely decorative.
 */
export function SceneBand({
  src,
  className = "",
  intensity = 0.6,
}: {
  src: string;
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative w-full overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 scale-105" style={{ opacity: intensity }}>
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* Melt top + bottom edges into the page background. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      {/* Soft side vignette so the copy on neighbouring sections stays king. */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
    </div>
  );
}
