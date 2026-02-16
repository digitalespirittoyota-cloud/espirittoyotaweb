// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const GlanzaInstantLoan: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         threshold: 0.35, // section visible hone par hi animation
//       }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         width: "100%",
//         backgroundColor: "#ffffff",
//         padding: "80px 20px",
//         boxSizing: "border-box",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
            
//           maxWidth: "1300px",
//           margin: "auto",
//           display: "flex",
//           flexWrap: "wrap",
//         backgroundColor: "#ffffff",

//         //   alignItems: "center",
//         //   gap: "40px",

//         }}
//       >
//         {/* LEFT CONTENT */}
//         <div
//           style={{
//             flex: "1 1 500px",
//             transform: visible ? "translateY(0)" : "translateY(120px)",
//             opacity: visible ? 1 : 0,
//             transition: "all 1s ease",
            
//           }}
//         >
          

//           {/* INFO IMAGE */}
//           <img
//             src="https://static.toyotabharat.com/images/showroom/glanza/new/img-instant-loan-info.png"
//             alt="Loan Info"
//             style={{
//               marginTop: "30px",
//               maxWidth: "100%",
              
//             }}
//           />
//         </div>

//         {/* RIGHT IMAGE */}
//         <div
//           style={{
//             flex: "1 1 600px",
//             transform: visible ? "translateY(0)" : "translateY(150px)",
//             opacity: visible ? 1 : 0,
//             transition: "all 1.1s ease 0.2s",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="https://static.toyotabharat.com/images/showroom/glanza/new/img-instant-loan-new.jpg"
//             alt="Toyota Glanza"
//             style={{
//               width: "100%",
//               maxWidth: "700px",
//               height: "auto",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlanzaInstantLoan;



















"use client";

import React, { useEffect, useRef, useState } from "react";

const GlanzaInstantLoan: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        height: isMobile ? "auto" : "600px", // ✅ responsive height
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1530px",
          margin: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // ✅ stack on mobile
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            flex: 1.2,
            height: isMobile ? "auto" : "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: visible ? "translateY(0)" : "translateY(150px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          <img
            src="https://static.toyotabharat.com/images/showroom/glanza/new/img-instant-loan-info.png"
            alt="Loan Info"
            style={{
              width: "100%",
              height: isMobile ? "auto" : "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: 1.3,
            height: isMobile ? "auto" : "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: visible ? "translateY(0)" : "translateY(180px)",
            opacity: visible ? 1 : 0,
            transition: "all 1.1s ease 0.25s",
          }}
        >
          <img
            src="https://static.toyotabharat.com/images/showroom/glanza/new/img-instant-loan-new.jpg"
            alt="Toyota Glanza"
            style={{
              width: "100%",
              height: isMobile ? "auto" : "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlanzaInstantLoan;
