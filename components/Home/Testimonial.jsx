"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Container from "../Container";
import AOS from "aos";
import "aos/dist/aos.css";

const TESTIMONIALS = [
  {
    quote:
      "CloudPeak has been a game-changer for our business. Their intuitive platform and service have allowed us to streamline our operations and focus on what matters most. Highly recommended",
    name: "Sarah Taranian",
    role: "Creative Director",
    image: "/assets/testimonial/profile_1.webp",
  },
  {
    quote:
      "CloudPeak's financial analytics tools have given us unprecedented insights into our cash flow. It's like having a CFO in your pocket.",
    name: "Michael Chen",
    role: "CEO, TechNova Solutions",
    image: "/assets/testimonial/profile_2.webp",
  },
  {
    quote:
      "The real-time reporting feature has transformed our decision-making process. We can now respond to market changes faster than ever.",
    name: "Emily Rodriguez",
    role: "COO, GreenLeaf Enterprises",
    image: "/assets/testimonial/profile_3.webp",
  },
  {
    quote:
      "As a small business owner, CloudPeak's budgeting tools have been invaluable. I finally feel in control of my finances.",
    name: "David Okonkwo",
    role: "Founder, Craft Coffee Co.",
    image: "/assets/testimonial/profile_4.webp",
  },
  {
    quote:
      "The customer support team at CloudPeak is exceptional. They've gone above and beyond to ensure our success with the platform.",
    name: "Lisa Tanaka",
    role: "Finance Manager, Global Innovations",
    image: "/assets/testimonial/profile_5.webp",
  },
  {
    quote:
      "CloudPeak's integration capabilities have allowed us to consolidate our financial data from multiple sources effortlessly. It's been a huge time-saver.",
    name: "Alex Petrov",
    role: "CTO, DataSync Systems",
    image: "/assets/testimonial/profile_6.webp",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="py-20 ">
      <Container>
        <div className="container mx-auto px-4">
          {/* Section Intro */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2
              data-aos="fade-up-sm"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Trusted by 14,000+ users
            </h2>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="100"
              className="text-gray-400 leading-relaxed mx-auto w-5/6"
            >
              Sharing Their Successes and Transformative Experiences with
              CloudPeak's Powerful SaaS Solutions
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <div
                data-aos="fade-up-sm"
                data-aos-delay="200"
                key={index}
                className="border border-gray-700 rounded-3xl shadow-inner hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full bg-gray-800"
              >
                <div className="py-10 px-6">
                  <blockquote className="text-gray-300 leading-relaxed text-base">
                    {t.quote}
                  </blockquote>
                </div>

                <div className="p-6 border-t border-gray-700 flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
