"use client";
import React from "react";

interface InnovaHeroImageProps {
  imageUrl: string;
  alt?: string;
  minHeightDesktop?: string;
  minHeightTablet?: string;
  minHeightMobile?: string;
}

const InnovaHeroImage: React.FC<InnovaHeroImageProps> = ({
  imageUrl,
  alt = "Innova Hero Banner",
  minHeightDesktop = "100vh",
  minHeightTablet = "70vh",
  minHeightMobile = "45vh",
}) => {
  return (
    <>
      <div className="innovaHero">
        <section className="innova">
          <img src={imageUrl} alt={alt} className="innovaHeroImage" />
        </section>
      </div>

      <style jsx>{`
        .innovaHero {
          width: 100%;
          overflow: hidden;
          background-color: #fff;
          display: flex;
          justify-content: center; /* centers .innova section */
        }

        .innova {
          width: 100%;
          max-width: 1300px;
          height: auto;
        }

        .innovaHeroImage {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          min-height: ${minHeightDesktop};
        }

        @media (max-width: 1024px) {
          .innovaHeroImage {
            min-height: ${minHeightTablet};
          }
        }

        @media (max-width: 480px) {
          .innovaHeroImage {
            min-height: ${minHeightMobile};
          }
        }
      `}</style>
    </>
  );
};

export default InnovaHeroImage;
