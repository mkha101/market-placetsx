import React from "react";
import Image from "next/image";
import { TopBrandsCircle } from "./TopBrandsCircle";

export const ProductArea = () => {
  return (
    <div className="min-h-[30rem]  bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl sm:mt-10 mt-5">Top Selling Brands</h1>
        <div className="flex flex-row text-black gap-6 mt-16">
          <TopBrandsCircle imageSrc="/Apple.webp" brandName="Apple" />
          <TopBrandsCircle imageSrc="/Nike.jpeg" brandName="Nike" />
          <TopBrandsCircle imageSrc="/Sony.png" brandName="Sony" />
          <TopBrandsCircle imageSrc="/Apple.webp" brandName="Apple" />
        </div>
      </div>
    </div>
  );
};
