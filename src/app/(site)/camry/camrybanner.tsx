// "use client";
// import React from "react";

// interface camryImageProps {
//   imageUrl: string;
//   alt?: string;
//   minHeightDesktop?: string;
//   minHeightTablet?: string;
//   minHeightMobile?: string;
// }

// const camryImage: React.FC<camryImageProps> = ({
//   imageUrl,
//   alt = "Hero Banner",
//   minHeightDesktop = "100vh",
//   minHeightTablet = "70vh",
//   minHeightMobile = "45vh",
// }) => {
//   return (
//     <>
//       <section className="hero">
//         <img src={imageUrl} alt={alt} className="heroImage" />
//       </section>

//       <style jsx>{`
//         .hero {
//           width: 100%;
//           overflow: hidden;
//         }

//         .heroImage {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           min-height: ${minHeightDesktop};
//         }

//         @media (max-width: 1024px) {
//           .heroImage {
//             min-height: ${minHeightTablet};
//           }
//         }

//         @media (max-width: 480px) {
//           .heroImage {
//             min-height: ${minHeightMobile};
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default camryImage;



























"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface BannerSlide {
  src: string;
  alt?: string;
}

interface CamryBannerProps {
  images: BannerSlide[];
  autoPlayInterval?: number;
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const TRANSITION_MS = 900;

export default function CamryBanner({
  images = [],
  autoPlayInterval = 4000,
}: CamryBannerProps) {
  const count = images.length;

  // 3x repeat so there are always slides on both sides (fixes blank with 2 images)
  const repeated: BannerSlide[] =
    count > 0 ? [...images, ...images, ...images] : [];

  const [cloneIdx,    setCloneIdx]    = useState(count); // start at middle set
  const [current,     setCurrent]     = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [useTrans,    setUseTrans]    = useState(false); // off on first paint
  const [isDragging,  setIsDragging]  = useState(false);
  const [dragDeltaX,  setDragDeltaX]  = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);

  // Responsive height state
  const [slideHeight, setSlideHeight] = useState("100vh");

