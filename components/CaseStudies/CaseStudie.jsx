"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const caseStudies = [
  {
    id: 1,
    title: "Revolutionizing Hospitality",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-1",
  },
  {
    id: 2,
    title: "Driving Innovation with AI",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-2",
  },
  {
    id: 3,
    title: "Personalizing the Music Experience",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-3",
  },
  {
    id: 4,
    title: "Optimizing Supply Chain Operations",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-4",
  },
  {
    id: 5,
    title: "Enhancing Healthcare with Data",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-5",
  },
  {
    id: 6,
    title: "Boosting Sales with Analytics",
    subtitle: "How a Leading Retailer Increased Revenue by 25%",
    description:
      "Discover how our advanced analytics platform helped a major retailer optimize their inventory, personalize marketing campaigns.",
    image: "/assets/case-image.svg",
    href: "/case/case-6",
  },
];

export default function CaseStudie() {
  return (
    <section className="section-page-heading">
      <Container>
        <div className="container text-center py-20">
          <div className="lg:px-8 flex flex-col items-center lg:max-w-5xl mx-auto gap-4">
            <h1 className="lg:text-[4.5rem] lg:leading-[1.2] capitalize">
              Case Studies
            </h1>
            <p className="xl:max-w-4xl mx-auto text-balance">
              Explore detailed case studies showcasing how our solutions have
              transformed businesses, driving efficiency, growth, and innovation
              across various industries.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 ">
          {caseStudies.map((caseItem) => (
            <article
              key={caseItem.id}
              className="inside-shadow bg-gray-800 shadow-shadow/50 hover:shadow-shadow hover:bg-light/10 transition-all duration-500 rounded-4xl p-8 lg:p-10"
            >
              <div className="flex flex-col justify-between gap-8 h-full">
                {/* Case Content */}
                <div>
                  <Image
                    src={caseItem.image}
                    alt="Case Image"
                    width={180}
                    height={44}
                    className="mb-12"
                    priority
                  />
                  <h4 className="mb-2">{caseItem.title}</h4>
                  <p className="mb-6">{caseItem.subtitle}</p>
                  <p>{caseItem.description}</p>
                </div>

                {/* Read More Button */}
                <Link
                  href={caseItem.href}
                  className="group/arrowBtn flex items-center max-w-max gap-1 text-white"
                >
                  <span className="font-medium">Read Full Case Study</span>
                  <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                    <i className="-rotate-45 group-hover/arrowBtn:translate-x-full group-hover/arrowBtn:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
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
                    <i className="-rotate-45 absolute top-full right-full group-hover/arrowBtn:translate-x-full group-hover/arrowBtn:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
