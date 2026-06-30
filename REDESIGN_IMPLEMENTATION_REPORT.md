# Redesign Implementation Report — "Autonomy → Shipped"

*Phase 8 deliverable. Implements `REDESIGN_BLUEPRINT.md`, grounded in `WEBSITE_AUDIT_AND_CREATIVE_BRIEF.md`. All work is in the working tree (uncommitted, not pushed) so it stays reversible until Matt approves.*

**Build:** ✅ clean (`next build` — compiled, types valid, 7 routes generated). **Main route First Load JS:** 156 kB (under the 180 kB budget). **Status:** local only.

---

## What changed (headline)

The site went from a polished-but-conventional dark portfolio to a **cinematic narrative** built around one original, on-brand idea: a single orange line that travels from a robot's autonomous route → a software pipeline → a shipped app. The page now tells a **problem → thesis → signature scene → evidence → objection-handling → CTA** story instead of a flat list, with sharper copy, real on-brand robotics photography wired in, a full SEO/share layer, and dead weight removed.

## Files modified
- `src/app/page.tsx` — new section order; dropped the filler marquee.
- `src/app/layout.tsx` — `metadataBase`, sharper title/description/OG/Twitter, `Person` JSON-LD, robots directives. (AmbientShapes already gone.)
- `src/app/globals.css` — removed dead `.aurora*` + `.text-shimmer` CSS (and their reduced-motion lines).
- `src/data/site.ts` — new hero headline + sub + CTAs; new `approach` thesis/pillars; sharpened `contact` copy.
- `src/data/projects.ts` — reordered (Instant Quote first for the founder/recruiter persona); pointed robotics projects at the on-brand dark photos; added a `placeholder` field.
- `src/components/sections/hero.tsx` — CTA copy now data-driven; accent the word "ship".
- `src/components/sections/projects.tsx` — passes the labeled placeholder through.
- `src/components/sections/project-media.tsx` — migrated raw `<img>` → **`next/image`** (responsive + AVIF/WebP); labeled-placeholder support.
- `src/components/navbar.tsx` — curated nav (Work / Approach / About / Experience / Contact).
- `src/components/effects/section-rail.tsx` — curated rail incl. Approach + Process.
- `src/components/effects/preloader.tsx` — shortened 2100 ms → 1400 ms.

## New components / files
- **`src/components/sections/ship-path.tsx`** — the signature scroll scene (see Motion System).
- `src/components/sections/approach.tsx` — thesis + three pillars.
- `src/components/sections/faq.tsx` — objection handling (native `<details>`).
- `src/data/faq.ts` — FAQ content.
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx` — SEO/share infra.
- `REDESIGN_BLUEPRINT.md`, `REDESIGN_IMPLEMENTATION_REPORT.md`.

## Files deleted (dead code)
- `src/components/effects/aurora-background.tsx`, `src/components/effects/scroll-background.tsx` (defined, never imported).

---

## New site structure (homepage flow)
`Hero → Proof → Approach (thesis) → Ship-path (signature scene) → Selected work → Games → About → Skills → Experience → FAQ → Contact → Footer`

Anchors: `#top #approach #process #projects #about #experience #faq #contact`. Nav + section rail updated to match. Single route still; SEO infra (robots/sitemap/OG) added for crawlability and rich sharing.

## New visual system
- **Palette unchanged** (matte charcoal `30 4% 7%` + orange `20 90% 54%`) — preserved per Matt's preference; one accent only.
- **Type:** Clash Display (display) / Inter (body) / JetBrains Mono (labels) — unchanged, used with more editorial intent in the thesis + scene headings.
- **New texture:** a faint blueprint **`grid-texture`** under the signature scene gives the "engineering schematic" atmosphere without new assets.
- **Cards/buttons/focus/hover:** existing CVA system kept (premium hover lift, orange focus ring); new pillar + FAQ surfaces follow it.
- **Image treatment:** consistent dark-graded photos in rounded, hairline-bordered frames with subtle hover scale, now via `next/image`.

