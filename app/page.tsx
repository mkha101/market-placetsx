import Image from "next/image";
import Container from "./components/Container";
import { Filter } from "./components/Filter/Filter";
import { Cards } from "./components/Cards/Cards";

export default function Home() {
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
