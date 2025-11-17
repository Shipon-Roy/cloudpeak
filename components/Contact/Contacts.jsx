import React from "react";

export default function Contacts() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact</h1>
              <p className="text-lg text-gray-300">
                Whether you have questions about our services or want to explore
                how CloudPeak Finance can help your business thrive, we're here
                to assist!
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-2">Contact Information</p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium text-white">Email:</span>{" "}
                  <a
                    href="mailto:support@cloudpeakfinance.com"
                    className="text-blue-400 hover:underline"
                  >
                    support@cloudpeakfinance.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-white">Phone:</span>{" "}
                  <a
                    href="tel:+11234567890"
                    className="text-blue-400 hover:underline"
                  >
                    +1 (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-950 border text-gray-200 rounded-2xl shadow-xl p-8">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your First Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Last Name"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="johndoe@example.com"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write Your Subject Here"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write Your Message Here"
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition"
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
  );
}
