import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import { gathering } from "@/data/siteContent";

export default function Gathering() {
  return (
    <section
      id="gathering"
      className="bg-[var(--color-charcoal)] py-[var(--section-space)] text-[var(--color-ivory)]"
    >
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionLabel className="text-[var(--color-amber)]">
            {gathering.sectionLabel}
          </SectionLabel>

          <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
            {gathering.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="font-serif text-lg italic text-[var(--color-ivory)]/70">
            {gathering.supportingEn}
          </p>

          <dl className="flex flex-col gap-5 border-t border-white/10 pt-6">
            {gathering.details.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-1">
                <dt className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-ivory)]/50">
                  {detail.label}
                </dt>
                <dd className="font-sans text-base text-[var(--color-ivory)]">
                  {detail.href ? (
                    <ExternalLink
                      href={detail.href}
                      ariaLabel={`${detail.label}: ${detail.value} - 새 탭에서 열림`}
                      className="underline decoration-[var(--color-amber)] underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      {detail.value}
                    </ExternalLink>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
          <Image
            src={gathering.image}
            alt={gathering.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
