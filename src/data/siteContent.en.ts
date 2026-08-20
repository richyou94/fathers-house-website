import type { SiteContent } from "@/types";
import { navigation } from "@/data/navigation.en";

/**
 * Centralized, human-verified English site copy. Natural ministry English,
 * not a literal word-for-word translation of the Korean copy.
 *
 * Do not invent schedules, addresses, staff, beliefs, or ministries.
 * Anything not yet confirmed must stay a clearly marked placeholder.
 */
export const siteContentEn: SiteContent = {
  locale: "en",
  navigation,

  header: {
    homeAriaLabel: "Go to the Father\u2019s House homepage",
    navAriaLabel: "Main menu",
    menuOpenAriaLabel: "Open menu",
    menuCloseAriaLabel: "Close menu",
    menuOpenText: "Menu",
    menuCloseText: "Close",
    instagramAriaLabel: "Father's House Instagram (opens in a new tab)",
    languageSwitch: {
      label: "한국어",
      href: "/",
      ariaLabel: "한국어로 보기",
    },
  },

  hero: {
    ariaLabel:
      "Father's House worshipers gathered under warm light with instruments and microphones",
    eyebrow: "A dwelling place for His presence",
    headlineLines: ["A Place Where", "His Presence Dwells"],
    supportingCopy:
      "A worshiping community building a dwelling place for God\u2019s presence through worship and the Word.",
    scrollLabel: "Our Heart",
    scrollHref: "#our-heart",
    slideshow: {
      previous: "Previous background image",
      next: "Next background image",
      selectGroup: "Select background image",
      goTo: ["View first background image", "View second background image"],
    },
  },

  ourHeart: {
    sectionLabel: "01 / OUR HEART",
    headlineLines: [
      "We long for the presence and glory",
      "of our good and loving Father.",
    ],
    body: "Father\u2019s House is a community of worshipers building a dwelling place for God\u2019s presence through worship and the Word.",
  },

  worship: {
    sectionLabel: "02 / WORSHIP SESSIONS",
    headlineLines: ["Worship with us"],
    body: "Join us in worship through the latest sessions from Father\u2019s House.",
    allSessionsLabel: "View all worship sessions on YouTube",
    allSessionsAriaLabel:
      "View all worship sessions on the Father's House YouTube channel - opens in a new tab",
  },

  community: {
    sectionLabel: "COMMUNITY",
    headlineLines: ["Worshiping and Growing Together"],
    body: "We are a community where every generation worships together and grows together in faith. Children are a valued part of the life and worship of Father\u2019s House.",
    primaryImage: {
      src: "/images/community/community-gathered-worship.png",
      alt: "The worship leader and congregation gathered together for worship",
      focalPoint: "center 42%",
    },
    supportingImage: {
      src: "/images/community/community-kids-activity.jpg",
      alt: "Children gathered around a table for a creative activity",
      focalPoint: "80% 35%",
    },
    detailImage: {
      src: "/images/community/community-personal-prayer.jpg",
      alt: "A church member praying quietly during worship",
      focalPoint: "center 35%",
    },
  },

  gathering: {
    eyebrow: "WORSHIP WITH US",
    heading: "Worship With Us",
    description:
      "You are invited to worship with us at Father\u2019s House as we gather in God\u2019s presence through worship and the Word.",
    sundayService: {
      label: "SUNDAY WORSHIP",
      title: "Sunday Worship",
      recurrence: "Every Sunday",
      time: "2:00 PM",
      scheduleDateTime: "14:00",
    },
    openService: {
      label: "OPEN WORSHIP",
      title: "Open Worship",
      recurrence: "Third Thursday of every month",
      time: "8:00 PM",
      scheduleDateTime: "20:00",
      notice:
        "Any schedule changes will be announced separately through our official Instagram account.",
    },
    locationLabel: "Location",
    venueName: "Father's House",
    address: "Room 201, 226 Sungmun-gil, Mapo-gu, Seoul",
    nearbyNote: "Near Exit 5 of Ewha Womans University Station",
    mapCtaLabel: "View on Map",
    mapCtaAriaLabel: "View the Father's House location on a map - opens in a new tab",
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("서울특별시 마포구 숭문길 226")}`,
    instagramCtaLabel: "Check Schedule on Instagram",
    instagramCtaAriaLabel:
      "Check schedule on the Father's House Instagram account - opens in a new tab",
    image: "/images/gathering/fathers-house-gathering-space.png",
    imageAlt: "A cozy space at Father's House set up for worship and gathering",
  },

  footer: {
    backToTopAriaLabel: "Back to the top of the Father's House website",
    name: "FATHER'S HOUSE",
    location: "SEOUL, KOREA",
    instagramAriaLabel: "Father's House Instagram (opens in a new tab)",
    youtubeAriaLabel: "Father's House YouTube (opens in a new tab)",
  },
};
