import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import { links } from "@/utils/links";
import Link from "next/link";
import UserIcon from "./UserIcon";
import Image from "next/image";
import banana from "@/public/images/banana.png";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-2 max-w-[100px]" variant="outline">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-10 items-center"
        align="start"
        sideOffset={5}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Image src={banana} alt="바나나우유" className="w-5 h-5 ml-1" />
              <Link href={link.href} className="capitalize w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
