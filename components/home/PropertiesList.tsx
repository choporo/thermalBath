"use client";
import { PropertyCardProps } from "@/utils/types";
import PropertyCard from "../card/PropertyCard";
import { FaRegPenToSquare } from "react-icons/fa6";

import { useState } from "react";
import PaginationSection from "../properties/PaginationSection";

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = properties.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <div className="flex justify-end items-center">
        <FaRegPenToSquare className="sm:w-4 sm:h-4 w-3 h-3 " />
        <p className="text-xs mx-1 font-bold text-right tracking-wider">
          {"("}방문자 리뷰{")"} :
          <span className="text-green-700">&nbsp;Naver</span>
        </p>
      </div>
      <section className="mt-2 gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((property, index) => {
          return <PropertyCard key={index} property={property} index={index} />;
        })}
      </section>
      <div className="mt-5">
        <PaginationSection
          totalItems={properties.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default PropertiesList;
