import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <AiOutlineShoppingCart
        size={20}
        className="text-gray-600  cursor-pointer hover:text-black "
      />
      <IoMdNotificationsOutline
        size={20}
        className="text-gray-600  cursor-pointer hover:text-black "
      />
      <AiOutlineMessage
        size={20}
        className="text-gray-600  cursor-pointer hover:text-black "
      />
    </div>
  );
};
