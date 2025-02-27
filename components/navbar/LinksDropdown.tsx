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
import banana from "@/public/images/banana.avif";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-2 max-w-[80px]" variant="outline">
          <LuAlignLeft className="w-6 h-6" aria-label="Align-left" />
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
            <DropdownMenuItem key={link.href} aria-label="dropdownList">
              <Image
                src={banana}
                alt="바나나우유"
                className="w-5 h-5 ml-1"
                priority
              />
              <Link
                href={link.href}
                className="capitalize w-full"
                aria-label="한국의 온천"
              >
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
