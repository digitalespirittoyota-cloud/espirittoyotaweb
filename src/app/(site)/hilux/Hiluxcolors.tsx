"use client";
import { useState, useEffect } from "react";

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: width < 480,
    isTablet: width >= 480 && width < 768,
    isDesktop: width >= 768,
    width,
  };
}

const colors = [
  {
    id: "super-white",
    name: "Super White",
    note: "**",
    swatch: "#F0F0F0",
    border: "#D0D0D0",
    image: "/hilux/Super-White.webp",
  },
  {
    id: "emotional-red",
    name: "Emotional Red",
    note: "*",
    swatch: "#C0141C",
    border: "#C0141C",
    image: "/hilux/Emotional-Red.webp",
  },
  {
    id: "grey-metallic",
    name: "Grey Metallic",
    note: "*",
    swatch: "#4A4A4A",
    border: "#4A4A4A",
    image: "/hilux/Grey-Metallic.webp",
  },
  {
    id: "white-pearl",
    name: "White Pearl Crystal Shine",
    note: "*",
    swatch: "#D8D8D8",
    border: "#C0C0C0",
    image: "/hilux/White-Pearl-Crystal-Shine.webp",
  },
  {
    id: "attitude-black",
    name: "Attitude Black",
    note: "#",
    swatch: "#1A1A1A",
    border: "#1A1A1A",
    image: "/hilux/black-edition-color.webp",
  },
];

export default function HiluxColors() {
  const [selected, setSelected] = useState(colors[0]);
  const [imgLoaded, setImgLoaded] = useState(true);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const handleColorChange = (color: (typeof colors)[0]) => {
    setImgLoaded(false);
    setSelected(color);
  };

  // Responsive values
  const padding = isMobile ? "24px 16px" : isTablet ? "32px 32px" : "40px 60px";
  const headingSize = isMobile ? "20px" : isTablet ? "24px" : "30px";
  const imgMaxHeight = isMobile ? "220px" : isTablet ? "340px" : "500px";
  const imgMinHeight = isMobile ? "200px" : isTablet ? "280px" : "360px";
  const swatchGap = isMobile ? "16px" : isTablet ? "24px" : "40px";
  const swatchSize = isMobile ? "28px" : "36px";
  const labelFontSize = isMobile ? "10px" : "11px";
  const labelMaxWidth = isMobile ? "60px" : "80px";
  const footnoteSize = isMobile ? "10px" : "11px";

  return (
    <div
      style={{
        fontFamily: "'Toyota Display', 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding,
        maxWidth: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          fontSize: headingSize,
          fontWeight: 530,
          letterSpacing: "0.18rem",
          textTransform: "uppercase",
          color: "#111111",
          marginBottom: isMobile ? "20px" : "32px",
          marginTop: 0,
        }}
      >
        Colors
      </h2>

      {/* Car image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: isMobile ? "20px" : "36px",
          minHeight: imgMinHeight,
          position: "relative",
        }}
      >
        <img
          key={selected.id}
          src={selected.image}
          alt={`Toyota Hilux in ${selected.name}`}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: "100%",
            maxHeight: imgMaxHeight,
            objectFit: "contain",
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      {/* Color swatches */}
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: swatchGap,
          marginBottom: isMobile ? "20px" : "32px",
          flexWrap: isMobile ? "nowrap" : "wrap",
          rowGap: isMobile ? "0px" : "20px",
          overflowX: isMobile ? "auto" : "visible",
          paddingBottom: isMobile ? "8px" : "0",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        } as React.CSSProperties}
      >
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => handleColorChange(color)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "4px",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
            aria-label={`Select ${color.name}`}
          >
            {/* Swatch circle */}
            <div
              style={{
                width: swatchSize,
                height: swatchSize,
                borderRadius: "50%",
                backgroundColor: color.swatch,
                border:
                  selected.id === color.id
                    ? `2px solid #111`
                    : `1.5px solid ${color.border}`,
                boxShadow:
                  selected.id === color.id
                    ? "0 0 0 3px #ffffff, 0 0 0 5px #111111"
                    : "inset 0 1px 3px rgba(0,0,0,0.15)",
                transition: "box-shadow 0.2s ease, border 0.2s ease",
                flexShrink: 0,
              }}
            />

            {/* Color label */}
            <span
              style={{
                fontSize: labelFontSize,
                color: "#333",
                textAlign: "center",
                lineHeight: 1.4,
                maxWidth: labelMaxWidth,
                fontWeight: selected.id === color.id ? 600 : 400,
              }}
            >
              {color.note}
              {color.name}
            </span>
          </button>
        ))}
      </div>

      {/* Footnotes */}
      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          paddingTop: "20px",
          marginTop: "8px",
        }}
      >
        {[
          "* – Only available in High AT & MT grade.",
          "** – Only available in STD grade",
          "#Black color is available in High MT grade and 'Hilux Black Edition' is available only in High AT grade.",
        ].map((note) => (
          <p
            key={note}
            style={{
              fontSize: footnoteSize,
              color: "#555",
              margin: "4px 0",
              lineHeight: 1.6,
            }}
          >
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}