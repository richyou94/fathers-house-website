"use client";

import { useSyncExternalStore } from "react";

/**
 * Whether the user has requested reduced motion, kept in sync via
 * `useSyncExternalStore` so it's safe during SSR/hydration (server and the
 * first client render both report `false`, then the real value takes over)
 * without ever calling `setState` synchronously inside an effect.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}
