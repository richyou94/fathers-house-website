"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { socialLinks } from "@/data/socialLinks";
import type { HeaderContent, NavigationItem } from "@/types";

interface HeaderProps {
  navigation: NavigationItem[];
  content: HeaderContent;
}

/**
 * Transparent header layered over the hero. Client component only because
 * the mobile menu toggle genuinely requires interaction state.
 */
export default function Header({ navigation, content }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container as="nav" className="flex items-center justify-between py-6">
        <Link
          href="/"
          aria-label={content.homeAriaLabel}
          className="flex items-center"
        >
          {/* Official full logo (clean transparent asset, no crop needed
              unlike the earlier recreated wordmark). Decorative alt: the
              parent Link already carries the accessible name. */}
          <Image
            src="/images/logo/fathers-house-logo-white.png"
            alt=""
            width={1400}
            height={515}
            priority
            sizes="(min-width: 768px) 180px, 145px"
            className="h-auto w-[145px] md:w-[180px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6" aria-label={content.navAriaLabel}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ExternalLink
            href={socialLinks.instagram.href}
            ariaLabel={content.instagramAriaLabel}
            className="font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-opacity hover:opacity-70"
          >
            Instagram
          </ExternalLink>

          {/* Language switch: visibly distinct from ordinary section links -
              a thin-bordered control after an understated divider, not a
              dropdown (only two languages exist). */}
          <span aria-hidden="true" className="h-4 w-px bg-[var(--color-ivory)]/30" />
          <Link
            href={content.languageSwitch.href}
            aria-label={content.languageSwitch.ariaLabel}
            className="flex h-9 items-center justify-center border border-[var(--color-ivory)]/35 px-3 font-sans text-xs tracking-wide text-[var(--color-ivory)] transition-colors hover:border-[var(--color-ivory)]/70 hover:bg-white/5"
          >
            {content.languageSwitch.label}
          </Link>
        </div>

        <button
          type="button"
          className="text-[var(--color-ivory)] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? content.menuCloseAriaLabel : content.menuOpenAriaLabel}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="font-sans text-sm tracking-wide">
            {isMenuOpen ? content.menuCloseText : content.menuOpenText}
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="bg-[var(--color-ink)]/95 md:hidden"
        >
          <Container className="flex flex-col gap-4 py-6">
            <ul className="flex flex-col gap-4" aria-label={content.navAriaLabel}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-base text-[var(--color-ivory)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ExternalLink
              href={socialLinks.instagram.href}
              ariaLabel={content.instagramAriaLabel}
              className="font-sans text-base text-[var(--color-ivory)]"
            >
              Instagram
            </ExternalLink>

            {/* Language switch, separated by an understated divider, with a
                44px-tall touch target. */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
              <Link
                href={content.languageSwitch.href}
                aria-label={content.languageSwitch.ariaLabel}
                onClick={() => setIsMenuOpen(false)}
                className="flex h-11 w-fit items-center justify-center border border-[var(--color-ivory)]/35 px-4 font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-colors hover:border-[var(--color-ivory)]/70 hover:bg-white/5"
              >
                {content.languageSwitch.label}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
