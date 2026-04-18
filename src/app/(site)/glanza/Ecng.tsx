"use client";

import { useState } from "react";
import styles from "./ecng.module.css";

interface Slide {
  image: string;
  engineImage?: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/models/performancecarouselimg.png",
    engineImage: "/models/performance-engine-2.png",
    title: "EXPERIENCE THE PROMISE OF",
    subtitle: "Awesome",
    description:
      "A K series petrol engine with a mileage of 22.94 km/l & E-CNG technology with a mileage of 30.61 km/kg.",
  },
  {
    image: "/models/performancecarouselimg2.jpg",
    title: "EXPERIENCE THE PROMISE OF",
    subtitle: "Awesome",
    description:
      "Hatchin' cooler, more comfortable drives is cakewalk with Intelligent Gear Shift. Choose manual or auto transmission while ensuring awesome mileage.",
  },
];

export default function Ecng() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.wrapper}>
  <div className={styles.container}>

    {/* LEFT IMAGE */}
    <div className={styles.imageSection}>
      <img src={slides[index].image} alt="Toyota Glanza ECNG" />

      <div className={styles.arrows}>
        <button onClick={prevSlide}>‹</button>
        <button onClick={nextSlide}>›</button>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.contentSection}>
      <div className={styles.box}>
        <p className={styles.title}>{slides[index].title}</p>
        <h2 className={styles.awesome}>{slides[index].subtitle}</h2>
        <p className={styles.performance}>PERFORMANCE.</p>
        <p className={styles.desc}>{slides[index].description}</p>

        <p className={styles.disclaimer}>
          *Disclaimer: Fuel efficiency as certified by test agency under Rule 115 of CMVR, 1989.
        </p>
      </div>
    </div>

    {/* 🔥 OVERLAPPING ENGINE */}
    {slides[index].engineImage && (
  <div className={styles.engineWrapper}>
    <img
      src={slides[index].engineImage}
      alt="Engine"
      className={styles.engineImage}
    />
  </div>
)}


  </div>
</section>

  );
}
