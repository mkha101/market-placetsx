"use client";

import React from "react";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";

import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Navigation } from "./Navigation";
import router, { useRouter } from "next/router";
import SearchByCategory from "./SearchByCategory";
import { usePathname } from "next/navigation";
import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const handleRefresh = () => {
    router.reload();
  };
  const { isSignedIn, user } = useUser();

  const pathname = usePathname();

  const showNavbar = isSignedIn || pathname !== "/";

  const textColorClass = !isSignedIn && pathname === "/" ? "white" : "black";

  return (
    <nav className="w-full    ">
      <div className="pt-6 ">
        <Container>
          <div className="flex flex-col flex-nowrap ">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex flex-row items-center justify-center gap-3">
                <Link onClick={handleRefresh} href="/">
                  <Image
                    src="/InfinityLogo.png"
                    width={60}
                    height={60}
                    alt="Logo"
                  />
                </Link>

                <Link onClick={handleRefresh} href="/">
                  {" "}
                  <h1
                    className={`font-bold ${
                      textColorClass === "white"
                        ? "text-[#FDFEFF] hover:text-black"
                        : "text-black hover:text-black"
                    } sm:pr-10 text-xl`}
                  >
                    InfinityTrade
                  </h1>
                </Link>
              </div>{" "}
              {showNavbar && (
                <div className="hidden sm:block">
                  <Search />
                </div>
              )}
              <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <UserMenu />
                <SignedIn>
                  <button onClick={() => router.push("/")}>
                    {" "}
                    <SignOutButton />
                  </button>
                </SignedIn>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <SignedIn>
        {" "}
        <div className="block mt-4 px-4 sm:hidden">
          <Search />{" "}
        </div>
      </SignedIn>
    </nav>
  );
}
