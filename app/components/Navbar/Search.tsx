"use client";

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchByCategory from "./SearchByCategory";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export const Search = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 100);

  const handleSearch = () => {
    if (query) {
      router.push(`/search-page?query=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleSearch();
    }
  };

  return (
    <div className="flex flex-row justify-center  items-center ">
      <SearchByCategory />
      <div className="border-[1px] w-full  md:w-auto py-[1px] rounded-full bg-white rounded-l-none shadow-sm hover:shadow-md transition ease-in-out cursor-pointer">
        <div className="flex flex-row items-center justify-end">
          <div className="text-sm sm:w-auto w-full pl-6 pr-1 textgray-600 flex justify-between flex-row items-center gap-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                autoFocus
                className="h-[30px] text-base sm:w-auto w-full border-none outline-none"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyDown={handleKeyPress}
              />
            </form>
            <div className="p-1.5 pl-4 pr-4 flex items-center gap-1 hover:text-black  rounded-full text-[#E0AD9A]">
              <BiSearch size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
