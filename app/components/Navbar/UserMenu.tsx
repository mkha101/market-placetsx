"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { UserButton, useUser } from "@clerk/nextjs";
import MenuItem from "./MenuItem";
import Link from "next/link";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const user = useUser();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2 ">
        {user.isSignedIn ? (
          <>
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer">
              Hello User{" "}
            </div>
            <UserButton />
          </>
        ) : (
          <>
            <Link
              className="ml-2 text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
              href="/sign-in"
            >
              Sign In
            </Link>
          </>
        )}
        <div
          onClick={toggleOpen}
          className="p-4 bg-white md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
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
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
