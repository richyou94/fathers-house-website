import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { siteContentEn } from "@/data/siteContent.en";

export const metadata: Metadata = {
  title: "Father's House | A Place for His Presence",
  description:
    "A worshiping community in Seoul building a dwelling place for God's presence through worship and the Word.",
  openGraph: {
    title: "Father's House | A Place for His Presence",
    description:
      "A worshiping community in Seoul building a dwelling place for God's presence through worship and the Word.",
  },
  alternates: {
    languages: {
      ko: "/",
      en: "/en",
    },
  },
};

export default function EnglishHome() {
  return <HomePage content={siteContentEn} />;
}
