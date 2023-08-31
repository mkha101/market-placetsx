import { SignedOut } from "@clerk/nextjs";
import Navbar from "../components/Navbar/Navbar";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SignedOut>
        {" "}
        <Navbar />
      </SignedOut>

      {children}
    </section>
  );
}
