import { PropertyDetailProps } from "@/utils/types";
import { LiaWonSignSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { TbClockHour4 } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuFolderCheck } from "react-icons/lu";
import { LuCircleParking } from "react-icons/lu";
import { LiaTemperatureLowSolid } from "react-icons/lia";

function ThermalDetails({ property }: { property: PropertyDetailProps }) {
  const { address, hours, parking, fee, amenity, feature, phone, temperature } =
    property;
  return (
    <section className="tracking-wider sm:text-base text-sm text-justify">
      <div className="flex sm:gap-x-3 gap-x-2 items-center">
        <GrLocation className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p className="items-center-center">{address.split("/")[0]}</p>
      </div>
      <div className="flex sm:gap-x-3 gap-x-2  items-center my-3">
        <FiPhone className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>{phone}</p>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2 my-3">
        <TbClockHour4 className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>
          {hours}
          <span></span>
        </p>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2 my-3">
        <LuCircleParking className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>{parking}</p>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2 my-3">
        <LiaWonSignSolid className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <span>{fee}</span>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2 my-3">
        <LuFolderCheck className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>{amenity}</p>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2 my-3">
        <IoWaterOutline className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>{feature}</p>
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-2">
        <LiaTemperatureLowSolid className="sm:w-6 w-4 sm:h-6 h-4 text-orange-500" />
        <p>{temperature}</p>
      </div>
    </section>
  );
}

export default ThermalDetails;
