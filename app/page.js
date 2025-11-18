"use client";
import CloudPeakWorks from "@/components/Home/CloudpeakWorks";
import Companies from "@/components/Home/Companies";
import Experience from "@/components/Home/Experience";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import JourneyMission from "@/components/Home/JourneyMission";
import Pricing from "@/components/Home/Pricing";
import Testimonials from "@/components/Home/Testimonial";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <Hero />
      <Companies />
      <JourneyMission />
      <CloudPeakWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Experience />
    </>
  );
}
