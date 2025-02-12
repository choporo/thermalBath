import { PropertyCardProps } from "@/utils/types";
import PropertyCard from "../card/PropertyCard";
import { FaRegPenToSquare } from "react-icons/fa6";

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <div>
      <div className="flex justify-end items-center">
        <FaRegPenToSquare className="sm:w-4 sm:h-4 w-3 h-3 " />
        <p className="text-xs mx-1 font-pretendard_bold text-right tracking-wider">
          {"("}방문자 리뷰{")"} :
          <span className="text-green-700">&nbsp;Naver</span>
        </p>
      </div>
      <section className="mt-2 gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => {
          return (
            <PropertyCard key={property.id} property={property} index={index} />
          );
        })}
      </section>
    </div>
  );
}

export default PropertiesList;
