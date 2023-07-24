import React from "react";
import Link from "next/link";
import Container from "../Container";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Navigation } from "./Navigation";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white z-10  ">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center justify-center gap-5">
              <h1>Marketplace</h1>
            </div>
            <Search />
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Navigation />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
