# Asset Usage Manifest

> **No new assets were staged or generated during Prompt 1.** No files were downloaded from the internet, no images were generated, and nothing new was wired into the production site. Internet search was used only to identify *sources* (see `REFERENCE_LINKS_AND_SEARCH_PLAN.md`). Image generation was not available, so AI image *prompts* were produced instead (`WEBSITE_AUDIT_AND_CREATIVE_BRIEF.md` §17). The only file created on disk besides these reports is `references/README.md` (an empty folder scaffold, no assets).

The table below is a **reference inventory of the existing production assets** already in the repo (for licensing clarity going into the redesign). "Status" reflects readiness for the cinematic redesign, not a new acquisition.

| Asset | Path | Source | License | Creator | Attribution Needed | Status | Recommended Use | Notes |
|---|---|---|---|---|---|---|---|---|
| MW monogram (SVG) | `src/components/brand/logo.tsx` | Built in repo | Owned | Matt | No | Final-safe candidate | Brand centerpiece (nav, hero, preloader) | Keep; elevate |
| MW monogram (3D) | `src/components/three/mw-3d.tsx` | Built in repo | Owned | Matt | No | Final-safe candidate | Hero 3D object | Refine lighting; desktop-gated |
| Favicon | `src/app/icon.svg` | Built in repo | Owned | Matt | No | Final-safe candidate | Favicon | Keep |
| `robotics.jpg` | `public/projects/robotics.jpg` | Matt's photo | Owned* | Matt | No | Needs Matt approval | Featured row (after regrade) | **Confirm rights**; compress + `next/image` |
| `competition.jpg` | `public/projects/competition.jpg` | Matt's photo | Owned* | Matt | No | Needs Matt approval | Featured row (after regrade) | **Confirm rights**; event photo |
| `controller.jpg` | `public/projects/controller.jpg` | Matt's photo | Owned* | Matt | No | Do not use in production (yet) | Unused spare | Decide: use or delete |
| `robot-dark.jpg` | `public/projects/robot-dark.jpg` | Matt's photo | Owned* | Matt | No | Do not use in production (yet) | Unused spare | Decide: use or delete |
| `instant-quote.jpg` | `public/projects/instant-quote.jpg` | **MISSING** | — | Matt (to provide) | No | Needs Matt approval | **Flagship screenshot — required** | Currently absent → placeholder shows |
| `dark-hours.png` | `public/games/dark-hours.png` | Roblox game (Matt's) | Owned | Matt | No | Final-safe candidate | Game card | Compress/convert |
| `tower-offense.png` | `public/games/tower-offense.png` | Roblox game (Matt's) | Owned | Matt | No | Final-safe candidate | Game card | **Compress (438 KB)** |
| `road-rage.png` | `public/games/road-rage.png` | Roblox game (Matt's) | Owned | Matt | No | Final-safe candidate | Game card | Compress |
| `find-the-cartoons.png` | `public/games/find-the-cartoons.png` | Roblox game (Matt's) | Owned | Matt | No | Final-safe candidate | Game card | Compress |
| `logo.png.png` | `public/logo.png.png` | Legacy export | Owned | Matt | No | Do not use in production | **Delete (890 KB, unused, double extension)** | Dead file |
| Film grain | `globals.css` (data-URI) | Built in repo | Owned/Code | Matt | No | Final-safe candidate | Texture overlay | Keep |
| Clash Display | Fontshare `@import` | Fontshare | Free/OSS | Indian Type Foundry | Per Fontshare terms | Final-safe candidate | Headings | In use |
| Inter | Google Fonts | Google Fonts | OFL | rsms | No | Final-safe candidate | Body | In use |
| JetBrains Mono | Google Fonts | Google Fonts | OFL | JetBrains | No | Final-safe candidate | Labels/mono | In use |
| Lucide icons | `lucide-react` | npm | ISC/MIT | Lucide | No | Final-safe candidate | UI icons | In use |

\* *Owned = appears to be Matt's own photo of his own robot/team; **Matt should confirm** he has rights to post any event/team photos.*

**Status legend:** Final-safe candidate · Needs Matt approval · Inspiration only · Placeholder only · Do not use in production.

---

### Assets to be created/added next phase (none exist yet)

| Planned asset | Type | Intended source | Planned status |
|---|---|---|---|
| Instant Quote screenshots | PNG | Matt (sanitized) | Required before launch |
| Studio HDRI | `.hdr` | Poly Haven (CC0) | Final-safe (verify) |
| Matte texture | PBR | ambientCG (CC0) | Final-safe (verify) |
| Store badges | SVG/PNG | Official kits | Final-safe (follow guidelines) |
| "Autonomy→Shipped" line | SVG/Canvas (code) | Built in repo | Final-safe |
| Schematic backdrop | SVG/CSS (code) | Built in repo | Final-safe |
| OG share image | Dynamic image | `app/opengraph-image` (code) | Final-safe |

*Any asset that is later downloaded, staged, or generated must be added to this manifest with its real source URL, license, creator, and attribution before it touches the production site.*
