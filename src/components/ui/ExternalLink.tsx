import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
}

/**
 * Anchor for links leaving the site (Instagram, YouTube, etc).
 * Always opens in a new tab with a safe `rel` value.
 */
export default function ExternalLink({
  href,
  children,
  ariaLabel,
  className = "",
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
