
"use client";
import React, { useState } from "react";

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
            }}
          >
            {tabs[key].label}
          </button>
        ))}
      </div>

      {/* Description */}
      <p style={styles.description}>{tabs[activeTab].description}</p>

      {/* Images */}
      <div style={styles.performanceSection}>
        <img
          src={tabs[activeTab].banner}
          style={styles.performanceBanner}
          alt=""
        />

        <div style={styles.thumbGrid}>
          {tabs[activeTab].thumbs.map((img, i) => (
            <img key={i} src={img} style={styles.thumb} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

/* SAME STYLES */
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
    gap: "12px",
    marginBottom: "25px",
  },

  tab: {
    padding: "10px 40px",
    border: "1px solid #000",
    background: "#fff",
    cursor: "pointer",
  },

  activeTab: {
    background: "#e7e2e2a7",
  },

  description: {
    maxWidth: "1050px",
    margin: "0 auto 40px",
    fontSize: "18px",
    lineHeight: "1.6",
  },

  performanceSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  performanceBanner: {
    width: "70%",
    marginBottom: "25px",
  },

  thumbGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "70%",
    gap: "15px",
  },

  thumb: {
    width: "100%",
  },
};

export default CamryImageTabs;
