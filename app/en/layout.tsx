import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SocialButtonsV1 from "../components/WhatsappButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      >
        <Navbar locale="en" />
        {children}
        <Footer locale="en" />
        <SocialButtonsV1 />
      </body>
    </html>
  );
}
