"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-800 shadow-md z-50 sticky top-0">
      <Container>
        <nav className="flex items-center justify-between gap-5 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="CloudPeak Nextjs"
              width={175}
              height={50}
              priority
              style={{ height: "50px", width: "175px" }}
            />
          </Link>

          {/* Mobile Toggle */}
          <input id="nav-toggle" type="checkbox" className="hidden peer" />

          <label
            htmlFor="nav-toggle"
            className="lg:hidden cursor-pointer flex flex-col space-y-1.5"
          >
            <span className="block w-7 h-[2.5px] bg-white transition-all"></span>
            <span className="block w-7 h-[2.5px] bg-white transition-all"></span>
          </label>

          {/* Menu */}
          <ul
            className="
              fixed top-16 left-0 bg-gray-900 text-white border-t border-gray-700 
              flex flex-col gap-4 p-6 
              opacity-0 invisible translate-y-5
              transition-all duration-300
              peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0
              lg:static lg:flex-row lg:bg-transparent lg:border-none lg:p-0
              lg:opacity-100 lg:visible lg:translate-y-0 lg:gap-8
            "
          >
            {/* Dropdown */}
            <li className="relative group">
              <span className="flex items-center gap-1 font-medium cursor-pointer ">
                All Pages
                <svg
                  className="h-4 w-4  transition-transform duration-300 group-hover:rotate-180"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707 5.657-5.657-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>

              <ul
                className="
                  absolute left-0 top-8 min-w-[620px] bg-gray-800 shadow-xl border border-gray-700 rounded-md p-5
                  grid grid-cols-1 lg:grid-cols-3 gap-2 z-50
                  opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                {[
                  ["Elements", "/elements"],
                  ["About", "/about"],
                  ["Changelog", "/changelog"],
                  ["Integration", "/integration"],
                  ["Case Studies", "/caseStudies"],
                  ["Terms & Conditions", "/terms-conditions"],
                  ["Blog", "/blog"],
                  ["Book a Free Demo", "/freedemo"],
                  ["Privacy Policy", "/privacy-policy"],
                  ["404 Page", "/404"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-3 py-2 rounded hover:bg-gray-700 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Normal Links */}
            {[
              ["Features", "/features"],
              ["Pricing", "/pricing"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-medium hover:text-blue-400 transition"
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="lg:hidden">
              <Link
                target="_blank"
                href="https://themefisher.com/products/cloudpeak-nextjs"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Get This Theme
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              target="_blank"
              href="https://themefisher.com/products/cloudpeak-nextjs"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get This Theme
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
