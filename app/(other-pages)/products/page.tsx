"use client";

import Container from "../../components/Container";
import React from "react";
import { Filter } from "../../components/Filter/Filter";
import ListingsCard, {
  MobileListingsCard,
} from "../../components/ListingsCard";
import ListingsContainer from "../../components/UserListingsContainer";
import { useAuth } from "@clerk/nextjs";
import AllListingsContainer from "../../components/AllListingsContainer";
import SmallAllListingsContainer from "@/app/components/SmallAllListingsContainer";

export default function Page() {
  return (
    <main className="w-full h-[100vh]  ">
      <Container>
        <div className="flex row">
          <div className="">
            {" "}
            <Filter />
          </div>
          <div className="sm:w-full hidden  sm:flex flex-row flex-wrap gap-32 mt-10 sm:ml-30 ">
            {" "}
            <AllListingsContainer />
          </div>
          <div className="sm:w-full  sm:hidden flex flex-row flex-wrap gap-32 mt-10 sm:ml-30 ">
            {" "}
            <SmallAllListingsContainer />{" "}
          </div>
        </div>
      </Container>
    </main>
  );
}
