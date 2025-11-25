import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="relative lg:pb-[350px] xl:pb-[450px] overflow-hidden">
      <div className="container relative">
        <div className="row justify-center">
          <div className="xl:col-8 py-10 text-center">
            <div className="flex flex-col items-center gap-8">
              <div className="overflow-hidden">
                <div className="animate-headshot">
                  <div className="inside-shadow-sm border border-border px-4 pt-1.5 pb-1 rounded-3xl text-white/85 leading-relaxed text-sm font-light [&_a]:hover:text-primary [&_a]:transition-colors [&_a]:duration-500">
                    <p>
                      New version available.{" "}
                      <Link href="/contact">Download now!</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h1
                  data-aos="fade-up-sm"
                  className="font-normal text-xl lg:text-[5rem] lg:leading-[1.2] mb-3 tracking-tighter"
                >
                  Elevate Your Business <br /> with CloudPeak
                </h1>
                <div className="xl:col-9 mx-auto">
                  <p
                    className="text-gray-300"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  >
                    Empowering Your Success with Cutting-Edge SaaS Solutions
                    Built for <br /> Scalability, Efficiency, and Growth.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-wrap gap-3 justify-center"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <Link
                  className="btn bg-sky-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                  href="/contact"
                >
                  <span>Get Free Version</span>
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
                        />
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
                        />
                      </svg>
                    </i>
                  </div>
                </Link>

                <Link
                  className="btn p-6 rounded-xl border border-tertiary/70"
                  href="/pricing"
                >
                  Get Pro Version
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero dashboard image */}
      <div className="relative container-fluid">
        <div
          className="mt-5 lg:mt-16 pb-10"
          data-aos="fade-up-sm"
          data-aos-delay="200"
        >
          <div className="mx-auto w-full sm:w-2/3 xl:max-w-[959px] object-cover lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
            <div
              data-ac="tilt"
              data-ac-angle="1"
              className="rounded-4xl p-6 border border-white/15"
            >
              <Image
                alt="CloudPeak Dashboard"
                loading="eager"
                width={910}
                height={680}
                className="rounded-3xl overflow-hidden"
                src="/assets/desktop_dashboard.webp"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background blob image */}
      <div
        className="hidden lg:block absolute left-10 -bottom-20 w-full -z-10"
        aria-hidden="true"
        data-aos="fade-in"
        data-aos-delay="800"
        data-aos-duration="2000"
        data-aos-easing="ease-out"
      >
        <Image
          alt="blob background"
          loading="eager"
          width={1560}
          height={924}
          className="w-full max-w-[2000px] mx-auto lg:scale-110"
          src="/assets/hero_blob.webp"
          priority
        />
      </div>
    </section>
  );
}
