import Image from "next/image";
import React from "react";
import Container from "../Container";

export default function Companies() {
  const brands = [
    "/assets/brands/1.svg",
    "/assets/brands/2.svg",
    "/assets/brands/3.svg",
    "/assets/brands/4.svg",
    "/assets/brands/5.svg",
  ];

  return (
    <section className="pt-20 xl:pt-24">
      <Container>
        <div className="container mx-auto">
          <p className="text-center text-lg mb-10" data-aos="fade-up-sm">
            Trusted by thousands of companies worldwide
          </p>

          <div data-aos="fade-up-sm" data-aos-delay="100">
            <div className="flex flex-wrap justify-around gap-8">
              {brands.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`brand-logo-${index + 1}`}
                  width={180}
                  height={60}
                  className="grayscale opacity-70 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 items-center gap-8 my-20">
          {/* Left Content */}
          <div data-aos="fade-up-sm">
            <h2 className="mb-4 text-4xl">We Help Transforms Your Business</h2>
            <p>
              Our mission is to empower individuals and organizations to unleash
              their creative potential
            </p>
          </div>

          {/* Card 1 */}
          <div
            data-aos="fade-up-sm"
            data-aos-delay="100"
            className="flex justify-center items-center bg-gray-900 rounded-2xl shadow-2xl w-full h-full"
          >
            <div className="border border-border inside-shadow p-10 rounded-4xl flex flex-col items-center gap-4 text-center w-full h-full">
              <div className="w-[60px] h-[60px] bg-gray-800 text-sky-600 rounded-full grid place-items-center text-primary">
                {/* Icon */}
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
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-h5">Streamlined Workflow</h3>
              <p className="text-sm">
                Effortlessly Collaborate Across Teams and Projects with
                CloudPeak's Seamless and Intuitive Collaboration Tools
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up-sm"
            data-aos-delay="200"
            className="flex justify-center items-center bg-gray-900 rounded-2xl shadow-2xl w-full h-full"
          >
            <div className="border border-border inside-shadow p-10 rounded-4xl flex flex-col items-center gap-4 text-center w-full h-full">
              <div className="w-[60px] h-[60px] bg-gray-800 text-sky-600 rounded-full grid place-items-center text-primary">
                {/* Same SVG */}
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
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-h5">Robust Data Security</h3>
              <p className="text-sm">
                Protect Your Sensitive Information with Cutting-Edge Encryption
                and Security Measures
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
