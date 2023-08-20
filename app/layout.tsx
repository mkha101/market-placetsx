import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import createClient from "@/app/lib/supabase-server";

import { Providers } from "./providers";
import Head from "next/head";
export const metadata = {
  title: "InfinityTrade",
  description: "Shop and Sell",
};
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
