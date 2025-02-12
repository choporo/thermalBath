"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CheckPage() {
  const [password, setPassword] = useState("");
  const handlePassword = (event: any) => {
    setPassword(event?.target.value);
  };

  return (
    <section className="flex flex-col flex-wrap gap-y-5 items-center justify-center">
      <h2 className="text-lg font-bagel">비번 입력해봐</h2>
      <Input type="password" onChange={handlePassword} className="w-50" />
      <Link href={`/admin/${password}`} className="w-50" replace passHref>
        <Button>Summit</Button>
      </Link>
    </section>
  );
}

export default CheckPage;
