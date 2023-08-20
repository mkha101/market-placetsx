"use client";

import { Avatar } from "@chakra-ui/react";
import React from "react";

function page() {
  return (
    <div className="w-full max-w-screen">
      <div className="flex items-center justify-start px-10">
        <div className="mt-[35px] box-border sm:block hidden rounded-lg h-[600px] w-1/2 border-x-[2px] border-b-[2px] relative">
          <div className="rounded-lg rounded-b-none h-1/3 bg-gradient-to-r flex justify-start items-end from-pink-300 via-purple-300 to-indigo-400">
            {/* Top Div */}
          </div>
          <div className="h-2/3">
            {/* Bottom Div */}
            <Avatar
              size="2xl"
              colorScheme="whiteAlpha"
              className="cursor-pointer absolute bottom-0 left-24 transform -translate-x-1/2 -translate-y-1/2 border-solid border-4 hover:border-[#FD7D01]"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <div className="font-bold flex  justify-start ">
              {" "}
              <h1 className="">Dan Abrahmov</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
