"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function GoogleMap({
  lat,
  lon,
  name,
}: {
  lat: string;
  lon: string;
  name: string;
}) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const position = {
        lat: Number(lat),
        lng: Number(lon),
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //   const marker = new google.maps.Marker({
      //     map: map,
      //     position: position,
      //     title: name,
      //   });
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: position,
        title: name,
      });
    };
    initMap();
  }, []);
  return <div className="sm:h-5/6 h-full w-full mb-5" ref={mapRef} />;
}

export default GoogleMap;
