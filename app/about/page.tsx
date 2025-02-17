import bath from "@/public/images/bath.png";
import Image from "next/image";
import PcVersion from "@/components/about/PcVersion";
import MobileVersion from "@/components/about/MobileVersion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한국의 온천",
  description: "한국 온천의 정의부터 온천수 성분 등을 알기 쉽게 정리",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
    },
  },
};

function AboutPage() {
  return (
    <article className="sm:p-1">
      <div className="flex justify-center items-center gap-x-2 sm:p-2">
        <h1 className="lg:text-3xl text-xl font-pretendard_bold text-green-700 tracking-wider text-center leading-loose">
          한국의 <span className="text-red-600">온천</span>
        </h1>
        <Image src={bath} alt="목욕간판" className="sm:w-10 sm:h-14 w-8 h-12" />
      </div>
      <PcVersion className="hidden sm:grid" />
      <MobileVersion className="sm:hidden grid" />
    </article>
  );
}

export default AboutPage;
