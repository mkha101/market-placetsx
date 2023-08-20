"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { getListings } from "../../utils/requests";
/*
import ListingsCard from "../components/ListingsCard";
import ListingsContainer from "../components/ListingsContainer";
*/

const MyListings = () => {
  return (
    <div className="w-full max-w-screen">
      <div className="flex h-[80vh] mt-20 gap-28 flex-col justify-start items-center">
        <div className="text-center flex flex-col gap-5">
          <h1 className="text-4xl text-[#FD7D01] font-bold">My Listings</h1>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
