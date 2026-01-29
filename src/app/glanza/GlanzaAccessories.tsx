
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlanzaAccessories.module.css";

const images = [
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/01.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/02.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/03.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/04.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/05.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/06.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/07.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/08.jpg",
  "https://static.toyotabharat.com/images/showroom/glanza/new/acessories/09.jpg",
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
              src="https://static.toyotabharat.com/images/showroom/glanza/new/img-awesome-acessories.png"
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
