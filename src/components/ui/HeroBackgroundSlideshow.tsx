"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import Image from "next/image";
import type { HeroBackgroundImage } from "@/types";

interface HeroBackgroundSlideshowProps {
  images: readonly HeroBackgroundImage[];
  /** Time each image stays active before advancing, in milliseconds. */
  intervalMs?: number;
  sizes?: string;
  children?: ReactNode;
}

/** Actual time between active-image changes. Does not include the crossfade. */
const ROTATION_INTERVAL_MS = 4000;
/**
 * Crossfade length. Applied via the static Tailwind class `duration-[1600ms]`
 * below (Tailwind can't detect a dynamically constructed class name), and
 * mirrored here only as a documented constant / debug attribute.
 */
const CROSSFADE_DURATION_MS = 1600;

// Subscribing to browser-only state (media query, tab visibility) through
// useSyncExternalStore keeps server/client snapshots consistent and avoids
// setState-in-effect cascades.
function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
function getVisibilitySnapshot() {
  return document.hidden;
}
function getVisibilityServerSnapshot() {
  return false;
}

/**
 * Restrained two-image background slideshow for the hero section.
 *
 * Only this component is a Client Component - the hero copy passed in as
 * `children` is still rendered on the server and simply composed inside.
 */
export default function HeroBackgroundSlideshow({
  images,
  intervalMs = ROTATION_INTERVAL_MS,
  sizes = "100vw",
  children,
}: HeroBackgroundSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isDocumentHidden = useSyncExternalStore(
    subscribeToVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot,
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  // Rotation only pauses for document visibility and reduced motion - never
  // for hover or focus, and never permanently because of a manual click.
  // Including `activeIndex` in the dependency array means every change
  // (automatic or manual) clears the previous timeout and schedules exactly
  // one fresh one, so the cycle repeats indefinitely: 0 -> 1 -> 0 -> 1 -> ...
  useEffect(() => {
    if (images.length < 2 || prefersReducedMotion || isDocumentHidden) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, images.length, intervalMs, prefersReducedMotion, isDocumentHidden]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {/* 1. Background images - decorative, so screen readers don't
          repeatedly announce the crossfade. Both stay mounted at the same
          stacking level; only opacity transitions, so the incoming image
          never abruptly jumps above the outgoing one. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-crossfade-ms={CROSSFADE_DURATION_MS}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes={sizes}
              style={{ objectPosition: image.focalPoint }}
              className="object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* 2. Shared, stationary readability overlay - sits above both images
          and never itself fades, so the crossfade never dims/brightens the
          text underneath. Stronger on the left (hero copy side), lighter on
          the right (photograph stays visible), plus a subtle bottom gradient
          and a faint overall tint to normalize exposure between the two
          photos. Slightly stronger uniform tint on small screens, where the
          hero copy occupies more of the frame. */}
      <div aria-hidden="true" className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/35 sm:bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* 3. Hero copy, composed in from the server-rendered parent. */}
      {children}

      {/* 4. Slideshow controls. */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-[var(--page-gutter)] z-30 flex items-center gap-2 sm:bottom-8">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="이전 배경 이미지"
            className="flex h-11 w-11 items-center justify-center border border-[var(--color-ivory)]/35 bg-black/10 font-sans text-[var(--color-ivory)] transition-colors hover:border-[var(--color-ivory)]/70 hover:bg-black/20"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div
            className="flex items-center gap-1"
            role="group"
            aria-label="배경 이미지 선택"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={
                  index === 0
                    ? "첫 번째 배경 이미지 보기"
                    : "두 번째 배경 이미지 보기"
                }
                aria-current={index === activeIndex}
                className="flex h-11 w-11 items-center justify-center"
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 w-1.5 border border-[var(--color-ivory)]/70 transition-colors ${
                    index === activeIndex
                      ? "bg-[var(--color-ivory)]"
                      : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="다음 배경 이미지"
            className="flex h-11 w-11 items-center justify-center border border-[var(--color-ivory)]/35 bg-black/10 font-sans text-[var(--color-ivory)] transition-colors hover:border-[var(--color-ivory)]/70 hover:bg-black/20"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

