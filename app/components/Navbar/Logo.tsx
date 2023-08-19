"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <Link onClick={handleRefresh} href="/"></Link>
      <Image src="/Infinity.png" width={60} height={60} alt="Logo" />
      <Link onClick={handleRefresh} href="/">
        {" "}
        <h1 className="font-bold text-[#FD7D01] text-xl ">InfinityTrade</h1>
      </Link>
    </div>
  );
};
