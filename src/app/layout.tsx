import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Father's House | 아버지의 임재가 머무는 곳",
  description:
    "찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배 공동체, Father's House.",
  openGraph: {
    title: "Father's House | 아버지의 임재가 머무는 곳",
    description:
      "찬양과 말씀 가운데 하나님의 임재의 처소를 세워가는 예배 공동체, Father's House.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${cormorantGaramond.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
