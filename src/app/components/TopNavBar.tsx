"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    ["/resume-builder", "Builder"],
    ["/resume-parser", "Parser"],
  ];

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "relative border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-[var(--top-nav-bar-height)] items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <span className="sr-only">OpenResume</span>
          <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-8 w-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Site Nav Bar"
          className="hidden items-center gap-2 text-sm font-medium md:flex"
        >
          {navItems.map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
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

        {/* Hamburger Button (Mobile/Tablet) */}
        <button
          type="button"
          className="flex flex-col gap-1 p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block h-0.5 w-6 bg-gray-700"></span>
          <span className="block h-0.5 w-6 bg-gray-700"></span>
          <span className="block h-0.5 w-6 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile Site Navigation"
          className="absolute left-0 top-full z-50 w-full border-b-2 border-gray-100 bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col px-3 py-2">
            {navItems.map(([href, text]) => (
              <Link
                key={text}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-gray-500 hover:bg-gray-100"
              >
                {text}
              </Link>
            ))}

            <div className="px-3 py-2">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
                width="100"
                height="20"
                className="overflow-hidden border-none"
                title="GitHub"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};