## New motion system (storyboard, implemented)
**Signature scene — `ShipPath`:** a single orange SVG line that **draws on as you scroll** (SVG-native `pathLength` + `strokeDashoffset`, with a dot riding the leading edge). It begins as a wandering **autonomy** route, straightens through **pipeline** nodes, and resolves into a **shipped** app frame with a checkmark. Captions cross-fade to name the active state. The same line changing form *is* the message (range + shipping).
- **Desktop + motion on:** sticky-pinned scene, scroll-linked (no scroll-hijacking — the page scrolls normally; the pin just holds the scene).
- **Mobile / `prefers-reduced-motion`:** a clean static three-step diagram (no pin, no draw) — fully understandable with zero motion.
- All other motion is the existing restrained Framer Motion (reveals, masked headings, count-ups, parallax media, the calm hero monogram) — preserved and reduced-motion-aware.

## New content / copy direction
- **Hero:** "I turn hard problems into things that ship." + range/Worlds/shipping sub; CTAs "See what I've shipped" / "Start a conversation."
- **Thesis:** "Most people talk about building. I ship." + three pillars (Robotics autonomy / Shipped software / AI and automation).
- **Ship-path captions:** Autonomy / Pipeline / Shipped.
- **FAQ:** honest answers to age/experience, authorship, teamwork, availability — **no fabricated proof.**
- **Contact:** one sharpened ask (internships + build work), email primary.
- **Meta:** title "Matthew Wolf — Robotics and software developer who ships"; description names the rare combination; OG image generated dynamically.

## SEO improvements
- `app/robots.ts` (+ sitemap reference), `app/sitemap.ts`, `app/opengraph-image.tsx` (dynamic 1200×630 share card with the monogram + claim), `metadataBase` (Vercel-aware, override via `NEXT_PUBLIC_SITE_URL`), canonical, richer keywords, `Person` JSON-LD (jobTitle, alumniOf, knowsAbout, sameAs → GitHub/LinkedIn). Heading hierarchy preserved (single H1, section H2s).

## Accessibility improvements / preserved
- FAQ uses native `<details>/<summary>` — keyboard-accessible, works with zero JS.
- Signature scene has a **static, motion-free fallback** (mobile + reduced-motion) and is `aria-hidden` decoration layered under real HTML text — no information is canvas/SVG-only.
- Preserved: `:focus-visible` orange outline, reduced-motion discipline throughout, nav keyboard support + 48px targets, semantic landmarks, lazy/desktop-gated hero WebGL.

## Performance considerations
- **`next/image`** for project media (responsive `srcset` + AVIF/WebP) replaces ~400 KB raw `<img>`.
- Removed dead components + dead CSS; shortened the first-load preloader.
- Signature scene is **pure SVG + Framer transforms** (no GSAP, no extra Three.js) — cheap; the sticky pin is desktop-only.
- First Load JS 156 kB (was ~150 kB) — small, justified increase for the scene + image component.
- The hero 3D monogram remains lazy + desktop/pointer/reduced-motion gated.

## Responsive improvements
- Ship-path collapses to a static stacked diagram on mobile; pinned scene is `lg`+ only.
- Nav curated; pillars/FAQ/work all reflow to single column; image frames are fluid.

## Reference & asset translation (summary)
- **Discovered** a gitignored `public/Images/` drop-zone with **real, Matt-owned assets**: the actual MW logo renders, four robotics photos, a MattOS screenshot, the 3009H wordmark, and the source game screenshots.
- **Used (final-safe, Matt-owned):** `robot-dark.jpg` (dark practice robot — on-brand) for *Robotics Autonomous Systems*; `robotics.jpg` (robot detail) for *3009H*. Existing game covers retained.
- **Inspiration only (never copied/used as assets):** Awwwards / Bruno Simon / Lando Norris references informed the *principle* (one meaningful object + scroll storytelling), nothing more.
- The OG image is an **original inline vector** monogram (sharper + lighter than shipping a 1.5 MB PNG).

