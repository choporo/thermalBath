import React from "react";
import Image from "next/image";

function ImageContainer({ image, name }: { image: string; name: string }) {
  return (
    <section className="content">
      <div className="content rounded-md h-[250px] overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
          className="image p-1 rounded-md object-cover transform hover:scale-110 transition-transform duration-500"
          priority
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
    </section>
  );
}

export default ImageContainer;
