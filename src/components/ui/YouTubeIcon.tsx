interface YouTubeIconProps {
  className?: string;
  /** Accessible title when the icon is used standalone (no visible label nearby). */
  title?: string;
}

/**
 * Minimal inline YouTube glyph (rounded rect + play triangle). Marked
 * `aria-hidden` by default since it always accompanies visible link text;
 * pass `title` to make it independently accessible if ever used alone.
 */
export default function YouTubeIcon({ className = "h-4 w-4", title }: YouTubeIconProps) {
  return (
    <svg
      viewBox="0 0 28 20"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <rect width="28" height="20" rx="5" fill="currentColor" />
      <path d="M11.5 6.2v7.6c0 .5.55.82.99.55l6.2-3.8a.64.64 0 0 0 0-1.1l-6.2-3.8a.64.64 0 0 0-.99.55Z" fill="#050505" />
    </svg>
  );
}
