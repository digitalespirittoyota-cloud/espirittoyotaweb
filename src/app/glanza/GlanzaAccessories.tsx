
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlanzaAccessories.module.css";

const images = [
  "/models/glanza/acc-01.webp",
  "/models/glanza/acc-02.webp",
  "/models/glanza/acc-03.webp",
  "/models/glanza/acc-04.webp",
  "/models/glanza/acc-05.webp",
  "/models/glanza/acc-06.webp",
  "/models/glanza/acc-07.webp",
  "/models/glanza/acc-08.webp",
  "/models/glanza/acc-09.webp",
];

export default function GlanzaAccessories() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.layout}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <div
            ref={ref}
            className={`${styles.animate} ${show ? styles.show : ""}`}
          >
            <div className={styles.grid}>
              {images.map((img, i) => (
                <div key={i} className={styles.card}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={`${styles.animate} ${show ? styles.show : ""}`}>
            <img
              src="/models/glanza/acc-10.webp"
              className={styles.titleImage}
              alt=""
            />

            <button className={styles.btn}>
              DOWNLOAD ACCESSORIES BROCHURE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
