"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";

export default function HowCloudPeakWorks() {
  return (
    <Container>
      <div className="container">
        {/* Section Intro */}
        <div className="section-intro text-center lg:col-8  my-20">
          <h2
            data-aos="fade-up-sm"
            className="font-normal text-xl lg:text-[5rem] lg:leading-[1.2] mb-3 tracking-tighter"
          >
            How CloudPeak Works
          </h2>
          <p
            data-aos="fade-up-sm"
            data-aos-delay="100"
            className="text-gray-300"
          >
            Designed to Simplify Your Experience and Maximize the Benefits of{" "}
            <br /> CloudPeak&apos;s Innovative Features
          </p>
        </div>

        {/* Content */}
        <div className="section-content lg:px-20">
          <div className="flex flex-col gap-16">
            {/* 1st Row */}
            <div className="grid md:grid-cols-2 gap-10 xl:gap-16">
              {/* Card */}
              <div>
                <div className="inside-shadow border border-border shadow-shadow/70 p-10 rounded-4xl">
                  <div className="flex flex-col gap-y-4 max-w-[350px] mx-auto">
                    <Image
                      alt="onboarding strategy"
                      loading="lazy"
                      width={350}
                      height={245}
                      className="w-full"
                      src="/assets/cloudpeakWork/revenue_growth_baronly.webp"
                    />
                    <div className="p-4 rounded-2xl bg-light w-full">
                      <div className="flex items-center gap-x-5 mb-1">
                        <h3>25%</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="20"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m18.834 5.833-6.557 6.557c-.33.33-.496.495-.686.557a.833.833 0 0 1-.515 0c-.19-.062-.355-.227-.685-.557L8.11 10.11c-.33-.33-.495-.496-.685-.558a.833.833 0 0 0-.516 0c-.19.062-.355.227-.685.557l-4.057 4.057m16.667-8.333H13m5.834 0v5.833"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-semibold">
                            9.2%
                          </span>
                        </div>
                      </div>
                      <p>Average revenue growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="self-center">
                <div data-aos="fade-up-sm" className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-4xl">
                      Effortless Onboarding <br /> Process Fast
                    </h3>
                    <p className="text-gray-400">
                      Discover Our Streamlined and User-Friendly Onboarding
                      Process, Designed to Get You Up and Running Quickly and
                      Efficiently.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                  >
                    <span>Learn More</span>
                    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <ArrowIcon />
                      </i>
                      <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        <ArrowIcon />
                      </i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd Row */}
            <div className="grid md:grid-cols-2 gap-10 xl:gap-16">
              {/* Card */}
              <div className="order-1 md:order-2">
                <div className="inside-shadow border border-border shadow-shadow/70 p-10 rounded-4xl">
                  <div className="flex flex-col gap-y-4 max-w-[350px] mx-auto">
                    <Image
                      alt="web chart"
                      width={350}
                      height={245}
                      className="w-full"
                      loading="lazy"
                      src="/assets/cloudpeakWork/web_chart.webp"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="self-center">
                <div data-aos="fade-up-sm" className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-4xl">
                      Seamless Integration with <br /> Your Workflow.
                    </h3>
                    <p className="text-gray-400">
                      Learn How CloudPeak Seamlessly Integrates with Your
                      Existing Systems and Processes, Ensuring Minimal Maximum
                      Efficiency.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                  >
                    <span>Learn More</span>
                    <DoubleArrow />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3rd Row */}
            <div className="grid md:grid-cols-2 gap-10 xl:gap-16">
              {/* Card */}
              <div>
                <div className="inside-shadow border border-border shadow-shadow/70 p-10 rounded-4xl">
                  <div className="flex flex-col gap-y-4 max-w-[350px] mx-auto">
                    <Image
                      alt="line chart"
                      width={350}
                      height={245}
                      className="w-full"
                      loading="lazy"
                      src="/assets/cloudpeakWork/line_chart.webp"
                    />
                    <div className="p-4 rounded-2xl bg-light w-full">
                      <div className="flex items-center gap-x-5 mb-1">
                        <h3>120K</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="text-primary">
                            <ArrowSmall />
                          </div>
                          <span className="text-white text-sm font-semibold">
                            9.2%
                          </span>
                        </div>
                      </div>
                      <p>Happy customers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="self-center">
                <div data-aos="fade-up-sm" className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-4xl">
                      Expert Guidance Every <br /> Step of the Way.
                    </h3>
                    <p className="text-gray-400">
                      Experience a Guided Onboarding Experience with CloudPeak,
                      Where Our Expert Team Provides Personalized Support and
                      Assistance.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                  >
                    <span>Learn More</span>
                    <DoubleArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ArrowIcon() {
  return (
    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

function DoubleArrow() {
  return (
    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
      <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
        <ArrowIcon />
      </i>
      <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
        <ArrowIcon />
      </i>
    </div>
  );
}

function ArrowSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18.834 5.833-6.557 6.557c-.33.33-.496.495-.686.557a.833.833 0 0 1-.515 0c-.19-.062-.355-.227-.685-.557L8.11 10.11c-.33-.33-.495-.496-.685-.558a.833.833 0 0 0-.516 0c-.19.062-.355.227-.685.557l-4.057 4.057m16.667-8.333H13m5.834 0v5.833"
      />
    </svg>
  );
}
