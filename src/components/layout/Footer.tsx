import Image from "next/image";
import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { socialLinks } from "@/data/socialLinks";
import type { FooterContent } from "@/types";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-ivory)]">
      <Container className="flex flex-col items-center gap-14 py-20 sm:py-24">
        {/*
          Brand signature: the closing logo replaces the old visible phrase.
          Reuses the same transparent wordmark and crop technique as the
          header (fathers-house-wordmark-transparent bakes an unrelated
          "Worship Room" subtitle into its bottom ~26%; `fill` + object-cover
          + object-top crops to just the roof mark + "FATHER'S HOUSE" text).
          Links back to the top of the page - a subtle, static signature,
          not another headline.
        */}
        <ScrollReveal>
          <a
            href="#"
            aria-label={content.backToTopAriaLabel}
            className="relative block aspect-[15/7] w-[150px] overflow-hidden transition-opacity hover:opacity-80 sm:w-[180px] lg:w-[210px]"
          >
            <Image
              src="/images/logo/fathers-house-wordmark-transparent.png"
              alt={content.logoAlt}
              fill
              sizes="(min-width: 1024px) 210px, (min-width: 640px) 180px, 150px"
              className="object-cover object-top"
            />
          </a>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="order-1 flex gap-6 font-sans text-sm tracking-wide sm:order-2">
            <ExternalLink
              href={socialLinks.instagram.href}
              ariaLabel={content.instagramAriaLabel}
              className="text-[var(--color-ivory)]/80 transition-opacity hover:opacity-100"
            >
              Instagram
            </ExternalLink>
            <ExternalLink
              href={socialLinks.youtube.href}
              ariaLabel={content.youtubeAriaLabel}
              className="text-[var(--color-ivory)]/80 transition-opacity hover:opacity-100"
            >
              YouTube
            </ExternalLink>
          </div>

          <div className="order-2 font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-ivory)]/80 sm:order-1 sm:text-left">
            <p>{content.name}</p>
            <p className="mt-1 text-[var(--color-ivory)]/50">
              {content.location} · {year}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
