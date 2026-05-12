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

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-white/80 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex min-h-[var(--top-nav-bar-height)] w-full flex-col justify-center">
        <div className="flex h-11 w-full items-center justify-between gap-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-1 py-1 transition-opacity hover:opacity-90"
          >
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--theme-purple)] lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            type="button"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>

          <nav
            aria-label="Site Nav Bar"
            className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white/90 p-1 shadow-sm lg:flex"
          >
            {navLinks.map(([href, text]) => (
              <Link
                key={text}
                className={getDesktopLinkClassName(href)}
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
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mb-2 mt-2 flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-md">
            {navLinks.map(([href, text]) => (
              <Link
                key={`mobile-${text}`}
                className={getMobileLinkClassName(href)}
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
