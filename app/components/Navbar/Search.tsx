import React from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchByCategory from "./SearchByCategory";

export const Search = () => {
  return (
    <div className="flex flex-row justify-center items-center ">
      <SearchByCategory />
      <div className="border-[1px] w-full  md:w-auto py-[1px] rounded-full bg-white rounded-l-none shadow-sm hover:shadow-md transition ease-in-out cursor-pointer">
        <div className="flex flex-row items-center justify-end">
          <div className="text-sm sm:w-auto w-full pl-6 pr-1 textgray-600 flex justify-between flex-row items-center gap-3">
            <form action="submit">
              <input
                className="h-[30px] sm:w-auto w-full border-none outline-none"
                type="text"
              />
            </form>
            <div className="p-1.5 pl-4 pr-4 flex items-center gap-1 hover:text-black  rounded-full text-purple-900">
              <BiSearch size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
