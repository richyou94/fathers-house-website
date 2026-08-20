import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import PlayIcon from "@/components/ui/PlayIcon";
import YouTubeIcon from "@/components/ui/YouTubeIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { socialLinks } from "@/data/socialLinks";
import {
  getWorshipThumbnailUrl,
  getWorshipVideoUrl,
  worshipSessions,
} from "@/data/worshipSessions";
import type { Locale, WorshipContent, WorshipSession } from "@/types";

/** A worship session confirmed to have a real, specific YouTube video. */
type PlayableSession = WorshipSession & { videoId: string };

function VideoCard({
  session,
  locale,
  featured = false,
}: {
  session: PlayableSession;
  locale: Locale;
  featured?: boolean;
}) {
  const primaryTitle = locale === "en" ? session.titleEn : session.titleKo;
  const secondaryTitle = locale === "en" ? session.titleKo : session.titleEn;
  const videoUrl = getWorshipVideoUrl(session.videoId);
  const thumbnailUrl = getWorshipThumbnailUrl(session.videoId, session.thumbnailQuality);
  const ariaLabel =
    locale === "en"
      ? `Watch ${session.titleEn} on YouTube - opens in a new tab`
      : `${session.titleKo} YouTube에서 보기 - 새 탭에서 열림`;

  return (
    <ExternalLink href={videoUrl} ariaLabel={ariaLabel} className="group flex flex-col gap-4">
      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
        <Image
          src={thumbnailUrl}
          alt=""
          fill
          priority={featured}
          sizes={
            featured
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
          className="object-cover transition-[filter] duration-300 ease-out group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 ease-out group-hover:bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className={`flex items-center justify-center rounded-full bg-black/55 text-[var(--color-ivory)] transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110 ${
              featured ? "h-16 w-16 sm:h-20 sm:w-20" : "h-12 w-12"
            }`}
          >
            <PlayIcon
              className={
                featured ? "h-7 w-7 translate-x-0.5 sm:h-8 sm:w-8" : "h-5 w-5 translate-x-0.5"
              }
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-[var(--color-amber)] uppercase">
          WORSHIP SESSION
        </p>
        <p
          className={`font-serif text-[var(--color-ivory)] ${
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {primaryTitle}
        </p>
        <p className="font-sans text-xs tracking-[0.1em] text-[var(--color-ivory)]/50 uppercase">
          {secondaryTitle}
        </p>
      </div>
    </ExternalLink>
  );
}

interface WorshipSessionsProps {
  content: WorshipContent;
  locale: Locale;
}

export default function WorshipSessions({ content, locale }: WorshipSessionsProps) {
  // Only sessions with a confirmed, specific YouTube video are rendered as
  // playable cards - no manufactured thumbnails for channel-only links.
  const availableSessions = worshipSessions.filter(
    (session): session is PlayableSession => Boolean(session.videoId),
  );
  const featured = availableSessions.find((session) => session.featured) ?? availableSessions[0];
  const supporting = availableSessions.filter((session) => session !== featured);

  return (
    <section
      id="worship"
      className="bg-[var(--color-charcoal)] py-[var(--section-space)] text-[var(--color-ivory)]"
    >
      <Container className="flex flex-col gap-12">
        <ScrollReveal className="flex max-w-[var(--reading-width)] flex-col gap-6">
          <SectionLabel className="text-[var(--color-amber)]">
            {content.sectionLabel}
          </SectionLabel>
          <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
            {content.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="font-sans text-base leading-relaxed text-[var(--color-ivory)]/70 sm:text-lg">
            {content.body}
          </p>
        </ScrollReveal>

        {featured && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal className="lg:col-span-8" delay={160}>
              <VideoCard session={featured} locale={locale} featured />
            </ScrollReveal>
            {supporting.length > 0 && (
              <div className="flex flex-col gap-10 lg:col-span-4">
                {supporting.map((session, index) => (
                  <ScrollReveal key={session.videoId} delay={220 + index * 60}>
                    <VideoCard session={session} locale={locale} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        )}

        <ExternalLink
          href={socialLinks.youtube.href}
          ariaLabel={content.allSessionsAriaLabel}
          className="group inline-flex min-h-11 w-fit items-center gap-3 border border-[var(--color-ivory)]/25 px-5 py-2.5 font-sans text-sm tracking-wide text-[var(--color-ivory)] transition-colors hover:border-[var(--color-ivory)]/60 hover:bg-white/5"
        >
          <YouTubeIcon className="h-4 w-6 text-[var(--color-youtube-red)]" />
          {content.allSessionsLabel}
          <span
            aria-hidden="true"
            className="text-base transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </ExternalLink>
      </Container>
    </section>
  );
}
