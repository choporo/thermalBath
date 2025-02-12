import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import PageTransition from "@/components/animation/PageTransition";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "온천 갈 지도 | 국내 온천 도감",
    template: "%s | 온천 갈 지도",
  },
  description: "우리나라 사람들도 잘 모르는 국내 온천 가이드",
  twitter: {
    card: "summary_large_image",
    images: "/images/twitter.png",
  },
  icons: {
    icon: "/images/hotSpring.png",
  },
  keywords: [
    "온천",
    "hot spring",
    "Thermer spring",
    "thermal baths",
    "hot spa",
    "온양온천",
    "동래온천",
    "덕구온천",
    "금진온천",
    "덕구온천",
    "온천장",
    "덕산온천",
    "온천여행",
    "부곡온천",
    "수안보온천",
    "담양온천",
    "백암온천",
    "화성온천",
    "온천여행",
    "족욕",
    "반신욕",
    "노천탕",
    "노천온천",
  ],
  openGraph: {
    title: "온천 갈 지도 | 국내 온천  도감",
    description: "우리나라 사람들도 잘 모르는 국내 온천 가이드",
    siteName: "온천 갈 지도",
    locale: "ko_KR",
    type: "website",
    url: "",
    images: {
      url: "/images/hotSpring.png",
    },
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "85286c65d4504eaad837251f2e9b46baf18b7f0b",
    },
  },
};

const bagel = localFont({
  src: "../public/font/bagel.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-bagel",
});

const pretendard = localFont({
  src: "../public/font/pretendard.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const pretendard_bold = localFont({
  src: "../public/font/pretendard_bold.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const pretendard_semibold = localFont({
  src: "../public/font/pretendard_semibold.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={pretendard.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>
          <Navbar />
          <PageTransition>
            <main className="container py-3">
              {children}
              {modal}
            </main>
            <Toaster />
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
