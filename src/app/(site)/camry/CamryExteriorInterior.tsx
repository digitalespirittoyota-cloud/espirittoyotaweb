
"use client";
import React, { useState, useEffect } from "react";

type TabKey = string;

interface TabData {
  label: string;
  description: string;
  banner: string;
  thumbs: string[];
}

interface Props {
  tabs: Record<TabKey, TabData>;
  defaultTab: TabKey;
}

const CamryImageTabs = ({ tabs, defaultTab }: Props) => {
  const [activeTab, setActiveTab] = useState<TabKey>(defaultTab);
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  const handleInfoClick = (title: string) => {
    alert(`Info clicked for ${title}`);
  };

  return (
    <section style={styles.wrapper}>
      {/* Tabs */}
      <div style={styles.tabContainer}>
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              ...styles.tab,
              ...(activeTab === key ? styles.activeTab : {}),
              padding: isMobile ? "8px 20px" : "10px 40px",
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            {tabs[key].label}
          </button>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          ...styles.description,
          fontSize: isMobile ? "15px" : "18px",
          marginBottom: isMobile ? "25px" : "40px",
        }}
      >
        {tabs[activeTab].description}
      </p>

      {/* Images */}
      <div style={styles.performanceSection}>
        <img
          src={tabs[activeTab].banner}
          alt=""
          style={{
            ...styles.performanceBanner,
            width: isMobile ? "100%" : isTablet ? "90%" : "70%",
          }}
        />

        <div
          style={{
            ...styles.thumbGrid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
            width: isMobile ? "100%" : "70%",
          }}
        >
          {tabs[activeTab].thumbs.map((img, i) => (
            <div key={i} style={styles.thumbItem}>
              <img src={img} style={styles.thumb} alt="" />

              <div
                style={{
                  ...styles.bottomBar,
                  padding: isMobile ? "8px 10px" : "12px 16px",
                }}
              >
                <span
                  style={{
                    ...styles.bottomText,
                    fontSize: isMobile ? "12px" : "14px",
                  }}
                >
                  CONNECTED SERVICES
                </span>

                <button
                  style={{
                    ...styles.infoBtn,
                    padding: isMobile ? "2px 8px" : "4px 12px",
                    fontSize: isMobile ? "12px" : "13px",
                  }}
                  onClick={() => handleInfoClick("Connected Services")}
                >
                  Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= STYLES ================= */

const styles: any = {
  wrapper: {
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "40px 16px",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000",
    borderBottom: "1px solid #70707038",
  },

  tabContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "25px",
  },

  tab: {
    border: "1px solid #000",
    background: "#fff",
    cursor: "pointer",
  },

  activeTab: {
    background: "#e7e2e2a7",
  },

  description: {
    maxWidth: "1050px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  performanceSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  performanceBanner: {
    marginBottom: "25px",
  },

  thumbGrid: {
    display: "grid",
    gap: "15px",
  },

  thumbItem: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },

  thumb: {
    width: "100%",
    display: "block",
  },

  bottomBar: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "rgba(160,160,160,0.9)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomText: {
    color: "#fff",
    fontStyle: "italic",
  },

  infoBtn: {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default CamryImageTabs;
