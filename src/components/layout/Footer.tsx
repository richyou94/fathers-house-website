import Container from "@/components/ui/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { footer, socialLinks } from "@/data/siteContent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-ivory)]">
      <Container className="flex flex-col gap-10 py-16">
        <p className="font-serif text-4xl tracking-tight sm:text-6xl">
          {footer.phrase}
        </p>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-ivory)]/80">
            <p>{footer.name}</p>
            <p className="mt-1 text-[var(--color-ivory)]/50">
              {footer.location} · {year}
            </p>
          </div>

          <div className="flex gap-6 font-sans text-sm tracking-wide">
            <ExternalLink
              href={socialLinks.instagram.href}
              ariaLabel="Father's House Instagram (opens in a new tab)"
              className="text-[var(--color-ivory)]/80 transition-opacity hover:opacity-100"
            >
              Instagram
            </ExternalLink>
            <ExternalLink
              href={socialLinks.youtube.href}
              ariaLabel="Father's House YouTube (opens in a new tab)"
              className="text-[var(--color-ivory)]/80 transition-opacity hover:opacity-100"
            >
              YouTube
            </ExternalLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
