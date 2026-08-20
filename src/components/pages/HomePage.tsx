import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurHeart from "@/components/sections/OurHeart";
import WorshipSessions from "@/components/sections/WorshipSessions";
import Community from "@/components/sections/Community";
import Gathering from "@/components/sections/Gathering";
import type { SiteContent } from "@/types";

interface HomePageProps {
  content: SiteContent;
}

/**
 * Shared homepage composition rendered by both the Korean (`/`) and English
 * (`/en`) routes with locale-specific `content`. Keeps `app/page.tsx` and
 * `app/en/page.tsx` from duplicating the full section markup.
 */
export default function HomePage({ content }: HomePageProps) {
  return (
    // The root layout fixes `<html lang="ko">`. Korean needs no override;
    // English content is scoped with its own `lang="en"` here.
    <div lang={content.locale === "en" ? "en" : undefined}>
      <Header navigation={content.navigation} content={content.header} />
      <main>
        <Hero content={content.hero} />
        <OurHeart content={content.ourHeart} />
        <WorshipSessions content={content.worship} locale={content.locale} />
        <Community content={content.community} />
        <Gathering content={content.gathering} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
