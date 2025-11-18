"use client";

import Image from "next/image";
import Container from "../Container";

export default function AboutBanner() {
  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-12 gap-6 py-10">
          {/* Left Image */}
          <div className="md:col-span-8 relative overflow-hidden rounded-4xl">
            <Image
              src="/assets/about/story_image_large.webp"
              alt="Our Story"
              width={792}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Image */}
          <div className="md:col-span-4 relative overflow-hidden rounded-4xl">
            <Image
              src="/assets/about/story_image_small.webp"
              alt="Our Story"
              width={384}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
