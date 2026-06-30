# Redesign Blueprint — "Autonomy → Shipped"

*Phase 1–3 plan. Grounded in `WEBSITE_AUDIT_AND_CREATIVE_BRIEF.md` and the real assets found in `public/Images/` (a gitignored drop-zone; curated copies now live in `public/projects/` and `public/brand/`).*

---

## Phase 1 — Strategy (in my own words)

- **What the current site is:** A polished, conventional dark single-page developer portfolio (Next.js App Router). Strong engineering, strong content, no signature moment.
- **Who it's for:** Founders / small-business owners and engineering recruiters first; robotics/college contacts and fellow builders second.
- **What it must accomplish:** Make a busy adult trust, in ~30 seconds, that a high-schooler already *ships real systems* — then make it trivial to reach out.
- **Currently weak:** No memorable moment; flat "list" narrative; broad CTA; missing flagship screenshot; unoptimized images; no sitemap/robots/OG/schema; some dead code.
- **Must improve:** A signature interactive moment, a problem→transformation→proof→CTA arc, sharper copy + CTA, real on-brand imagery, SEO/share layer, performance.
- **Must preserve:** Matte-charcoal + orange palette, MW monogram (2D/3D), Clash Display, reduced-motion discipline, lazy/desktop-gated WebGL, semantic + a11y backbone, the just-restored calm hero baseline.
- **Inputs still missing (non-blocking):** primary-goal confirmation, chosen ambition level, Instant Quote screenshots, reference sites. Proceeding with audit-recommended defaults + placeholders.

