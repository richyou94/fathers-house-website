import type { WorshipSession } from "@/types";
import { socialLinks } from "@/data/siteContent";

/**
 * Initial worship session lineup.
 *
 * The exact YouTube URL for "그 사랑이 내려와 / LOVE CAME DOWN" is not yet
 * available in the project, so it temporarily links to the Father's House
 * YouTube channel instead of a specific video.
 */
export const worshipSessions: WorshipSession[] = [
  {
    titleKo: "순전한 예배",
    titleEn: "PURE",
    youtubeUrl: "https://www.youtube.com/watch?v=hGIt30fAbgo",
    image: "/images/worship/worship-leader.png",
    imageAlt: "마이크 앞에서 순전한 예배를 인도하는 워십 리더",
    featured: true,
  },
  {
    titleKo: "내 주 되신 주",
    titleEn: "FOR WHO YOU ARE",
    youtubeUrl: "https://www.youtube.com/watch?v=BFdNWqYWll0",
    image: "/images/worship/worship-room.png",
    imageAlt: "악기와 장비가 놓인 홈 스튜디오 형태의 예배 공간",
  },
  {
    titleKo: "그 사랑이 내려와",
    titleEn: "LOVE CAME DOWN",
    // TODO: replace with the exact video URL once it is confirmed.
    youtubeUrl: socialLinks.youtube.href,
    image: "/images/worship/worship-drums.png",
    imageAlt: "찬양 가운데 드럼을 연주하는 예배팀원",
  },
];
