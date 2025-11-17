"use client";

import Image from "next/image";
import Container from "../Container";
import { SiTicktick } from "react-icons/si";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    subtitle: "For solo designers",
    price: "19",
    features: [
      "Basic Dashboard",
      "Simple Expense Tracking",
      "Monthly Financial Summary",
      "1 Financial Account",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    subtitle: "For small teams",
    price: "49",
    features: [
      "Comprehensive Dashboard",
      "Advanced Budgeting Tools",
      "Weekly Financial Reports",
      "5 Financial Accounts",
      "Priority Email Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    price: "99",
    features: [
      "Customizable Dashboard",
      "Advanced Forecasting Tools",
      "Real-time Financial Reporting",
      "Unlimited Financial Accounts",
      "24/7 Dedicated Support",
    ],
    highlight: false,
  },
];

export default function PriceDetails() {
  return (
    <section className="section py-14 lg:py-20">
      <Container>
        {/* Heading */}
        <div className="text-center pb-14 lg:px-28">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            data-aos="fade-up-sm"
          >
            Choose which plan suits best for you
          </h2>
          <p
            className="mx-auto lg:w-3/5 text-gray-400"
            data-aos="fade-up-sm"
            data-aos-delay="100"
          >
            Designed to Simplify Your Experience and Maximize the Benefits of{" "}
            <br />
            CloudPeak's Innovative Features
          </p>
        </div>

        {/* Desktop Table */}
        <div
          className="hidden md:table w-full"
          data-aos="fade-up-sm"
          data-aos-delay="150"
        >
          <table className="w-4xl mx-auto">
            <thead>
              <tr>
                <th></th>
                {plans.map((plan, index) => (
                  <th key={index}>
                    <div className=" space-y-1">
                      <p className="text-lg font-semibold">{plan.name}</p>
                      <p className="text-sm opacity-80">{plan.subtitle}</p>
                      <div className="flex justify-center items-center gap-1">
                        <span>$</span>
                        <h2 className="text-3xl font-bold">{plan.price}</h2>
                      </div>
                      <p className="text-sm opacity-80">per person / month</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4 font-medium">Main Features</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {plans[0].features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4">{feature}</td>
                  {plans.map((_, planIndex) => (
                    <td key={planIndex} className="mx-auto text-green-400">
                      <SiTicktick />
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td></td>
                {plans.map((plan, index) => (
                  <td key={index} className="py-4 mt-10">
                    <Link
                      href="/contact"
                      className={`block text-center px-4 py-2 rounded-lg font-medium border transition ${
                        plan.highlight
                          ? "bg-primary border-primary text-white"
                          : "bg-tertiary/50 border-light text-white hover:bg-primary"
                      }`}
                    >
                      Select Plan
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 md:hidden">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl transition ${
                plan.highlight ? "bg-primary/70" : "bg-tertiary/40"
              }`}
            >
              <div className="text-center mb-5">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p className="text-sm mb-4">{plan.subtitle}</p>
                <div className="flex justify-center items-center gap-1 mb-4">
                  <span className="text-xl">$</span>
                  <h2 className="text-3xl font-bold">{plan.price}</h2>
                </div>
                <p className="text-sm">per person / month</p>
              </div>

              <h3 className="text-lg font-semibold mb-4">Main Features</h3>
              <ul>
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex justify-between py-4 border-b border-white/20"
                  >
                    <span>{feature}</span>
                    <Image
                      src="/images/icons/green_tick.svg"
                      width={18}
                      height={18}
                      alt="tick"
                    />
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className={`block w-full text-center px-4 py-2 rounded-lg font-medium border transition ${
                    plan.highlight
                      ? "bg-primary border-primary text-white"
                      : "bg-tertiary/50 border-light text-white hover:bg-primary"
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
