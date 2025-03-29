import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import PageTransition from "@/components/animation/PageTransition";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import { GoogleAdSense } from "@/components/google/GoogleAdSence";
import Footer from "@/components/footer/Footer";
import Container from "@/components/global/Container";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "온천갈지도 | 국내 온천 도감",
    template: "%s | 국내 온천 도감 - 온천갈지도",
  },
  description: "검증된 온천수를 사용하는 우리동네 목욕탕 안내",
  twitter: {
    card: "summary_large_image",
    images: "/images/twitter.png",
  },
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "온천",
    "hot spring",
    "Thermer spring",
    "thermal baths",
    "hot spa",
    "온천여행",
    "힐링되는 국내온천",
    "국내온천 추천",
    "국내 노천탕",
    "국내 노천온천",
    "찜질방",
    "가족탕",
    "국내온천",
    "한국의 온천",
    "국내 온천 추천",
    "목욕탕",
    "우리동네 목욕탕",
    "세신",
    "사우나",
    "온천사우나",
  ],
  openGraph: {
    title: "온천갈지도 | 국내 온천 도감",
    description: "검증된 온천수를 사용하는 우리동네 목욕탕 안내",
    siteName: "온천갈지도",
    locale: "ko_KR",
    type: "website",
    url: "온천갈지도",
    images: {
      url: "/images/twitter.png",
    },
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
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

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAdSense />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG ? (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG} />
        ) : null}
      </head>
      <body className={inter.className}>
        <Providers>
          <Container>
            <Navbar />
            <PageTransition>
              <main className="container py-3">
                {children}
                {modal}
              </main>
              <Toaster />
            </PageTransition>
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
