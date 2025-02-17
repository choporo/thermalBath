import { WaterElement } from "@/utils/types";
import poster from "@/public/images/poster.jpg";
import Image from "next/image";

import React from "react";

function WaterComponent() {
  return (
    <div>
      <div className="mt-2 text-justify">
        <h2 className="sm:text-xl/loose text-base/loose font-pretendard_bold tracking-wider">
          2. 온천수에 따른 분류
        </h2>
      </div>

      <div className="my-1">
        <h3 className="sm:text-lg/loose text-base/loose font-pretendard_semibold tracking-wider ">
          &nbsp;2-1. 수소이온농도(pH)에 의한 분류
        </h3>
        <p className="sm:text-base/loose text-sm/loose tracking-wider text-justify">
          &nbsp;&nbsp;{WaterElement[0].label}
        </p>
        <div className="grid lg:grid-cols-12 gap-x-4 items-center mt-1">
          <Image
            src={poster}
            alt="공지사항"
            className="items-center lg:mx-2 lg:col-span-8 w-full h-72 hidden md:flex rounded-sm"
          />
          <div className="grid lg:col-span-4 lg:mx-2 sm:text-base text-sm">
            {WaterElement.map((water, index) =>
              index === 0 || index > 5 ? null : (
                <p
                  className="sm:text-base/loose text-sm/loose tracking-wider text-justify my-0.5 sm:my-2"
                  key={index}
                >
                  {water.label}
                </p>
              )
            )}
          </div>
          {/* <Image
            src={poster}
            alt="공지사항"
            className="items-center lg:mx-2 lg:col-span-8 w-full h-52 hidden md:flex rounded-sm"
          /> */}
        </div>
      </div>
      <div className="sm:my-2 my-1">
        <h3 className="sm:text-lg/loose text-base/loose tracking-wider font-pretendard_semibold">
          &nbsp;2-2. 주요 이온성분에 의한 형의 구분
        </h3>
        <p className="tracking-wider sm:text-base/loose text-sm/loose text-justify">
          &nbsp;&nbsp;{WaterElement[6].label}
        </p>
      </div>
    </div>
  );
}

export default WaterComponent;