## Assets used
| Asset | Path | Source/License | Use |
|---|---|---|---|
| Robotics dark photo | `public/projects/robot-dark.jpg` | Matt-owned | Robotics project image |
| Robot detail photo | `public/projects/robotics.jpg` | Matt-owned | 3009H project image |
| Game covers (×4) | `public/games/*.png` | Matt-owned (Roblox) | Games section |
| MW monogram | inline SVG (`logo.tsx`, OG route) | Matt-owned | Brand mark, OG card |
| Fonts | Clash Display / Inter / JetBrains Mono | OSS (Fontshare/Google) | Type system |
| Icons | `lucide-react` | ISC/MIT | UI |

## Remaining placeholders
- **Instant Quote** featured row shows a **clearly-labeled** placeholder: *"Live in stores · UI walkthrough coming."* (Honest — the project is real and live; only the screenshots aren't public yet.)
- **Social proof:** none fabricated. A real mentor/coach quote is recommended (see below).

## Assets still needed (from Matt)
- **Instant Quote screenshots** (sanitized, no client PII) → drop in `public/projects/instant-quote.jpg` (+ optional store badges) and the placeholder auto-replaces.
- **One real proof quote** (robotics coach / internship mentor / teacher) to add a credibility block — real only.
- **Approval** to use the competition team photo (`public/Images/IMG_4368` → `competition.jpg`) which shows other minors' faces; left out of prominent use for now.
- **Real domain** → set `NEXT_PUBLIC_SITE_URL` in Vercel so OG/sitemap/canonical use the production origin.

## 3D / models still needed
- None required. The hero 3D monogram is sufficient; the signature scene is intentionally 2D SVG (performant, no model/licensing exposure). A CC0 studio HDRI (Poly Haven) is an *optional* future polish for the monogram, not needed.

## Images / videos still needed
- Instant Quote screenshots (above). No video is used or required.

## Known limitations
- The pinned ship-path scene is desktop-only by design; mobile gets the static diagram (intentional, not a regression).
- The big brand PNG renders in `public/Images/` are not shipped (kept in the gitignored drop-zone); the OG uses an inline vector instead.
- `metadataBase` falls back to the Vercel URL until `NEXT_PUBLIC_SITE_URL` is set, so OG absolute URLs use the deploy origin in the meantime.
- Pre-existing Tailwind warning on the button's `ease-[cubic-bezier(...)]` class is cosmetic (not introduced here).

## Recommended next improvements
1. Drop in real Instant Quote screenshots + store badges (biggest remaining visual win).
2. Add a real proof quote block after Proof or before Contact.
3. Optional case-study pages (`/work/instant-quote`, `/work/robotics`) for SEO depth + recruiter deep-links (the IA already anticipates this).
4. Optional: a CC0 studio HDRI for richer monogram reflections.
5. Consider a persistent "Email me" affordance in the nav on scroll.

## How to run / test
```bash
npm install      # if needed
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks + lints)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Checks run & results
- `npm run build` → ✅ **compiled successfully**, types valid, 7 routes generated (`/`, `/_not-found`, `/icon.svg`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`). Main route 156 kB First Load JS.
- ESLint (via build) → ✅ no errors. (One pre-existing cosmetic Tailwind class-ambiguity warning on `button.tsx`.)
- Dev server → served `/` 200 OK; hero, thesis, ship-path, and FAQ content present in rendered HTML.
- No `npm test`/`typecheck`/`format` scripts exist in `package.json`; type-checking runs as part of `build`.

---

## Award-style scorecard — before vs after

