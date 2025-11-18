"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const integrations = [
  {
    name: "Adobe",
    img: "/assets/integrations/adobe.webp",
    link: "/integration/adobe",
    desc: "Create, edit, and share documents with Adobe integration.",
  },
  {
    name: "Apple Pay",
    img: "/assets/integrations/apple_pay.webp",
    link: "/integration/apple-pay",
    desc: "Transform your wallet with quick and secure digital payments across devices.",
  },
  {
    name: "Google Chrome",
    img: "/assets/integrations/google_chrome.webp",
    link: "/integration/google-chrome",
    desc: "Browse the web securely with Google Chrome integration.",
  },
  {
    name: "Google Drive",
    img: "/assets/integrations/google_drive.webp",
    link: "/integration/google-drive",
    desc: "Store and share files securely with Google Drive integration.",
  },
  {
    name: "Master Card",
    img: "/assets/integrations/master_card.webp",
    link: "/integration/master-card",
    desc: "Transform your wallet with quick and secure digital payments across devices.",
  },
  {
    name: "PayPal",
    img: "/assets/integrations/paypal.webp",
    link: "/integration/paypal",
    desc: "Transform your wallet with quick and secure digital payments across devices.",
  },
  {
    name: "Slack Integration",
    img: "/assets/integrations/slack.webp",
    link: "/integration/slack",
    desc: "Streamline communication and collaboration with Slack integration.",
  },
  {
    name: "SnapChat",
    img: "/assets/integrations/snapchat.webp",
    link: "/integration/snapchat",
    desc: "Share moments and stay connected with friends through ephemeral videos.",
  },
];

export default function Integrations() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="py-20 lg:py-28">
      <div>
        <div className="container mx-auto text-center px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 lg:px-8">
            <h1
              className="text-3xl md:text-5xl lg:text-[4.5rem] font-bold leading-tight capitalize"
              data-aos="fade-up-sm"
            >
              Seamless Integration with Your Favorite Tools
            </h1>

            <p
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              Effortlessly connect our platform with the apps and services you
              already use. Enhance your workflow.
            </p>
          </div>
        </div>
        <div className="lg:px-20 mt-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {integrations.map((item, index) => (
              <article
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                <div className="p-10 bg-gray-800 inside-shadow shadow-shadow/50 hover:shadow-shadow hover:bg-light/10 transition-all duration-500 rounded-4xl bg-light/10 flex flex-col justify-between gap-6 h-full">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="max-w-[60px] w-full aspect-square"
                      />
                      <div className="px-4 py-2 rounded-full bg-tertiary/40">
                        <span className="text-white bg-sky-500 rounded-3xl px-5 py-3 text-sm font-light">
                          Browser
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="font-semibold text-white capitalize">
                        {item.name}
                      </p>
                      <p>{item.desc}</p>
                    </div>
                  </div>

                  <Link
                    href={item.link}
                    aria-label="View Integration"
                    className="group/arrowBtn flex items-center max-w-max gap-1 text-white cursor-pointer"
                  >
                    <span className="font-medium">View Integration</span>
                    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="group-hover/arrowBtn:translate-x-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        ➜
                      </i>
                      <i className="absolute top-0 right-full group-hover/arrowBtn:translate-x-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                        ➜
                      </i>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
