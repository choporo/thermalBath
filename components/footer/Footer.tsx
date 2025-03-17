import React from "react";
import DisplayAds from "../google/DisplayAds";
import Container from "../global/Container";
import play from "@/public/images/play.png";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      {/* <DisplayAds /> */}
      <div className="w-full h-16">
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
