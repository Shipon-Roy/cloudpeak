"use client";

import React, { useState } from "react";
import Container from "../Container";

const FAQ_DATA = [
  {
    question: "What is CloudPeak?",
    answer:
      "CloudPeak is a comprehensive cloud-based platform that provides integrated financial management tools, advanced analytics, and collaborative features to help businesses of all sizes optimize their operations and make data-driven decisions.",
  },
  {
    question: "What services does CloudPeak offer?",
    answer:
      "CloudPeak offers a wide range of services including real-time financial reporting, budgeting and forecasting tools, expense management, invoicing, project costing, and customizable dashboards. We also provide API integrations with popular business software for seamless data flow.",
  },
  {
    question: "How can I get started with CloudPeak?",
    answer:
      "Getting started with CloudPeak is easy. Simply visit our website, choose a plan that fits your needs, and sign up for a free trial. Our onboarding team will guide you through the setup process and provide training to ensure you get the most out of our platform.",
  },
  {
    question: "What are the benefits of using CloudPeak?",
    answer:
      "CloudPeak offers numerous benefits including improved financial visibility, streamlined processes, enhanced collaboration, cost savings, and better decision-making capabilities. Our platform scales with your business, providing the tools you need to drive growth and efficiency.",
  },
  {
    question: "How secure is CloudPeak?",
    answer:
      "Security is our top priority. CloudPeak employs industry-leading encryption, regular security audits, and multi-factor authentication. We are SOC 2 Type II compliant and adhere to strict data protection regulations to ensure your sensitive financial information remains secure.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 ">
      <Container>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Section Intro */}
            <div className="lg:col-span-5">
              <div className="section-intro text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-6xl text-white mb-4">
                  Common <br /> Questions
                </h2>
                <p className="text-gray-400 lg:w-3/5 mx-auto lg:mx-0">
                  Haven't found what you're looking <br /> for?{" "}
                  <a href="/contact" className="text-sky-500 hover:underline">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {FAQ_DATA.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-2xl overflow-hidden bg-gray-800"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`transition-transform duration-300 ${
                          activeIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 text-gray-300 ${
                        activeIndex === index ? "max-h-96 py-4" : "max-h-0"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
