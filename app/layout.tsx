import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import Head from "next/head";
import { Lato } from "@next/font/google";

export const metadata = {
  title: "InfinityTrade",
  description: "Shop and Sell",
};

const lato = Lato({
  subsets: ["latin"],
  weight: "700",
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
        </Head>
        <body className={lato.className}>
          <Providers>
            <div className="hidden">
              <Navbar />
            </div>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
