import React, { Suspense } from "react";
import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import NavSearch from "./NavSearch";
import LoadingCard from "../card/LoadingCard";
import Link from "next/link";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import play from "@/public/images/play.png";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-row justify-between items-center flex-wrap gap-4 py-5">
        <Logo />
        <Suspense fallback={<LoadingCard />}>
          <NavSearch />
        </Suspense>
        <div className="flex gap-2 items-center">
          <div className="w-full h-16 hidden lg:flex items-center">
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
                className="w-28 h-9"
              />
            </Link>
          </div>
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
