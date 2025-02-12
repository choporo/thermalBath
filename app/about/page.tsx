"use client";
// import { Metadata } from "next";
import bath from "@/public/images/bath.png";
// import { WaterElement } from "@/utils/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpringDefine from "@/components/about/SpringDefine";
import WaterComponent from "@/components/about/WaterComponent";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MineralComposition from "@/components/about/MineralComposition";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { Sliders } from "lucide-react";
import SpringFeatures from "@/components/about/SpringFeatures";
import PcVersion from "@/components/about/PcVersion";
import MobileVersion from "@/components/about/MobileVersion";

// import SpringDefine from "@/components/about/SpringDefine";
// import newlogo from "@/public/images/newlogo.png";
// import SpringDefine from "@/components/about/SpringDefine";
// import WaterComponent from "@/components/about/WaterComponent";

// export const metadata: Metadata = {
//   title: "온천의 정의",
//   description: "온천의 정의부터 온천수 성분 등을 알기 쉽게 정리",
//   robots: {
//     follow: true,
//     index: true,
//     googleBot: {
//       index: true,
//     },
//   },
// };

function AboutPage() {
  return (
    <article className="sm:p-1">
      <div className="flex justify-center items-center gap-x-2 sm:p-10">
        <h1 className="lg:text-3xl text-xl font-pretendard_bold text-green-700 tracking-wider text-center sm:mb-1 leading-loose">
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
