"use client";
import Image from "next/image";
import "./Gallery.css";

export default function GallerySection2({ data }) {
  const { heading, images, bgImage } = data;

  return (
    <section
  className="gallery-wrap"
  style={{ backgroundImage: `url(${data.bgImage})` }}
>

      {/* Heading */}
      <div className="gallery-heading">
        <h2>{heading}</h2>
      </div>

      {/* Top columns */}
      <div className="gallery-columns">
        <div className="col">
          <div className="img big">
            <Image src={images.left.big} alt="" fill />
          </div>
          <div className="img small">
            <Image src={images.left.small} alt="" fill />
          </div>
        </div>

        <div className="col">
          <div className="img small">
            <Image src={images.right.small} alt="" fill />
          </div>
          <div className="img big">
            <Image src={images.right.big} alt="" fill />
          </div>
        </div>
      </div>

      <div className="full-img">
        <Image src={images.bottom} alt="" fill />
      </div>
    </section>
  );
}




