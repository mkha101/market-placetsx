"use client";

import React from "react";
import Image from "next/image";
import { TopBrandsCircle } from "./TopBrandsCircle";
import ListingsCard from "../ListingsCard";
import ListingsContainer from "../UserListingsContainer";
import { useAuth } from "@clerk/nextjs";
import AllListingsContainer from "../AllListingsContainer";
import SmallAllListingsContainer from "../SmallAllListingsContainer";

export const ProductArea = () => {
  const { userId, getToken } = useAuth();

  return (
    <div className="min-h-[70rem]  bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl sm:mt-10 mt-5">Top Selling Brands</h1>
        <div className="flex flex-row text-black gap-6 mt-16">
          <TopBrandsCircle imageSrc="/applee.png" brandName="Apple" />
          <TopBrandsCircle imageSrc="/Nike.jpeg" brandName="Nike" />
          <TopBrandsCircle imageSrc="/Sony.png" brandName="Sony" />
          <TopBrandsCircle imageSrc="/adidas.png" brandName="Adidas" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl sm:mt-10 mt-8">For You</h1>
        <div className="flex flex-row justify-center items-center text-black gap-6 mt-16">
          <SmallAllListingsContainer />
        </div>
      </div>
    </div>
  );
};
