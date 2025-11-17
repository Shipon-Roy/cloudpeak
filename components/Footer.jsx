"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/",
    color: "hover:text-blue-600",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/",
    color: "hover:text-pink-500",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/",
    color: "hover:text-blue-700",
  },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900">
      <Container>
        <div className=" mx-auto px-4">
          {/* Top Section */}
          <div className="pb-11 border-b border-white/10 flex flex-col xl:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-y-8 lg:flex-row items-start lg:items-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/logo.svg"
                  alt="CloudPeak Nextjs"
                  width={175}
                  height={50}
                />
              </Link>
              <div className="w-px bg-white h-5 hidden lg:block mx-8"></div>
              <p className="xl:max-w-[420px] text-gray-300">
                Solutions that drive success and propel your business forward
              </p>
            </div>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-8">
              {["integration", "pricing", "contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link}`}
                    className="flex items-center gap-x-1 hover:text-white transition-colors duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="pt-11 pb-16 flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            {/* Copyright */}
            <div className="order-2 lg:order-1 text-gray-400 text-sm">
              <p className="mb-1.5">
                Copyright © 2025{" "}
                <a
                  href="https://themefisher.com/"
                  className="underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Themefisher
                </a>
                . <br /> All Rights Reserved
              </p>
            </div>

            {/* Policy Links */}
            <div className="order-1 lg:order-2">
              <ul className="flex flex-col sm:flex-row flex-wrap gap-8 text-gray-400 text-sm">
                {["privacy-policy", "terms-conditions"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link}`}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link
                        .split("-")
                        .map((w) => w[0].toUpperCase() + w.slice(1))
                        .join(" ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="order-3 lg:order-3 flex items-center gap-5 text-white">
              {socialLinks.map(({ icon, href, color }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`${color} transition-colors w-5 h-5 flex items-center justify-center`}
                  aria-label="Social Link"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
