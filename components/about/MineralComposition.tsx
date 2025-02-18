import { WaterElement } from "@/utils/types";
import React from "react";

function MineralComposition() {
  return (
    <article>
      <div className="sm:text-base text-sm sm:my-2 text-justify ">
        <h3 className="sm:text-lg/loose text-base/loose font-semibold tracking-wider ml-1">
          2-3. 광천(미네랄)온천의 분류
        </h3>
        <div className="text-justify lg:col-span-8 ">
          {WaterElement.map((item, index) =>
            index > 6 && index < 14 ? (
              <p
                className="sm:text-base/loose text-sm/loose sm:tracking-widest tracking-wider sm:ml-4 sm:my-1"
                key={index}
              >
                {item.label}
              </p>
            ) : null
          )}
        </div>
        <h3 className="sm:text-lg/loose text-base/loose font-semibold tracking-wider ml-1">
          2-4. 미량성분에 의한 분류
        </h3>
        <p className="text-sm/loose sm:text-base/loose sm:tracking-widest tracking-wider sm:ml-4 sm:my-1">
          {WaterElement[14].label}
        </p>
        <p className="text-center sm:tracking-widest tracking-wider text-xs/loose sm:text-sm/loose">
          {WaterElement[15].label}
        </p>
      </div>
    </article>
  );
}

export default MineralComposition;
