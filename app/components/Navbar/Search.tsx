import React from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const Search = () => {
  return (
    <div className="border-[1px] w-full  md:w-auto py-0.5 rounded-full shadow-sm hover:shadow-md transition ease-in-out cursor-pointer">
      <div className="flex flex-row items-center justify-end">
        <div
          className=" hidden 
            sm:flex 
            justify-center
            items-center
            gap-2
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
            text-gray-600
            "
        >
          <HiOutlineLocationMarker />
          New York
        </div>
        <div className="text-sm sm:w-auto w-full pl-6 p r-1 textgray-600 flex justify-between flex-row items-center gap-3">
          <form action="submit">
            <input
              className="h-[30px] sm:w-auto w-full border-none outline-none"
              type="text"
            />
          </form>
          <div className="p-1.5 pl-4 pr-4 flex items-center gap-1 bg-[#FD7D01] hover:bg-orange-700 rounded-full text-white">
            <BiSearch size={18} />
            Search
          </div>
        </div>
      </div>
    </div>
  );
};
