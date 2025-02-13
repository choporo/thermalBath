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
      <p className="hidden md:flex font-bagel text-center text-3xl tracking-wider text-red-600">
        온천 갈
        <span className="hidden md:flex font-bagel text-center text-3xl tracking-wider text-green-700">
          &nbsp;지도
        </span>
      </p>
      <Lottie
        loop
        animationData={hotSpring}
        play
        style={{ width: 60, height: 60 }}
        className="items-center mb-2"
      />
    </Link>
  );
}

export default Logo;
