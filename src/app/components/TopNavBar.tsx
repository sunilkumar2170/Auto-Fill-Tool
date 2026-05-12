"use client";
import { useState } from "react";
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

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex min-h-[var(--top-nav-bar-height)] w-full flex-col justify-center">
        <div className="flex h-10 w-full items-center justify-between gap-2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="sr-only">OpenResume</span>
            <Image
              src={logoSrc}
              alt="OpenResume Logo"
              className="h-8 w-full"
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--theme-purple)] lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            type="button"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>

          <nav
            aria-label="Site Nav Bar"
            className="hidden items-center gap-2 text-sm font-medium lg:flex"
          >
            {navLinks.map(([href, text]) => (
              <Link
                key={text}
                className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
                href={href}
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Site Nav Bar"
          className={cx(
            "overflow-hidden transition-all duration-300 ease-out lg:hidden",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 pb-2 pt-3 text-sm font-medium">
            {navLinks.map(([href, text]) => (
              <Link
                key={`mobile-${text}`}
                className="rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:bg-gray-100"
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
