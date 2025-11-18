"use client";
import Image from "next/image";
import Container from "../Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function BlogBanner() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      {/* Page Heading */}
      <section className="section-page-heading py-20">
        <Container>
          <div className="lg:px-8 flex flex-col items-center max-w-4xl mx-auto gap-4">
            <h1 className="text-7xl" data-aos="fade-up-sm">
              News and Updates
            </h1>
            <p
              className="max-w-3xl mx-auto text-balance text-gray-400"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              Stay Ahead with the Latest Trends, Tips, and Industry Insights
              from CloudPeak Finance.
            </p>
          </div>
          <div
            className="border border-border bg-gray-800 inside-shadow shadow-shadow/60 p-8 lg:p-10 rounded-4xl mt-10"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              {/* Text Content */}
              <div className="lg:w-[55%] lg:pr-10">
                <div className="flex flex-col gap-8 py-2">
                  <p className="font-light">Wednesday, Aug 21, 2024</p>

                  <div>
                    <h3 className="text-h4 mb-4">
                      The Future of Finance: Harnessing the Power of Blockchain
                      Technology
                    </h3>
                    <p>
                      As blockchain technology continues to mature, it is
                      reshaping the financial sector in profound ways. From
                      enhancing security to streamlining transactions,
                      blockchain is poised to revolutionize...
                    </p>
                  </div>

                  <Link
                    href="/blog/post-3"
                    className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                  >
                    <span>Read Full News</span>
                    <div className="sr-only">Details</div>

                    <span className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="rotate-[-45deg] group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </i>
                      <i className="rotate-[-45deg] absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </i>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-[45%] h-full">
                <div className="relative h-full">
                  <div className="absolute top-5 right-5 z-10">
                    <div className="bg-green-400 rounded-4xl px-4 py-3 grid place-items-center">
                      <span className="text-[0.625rem] font-semibold capitalize text-white leading-none">
                        Guides
                      </span>
                    </div>
                  </div>

                  <Image
                    src="/assets/blogs/post_3.webp"
                    alt="Blog Post"
                    width={500}
                    height={390}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
