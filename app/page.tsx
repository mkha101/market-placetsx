"use client";
import Image from "next/image";
import Container from "./components/Container";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Navbar/Search";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ProductArea } from "./components/Home/ProductArea";
import SmallAllListingsContainer from "./components/SmallAllListingsContainer";

export default function Home() {
  return (
    <>
      <SignedOut>
        <main className="w-full custom-gradient sm:bg-[length:55rem_55rem] bg-[length:30rem_30rem]  overflow-hidden   max-w-screen   ">
          <Navbar />
          <Container>
            {" "}
            <div className="min-h-[26rem] lg:min-h-[40rem]  2xl:xl:min-h-[50rem] relative ">
              <div className="sm:top-24 bottom-24 sm:left-10 left-1 absolute text-[#FDFEFF]">
                <div className="flex flex-col gap-4">
                  <h1 className="sm:text-6xl w-[13rem] sm:w-[26rem] text-3xl font-extrabold">
                    Discover Your Next Purchase
                  </h1>
                  <div className="text-black">
                    <Search />{" "}
                  </div>
                  <div className="flex flex-row gap-6 justify-center">
                    {" "}
                    <Button
                      size={"sm"}
                      className="border bg-[#E0AD9A] px-6 sm:px-[75px] rounded-full "
                    >
                      Video Games
                    </Button>
                    <Button
                      size={"sm"}
                      className="border bg-[#E0AD9A] px-6  rounded-full "
                    >
                      Sneakers
                    </Button>
                    <Button
                      size={"sm"}
                      className="border bg-[#E0AD9A] px-6  rounded-full "
                    >
                      Furniture
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <div className="block sm:hidden">
            {" "}
            <ProductArea />
          </div>

          <div className="bg-[#E0AD9A] p-12    flex flex-col sm:flex-row justify-center gap-14 items-center">
            <div className="flex text-center flex-col text-[#FDFEFF] ">
              <h1 className="text-2xl ">Buy and Sell Almost Anything</h1>
              <p>
                Shop and sell new, like-new, and preowned items. <br />{" "}
                <Link
                  className={`text-lg 
                   font-semibold underline   hover:text-black transition ease-in-out cursor-pointer`}
                  href="/sign-up"
                >
                  Sign Up
                </Link>{" "}
              </p>
            </div>
            <div className="flex text-center flex-col text-[#FDFEFF] ">
              <h1 className="text-2xl ">Goodbye clutter</h1>
              <p>
                Earn extra cash by selling unwanted gifts and items.
                <br />{" "}
                <Link
                  className={`text-lg 
                   font-semibold underline   hover:text-black transition ease-in-out cursor-pointer`}
                  href="/sign-up"
                >
                  List an Item
                </Link>{" "}
              </p>
            </div>
            <div className="flex text-center flex-col text-[#FDFEFF]">
              <h1 className="text-2xl "> Save up to 70% off retail</h1>
              <p>
                Get access to exclusive promos & flash deals. <br />
                <Link
                  className={`text-lg 
                   font-semibold underline   hover:text-black transition ease-in-out cursor-pointer`}
                  href="/products"
                >
                  Shop Deals
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            {" "}
            <ProductArea />
          </div>
        </main>{" "}
      </SignedOut>
      <SignedIn>
        <main className="w-full  max-w-screen">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:mt-10 mt-8">For You</h1>
            <div className="flex flex-row justify-center  items-center text-black gap-6 mt-16">
              <SmallAllListingsContainer />
            </div>
          </div>
        </main>
      </SignedIn>
    </>
  );
}
