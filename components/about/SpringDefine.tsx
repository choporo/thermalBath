import { ThermalDefinition } from "@/utils/types";
import Image from "next/image";
import chuksan from "@/public/images/chuksan.jpg";

function SpringDefine() {
  return (
    <div>
      <h2 className="lg:text-xl/8 text-base/8 font-pretendard_bold tracking-widest">
        1. 온천 정의
      </h2>
      <h3 className="sm:text-base text-sm tracking-wider leading-loose sm:my-2">
        &nbsp;{ThermalDefinition[0].label}
      </h3>
      <aside className="grid lg:grid-cols-2 gap-x-5 items-center justify-between">
        <div>
          {ThermalDefinition.map((item, index) =>
            index === 0 || index > 5 ? null : (
              <p
                className="sm:text-base/loose text-sm/loose tracking-wider sm:ml-4 text-justify my-1 sm:my-2 ml-1"
                key={index}
              >
                {item.label}
              </p>
            )
          )}
        </div>
        <div className="hidden sm:grid relative h-full">
          <Image
            src={chuksan}
            alt="척산온천 옛 사진"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full md:h-60 lg:h-80 rounded object-cover"
          />
          <p className="text-sm text-center mt-2">
            {"<"}1973년 척산온천휴양촌 옛 모습{">"}
          </p>
        </div>
      </aside>
    </div>
  );
}

export default SpringDefine;
