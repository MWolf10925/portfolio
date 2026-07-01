"use client";

import { DecorAsset } from "./decor-asset";

/**
 * Per-section decorative presets. Each preset drops 1–3 brand assets into the
 * corners / edges of a section at low opacity, matched to that section's
 * content (dashboard near the metrics, camera near the work, phone near
 * contact, etc.). The whole layer sits at z-[-1] — above the section's own
 * background but behind its text — so the parent <section> must be `isolate`.
 *
 * Kept deliberately restrained: lots of negative space, nothing over the
 * centre where copy lives, several assets cropped off the section edge.
 */

export type DecorPreset =
  | "hero"
  | "stats"
  | "approach"
  | "projects"
  | "games"
  | "about"
  | "skills"
  | "experience"
  | "contact"
  | "faq";

function Layer({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden"
    >
      {children}
    </div>
  );
}

export function SectionDecor({ preset }: { preset: DecorPreset }) {
  switch (preset) {
    case "hero":
      return (
        <Layer>
          <DecorAsset
            name="3d/shard"
            size="w-[110px] sm:w-[168px]"
            className="left-[4%] top-[15%]"
            opacity={0.22}
            blur={0.4}
            rotate={-8}
            parallax={70}
            float={10}
            dur={13}
          />
          <DecorAsset
            name="3d/pyramid"
            size="w-[86px] sm:w-[128px]"
            className="bottom-[13%] left-[11%]"
            opacity={0.16}
            rotate={6}
            parallax={44}
            float={8}
            dur={11}
            delay={1.2}
          />
          <DecorAsset
            name="flat/bar-orange"
            size="w-[70px] sm:w-[104px]"
            className="left-[2%] top-[46%] hidden sm:block"
            opacity={0.16}
            rotate={-14}
            parallax={90}
            float={0}
          />
        </Layer>
      );

    case "stats":
      return (
        <Layer>
          <DecorAsset
            name="flat/dashboard"
            size="w-[300px] sm:w-[460px]"
            className="-right-14 -top-8"
            opacity={0.1}
            rotate={-3}
            parallax={44}
            float={6}
            dur={12}
          />
          <DecorAsset
            name="flat/shard-charcoal"
            size="w-[64px] sm:w-[96px]"
            className="bottom-[14%] left-[5%]"
            opacity={0.14}
            rotate={9}
            parallax={60}
            float={9}
          />
        </Layer>
      );

    case "approach":
      return (
        <Layer>
          <DecorAsset
            name="flat/city"
            size="w-[520px] sm:w-[760px]"
            className="-bottom-4 left-1/2 -translate-x-1/2"
            opacity={0.05}
            parallax={26}
            float={0}
          />
          <DecorAsset
            name="flat/bar-orange"
            size="w-[84px] sm:w-[120px]"
            className="right-[8%] top-[20%]"
            opacity={0.13}
            rotate={-12}
            parallax={70}
            float={7}
          />
        </Layer>
      );

    case "projects":
      return (
        <Layer>
          <DecorAsset
            name="flat/camera"
            size="w-[220px] sm:w-[330px]"
            className="-left-12 bottom-[6%]"
            opacity={0.09}
            rotate={4}
            parallax={54}
            float={7}
            dur={12}
          />
          <DecorAsset
            name="flat/shard-silver"
            size="w-[62px] sm:w-[92px]"
            className="right-[7%] top-[9%]"
            opacity={0.13}
            rotate={-10}
            parallax={72}
            float={9}
          />
        </Layer>
      );

    case "games":
      return (
        <Layer>
          <DecorAsset
            name="flat/cube"
            size="w-[126px] sm:w-[184px]"
            className="right-[6%] top-[8%]"
            opacity={0.12}
            rotate={-6}
            parallax={50}
            float={10}
            dur={12}
          />
          <DecorAsset
            name="flat/triangle"
            size="w-[110px] sm:w-[150px]"
            className="bottom-[10%] left-[8%]"
            opacity={0.1}
            rotate={8}
            parallax={64}
            float={8}
            delay={0.8}
          />
        </Layer>
      );

    case "about":
      return (
        <Layer>
          <DecorAsset
            name="flat/shard-dark"
            size="w-[84px] sm:w-[120px]"
            className="right-[8%] top-[12%]"
            opacity={0.1}
            rotate={-8}
            parallax={66}
            float={9}
          />
          <DecorAsset
            name="flat/bar-silver"
            size="w-[110px] sm:w-[150px]"
            className="bottom-[14%] left-[6%]"
            opacity={0.09}
            rotate={7}
            parallax={48}
            float={7}
            delay={0.6}
          />
        </Layer>
      );

    case "skills":
      return (
        <Layer>
          <DecorAsset
            name="flat/triangle"
            size="w-[96px] sm:w-[130px]"
            className="right-[7%] top-[14%]"
            opacity={0.08}
            rotate={-6}
            parallax={60}
            float={8}
          />
          <DecorAsset
            name="flat/bar-charcoal"
            size="w-[120px] sm:w-[160px]"
            className="bottom-[16%] left-[6%]"
            opacity={0.1}
            rotate={6}
            parallax={44}
            float={6}
            delay={0.5}
          />
        </Layer>
      );

    case "experience":
      return (
        <Layer>
          <DecorAsset
            name="flat/shard-orange"
            size="w-[64px] sm:w-[92px]"
            className="right-[8%] top-[10%]"
            opacity={0.13}
            rotate={-10}
            parallax={70}
            float={9}
          />
          <DecorAsset
            name="flat/bar-charcoal"
            size="w-[110px] sm:w-[150px]"
            className="bottom-[14%] left-[7%]"
            opacity={0.08}
            rotate={7}
            parallax={46}
            float={6}
            delay={0.7}
          />
        </Layer>
      );

    case "contact":
      return (
        <Layer>
          <DecorAsset
            name="flat/phone"
            size="w-[150px] sm:w-[220px]"
            className="-right-8 top-1/2 -translate-y-1/2"
            opacity={0.1}
            rotate={-10}
            parallax={40}
            float={9}
            dur={12}
          />
          <DecorAsset
            name="flat/city"
            size="w-[420px] sm:w-[560px]"
            className="-bottom-3 left-[3%]"
            opacity={0.05}
            parallax={24}
            float={0}
          />
        </Layer>
      );

    case "faq":
      return (
        <Layer>
          <DecorAsset
            name="flat/shard-charcoal"
            size="w-[64px] sm:w-[92px]"
            className="bottom-[16%] right-[7%]"
            opacity={0.09}
            rotate={-8}
            parallax={58}
            float={8}
          />
        </Layer>
      );

    default:
      return null;
  }
}
