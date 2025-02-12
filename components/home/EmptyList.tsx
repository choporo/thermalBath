import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  message = "등록된 온천 업체가 없습니다",
  btnText = "Back Home",
}: {
  message?: string;
  btnText?: string;
}) {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-base">{message}</h2>
      <Button asChild className="mt-4 capitalize bg-green-700" size="lg">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
}

export default EmptyList;
