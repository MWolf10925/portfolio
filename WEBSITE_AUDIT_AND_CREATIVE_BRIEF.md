# Website Audit and Creative Brief

> **Phase:** Research, audit, and asset-prep only. No redesign or code changes were made to the live site during this pass.
> **Subject:** `Desktop/portfolio` — Matthew Wolf personal portfolio (Next.js App Router).
> **Date:** 2026-06-29
> **Internet access during this audit:** ✅ Available (3 real web searches were run; see `REFERENCE_LINKS_AND_SEARCH_PLAN.md`).
> **Image generation during this audit:** ❌ Not available in this environment → AI image *prompts* are provided instead (Section 17).
> **Companion files:** `REFERENCE_PACK_REQUEST.md`, `REFERENCE_LINKS_AND_SEARCH_PLAN.md`, `ASSET_SOURCING_PLAN.md`, `ASSET_USAGE_MANIFEST.md`.

---

## 1. Executive Summary

**What it currently feels like.** A clean, competent, dark-mode developer portfolio. It is well-built, cohesive, and clearly above "template" quality in engineering terms — custom cursor, MW 3D monogram, smooth Lenis scroll, film grain, tasteful Framer Motion throughout. It reads as *professional and tidy*, not *cinematic* or *award-level*. The visual language is the familiar "dark charcoal + one accent color" portfolio that thousands of devs ship; the matte-black + orange palette is handsome but not yet a world.

**What it communicates.** Within ~5 seconds: "a young, serious builder who does robotics, automation, and AI." The headline ("I build robotics, automation, and AI tools.") and proof strip (5,000+ plays, 4.0 GPA, 33 ACT Math, 3 apps shipped, VEX Worlds Qualified) land the core message fast and credibly.

**Premium / generic / unfinished?** It is *premium-leaning but conventional*. Nothing looks broken or amateur. But there is no signature moment — no single interaction or scene a visitor would screenshot and remember. That is the gap between "nice portfolio" and "award-level."

**Biggest opportunity.** The **content is genuinely excellent and rare for someone this early** — a Worlds-qualified robotics lead who *also* shipped a real internship product (Chrome extension live on the Web Store + iOS/Android apps + Stripe + Supabase + Cloud Run) *and* has 5,000+ game plays. That is a strong, true story. The opportunity is to wrap that substance in a cinematic, interactive "engineering" world so the *presentation* finally matches the *substance*.

**Biggest risk.** Over-decorating. The last few iterations swung between "too plain" and "too busy" (the ambient shapes / aggressive 3D fly-in were just reverted). The redesign must be *cinematic with restraint* — one or two strong ideas executed flawlessly, not ten effects competing. The second risk is **performance and asset quality**: raw `<img>` tags with ~400 KB JPGs, a 2.1 s preloader, and a missing flagship screenshot will quietly cap the "award" ceiling no matter how good the motion is.

**Enough info to become a premium interactive site?** ✅ Yes — the written content, projects, and credibility are more than enough.

**Enough visual assets for a cinematic redesign?** ⚠️ Partially. There are real robotics photos and game cover art (Matt-owned, license-safe), but they are inconsistent in crop/quality, the **Instant Quote internship screenshot is missing**, and there is **no cinematic hero-grade imagery or 3D scene asset**. Asset sourcing/generation is needed before the redesign can hit award level.

**Enough content for a conversion-focused redesign?** ✅ Yes, with one tweak: the "ask" is currently broad ("internships, project-based work, mentorship, conversations…"). Sharpening the primary conversion goal will materially improve results.

**Verdict:** Strong foundation, excellent content, safe assets, conventional presentation. **Ready to plan the redesign. Needs an asset pass (real screenshots + cinematic/3D direction) before or alongside the build.**

---

## 2. Current Site Purpose

- **Who/what it represents:** Matthew Wolf — a high-school / early-college developer in Union, KY. Personal brand / portfolio (effectively "MattBrand").
- **What it's trying to get users to do:** Read his story, trust his ability, and reach out.
- **Primary conversion goal (current):** Email contact (`mailto:` button is the single dominant CTA; also GitHub / LinkedIn).
- **Secondary goals:** GitHub follows / repo views, LinkedIn connection, general credibility / "remember this kid."
- **Obvious within 5 seconds?** ✅ Yes — hero headline + proof strip make the who/what clear immediately.
- **Is the offer clear?** ⚠️ Mostly. *Who he is* is clear; *what he wants from you* is broad. The contact copy lists five different things he's open to, which dilutes the call to action.
- **Does it feel trustworthy?** ✅ Yes — specific, verifiable proof (Worlds qualification, named team 3009H, Chrome Web Store app, real GitHub links, real GPA/ACT). Trust is one of this site's strongest traits.

**Assumption (labeled):** The true business goal is most likely **landing internships / paid software work and standing out for college/recruiting**, not selling a product. The redesign should optimize for *"a founder, recruiter, or engineer trusts him in 30 seconds and emails him."*

---

## 3. Current Page Inventory

This is a **single-route application** (`/`). All content is sections on one long page with anchor navigation. There are no secondary routes, no `/projects/[slug]`, no blog.

### Route: `/` (homepage — the entire site)

Rendered section order (`src/app/page.tsx`): Preloader → ScrollProgress → SectionRail → Navbar → **Hero → Stats ("Proof") → Marquee → Projects → Games → About → Skills → Experience → Contact** → Footer.

| Section | Purpose | Main elements | CTA | Content quality | Visual quality | UX issues | SEO issues | A11y issues | Perf risks | Opportunity |
|---|---|---|---|---|---|---|---|---|---|---|
| **Hero** | First impression / positioning | Word-by-word animated H1, subhead, "View Projects" + "Contact" buttons, MW 3D monogram (desktop), scroll cue | View Projects / Contact | Strong, specific | Good; 3D is the one distinctive element | 3D sits behind text low-contrast; no single "wow" beat | Only H1 on page; fine | Headline animates in (fine, content present) | WebGL lazy/desktop-only (good); preloader delays first paint 2.1s | This is where the cinematic signature scene belongs |
| **Stats / "Proof"** | Credibility numbers | 4 CountUp numbers + proof points strip | — | Excellent, true | Clean | "Proof" label tiny | Numbers not in semantic list | CountUp ok; reduced-motion ok | Negligible | Could become an animated "credential reveal" beat |
| **Marquee** | Texture / keyword scroll | Infinite scrolling tag strip | — | Filler | Decorative | Low information value | Duplicated text (aria) | pause-on-hover only (no keyboard) | Cheap CSS | Could carry tech logos / awards instead of filler words |
| **Projects ("Selected work")** | Show real work | 3 big alternating image rows (featured) + CodeShowcase + "More work" grid | "View project" (GitHub) | Excellent | Mixed — robotics photos good, **Instant Quote image missing → placeholder**, code excerpt nice | Featured Instant Quote shows generic placeholder for the *flagship* project | Image `alt` = title only (weak); no project detail pages for depth | Text-over-image contrast on hover sheen | ~400 KB JPGs, raw `<img>`, parallax + reveal per row | Biggest upgrade target: real product screenshots + case-study depth |
| **Games** | Range / playful proof | 4 tilt/spotlight cards w/ Roblox cover art | Roblox links | Good, specific | Cover art varies in quality | Two games have no link (dead-end cards) | Thin alt text | Tilt is hover-only | 438 KB PNG (tower-offense) | Could be a fun "arcade" interactive moment |
| **About ("How I build")** | Philosophy / human | Masked heading + scroll-reveal paragraph, "Building toward / Learning / Education" columns | — | Strong, authentic voice | Clean editorial | Dense text block | Good landmark | Scroll-reveal text dims until in view (ok) | Light | Could become a scroll-narrated "operating principles" beat |
| **Skills** | Capability scan | 4 grouped skill chip clusters | — | Good | Plain chips | Generic chip wall | Fine | Fine | Light | Could be a categorized, animated capability map |
| **Experience** | Track record | Timeline (5 roles w/ bullets) | — | Excellent, specific | Plain | Long; no visual timeline rail | Good (semantic) | Fine | Light | Could be a vertical scroll timeline with progress |
| **Contact** | Convert | Heading + body + Email/GitHub/LinkedIn buttons | **Email me** (primary) | Good | Clean, centered | Broad ask dilutes CTA; no form option | Fine | Buttons labeled | Light | Sharpen to one primary ask; optional lightweight form |
| **Footer** | Close / utility | © + location + social icons | Social | Adequate | Minimal | Fine | Could add sitemap links once multi-page | Icon-only links have aria-labels (good) | None | Fine |

