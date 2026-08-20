import type { WorshipSession } from "@/types";

/**
 * Initial worship session lineup.
 *
 * Video IDs are extracted from the exact YouTube URLs already verified for
 * this project - never invented. "그 사랑이 내려와 / LOVE CAME DOWN" has no
 * confirmed specific video URL yet (only the channel), so it intentionally
 * has no `videoId` and is excluded from the rendered video grid until one
 * is supplied.
 */
export const worshipSessions: WorshipSession[] = [
  {
    titleKo: "순전한 예배",
    titleEn: "PURE",
    // From https://www.youtube.com/watch?v=hGIt30fAbgo
    videoId: "hGIt30fAbgo",
    featured: true,
  },
  {
    titleKo: "내 주 되신 주",
    titleEn: "FOR WHO YOU ARE",
    // From https://www.youtube.com/watch?v=BFdNWqYWll0
    videoId: "BFdNWqYWll0",
  },
  {
    titleKo: "그 사랑이 내려와",
    titleEn: "LOVE CAME DOWN",
    // TODO: no specific video URL confirmed yet - only the channel link
    // exists. Add `videoId` here once the exact video URL is available.
  },
];

export function getWorshipVideoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getWorshipThumbnailUrl(
  videoId: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault",
): string {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}
