"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FreeDemo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here (API, email, etc)
    console.log("Form Submitted");
  };

  return (
    <>
      {/* Heading Section */}
      <section className="py-16 md:py-20 lg:py-24 ">
        <div className="container text-center">
          <div className="lg:px-8 flex flex-col items-center lg:col-10 mx-auto gap-4">
            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] capitalize"
              data-aos="fade-up-sm"
            >
              Want a Free Demo?
            </h1>
            <p
              className="xl:col-10 mx-auto text-balance text-gray-400"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              Experience the Benefits Firsthand with a Free Personalized <br />{" "}
              Demo. Fill out the form and we will reach out to you.
            </p>
          </div>
        </div>

        {/* Form Section */}

        <div className="container mx-auto px-4 pt-16 w-5xl">
          <div className="lg:px-24">
            <div className="border border-gray-700 bg-gray-800 shadow-lg p-10 rounded-3xl">
              <form action="#" method="post">
                <div className="grid grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-300 font-medium mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-300 font-medium mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 font-medium mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Your message subject"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 font-medium mb-1"
                    >
                      Write Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full py-5 px-7 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
