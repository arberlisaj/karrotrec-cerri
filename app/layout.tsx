import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Karrotrec Cerri | Shërbime Karrotreci & Ndihmë Rrugore",
    template: "%s | Karrotrec Cerri",
  },
  description:
    "Karrotrec Cerri ofron shërbime profesionale karrotreci dhe ndihmë rrugore 24/7 në gjithë Shqipërinë. Shërbim i shpejtë, i sigurt dhe i besueshëm.",
  metadataBase: new URL("https://karrotrec-cerri.com"),
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
        url: "https://karrotrec-cerri.com/logo.png", // ✅ Direct absolute URL
        width: 1200,
        height: 630,
        alt: "Karrotrec Cerri Logo",
        type: "image/png", // ✅ Ensure correct MIME type
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karrotrec Cerri | Ndihmë Rrugore & Karrotrec 24/7",
    description:
      "Shërbime të besueshme karrotreci dhe ndihmë rrugore në gjithë Shqipërinë.",
    images: ["https://karrotrec-cerri.com/logo.png"], // ✅ Same image for Twitter
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
