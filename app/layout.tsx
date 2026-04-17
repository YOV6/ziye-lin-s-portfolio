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
  title: "林子业的个人主页",
  description: "个人作品集 - 关注数据驱动的产品设计、分析系统搭建与结构化问题求解",
  keywords: ["portfolio", "product design", "data analysis", "machine learning", "NLP"],
  authors: [{ name: "林子业" }],
  openGraph: {
    title: "林子业的个人主页",
    description: "个人作品集 - 关注数据驱动的产品设计、分析系统搭建与结构化问题求解",
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
