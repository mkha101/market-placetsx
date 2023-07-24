import React from "react";
import { BiSearch } from "react-icons/bi";

import { HiOutlineLocationMarker } from "react-icons/hi";

export const Search = () => {
  return (
    <div className="border-[1px] w-full  md:w-auto py-0.5 rounded-full shadow-sm hover:shadow-md transition ease-in-out cursor-pointer">
      <div className="flex flex-row items-center justify-between">
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
        <div className="text-sm   pl-6 pr-1 textgray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">
            <form action="">
              <input
                className="bg-none h-[30px]  border-none outline-none"
                type="text"
              />
            </form>
          </div>
          <div className="p-1.5 pl-4 pr-4 flex items-center gap-1 bg-blue-600 hover:bg-blue-900 rounded-full text-white">
            <BiSearch size={18} />
            Search
          </div>
        </div>
      </div>
    </div>
  );
};
