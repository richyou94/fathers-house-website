import type { HeroBackgroundImage } from "@/types";

/**
 * The two hero background photos, alternated by `HeroBackgroundSlideshow`.
 * Shared across locales - the same photography is used regardless of
 * language. Both are purely atmospheric/decorative, so the slideshow marks
 * them `aria-hidden` rather than repeatedly announcing background changes;
 * `hero.ariaLabel` (per-locale, in `siteContent.*.ts`) carries the
 * accessible description instead.
 */
export const heroImages: readonly HeroBackgroundImage[] = [
  {
    src: "/images/hero/fathers-house-hero.png",
    focalPoint: "center center",
  },
  {
    src: "/images/hero/fathers-house-hero2.png",
    focalPoint: "75% center",
  },
] as const;
