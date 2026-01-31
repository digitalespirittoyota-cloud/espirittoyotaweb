"use client";
import React from "react";

interface HeroImageProps {
  imageUrl: string;
  alt?: string;
  minHeightDesktop?: string;
  minHeightTablet?: string;
  minHeightMobile?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  alt = "Hero Banner",
  minHeightDesktop = "100vh",
  minHeightTablet = "70vh",
  minHeightMobile = "45vh",
}) => {
  return (
    <>
      <section className="hero">
        <img src={imageUrl} alt={alt} className="heroImage" />
      </section>

      <style jsx>{`
        .hero {
          width: 100%;
          overflow: hidden;
        }

        .heroImage {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          min-height: ${minHeightDesktop};
        }

        @media (max-width: 1024px) {
          .heroImage {
            min-height: ${minHeightTablet};
          }
        }

        @media (max-width: 480px) {
          .heroImage {
            min-height: ${minHeightMobile};
          }
        }
      `}</style>
    </>
  );
};

export default HeroImage;
