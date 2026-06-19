// "use client";
// import React from "react";

// interface HeroImageProps {
//   imageUrl: string;
//   alt?: string;
//   minHeightDesktop?: string;
//   minHeightTablet?: string;
//   minHeightMobile?: string;
// }

// const HeroImage: React.FC<HeroImageProps> = ({
//   imageUrl,
//   alt = "Hero Banner",
//   minHeightDesktop = "100vh",
//   minHeightTablet = "70vh",
//   minHeightMobile = "45vh",
// }) => {
//   return (
//     <>
//       <section className="hero">
//         <img src={imageUrl} alt={alt} className="heroImage" />
//       </section>

//       <style jsx>{`
//         .hero {
//           width: 100%;
//           overflow: hidden;
//         }

//         .heroImage {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           min-height: ${minHeightDesktop};
//         }

//         @media (max-width: 1024px) {
//           .heroImage {
//             min-height: ${minHeightTablet};
//           }
//         }

//         @media (max-width: 480px) {
//           .heroImage {
//             min-height: ${minHeightMobile};
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroImage;

























"use client";
import React, { useState } from "react";

interface HeroImageProps {
  imageUrl: string;
  alt?: string;
  minHeightDesktop?: string;
  minHeightTablet?: string;
  minHeightMobile?: string;
  youtubeUrl?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  alt = "Hero Banner",
  minHeightDesktop = "100vh",
  minHeightTablet = "70vh",
  minHeightMobile = "45vh",
  youtubeUrl,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  // Extract YouTube video ID from URL
  const getYoutubeId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = youtubeUrl ? getYoutubeId(youtubeUrl) : null;
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : null;

  return (
    <>
      <section className="hero">
        <div className="imageWrapper">
          <img src={imageUrl} alt={alt} className="heroImage" />

          {/* Play button overlay — only shown when youtubeUrl is provided */}
          {youtubeUrl && !showVideo && (
            <button
              className="playButton"
              onClick={() => setShowVideo(true)}
              aria-label="Play YouTube video"
            >
              <svg
                viewBox="0 0 68 48"
                width="68"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* YouTube red background */}
                <path
                  d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C0 13.05 0 24 0 24s0 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C68 34.95 68 24 68 24S68 13.05 66.52 7.74z"
                  fill="#ff0000"
                />
                {/* White play triangle */}
                <path d="M45 24L27 14v20" fill="#fff" />
              </svg>
            </button>
          )}

          {/* YouTube embed iframe — shown after click */}
          {showVideo && embedUrl && (
            <div className="videoOverlay">
              <iframe
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="videoFrame"
              />
              <button
                className="closeButton"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .hero {
          width: 100%;
          overflow: hidden;
        }

        .imageWrapper {
          position: relative;
          width: 100%;
        }

        .heroImage {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          min-height: ${minHeightDesktop};
        }

        /* Centered play button */
        .playButton {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.9;
        }

        .playButton:hover {
          transform: translate(-50%, -50%) scale(1.12);
          opacity: 1;
        }

        /* Full-size iframe overlay */
        .videoOverlay {
          position: absolute;
          inset: 0;
          background: #000;
          z-index: 10;
        }

        .videoFrame {
          width: 100%;
          height: 100%;
          border: none;
        }

        .closeButton {
          position: absolute;
          top: 12px;
          right: 16px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 11;
        }

        .closeButton:hover {
          background: rgba(0, 0, 0, 0.9);
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
          .playButton svg {
            width: 52px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroImage;