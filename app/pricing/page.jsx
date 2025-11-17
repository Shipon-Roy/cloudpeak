import Experience from "@/components/Home/Experience";
import Pricing from "@/components/Home/Pricing";
import PriceDtails from "@/components/Pricing/PriceDetails";
import React from "react";

export default function PricingPage() {
  return (
    <div>
      <Pricing />
      <PriceDtails />
      <Experience />
    </div>
  );
}
