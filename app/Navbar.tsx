"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import LanguageDropdown from "./components/LanguageDropdown";

export default function Navbar({ locale }: { locale: "en" | "sq" | string }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = locale === "sq" ? "sq" : "en";

  const navLinks = [
    { href: "/", en: "Home", sq: "Kryefaqja" },
    { href: "/services", en: "Services", sq: "Shërbimet" },
    { href: "/contact", en: "Contact", sq: "Na Kontaktoni" },
  ];

  const t = (en: string, sq: string) => (currentLocale === "en" ? en : sq);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-b-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${currentLocale}`} className="text-xl font-semibold">
            Karrotrec Cerri
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
                className="relative text-sm text-muted-foreground group"
              >
                {t(link.en, link.sq)}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100" />
              </Link>
            ))}
            <LanguageDropdown />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageDropdown />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-5 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${currentLocale}${
                    link.href === "/" ? "" : link.href
                  }`}
                  className="text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.en, link.sq)}
                </Link>
              ))}

              <a
                href="tel:+355684084444"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded"
              >
                <Phone className="h-4 w-4" />
                {currentLocale === "en" ? "Call Now" : "Telefononi Tani"}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
