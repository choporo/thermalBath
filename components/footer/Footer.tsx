"use client";
import React from "react";
import DisplayAds from "../google/DisplayAds";
import { sendGTMEvent } from "@next/third-parties/google";
import play from "@/public/images/play.png";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="hidden lg:flex">
        <DisplayAds />
      </div>
      <div
        className="w-full h-16 lg:hidden"
        onClick={() =>
          sendGTMEvent({ event: "googlePlayClicked", value: `GooglePlay` })
        }
      >
        <Link
          href="https://play.google.com/store/apps/details?id=com.choporo.hotspring"
          passHref
          aria-label="google_play"
        >
          <Image
            src={play}
            alt="google_play"
            priority
            unoptimized
            sizes="100vw"
            className="w-28 h-10 mx-auto"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
