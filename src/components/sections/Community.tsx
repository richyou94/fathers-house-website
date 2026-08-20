import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { CommunityContent } from "@/types";

interface CommunityProps {
  content: CommunityContent;
}

export default function Community({ content }: CommunityProps) {
  const { primaryImage, supportingImage, detailImage } = content;

  return (
    <section
      id="community"
      className="bg-[var(--color-ivory)] py-[var(--section-space)]"
    >
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-12">
        {/* Text column: ~40% at desktop width. */}
        <ScrollReveal className="flex flex-col gap-6">
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <h2 className="font-serif text-3xl leading-snug text-[var(--color-ink)] sm:text-4xl">
            {content.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="font-sans text-base leading-loose text-[var(--color-muted)] sm:text-lg">
            {content.body}
          </p>
        </ScrollReveal>

        {/*
          Image composition: ~60% at desktop width. The gathered-worship
          photo (already close to a native 16:9 crop) stays the dominant
          landscape anchor; the two portraits sit in a row below it. At
          `lg:` only, that row nudges up slightly (a subtle, non-concealing
          overlap into the anchor's bottom edge) with one portrait staggered
          lower than the other for an editorial, non-grid feel. Below `sm:`
          ("very narrow" phones) the portraits stack individually instead of
          squeezing into two columns.
        */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <ScrollReveal delay={140}>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                style={{ objectPosition: primaryImage.focalPoint ?? "center center" }}
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={220}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:-mt-12 lg:gap-8"
          >
            <div className="lg:mt-10">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={supportingImage.src}
                  alt={supportingImage.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 100vw"
                  style={{ objectPosition: supportingImage.focalPoint ?? "center center" }}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={detailImage.src}
                  alt={detailImage.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 100vw"
                  style={{ objectPosition: detailImage.focalPoint ?? "center center" }}
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
