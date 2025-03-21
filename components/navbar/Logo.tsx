"use client";
import React from "react";
import hotSpring from "@/public/json/hotSpring.json";
import Link from "next/link";
import dynamic from "next/dynamic";
import { sendGTMEvent } from "@next/third-parties/google";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center flex-wrap"
      aria-label="thermalbath-main"
      rel="preload"
    >
      <div
        className="hidden md:flex font-bagel text-center text-3xl tracking-wider"
        onClick={() => sendGTMEvent({ event: "logoClicked", value: "logo" })}
      >
        <p className=" text-red-600" rel="preload">
          온천갈
        </p>
        <p className=" text-green-700" rel="preload">
          지도
        </p>
      </div>

      <Lottie
        loop
        animationData={hotSpring}
        play
        className="items-center h-12 w-12"
      />
    </Link>
  );
}

export default Logo;
