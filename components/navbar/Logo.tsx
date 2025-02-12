"use client";
import React from "react";
// import Lottie from "react-lottie-player";
import hotSpring from "@/public/json/hotSpring.json";
import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

function Logo() {
  return (
    <Link href="/" className="flex items-center flex-wrap ">
      {/* <Lottie
        loop
        animationData={hotSpring}
        play
        style={{ width: 60, height: 60 }}
        className="mb-1 "
      /> */}
      <p className="hidden md:flex font-bagel text-center text-3xl tracking-wider text-red-600">
        온천
        {/* <span className="text-3xl text-emerald-600 tracking-widest">
          &nbsp;갈 지도
        </span> */}
      </p>
      <Lottie
        loop
        animationData={hotSpring}
        play
        style={{ width: 60, height: 60 }}
        className="mb-1 "
      />
      <p className="hidden md:flex font-bagel text-center text-3xl tracking-wider text-green-700">
        지도
      </p>

      {/* <h1 className="hidden md:flex font-bagel text-center text-3xl tracking-widest text-emerald-600">
        도감
      </h1> */}
    </Link>
  );
}

export default Logo;
