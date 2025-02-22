import { Modal } from "@/components/Modal";
import dynamic from "next/dynamic";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import { fetchPropertyDetails } from "@/utils/action";
import { redirect } from "next/navigation";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyDetails from "@/components/properties/PropertyDetails";
import { Separator } from "@/components/ui/separator";
import ThermalDetails from "@/components/properties/ThermalDetails";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Metadata } from "next";
import GoogleMap from "@/components/map/GoogleMap";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `https://www.thermalbath.co.kr/properties/${params.id}`
  );
  const post = await fetchPropertyDetails(params.id);

  return {
    title: post?.name,
    description: post?.feature,
    robots: {
      follow: true,
      index: true,
      googleBot: {
        index: true,
      },
    },
  };
}

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");
  const { baths, openAirBaths, sauna } = property;
  const details = { baths, openAirBaths, sauna };

  const {
    address,
    fee,
    feature,
    parking,
    hours,
    amenity,
    rating,
    category,
    name,
    phone,
    temperature,
    latitude,
    longitude,
  } = property;
  const thermal = {
    address,
    fee,
    feature,
    parking,
    hours,
    amenity,
    phone,
    temperature,
  };

  const Modal = dynamic(() => import("@/components/Modal"));

  return (
    <Modal>
      <div className="p-2 my-4 sm:mt-8 overflow-auto">
        <BreadCrumbs category={category} name={name} />
        <ImageContainer image={property.image} name={property.name} />
        <section className="mt-2 text-justify overflow-x-scroll">
          <header className="flex justify-between gap-x-4 items-center">
            <h1 className="text-xl tracking-wider font-bold">{name}</h1>
            <div className="flex gap-x-1 items-center mr-1">
              <FaRegPenToSquare className="sm:w-4 sm:h-4 w-3 h-3 text-orange-500" />
              <p className="text-xs mt-0.5 tracikng-wider">{rating}건↑</p>
            </div>
          </header>
          <PropertyDetails details={details} />
          <Separator className="mt-2 mb-3 " />
          <ThermalDetails property={thermal} />
        </section>
        <GoogleMap lat={latitude} lon={longitude} name={name} />
      </div>
    </Modal>
  );
}

export default PropertyDetailsPage;
