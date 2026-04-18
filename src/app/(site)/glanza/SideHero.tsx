
"use client";
import React from "react";

interface SideHeroProps {
  imageUrl: string;
  alt?: string;
}

const SideHero: React.FC<SideHeroProps> = ({
  imageUrl,
  alt = "Side Hero Image",
}) => {
  return (
    <>
      <section className="sideHero">
        <img src={imageUrl} alt={alt} className="sideHeroImage" />
      </section>

      <style jsx>{`
        .sideHero {
          width: 100%;
          aspect-ratio: 22 / 6; /* Desktop ratio */
          position: relative;
          overflow: hidden;
        }

        .sideHeroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ================== RESPONSIVE ================== */

        @media (max-width: 1024px) {
          .sideHero {
            aspect-ratio: 22 / 7;
          }
        }

        @media (max-width: 768px) {
          .sideHero {
            aspect-ratio: 9 / 3;
          }
        }

        @media (max-width: 480px) {
          .sideHero {
            aspect-ratio: 12 / 4;
          }
        }
      `}</style>
    </>
  );
};

export default SideHero;