---

## 4. Current User Journey

**Likely entry:** A link Matt shares directly (LinkedIn, application, DM, résumé), or a recruiter/founder Googling his name. Organic discovery is low (single page, no SEO surface, no blog).

**Current journey:**
`Entry → Preloader (2.1s brand draw) → Hero (positioning) → Proof (numbers) → Marquee → Projects (robotics + internship + builds) → Games → About → Skills → Experience → Contact (email)`

- **What they see first:** A logo-draw preloader, then the animated headline + 3D monogram. Within seconds they understand *who* and *what*.
- **What they should understand:** "Young but unusually capable across robotics, shipped software, and AI."
- **What they should trust:** The proof strip + named team + live Chrome Web Store app + GitHub links.
- **What they should click:** A project's GitHub link, or the Email CTA.
- **Where confusion / drop-off can happen:**
  1. **Preloader** adds 2.1 s before content on first load — momentum tax for impatient recruiters.
  2. **The flagship "Instant Quote" featured row shows a branded placeholder, not a screenshot** — the single most impressive item visually under-delivers.
  3. **Marquee + Games** mid-page can feel like a momentum dip between heavy-hitting Projects and the closing pitch.
  4. **Contact ask is broad** — visitor isn't told the *one* thing to do.
- **Where it creates interest:** Hero 3D + word reveal; the proof numbers; the robotics Worlds story; the code excerpt.
- **Where it loses momentum:** The decorative marquee, the un-linked games, and the long flat skills/experience stretch with no visual escalation toward the CTA.

**Missing from the journey:** A **problem → transformation → payoff** arc. Right now it's a flat list (here's me, here's my stuff, here's my email). Award-level sites tell a *story that builds* toward the CTA. There is no emotional or narrative escalation.

---

## 5. Likely User Types / Personas

> No fake demographics — these are intent-based.

### Persona A — Startup founder / small-business owner (hiring builder energy)
- **Wants:** Someone who *ships*, cheaply and fast, without hand-holding.
- **Fears:** A "student" who needs supervision and never finishes.
- **Needs to see before trusting:** Real shipped product (the Instant Quote internship is gold here), live links, evidence of independent execution.
- **Would leave if:** It reads like a school project or résumé with no shipped proof.
- **Would convert if:** They see "this person already shipped a real product to real stores" + an easy email.
- **Sections that matter most:** Projects (Instant Quote), Experience, Proof.
- **Proof they need:** Live app links, store presence, "100+ records / Stripe / Supabase" specifics.
- **Tone:** Confident, plain, results-first.

### Persona B — Engineering manager / technical recruiter
- **Wants:** Signal of raw ability + trajectory, fundamentals, code.
- **Fears:** Hype with no substance; AI-generated fluff.
- **Needs to see:** Actual code (the CodeShowcase helps), C++/robotics depth, structured thinking.
- **Would leave if:** Buzzwords without artifacts, or broken links.
- **Would convert if:** GitHub depth + a clear "here's how I think" (PID auto-tuner story is perfect).
- **Sections that matter most:** Projects + GitHub, Skills, About (how I build).
- **Proof they need:** Repos, the engineering-notebook / award detail, the PID case study.
- **Tone:** Technical, humble-but-sharp, evidence-driven.

### Persona C — Robotics / VEX / college program contact
- **Wants:** Leadership + competition credibility.
- **Fears:** Over-claiming.
- **Needs to see:** Team (3009H), Worlds qualification, awards, role clarity (lead programmer/driver/notebooker).
- **Would convert if:** It's clearly a real, decorated competitor with documented systems.
- **Sections:** Proof, Robotics projects, Experience.
- **Tone:** Specific, accomplishment-forward.

### Persona D — Peer / fellow builder / "found him online"
- **Wants:** Inspiration, to follow his build-in-public journey.
- **Converts as:** GitHub follow, social connection.
- **Sections:** Games, About, Projects.
- **Tone:** Authentic, energetic.

**Design implication:** Personas A & B are the **money personas** (internships, paid work, recruiting). The redesign's hero, first project, and CTA should be tuned to *them*: ship-proof first, code-proof second, easy single ask.

---

## 6. Current Brand and Visual System

Pulled from `globals.css`, `tailwind.config.ts`, and components.

- **Colors (HSL tokens):** Background `30 4% 7%` (near-black warm charcoal), foreground `36 6% 96%`, card `30 4% 11%`, muted-fg `33 5% 67%`, **primary/accent orange `20 90% 54%`** (also `--robotics`, `--ring`). Borders `30 4% 20%`. A faint warm radial glow top-right and a cinematic vignette.
- **Typography:** **Clash Display** (Fontshare) for headings — angular, technical, a genuine differentiator vs. default Inter portfolios. **Inter** for body. **JetBrains Mono** for labels/metadata. Tracking-tight, `text-wrap: balance` on headings.
- **Buttons:** CVA variants; default = orange w/ premium hover lift + glow shadow; outline variant for secondary. Magnetic wrapper on key CTAs.
- **Spacing:** Tailwind scale; container max ~1100px, `1.5rem` padding; generous `py-16 sm:py-24` section rhythm.
- **Layout:** Centered single column, alternating image/text featured rows, responsive grids. Conventional but clean.
- **Cards:** shadcn-style; SpotlightCard adds cursor-follow sheen + slight 3D tilt.
- **Borders / shadows / gradients:** Hairline `border-border`; soft glow shadows on hover; gradient "swell" on alternating sections (`.sec-alt`) for seamless blending.
- **Backgrounds:** Matte base + fixed radial glow + vignette + fine SVG film grain (soft-light, 6% opacity).
- **Image style:** Real robotics photography (dark, competition) + Roblox cover art — inconsistent in crop/lighting/quality.
- **Icon style:** Lucide (consistent, clean line icons).
- **Motion:** Framer Motion reveals, masked text, count-ups, word-by-word headline, parallax media, marquee, magnetic buttons, custom cursor, R3F 3D monogram, Lenis smooth scroll, logo-draw preloader. Tasteful, plentiful, recently *calmed*.
- **Overall mood:** Premium-minimal, dark, warm-technical, controlled.

### Current visual identity summary
- **Current mood:** Dark, warm-charcoal, technical-minimal, controlled, "serious young engineer."
- **Current strengths:** Cohesive token system; Clash Display gives an ownable type voice; the MW monogram (SVG + 3D + preloader draw) is a real brand mark; restrained motion; orange accent is confident.
- **Current weaknesses:** No distinct *world* or metaphor; looks like a (very good) member of the "dark portfolio" genre; assets are inconsistent; no signature interaction; flat narrative.
- **What to preserve:** Matte-charcoal + orange palette; the MW monogram as the brand anchor; Clash Display; reduced-motion discipline; the calm hero that was just restored.
- **What to remove:** Dead CSS (`.aurora`, `.text-shimmer`), dead components (`aurora-background.tsx`, `scroll-background.tsx`), the unused 890 KB `logo.png.png`, filler marquee text.
- **What feels generic:** Section rhythm, skill chip walls, the "list of cards" project pattern, generic placeholder for the flagship project.
- **What feels ownable:** The MW monogram, the orange-on-matte, the robotics+software dual story, Clash Display.
- **What needs a stronger system:** A real *atmosphere/metaphor* (an "engineering workshop / command center / build log" world), consistent asset treatment, and one signature interactive scene.

---

## 7. Current Content and Copy Audit

The copy is **one of the strongest things about this site** — specific, true, and human. (Recent passes deliberately scrubbed em dashes and colons; the voice is plain and confident.)

