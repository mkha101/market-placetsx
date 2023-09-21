import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { Providers } from "./providers";
import Head from "next/head";
import { Inter, Lato } from "@next/font/google";

export const metadata = {
  title: "InfinityTrade",
  description: "Shop and Sell",
};

const lato = Lato({
  subsets: ["latin"],
  weight: "700",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <body className={lato.className}>
          <Providers>
            <SignedIn>
              <Navbar />
            </SignedIn>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
