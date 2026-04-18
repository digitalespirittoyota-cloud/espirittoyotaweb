"use client";

import Image from "next/image";

type FeatureImageSectionProps = {
  heading: string;
  description?: string;
  image: string;
  imageAlt?: string;
};

export default function FeatureImageSection({
  heading,
  description,
  image,
  imageAlt = "feature image",
}: FeatureImageSectionProps) {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading + Description */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">
          {heading}
        </h2>

        {description && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="relative w-full aspect-[16/7]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
