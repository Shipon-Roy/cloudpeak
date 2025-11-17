"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function FeatureBanner() {
  return (
    <section className="section relative overflow-hidden lg:pt-20">
      <Container>
        <div className="row g-5 grid lg:grid-cols-12 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1
              className="text-[32px] leading-tight md:text-[48px] font-bold mb-6"
              data-aos="fade-up-sm"
            >
              Manage, Track, and Grow your Finances with Ease.
            </h1>

            <p
              className="text-gray-300 mb-8"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              CloudPeak is an all-in-one financial management platform designed
              to simplify your financial life. From tracking expenses and
              setting budgets to planning for the future, our powerful tools and
              intuitive interface help you take control of your financial
              journey.
            </p>

            <div
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="inline-block"
            >
              <Link
                href="/book-demo"
                className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
              >
                <span>See How It Works</span>
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

          {/* Right Content */}
          <div
            className="lg:col-span-6 relative"
            data-aos="fade-left-sm"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="relative p-6 border border-white/15 rounded-4xl mx-auto w-full lg:min-w-[620px] xl:min-w-[900px] lg:translate-x-[100px] xl:translate-x-[250px]">
              <Image
                width={900}
                height={570}
                alt="cloudpeak dashboard"
                src="/assets/features/desktop_features.webp"
                className="object-cover rounded-3xl"
                priority
              />

              <Image
                width={500}
                height={500}
                alt=""
                src="/images/shapes/vertical_blob.webp"
                className="w-full max-w-[400px] lg:max-w-[500px] absolute -right-[270px] lg:-right-[100px] xl:right-[150px] bottom-0 lg:bottom-1/2 lg:translate-y-1/2 -z-10 opacity-90 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
