import React from "react";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import createClient from "@/app/lib/supabase-server";

import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Navigation } from "./Navigation";
import { useRouter } from "next/navigation";
import { List } from "./List";
import { User } from "@supabase/supabase-js";
import { Button } from "@chakra-ui/react";
import supabase from "@/app/lib/supabase-browser";
import { Logo } from "./Logo";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full bg-white z-10  ">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-col flex-nowrap ">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <div className="hidden sm:block">
                {" "}
                <Search />
              </div>
              <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <List />
                <Navigation />

                <UserMenu user={user} />
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
