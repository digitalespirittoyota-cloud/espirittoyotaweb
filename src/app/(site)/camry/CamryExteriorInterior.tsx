
// "use client";
// import React, { useState, useEffect } from "react";

// type TabKey = string;

// interface TabData {
//   label: string;
//   description: string;
//   banner: string;
//   thumbs: string[];
// }

// interface Props {
//   tabs: Record<TabKey, TabData>;
//   defaultTab: TabKey;
// }

// const CamryImageTabs = ({ tabs, defaultTab }: Props) => {
//   const [activeTab, setActiveTab] = useState<TabKey>(defaultTab);
//   const [width, setWidth] = useState<number>(1200);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isMobile = width <= 768;
//   const isTablet = width > 768 && width <= 1024;

//   const handleInfoClick = (title: string) => {
//     alert(`Info clicked for ${title}`);
//   };

//   return (
//     <section style={styles.wrapper}>
//       {/* Tabs */}
//       <div style={styles.tabContainer}>
//         {Object.keys(tabs).map((key) => (
//           <button
//             key={key}
//             onClick={() => setActiveTab(key)}
//             style={{
//               ...styles.tab,
//               ...(activeTab === key ? styles.activeTab : {}),
//               padding: isMobile ? "8px 20px" : "10px 40px",
//               fontSize: isMobile ? "14px" : "16px",
//             }}
//           >
//             {tabs[key].label}
//           </button>
//         ))}
//       </div>

//       {/* Description */}
//       <p
//         style={{
//           ...styles.description,
//           fontSize: isMobile ? "15px" : "18px",
//           marginBottom: isMobile ? "25px" : "40px",
//         }}
//       >
//         {tabs[activeTab].description}
//       </p>

//       {/* Images */}
//       <div style={styles.performanceSection}>
//         <img
//           src={tabs[activeTab].banner}
//           alt=""
//           style={{
//             ...styles.performanceBanner,
//             width: isMobile ? "100%" : isTablet ? "90%" : "70%",
//           }}
//         />

//         <div
//           style={{
//             ...styles.thumbGrid,
//             gridTemplateColumns: isMobile
//               ? "1fr"
//               : isTablet
//               ? "repeat(2, 1fr)"
//               : "repeat(3, 1fr)",
//             width: isMobile ? "100%" : "70%",
//           }}
//         >
//           {tabs[activeTab].thumbs.map((img, i) => (
//             <div key={i} style={styles.thumbItem}>
//               <img src={img} style={styles.thumb} alt="" />

//               <div
//                 style={{
//                   ...styles.bottomBar,
//                   padding: isMobile ? "8px 10px" : "12px 16px",
//                 }}
//               >
//                 <span
//                   style={{
//                     ...styles.bottomText,
//                     fontSize: isMobile ? "12px" : "14px",
//                   }}
//                 >
//                   CONNECTED SERVICES
//                 </span>

//                 <button
//                   style={{
//                     ...styles.infoBtn,
//                     padding: isMobile ? "2px 8px" : "4px 12px",
//                     fontSize: isMobile ? "12px" : "13px",
//                   }}
//                   onClick={() => handleInfoClick("Connected Services")}
//                 >
//                   Info
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ================= STYLES ================= */

// const styles: any = {
//   wrapper: {
//     maxWidth: "1600px",
//     margin: "0 auto",
//     padding: "40px 16px",
//     textAlign: "center",
//     backgroundColor: "#fff",
//     color: "#000",
//     borderBottom: "1px solid #70707038",
//   },

//   tabContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "12px",
//     marginBottom: "25px",
//   },

//   tab: {
//     border: "1px solid #000",
//     background: "#fff",
//     cursor: "pointer",
//   },

//   activeTab: {
//     background: "#e7e2e2a7",
//   },

//   description: {
//     maxWidth: "1050px",
//     margin: "0 auto",
//     lineHeight: "1.6",
//   },

//   performanceSection: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },

//   performanceBanner: {
//     marginBottom: "25px",
//   },

//   thumbGrid: {
//     display: "grid",
//     gap: "15px",
//   },

//   thumbItem: {
//     position: "relative",
//     width: "100%",
//     overflow: "hidden",
//   },

//   thumb: {
//     width: "100%",
//     display: "block",
//   },

//   bottomBar: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     background: "rgba(160,160,160,0.9)",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   bottomText: {
//     color: "#fff",
//     fontStyle: "italic",
//   },

//   infoBtn: {
//     background: "transparent",
//     border: "1px solid #fff",
//     color: "#fff",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
// };

// export default CamryImageTabs;

























"use client";
import React, { useState, useEffect } from "react";

type TabKey = string;

type ThumbItem = string | { src: string; caption: string };
type BannerItem = string | { src: string; caption: string };

