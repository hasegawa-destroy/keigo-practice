import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "敬語レビュアー",
  description: "敬語をクイズと文章添削で練習できるWebアプリです。4択問題で正しい敬語を選ぶ練習や、文章を作成して添削してもらう練習ができます。",
  keywords: ["敬語", "敬語練習", "練習", "AI", "添削", "レビュー"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "敬語レビュアー | クイズと文章添削で敬語を学べるWebアプリ",
    description:
      "4択クイズと文章添削を通して、ビジネスや日常生活で使える敬語を練習できます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
