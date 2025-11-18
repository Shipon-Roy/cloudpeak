"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Container";

export default function Changelog() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const changelogItems = [
    {
      version: "1.2.33",
      title: "Improved Performance: Faster Integration",
      description:
        "We've upgraded our security measures to include authentication and advanced encryption, ensuring your data. Stay on top of your financial data with our brand-new real-time analytics dashboard, providing instant insights and more detailed metrics.",
      img: "/assets/happy_customers.webp",
      alt: "Improved Performance",
    },
    {
      version: "1.2.34",
      title: "New Feature: Real-Time Analytics Dashboard",
      description:
        "We've upgraded our security measures to include authentication and advanced encryption, ensuring your data. Stay on top of your financial data with our brand-new real-time analytics dashboard, providing instant insights and more detailed metrics.",
      img: "/assets/faster_integration.webp",
      alt: "Real-Time Analytics Dashboard",
    },
    {
      version: "1.2.35",
      title: "Enhanced Security: Advanced Encryption",
      description:
        "We've upgraded our security measures to include authentication and advanced encryption, ensuring your data. Stay on top of your financial data with our brand-new real-time analytics dashboard, providing instant insights and more detailed metrics.",
      img: "/assets/desktop_dashboard.webp",
      alt: "Advanced Encryption",
    },
    {
      version: "1.2.36",
      title: "Improved Performance: Faster Integration",
      description:
        "We've upgraded our security measures to include authentication and advanced encryption, ensuring your data. Stay on top of your financial data with our brand-new real-time analytics dashboard, providing instant insights and more detailed metrics.",
      img: "/assets/cloudpeakWork/web_chart.webp",
      alt: "Faster Integration",
    },
  ];

  return (
    <Container>
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        {/* Heading */}
        <div className="container mx-auto px-4 text-center">
          <div className="lg:px-8 flex flex-col items-center gap-4">
            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] capitalize text-gray-900 dark:text-white"
              data-aos="fade-up-sm"
            >
              Changelog
            </h1>
            <p
              className="xl:col-10 mx-auto text-gray-400 "
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              Empowering Your Success with Cutting-Edge SaaS <br /> Solutions
              Built for Scalability, Efficiency, and Growth.
            </p>
          </div>
        </div>

        {/* Changelog Items */}
        <div className="container mx-auto px-4 mt-12 flex flex-col gap-10">
          {changelogItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm"
              data-aos="fade-up-sm"
              data-aos-delay={150 + index * 50}
            >
              <div className="flex flex-col lg:flex-row gap-10 max-w-[500px] lg:max-w-none mx-auto">
                {/* Image */}
                <div className="lg:w-[45%]">
                  <div className="rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 px-10 lg:px-16 py-6">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={360}
                      height={336}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-[55%] flex flex-col justify-center">
                  <span className="h-10 px-4 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full grid place-items-center">
                    Version {item.version}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
