// components/LanguageDropdown.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Language = "en" | "sq";

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() || "/";
  const router = useRouter();

  const current: Language = pathname.startsWith("/sq") ? "sq" : "en";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (lang: Language) => {
    // Build new path by replacing or adding locale segment
    const segs = pathname.split("/").filter(Boolean);
    if (segs[0] === "en" || segs[0] === "sq") segs[0] = lang;
    else segs.unshift(lang);
    router.push("/" + segs.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="flex items-center gap-2 p-2 border border-gray-300 rounded"
      >
        <span>{current === "en" ? "🇺🇸" : "🇦🇱"}</span>
        <span className="text-sm font-medium">{current.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="w-full text-left px-4 py-2"
          onClick={() => switchTo("en")}
        >
          🇺🇸 English
        </button>
        <button
          className="w-full text-left px-4 py-2"
          onClick={() => switchTo("sq")}
        >
          🇦🇱 Shqip
        </button>
      </div>
    </div>
  );
}
