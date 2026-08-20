"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/siteContent";

/**
 * Transparent header layered over the hero. Client component only because
 * the mobile menu toggle genuinely requires interaction state.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container as="nav" className="flex items-center justify-between py-6">
        <Link
          href="/"
          aria-label="Father&rsquo;s House 홈으로 이동"
          className="flex h-11 items-center md:h-14"
        >
          {/*
            The supplied wordmark asset (fathers-house-wordmark-transparent)
            bakes an unrelated "Worship Room" subtitle into its bottom ~26%.
            The wrapper below is sized to the source's exact 1200x760 intrinsic
            ratio, cropped (via `fill` + `object-cover` + `object-top`) to
            only the top portion containing the roof mark and "FATHER'S
            HOUSE" text, hiding the stray subtitle without altering the file.
          */}
          <span className="relative block aspect-[15/7] h-11 overflow-hidden md:h-14">
            <Image
              src="/images/logo/fathers-house-wordmark-transparent.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 120px, 96px"
              className="object-cover object-top"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6" aria-label="주요 메뉴">
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
            ariaLabel="Father's House Instagram (opens in a new tab)"
            className="font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-opacity hover:opacity-70"
          >
            Instagram
          </ExternalLink>
        </div>

        <button
          type="button"
          className="text-[var(--color-ivory)] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="font-sans text-sm tracking-wide">
            {isMenuOpen ? "닫기" : "메뉴"}
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="bg-[var(--color-ink)]/95 md:hidden"
        >
          <Container className="flex flex-col gap-4 py-6">
            <ul className="flex flex-col gap-4" aria-label="주요 메뉴">
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
              ariaLabel="Father's House Instagram (opens in a new tab)"
              className="font-sans text-base text-[var(--color-ivory)]"
            >
              Instagram
            </ExternalLink>
          </Container>
        </div>
      )}
    </header>
  );
}
