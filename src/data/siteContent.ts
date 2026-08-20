import type {
  CommunityImage,
  GatheringDetail,
  HeroBackgroundImage,
  SocialLink,
} from "@/types";

/**
 * Centralized, human-verified site copy and external links.
 *
 * Do not invent schedules, addresses, staff, beliefs, or ministries.
 * Anything not yet confirmed must stay a clearly marked placeholder.
 */

export const churchName = {
  ko: "파더스하우스",
  en: "Father's House",
};

export const socialLinks: Record<"instagram" | "youtube", SocialLink> = {
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/fathers_house_official/",
  },
  youtube: {
    label: "YouTube",
    href: "https://www.youtube.com/@FathersHouse_Official",
  },
};

/**
 * The two hero background photos, alternated by `HeroBackgroundSlideshow`.
 * Both are purely atmospheric/decorative, so the slideshow marks them
 * `aria-hidden` rather than repeatedly announcing background changes;
 * `hero.ariaLabel` below carries the accessible description instead.
 */
export const heroImages: readonly HeroBackgroundImage[] = [
  {
    src: "/images/hero/fathers-house-hero.png",
    focalPoint: "center center",
  },
  {
    src: "/images/hero/fathers-house-hero2.png",
    focalPoint: "75% center",
  },
] as const;

export const hero = {
  ariaLabel:
    "따뜻한 조명 아래 악기와 마이크를 둘러싸고 함께 찬양하는 파더스하우스 예배자들",
  headlineKo: "아버지의 임재가 머무는 곳",
  supportingLabelEn: "A dwelling place for His presence",
  supportingCopyKo:
    "찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배 공동체",
  scrollHref: "#our-heart",
};

export const ourHeart = {
  sectionLabel: "01 / OUR HEART",
  headlineLines: ["선하고 좋으신 아버지의", "임재와 영광을 갈망합니다."],
  body: "파더스하우스는 찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배자들의 공동체입니다.",
};

export const worshipSessionsCopy = {
  sectionLabel: "02 / WORSHIP SESSIONS",
  allSessionsLabel: "모든 예배 영상 보기",
};

export const communityCopy = {
  sectionLabel: "03 / COMMUNITY",
};

export const communityImages: CommunityImage[] = [
  {
    src: "/images/worship/worship-drums.png",
    alt: "함께 연습하며 리듬을 맞추는 드럼 연주자",
  },
  {
    src: "/images/worship/worship-keyboard.png",
    alt: "따뜻한 조명 아래 건반을 연주하는 예배자",
  },
  {
    src: "/images/worship/worship-guitar.png",
    alt: "기타를 연주하며 찬양을 준비하는 예배팀원",
  },
  {
    src: "/images/community/community-02.png",
    alt: "예배 후 함께 모여 교제하는 파더스하우스 공동체",
  },
];

export const gathering = {
  sectionLabel: "04 / GATHERING",
  headlineLines: ["아버지의 집에서", "함께 예배해요."],
  supportingEn: "There is a place for you.",
  image: "/images/gathering/fathers-house-gathering-space.png",
  imageAlt: "예배와 모임을 위해 마련된 파더스하우스의 아늑한 공간",
  details: [
    {
      label: "WHEN",
      value: "예배 시간 업데이트 예정",
    },
    {
      label: "WHERE",
      value: "서울 이대 인근 · 상세 주소 업데이트 예정",
    },
    {
      label: "CONNECT",
      value: "인스타그램 DM으로 문의해 주세요",
      href: socialLinks.instagram.href,
    },
  ] satisfies GatheringDetail[],
};

export const footer = {
  phrase: "COME HOME.",
  name: "FATHER'S HOUSE",
  location: "SEOUL, KOREA",
};
