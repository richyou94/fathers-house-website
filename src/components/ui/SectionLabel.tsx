interface SectionLabelProps {
  children: string;
  className?: string;
}

/**
 * Small uppercase section label, e.g. "01 / OUR HEART".
 */
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`font-sans text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-clay)] ${className}`}
    >
      {children}
    </p>
  );
}
