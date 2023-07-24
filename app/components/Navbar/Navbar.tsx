"use client";

import React from "react";
import Link from "next/link";
import Container from "../Container";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Navigation } from "./Navigation";
import router, { useRouter } from "next/router";

export default function Navbar() {
  const handleRefresh = () => {
    router.reload();
  };
  return (
    <nav className="w-full bg-white z-10  ">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center justify-center gap-5">
              <Link onClick={handleRefresh} href="/">
                {" "}
                <h1 className="font-bold text-xl ">Marketplace</h1>
              </Link>
            </div>
            <Search />
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Navigation />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-start gap-10 items-center">
            <div className="text-gray-500 text-sm">Categories</div>
            <div className="text-gray-500 text-sm">Ready to Ship</div>
            <div className="text-gray-500 text-sm">
              Protection Available for Every Purchase
            </div>
            <div className="text-gray-500 text-sm">Buyer Central</div>
            <div className="text-gray-500 text-sm">Seller Central</div>
            <div className="text-gray-500 text-sm">Help</div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
