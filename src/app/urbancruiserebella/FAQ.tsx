
"use client";
import React, { useState } from "react";
// import leftLines from "@/public/faq_left_lines.svg";


type FAQItem = {
  question: string;
  answer?: string;
};

const faqData: FAQItem[] = [
  {
    question: "What type of battery pack is used in the vehicle?",
    answer:"The vehicle is equipped with lithium iron phosphate (LFP) battery packs that deliver a competitive cruising range along with durability and reliability.",
  },
  {
    question: "What warranty does Toyota offer?",
    answer:
      "The vehicle comes with a standard warranty of 3 years or 100,000 km, whichever comes first. The LFP battery pack is covered by a warranty of 8 years or 200,000 km, whichever comes first.",
  },
  {
    question:
      "How can I learn more about the Assured Buyback and Battery as a Service schemes?",
      answer:
      "For detailed information on the Assured Buyback and Battery as a Service schemes, we recommend visiting your nearest Toyota dealership",
  },
  {
    question:
      "Is this model fully electric? Will there be petrol or hybrid variants on this platform?",
      answer:
      "This model is built on an all-new electric platform developed exclusively for electric powertrains to meet full BEV characteristics. There are no petrol or hybrid variants planned on this platform",
  },
  {
    question:
      "Is Toyota’s service network equipped to support electric vehicles?",
      answer:
      "Yes. Toyota’s service network is fully equipped to handle electric vehicles, with technicians certified as Toyota BEV Experts across all authorised outlets.",
  },
  {
    question: "What charging options are available for customers?",
    answer:
      "Customers are currently offered wall-mounted charging solutions for home installation, along with charging facilities available at authorised Toyota dealerships.",
  },
  {
    question: "What safety features are available?",
    answer:
      "All variants come equipped with 7 airbags as standard. The top variant additionally features Level 2 Advanced Driver Assistance Systems (ADAS).",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <div style={styles.wrapper}>
      {/* LEFT BACKGROUND IMAGE */}
      <div style={styles.leftBg} />

      <h1 style={styles.heading}>FAQ</h1>

      <div style={styles.container}>
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              style={styles.card}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div style={styles.questionRow}>
                <p style={styles.question}>{item.question}</p>
                <span
                  style={{
                    ...styles.arrow,
                    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  ▶
                </span>
              </div>

              {isActive && item.answer && (
                <p style={styles.answer}>{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

/* ===================== INTERNAL CSS ===================== */

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: "relative",
    padding: "60px 20px",
    background: "#fff",
    color:"#000",
    minHeight: "100vh",
    overflow: "hidden",
  },

  /* LEFT RED CURVE IMAGE */
  leftBg: {
  position: "absolute",
  left: 0,
  top: "120px",
  width: "280px",
  height: "420px",
  backgroundImage: "url('/faq_left_lines.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  zIndex: 0,
},



  heading: {
    textAlign: "center",
    color: "red",
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "40px",
    position: "relative",
    zIndex: 1,
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    position: "relative",
    zIndex: 1,
  },

  card: {
    background: "#fdeeee",
    borderRadius: "6px",
    padding: "18px 20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  questionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  },

  question: {
    fontSize: "18px",
    fontWeight: 500,
    margin: 0,
    lineHeight: 1.4,
  },

  arrow: {
    fontSize: "18px",
    transition: "transform 0.3s ease",
  },

  answer: {
    marginTop: "14px",
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#333",
  },
};
