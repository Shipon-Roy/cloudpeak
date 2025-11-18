"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function BlogItem() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      category: "Guides",
      date: "Wednesday, Aug 21, 2024",
      title:
        "The Future of Finance: Harnessing the Power of Blockchain Technology",
      image: "/assets/blogs/post_3.webp",
      url: "/blog/post-3",
    },
    {
      id: 2,
      category: "Company",
      date: "Wednesday, Aug 21, 2024",
      title: "AI in Finance: Transforming Investment Strategies",
      image: "/assets/blogs/post_4.webp",
      url: "/blog/post-4",
    },
    {
      id: 3,
      category: "Technology",
      date: "Wednesday, Aug 21, 2024",
      title: "The Future of Finance: Embracing Quantum Computing",
      image: "/assets/blogs/post_5.webp",
      url: "/blog/post-5",
    },
    {
      id: 4,
      category: "Business",
      date: "Wednesday, Aug 21, 2024",
      title: "The Future of Finance: Embracing Quantum Computing",
      image: "/assets/blogs/post_6.webp",
      url: "/blog/post-6",
    },
    {
      id: 5,
      category: "Guides",
      date: "Wednesday, Aug 21, 2024",
      title:
        "The Future of Finance: Harnessing the Power of Blockchain Technology",
      image: "/assets/blogs/post_1.webp",
      url: "/blog/post-3",
    },
    {
      id: 6,
      category: "Company",
      date: "Wednesday, Aug 21, 2024",
      title: "AI in Finance: Transforming Investment Strategies",
      image: "/assets/blogs/post_2.webp",
      url: "/blog/post-4",
    },
    {
      id: 7,
      category: "Technology",
      date: "Wednesday, Aug 21, 2024",
      title: "The Future of Finance: Embracing Quantum Computing",
      image: "/assets/blogs/post_3.webp",
      url: "/blog/post-5",
    },
    {
      id: 8,
      category: "Business",
      date: "Wednesday, Aug 21, 2024",
      title: "The Future of Finance: Embracing Quantum Computing",
      image: "/assets/blogs/post_6.webp",
      url: "/blog/post-6",
    },
  ];

  const categories = ["All", "Company", "Technology", "Guides", "Business"];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="py-20">
      <Container>
        <div className="container mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Read Our Blogs
            </h3>
            <p className="text-gray-500">
              Stay Ahead with the Latest Trends, Tips, and Industry Insights
              from CloudPeak Finance
            </p>
          </div>

          {/* Category Filter */}
          <ul className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full border transition-all
                  ${
                    activeCategory === cat
                      ? "bg-black text-white"
                      : "text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBlogs.map((item) => (
              <div
                key={item.id}
                className="border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-6 relative rounded-2xl overflow-hidden group">
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs py-1 px-3 rounded-full">
                    {item.category}
                  </span>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="w-full h-[230px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <Link
                  href={item.url}
                  className="btn text-gray-400 p-6 rounded-xl group flex items-center max-w-max gap-1"
                >
                  <span>Read Full Blog</span>
                  <span className="relative w-5 h-5 grid place-items-center overflow-hidden">
                    <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </i>
                    <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
