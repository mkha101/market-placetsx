import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Marketplace",
  description: "Shop and Sell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-Lato">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
