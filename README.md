# Matthew Wolf — Portfolio

A clean, dark-themed personal portfolio built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, **shadcn/ui**-style components, and
**Framer Motion**. Fast, fully responsive, and deploy-ready for Vercel.

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm run start
```

---

## Editing content

All copy lives in plain data files under [`src/data/`](src/data) — no need to
touch the components:

| File | What it controls |
|------|------------------|
| [`site.ts`](src/data/site.ts) | Name, role, location, email, social links, hero / about / contact copy |
| [`stats.ts`](src/data/stats.ts) | The "Proof" credibility strip |
| [`projects.ts`](src/data/projects.ts) | Featured project cards (title, description, tags, status, optional link) |
| [`skills.ts`](src/data/skills.ts) | Skill groups |
| [`experience.ts`](src/data/experience.ts) | Experience timeline |

### Adding a project

Add an object to the array in `src/data/projects.ts`:

```ts
{
  title: "Project name",
  description: "What it does and why it matters.",
  tags: ["C++", "Robotics"],
  status: "In Progress",   // optional badge
  href: "https://...",      // optional — only for genuinely public work
}
```

Projects whose `status` contains "Private" or "Confidential" automatically
render with a lock icon and no outbound link, so private code stays private.

### Updating links

Edit `src/data/site.ts`. The **GitHub** and **LinkedIn** buttons fall back to
placeholders (`#`) until you add real URLs — a small reminder note shows on the
contact section until both are filled in. Your phone number is intentionally
**not** included anywhere; email is the only public contact.

---

## Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, <html>
    page.tsx          # assembles all sections in order
    globals.css       # theme tokens (charcoal/slate/muted-blue) + utilities
    icon.svg          # favicon
  components/
    navbar.tsx
    footer.tsx
    reveal.tsx        # reusable Framer Motion scroll entrance
    section-heading.tsx
    ui/               # shadcn-style primitives (button, card, badge)
    sections/         # hero, stats, projects, about, skills, experience, contact
  data/               # all editable content (see table above)
  lib/utils.ts        # cn() class-merge helper
```

---

## Theme

The palette is defined as CSS variables in `src/app/globals.css`:
charcoal/slate background, a muted-blue `--primary`, and a rarely-used
`--robotics` orange accent. Adjust those variables to retune the whole site.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — just click **Deploy**.

No environment variables are required.
