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
} from "@clerk/nextjs";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

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

  const { isSignedIn, user } = useUser();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-5 ">
        <div className="hidden sm:block">
          <div className="flex flex-row items-center justify-center gap-5">
            <Link
              className="  text-sm text-[#FD7D01] font-semibold    hover:text-black transition ease-in-out cursor-pointer"
              href="/products"
            >
              Products
            </Link>{" "}
            <AiOutlineShoppingCart
              size={20}
              className="text-[#FD7D01] transition ease-in-out  cursor-pointer hover:text-black "
            />
            <IoMdNotificationsOutline
              size={20}
              className="text-[#FD7D01] transition ease-in-out  cursor-pointer hover:text-black "
            />
            <AiOutlineMessage
              size={20}
              className="text-[#FD7D01] transition ease-in-out   cursor-pointer hover:text-black "
            />
          </div>
        </div>
        {isSignedIn ? (
          <>
            <h1 className="ml-2 hidden sm:display text-sm font-semibold py-3 px-4  ">
              Hi, {user?.primaryEmailAddress?.emailAddress || "Guest"}
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
                    onClick={() => router.push("/create-listing")}
                    label="Create Listing"
                  />
                  <MenuItem
                    onClick={() => router.push("/my-listings")}
                    label="My Listings"
                  />
                  <MenuDivider />

                  <SignOutButton>
                    <MenuItem
                      onClick={() => router.push("/")}
                      label="Sign Out"
                    ></MenuItem>
                  </SignOutButton>
                </MenuGroup>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Menu preventOverflow isOpen={isOpen} onClose={onClose}>
              <MenuButton onMouseEnter={onOpen} className="ml-3">
                <Avatar
                  colorScheme="whatsapp"
                  className="cursor-pointer   border-solid border-4 hover:border-[#FD7D01]"
                  name=""
                  src=""
                />
              </MenuButton>
              <MenuList
                onMouseLeave={onClose}
                onMouseEnter={onOpen}
                className="cursor-pointer"
              >
                <MenuGroup className="text-[#FD7D01]" title="Profile">
                  <MenuItem
                    onClick={() => router.push("/sign-in")}
                    label="Sign In"
                  />
                </MenuGroup>
              </MenuList>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
