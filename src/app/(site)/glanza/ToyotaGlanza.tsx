
"use client";

import { useState, useRef, useEffect } from "react";

import styles from "./glanza.module.css";

interface ToyotaGlanzaProps {
  backgroundColor?: string;
  title: string;
  subtitle: string;
  sectionTitle?: string;
  description: string;
  images: string[];
  arrowStripColor?: string;
  reverse?: boolean; // true = image right, content left
}

export default function ToyotaGlanza({
  backgroundColor = "#5fc400",
  arrowStripColor = "red",
  title,
  subtitle,
  description,
  images,
  reverse = false,
  sectionTitle,
}: ToyotaGlanzaProps) {
  const [startIndex, setStartIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // run only once
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  const visibleImages = 3;
  const maxStartIndex = Math.max(images.length - visibleImages, 0);

  const prevSlide = () =>
    setStartIndex((prev) => Math.max(prev - 1, 0));

  const nextSlide = () =>
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));

  // Conditional styles for reverse section
  const mainImageStyle = reverse
    ? { marginLeft: 0, marginRight: "90px" }
    : { marginLeft: "90px", marginRight: 0 };

  const contentStyle = reverse
    ? { marginLeft: "60px" }
    : { marginLeft: 0 };

  const sliderWrapperStyle = reverse
    ? { marginTop: "40px", marginRight: "20px" }
    : { marginTop: "40px" };

  return (
   <section className={styles.whiteSection}>
  <div
    ref={sectionRef}   // 👈 ADD THIS LINE
    className={styles.wrapper}
    style={{
      backgroundColor,
      marginLeft: reverse ? 0 : "80px",
      marginRight: reverse ? "80px" : 0,
    }}
  >

        <div className={styles.container}>
          {reverse ? (
            <>
              {/* CONTENT FIRST */}
              <div
  className={`${styles.content} ${
    isVisible ? styles.slideUp : ""
  }`} style={contentStyle}>
                <p className={styles.subtitle}>{subtitle}</p>
                <h1 className={styles.title}>{title}</h1>

                <div className={styles.divider}></div>

                {sectionTitle && (
                  <h3 className={styles.sectionTitle}>
                    {sectionTitle}
                  </h3>
                )}

                <p className={styles.description}>{description}</p>

                {/* SLIDER */}
                <div
                  className={styles.sliderWrapper}
                  style={sliderWrapperStyle}
                >
                  <div
                    className={`${styles.arrowStrip} ${styles.leftStrip}`}
                    style={{ backgroundColor: arrowStripColor }}
                  >
                    <button
                      className={styles.arrow}
                      onClick={prevSlide}
                    >
                      ‹
                    </button>
                  </div>

                  <div className={styles.sliderViewport}>
                    <div
                      className={styles.sliderTrack}
                      style={{
                        transform: `translateX(-${startIndex * 240}px)`,
                      }}
                    >
                      {images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          className={styles.slideImage}
                          alt={`slide-${index}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${styles.arrowStrip} ${styles.rightStrip}`}
                    style={{ backgroundColor: arrowStripColor }}
                  >
                    <button
                      className={styles.arrow}
                      onClick={nextSlide}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* BIG IMAGE SECOND */}
              <div
  className={`${styles.mainImage} ${
    isVisible ? styles.slideUp : ""
  }`}
  style={mainImageStyle}
>
  <img src={images[startIndex]} alt="Toyota Glanza" />
</div>

            </>
          ) : (
            <>
              {/* BIG IMAGE FIRST */}
               <div
  className={`${styles.mainImage} ${
    isVisible ? styles.slideUp : ""
  }`}
  style={mainImageStyle}
>
  <img src={images[startIndex]} alt="Toyota Glanza" />
</div>

              {/* CONTENT SECOND */}
              <div
  className={`${styles.content} ${
    isVisible ? styles.slideUp : ""
  }`} style={contentStyle}>
                <p className={styles.subtitle}>{subtitle}</p>
                <h1 className={styles.title}>{title}</h1>

                <div className={styles.divider}></div>

                {sectionTitle && (
                  <h3 className={styles.sectionTitle}>
                    {sectionTitle}
                  </h3>
                )}

                <p className={styles.description}>{description}</p>

                {/* SLIDER */}
                <div
                  className={styles.sliderWrapper}
                  style={sliderWrapperStyle}
                >
                  <div
                    className={`${styles.arrowStrip} ${styles.leftStrip}`}
                    style={{ backgroundColor: arrowStripColor }}
                  >
                    <button
                      className={styles.arrow}
                      onClick={prevSlide}
                    >
                      ‹
                    </button>
                  </div>

                  <div className={styles.sliderViewport}>
                    <div
                      className={styles.sliderTrack}
                      style={{
                        transform: `translateX(-${startIndex * 240}px)`,
                      }}
                    >
                      {images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          className={styles.slideImage}
                          alt={`slide-${index}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${styles.arrowStrip} ${styles.rightStrip}`}
                    style={{ backgroundColor: arrowStripColor }}
                  >
                    <button
                      className={styles.arrow}
                      onClick={nextSlide}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

























