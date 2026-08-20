export interface NavigationItem {
  label: string;
  href: string;
}

export interface WorshipSession {
  titleKo: string;
  titleEn: string;
  /**
   * Official YouTube video ID (the `v=` parameter). Optional: a session
   * without a confirmed specific video URL is kept out of the rendered
   * video grid rather than linking to a manufactured/generic thumbnail.
   */
  videoId?: string;
  /** Defaults to "maxresdefault"; fall back to "hqdefault" per-video if the max-res thumbnail 404s. */
  thumbnailQuality?: "maxresdefault" | "hqdefault";
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface CommunityImage {
  src: string;
  alt: string;
  /** CSS object-position value, e.g. "center 25%". Defaults to "center center". */
  focalPoint?: string;
}

export interface HeroBackgroundImage {
  src: string;
  focalPoint: string;
}

/** Site locale. Korean (`ko`) is the default at `/`; English (`en`) lives at `/en`. */
export type Locale = "ko" | "en";

export interface LanguageSwitch {
  /** Visible label, e.g. "EN" or "한국어". */
  label: string;
  href: string;
  ariaLabel: string;
}

export interface HeaderContent {
  homeAriaLabel: string;
  navAriaLabel: string;
  menuOpenAriaLabel: string;
  menuCloseAriaLabel: string;
  menuOpenText: string;
  menuCloseText: string;
  instagramAriaLabel: string;
  languageSwitch: LanguageSwitch;
}

export interface SlideshowLabels {
  previous: string;
  next: string;
  selectGroup: string;
  /** One accessible label per background image, in image order. */
  goTo: string[];
}

export interface HeroContent {
  ariaLabel: string;
  eyebrow: string;
  headlineLines: string[];
  supportingCopy: string;
  scrollLabel: string;
  scrollHref: string;
  slideshow: SlideshowLabels;
}

export interface SectionCopy {
  sectionLabel: string;
  headlineLines: string[];
  body: string;
}

export interface WorshipContent {
  sectionLabel: string;
  headlineLines: string[];
  body: string;
  allSessionsLabel: string;
  allSessionsAriaLabel: string;
}

export interface CommunityContent {
  sectionLabel: string;
  headlineLines: string[];
  body: string;
  /** Wide gathered-worship shot - the visual anchor, largest image. */
  primaryImage: CommunityImage;
  /** Children's creative activity - smaller supporting portrait. */
  supportingImage: CommunityImage;
  /** Quiet, personal-prayer moment - smaller detail portrait. */
  detailImage: CommunityImage;
}

export interface WorshipServiceInfo {
  /** Small English identity eyebrow, e.g. "SUNDAY WORSHIP" - same in both locales. */
  label: string;
  title: string;
  /** Recurring day pattern, e.g. "매주 주일" / "Every Sunday". Rendered independently of `time` for reliable wrapping. */
  recurrence: string;
  /** Time only, e.g. "오후 2시" / "2:00 PM". Kept on one line via `whitespace-nowrap`. */
  time: string;
  /** Time-only `datetime` for the `<time>` element, e.g. "14:00" - no date, so nothing goes stale. */
  scheduleDateTime: string;
  /** Optional supporting note, e.g. the Open Worship Instagram schedule-change notice. */
  notice?: string;
}

export interface GatheringContent {
  eyebrow: string;
  heading: string;
  description: string;
  /** Primary weekly service - given the stronger visual emphasis. */
  sundayService: WorshipServiceInfo;
  /** Secondary monthly gathering. */
  openService: WorshipServiceInfo;
  locationLabel: string;
  venueName: string;
  address: string;
  nearbyNote: string;
  mapCtaLabel: string;
  mapCtaAriaLabel: string;
  mapUrl: string;
  instagramCtaLabel: string;
  instagramCtaAriaLabel: string;
  image: string;
  imageAlt: string;
}

export interface FooterContent {
  /** Accessible label for the logo's "back to top" link (the image itself uses an empty/decorative alt). */
  backToTopAriaLabel: string;
  name: string;
  location: string;
  instagramAriaLabel: string;
  youtubeAriaLabel: string;
}

export interface SiteContent {
  locale: Locale;
  navigation: NavigationItem[];
  header: HeaderContent;
  hero: HeroContent;
  ourHeart: SectionCopy;
  worship: WorshipContent;
  community: CommunityContent;
  gathering: GatheringContent;
  footer: FooterContent;
}

