import Image from "next/image";
import Container from "./components/Container";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Navbar/Search";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-br overflow-hidden from-zinc-900 to-purple-400  bg-cover  max-w-screen   ">
      <Navbar />

      <Container>
        {" "}
        <div className="min-h-[26rem] lg:min-h-[40rem]  2xl:xl:min-h-[50rem] relative ">
          <div className="sm:top-24 bottom-24 sm:left-10 left-1 absolute text-[#FDFEFF]">
            <div className="flex flex-col gap-4">
              <h1 className="sm:text-6xl sm:w-[26rem] text-3xl font-extrabold">
                Discover Your Next Purchase:
              </h1>
              <div className="text-black">
                <Search />{" "}
              </div>
              <div className="flex flex-row gap-6 justify-center">
                {" "}
                <Button
                  size={"sm"}
                  className="border bg-purple-900 px-6 sm:px-[75px] rounded-full "
                >
                  Video Games
                </Button>
                <Button
                  size={"sm"}
                  className="border bg-purple-900 px-6  rounded-full "
                >
                  Sneakers
                </Button>
                <Button
                  size={"sm"}
                  className="border bg-purple-900 px-6  rounded-full "
                >
                  Furniture
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="min-h-[30rem] bg-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl mt-5">Top Brands</h1>
          <div className="flex flex-row text-black gap-6 mt-3">
            <span className="">Apple</span> <span className=" ">Nike</span>
            <span className="  ">Adidas</span>
          </div>
        </div>
      </div>

      <div className="bg-[#40244D] p-12   flex flex-col sm:flex-row justify-center gap-14 items-center">
        <div className="flex text-center flex-col text-[#FDFEFF] ">
          <h1 className="text-2xl ">Buy and Sell Almost Anything</h1>
          <p>
            Shop and sell new, like-new, and preowned items. <br />
          </p>
        </div>
        <div className="flex text-center flex-col text-[#FDFEFF] ">
          <h1 className="text-2xl ">Goodbye clutter</h1>
          <p>
            Earn extra cash by selling unwanted gifts and items.
            <br />
          </p>
        </div>
        <div className="flex text-center flex-col text-[#FDFEFF]">
          <h1 className="text-2xl "> Save up to 70% off retail</h1>
          <p>
            Get access to exclusive promos & flash deals. <br />
          </p>
        </div>
      </div>
    </main>
  );
}
