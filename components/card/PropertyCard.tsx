"use client";
import { PropertyCardProps } from "@/utils/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { formatQuantity } from "@/utils/format";
import { FaRegPenToSquare } from "react-icons/fa6";
import { sendGTMEvent } from "@next/third-parties/google";

function PropertyCard({
  property,
  index,
}: {
  property: PropertyCardProps;
  index: number;
}) {
  const {
    name,
    image,
    fee,
    id: propertyId,
    address,
    rating,
    baths,
    openAirBaths,
    sauna,
  } = property;

  const base64 = "data:image/jpeg;base64,";
  const blurImg =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII=";

  return (
    <motion.article
      className="group relative border-2 border-gray-100 rounded-sm shadow-sm bg-slate-50"
      layoutId={`item-motion-${property.id}`}
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={`/properties/${propertyId}`} scroll={false} rel="preload">
        <div
          className="content"
          onClick={() => sendGTMEvent({ event: "clicked", value: `${name}` })}
        >
          <div className="content relative h-[230px] sm:h-[280px] overflow-hidden rounded-md">
            <Image
              src={image}
              alt={name}
              fill
              blurDataURL={base64 + blurImg}
              placeholder="blur"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
              className="image p-2 rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
              priority
              loading="eager"
              unoptimized
            />
          </div>
          <div className="flex justify-between items-center mx-2">
            <h1 className="text-lg tracking-wider font-bold">{name}</h1>
            <div className="flex gap-x-1 items-center">
              <FaRegPenToSquare className="sm:w-4 sm:h-4 w-3 h-3 " />
              <p className="text-center text-xs">{rating}건+</p>
            </div>
          </div>
          <p className="text-sm mx-2 tracking-wider">
            {address.split(" ")[0]} {address.split(" ")[1]}{" "}
            {address.split(" ")[2]}
          </p>
          <div className="flex justify-between items-center mx-2 mb-2">
            <p className="text-sm tracking-wider">
              <span>₩{fee}</span>
            </p>
            <p className="text-xs sm:tracking-wide ">
              {openAirBaths === 0 ? null : (
                <span>
                  {formatQuantity(openAirBaths, "노천")}
                  &middot;&nbsp;
                </span>
              )}
              <span>{formatQuantity(baths, "실내")} &middot; </span>
              <span>{formatQuantity(sauna, "사우나")}</span>
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default PropertyCard;
