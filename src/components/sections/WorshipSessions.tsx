import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import { worshipSessionsCopy, socialLinks } from "@/data/siteContent";
import { worshipSessions } from "@/data/worshipSessions";
import type { WorshipSession } from "@/types";

function SessionCard({
  session,
  featured = false,
}: {
  session: WorshipSession;
  featured?: boolean;
}) {
  return (
    <ExternalLink
      href={session.youtubeUrl}
      ariaLabel={`${session.titleKo} (${session.titleEn}) 영상 보기 - 새 탭에서 열림`}
      className="group flex flex-col gap-4"
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={session.image}
          alt={session.imageAlt}
          fill
          sizes={featured ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-serif text-xl text-[var(--color-ink)] sm:text-2xl">
          {session.titleKo}
        </p>
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-muted)]">
          {session.titleEn}
        </p>
      </div>
    </ExternalLink>
  );
}

export default function WorshipSessions() {
  const [featured, ...supporting] = worshipSessions;

  return (
    <section
      id="worship"
      className="bg-[var(--color-cream)] py-[var(--section-space)]"
    >
      <Container className="flex flex-col gap-12">
        <SectionLabel>{worshipSessionsCopy.sectionLabel}</SectionLabel>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <SessionCard session={featured} featured />
          </div>
          {supporting.map((session) => (
            <SessionCard key={session.titleEn} session={session} />
          ))}
        </div>

        <ExternalLink
          href={socialLinks.youtube.href}
          ariaLabel="Father's House YouTube 채널에서 모든 예배 영상 보기 - 새 탭에서 열림"
          className="inline-flex w-fit items-center gap-2 font-sans text-sm tracking-wide text-[var(--color-ink)] underline decoration-[var(--color-clay)] underline-offset-4 transition-opacity hover:opacity-70"
        >
          {worshipSessionsCopy.allSessionsLabel}
        </ExternalLink>
      </Container>
    </section>
  );
}
