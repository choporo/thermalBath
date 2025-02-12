import { WaterElement, HowToSpa } from "@/utils/types";
import Image from "next/image";
import newLogo from "@/public/images/newlogo.png";

function SpringFeatures() {
  return (
    <article>
      <div className="sm:text-base/loose text-sm/loose">
        <h2 className="sm:text-xl text-base font-pretendard_bold sm:tracking-widest tracking-wider leading-loose">
          3. 국내 온천 특징
        </h2>
        <p className="sm:tracking-widest tracking-wider first-letter:ml-1 text-justify">
          {WaterElement[16].label}
        </p>
        <p className="sm:text-sm text-xs leading-loose sm:tracking-widest tracking-wider sm:ml-4">
          {WaterElement[17].label}
        </p>
      </div>
      <div className="sm:mt-5">
        <h2 className="sm:text-xl text-base font-pretendard_bold tracking-wider leading-loose">
          4. 국내 온천 인증
        </h2>
        <div className="flex items-center  text-center sm:text-base text-sm leading-loose sm:my-2">
          <Image src={newLogo} alt="온천인증 로고" className="w-20 h-20" />
          <p className="col-span-3 leading-loose tracking-wider text-justify">
            {WaterElement[18].label}
          </p>
        </div>
        <div className="sm:text-base text-sm sm:mt-5">
          <h2 className="sm:text-xl text-base font-pretendard_bold tracking-wider leading-loose ">
            5. 올바른 온천욕
          </h2>
          <p className="leading-loose tracking-wider first-letter:ml-1 text-justify">
            {HowToSpa[0].label}
          </p>
          <p className="leading-loose tracking-wider first-letter:ml-1 text-justify">
            {HowToSpa[1].label}
          </p>
          <p className="leading-loose tracking-wider first-letter:ml-1 text-justify">
            {HowToSpa[2].label}
          </p>
        </div>
      </div>
    </article>
  );
}

export default SpringFeatures;
