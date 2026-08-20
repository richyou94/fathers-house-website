"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Extra transition delay in milliseconds, e.g. for staggering related groups. */
  delay?: number;
  /** "up" fades in with a small upward move; "none" fades in place. */
  direction?: "up" | "none";
  /** IntersectionObserver threshold - how much of the element must be visible to reveal it. */
  threshold?: number;
}

const ROOT_MARGIN = "0px 0px -8% 0px";

// "Have we hydrated on the client yet?" via useSyncExternalStore rather than
// an effect + setState: the server (and the very first client render, to
// match it) report `false`; every subsequent client read reports `true`.
// This is what lets the pre-reveal hidden state apply only after mount
// without ever calling setState synchronously inside an effect body.
function subscribeMounted() {
  return () => {};
}
function getMountedSnapshot() {
  return true;
}
function getMountedServerSnapshot() {
  return false;
}

/**
 * Restrained, reveal-once entrance effect for below-the-fold content.
 *
 * Server-rendered output is always fully visible (opacity-100, no
 * transform), so content never depends on JavaScript to become visible -
 * only after mount does this component opt into the pre-reveal hidden
 * state and start observing, then fades/slides in the first time the
 * element enters the viewport and stops observing for good.
 *
 * Fully inert under `prefers-reduced-motion: reduce`: no observer is
 * created and content is shown immediately (the project's global
 * reduced-motion rule in globals.css also forces near-instant transitions
 * everywhere as a second safety net).
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );
  const prefersReducedMotion = useReducedMotion();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  // Hidden pre-reveal state only ever applies once mounted and not yet
  // revealed - the very first client render matches the SSR markup exactly.
  const isHidden = isMounted && !prefersReducedMotion && !isRevealed;
  const translate =
    direction === "up" ? "translate-y-4 sm:translate-y-5" : "";

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isHidden ? `opacity-0 ${translate}` : "opacity-100 translate-y-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
