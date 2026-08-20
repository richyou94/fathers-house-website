import type { SiteContent } from "@/types";
import { navigation } from "@/data/navigation.ko";

/**
 * Centralized, human-verified Korean site copy.
 *
 * Do not invent schedules, addresses, staff, beliefs, or ministries.
 * Anything not yet confirmed must stay a clearly marked placeholder.
 */
export const siteContentKo: SiteContent = {
  locale: "ko",
  navigation,

  header: {
    homeAriaLabel: "Father\u2019s House 홈으로 이동",
    navAriaLabel: "주요 메뉴",
    menuOpenAriaLabel: "메뉴 열기",
    menuCloseAriaLabel: "메뉴 닫기",
    menuOpenText: "메뉴",
    menuCloseText: "닫기",
    instagramAriaLabel: "Father's House 인스타그램 (새 탭에서 열림)",
    languageSwitch: {
      label: "EN",
      href: "/en",
      ariaLabel: "영어로 보기",
    },
  },

  hero: {
    ariaLabel:
      "따뜻한 조명 아래 악기와 마이크를 둘러싸고 함께 찬양하는 파더스하우스 예배자들",
    eyebrow: "그분의 임재가 머무는 처소",
    headlineLines: ["아버지의 임재가 머무는 곳"],
    supportingCopy:
      "찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배 공동체",
    scrollLabel: "우리의 마음",
    scrollHref: "#our-heart",
    slideshow: {
      previous: "이전 배경 이미지",
      next: "다음 배경 이미지",
      selectGroup: "배경 이미지 선택",
      goTo: ["첫 번째 배경 이미지 보기", "두 번째 배경 이미지 보기"],
    },
  },

  ourHeart: {
    sectionLabel: "01 / 우리의 마음",
    headlineLines: ["선하고 좋으신 아버지의", "임재와 영광을 갈망합니다."],
    body: "파더스하우스는 찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배자들의 공동체입니다.",
  },

  worship: {
    sectionLabel: "02 / 예배 영상",
    headlineLines: ["예배 가운데 함께해요"],
    body: "파더스하우스의 예배 영상을 통해 어디서든 함께 예배하세요.",
    allSessionsLabel: "YouTube에서 모든 예배 영상 보기",
    allSessionsAriaLabel:
      "Father's House YouTube 채널에서 모든 예배 영상 보기 - 새 탭에서 열림",
  },

  community: {
    sectionLabel: "COMMUNITY",
    headlineLines: ["함께 예배하고, 함께 자라는 공동체"],
    body: "세대가 함께 예배하고, 믿음 안에서 함께 자라가는 공동체입니다. 아이들도 파더스하우스의 소중한 예배자이자 공동체의 한 사람으로 함께합니다.",
    primaryImage: {
      src: "/images/community/community-gathered-worship.png",
      alt: "찬양 인도자와 성도들이 한 공간에 모여 함께 예배하는 모습",
      focalPoint: "center 42%",
    },
    supportingImage: {
      src: "/images/community/community-kids-activity.jpg",
      alt: "아이들이 테이블에 둘러앉아 만들기 활동을 하는 모습",
      focalPoint: "80% 35%",
    },
    detailImage: {
      src: "/images/community/community-personal-prayer.jpg",
      alt: "예배 가운데 두 손을 가슴에 모으고 기도하는 성도의 모습",
      focalPoint: "center 35%",
    },
  },

  gathering: {
    eyebrow: "WORSHIP WITH US",
    heading: "예배 안내",
    description:
      "파더스하우스의 예배에 여러분을 초대합니다. 찬양과 말씀 가운데 하나님의 임재를 함께 누리며 예배합니다.",
    sundayService: {
      label: "SUNDAY WORSHIP",
      title: "주일예배",
      recurrence: "매주 주일",
      time: "오후 2시",
      scheduleDateTime: "14:00",
    },
    openService: {
      label: "OPEN WORSHIP",
      title: "오픈 워십",
      recurrence: "매월 셋째 주 목요일",
      time: "오후 8시",
      scheduleDateTime: "20:00",
      notice: "일정 변경 시 공식 인스타그램을 통해 별도로 안내드립니다.",
    },
    locationLabel: "예배 장소",
    venueName: "파더스하우스",
    address: "서울특별시 마포구 숭문길 226, 201호",
    nearbyNote: "이대역 5번 출구 인근",
    mapCtaLabel: "지도에서 보기",
    mapCtaAriaLabel: "파더스하우스 위치 지도에서 보기 - 새 탭에서 열림",
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("서울특별시 마포구 숭문길 226")}`,
    instagramCtaLabel: "인스타그램에서 일정 확인하기",
    instagramCtaAriaLabel:
      "Father's House 인스타그램에서 일정 확인하기 - 새 탭에서 열림",
    image: "/images/gathering/fathers-house-gathering-space.png",
    imageAlt: "예배와 모임을 위해 마련된 파더스하우스의 아늑한 공간",
  },

  footer: {
    backToTopAriaLabel: "파더스하우스 홈페이지 상단으로 이동",
    name: "FATHER'S HOUSE",
    location: "SEOUL, KOREA",
    instagramAriaLabel: "Father's House 인스타그램 (새 탭에서 열림)",
    youtubeAriaLabel: "Father's House 유튜브 (새 탭에서 열림)",
  },
};
