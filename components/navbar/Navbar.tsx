import React, { Suspense } from "react";
import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import NavSearch from "./NavSearch";
import LoadingCard from "../card/LoadingCard";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-row justify-between items-center flex-wrap gap-4 py-5">
        <Logo />
        <Suspense fallback={<LoadingCard />}>
          <NavSearch />
        </Suspense>
        <div className="flex gap-2 items-center">
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
