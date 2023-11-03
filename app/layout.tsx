import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const font = localFont({
  src: "../public/fonts/Mona_Sans/Mona-Sans.woff2",
  variable: "--font-mono-sans",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Web3 Community is Waiting",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "h-[100vh] min-h-screen bg-slate-600" +
          font.variable +
          "font-sans"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
