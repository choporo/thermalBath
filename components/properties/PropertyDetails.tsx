import { formatQuantity } from "@/utils/format";

type PropertyDetailsProps = {
  details: {
    baths: number;
    openAirBaths: number;
    sauna: number;
  };
};

function PropertyDetails({
  details: { baths, openAirBaths, sauna },
}: PropertyDetailsProps) {
  return (
    <p className="sm:text-base/7 text-sm/7 mt-1  tracking-wider">
      {/* <span>{formatQuantity(openAirBaths, "노천탕")} &middot; </span> */}
      {openAirBaths === 0 ? null : (
        <span>
          {formatQuantity(openAirBaths, "노천탕")}
          &middot;&nbsp;
        </span>
      )}
      <span>{formatQuantity(baths, "실내탕")} &middot; </span>
      <span>{formatQuantity(sauna, "사우나")}</span>
    </p>
  );
}
export default PropertyDetails;
