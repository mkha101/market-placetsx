import Container from "../components/Container";
import React from "react";
import { Cards } from "../components/Cards/Cards";
import { Filter } from "../components/Filter/Filter";

export default function page() {
  return (
    <main className="w-full  ">
      <Container>
        <div className="flex row">
          <div className="">
            {" "}
            <Filter />
          </div>
          <div className="w-3/4  flex flex-row flex-wrap gap-10 mt-10 ml-40 ">
            {" "}
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </Container>
    </main>
  );
}
