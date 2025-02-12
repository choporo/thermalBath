import React from "react";
import SpringDefine from "./SpringDefine";
import WaterComponent from "./WaterComponent";
import { WaterElement } from "@/utils/types";
import Image from "next/image";
import newlogo from "@/public/images/newlogo.png";
import bath from "@/public/images/bath.png";

function PcVersion({ className }: { className: string }) {
  return (
    <div className={`lg:p-10 p-3 ${className}`}>
      {/* <div className="flex justify-center items-center gap-x-2 mb-2">
        <h1 className="lg:text-3xl text-xl font-pretendard_bold text-green-700 tracking-wider text-center mb-1 leading-loose">
          한국의 <span className="text-red-600">온천</span>
        </h1>
        <Image src={bath} alt="목욕간판" className="w-8 h-12" />
      </div> */}
      <SpringDefine />
      <WaterComponent />
      <div className="mt-5">
        <h2 className="text-xl/loose font-pretendard_bold tracking-wider">
          3. 국내 온천 특징
        </h2>
        <h4 className="text-base/loose tracking-wider">
          &nbsp;{WaterElement[16].label}
        </h4>
        <h6 className="text-sm/loose tracking-wider">
          &nbsp;&nbsp;&nbsp;{WaterElement[17].label}
        </h6>
      </div>
      <div className="mt-5">
        <h2 className="text-xl/loose font-pretendard_bold tracking-wider">
          4. 국내 온천 인증
        </h2>
        <div className="flex items-center text-center">
          <Image src={newlogo} alt="온천인증 로고" className="w-20 h-20" />
          <h4 className="col-span-3 text-base/loose tracking-wider">
            {WaterElement[18].label}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PcVersion;
