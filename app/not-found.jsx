"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" text-center">
      <Container>
        <div className="flex flex-col items-center lg:max-w-3xl mx-auto gap-10 py-10">
          {/* Error Image */}
          <Image
            src="/assets/404.webp"
            alt="404 Image"
            width={600}
            height={500}
            className="object-contain"
            priority
          />

          {/* Text Content */}
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem]   leading-tight capitalize">
              Something Went Wrong.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              We apologize, but it seems like there's been an error. Our team
              has been notified, and we are working diligently to resolve the
              issue.
            </p>
          </div>

          {/* Action Button */}
          <Link
            href="/"
            className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
          >
            <span>Back to Home</span>
            <div className="sr-only">Details</div>

            <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
              <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </i>
              <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </i>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