| Area | Current | Diagnosis |
|---|---|---|
| **Hero headline** | "I build robotics, automation, and AI tools." | Clear, specific, believable. Slightly *list-like* and flat — states *what*, not *why it matters* or *what's different*. Good, not unforgettable. |
| **Subheadline** | "High school developer and VEX robotics lead programmer." | Honest and credibility-forward (the "high school" framing is a double-edged sword — see below). |
| **CTAs** | "View Projects", "Contact", "Email me", "Get in touch" | Functional. Generic. No value proposition in the button. |
| **Proof strip** | 5,000+ plays / 4.0 GPA / 33 ACT Math / 3 apps shipped + Worlds Qualified / Lead Programmer / PID tuner | Excellent, concrete, true. Best copy on the site. |
| **Projects** | Specific, technical, honest (e.g., "cut tuning from days to ~1–5 minutes", "live on the Chrome Web Store") | Strong. Believable. Private items handled tastefully (lock icon, no link). |
| **About ("How I build")** | "I'm not trying to look like a finished expert. I'm building proof through real projects…" | Authentic, mature, disarming. Real voice — does *not* sound AI-generated. Keep. |
| **Contact** | "open to internships, project-based work, mentorship, robotics/software opportunities, and conversations…" | **Weakest for conversion** — five asks at once. Pick one primary. |
| **Footer / microcopy** | "built with Next.js", mono labels | Fine; the "built with Next.js" is a small humble flex, acceptable. |
| **Nav labels** | Projects / Games / About / Skills / Experience / Contact | Clear, conventional. |

