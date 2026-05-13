"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    ["/resume-builder", "Builder"],
    ["/resume-parser", "Parser"],
  ] as const;

  const getDesktopLinkClassName = (href: string) =>
    cx(
      "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--theme-purple)]",
      pathName === href
        ? "bg-primary shadow-sm"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    );

  const getMobileLinkClassName = (href: string) =>
    cx(
      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--theme-purple)]",
      pathName === href
        ? "bg-primary"
        : "text-gray-700 hover:bg-gray-100"
    );

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 bg-white px-3 dark:border-gray-700 dark:bg-black lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">OpenResume</span>

          <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-8 w-full"
            priority
          />
        </Link>

        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Site Nav Bar"
          className={cx(
            "overflow-hidden transition-all duration-300 ease-out lg:hidden",
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <div className="ml-1 mt-1">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};