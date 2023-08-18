import Link from "next/link";
import React from "react";

export const List = () => {
  return (
    <div className="block">
      {" "}
      <div className="flex gap-5 justify center items-center  ">
        <Link
          className=" ml-3 text-sm text-[#FD7D01] font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition ease-in-out cursor-pointer"
          href="/products"
        >
          Products
        </Link>{" "}
      </div>
    </div>
  );
};