### Copy diagnosis (weak/vague → stronger direction)
- **Hero is a list, not a hook.** *Direction:* lead with the rare combination + outcome, e.g. a headline that fuses "Worlds-qualified robotics" + "shipped real software" so the differentiator (range + shipping) hits in one line. (Draft new options in Prompt 2; don't fabricate claims.)
- **Buttons say nothing.** *Direction:* outcome-oriented CTA copy ("See what I've shipped", "Start a conversation").
- **"High school developer" everywhere.** *Direction:* it's a powerful *story* but a potential *filter*. Consider leading with capability/shipping and letting "high school" be the jaw-drop *reveal*, not the first label. (Matt's call — flag, don't decide.)
- **Contact ask is diffuse.** *Direction:* one primary ("Email me about internships & build work"), socials secondary.
- **Marquee text is filler.** *Direction:* replace with real signal (tech stack, stores shipped to, awards) or cut.

> **No fabricated proof.** Do not add fake testimonials, fake client logos, fake awards, or fake metrics. Where social proof is missing (e.g., recommendations), use clearly-labeled placeholders and ask Matt for real quotes (a coach, internship mentor, or teacher).

---

## 8. Current SEO and Semantic Audit

From `layout.tsx` metadata + file inventory.

**Present:**
- `<title>` = `Matthew Wolf · {role}`; meta description = positioning line. ✅
- Open Graph (title, description, type, siteName) + Twitter card (`summary_large_image`) declared. ✅ *but* **no OG/Twitter image** and **no `metadataBase`** → social shares render imageless and relative URLs can warn.
- `keywords` array, `authors`, `robots: index/follow`. ✅
- Semantic landmarks: `<header> <main> <footer> <nav> <section id>`. ✅ Good.
- Single `<h1>` (hero), `<h2>`/`<h3>` hierarchy below it. ✅ Clean.
- `icon.svg` favicon present. ✅
- Image `alt` text present (set to project/game title). ⚠️ Minimal but non-empty.

**Missing / weak:**
- ❌ **No `robots.txt`** (no `app/robots.ts` or `public/robots.txt`).
- ❌ **No `sitemap.xml`** (no `app/sitemap.ts`).
- ❌ **No `manifest.json`** / PWA metadata.
- ❌ **No OG share image** (`app/opengraph-image`) → links look bare when shared.
- ❌ **No structured data** (JSON-LD `Person` schema would be ideal for a named individual).
- ⚠️ **Single-page = thin topical surface.** One URL can rank for "Matthew Wolf" but nothing else; no room to rank for "VEX robotics programmer", "Chrome extension developer", project-specific queries.
- ⚠️ `alt` text is title-only; not descriptive.
- ⚠️ Raw `<img>` (no `next/image`) means no automatic responsive/AVIF — indirectly a Core Web Vitals (LCP) risk that affects SEO.

**Outputs:**
- **SEO strengths:** Clean metadata basics, correct semantics, indexable, fast-ish, real unique content, single H1.
- **SEO weaknesses:** No sitemap/robots/OG image/schema; single thin route; minimal alt text; unoptimized images.
- **Highest-impact SEO improvements:** (1) Add `app/sitemap.ts` + `app/robots.ts`; (2) add `app/opengraph-image.tsx` (dynamic OG card with name + role + monogram); (3) add JSON-LD `Person` schema (name, jobTitle, alumniOf, sameAs: GitHub/LinkedIn); (4) set `metadataBase`; (5) richer descriptive `alt` text; (6) move to `next/image`.
- **Suggested metadata direction:** Keep name-forward title; add a sharper description that names the *combination* (robotics + shipped software). Per-section anchors are fine for one page; if project detail pages are added later, give each its own title/description/OG.
- **Suggested page/topic structure (future):** Optional `/projects/instant-quote`, `/projects/robotics` case-study pages would add rankable depth and let recruiters deep-link.
- **Suggested schema:** `Person` (primary), `CreativeWork`/`SoftwareApplication` per project, `BreadcrumbList` if multi-page.
- **Content gaps to fill:** A short "writing/build log" or case-study page would dramatically expand SEO surface and feed Persona B.

> Do not keyword-stuff. The win here is *structure + share image + schema*, not keyword density.

---

## 9. Current Accessibility Audit

**Strengths (genuinely good):**
- `:focus-visible` outline in accent color, global. ✅
- `prefers-reduced-motion` respected widely (CSS animations, count-up, parallax, cursor, marquee, aurora, logo-draw). ✅ Strong discipline.
- Nav: `aria-label`, `aria-expanded`, Escape-to-close, 48px mobile tap targets. ✅
- Icon-only links carry `aria-label`. ✅
- Logo SVG has `role="img"` + `aria-label`. ✅
- Semantic landmarks. ✅

**Issues / risks:**
| Issue | Severity | Note |
|---|---|---|
| **Custom cursor sets `cursor: none !important`** site-wide on fine pointers | Medium | Hiding the native cursor can disorient some users and breaks the OS pointer; ensure it never applies on touch (it doesn't) and consider a setting/escape. |
| **`mix-blend-difference` cursor** | Low | Can become low-contrast over mid-tones. |
| **Text/sheen over images** in project rows on hover | Medium | Contrast over photos isn't guaranteed; verify WCAG AA on captions/badges over imagery. |
| **`muted-foreground` (33 5% 67%) on dark** for small text | Medium | Likely passes AA for normal text but verify; mono labels at 11px are borderline for readability. |
| **Marquee / tilt / spotlight are hover-only** | Low–Med | No keyboard equivalent, but they're decorative; ensure no *information* is hover-gated (it isn't). |
| **Preloader** blocks content 2.1s | Low (a11y) | Content is present in DOM; fine for SR, but a skip/instant path for repeat visits is good (it's session-gated — ok). |
| **WebGL (3D monogram)** | Low | Desktop+reduced-motion gated; tablet gets flat watermark fallback. ✅ Good. Ensure a non-WebGL fallback remains in redesign. |
| **Animated headline (word reveal)** | Low | Content renders; fine. |

**Fix priority:** (1) Verify contrast of text/badges over project images and of muted text; (2) make the custom cursor more clearly optional/robust; (3) keep all reduced-motion fallbacks when adding new motion.

**What must NOT be broken during the visual upgrade:** the reduced-motion fallbacks, focus-visible outlines, semantic landmarks, nav keyboard support, and the WebGL→flat fallback. These are the site's accessibility backbone — the cinematic layer must be additive, never a hard dependency.

---

## 10. Current Performance / Technical Audit

**Stack:** Next.js 14.2.15 (App Router), React 18.3.1, TypeScript 5.6, Tailwind 3.4, Framer Motion 11, Lenis 1.3, React Three Fiber 8.18 + drei 9.122 + three 0.169, lucide-react, CVA. Strict mode on. Last measured production build: route `/` ≈ **22.6 kB**, **First Load JS ≈ 150 kB** (Three.js is lazy/desktop-only and not in that number until loaded).

**Strengths:**
- 3D is `dynamic(..., { ssr:false })` + desktop/pointer/reduced-motion gated → WebGL never blocks first paint or mobile. ✅ Excellent decision.
- Small base bundle; mostly static prerender.
- Film grain is a tiny inline SVG data-URI (GPU-cheap). ✅
- `loading="lazy"` + `decoding="async"` on project images. ✅
- Reduced-motion short-circuits heavy effects. ✅

**Weaknesses / risks:**
| Risk | Impact | Note |
|---|---|---|
| **Raw `<img>` (no `next/image`)** | Med–High | No automatic AVIF/WebP, responsive `srcset`, or blur placeholder. JPGs are 337–427 KB each; PNG `tower-offense.png` is 438 KB. LCP/bandwidth hit, especially mobile. |
| **`logo.png.png` (890 KB, double extension, unused)** | Low (ship hygiene) | Dead 890 KB file in `public/`. Remove. |
| **Unused image spares** `controller.jpg`, `robot-dark.jpg` | Low | Not referenced in `projects.ts`. |
| **Missing `instant-quote.jpg`** | Med (quality) | Referenced but absent → flagship shows placeholder. |
| **Preloader 2.1s** | Med | First-load momentum tax; session-gated (only once). Consider shortening / making skippable. |
| **Many global listeners** | Low–Med | Lenis + custom cursor `pointermove`/`pointerover` + multiple scroll listeners + several `useScroll` instances. Fine now; watch if more 3D/scroll-linked scenes are added. |
| **Dead code** | Low | `aurora-background.tsx`, `scroll-background.tsx`, `.aurora` + `.text-shimmer` CSS ship/parse for nothing. |
| **`new Date()` in Footer** | Negligible | Client-only; fine. |

**Outputs:**
- **Technical strengths:** Lean, modern, well-gated 3D, reduced-motion aware, mostly static.
- **Technical weaknesses:** Image pipeline (the big one), dead assets/code, preloader cost.
- **Must protect during cinematic redesign:** The lazy/gated WebGL pattern, the ~150 kB base budget mindset, SSR/static rendering of content, reduced-motion fallbacks.
- **Performance budget recommendation:** Keep **First Load JS < ~180 kB** for the content shell; load any heavy 3D/scene **after** first paint, **desktop-gated**, with a flat fallback. Target **LCP < 2.5 s**, **CLS < 0.1**, hero interactive quickly.
- **What can be safely animated:** Transforms/opacity (GPU), scroll-linked `useTransform`, the monogram, SVG draws, masked text. ✅
- **What should stay simple (mobile especially):** No heavy WebGL on mobile; static or lightweight CSS motion only.
- **What should be lazy-loaded:** Any 3D scene, large imagery, the code-showcase, below-the-fold media.
- **What should have a fallback:** Every WebGL/canvas scene → flat image/SVG; every scroll-scene → readable static layout.

---

## 11. Current UI/UX Problems (prioritized)

| # | Problem | Why it matters | Severity | Fix direction |
|---|---|---|---|---|
| 1 | **Flagship "Instant Quote" project shows a placeholder, not a screenshot** | The most impressive, recruiter-relevant item visually under-delivers | **High** | Add real (sanitized) product screenshots / store badges; treat as the hero case study |
| 2 | **No signature moment** | Nothing memorable → "nice" not "award" | **High** | One cinematic, on-brand interactive scene (see Section 13) |
| 3 | **Broad, diffuse CTA / ask** | Diluted conversion | **High** | One primary ask + secondary socials; outcome-oriented button copy |
| 4 | **Flat narrative (list, not story)** | No escalation toward CTA | **High** | Restructure to problem → transformation → proof → CTA arc (Section 14) |
| 5 | **Image pipeline (raw `<img>`, big JPGs)** | LCP/perf + visual inconsistency | **Med-High** | `next/image`, consistent crops/treatment, compress |
| 6 | **Preloader 2.1s tax** | Momentum loss for busy recruiters | **Med** | Shorten (~1–1.2s), skippable, or only on first-ever visit |
| 7 | **Marquee = filler** | Wastes a prime slot | **Med** | Replace with real signal or remove |
| 8 | **Un-linked game cards** | Dead-ends, mild trust ding | **Med** | Label "in development" clearly or link a video/screens |
| 9 | **Generic skills chip wall** | Low differentiation | **Med** | Categorized capability map with light motion |
| 10 | **Custom cursor hides native pointer** | Disorientation risk | **Med** | Make robust/optional; ensure always-visible affordance |
| 11 | **Long flat skills/experience stretch** | Momentum dip before CTA | **Med** | Visual timeline + escalating rhythm |
| 12 | **Alt text = title only** | A11y + SEO | **Low-Med** | Descriptive alt |
| 13 | **Dead code/assets** | Hygiene/perf | **Low** | Remove aurora/scroll-background/text-shimmer/logo.png.png |
| 14 | **"High school" framing front-loaded** | Possible filter for some viewers | **Low (strategic)** | Consider making it a *reveal* — Matt's call |

---

## 12. Current Design Scorecard (1–10)

| Category | Score | Why |
|---|---:|---|
| Design quality | **7** | Cohesive, polished, premium-leaning; conventional dark-portfolio genre, no signature look |
| UX/UI clarity | **8** | Clear single-page, good nav + scrollspy, scannable |
| Creativity / originality | **5** | Competent and familiar; MW 3D monogram is the one distinctive idea |
| Content quality | **9** | Specific, true, rare combination, authentic voice — the standout |
| Structure / navigation | **8** | Logical order, anchor nav, section rail, scroll progress |
| Functionality | **8** | Everything works; graceful fallbacks; few failure surfaces |
| Interactivity | **6** | Cursor, magnetic, tilt, parallax, 3D — present but decorative; no signature interaction |
| Overall experience | **7** | Smooth and pleasant; not memorable |
| SEO / semantic markup | **5** | Good basics + semantics; no sitemap/robots/OG image/schema; thin single route |
| Accessibility | **7** | Strong focus + reduced-motion + nav a11y; cursor-hide + contrast-over-image risks |
| Performance / WPO | **6** | Lazy/gated 3D + small bundle, but unoptimized images + preloader tax |
| Responsive design | **8** | Desktop-gated 3D, mobile menu, fluid type, 48px targets |
| Animation / transitions | **7** | Plentiful, tasteful Framer Motion; competent, not jaw-dropping |
| Brand alignment | **7** | MW monogram + orange-on-matte is ownable; brand *world* is thin |
| Conversion effectiveness | **6** | Clear single CTA but broad ask, no urgency/tailoring |
| Asset quality | **5** | Real but inconsistent; flagship screenshot missing; no cinematic/hero imagery |
| Licensing safety | **9** | Assets appear Matt-owned; fonts open-source — very safe (one thing to confirm: rights to team competition photos) |

**Current overall (avg): ≈ 6.8 / 10** — "a very good conventional portfolio."
**Realistic target after redesign: 8.5–9.2 / 10** — award-submittable, with the content already carrying it.

**Top 5 improvements (biggest difference):**
1. One signature cinematic/interactive scene tied to a real metaphor.
2. Real Instant Quote (and robotics) imagery + consistent asset treatment.
3. Narrative restructure: problem → transformation → proof → CTA.
4. Sharpen the conversion ask + CTA copy.
5. SEO/share layer (sitemap, robots, OG image, `Person` schema) + `next/image`.

**Top 5 "more premium":**
1. A cohesive atmosphere/world (workshop / command-center / build-log) instead of generic dark sections.
2. Cinematic hero scene (3D or scroll-choreographed) with restraint.
3. Consistent, color-graded imagery (all assets share one treatment).
4. Editorial typography moments (big Clash Display kinetic beats — used sparingly).
5. Micro-interaction polish with intent (every motion earns its place).

**Top 5 "convert better":**
1. Lead with shipped proof (Instant Quote) for founder/recruiter personas.
2. Single, outcome-oriented primary CTA.
3. Add real social proof (a mentor/coach quote — real, not invented).
4. Sticky/persistent "Email me" affordance.
5. Reduce first-load friction (preloader) so the pitch starts faster.

---

## 13. Cinematic / Award-Level Opportunity Analysis

> Formula: *"As the user scrolls, [main object] transforms from [problem state] into [solution state], revealing [business story]."*
> The metaphor must come from **Matt's actual story: building working systems** — robotics autonomy, shipped software, AI tools. Not random 3D for cool's sake.

### Concept 1 — "The Build Log" (Safe premium)
- **Concept Name:** The Build Log / Engineer's Desk.
- **Core Visual Metaphor:** An engineer's workspace where ideas become shipped systems.
- **Main Object / Scene:** The **MW monogram** as a precision-machined metal object on a matte surface under soft studio light (extends what already exists), plus an atmospheric "desk/workshop" depth.
- **Problem State:** Scattered parts / unlit scene / a blank schematic.
- **Transformation:** As you scroll, the scene *assembles and lights up* — schematic lines draw, the monogram catches a moving highlight, sections "power on."
- **Solution State:** A fully-lit, confident brand object surrounded by organized proof.
- **Business Meaning:** "I turn scattered problems into finished, working systems."
- **Possible Hero Scene:** The current calm 3D monogram + a subtle assembling-schematic backdrop and a moving key light.
- **Possible Scroll Journey:** Hero (object lit) → Proof (numbers count up as "instruments") → Projects (each a "module" that docks in) → CTA.
- **Sections Supported:** All current ones, lightly themed.
- **Assets Needed:** Refined 3D monogram (have it), an SVG schematic/grid system (code-made), one studio HDRI (Poly Haven, CC0) for nicer reflections, real screenshots.
- **Difficulty:** Low–Medium. **Performance Risk:** Low (mostly current tech + SVG). **Mobile Fallback:** Static lit monogram + clean sections.
- **Why it could work:** Builds on existing strengths, low risk, clearly on-brand, ships fast.
- **Why it could fail:** Might still read "nice, not wow" if the lighting/atmosphere isn't pushed.

### Concept 2 — "Autonomy → Shipped" scroll film (More cinematic/interactive)
- **Concept Name:** From Robot to Product.
- **Core Visual Metaphor:** The throughline of Matt's range — a **path/trajectory** that starts as a robot's autonomous route and *morphs into a software pipeline / shipped app flow.*
- **Main Object / Scene:** A glowing **line/path** (orange) on a dark field. Early: it traces an odometry-style autonomous route around field elements (robotics). Mid: the same line straightens into a **data/CI pipeline** with nodes (automation). Late: it resolves into an **app UI flow** (shipped product).
- **Problem State:** A raw, jittery path finding its way (the hard, unsolved problem).
- **Transformation:** Scroll smooths and re-purposes the line — robotics route → pipeline → product flow.
- **Solution State:** A clean, lit product screen / "shipped" state with the monogram seal.
- **Business Meaning:** "I take things from hard autonomous problems all the way to shipped products."
- **Possible Hero Scene:** The line begins drawing immediately; headline over it.
- **Possible Scroll Journey:** Hero (path appears) → Robotics (path = autonomous route) → Automation/AI (path = pipeline) → Internship product (path = app flow) → Proof → CTA.
- **Sections Supported:** Projects/Experience map perfectly onto the three line-states.
- **Assets Needed:** Mostly **SVG path animation + Framer/GSAP** (code-made, license-free!), optional light 3D nodes, real screenshots at the "shipped" beat.
- **Difficulty:** Medium. **Performance Risk:** Low–Medium (SVG/canvas line is cheap; keep it 2D for mobile). **Mobile Fallback:** A simpler vertical animated line or static milestone markers.
- **Why it could work:** It's a *true* metaphor for his actual differentiator (range + shipping), mostly code-built (no asset/licensing risk), and genuinely original.
- **Why it could fail:** Requires careful choreography; a sloppy line animation reads worse than none.

> **Recommended primary direction: Concept 2.** It's original, on-brand, conversion-relevant (it literally narrates "I ship"), and mostly buildable in code with no licensing exposure.

### Concept 3 — "Command Center" (Bold award-style)
- **Concept Name:** MattOS Command Center.
- **Core Visual Metaphor:** A personal operating system / mission-control for a builder (ties to his real "MattOS" and "Jarvis" projects).
- **Main Object / Scene:** A dark **command-center HUD** — glass panels, an interactive 3D monogram core, live-feeling "modules" (projects) you can hover/click to expand, an ambient particle/grid field.
- **Problem State:** Panels dark/booting.
- **Transformation:** Scroll "boots the system" — modules power on, the core spins up, telemetry (his real stats) streams in.
- **Solution State:** A fully-online command center where every module is a real project/credential.
- **Business Meaning:** "I build systems that run themselves — here's mine."
- **Possible Hero Scene:** Boot sequence → core monogram online → "modules" hint below.
- **Possible Scroll Journey:** Boot → Core (positioning) → Telemetry (proof) → Modules (projects/games) → Operator (about) → Comms (contact).
- **Sections Supported:** All, re-skinned as "modules/telemetry/comms."
- **Assets Needed:** Custom glass/HUD UI (code-made), 3D core (extend monogram), particle field (R3F/shader), consistent screenshot framing, possibly one HDRI.
- **Difficulty:** High. **Performance Risk:** Medium-High (particles/shaders/WebGL — must be desktop-gated with strong mobile fallback). **Mobile Fallback:** A clean, non-WebGL "static dashboard" layout.
- **Why it could work:** Maximally memorable, deeply on-brand (literally his projects are "an OS"), high award ceiling.
- **Why it could fail:** Scope/performance risk; easy to tip into gimmick or sci-fi cliché; most asset/engineering effort.

**Cross-cutting guidance:** Whichever wins, **content stays readable and the WebGL is additive with a flat fallback.** Award juries reward *experience + usability + originality*, and they penalize sites that sacrifice clarity for spectacle.

---

## 14. Suggested Information Architecture (future site)

Keep it a **single immersive homepage** (works for this kind of personal brand) with an **optional case-study page or two** for SEO depth and recruiter deep-links.

**Homepage outline (narrative arc):**
1. **Cinematic hero** — positioning + signature scene (Concept 2 path begins).
2. **The problem / what I'm about** — short, punchy framing ("Most people talk about building. I ship.") — establishes tension/voice.
3. **Transformation / how I work** — the "autonomy → shipped" idea; the operating principles (from current About).
4. **Proof** — the animated numbers + credibility (early, to earn trust fast).
5. **Selected work** — featured case studies: **Instant Quote (shipped product)** first for money personas, then **Robotics/Worlds**, then AI tools; "more work" grid below.
6. **Process / range** — robotics → automation → AI → games (shows breadth; the line metaphor's three states).
7. **Experience timeline** — visual vertical timeline.
8. **Objection handling / FAQ** *(optional)* — "Isn't he just a student?" answered with shipped evidence; availability.
9. **Final CTA** — one primary ask + socials; persistent email affordance.
10. **Footer** — utility, sitemap (once multi-page), socials.

**Other pages (optional, phase 2):** `/work/instant-quote`, `/work/robotics` case studies (depth + SEO + deep-links); maybe `/log` build-log.

**Navigation:** Keep anchor nav for the homepage; add real routes only if case-study pages ship. **CTA strategy:** persistent "Email me" in nav + a strong closing CTA; secondary GitHub/LinkedIn. **Where cinematic elements belong:** hero + the three "transformation" beats. **Where normal clear content belongs:** proof, work details, experience, contact (never gate information behind animation). **Where proof appears:** early (numbers) + within each case study. **Where SEO content appears:** case-study pages + descriptive alt + schema. **Where conversion elements appear:** nav (persistent), end of hero, and final CTA.

> Principle: **usability is never sacrificed for visuals.** The cinematic layer sits *on top of* a site that already works with motion off.

---

## 15. Asset Inventory

All paths under `Desktop/portfolio/`.

| Asset | Path | Type | Apparent use | Quality | Premium-ready? | Final asset? | Inspiration-only? | Replace? | Optimization | Licensing |
|---|---|---|---|---|---|---|---|---|---|---|
| MW monogram (SVG) | `src/components/brand/logo.tsx` | Inline SVG | Brand mark (nav, preloader, placeholders, 3D source) | High | ✅ Yes | ✅ Yes | — | No — **center of the system** | None (code) | Matt-owned ✅ |
| MW monogram (3D) | `src/components/three/mw-3d.tsx` | R3F geometry | Hero 3D | High | ✅ Yes | ✅ Yes | — | No — refine lighting | Keep desktop-gated | Matt-owned ✅ |
| `logo.png.png` | `public/logo.png.png` | PNG, 890 KB | **Unused** (double extension) | Low | ❌ | ❌ | — | **Delete** | Remove | Matt-owned |
| `robotics.jpg` | `public/projects/` | JPG, 418 KB | Featured row 1 | Med | ⚠️ With grading | ✅ if owned | — | Keep, regrade/compress | `next/image`, compress | **Confirm Matt owns** ⚠️ |
| `competition.jpg` | `public/projects/` | JPG, 428 KB | Featured row 2 | Med | ⚠️ With grading | ✅ if owned | — | Keep, regrade/compress | Same | **Confirm rights** ⚠️ |
| `controller.jpg` | `public/projects/` | JPG, 338 KB | **Unused spare** | Med | ⚠️ | maybe | — | Use or remove | Same | Confirm rights ⚠️ |
| `robot-dark.jpg` | `public/projects/` | JPG, 344 KB | **Unused spare** | Med | ⚠️ | maybe | — | Use or remove | Same | Confirm rights ⚠️ |
| `instant-quote.jpg` | `public/projects/` (referenced) | **MISSING** | Flagship internship row | — | — | **Needed** | — | **Create/add** | — | Must be Matt's own sanitized screenshot |
| `dark-hours.png` | `public/games/` | PNG, 85 KB | Game card | Med | ⚠️ | ✅ if owned | — | Keep | Compress/convert | Matt-made (Roblox) ✅* |
| `tower-offense.png` | `public/games/` | PNG, 438 KB | Game card | Med | ⚠️ | ✅ if owned | — | Keep | **Compress (438 KB)** | Matt-made ✅* |
| `road-rage.png` | `public/games/` | PNG, 135 KB | Game card | Med | ⚠️ | ✅ | — | Keep | Compress | Matt-made ✅* |
| `find-the-cartoons.png` | `public/games/` | PNG, 136 KB | Game card | Med | ⚠️ | ✅ | — | Keep | Compress | Matt-made ✅* |
| `icon.svg` | `src/app/icon.svg` | SVG | Favicon | High | ✅ | ✅ | — | Keep | — | Matt-owned ✅ |
| Film grain | `globals.css` (data-URI) | SVG noise | Texture | High | ✅ | ✅ | — | Keep | — | Code ✅ |
| Fonts | Clash Display (Fontshare), Inter, JetBrains Mono (Google) | Web fonts | Type system | High | ✅ | ✅ | — | Keep | Subset/preload | Open-source ✅ |
| Content data | `src/data/*.ts` | TS data | All copy | High | ✅ | ✅ | — | Keep/refine | — | Matt-owned ✅ |

> *✅\* Roblox game screenshots: Matt built the games, so the *screenshots are his*. (If any cover art uses third-party models/assets inside Roblox, that's inside the game, not a website-licensing issue — but worth a glance.)

**Dead code (not assets, but ship hygiene):** `src/components/effects/aurora-background.tsx`, `src/components/effects/scroll-background.tsx`, `.aurora*` and `.text-shimmer` CSS in `globals.css` — defined, never imported/used.

---

## 15B. Current Asset Style Extraction

*Using the current assets to infer what the site already "wants to become."*

**MW monogram (SVG + 3D)** — *the strongest asset direction.*
- Visual world: precision, engineering, angular/technical.
- Mood: confident, sharp, controlled.
- Palette it supports: matte black/charcoal + white metal + orange accent.
- Materials/textures it suggests: brushed/precision metal, clearcoat, matte surfaces, machined edges.
- Lighting it suggests: studio key light + moving highlight (already implemented), dark surround.
- Motion it suggests: deliberate rotation, light sweeps, draw-on, assembly.
- Matching assets that strengthen it: a studio HDRI for cleaner reflections; a subtle machined-metal/concrete surface; an SVG schematic/grid backdrop.
- Search terms: "studio HDRI dark soft", "brushed aluminum PBR CC0", "blueprint schematic SVG", "machined metal product render".
- Original generated assets possible: SVG schematic field, code-built particle/grid, refined 3D lighting rig.
- Influence final redesign? **Yes — make it the centerpiece.**

**Robotics photos (`robotics.jpg`, `competition.jpg`, spares)** — *real but inconsistent.*
- Visual world: competition robotics, hands-on engineering.
- Mood: gritty, authentic, "real kid doing real work."
- Palette: dark venues, mixed color casts (need grading to match matte+orange).
- Materials: metal robot parts, field elements, controllers.
- Lighting: uneven event lighting (the weak link).
- Motion: could be subtle parallax / reveal (already used).
- Strengthen with: consistent color-grade pass (push toward warm-matte + orange), tighter crops, maybe a duotone treatment so they share one look.
- Search terms (for *complementary* B-roll only if needed, license-safe): "robotics close-up macro", "circuit board macro dark", "VEX-style robot detail" (prefer Matt's own).
- Generated assets: a consistent grade/overlay treatment in code (CSS blend) rather than new photos.
- Influence final redesign? **Yes, but only after a grading/consistency pass.**

**Roblox game covers** — *playful range proof.*
- Visual world: games, fun, breadth.
- Mood: energetic, colorful (off-brand vs. the matte system).
- Palette: varied/saturated → clashes with matte+orange.
- Strengthen with: a unified frame/treatment (matte border, slight desaturate-on-rest, color-on-hover) so they live in the system without losing their fun.
- Influence final redesign? **Yes, as a deliberately contrasting "play" zone** — contained, framed, not bleeding into the serious work.

**Summary:**
- **Strongest current asset direction:** the **MW monogram + precision-engineering** world (metal, matte, orange, studio light, schematic).
- **Weakest current asset direction:** the **inconsistent event-lit robotics photos** and **off-palette game covers** (need unifying treatment).
- **Assets that feel off-brand:** saturated game covers (until framed); any event photo with a strong non-orange color cast.
- **Assets to replace:** `logo.png.png` (delete), missing `instant-quote.jpg` (create), possibly regrade robotics photos.
- **Assets that should become the center of the visual system:** the **MW monogram (2D/3D)** + a code-built **schematic/precision** language around it.
- **Assets that can become part of a cinematic scroll experience:** the monogram (hero), the "autonomy→shipped" line (code), graded robotics imagery + real product screenshots as the "shipped" payoff beats.

---

## 15C. Visual Reference and Moodboard Plan

**Existing reference folders in project?** ❌ None found. There is no `/references`, `/inspiration`, `/moodboard`, `/brand`, `/competitors`, `/screenshots`, `/videos`, `/textures`, `/3d`, or `/models`. (Only `public/games/` and `public/projects/` hold real production images.)

**Recommendation:** create a `references/` tree (kept *out* of the production build) — see `REFERENCE_PACK_REQUEST.md` for the exact list and `references/README.md` (created this pass) for the on-disk scaffold.

### Reference Images Needed (grouped)

**1. Brand Mood References** — *premium, dark, technical, cinematic, precision, minimal, high-contrast, machined.*
- Why: lock the *atmosphere* (the thing the site currently lacks).
- Should show: dark studio product photography, machined metal, blueprint/schematic aesthetics, controlled lighting.
- Solves: "generic dark portfolio" → "owned engineering world."
- Search terms: "dark cinematic product photography", "machined metal studio", "blueprint UI dark", "precision engineering branding".
- Platforms: Awwwards, siteinspire, Land-book, Cosmos, Behance (inspiration only).
- Type: photos + site screenshots. Needed: **before redesign.**

**2. Layout References** — hero, sticky scroll sections, case-study layout, feature grid, timeline, contact, mobile.
- Why: structure the narrative arc cleanly.
- Search terms: "developer portfolio case study layout", "scroll storytelling layout", "product landing hero dark".
- Platforms: Awwwards (portfolio/developer), Lapa Ninja, Godly. Type: screenshots. Needed: **before.**

**3. Motion / Interaction References** — scroll reveal, SVG path draw, pinned/sticky section transitions, object assembly, magnetic hover, page/section transitions, cursor interaction, boot/loading sequence.
- Why: define the *feel* and the signature moment.
- Search terms: "GSAP ScrollTrigger path animation", "scroll storytelling website", "SVG line draw scroll", "WebGL scroll product reveal".
- Platforms: Awwwards inspiration, Codrops, YouTube (motion refs). Type: videos/recordings. Needed: **before (for the chosen concept).**

**4. Material / Texture References** — brushed metal, matte concrete, glass/HUD, carbon, circuit board, particles, soft fog, subtle grid.
- Why: feed shaders/overlays and the engineering atmosphere.
- Search terms: "brushed aluminum PBR CC0", "concrete matte texture CC0", "studio HDRI dark", "carbon fiber texture free".
- Platforms: **Poly Haven, ambientCG (CC0 — final-safe)**. Type: textures/HDRIs. Needed: **during build.**

**5. Object / Scene References** — the monogram core, robot/field elements, app UI / dashboard, pipeline/flow, command-center HUD, workshop/desk.
- Why: anchor the metaphor (Section 13).
- Search terms: "command center UI 3D", "data pipeline visualization", "robot odometry path diagram", "app onboarding flow UI".
- Platforms: Behance/Dribbble (inspiration only), Sketchfab (CC0 only if a real model is needed). Type: images/3D refs. Needed: **before (concept), during (build).**

**6. 3D / WebGL References** — main 3D object lighting, particle/grid field, camera moves, object transformation, mesh reveal, shader effects, mobile fallback.
- Why: scope the WebGL ceiling and keep it performant.
- Search terms: "R3F product configurator", "three.js particle field portfolio", "drei Environment Lightformer studio".
- Platforms: Awwwards, Codrops, threejs.org examples, three.js forum. Type: live sites/videos. Needed: **before (feasibility), during (build).**

> **Copyright note:** Inspiration screenshots/sites guide *mood, lighting, composition, and interaction* — they are **never** copied or used as production assets. Final production visuals must be Matt-owned, CC0, or properly licensed.

---

## 15D. Internet Asset Sourcing and Generation Plan

**Internet access during this pass:** ✅ available — real searches were run and license-safe *sources* were confirmed (see `REFERENCE_LINKS_AND_SEARCH_PLAN.md`). **No production assets were downloaded or staged** (to honor "don't wire anything in yet" and to avoid premature, possibly-wrong choices). Candidate-source recommendations live in `ASSET_SOURCING_PLAN.md`.

**Starting from current assets:**
- Site **has** the MW monogram → strengthen with a **CC0 studio HDRI** (Poly Haven) for reflections + a **CC0 matte metal/concrete texture** (ambientCG) for surfaces.
- Site **has** Lucide icons → keep Lucide (open-source, consistent); no new icon library needed.
- Site **has** robotics photos → do **not** add random stock robots; instead grade Matt's own; only add CC0 *macro/abstract* tech texture if a neutral background is needed.
- Site **needs** the "shipped product" payoff → **Matt's own sanitized Instant Quote screenshots** + official **Chrome Web Store / App Store / Google Play badges** (brand-provided, used per their badge guidelines).
- Site **needs 3D atmosphere** → primarily **code-built** (R3F + drei `Environment`/`Lightformer`, shaders) to avoid licensing exposure; optional CC0 HDRI.

**License-safe final-use sources (confirmed):**
- **Photos:** Unsplash, Pexels, Pixabay (license-safe; still verify per-image).
- **Fonts:** Google Fonts, Fontshare (already used).
- **Icons:** Lucide (in use), Heroicons, Tabler, Phosphor.
- **3D / HDRI / textures:** **Poly Haven (CC0)**, **ambientCG (CC0)**, Sketchfab (CC0-filtered only), Kenney.
- **Brand badges:** official Chrome Web Store / App Store / Google Play badge kits (use as-is, per guidelines, since Matt's apps are actually on them).

**If image generation were available** (it isn't here): generate *placeholder* hero backdrops/atmospheres only, save to `references/generated-placeholders/`, log in `ASSET_USAGE_MANIFEST.md`, never use for fake proof. → Instead, **AI image prompts are provided in Section 17.**

**If no external assets are safe/available:** lean fully on **code-created assets** (see 15E) — SVG schematics, CSS noise/grids, gradient meshes, R3F geometry, animated dashboards. This is actually the *recommended default* here because it's zero-licensing-risk and maximally on-brand.

| Proposed asset | Purpose | Type | Final/Placeholder | Where | Supports concept | Source/method | Licensing | Priority |
|---|---|---|---|---|---|---|---|---|
| Studio HDRI | Cleaner monogram reflections | `.hdr` | Final | Hero 3D env | 1/3 | Poly Haven CC0 | CC0 ✅ | Recommended |
| Matte metal/concrete texture | Surface under monogram | PBR | Final | Hero/sections | 1/3 | ambientCG CC0 | CC0 ✅ | Optional |
| Instant Quote screenshots | Flagship proof | PNG | Final | Work case study | all | **Matt-owned** | Owned ✅ | **Required** |
| Store badges | Trust/shipped proof | SVG/PNG | Final | Work/proof | all | Official kits | Per-guideline ✅ | Recommended |
| "Autonomy→shipped" line | Signature scroll scene | SVG/Canvas | Final | Hero→work | 2 | **Code** | None ✅ | **Required (Concept 2)** |
| Schematic/grid backdrop | Engineering atmosphere | SVG/CSS | Final | Global | 1/3 | **Code** | None ✅ | Recommended |
| Particle/HUD field | Command-center mood | R3F/shader | Final/placeholder | Hero (C3) | 3 | **Code** | None ✅ | Optional |
| Robotics regrade overlay | Asset consistency | CSS/filter | Final | Work | all | **Code** | None ✅ | Recommended |
| OG share image | SEO/social | Dynamic image | Final | Metadata | all | `app/opengraph-image` | Owned ✅ | Recommended |

---

## 15E. Original Placeholder Asset Ideas (zero copyright risk)

| Idea | Purpose | Visual description | Implementation | Difficulty | Build in Prompt 2? | Replaces external asset? |
|---|---|---|---|---|---|---|
| **Schematic grid field** | Engineering backdrop | Faint blueprint grid + corner ticks + measurement marks, masked/fading | SVG + CSS mask | Low | ✅ Yes | ✅ Yes |
| **"Autonomy→shipped" path** | Signature scene | Orange line morphing route→pipeline→app-flow on scroll | SVG `pathLength` + Framer/GSAP `useScroll` | Medium | ✅ Yes (core) | ✅ Yes |
| **CSS noise/grain layers** | Texture/depth | Already have grain; add a subtle second-grade vignette/dust | CSS data-URI | Low | ✅ | ✅ |
| **Gradient mesh ambient** | Soft hero depth | Very subtle warm orange mesh glow (restrained, learned from the revert) | CSS radial/conic | Low | Optional | ✅ |
| **Dashboard/HUD mock** | Command-center beat (C3) | Glass panels w/ his real stats as "telemetry" | HTML/CSS + Framer | Medium | If C3 | ✅ |
| **Animated data lines** | Pipeline metaphor | Flowing dashed nodes/edges | SVG + CSS/Framer | Low-Med | ✅ (C2) | ✅ |
| **Refined 3D monogram rig** | Hero centerpiece | Better lighting, HDRI, optional slow assembly | R3F + drei | Medium | ✅ | partly |
| **Section dividers / seams** | Rhythm | Hairline + measurement-tick dividers | SVG/CSS | Low | ✅ | ✅ |
| **Scroll-progress "instrument"** | Cohesion | Reframe existing progress bar as a gauge | CSS/Framer | Low | ✅ | ✅ |
| **Vertical timeline rail** | Experience | Animated progress spine w/ nodes | SVG + Framer | Low-Med | ✅ | ✅ |
| **Object reveal masks** | Premium reveals | Clip-path wipes (already used on media) | CSS clip-path | Low | ✅ | ✅ |
| **Boot/loading sequence** | Brand intro (shorter) | Faster monogram draw + "system online" tick | SVG + Framer | Low | ✅ | ✅ |

> These code-built assets can carry **most or all** of the redesign with **zero licensing risk** and maximum brand fit. External assets (HDRI/texture/screenshots) are *enhancements*, not dependencies.

---

## 16. Suggested Reference Search Terms

**Premium / interactive inspiration:**
- "Awwwards developer portfolio 2025/2026"
- "CSS Design Awards portfolio landing page"
- "premium engineering website design dark"
- "cinematic developer portfolio WebGL"
- "interactive 3D landing page portfolio"
- "Three.js scroll animation product reveal"
- "scroll based storytelling website engineering"
- "dark premium UI design monochrome + accent"
- "object reveal website animation GSAP"
- "robotics / hardware startup website design"
- "GSAP ScrollTrigger pinned section transition"
- "SVG path draw scroll animation"

**Asset-specific (license-safe):**
- "studio HDRI dark Poly Haven"
- "brushed aluminum PBR texture ambientCG CC0"
- "concrete matte texture CC0"
- "carbon fiber texture free PBR"
- "MW / monogram metal product render reference" (style ref only)
- "dashboard UI command center inspiration"
- "data pipeline visualization UI"
- "Chrome Web Store badge official"
- "App Store Google Play badge guidelines"
- "Lucide / Phosphor icons" (open-source)
- "robot odometry path diagram" (style ref)
- "Unsplash dark technology macro" (only if neutral B-roll needed)

---

## 17. AI Image / Asset Generation Prompts

> Image generation was **not** available in this environment, so these are prompts for Matt to run elsewhere (Midjourney, DAL·E, Firefly, etc.). **All are inspiration/atmosphere-only unless Matt generates and owns the final.** Never use generated images as fake proof, fake people, or fake clients.

**A. Hero atmosphere — engineering studio**
- Purpose: Hero backdrop / mood reference behind the 3D monogram.
- Prompt: *"Cinematic dark engineering studio, matte black surface, soft overhead strip lighting, faint warm orange rim light, machined metal object catching a single highlight, subtle blueprint grid in the background haze, high contrast, minimal, premium product photography mood, no text, no logos, no people."*
- Aspect: 16:9 desktop + 9:16 mobile crop.
- Style: Premium, dark, matte, controlled studio lighting, warm-neutral with orange accent.
- Avoid: Visible brand logos, fake UI text, clutter, blown-out highlights, generic stock look, lens flare overload.
- Usage: Inspiration / atmosphere reference only.
- Review: Yes.

**B. Precision metal monogram (style ref for the 3D)**
- Purpose: Lighting/material reference for the MW 3D mark.
- Prompt: *"A precision-machined angular metal monogram on a matte charcoal pedestal, brushed-aluminum and clearcoat finish, dramatic single key light with soft fill, deep shadows, faint orange accent reflection, dark studio, ultra-clean, product render, no text."*
- Aspect: 1:1 and 4:5.
- Style: Industrial product render, matte+metal, orange accent.
- Avoid: Cartoonish, plastic, rainbow reflections, busy background.
- Usage: Material/lighting reference for the real R3F scene.
- Review: Yes.

**C. "Autonomy → shipped" abstract**
- Purpose: Visual language for the signature line/path scene.
- Prompt: *"Abstract dark visualization of a single glowing orange line evolving from a winding robot path into a clean data pipeline into an app interface flow, on a deep matte-black field with a faint engineering grid, minimal, high-tech, cinematic, no text, no logos."*
- Aspect: 16:9 + tall 9:16.
- Style: Minimal, dark, orange line-art, technical.
- Avoid: Sci-fi cliché, neon overload, text, faces.
- Usage: Concept/storyboard reference (the real version is code/SVG).
- Review: Yes.

**D. Command-center HUD (Concept 3 only)**
- Purpose: Mood ref for the MattOS command-center direction.
- Prompt: *"Dark futuristic but tasteful command-center interface, glass panels, a glowing angular core, faint particle field, orange and warm-white accents on matte black, restrained and premium not sci-fi-cheesy, depth of field, no readable text, no logos, no people."*
- Aspect: 16:9.
- Style: Premium HUD, restrained, matte+orange.
- Avoid: Cluttered fake text, garish neon, movie-UI cliché.
- Usage: Inspiration only; real UI built in code.
- Review: Yes.

**E. Section texture — machined surface**
- Purpose: Subtle surface/texture overlay reference.
- Prompt: *"Extreme close-up of a matte machined dark-metal surface with fine brushed grain and a faint warm sheen, even soft lighting, seamless, photographic, no text."*
- Aspect: square, tileable.
- Style: Subtle, dark, tactile.
- Avoid: Strong directional light, scratches/dents, color casts.
- Usage: Reference for a CC0 texture choice or CSS treatment.
- Review: Optional.

---

## 18. Missing Inputs Needed From Matt

**Brand**
- Logo source file (the real high-res MW mark / vector) if it differs from the rebuilt SVG. *(Required — confirms the canonical mark.)*
- Confirm the matte-charcoal + orange palette is the keeper (it currently is). *(Confirmed-by-default; say if not.)*

**Business / offer**
- **The ONE primary conversion goal** (internships? paid freelance build work? recruiting visibility? all-but-rank-them). *(Required — drives the CTA and hero.)*
- Are you targeting a specific window (e.g., summer internship season)? Any availability to state?

**Users**
- Who is the #1 audience to optimize for — founders, eng recruiters, robotics/college, or peers? *(Required — picks the persona to lead with.)*

**Content**
- Real social proof: a quote from a coach, internship mentor, or teacher (real only — no inventions). *(Strongly recommended.)*
- Any metrics you can share for Instant Quote (users, records imported, etc.) — real numbers only.
- Confirm the "high school developer" framing should lead, or become a reveal. *(Your call.)*

**Visual references**
- **3–5 reference sites/videos** you love (so I can match the *feel*, not copy). *(Required for an award-level direction.)*
- A yes/no on each cinematic concept in Section 13 (and which one to pursue).

**Assets**
- **Instant Quote screenshots** (sanitized — no client PII), plus any store badge permission/links. *(Required — fixes the flagship gap.)*
- Confirm you **own/have rights to the robotics competition photos** (team/event photos). *(Required for licensing safety.)*
- Permission to **delete** `logo.png.png` and unused spares, and to remove dead code. *(Quick yes/no.)*
- Any better/higher-res game captures (optional).

**3D / motion**
- Is **WebGL/3D allowed** (desktop) or should we stay 2D/SVG for safety? *(Required — sets the build ceiling.)*
- Appetite for the signature scene's ambition: safe (Concept 1), cinematic (Concept 2), or bold (Concept 3)?

**SEO**
- Should we optimize for **portfolio presentation** (default), **name-search/recruiting**, or add **case-study pages for depth**? *(Required — sets IA.)*

**Technical constraints**
- Any deploy constraints beyond Vercel? Performance ceiling (older devices)? *(Nice to know.)*

**Legal / licensing**
- Confirm: are any provided images **owned/licensed** or **inspiration-only**? *(Required before anything ships.)*
- Approval required before any *downloaded/staged* candidate asset goes to production (none staged yet).

---

## 23. Recommended Next Step

- **Is the site ready for a redesign prompt?** ✅ Yes. The content, structure, and brand bones are strong enough to build an award-level experience on top of.
- **What must be gathered first (blockers):** (1) the **primary conversion goal + #1 audience**, (2) **3–5 reference sites**, (3) **Instant Quote screenshots**, (4) **WebGL yes/no**, (5) **photo rights confirmation**. These five unlock a confident redesign.
- **Most promising cinematic concept:** **Concept 2 — "Autonomy → Shipped" scroll film.** It's original, true to Matt's actual differentiator (range + shipping), conversion-relevant, mostly **code-built (no licensing risk)**, and performant with a clean mobile fallback. Concept 1 is the safe fast path; Concept 3 is the high-ceiling stretch if WebGL + time allow.
- **What to prototype first:** the **hero + the signature line scene's first beat** (SVG path on scroll) and the **refined 3D monogram lighting** — prove the signature moment before theming everything.
- **What NOT to touch yet:** the content data files (they're strong), the reduced-motion/a11y fallbacks, the lazy/gated WebGL pattern, and the just-restored calm hero baseline.
- **Final 3D/assets needed now or later?** **Later/parallel.** Start the build with **code-built placeholders** (schematic, SVG line, current monogram) + add the **Instant Quote screenshots** as the one required real asset; HDRI/texture/store-badges are enhancements that can land during the build.
- **Are placeholders enough to begin?** ✅ Yes — the recommended direction is *placeholder-first* (code assets), with real screenshots dropped in at the "shipped" beats.
- **Should Prompt 2 use current assets, staged assets, generated placeholders, or wait?** Use **current assets (monogram, graded robotics photos, game covers) + code-built placeholders**, and **wait on Matt only for the Instant Quote screenshots + the five blocker answers** above. No staged/downloaded assets exist to approve (none were taken this pass).

---

### Housekeeping flagged during the audit (do later, with permission — not done this pass)
- Delete `public/logo.png.png` (890 KB, unused, double extension).
- Remove dead code: `aurora-background.tsx`, `scroll-background.tsx`, `.aurora*` + `.text-shimmer` CSS.
- Add the missing `instant-quote.jpg` (or repoint the flagship project to a real screenshot).
- Decide on unused spares `controller.jpg`, `robot-dark.jpg`.
- Add `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`, `metadataBase`, and `Person` JSON-LD.
- Migrate `<img>` → `next/image` and compress images (esp. `tower-offense.png` 438 KB).

*End of main brief. See companion files for the reference pack request, links/search plan, asset sourcing plan, and asset manifest.*
