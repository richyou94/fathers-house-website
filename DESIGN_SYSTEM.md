# Father's House — Design System

This document is the visual and content source of truth for the Father's
House website. Read it before making any visual change.

## 1. Creative direction

**Concept: "A Place for His Presence."**

Father's House should feel like an intimate, creative home-worship
community — not a conventional institution or megachurch.

Core qualities:

- Intimate
- Relational
- Worship-centered
- Contemporary
- Reverent
- Warm and domestic
- Editorial
- Korean-first and selectively bilingual
- Authentic rather than overly polished

The real photography shows warm cream walls, natural wood trim, amber
lamps, red and orange furniture accents, musicians gathered in a home
studio, instruments/cameras/cables/books/recording equipment, casual
clothing, and a multigenerational worship community. Design decisions
should support and never fight this photography.

## 2. Color tokens

Defined in [src/app/globals.css](src/app/globals.css) under `:root`, and
exposed as Tailwind utilities (`bg-ivory`, `text-clay`, etc.) via the
`@theme inline` block.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ivory` | `#f3f0e9` | Primary light background |
| `--color-cream` | `#e9e2d5` | Secondary light background (alternating sections) |
| `--color-ink` | `#1b1a17` | Primary text on light backgrounds, dark section backgrounds |
| `--color-charcoal` | `#24231f` | Dark section background (Gathering) |
| `--color-muted` | `#746f66` | Secondary/body text on light backgrounds |
| `--color-line` | `#d5cfc4` | Hairlines, dividers |
| `--color-wood` | `#8a5e3b` | Warm accent, sparingly |
| `--color-clay` | `#a5654f` | Section labels, link underlines |
| `--color-amber` | `#c69b62` | Focus rings, highlights on dark backgrounds |
| `--color-accent-red` | `#b84938` | Rare accent only, never a dominant color |

Do not introduce bright blue, neon, or generic "church brand" gradients.

## 3. Typography

Loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx)
and exposed as CSS variables (`--font-cormorant`, `--font-noto-sans-kr`),
mapped to `--font-serif` / `--font-sans` in `globals.css`.

- **`Cormorant_Garamond`** (`font-serif`) — large English editorial
  display phrases only (e.g. footer "COME HOME.", English supporting
  lines). Never used for Korean body copy or Korean headings.
- **`Noto_Sans_KR`** (`font-sans`) — all Korean text and interface/UI
  text (nav, labels, body copy), and default document font.

Hierarchy:

1. Large Korean hero headline (`font-serif`-free, `font-sans`, large
   size, tight leading).
2. Editorial English display phrases (`font-serif`, e.g. hero label,
   footer phrase, gathering supporting line).
3. Small uppercase English section labels with wide letter-tracking
   (`SectionLabel` component).
4. Comfortable Korean body text with generous line height
   (`leading-loose`/`leading-relaxed`).

Never force Korean headings into the Latin serif display font.

## 4. Spacing

- `--content-width: 1280px` — max width for the `Container` component.
- `--reading-width: 720px` — max width for long-form Korean body copy
  (e.g. Our Heart section).
- `--page-gutter: clamp(1.25rem, 4vw, 4rem)` — responsive side padding,
  applied by `Container`.
- `--section-space: clamp(5rem, 11vw, 10rem)` — vertical rhythm between
  major sections.

## 5. Photography rules

- Use only the supplied local photography under `/images/`. Do not
  generate, invent, or stock-photo-replace any image.
- Do not resize, recompress, convert, or visually edit the source
  files — only crop responsively via CSS (`object-cover` + `aspect-*`
  utilities).
- Preserve the warmth of the images: dark overlays should be used only
  where legibility requires it (hero text), and should be strongest on
  the side of the text, fading toward the visible photography.
- Avoid generic stock church imagery, giant-stage/megachurch framing, or
  neon concert effects — none of that exists in the current photo set,
  and it must not be simulated with CSS effects either.

### Image paths and intended uses

| Path | Section | Notes |
| --- | --- | --- |
| `/images/hero/fathers-house-hero.png` | Hero | Full-bleed background, `priority`, `fill` |
| `/images/worship/worship-leader.png` | Worship Sessions (featured) | 순전한 예배 / PURE |
| `/images/worship/worship-room.png` | Worship Sessions | 내 주 되신 주 / FOR WHO YOU ARE |
| `/images/worship/worship-drums.png` | Worship Sessions + Community grid | 그 사랑이 내려와 / LOVE CAME DOWN, and community grid |
| `/images/worship/worship-keyboard.png` | Community grid | |
| `/images/worship/worship-guitar.png` | Community grid | |
| `/images/community/community-02.png` | Community grid | |
| `/images/gathering/fathers-house-gathering-space.png` | Gathering | |
| `references/brand/fathers-house-brand-style-reference.png` | Internal only | Not a public site asset; do not reference from `public/` or components |

## 6. Layout principles

- Server Components by default. Client components only where real
  interaction is required (currently: the mobile navigation toggle in
  `Header`).
- `page.tsx` stays compositional — it renders `<Header />`, `<main>`
  with the five sections, and `<Footer />`, nothing else.
- Sections are full-width, alternating between `--color-ivory` /
  `--color-cream` (light) and `--color-charcoal` / `--color-ink` (dark,
  Gathering + Footer) for editorial rhythm.
- Avoid glassmorphism, excessive rounded corners/cards, and corporate
  dashboard-style grids. Sharp or minimally-rounded edges only.
- Grids should feel like an editorial photo spread, not a uniform card
  gallery — vary image proportions (see `Community`'s featured first
  tile).

## 7. Motion rules

- Smooth anchor scrolling (`scroll-behavior: smooth`) with
  `scroll-margin-top` on anchored sections.
- Only subtle CSS transitions are allowed (opacity/scale on hover,
  ~200–300ms). No animation library, no scroll-triggered animation, no
  autoplay.
- `prefers-reduced-motion: reduce` must disable/shorten all transitions
  and force `scroll-behavior: auto`.

## 8. Explicit visual anti-patterns (avoid)

- Generic stock church imagery
- Bright blue church-brand gradients
- Glassmorphism
- Excessive rounded cards
- Corporate SaaS-style layouts
- Giant-stage or megachurch aesthetics
- Neon concert effects
- Roof-and-cross logo clichés
- Excessive animation or animation libraries
- Autoplaying embedded video
