interface PlayIconProps {
  className?: string;
  /** Accessible title when the icon is used standalone (no visible label nearby). */
  title?: string;
}

/**
 * Minimal inline play-triangle icon. Marked `aria-hidden` by default since it
 * always accompanies a visible/labelled control; pass `title` to make it
 * independently accessible if ever used alone.
 */
export default function PlayIcon({ className = "h-5 w-5", title }: PlayIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path d="M8 5.14v13.72c0 .84.93 1.35 1.64.9l10.7-6.86a1.06 1.06 0 0 0 0-1.8L9.64 4.24A1.06 1.06 0 0 0 8 5.14Z" />
    </svg>
  );
}
