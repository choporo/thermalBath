import React from "react";
import { Input } from "../ui/input";

function BottomNavSearch() {
  return (
    <Input
      type="text"
      className="md:hidden flex mx-auto items-center justify-center mb-5 max-w-xs sm:max-w-screen-sm dark:bg-muted"
    />
  );
}

export default BottomNavSearch;
