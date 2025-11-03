import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Karrotrec Cerri | Shërbime Karrotreci & Ndihmë Rrugore",
    template: "%s | Karrotrec Cerri",
  },
  description:
    "Karrotrec Cerri ofron shërbime profesionale karrotreci dhe ndihmë rrugore 24/7 në gjithë Shqipërinë. Shërbim i shpejtë, i sigurt dhe i besueshëm.",
  keywords: [
    "karrotrec",
    "karrotrec cerri",
    "ndihmë rrugore",
    "karrotrec tiranë",
    "transport makinash",
    "towing service",
    "roadside assistance",
    "auto transport",
    "shërbim karrotreci",
    "karrotrec shqipëri",
    "tirana",
    "astir",
    "karrotrec afer meje",
    "perplasje makine",
    "afer meje karrotrec",
    "bateri makine",
    "gome makine",
    "kriko makine",
    "karrotrec perplasje",
  ],
  metadataBase: new URL("https://karrotrec-cerri.com"),
  alternates: {
    canonical: "https://karrotrec-cerri.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Karrotrec Cerri | Shërbime Karrotreci & Ndihmë Rrugore 24/7",
    description:
      "Shërbime karrotreci dhe ndihmë rrugore 24 orë në gjithë Shqipërinë. Profesionalizëm, shpejtësi dhe siguri nga Karrotrec Cerri.",
    url: "https://karrotrec-cerri.com",
    siteName: "Karrotrec Cerri",
    locale: "sq_AL",
    type: "website",
    images: [
      {
        url: "https://karrotrec-cerri.com/og-image.jpg", // ✅ Use large OG image
        width: 1200,
        height: 630,
        alt: "Karrotrec Cerri Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karrotrec Cerri | Ndihmë Rrugore & Karrotrec 24/7",
    description:
      "Shërbime të besueshme karrotreci dhe ndihmë rrugore në gjithë Shqipërinë.",
    images: ["https://karrotrec-cerri.com/og-image.jpg"], // ✅ Absolute path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
