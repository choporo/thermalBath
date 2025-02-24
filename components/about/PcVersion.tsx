import React from "react";
import SpringDefine from "./SpringDefine";
import WaterComponent from "./WaterComponent";
import { HowToSpa, WaterElement } from "@/utils/types";
import Image from "next/image";
import newlogo from "@/public/images/newlogo.png";
import payAttention from "@/public/images/payAttention.avif";
import MineralComposition from "./MineralComposition";

function PcVersion({ className }: { className: string }) {
  return (
    <div className={`lg:p-10 p-3 ${className}`}>
      <SpringDefine />
      <WaterComponent />
      <MineralComposition />
      <div className="mt-2">
        <h2 className="text-xl/loose font-bold tracking-wider">
          3. 국내 온천 특징
        </h2>
        <h4 className="text-base/loose tracking-wider ml-2">
          {WaterElement[16].label}
        </h4>
        <h6 className="text-sm/loose tracking-wider text-center">
          {WaterElement[17].label}
        </h6>
      </div>
      <div className="mt-5">
        <h2 className="text-xl/loose font-bold tracking-wider">
          4. 국내 온천 인증
        </h2>
        <div className="grid grid-cols-2 gap-x-5">
          <div>
            <div className="flex items-center text-center">
              <Image
                src={newlogo}
                alt="온천인증 로고"
                className="w-20 h-20"
                priority
              />
              <p className="col-span-3 text-base/loose tracking-wider">
                {WaterElement[18].label}
              </p>
            </div>
            <h2 className="sm:text-xl text-base font-bold tracking-wider leading-loose mt-5">
              5. 올바른 온천욕
            </h2>
            <div>
              {HowToSpa.map((spa, index) => (
                <p
                  className="leading-loose tracking-wider ml-1 text-justify"
                  key={index}
                >
                  {spa.label}
                </p>
              ))}
            </div>
          </div>
          <Image
            src={payAttention}
            alt="옛날 포스터"
            className="w-full h-4/5 rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default PcVersion;
