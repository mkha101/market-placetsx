"use client";

import Container from "../components/Container";
import React from "react";
import { Filter } from "../components/Filter/Filter";
import ListingsCard from "../components/ListingsCard";
import { getToken } from "@chakra-ui/react";
import ListingsContainer from "../components/ListingsContainer";
import { useAuth } from "@clerk/nextjs";

export default function Page() {
  const { userId, getToken } = useAuth();

  return (
    <main className="w-full  ">
      <Container>
        <div className="flex row">
          <div className="">
            {" "}
            <Filter />
          </div>
          <div className="w-3/4  flex flex-row flex-wrap gap-32 mt-10 ml-30 ">
            {" "}
            <ListingsContainer userId={userId} getToken={getToken} />
          </div>
        </div>
      </Container>
    </main>
  );
}
