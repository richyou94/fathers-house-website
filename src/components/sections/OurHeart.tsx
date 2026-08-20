import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { SectionCopy } from "@/types";

interface OurHeartProps {
  content: SectionCopy;
}

export default function OurHeart({ content }: OurHeartProps) {
  return (
    <section
      id="our-heart"
      className="bg-[var(--color-ivory)] py-[var(--section-space)]"
    >
      <Container>
        <ScrollReveal className="flex flex-col gap-8 max-w-[var(--reading-width)]">
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
      </Container>
    </section>
  );
}
