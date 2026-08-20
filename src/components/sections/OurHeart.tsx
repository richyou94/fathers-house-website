import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ourHeart } from "@/data/siteContent";

export default function OurHeart() {
  return (
    <section
      id="our-heart"
      className="bg-[var(--color-ivory)] py-[var(--section-space)]"
    >
      <Container className="flex flex-col gap-8 max-w-[var(--reading-width)]">
        <SectionLabel>{ourHeart.sectionLabel}</SectionLabel>
        <h2 className="font-serif text-3xl leading-snug text-[var(--color-ink)] sm:text-4xl">
          {ourHeart.headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="font-sans text-base leading-loose text-[var(--color-muted)] sm:text-lg">
          {ourHeart.body}
        </p>
      </Container>
    </section>
  );
}
