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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-[var(--top-nav-bar-height)] items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <span className="sr-only">OpenResume</span>
          <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-8 w-full"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden md:flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100"
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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-2 pb-4 md:hidden">
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}

          <div className="ml-1 mt-2">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            />
          </div>
        </nav>
      )}
    </header>
  );
};