| Category | Before | After | Note |
|---|---:|---:|---|
| Design quality | 7 | 8 | Schematic system, signature scene, intentional rhythm |
| UX/UI clarity | 8 | 8.5 | Clear narrative arc + sharper CTAs |
| Creativity / originality | 5 | **8** | Original, *meaningful* ship-path metaphor |
| Content quality | 9 | 9.5 | Thesis + FAQ + sharper copy |
| Structure / navigation | 8 | 9 | Problem→proof→CTA arc; curated nav/rail |
| Functionality | 8 | 8.5 | Graceful fallbacks; SEO routes |
| Interactivity | 6 | **8** | Signature scroll scene with purpose |
| Overall experience | 7 | 8.5 | Memorable + still usable |
| SEO / semantic markup | 5 | **8.5** | robots, sitemap, OG image, Person schema, metadataBase |
| Accessibility | 7 | 8 | Native FAQ, static fallbacks, preserved a11y backbone |
| Performance / WPO | 6 | 7.5 | next/image, dead code gone, shorter preloader |
| Responsive design | 8 | 8.5 | Static scene on mobile |
| Animation / transitions | 7 | 8.5 | Purposeful, reduced-motion-aware |
| Brand alignment | 7 | 8.5 | Real on-brand photos + metaphor + schematic |
| Conversion effectiveness | 6 | 8 | One sharp ask, objection-handling, shipped-first order |
| Asset quality / originality | 5 | 7.5 | Real on-brand robotics photos used (Instant Quote still placeholder) |
| Licensing safety | 9 | 9 | All owned/OSS; faces photo flagged, not used |

**Before overall ≈ 6.8 → After overall ≈ 8.4.** The remaining points are mostly unlocked by the real Instant Quote screenshots + a proof quote.

---

## Update 2 — Page transitions + case-study pages (added after review)

**New: branded page-transition curtain.** `src/components/effects/page-transition.tsx` — on internal navigation, six matte panels (orange top edge) sweep up to cover the screen, the MW monogram flashes at full cover, the route swaps underneath, then the panels sweep off the top to reveal the new page. App Router-correct (cover → `router.push` → reveal on `pathname` change). `prefers-reduced-motion` bypasses it entirely (instant nav). Links remain real `<a>` tags (crawlable; cmd/ctrl-click still opens new tabs — only plain left-clicks are intercepted). Provider wired in `layout.tsx`.

**New: two real case-study pages** (both static, ~147 kB First Load JS):
- `/work/instant-quote` (`instant-quote-content.tsx`) — built from the `MattContributions_Report` zip. **Honest framing:** "my account is on 99 commits; I authored about half directly and co-authored the rest with the lead developer." Real features (Field Mode/Today's Route, role-aware mobile home, IQ AI chat, lists/nav, native iOS/Android location + permissions + offline). Real screenshots: `iq-dashboard.png`, `iq-pipeline.png`, `iq-mobile-home.png`, `iq-today-route.png` (curated from the report; **demo/seed data** — verify no real client PII before pushing live).
- `/work/robotics` (`robotics-content.tsx`) — 3009H Heroic Robotics. Real facts (lead programmer/driver/notebooker, C++ autonomy, the PID auto-tuner with method kept private, the real 6-wheel 2.75″ / 2×11W+1×5.5W / ~450 rpm drivetrain spec, Worlds/Design/Skills awards). Visuals: `robot-dark.jpg`, `robotics.jpg`, `controller.jpg`, plus a curated CAD render (`robotics-cad.png`) and drivetrain blueprint (`robotics-drivetrain.png`).

**Wiring:** the homepage Instant Quote card now uses the real dashboard screenshot + a "Read the case study" curtain link; the 3009H card links to the robotics case study. `projects.ts` gained a `caseStudy` field. The flagship placeholder is gone. Sitemap now lists all three pages.

**Premium reveals on case studies:** clip-path image wipes, `MaskText` headings, staggered card reveals — all reduced-motion-aware.

**Checks:** `next build` ✅ clean, 9 routes generated (`/`, `/work/instant-quote`, `/work/robotics`, OG/robots/sitemap, etc.). All three pages verified 200 at runtime with correct content.

**Still flagged:** confirm the Instant Quote screenshots contain no real client PII before pushing; a real proof quote is still recommended; set `NEXT_PUBLIC_SITE_URL` in Vercel.
