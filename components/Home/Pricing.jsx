"use client";
import React, { useState } from "react";
import Container from "../Container";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20">
      <Container>
        <div className="container mx-auto px-4">
          {/* Section Intro */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Choose A Plan
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Created to Simplify Your Experience and Unlock the Advantages of
              CloudPeak's Innovative Technologies
            </p>

            {/* Toggle Switch */}
            <div className="mt-8 flex items-center gap-4 justify-center text-sm font-light transition-all">
              <span className={!isYearly ? "text-white" : "text-gray-400"}>
                Monthly
              </span>

              <label className="inline-flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <div className="w-14 h-7 border rounded-full relative transition-colors duration-300">
                  <span
                    className={`absolute top-1 left-1 h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                      isYearly ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>

              <span className={isYearly ? "text-white" : "text-gray-400"}>
                Yearly
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:px-16">
            {PRICING_DATA.map((plan, index) => {
              const price = isYearly ? plan.yearly : plan.monthly;

              return (
                <div
                  key={index}
                  className={`border border-gray-700 rounded-3xl p-8 flex flex-col justify-center transition-all duration-500 hover:shadow-xl hover:scale-105 w-full max-w-sm mx-auto ${
                    plan.popular ? "bg-white/10" : "bg-transparent"
                  }`}
                >
                  {/* Card Header */}
                  <div className="pb-5 border-b border-gray-700 mb-6">
                    <p className="text-lg font-semibold text-white">
                      {plan.title}
                    </p>
                    <p className="text-sm text-gray-400">{plan.subtitle}</p>
                  </div>

                  {/* Pricing List */}
                  <div className="flex flex-col justify-between grow gap-10 items-start">
                    <div>
                      <h3 className="text-3xl font-semibold mb-1 flex gap-1 items-center text-white">
                        <span>$</span>
                        <span>{price}</span>
                      </h3>
                      <p className="text-gray-400 text-sm">
                        per person, per {isYearly ? "year" : "month"}
                      </p>
                    </div>

                    <ul className="text-gray-300 text-sm space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex gap-2">
                          ✔ {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact/"
                      className="btn bg-sky-600 hover:bg-sky-500 text-white py-2 px-5 rounded-full text-sm mt-auto"
                    >
                      Select Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Pricing Data */
const PRICING_DATA = [
  {
    title: "Basic",
    subtitle: "For solo designers",
    monthly: 19,
    yearly: 199,
    features: [
      "Basic Dashboard",
      "Simple Expense Tracking",
      "Monthly Financial Summary",
      "1 Financial Account",
      "Email Support",
    ],
  },
  {
    title: "Premium",
    subtitle: "For small teams",
    monthly: 49,
    yearly: 499,
    popular: true,
    features: [
      "Advanced Dashboard",
      "Team Budgeting Tools",
      "Weekly Financial Reports",
      "5 Financial Accounts",
      "Priority Email Support",
    ],
  },
  {
    title: "Enterprise",
    subtitle: "For large organizations",
    monthly: 99,
    yearly: 999,
    features: [
      "Customizable Dashboard",
      "Advanced Forecasting Tools",
      "Real-time Financial Reporting",
      "Unlimited Financial Accounts",
      "24/7 Dedicated Support",
    ],
  },
];
