import React from "react";
import Image from "next/image";

function ImageContainer({ image, name }: { image: string; name: string }) {
  return (
    <section className="content">
      <div className="content rounded-md h-[300px] overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
          // className="image p-1 rounded-lg object-cover transform hover:scale-110 transition-transform duration-500"
          // className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOF/PQAINwMgoLldegAAAABJRU5ErkJggg=="
          decoding="async"
          loading="eager"
        />
      </div>
    </section>
  );
}

export default ImageContainer;
