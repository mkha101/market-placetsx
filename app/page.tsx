import Image from "next/image";
import Container from "./components/Container";
import { Filter } from "./components/Filter/Filter";

export default function Home() {
  return (
    <main className="w-full  ">
      <Container>
        <Filter />
      </Container>
    </main>
  );
}
