"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const params = useParams();

  // Helper function to switch the locale in the path
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-3 text-lg font-jetbrains-mono">
      <Link
        href={redirectedPathName("en")}
        className={`transition-colors hover:text-white ${
          params.locale === "en" ? "font-bold text-white" : "text-subtle-tech"
        }`}
      >
        EN
      </Link>
      <span className="text-subtle-tech">|</span>
      <Link
        href={redirectedPathName("fa")}
        className={`transition-colors hover:text-white ${
          params.locale === "fa" ? "font-bold text-white" : "text-subtle-tech"
        }`}
      >
        FA
      </Link>
    </div>
  );
};
