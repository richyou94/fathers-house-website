import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}

/**
 * Centers content within the site's editorial content width and applies
 * the shared responsive page gutter.
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[var(--content-width)] px-[var(--page-gutter)] ${className}`}
    >
      {children}
    </Tag>
  );
}
