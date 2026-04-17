import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoSans = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ziye Lin | Product Designer & Developer",
  description: "个人作品集 - 探索产品设计、数据分析与自动化",
  keywords: ["portfolio", "product design", "data analysis", "automation", "crypto"],
  authors: [{ name: "Ziye Lin" }],
  openGraph: {
    title: "Ziye Lin | Product Designer & Developer",
    description: "个人作品集 - 探索产品设计、数据分析与自动化",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSerif.variable} ${notoSans.variable} ${jetbrainsMono.variable}`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
