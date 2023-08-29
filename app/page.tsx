import Image from "next/image";
import Container from "./components/Container";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Navbar/Search";

export default function Home() {
  return (
    <main className="w-full bg-[url('/bg.jpg')] bg-cover  max-w-screen   ">
      <Navbar />

      <Container>
        {" "}
        <div className="h-[40rem] relative ">
          <div className="top-24 left-10 absolute text-[#FDFEFF]">
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl">
                Thrift your next <br />
                haul here:
              </h1>
              <div className="text-black"> </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#40244D] p-12   flex flex-col sm:flex-row justify-center gap-14 items-center">
        <div className="flex text-center flex-col text-[#FDFEFF] ">
          <h1 className="text-2xl ">Buy and Sell Almost Anything</h1>
          <p>
            Shop and sell new, like-new, and preowned items. <br />
            <Link
              className="   underline  hover:text-purple-200 transition ease-in-out cursor-pointer"
              href="/sign-up"
            >
              SIGN UP
            </Link>{" "}
          </p>
        </div>
        <div className="flex text-center flex-col text-[#FDFEFF] ">
          <h1 className="text-2xl ">Goodbye clutter</h1>
          <p>
            Earn extra cash by selling unwanted gifts and items.
            <br />
            <Link
              className="   underline  hover:text-purple-200 transition ease-in-out cursor-pointer"
              href="/sign-up"
            >
              LIST AN ITEM
            </Link>{" "}
          </p>
        </div>
        <div className="flex text-center flex-col text-[#FDFEFF]">
          <h1 className="text-2xl "> Save up to 70% off retail</h1>
          <p>
            Get access to exclusive promos & flash deals. <br />
            <Link
              className=" underline    hover:text-purple-200 transition ease-in-out cursor-pointer"
              href="/sign-up"
            >
              SHOP DEALS
            </Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
