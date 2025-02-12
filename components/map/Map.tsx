"use client";
import Script from "next/script";
import React, { useCallback, useRef } from "react";
import { Coordinates, NaverMap } from "@/utils/types";

const mapId = "naver-map";

export default function Map({ loc }: { loc: Coordinates }) {
  const mapRef = useRef<NaverMap>();

  const initializeMap = useCallback(() => {
    const location = new naver.maps.LatLng(loc);
    const mapOptions = {
      center: new window.naver.maps.LatLng(loc),
      zoom: 14,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [loc]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onReady={initializeMap}
      ></Script>
      <div id={mapId} className="w-full sm:h-4/6 h-5/6" />
    </>
  );
}
