
"use client";
import React, { useEffect, useState } from "react";

const CamryElegance: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openVirtualShowroom = () => {
    window.open(
      "https://www.toyotabharat.com/virtual-showroom/camry.html",
      "_blank"
    );
  };

  return (
    <section style={styles.wrapper}>
      {/* TEXT SECTION */}
      <div style={styles.textContainer}>
        <div style={styles.headingWrapper}>
          <img
            src="https://static.toyotabharat.com/images/showroom/new-camry/qoate-1.png"
            alt="quote-left"
            style={styles.quoteLeft}
          />

          <div>
            <p style={styles.presenting}>PRESENTING THE NEW</p>
            <h2 style={styles.elegant}>ELEGANT CAMRY HYBRID</h2>
          </div>

          <img
            src="https://static.toyotabharat.com/images/showroom/new-camry/qoate-2.png"
            alt="quote-right"
            style={styles.quoteRight}
          />
        </div>

        <p style={styles.description}>
          Experience a new age of fun, dynamic driving with the elegant Camry.
          Founded on a legacy of power and luxury over two decades ago, the
          all-new Camry now feels personal, emotional, and luxurious. The new
          Camry’s refined performance and design let you chase your daily thrills
          in style. A sedan to the core, it comes with hybrid efficiency and
          various drive modes that fit your lifestyle perfectly. Experience
          silent drives and the epitome of elegance.
        </p>
      </div>

      {/* IMAGE */}
      <div style={styles.imageWrapper}>
        <img
          src="https://static.toyotabharat.com/images/showroom/new-camry/elegance-1000x313.png"
          alt="Camry Hybrid"
          style={styles.image}
        />
      </div>

      {/* BUTTON */}
      <div
        style={{
          ...styles.buttonWrapper,
          justifyContent: isMobile ? "center" : "flex-end",
          paddingRight: isMobile ? "0" : "60px",
        }}
      >
        <button style={styles.button} onClick={openVirtualShowroom}>
          VIRTUAL SHOWROOM
        </button>
      </div>
    </section>
  );
};

/* ================= INTERNAL CSS ================= */

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    padding: "70px 20px 50px",
    background: "linear-gradient(180deg, #dbe7f1 0%, #ffffff 70%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxSizing: "border-box",
    color: "#000",
    borderBottom: "1px solid #70707038",
  paddingBottom: "40px",
  },

  textContainer: {
    maxWidth: "820px",
    marginBottom: "40px",
    
  },

  headingWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },

  presenting: {
    fontSize: "0.8rem",
    fontWeight: 100,
    textTransform: "uppercase",
    letterSpacing: "5px",
    lineHeight: "25px",
    width: "fit-content",
    margin: "0 auto",
  },

  elegant: {
    fontSize: "30px",
    fontWeight: 100,
    letterSpacing: "3px",
    margin: 0,
  },

  quoteLeft: {
    width: "15px",
    height: "27px",
    transform: "translateY(-20px)",
  },

  quoteRight: {
    width: "15px",
    height: "27px",
    transform: "translateY(50px)",
  },

  description: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#333",
    fontFamily: "ToyotaTypeLight, Arial, sans-serif",
    marginTop: "20px",
  },

  imageWrapper: {
    width: "100%",
    maxWidth: "1100px",
    margin: "20px 0 40px",
  },

  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },

  buttonWrapper: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    marginTop: "20px",
  },

  button: {
    padding: "14px 35px",
    borderRadius: "30px",
    border: "1px solid #000",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "14px",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default CamryElegance;
