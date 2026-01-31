"use client";
import Image from "next/image";
// import "./Gallery.css";

export default function GallerySection2({ data }) {
  const { heading, images } = data;

  return (
    <section className="gallery-wrap">
      {/* Heading */}
      <div className="gallery-heading">
        <h2>{heading}</h2>
        <span />
      </div>

      {/* Top columns */}
      <div className="gallery-columns">
        {/* LEFT COLUMN */}
        <div className="col">
          <div className="img big">
            <Image src={images.left.big} alt="" fill />
          </div>
          <div className="img small">
            <Image src={images.left.small} alt="" fill />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <div className="img small">
            <Image src={images.right.small} alt="" fill />
          </div>
          <div className="img big">
            <Image src={images.right.big} alt="" fill />
          </div>
        </div>
      </div>

      {/* Bottom full image */}
      <div className="full-img">
        <Image src={images.bottom} alt="" fill />
      </div>
    </section>
  );
}



