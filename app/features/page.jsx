import Feature from "@/components/Features/Feature";
import FeatureBanner from "@/components/Features/FeatureBanner";
import Experience from "@/components/Home/Experience";
import FAQ from "@/components/Home/FAQ";
import Testimonials from "@/components/Home/Testimonial";
import React from "react";

export default function FeaturesPage() {
  return (
    <div>
      <FeatureBanner />
      <Feature />
      <Testimonials />
      <FAQ />
      <Experience />
    </div>
  );
}
