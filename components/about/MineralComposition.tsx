import { WaterElement } from "@/utils/types";
import Image from "next/image";
import payAttention from "@/public/images/payAttention.png";
import React from "react";

function MineralComposition() {
  return (
    <article>
      <div className="sm:text-base text-sm sm:my-2 text-justify ">
        <h3 className="sm:text-xl text-base tracking-widest leading-loose sm:ml-1 ">
          2-3. 광천(미네랄)온천의 분류
        </h3>
        <div className="grid lg:grid-cols-12 gap-x-1 items-center">
          <div className="sm:text-base text-sm/loose text-justify lg:col-span-8 ">
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[7].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[8].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[9].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[10].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[11].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[12].label}
            </p>
            <p className="sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
              {WaterElement[13].label}
            </p>
          </div>
          <Image
            src={payAttention}
            alt="공지사항"
            className="items-center lg:col-span-4 w-full h-64 rounded-sm hidden md:grid"
          />
        </div>
        <div className="sm:my-2">
          <h3 className="sm:text-xl text-base tracking-widest leading-loose">
            2-4. 미량성분에 의한 분류
          </h3>
          <p className="text-sm/loose sm:text-base/loose sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
            {WaterElement[14].label}
          </p>
        </div>
        <h6 className="text-center sm:tracking-widest tracking-wider text-xs/loose sm:text-sm/loose">
          {WaterElement[15].label}
        </h6>
      </div>
    </article>
  );
}

export default MineralComposition;
