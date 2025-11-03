import Navbar from "../Navbar";
import Footer from "../Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SocialButtonsV1 from "../components/WhatsappButton";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          property="og:title"
          content="Karrotrec Cerri | Professional Towing & Roadside Assistance 24/7"
        />
        <meta
          property="og:description"
          content="Fast, professional towing and roadside help available 24/7 across Albania."
        />
        <meta property="og:url" content="https://karrotrec-cerri.com/en" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Karrotrec Cerri" />
        <meta
          property="og:image"
          content="https://karrotrec-cerri.com/logo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://karrotrec-cerri.com/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Karrotrec Cerri | Towing & Roadside Assistance 24/7"
        />
        <meta
          name="twitter:description"
          content="Reliable towing and roadside services across Albania."
        />
        <meta
          name="twitter:image"
          content="https://karrotrec-cerri.com/logo.png"
        />
      </Head>

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
