import type { SocialLink } from "@/types";

/**
 * External channel links. Shared across locales - brand names and URLs are
 * not translated.
 */
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
