import dynamic from "next/dynamic";
import { fetchPropertyDetails } from "@/utils/action";
import { redirect } from "next/navigation";
import PropertyDetails from "@/components/properties/PropertyDetails";
import { Separator } from "@/components/ui/separator";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Metadata } from "next";
import { HowToSpa } from "@/utils/types";
import InFeedAds from "@/components/google/InFeedAds";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `https://thermalbath.co.kr/properties/${params.id}`
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
  const ImageContainer = dynamic(
    () => import("@/components/properties/ImageContainer"),
    { ssr: false }
  );
  const BreadCrumbs = dynamic(
    () => import("@/components/properties/BreadCrumbs")
  );
  const GoogleMap = dynamic(() => import("@/components/map/GoogleMap"), {
    ssr: false,
  });
  const ThermalDetails = dynamic(
    () => import("@/components/properties/ThermalDetails")
  );
  
  return (
    <Modal>
      <div className="p-2 overflow-y-scroll">
        <BreadCrumbs category={category} name={name} />
        <ImageContainer image={property.image} name={property.name} />
        <header className="flex justify-between gap-x-4 items-center mt-2">
          <h1 className="sm:text-xl text-lg tracking-wider font-bold">
            {name}
          </h1>
          <div className="flex gap-x-1 items-center mr-1">
            <FaRegPenToSquare className="sm:w-4 sm:h-4 w-3 h-3 text-orange-500" />
            <p className="text-xs mt-0.5 tracikng-wider">{rating}건↑</p>
          </div>
        </header>
        <section className="text-justify">
          <PropertyDetails details={details} />
          <Separator className="mt-2 mb-3 " />
          <ThermalDetails property={thermal} />
          <p className="leading-loose tracking-wide text-xs text-center mt-1 mb-2">
            {HowToSpa[3].label}
          </p>
        </section>
        <GoogleMap lat={latitude} lon={longitude} name={name} />
      </div>
    </Modal>
  );
}

export default PropertyDetailsPage;
