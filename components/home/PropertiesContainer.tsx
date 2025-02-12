import { fetchProperties } from "@/utils/action";
import { PropertyCardProps } from "@/utils/types";
import React from "react";
import EmptyList from "./EmptyList";
import PropertiesList from "./PropertiesList";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