  const dragStartX = useRef(0);
  const autoRef    = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Responsive height based on window width ──────────────────────────
  useEffect(() => {
    const updateHeight = () => {
      const w = window.innerWidth;
      if (w <= 480)       setSlideHeight("55vw");   // mobile portrait
      else if (w <= 768)  setSlideHeight("65vw");   // tablet portrait
      else if (w <= 1024) setSlideHeight("70vh");   // tablet landscape / small laptop
      else if (w <= 1440) setSlideHeight("90vh");   // laptop
      else                setSlideHeight("100vh");  // desktop / large screen
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // ── Navigation ────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (isAnimating || count === 0) return;
    setIsAnimating(true);
    setUseTrans(true);
    setCloneIdx((prev) => {
      const next = prev + 1;
      setCurrent(next % count);
      return next;
    });
  }, [isAnimating, count]);

  const goPrev = useCallback(() => {
    if (isAnimating || count === 0) return;
    setIsAnimating(true);
    setUseTrans(true);
    setCloneIdx((prev) => {
      const next = prev - 1;
      setCurrent(((next % count) + count) % count);
      return next;
    });
  }, [isAnimating, count]);

  const goTo = useCallback(
    (targetReal: number) => {
      if (isAnimating || count === 0) return;
      const newReal  = ((targetReal % count) + count) % count;
      const newClone = count + newReal;
      setIsAnimating(true);
      setUseTrans(true);
      setCloneIdx(newClone);
      setCurrent(newReal);
    },
    [isAnimating, count]
  );

  // After transition — snap back to middle set silently if drifted
  const onTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    setCloneIdx((prev) => {
      const realPos   = ((prev % count) + count) % count;
      const middlePos = count + realPos;
      if (prev !== middlePos) {
        setUseTrans(false);
        return middlePos;
      }
      return prev;
    });
  }, [count]);

  // ── Auto-play ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (count <= 1 || isPaused) return;
    autoRef.current = setInterval(() => {
      setIsAnimating((anim) => {
        if (!anim) {
          setUseTrans(true);
          setCloneIdx((prev) => {
            const next = prev + 1;
            setCurrent(next % count);
            return next;
          });
          return true;
        }
        return anim;
      });
    }, autoPlayInterval);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [isPaused, count, autoPlayInterval]);

  // ── Drag / swipe ──────────────────────────────────────────────────────
  const startDrag = (clientX: number) => {
    if (isAnimating) return;
    dragStartX.current = clientX;
    setDragDeltaX(0);
    setIsDragging(true);
    setIsPaused(true);
  };
  const moveDrag = (clientX: number) => {
    if (!isDragging) return;
    setDragDeltaX(clientX - dragStartX.current);
  };
  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);
    if      (dragDeltaX < -50) goNext();
    else if (dragDeltaX >  50) goPrev();
    setDragDeltaX(0);
  };

  if (count === 0) return null;

  // Arrow size responsive
  const getArrowSize = () => {
    if (typeof window === "undefined") return 48;
    if (window.innerWidth <= 480)  return 32;
    if (window.innerWidth <= 768)  return 38;
    return 48;
  };

  // Arrow positioning responsive
  const getArrowOffset = () => {
    if (typeof window === "undefined") return 24;
    if (window.innerWidth <= 480)  return 10;
    if (window.innerWidth <= 768)  return 16;
    return 24;
  };

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: "clamp(32px, 4vw, 48px)",
    height: "clamp(32px, 4vw, 48px)",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.42)",
    border: "1.5px solid rgba(255,255,255,0.35)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    transition: "background 0.2s ease",
    flexShrink: 0,
  };

  return (
    <section
      role="region"
      aria-label="Camry Banner Carousel"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#000",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: isDragging ? "grabbing" : "default",
        // Prevent iOS bounce scroll fighting with swipe
        touchAction: "pan-y",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); endDrag(); }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {/* ── SLIDING TRACK ──────────────────────────────────────────────── */}
      <div
        onTransitionEnd={onTransitionEnd}
        style={{
          display: "flex",
          width: `${repeated.length * 100}vw`,
          transform: `translateX(calc(${-cloneIdx * 100}vw + ${dragDeltaX}px))`,
          transition:
            useTrans && !isDragging
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
              : "none",
          willChange: "transform",
        }}
      >
        {repeated.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100vw",
              lineHeight: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt || "Camry"}
              draggable={false}
              style={{
                width: "100%",
                height: slideHeight,
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* ── LEFT ARROW ─────────────────────────────────────────────────── */}
      {count > 1 && (
        <button
          aria-label="Previous slide"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.70)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.42)";
          }}
          style={{
            ...arrowBase,
            left: "clamp(10px, 2vw, 24px)",
          }}
        >
          <ChevronLeft />
        </button>
      )}

      {/* ── RIGHT ARROW ────────────────────────────────────────────────── */}
      {count > 1 && (
        <button
          aria-label="Next slide"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.70)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.42)";
          }}
          style={{
            ...arrowBase,
            right: "clamp(10px, 2vw, 24px)",
          }}
        >
          <ChevronRight />
        </button>
      )}

      {/* ── DOT INDICATORS ─────────────────────────────────────────────── */}
      {count > 1 && (
        <div
          role="tablist"
          aria-label="Slide indicators"
          style={{
            position: "absolute",
            bottom: "clamp(12px, 2.5vw, 24px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px, 1vw, 10px)",
            zIndex: 10,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { if (!isAnimating) goTo(i); }}
              style={{
                height: "clamp(6px, 1vw, 8px)",
                width: i === current
                  ? "clamp(20px, 3vw, 28px)"
                  : "clamp(6px, 1vw, 8px)",
                borderRadius: 4,
                background:
                  i === current
                    ? "#ffffff"
                    : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s ease",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}