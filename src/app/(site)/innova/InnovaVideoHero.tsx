"use client";
import React from "react";

const InnovaVideoHero: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <a
        href="https://www.toyotabharat.com/virtual-showroom/innova.html"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        {/* Video Background */}
        <div style={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/duCPnW4aTCE?autoplay=1&mute=1&loop=1&playlist=duCPnW4aTCE&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1"
            allow="autoplay; fullscreen"
            frameBorder="0"
            title="Innova HyCross Video"
            style={styles.iframe}
          />
        </div>

        {/* Optional dark overlay (Toyota-style) */}
        <div style={styles.overlay} />
      </a>
    </div>
  );
};

export default InnovaVideoHero;

/* ===================== STYLES ===================== */
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },

  link: {
    display: "block",
    width: "100%",
    height: "100%",
    textDecoration: "none",
  },

  videoContainer: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
  },

  iframe: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "177.77vh", // 16:9 ratio trick
    height: "100vh",
    minWidth: "100%",
    minHeight: "56.25vw",
    pointerEvents: "none", // disables iframe interaction
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35))",
    zIndex: 1,
  },
};
