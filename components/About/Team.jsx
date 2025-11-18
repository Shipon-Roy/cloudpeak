"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "../Container";

export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: "Sarah Taranian",
      role: "Creative Director",
      img: "/assets/about/member_1.webp",
    },
    {
      name: "David Chen",
      role: "Programmer",
      img: "/assets/about/member_2.webp",
    },
    {
      name: "Alex Smith",
      role: "Lead Developer",
      img: "/assets/about/member_3.webp",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      img: "/assets/about/member_4.webp",
    },
    {
      name: "David Brown",
      role: "Product Manager",
      img: "/assets/about/member_5.webp",
    },
    {
      name: "Emily Wilson",
      role: "UX Designer",
      img: "/assets/about/member_6.webp",
    },
  ];

  return (
    <Container>
      <section className="container mx-auto py-16 text-white">
        <div className="section-intro text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">
            Meet Our Team
          </h2>
          <p
            className="text-white/70 mt-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We believe in constantly evolving and adopting the latest
            technologies to stay ahead of the curve. Our team is committed to
            pushing the boundaries of what's possible.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-700 bg-white/10 backdrop-blur-md py-6 px-6 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={350}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-center mt-4">
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
