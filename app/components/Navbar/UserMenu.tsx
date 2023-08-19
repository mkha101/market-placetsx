"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

import Link from "next/link";
import supabase from "@/app/lib/supabase-browser";
import { Button } from "@chakra-ui/react";

export const UserMenu = ({ user }: { user: User | null }) => {
  const router = useRouter();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileOpen = useCallback(() => {
    setIsMobileOpen((value) => !value);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-5 ">
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
        <div
          onClick={toggleOpen}
          className="hidden  flex-row justify-center items-center gap-2 md:flex ml-3 text-sm text-white bg-[#FD7D01] font-semibold py-2 px-4 rounded-full hover:bg-orange-700  transition ease-in-out cursor-pointer"
        >
          <FiSettings />{" "}
        </div>

        <div
          onClick={toggleMobileOpen}
          className="p-4 flex sm:hidden bg-white md:py-1 md:px-2 border-[1px] border-neutral-200  flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isMobileOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-[50px] 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => router.push("/cart")} label="Cart" />
              <MenuItem
                onClick={() => router.push("/create-listing")}
                label="Create Listing"
              />
              <MenuItem
                onClick={() => router.push("/my-listings")}
                label="Listings"
              />
              <MenuItem
                onClick={() => router.push("/messages")}
                label="Messages"
              />
            </>
          </div>
        </div>
      )}
      {user ? (
        <>
          {isOpen && (
            <div
              className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-40
            bg-white 
            overflow-hidden 
            right-0 
            top-[50px] 
            text-sm
          "
            >
              <div className="flex flex-col cursor-pointer">
                <>
                  <MenuItem onClick={() => router.push("/cart")} label="Cart" />
                  <MenuItem
                    onClick={() => router.push("/create-listing")}
                    label="Create Listing"
                  />
                  <MenuItem
                    onClick={() => router.push("/my-listings")}
                    label="Listings"
                  />
                </>
              </div>
            </div>
          )}
        </>
      ) : (
        <h1>Sign In</h1>
      )}
    </div>
  );
};

export default UserMenu;