### Assets (after inspecting `public/Images/`)
- **Available & final-safe (Matt-owned):** real MW logo renders (`public/brand/mw-monogram-dark.png`, `mw-hero-wide.png`); real robotics photography — `robot-dark.jpg` (dark practice robot, on-brand), `controller.jpg` (VEX controller + orange mount, on-brand), `robotics.jpg` (robot detail), `competition.jpg` (team shot — *contains other minors' faces → use sparingly / Matt-approval*); `mattos.png` (real Obsidian graph for the MattOS project); the 4 Roblox game covers.
- **Missing:** Instant Quote internship screenshots → **labeled placeholder** in production.
- **Candidate / generated:** the 4 ChatGPT logo renders are Matt's own brand output → treated as final-safe brand art (not fake proof). No third-party candidate assets staged.
- **Inspiration-only:** none on disk; reference sites still to be gathered by Matt.
- **References available:** `references/README.md` scaffold only. **References missing:** the 3–5 inspiration sites.
- **Enough clarity to redesign now?** ✅ Yes. **Enough assets for cinematic design now?** ✅ Yes for everything except the Instant Quote screenshot (placeholder).

### Creative Direction
- **Project Goal:** Land internships & paid software/build work; stand out for recruiting/college.
- **Primary User:** Startup founder / hiring builder + engineering recruiter.
- **Primary Conversion:** Email outreach about internships / build work.
- **Secondary Conversions:** GitHub follow / repo views, LinkedIn connect.
- **Brand Feeling:** Precision engineering, after dark. Confident, earned, calm, expensive-but-honest.
- **Core Visual Metaphor:** A single line/route that proves range — it *travels* from a robot's autonomous path to a software pipeline to a shipped app.
- **Main Object / Scene:** The MW monogram (hero) + an orange "ship path" line (signature scene).
- **Problem State:** A raw, searching autonomous route (the hard, unsolved problem).
- **Transformation:** Scroll re-purposes the same line — route → pipeline → product flow.
- **Solution State:** A clean "shipped" app state sealed with the monogram.
- **Business Meaning:** "I take hard problems all the way from idea to shipped — across robotics, automation, and AI."
- **Tone of Copy:** Plain, specific, confident, no buzzwords, no em dashes/colons (per Matt's standing preference), honest about being early.
- **Design Keywords:** matte, machined, precise, schematic, high-contrast, restrained, cinematic.
- **Motion Keywords:** deliberate, scroll-linked, draw-on, morph, settle (never drifty/seasick).
- **Things to Avoid:** floating blobs, meaningless parallax, scroll-hijacking, neon sci-fi cliché, glassmorphism soup, fake proof, anything "seasick."
- **Assets Available:** logo renders, dark robotics photos, MattOS shot, game covers, code-built scene.
- **Assets Missing:** Instant Quote screenshots.
- **Assets Safe to Use:** all Matt-owned items above + fonts/icons (OSS).
- **Assets Inspiration-Only:** reference sites (not yet provided).
- **Assets Needing Matt Approval:** the competition team photo (other minors' faces).
- **Fallback Direction:** If WebGL/scene is too heavy or unwanted, the same line works as a pure 2D SVG; if Matt wants it calmer, the scene degrades to static labeled milestones. Every section stands alone with motion off.

> **As the user scrolls, a single orange line transforms from a robot's searching autonomous route into a clean software pipeline and finally into a shipped app screen — revealing that Matthew takes hard problems all the way from idea to shipped.**

---

## Phase 2 — Reference & Asset Translation

| Source | What it shows | Borrowing (inspiration) | NOT copying | How it applies | Final asset? | Notes |
|---|---|---|---|---|---|---|
| `public/brand/mw-monogram-dark.png` | Real MW logo, dark premium render | The actual brand mark, metal+orange | — | Hero accent, OG image, favicon-grade | ✅ Final-safe (Matt-owned) | 1.5 MB → serve via `next/image` |
| `public/brand/mw-hero-wide.png` | 16:9 logo + chevron cut | Composition (left mark, right chevron negative space) | — | Optional hero backdrop / OG | ✅ Final-safe | Large; optimize |
| `robot-dark.jpg` (IMG_4370) | Robot in dark practice, orange accents | Real, on-brand cinematic robotics | — | Robotics project hero image | ✅ Final-safe | Best on-brand shot |
| `controller.jpg` (IMG_4371) | VEX controller + custom orange 3D-print mount | Detail/craft, matte+orange | — | Robotics/secondary imagery | ✅ Final-safe | Great texture |
| `robotics.jpg` (IMG_4369) | Robot mechanism detail | Engineering density | — | Robotics detail | ✅ Final-safe | — |
| `competition.jpg` (IMG_4368) | Team at VEX competition | Authenticity, scale of event | — | Credibility (sparingly) | ⚠️ Needs approval | Other minors' faces |
| `mattos.png` | Real Obsidian graph (MattOS) | Real product artifact | — | MattOS project card image | ✅ Final-safe | — |
| Awwwards / Bruno Simon / Lando Norris (links) | Award sites: one hero object + scroll story | The *principle* (single object + meaningful scroll) | Their designs, code, assets | Justifies the ship-path scene | ❌ Inspiration-only | Never reused |
| Poly Haven / ambientCG | CC0 HDRI/texture | Optional reflection/texture upgrade | — | Enhancement only | ✅ if used (CC0) | Not required for v1 |

**Chosen moodboard:** *Precision engineering, after dark.* **Mood:** calm, confident, cinematic-restrained. **Colors:** matte charcoal `30 4% 7%` + warm grays + one orange `20 90% 54%`. **Lighting:** single key light, deep shadow, faint orange rim. **Materials:** machined metal, matte surfaces, blueprint line-work. **Type:** Clash Display (angular display) + Inter (body) + JetBrains Mono (labels). **Layout:** generous, editorial, alternating, with a schematic grid undertone. **Motion:** scroll-linked draw/morph, settle, never drift. **Interaction:** purposeful hover/magnetic, one signature scroll scene. **Specific to this project:** the route→pipeline→ship metaphor *is* Matt's real story. **Would feel generic:** random parallax blobs, glassmorphism, neon, stock photos.

---

## Phase 3 — Blueprint

### 1. New Site Story
First load: a fast logo "system online" beat (shortened), then a calm hero — the MW monogram lit, a one-line claim ("I turn hard problems into things that ship"), and two clear actions. Scroll a little and the site states its thesis bluntly ("Most people talk about building. I ship."). Then the **signature scene**: a single orange line that starts as a robot's searching autonomous route, straightens into a software pipeline, and resolves into a shipped app — the visual proof of range. From there it's evidence: the shipped internship product first (for founders/recruiters), then the Worlds robotics work with real photos, then the AI/automation builds. Proof numbers, the honest "how I build" voice, skills, a real experience timeline, and an objection-handling FAQ ("isn't he just in high school?") remove the last doubts. It closes on one clear ask: email me about internships and build work.

### 2. Information Architecture
- **Routes (now):** `/` (immersive homepage). **SEO infra:** `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`.
- **Routes (later, optional):** `/work/instant-quote`, `/work/robotics` case studies for depth + recruiter deep-links.
- **Nav:** Work / Approach / About / Experience / Contact + persistent "Email me". **Footer:** identity, socials, (future) sitemap links.
- **CTA locations:** nav (persistent), end of hero, after proof, final CTA. **Conversion path:** Hero → thesis → ship-path → shipped work → proof → FAQ → CTA.
- **SEO opportunities:** `Person` JSON-LD, descriptive alt, OG image, sitemap; case-study pages later.

### 3. Homepage Section Outline
1. **Hero** — purpose: position + signature claim. H1: "I turn hard problems into things that ship." Sub: range + Worlds + shipping. CTAs: "See what I've shipped" / "Start a conversation". Visual: lit MW monogram (existing 3D) + faint schematic. Motion: calm word-reveal + monogram float (kept calm). Mobile: flat monogram, stacked. Assets: 3D monogram / brand render. Fallback: static.
2. **Proof** — animated numbers + credibility strip (kept, early for trust).
3. **Approach / thesis** — "Most people talk about building. I ship." Three pillars: Robotics autonomy · Shipped software · AI & automation. Motion: reveal. Sets tension.
4. **Ship-path (signature scene)** — "From autonomous path to shipped product." The morphing orange line, 3 labeled states. Motion: scroll-linked SVG draw/morph. Mobile: simpler vertical line + milestones. Reduced-motion: static three-state diagram.
5. **Selected work** — Instant Quote (shipped) first, then Robotics/Worlds (real photos), then AI/automation grid. Real imagery + labeled Instant Quote placeholder.
6. **Games** — contained "range/play" zone (kept).
7. **About** — "How I build" voice (kept, light).
8. **Skills** — capability groups (kept).
9. **Experience** — vertical timeline (lightly enhanced).
10. **FAQ / objections** — "Isn't he just in high school?", "How much did you build?", "Can you work on a team?", "Are you available?".
11. **Final CTA** — one ask: internships & build work; email primary.
12. **Footer** — identity + socials.

### 4. Motion Storyboard
- **Scene 1 — Hero (load → 0–10% scroll):** monogram lit + claim word-reveals. Meaning: "serious builder." Tech: existing R3F + Framer. Mobile/reduced: static. Risk: low.
- **Scene 2 — Proof (10–20%):** numbers count up once in view. Meaning: "credible, fast." Tech: existing CountUp. Reduced: final numbers shown. Risk: low.
- **Scene 3 — Thesis (20–32%):** "I ship." pillars stagger in. Meaning: the differentiator. Tech: Reveal. Risk: low.
- **Scene 4 — Ship-path: Autonomy (32–46%):** orange line draws a searching route around faint field dots. Meaning: "robotics autonomy = hard problems solved." Tech: SVG `pathLength` + `useScroll`. Mobile: short vertical draw. Reduced: static route. Risk: low.
- **Scene 5 — Ship-path: Pipeline (46–60%):** the same line straightens into nodes/stages. Meaning: "automation/AI = repeatable systems." Tech: interpolate path `d` / overlay nodes. Reduced: static pipeline. Risk: low-med.
- **Scene 6 — Ship-path: Shipped (60–72%):** line resolves into an app screen + monogram seal + "Shipped" tick. Meaning: "it actually runs." Tech: SVG/HTML morph. Reduced: static "shipped" card. Risk: low.
- **Scene 7 — Work reveal (72–88%):** featured rows wipe in (existing clip-path reveal) with real photos. Meaning: "here's the evidence." Tech: existing ProjectMedia reveal. Risk: low.
- **Scene 8 — CTA settle (88–100%):** FAQ + final CTA; monogram quietly re-centers in footer. Meaning: "no more doubts, reach out." Tech: Reveal. Risk: low.

Every transition: the line/route *changes because the work changes form* (robot → pipeline → product); the user learns Matt's range; it supports "trust then contact." No scroll-hijack; the line is scroll-linked, the page scrolls normally.

### 5. Visual System
- **Color:** existing matte tokens + orange; add a faint schematic line color (`border` at low alpha). One accent only.
- **Type:** Clash Display (display), Inter (body), JetBrains Mono (labels). Tighten scale; big editorial headings used sparingly.
- **Spacing/grid:** Tailwind scale, container ~1100px, `py-20/28` rhythm, 12-col feel via flex/grid.
- **Radius:** `0.5rem`. **Buttons:** existing CVA (premium hover lift) — keep. **Cards:** existing + spotlight, used with restraint. **Forms:** none (mailto); FAQ uses `<details>` for native a11y.
- **Nav/footer:** existing nav (add persistent Email), existing footer (+ identity line).
- **Icons:** Lucide. **Image treatment:** consistent dark grade, rounded frame, hairline border, subtle hover scale; `next/image`. **Texture/material:** film grain (keep), faint blueprint grid behind the ship-path only. **Lighting/mood:** dark, single-key. **Background:** matte + restrained radial glow (kept) + section "swell."
- **States:** hover (lift/scale/orange edge), focus (orange outline — keep), error (n/a), loading (shortened preloader + skeleton-free), empty (labeled placeholder for missing Instant Quote). **Mobile:** single column, simplified motion.

### 6. Content & Copy System
- **Meta title:** "Matthew Wolf — Robotics & software developer who ships"
- **Meta description:** "High-school developer and Worlds-qualified VEX robotics lead programmer. I build robotics autonomy, automation, and AI tools that actually ship."
- **OG title/desc:** same, with the monogram OG image.
- **Hero H1:** "I turn hard problems into things that ship."
- **Hero sub:** "High-school developer and Worlds-qualified VEX robotics lead programmer, building robotics autonomy, automation, and AI tools that actually run."
- **Primary CTA:** "See what I've shipped". **Secondary CTA:** "Start a conversation".
- **Thesis heading:** "Most people talk about building. I ship." **Body:** range, in the gap between idea and working.
- **Ship-path heading:** "From autonomous path to shipped product." **State captions:** Autonomy / Pipeline / Shipped.
- **FAQ (real, honest):** age/experience, authorship, teamwork, availability.
- **Final CTA:** "Let's build something." + one ask.
- **Proof placeholder (labeled):** a real mentor/coach quote is requested; until then a clearly-labeled placeholder, never a fabricated quote.

### 7. Asset Plan
- **Use:** `mw-monogram-dark.png`/`mw-hero-wide.png` (brand/OG), `robot-dark.jpg`, `controller.jpg`, `robotics.jpg`, `mattos.png`, game covers, code-built ship-path + schematic.
- **Remove:** dead code (`aurora-background.tsx`, `scroll-background.tsx`, `.aurora`/`.text-shimmer` CSS); keep gitignored `logo.png.png` ignored (already).
- **Approval-needed:** `competition.jpg` (faces) — use small/optional.
- **Placeholder (labeled):** Instant Quote screenshots.
- **Optimization:** migrate project imagery to `next/image` (AVIF/responsive); the brand PNGs are large → optimized on serve.
- **Needed from Matt:** Instant Quote screenshots; a real proof quote; ok on the team photo.

### 8. Technical Plan
- **Framework:** keep Next 14 App Router + TS + Tailwind. **Styling:** Tailwind + CSS tokens. **Motion:** Framer Motion (already in use) — *no new heavy lib*; the ship-path is SVG + Framer `useScroll/useTransform` (no GSAP/Three needed for it). Keep R3F only for the existing hero monogram (lazy/desktop-gated).
- **Components (new):** `ship-path.tsx` (signature scene), `sections/approach.tsx`, `sections/faq.tsx`, `data/faq.ts`. **Refactor:** `project-media.tsx` → `next/image`; `page.tsx` order; `site.ts`/`projects.ts` copy.
- **Responsive:** mobile-first; ship-path simplifies on mobile. **SEO:** robots/sitemap/OG/JSON-LD/metadataBase. **A11y:** preserve focus/reduced-motion; FAQ via `<details>`; descriptive alt. **Perf:** `next/image`, lazy scene, shortened preloader, remove dead code. **QA:** `npm run lint` + `npm run build`. **Fallbacks:** reduced-motion + no-WebGL + motion-off all yield a clean static page.

*Build order (Phase 4):* assets ✅ → copy/data → static structure → visual system → motion skeleton (ship-path) → SEO/cleanup → test → report.
