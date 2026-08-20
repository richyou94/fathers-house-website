import Container from "@/components/ui/Container";
import HeroBackgroundSlideshow from "@/components/ui/HeroBackgroundSlideshow";
import { hero, heroImages } from "@/data/siteContent";

export default function Hero() {
  return (
    <section
      aria-label={hero.ariaLabel}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-ink)]"
    >
      <HeroBackgroundSlideshow images={heroImages} sizes="100vw">
        <Container className="relative z-20 flex flex-col gap-6 pb-24 pt-40 sm:pb-32">
          <p className="font-sans text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-ivory)]/80">
            {hero.supportingLabelEn}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--color-ivory)] sm:text-6xl">
            {hero.headlineKo}
          </h1>
          <p className="max-w-xl font-sans text-base leading-relaxed text-[var(--color-ivory)]/85 sm:text-lg">
            {hero.supportingCopyKo}
          </p>

          <a
            href={hero.scrollHref}
            className="mt-6 inline-flex w-fit items-center gap-2 font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-opacity hover:opacity-70"
          >
            <span aria-hidden className="text-lg">
              ↓
            </span>
            Our Heart
          </a>
        </Container>
      </HeroBackgroundSlideshow>
    </section>
  );
}

