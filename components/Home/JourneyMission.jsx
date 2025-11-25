import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "Seamless Integration",
    description:
      "CloudPeak's Flexible Integration Options for Enhanced Efficiency.",
    image: "/assets/faster_integration.webp",
    delay: 100,
    alt: "Seamless Integration",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "CloudPeak's Scalable Infrastructure Can Handle Your Increasing Demands and Workloads.",
    image: "/assets/happy_customers.webp",
    delay: 200,
    alt: "Scalable Infrastructure",
  },
];

export default function JourneyMission() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="section">
      <div className="container">
        {/* Section Intro */}
        <div className="section-intro text-center lg:col-8 mx-auto my-10">
          <h2
            data-aos="fade-up-sm"
            className="font-normal text-xl lg:text-[5rem] lg:leading-[1.2] mb-3 tracking-tighter"
          >
            Our Journey and Mission
          </h2>
          <p
            data-aos="fade-up-sm"
            data-aos-delay="100"
            className="text-gray-300"
          >
            Explore Our Inspirational Journey, Values, and Commitment to
            Providing Exceptional SaaS <br /> Solutions That Empower Your
            Business
          </p>
        </div>

        {/* Cards */}
        <div className="section-content lg:px-20 mt-10">
          <div className="grid md:grid-cols-2 w-5xl mx-auto gap-6">
            {cards.map((card, idx) => (
              <div key={idx} data-aos="fade-up-sm" data-aos-delay={card.delay}>
                <div className="border border-border inside-shadow p-10 rounded-4xl h-full bg-gray-900 flex flex-col justify-between">
                  <div className="mb-10">
                    <h3 className="mb-4 text-4xl">{card.title}</h3>
                    <p className="text-gray-400">{card.description}</p>
                  </div>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={420}
                    height={380}
                    className="w-full rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
