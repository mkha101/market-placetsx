import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export const List = () => {
  const user = useUser();
  return (
    <div className="hidden lg:block">
      {" "}
      <div className="flex gap-10 justify center items-center  ">
        {" "}
        {user.isSignedIn && (
          <Link
            className=" ml-3 text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
            href="/my-listings"
          >
            My Listings
          </Link>
        )}
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
