import AboutBanner from "@/components/About/AboutBanner";
import BrandSlider from "@/components/About/BrandSlider";
import CoreValues from "@/components/About/CoreValues";
import Team from "@/components/About/Team";
import Experience from "@/components/Home/Experience";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <BrandSlider />
      <CoreValues />
      <Team />
      <Experience />
    </div>
  );
}
