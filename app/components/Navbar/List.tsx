import Link from "next/link";
import React from "react";

export const List = () => {
  return (
    <div className="hidden lg:block">
      {" "}
      <div className="flex gap-10 justify center items-center  ">
        {" "}
        <Link
          className=" ml-3 text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
          href="/my-listings"
        >
          My Listings
        </Link>
        <Link
          className=" ml-3 text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
          href="/create-listing"
        >
          Create Listing
        </Link>
      </div>
    </div>
  );
};