interface TabData {
  label: string;
  description: string;
  banner: BannerItem;
  thumbs: ThumbItem[];
}

interface Props {
  tabs: Record<TabKey, TabData>;
  defaultTab: TabKey;
}

const getBannerSrc = (b: BannerItem) => (typeof b === "string" ? b : b.src);
const getBannerCaption = (b: BannerItem) => (typeof b === "string" ? null : b.caption);
const getThumbSrc = (t: ThumbItem) => (typeof t === "string" ? t : t.src);
const getThumbCaption = (t: ThumbItem) => (typeof t === "string" ? null : t.caption);

const CamryImageTabs = ({ tabs, defaultTab }: Props) => {
  const [activeTab, setActiveTab] = useState<TabKey>(
    tabs[defaultTab] ? defaultTab : Object.keys(tabs)[0]
  );
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    const validKey = tabs[defaultTab] ? defaultTab : Object.keys(tabs)[0];
    setActiveTab(validKey);
  }, [defaultTab, tabs]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  const safeKey = tabs[activeTab] ? activeTab : Object.keys(tabs)[0];
  const current = tabs[safeKey];

  if (!current) return null;

  const bannerSrc = getBannerSrc(current.banner);
  const bannerCaption = getBannerCaption(current.banner);
  const contentWidth = isMobile ? "100%" : isTablet ? "90%" : "70%";

  return (
    <section style={styles.wrapper}>

      {/* Header */}
      <p style={styles.sectionLabel}>
        <span style={styles.labelLine} />
        ACCESSORIES THAT DEFINE
        <span style={styles.labelLine} />
      </p>
      <p style={styles.eleganceTitle}>ELEGANCE<span style={{ fontStyle: "normal" }}>/</span></p>
      <p style={{ ...styles.description, fontSize: isMobile ? "13px" : "15px" }}>
        {current.description}
      </p>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              ...styles.tab,
              ...(safeKey === key ? styles.activeTab : {}),
              padding: isMobile ? "8px 24px" : "10px 40px",
              fontSize: isMobile ? "11px" : "12px",
            }}
          >
            {safeKey === key && <span style={styles.activeDot} />}
            {tabs[key].label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.contentWrapper}>

        {/* Hero banner */}
        <div style={{ position: "relative", width: contentWidth, marginBottom: "14px" }}>
          <img src={bannerSrc} alt={bannerCaption ?? ""} style={styles.bannerImg} />
          {bannerCaption && (
            <div style={styles.captionBar}>
              <span style={styles.captionText}>/ {bannerCaption}</span>
            </div>
          )}
        </div>

        {/* Thumbnail grid */}
        {current.thumbs.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "12px",
              width: contentWidth,
            }}
          >
            {current.thumbs.map((thumb, i) => {
              const thumbSrc = getThumbSrc(thumb);
              const thumbCaption = getThumbCaption(thumb);
              return (
                <div key={i} style={styles.thumbItem}>
                  <img src={thumbSrc} alt={thumbCaption ?? ""} style={styles.thumbImg} />
                  {thumbCaption && (
                    <div style={styles.captionBar}>
                      <span style={{ ...styles.captionText, fontSize: isMobile ? "11px" : "13px" }}>
                        / {thumbCaption}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "50px 16px",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000",
    borderBottom: "1px solid rgba(112,112,112,0.22)",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "11px",
    letterSpacing: "3px",
    color: "#555",
    marginBottom: "6px",
  },
  labelLine: {
    display: "inline-block",
    width: "1px",
    height: "14px",
    background: "#555",
  },
  eleganceTitle: {
    fontStyle: "italic",
    fontSize: "26px",
    fontWeight: 400,
    letterSpacing: "2px",
    marginBottom: "14px",
    color: "#000",
  },
  description: {
    maxWidth: "700px",
    margin: "0 auto 28px",
    lineHeight: "1.6",
    color: "#555",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "28px",
  },
  tab: {
    border: "1px solid #333",
    background: "#fff",
    cursor: "pointer",
    letterSpacing: "1.5px",
    position: "relative",
    marginLeft: "-1px", // collapse borders like original
  },
  activeTab: {
    background: "#e8e8e8",
  },
  activeDot: {
    position: "absolute",
    top: "-7px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#444",
    border: "2px solid #fff",
    display: "block",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bannerImg: {
    width: "100%",
    display: "block",
  },
  captionBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.42)",
    padding: "9px 14px",
    textAlign: "left",
  },
  captionText: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: "13px",
    letterSpacing: "0.05em",
  },
  thumbItem: {
    position: "relative",
    overflow: "hidden",
  },
  thumbImg: {
    width: "100%",
    display: "block",
  },
};

export default CamryImageTabs;