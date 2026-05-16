"use client";

import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-100 bg-white dark:border-gray-700 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Logo + Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
                <div className="rounded-md bg-white p-1">
                    <Image
                     src={logoSrc}
                     alt="OpenResume Logo"
                     className="h-8 w-auto"
                    />
                </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Auto-Fill-Tool helps users streamline resume building,
              parsing, and automation workflows with a clean and efficient experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/resume-builder"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Resume Builder
                </Link>
              </li>

              <li>
                <Link
                  href="/resume-parser"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Resume Parser
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Connect
            </h3>

            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/sunilkumar2170/Auto-Fill-Tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  GitHub Repository
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@example.com"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} Auto-Fill-Tool. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;