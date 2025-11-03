"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

type Language = "en" | "sq";

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() || "/";

  // Detect current language from path
  const current: Language = pathname.startsWith("/sq") ? "sq" : "en";

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Language switch function (forces full reload to remount correct layout)
  const switchTo = (lang: Language) => {
    const segs = pathname.split("/").filter(Boolean);

    // Replace first segment if it's a language, otherwise add it
    if (segs[0] === "en" || segs[0] === "sq") {
      segs[0] = lang;
    } else {
      segs.unshift(lang);
    }

    const target = "/" + segs.join("/");
    window.location.href = target; // ✅ Full reload ensures correct locale layout
  };

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition"
      >
        <span>{current === "en" ? "🇺🇸" : "🇦🇱"}</span>
        <span className="text-sm font-medium">{current.toUpperCase()}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
          <button
            onClick={() => switchTo("en")}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => switchTo("sq")}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            🇦🇱 Shqip
          </button>
        </div>
      )}
    </div>
  );
}
