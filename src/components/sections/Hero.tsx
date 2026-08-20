import Container from "@/components/ui/Container";
import HeroBackgroundSlideshow from "@/components/ui/HeroBackgroundSlideshow";
import { heroImages } from "@/data/heroImages";
import type { HeroContent } from "@/types";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section
      aria-label={content.ariaLabel}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-ink)]"
    >
      <HeroBackgroundSlideshow
        images={heroImages}
        labels={content.slideshow}
        sizes="100vw"
      >
        <Container className="relative z-20 flex flex-col gap-6 pb-24 pt-40 sm:pb-32">
          <p className="font-sans text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-ivory)]/80">
            {content.eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--color-ivory)] sm:text-6xl">
            {content.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-xl font-sans text-base leading-relaxed text-[var(--color-ivory)]/85 sm:text-lg">
            {content.supportingCopy}
          </p>

          <a
            href={content.scrollHref}
            className="mt-6 inline-flex w-fit items-center gap-2 font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-opacity hover:opacity-70"
          >
            <span aria-hidden className="text-lg">
              ↓
            </span>
            {content.scrollLabel}
          </a>
        </Container>
      </HeroBackgroundSlideshow>
    </section>
  );
}

