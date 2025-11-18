"use client";
import React from "react";
import Image from "next/image";
import Container from "../Container";

export default function CoreValues() {
  return (
    <section className="section space-y-14 lg:space-y-32">
      {/* ===== Section Header ===== */}
      <Container>
        <div className="section-intro text-center lg:col-8 mx-auto my-10">
          <h2
            className="text-3xl md:text-5xl lg:text-[4.5rem]   leading-tight capitalize"
            data-aos="fade-up-sm"
          >
            Our Core Values
          </h2>
          <p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up-sm"
            data-aos-delay="100"
          >
            We believe in constantly evolving and adopting the latest
            technologies to stay ahead of the curve. Our team is committed to
            pushing the boundaries.
          </p>
        </div>

        {/* ===== Core Value Cards ===== */}
        <div className="section-content">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {[
              {
                title: "Streamlined Workflow",
                text: "Effortlessly Collaborate Across Teams and Projects with CloudPeak's Seamless and Intuitive Collaboration Tools",
              },
              {
                title: "Robust Data Security",
                text: "Protect Your Sensitive Information with Cutting-Edge Encryption and Security Measures solutions",
              },
              {
                title: "Strive for Excellence",
                text: "Effortlessly Collaborate Across Teams and Projects with CloudPeak's Seamless and Intuitive Collaboration",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
                className="flex justify-center items-center"
              >
                <div className="border border-border inside-shadow p-10 rounded-4xl flex flex-col items-center gap-4 text-center w-full h-full">
                  <div className="w-[60px] h-[60px] bg-gray-800 text-sky-600 rounded-full grid place-items-center">
                    {/* Reusable Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M9.928 7.793a1.251 1.251 0 1 0 0-2.505h-6.61c-.346 0-.653.133-.88.36a1.175 1.175 0 0 0-.36.88c0 .692.56 1.252 1.254 1.252h6.61l-.014.013zM9.3 16.322l-2.985.067c-.346 0-.653.16-.88.386a1.198 1.198 0 0 0-.346.893c.014.693.587 1.24 1.28 1.226l2.985-.067a1.252 1.252 0 0 0 1.226-1.279 1.251 1.251 0 0 0-1.28-1.226zm9.222-9.861c.946 2.825 1.72 3.598 4.544 4.544l.014-.013c1.226.413 1.226 2.119 0 2.532-2.826.946-3.598 1.719-4.545 4.544a1.32 1.32 0 0 1-1.266.92 1.308 1.308 0 0 1-1.265-.92c-.8-2.399-1.48-3.318-3.412-4.118a5.602 5.602 0 0 0-2.185-.426c-2.612-.014-9.155-.014-9.155-.014a1.251 1.251 0 0 1-.88-2.145c.227-.227.533-.36.88-.36h9.101c.787 0 1.546-.213 2.199-.64 1.146-.746 2.838-2.092 3.438-3.904.413-1.226 2.119-1.226 2.532 0z"
                          clipRule="evenodd"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h24v24H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-h5">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ===== Blog Section ===== */}
      <Container>
        <div
          className="inside-shadow shadow-shadow/60 border border-border p-8 lg:p-10 rounded-4xl overflow-hidden"
          data-aos="fade-up-sm"
        >
          <div className="flex gap-y-10 flex-col lg:flex-row items-center">
            <div className="lg:w-[45%]">
              <Image
                src="/assets/about/post_1.webp"
                alt="Blog Post"
                width={500}
                height={385}
                className="rounded-3xl w-full object-cover"
              />
            </div>

            <div className="lg:w-[55%] lg:pl-10 relative">
              <div className="flex flex-col gap-y-8 py-2">
                <p className="font-medium text-gray-400">Our Journey</p>
                <h3 className="text-2xl text-white ">
                  Committed to Innovation Excellence and with cutting-edge
                  technology
                </h3>
                <p className="font-light text-gray-400">
                  Welcome to CloudPeak Finance, where cutting-edge technology
                  meets exceptional service. Founded in [Year], we set out to
                  revolutionize the financial industry by providing innovative
                  solutions that empower businesses to thrive in a dynamic
                  market.
                </p>
              </div>

              <Image
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1000"
                src="/images/shapes/card_bg_blob.webp"
                alt="shape"
                width={600}
                height={600}
                className="absolute bottom-24 -right-16 opacity-20 min-w-[600px] max-w-[600px] -z-10"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* ===== Stats Section ===== */}
      <Container>
        <div className="lg:px-10">
          <div className="grid text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                year: "Year 2019",
                value: "5000+",
                text: "Satisfied global clients",
              },
              {
                year: "Year 2021",
                value: "10,000+",
                text: "Finishing success projects",
              },
              { year: "Year 2022", value: "78%", text: "Download total range" },
              {
                year: "Year 2023",
                value: "650K",
                text: "Sales Generated successfully",
              },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up-sm" data-aos-delay={(i + 1) * 100}>
                <p className="text-gray-400">{item.year}</p>
                <h3 className="text-green-400 text-2xl py-2">{item.value}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
