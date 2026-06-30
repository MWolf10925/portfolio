# Asset Sourcing Plan

## Summary

The site's assets are **license-safe but incomplete and inconsistent.** Everything currently on the site appears to be **Matt-owned** (his MW monogram, his robotics photos, his Roblox game screenshots) or **open-source** (Clash Display via Fontshare, Inter/JetBrains Mono via Google, Lucide icons). That's a great starting position — **licensing risk is low.** The gaps are: a **missing flagship screenshot (Instant Quote)**, **inconsistent image treatment**, **no cinematic/hero-grade visuals**, and some **dead/oversized files**. The recommended strategy is **code-built assets first** (zero licensing risk, maximally on-brand) + Matt's **real screenshots** + a couple of **CC0 enhancements** (HDRI/texture).

---

## Current Assets Worth Using

- **MW monogram** — `src/components/brand/logo.tsx` (SVG) and `src/components/three/mw-3d.tsx` (3D). The centerpiece. Keep and elevate.
- **`icon.svg`** — favicon, clean. Keep.
- **Robotics photos** — `public/projects/robotics.jpg`, `competition.jpg`. Usable **after a consistent color-grade pass** (push toward warm-matte + orange) and compression. *(Confirm Matt owns them.)*
- **Roblox game covers** — `public/games/*.png`. Usable as a deliberately-contained "play" zone, **with a unifying frame/treatment**. Compress `tower-offense.png` (438 KB).
- **Film grain** (CSS data-URI), **fonts**, **content data files** — all keep.

## Current Assets to Replace

- **`public/logo.png.png`** — 890 KB, double extension, **unused**. Delete.
- **Missing `instant-quote.jpg`** — referenced in `projects.ts` but not present → flagship shows a placeholder. **Replace with Matt's real, sanitized screenshots.**
- **Event-lit robotics photos** — not "replace" so much as **regrade** for consistency; if any are too low-quality, retire them.

## Current Assets for Inspiration Only

- None of the *current* assets are inspiration-only — they're all production-real or code. (Inspiration-only material will live in `references/inspiration-sites/` once gathered, and must never be used as production assets.)

## Candidate Assets Found Online

Internet access **was** available. **No candidate assets were downloaded or staged** this pass (deliberately — to avoid premature/wrong picks and honor "don't wire anything in yet"). Instead, here are the **recommended license-safe sources** to draw from during the build:

| Need | Recommended source | License | Risk | Production status |
|---|---|---|---|---|
| Studio HDRI (monogram reflections) | Poly Haven | CC0 | None | Final-safe (pick during build) |
| Matte metal/concrete texture | ambientCG | CC0 | None | Final-safe (optional) |
| Icons | Lucide (in use) / Phosphor | MIT/OSS | None | Final-safe |
| Fonts | Fontshare (Clash) / Google (Inter, JBM) | OSS | None | Final-safe (in use) |
| Neutral tech B-roll (only if needed) | Unsplash / Pexels | License-safe | Low (verify per-image) | Needs Matt approval |
| 3D model (only if a real object is needed) | Sketchfab (CC0 filter) | CC0 only | Low (verify) | Needs approval |
| Store badges | Official Chrome/Apple/Google kits | Per-guideline | None (apps are real) | Final-safe (follow rules) |

## Assets Staged Locally

**None.** No files were downloaded or copied into the project this pass. (`references/` contains only a README scaffold and this planning set.)

## Generated Placeholder Assets

**None generated** — image generation wasn't available in this environment. AI image **prompts** are provided instead in `WEBSITE_AUDIT_AND_CREATIVE_BRIEF.md` Section 17 for Matt to run elsewhere. Any results should land in `references/generated-placeholders/`, be logged in `ASSET_USAGE_MANIFEST.md`, and never be used as fake proof.

## Original Code-Based Assets Recommended

These carry **most of the redesign** with **zero licensing risk** (full detail in brief Sections 15D/15E):
- **SVG schematic/blueprint grid** backdrop (engineering atmosphere).
- **"Autonomy → Shipped" SVG/canvas line** (the signature scroll scene — Concept 2).
- **Refined R3F monogram rig** (better lighting; optional HDRI).
- **CSS noise/grain + gradient-mesh** ambient depth (restrained, post-revert lesson).
- **Animated data-line/pipeline** nodes (SVG/Framer).
- **Vertical timeline rail**, **section divider ticks**, **scroll-progress "gauge"**, **object reveal masks**.
- **Dynamic OG share image** (`app/opengraph-image.tsx`).
- **HUD/dashboard mock** (only if Concept 3).

## Assets Needed Before Final Launch

- ✅ **Instant Quote screenshots** (real, sanitized) — *required*.
- Store badges (Chrome Web Store / App Store / Google Play) — recommended.
- Graded/compressed robotics photos — recommended.
- OG share image — recommended (SEO/social).
- Real social-proof quote (text asset) — recommended.

## Assets Needed Before Prompt 2 (the redesign build)

**Required:**
- **Instant Quote screenshots** (the one real asset that unblocks the flagship).

**Optional (build can start without them, swap in later):**
- CC0 HDRI/texture (can be added mid-build).
- Store badges (can be added mid-build).
- Real proof quote (can be a labeled placeholder until provided).

> The redesign can **start immediately** with code-built placeholders + the current monogram; the only thing it truly *wants* from Matt up front is the Instant Quote imagery and the 5 blocker answers in `REFERENCE_PACK_REQUEST.md`.

## Licensing Notes

- **Safe now:** MW monogram, icon.svg, fonts (Fontshare/Google), Lucide, film grain, all content — Matt-owned or OSS.
- **Safe with sourcing discipline:** Poly Haven / ambientCG (CC0), Sketchfab (CC0 filter only), Unsplash/Pexels (verify per-image).
- **Needs Matt confirmation:** rights to the **robotics competition/event photos**; that Instant Quote screenshots contain **no client PII**.
- **Must not use:** any inspiration/competitor/Awwwards/Pinterest/Dribbble image as a production asset; any asset with an unconfirmed license; any AI-generated image presented as real proof/people/clients.

## Recommended Asset Direction for Redesign

**"Precision engineering, after dark," built mostly in code.** Lead with the **MW monogram** as a machined hero object on matte charcoal under controlled light, surround it with **code-built schematic geometry** and **one signature scroll moment** (the autonomy→pipeline→app line), and drop in **Matt's real screenshots** at the "shipped" payoff beats. Enhance — don't depend on — with a **CC0 studio HDRI** and **one matte texture**. Keep the game covers as a contained, framed "play" zone. Every external asset is an *enhancement*; the brand can ship award-level on owned + code assets alone.
