import Link from "next/link";
import React from "react";

export const List = () => {
  return (
    <div className="flex gap-10 justify center items-center  ">
      {" "}
      <Link
        className="text-gray-600 text-sm font-semibold cursor-pointer hover:text-black"
        href=""
      >
        My Listings
      </Link>
      <Link
        className="text-gray-600 text-sm font-semibold cursor-pointer hover:text-black"
        href=""
      >
        Create Listing
      </Link>
    </div>
  );
};
