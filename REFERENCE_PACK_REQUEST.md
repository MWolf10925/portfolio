# Reference Pack Request

*Written for Matt. This is the checklist of stuff to gather before we redesign the portfolio into an award-level, cinematic site. Nothing here changes the live site — it just sets us up to do the next phase right.*

---

## Goal

The audit found that your **content is genuinely excellent** (Worlds-qualified robotics + a shipped internship product + 5,000+ game plays is a rare, strong story). What's missing is a **premium, cinematic presentation** and a few **real assets** to make it land. This pack is the small set of inputs that will make the redesign go from "nice portfolio" to "people screenshot this."

The biggest single gap: your **flagship Instant Quote project currently shows a gray placeholder** because the screenshot file is missing. That's the #1 thing to fix.

---

## Folder Structure to Create

I created a `references/` folder scaffold in the repo (kept out of the live site). Drop files into these as you gather them:

```
references/
  current-site/          # screenshots of the current site (before)
  inspiration-sites/     # 3–5 sites you love (screen recordings or screenshots)
  motion-references/     # short videos/gifs of animations you want the "feel" of
  brand/                 # your real logo source file (vector if you have it)
  screenshots/           # YOUR product screenshots (Instant Quote, etc.)
  competitors/           # other young devs / portfolios you want to beat
  textures/              # (optional) CC0 textures you like
  3d-models/             # (optional) any 3D you want to use
  candidate-assets/      # stuff we're considering (not yet approved for the site)
  generated-placeholders/# AI-generated mood images (clearly labeled, not final)
  license-notes/         # where any asset came from + its license
```

> Inspiration images guide **mood, lighting, composition, and interaction feel only**. We do **not** copy them or put them on your site. Final site visuals must be yours, CC0, or properly licensed.

---

## Required Before Redesign (the 5 blockers)

These five answers/files unlock a confident redesign. Without them I'd be guessing.

- [ ] **1. Primary goal.** What's the #1 thing you want this site to get you? (internships / paid build work / recruiting visibility / college) — rank them if it's more than one.
- [ ] **2. #1 audience.** Who do you most want to impress: startup founders, engineering recruiters, robotics/college people, or fellow builders?
- [ ] **3. Instant Quote screenshots.** 3–6 clean screenshots of the product you shipped (extension UI, the app, store listing). **Blur/remove any real client names or personal data.** → `references/screenshots/`
- [ ] **4. 3–5 reference sites** you think are awesome (links or screen recordings). This is how I match a *feel* instead of guessing. → `references/inspiration-sites/`
- [ ] **5. 3D yes/no.** Are you cool with desktop 3D/WebGL (like the monogram, but more), or do you want to play it safe with 2D/SVG motion only? (Either can look award-level.)

---

## Strongly Recommended (makes it much better)

- [ ] **Real social proof** — one quote from a robotics coach, your internship mentor, or a teacher. Real only, no making it up. Even one line helps a lot.
- [ ] **Photo rights confirmation** — do you own / have the right to use the robotics competition photos? (Team/event photos.) Quick yes/no.
- [ ] **Your real logo file** (the original vector/PNG if it's nicer than the one I rebuilt in code). → `references/brand/`
- [ ] **Which cinematic concept** you like from the brief (Section 13): Safe (Build Log), Cinematic (Autonomy→Shipped — my rec), or Bold (Command Center).
- [ ] **Any real Instant Quote numbers** you can share (users, records imported, etc.) — real only.
- [ ] **Permission to clean up:** delete the unused 890 KB `logo.png.png`, remove dead code, and (later) add SEO files. Quick yes.

---

## Optional Later

- [ ] Better/higher-res game captures.
- [ ] CC0 textures/HDRIs you personally like (I can also pick good ones from Poly Haven / ambientCG).
- [ ] A short build-log / case-study you'd want as its own page (great for SEO later).
- [ ] Competitor portfolios you want to clearly beat. → `references/competitors/`

---

## Questions Matt Needs to Answer

1. What's the **one** action you want a visitor to take? (email you? view GitHub? something else?)
2. Should **"high school developer"** be the *first* thing people read, or a *reveal* after they're already impressed?
3. Internships/paid work — is there a **deadline/season** we're aiming for?
4. Should we keep it a **single page**, or add **case-study pages** (better for showing up in Google + deep-linking to recruiters)?
5. Any devices/perf limits I should respect (older laptops/phones)?

---

## Notes About Copyright

- Inspiration sites/images = **mood board only.** They shape lighting, layout, and motion *feel*. We never copy a design or use someone else's image as a final asset.
- Final production visuals must be **yours**, **CC0** (Poly Haven, ambientCG — free for any use), or **properly licensed**.
- Your Roblox game screenshots and your own product/robotics photos are **yours to use** (just confirm the team/event robotics photos are OK to post).
- App store badges (Chrome Web Store / App Store / Google Play) are fine to use **because your apps are actually on them** — we just follow each store's badge rules.

---

## Best Next Move

**Do these two things first and we're basically unblocked:**
1. Drop your **Instant Quote screenshots** into `references/screenshots/` (PII blurred).
2. Send me **3–5 reference sites** you love + answer the **5 blockers** above.

Then I'll build the redesign starting with the **hero + signature scroll moment** (recommended: the "Autonomy → Shipped" line that morphs from a robot's path into a software pipeline into your shipped app). Everything else can use code-built placeholders until you have more assets — so we can start fast and swap in real visuals as they come.
