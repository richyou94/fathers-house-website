export interface NavigationItem {
  label: string;
  href: string;
}

export interface WorshipSession {
  titleKo: string;
  titleEn: string;
  youtubeUrl: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface GatheringDetail {
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface CommunityImage {
  src: string;
  alt: string;
}
