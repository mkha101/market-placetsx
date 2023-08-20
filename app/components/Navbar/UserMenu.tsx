"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { UserButton, useUser, currentUser } from "@clerk/nextjs";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

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
import router from "next/router";

export const UserMenu = () => {
  const router = useRouter();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileOpen = useCallback(() => {
    setIsMobileOpen((value) => !value);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const user = useUser();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-5 ">
        {user.isSignedIn ? (
          <>
            <Menu>
              <MenuButton className="ml-3">
                <Avatar
                  colorScheme="whiteAlpha"
                  className="cursor-pointer   border-solid border-4 hover:border-[#FD7D01]"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </MenuButton>
              <MenuList className="cursor-pointer">
                <MenuGroup title="Profile">
                  <MenuItem
                    onClick={() => router.push("/my-account")}
                    label="My Account"
                  />
                  <MenuItem onClick={() => router.push("/cart")} label="Cart" />
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Listings">
                  <MenuItem
                    onClick={() => router.push("/create-listing")}
                    label="Create Listing"
                  />
                  <MenuItem
                    onClick={() => router.push("/my-listings")}
                    label="My Listings"
                  />
                </MenuGroup>
              </MenuList>
            </Menu>
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
      </div>
    </div>
  );
};

export default UserMenu;
