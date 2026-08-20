@AGENTS.md

# Father's House Website

## Project purpose

This is a gift/demo single-page website for **Father's House**
(파더스하우스), a Korean worship community located near Ewha in Seoul.
Design concept: **"A Place for His Presence."** It is intimate,
relational, worship-centered, editorial, and Korean-first. See
[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the full creative direction —
**read it before making any visual change.**

Existing channels:

- Instagram: https://www.instagram.com/fathers_house_official/
- YouTube: https://www.youtube.com/@FathersHouse_Official

## Tech stack

- Next.js App Router (Next.js 16, Turbopack)
- TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- React Server Components by default — client components only where
  interaction genuinely requires it (currently only the mobile nav
  toggle in `Header`)
- `next/image` for all production images
- `next/font/google` for fonts (`Cormorant_Garamond`, `Noto_Sans_KR`)
- No database, no authentication, no CMS, no analytics, no forms, no
  map API, no carousel/icon/animation packages

## File architecture

```
src/
├── app/                 # layout.tsx, page.tsx, globals.css, favicon.ico
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, OurHeart, WorshipSessions, Community, Gathering
│   └── ui/                # Container, SectionLabel, ExternalLink
├── data/                # navigation.ts, siteContent.ts, worshipSessions.ts
└── types/               # index.ts

public/images/           # public site photography (hero, worship, community, gathering)
references/brand/        # internal brand reference image — NOT a public asset
```

`page.tsx` must stay compositional (`Header` + `main` sections +
`Footer`). Do not put section markup directly in `page.tsx`.

## Design guardrails

- Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) before any visual/layout
  change — it documents color tokens, typography, spacing, photography
  rules, layout principles, motion rules, and explicit anti-patterns.
- Preserve the Korean-first content hierarchy: Korean headline/body
  text is primary; English is used selectively for editorial display
  phrases and section labels only.
- Keep motion minimal — subtle CSS transitions only, no animation
  library, no autoplay video.
- Keep dependencies minimal — do not add a CMS, forms, map API,
  analytics, database, authentication, carousel, icon, or animation
  package without explicit instruction.

## Content rules

- All site copy and external links are centralized in `src/data/`
  (`navigation.ts`, `siteContent.ts`, `worshipSessions.ts`). Do not
  scatter repeated content or URLs across components.
- **Never invent church information** — schedules, addresses, staff,
  beliefs, or ministries that are not already present in `src/data/`.
  Unknown information must use clearly marked placeholders (e.g. "예배
  시간 업데이트 예정").
- Only use the supplied local images under `public/images/`. Do not
  generate new images or modify the supplied ones.

## Commands

```bash
npm run dev     # start the dev server (Turbopack)
npm run lint    # run ESLint
npm run build   # production build (Turbopack)
```
