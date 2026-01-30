"use client";

import Image from "next/image";

type GalleryImage = {
  src: string;
  alt?: string;
};

type GallerySectionProps = {
  heading?: string;
  images: GalleryImage[]; // expects at least 3 images
};

export default function GallerySection({
  heading = "GALLERY",
  images,
}: GallerySectionProps) {
  if (!images || images.length < 3) return null;

  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider">
          {heading}
        </h2>
      </div>

      {/* Gallery Grid */}
<div className="max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-11 gap-6">

    {/* BIG IMAGE */}
    <div className="
      relative w-full
      h-[420px] sm:h-[480px] md:h-[650px]
      md:col-span-5 md:row-span-2
    ">
      <Image
        src={images[0].src}
        alt={images[0].alt || "gallery image"}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* SMALL IMAGES WRAPPER (mobile me side-by-side) */}
    <div className="grid grid-cols-2 gap-6 md:contents">

      {/* RIGHT TOP IMAGE */}
      <div className="
        relative w-full
        h-[200px] sm:h-[230px] md:h-[315px]
        md:col-span-6
      ">
        <Image
          src={images[1].src}
          alt={images[1].alt || "gallery image"}
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT BOTTOM IMAGE */}
      <div className="
        relative w-full
        h-[200px] sm:h-[230px] md:h-[315px]
        md:col-span-6
      ">
        <Image
          src={images[2].src}
          alt={images[2].alt || "gallery image"}
          fill
          className="object-cover"
        />
      </div>

    </div>

  </div>
</div>




    </section>
  );
}















