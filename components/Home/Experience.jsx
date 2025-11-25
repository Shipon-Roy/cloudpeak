"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="py-20 relative">
      <Container>
        <div className="container mx-auto px-4">
          <div className="border border-gray-300 bg-black/60 rounded-3xl sm:rounded-4xl overflow-hidden relative">
            <div className="grid sm:grid-cols-12">
              {/* Text Content */}
              <div className="px-5 sm:px-12 pr-12 py-7 sm:py-14 relative z-30 sm:col-span-7">
                <div className="section-intro pb-0">
                  <h2 data-aos="fade-up-sm" className="text-6xl   mb-4 ">
                    Ready to Transform <br /> Your Experience?
                  </h2>
                  <p
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                    className="text-gray-400 mb-10"
                  >
                    Get Started Now and Explore New Possibilities with Our
                    Comprehensive <br /> Resources.
                  </p>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 px-6 rounded-full group relative overflow-hidden"
                  >
                    <span>Get Free Version</span>
                    <span className="sr-only">Details</span>
                    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </i>
                      <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </i>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="relative h-[200px] sm:h-auto sm:col-span-5 z-20"
              >
                <div className="absolute left-20 top-10 sm:left-0 sm:top-20 z-20 rounded-3xl border border-white/15 p-4">
                  <Image
                    src="/assets/desktop_dashboard.webp"
                    alt="Dashboard"
                    width={800}
                    height={500}
                    className="sm:min-w-[700px] min-w-[500px] rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute right-0 bottom-10 w-full max-w-[700px] opacity-80 -z-10">
              <Image
                src="/assets/hero_blob.webp"
                alt=""
                width={700}
                height={700}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
