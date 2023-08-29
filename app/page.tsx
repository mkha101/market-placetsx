import Image from "next/image";
import Container from "./components/Container";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-br from-zinc-900 to-purple-400 max-w-screen   ">
      <Navbar />

      <div className="h-[65vh] "></div>
      <Container>
        {" "}
        <div className=""></div>
      </Container>
      <div className="bg-[#40244D] h-[55vh] sm:h-[13vh] flex flex-col sm:flex-row justify-center gap-14 items-center">
        <div className="flex text-center flex-col text-white ">
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
        <div className="flex text-center flex-col text-white ">
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
        <div className="flex text-center flex-col text-white ">
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
