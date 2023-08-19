"use client";

import React from "react";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";

import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Navigation } from "./Navigation";
import { useRouter } from "next/navigation";
import { List } from "./List";
import { User } from "@supabase/supabase-js";
import { Button } from "@chakra-ui/react";
import supabase from "@/app/lib/supabase-browser";

export default function Navbar({ user }: { user: User | null }) {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <nav className="w-full bg-white z-10  ">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-col flex-nowrap ">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex flex-row items-center justify-center gap-3">
                <Link onClick={handleRefresh} href="/">
                  <Image
                    src="/Infinity.png"
                    width={60}
                    height={60}
                    alt="Logo"
                  />
                </Link>

                <Link onClick={handleRefresh} href="/">
                  {" "}
                  <h1 className="font-bold text-[#FD7D01] text-xl ">
                    InfinityTrade
                  </h1>
                </Link>
              </div>
              <div className="hidden sm:block">
                {" "}
                <Search />
              </div>
              <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <List />
                <Navigation />
                {user ? (
                  <>
                    <Button>{user.email}</Button>
                    <Button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        router.push("/");
                        location.reload();
                      }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link
                    className="ml-2 text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
                    href="/sign-in"
                  >
                    Sign In
                  </Link>
                )}

                <UserMenu />
              </div>
            </div>
            <div className="block sm:hidden">
              {" "}
              <Search />
            </div>
          </div>
        </Container>
      </div>
      <div className="py-3  bg-[#FD7D01] hidden sm:block border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-start gap-10 items-center">
            <div className="text-white text-sm">Categories</div>
            <div className="text-white text-sm">Ready to Ship</div>
            <div className="text-white text-sm">
              Protection Available for Every Purchase
            </div>
            <div className="text-white text-sm">Buyer Central</div>
            <div className="text-white text-sm">Seller Central</div>
            <div className="text-white text-sm">Help</div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
