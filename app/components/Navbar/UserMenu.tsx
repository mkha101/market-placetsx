"use client";

import React, { useCallback, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {
  UserButton,
  useUser,
  currentUser,
  SignOutButton,
  SignInButton,
  SignedOut,
  SignedIn,
  useClerk,
} from "@clerk/nextjs";
import MenuItem from "./MenuItem";
import { usePathname, useRouter } from "next/navigation";

import { useDisclosure } from "@chakra-ui/react";

import Link from "next/link";
import {
  Wrap,
  WrapItem,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
} from "@chakra-ui/react";
import { users } from "@clerk/nextjs/api";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export const UserMenu = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useUser();
  const { signOut } = useClerk();

  const pathname = usePathname();

  const textColorClass = pathname === "/" ? "white" : "black";

  return (
    <div className="relative">
      <div className="flex flex-row items-center pl-10 gap-5 ">
        <div className="hidden sm:block">
          <div className="flex flex-row items-center justify-center gap-5">
            <SignedOut>
              <Link
                className={`text-sm ${
                  textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
                } font-semibold    hover:text-black transition ease-in-out cursor-pointer`}
                href="/sign-up"
              >
                Sign Up
              </Link>{" "}
              <Link
                className={`text-sm ${
                  textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
                } font-semibold    hover:text-black transition ease-in-out cursor-pointer`}
                href="/sign-in"
              >
                Login
              </Link>{" "}
            </SignedOut>
            <AiOutlineShoppingCart
              size={20}
              className={`text-sm ${
                textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
              }    hover:text-black transition ease-in-out cursor-pointer`}
            />
            <IoMdNotificationsOutline
              size={20}
              className={`text-sm ${
                textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
              }    hover:text-black transition ease-in-out cursor-pointer`}
            />
            <AiOutlineMessage
              size={20}
              className={`text-sm ${
                textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
              }    hover:text-black transition ease-in-out cursor-pointer`}
            />
          </div>
        </div>
        <SignedIn>
          <>
            <h1 className="ml-2 hidden md:flex text-sm gap-1 font-semibold py-3 px-4  ">
              <span
                className={`text-sm ${
                  textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
                }    `}
              >
                Hi,{" "}
              </span>
              {user?.primaryEmailAddress?.emailAddress || "Guest"}
            </h1>
            <Menu preventOverflow isOpen={isOpen} onClose={onClose}>
              <MenuButton onMouseEnter={onOpen} className="ml-3">
                <Avatar
                  colorScheme="whiteAlpha"
                  className="cursor-pointer   border-solid border-4 hover:border-[#FD7D01]"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </MenuButton>
              <MenuList
                overflow={"hidden"}
                onMouseLeave={onClose}
                onMouseEnter={onOpen}
                className="cursor-pointer"
              >
                <MenuGroup className="text-[#FD7D01]" title="Profile">
                  <MenuItem
                    onClick={() => router.push("/my-account")}
                    label="My Account"
                  />
                  <MenuItem onClick={() => router.push("/cart")} label="Cart" />
                </MenuGroup>
                <MenuDivider />
                <MenuGroup className="text-[#FD7D01]" title="Listings">
                  <MenuItem
                    onClick={() => router.push("/products")}
                    label="Products"
                  />
                  <MenuItem
                    onClick={() => router.push("/create-listing")}
                    label="Create Listing"
                  />
                  <MenuItem
                    onClick={() => router.push("/my-listings")}
                    label="My Listings"
                  />
                  <MenuDivider />

                  <MenuItem onClick={() => router.push("/")} label="Sign Out" />
                </MenuGroup>
              </MenuList>
            </Menu>
          </>
        </SignedIn>
        <SignedOut>
          <>
            <Link
              className={`text-sm ${
                textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
              } font-semibold block sm:hidden   hover:text-black transition ease-in-out cursor-pointer`}
              href="/sign-up"
            >
              Sign Up
            </Link>{" "}
            <Link
              className={`text-sm ${
                textColorClass === "white" ? "text-[#FDFEFF]" : "text-black"
              } font-semibold  block sm:hidden     hover:text-black transition ease-in-out cursor-pointer`}
              href="/sign-in"
            >
              Login
            </Link>{" "}
          </>
        </SignedOut>
      </div>
    </div>
  );
};

export default UserMenu;
