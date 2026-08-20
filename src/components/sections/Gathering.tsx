import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { socialLinks } from "@/data/socialLinks";
import type { GatheringContent, WorshipServiceInfo } from "@/types";

interface GatheringProps {
  content: GatheringContent;
}

/**
 * One recurring service panel. `role="group"` + `aria-labelledby` ties the
 * schedule programmatically to the service name for assistive tech, not
 * just visual proximity.
 *
 * Identity (label + name) sits on the left, schedule (recurrence + time) on
 * the right, using an auto-sized schedule column so it never gets squeezed
 * into an awkwardly narrow block. `font-sans` is used for the recurrence
 * and time specifically because the editorial serif (Cormorant Garamond) is
 * Latin-only - any Arabic numeral inside a serif-styled Korean string falls
 * back to a different, smaller-looking face. Keeping the whole schedule in
 * one consistent sans-serif face avoids that mismatch entirely.
 */
function ServicePanel({
  service,
  headingId,
  primary = false,
}: {
  service: WorshipServiceInfo;
  headingId: string;
  primary?: boolean;
}) {
  return (
    <div
      role="group"
      aria-labelledby={headingId}
      className={`grid grid-cols-1 gap-4 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:p-8 ${
        primary
          ? "border-l-4 border-[var(--color-amber)] bg-white/[0.04]"
          : "border border-white/10"
      }`}
    >
      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-medium tracking-[0.2em] text-[var(--color-amber)] uppercase">
          {service.label}
        </p>
        <h3
          id={headingId}
          className="font-serif text-xl text-[var(--color-ivory)] sm:text-2xl"
        >
          {service.title}
        </h3>
      </div>

      <div className="flex flex-col gap-1 sm:items-end sm:text-right">
        <p className="break-keep font-sans text-base text-[var(--color-ivory)]/80 sm:text-lg">
          {service.recurrence}
        </p>
        <time
          dateTime={service.scheduleDateTime}
          className="font-sans text-2xl font-semibold whitespace-nowrap text-[var(--color-ivory)] sm:text-3xl"
        >
          {service.time}
        </time>
      </div>

      {service.notice && (
        <p className="break-keep font-sans text-sm text-[var(--color-ivory)]/50 sm:col-span-2">
          {service.notice}
        </p>
      )}
    </div>
  );
}

export default function Gathering({ content }: GatheringProps) {
  return (
    <section
      id="gathering"
      className="bg-[var(--color-charcoal)] py-[var(--section-space)] text-[var(--color-ivory)]"
    >
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[52fr_48fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-8">
            <SectionLabel className="text-[var(--color-amber)]">
              {content.eyebrow}
            </SectionLabel>

            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
                {content.heading}
              </h2>
              <p className="font-sans text-base leading-relaxed text-[var(--color-ivory)]/70 sm:text-lg">
                {content.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Sunday Worship (primary, accented) leads; Open Worship
              (secondary, unaccented) follows ~80ms later. Both panels are
              full-width and the same width as each other - only their
              accent, and the schedule's font weight, distinguish priority. */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={140}>
              <ServicePanel
                service={content.sundayService}
                headingId="sunday-worship-title"
                primary
              />
            </ScrollReveal>
            <ScrollReveal delay={220}>
              <ServicePanel
                service={content.openService}
                headingId="open-worship-title"
              />
            </ScrollReveal>
          </div>

          {/* Shared location - both services meet at the same address, so
              it appears once rather than being repeated per panel. */}
          <ScrollReveal delay={280} className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-ivory)]/50">
                {content.locationLabel}
              </p>
              <address className="font-sans text-base not-italic text-[var(--color-ivory)]">
                <span className="block font-serif text-xl text-[var(--color-ivory)]">
                  {content.venueName}
                </span>
                <span className="mt-1 block">{content.address}</span>
                <span className="mt-1 block text-sm text-[var(--color-ivory)]/50">
                  {content.nearbyNote}
                </span>
              </address>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ExternalLink
                href={content.mapUrl}
                ariaLabel={content.mapCtaAriaLabel}
                className="inline-flex min-h-11 items-center justify-center border border-[var(--color-amber)]/60 bg-[var(--color-amber)]/10 px-5 font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-amber)]/20"
              >
                {content.mapCtaLabel}
              </ExternalLink>
              <ExternalLink
                href={socialLinks.instagram.href}
                ariaLabel={content.instagramCtaAriaLabel}
                className="inline-flex min-h-11 items-center gap-2 font-sans text-sm tracking-wide text-[var(--color-ivory)] underline decoration-[var(--color-amber)] underline-offset-4 transition-opacity hover:opacity-70"
              >
                {content.instagramCtaLabel}
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          delay={160}
          className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]"
        >
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
