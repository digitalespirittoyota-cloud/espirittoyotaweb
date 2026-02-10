// "use client";
// import React, { useState, useRef } from "react";

// type Item = { img: string; text: string };

// const interior: Item[] = [
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior8-650x410.jpg",
//     text: "BASIC SEAT COVER",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior9-650x410.jpg",
//     text: "PREMIUM SEAT COVER",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior11-650x410.jpg",
//     text: "LUGGAGE MAT TRAY",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior12-650x410.jpg",
//     text: "WIRELESS CHARGER",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior1-650x410.jpg",
//     text: "ALL WEATHER 3D MAT",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior2-650x410.jpg",
//     text: "BACK DOOR SCUFF PLATE",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior3-650x410.jpg",
//     text: "DOOR SILL GUARD",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior4-650x410.jpg",
//     text: "CARPET FLOOR MAT ",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior5-650x410.jpg",
//     text: "LUGGAGE SHELF",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior6-650x410.jpg",
//     text: "REAR SUNSHADE",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior7-650x410.jpg",
//     text: "CAR VIEW CAMERA",
//   },
  
// ];

// const exterior: Item[] = [
//   {
//     img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior7-650x410.jpg",
//     text: "BODY SIDE MOULDING",
//   },
//   {
//     img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior8-650x410.jpg",
//     text: "DOOR VISOR PREMIUM",
//   },
//   {
//     img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior9-650x410.jpg",
//     text: "MUD FLAP",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior1-650x410.jpg",
//     text: "REAR MID GARNISH",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior2-650x410.jpg",
//     text: "SIDE QUARTER SPOILER",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior3-650x410.jpg",
//     text: "SIDESTEP",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior4-650x410.jpg",
//     text: "ALLOW WHEEL COVER",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior5-650x410.jpg",
//     text: "BACK DOOR GARNISH",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior6-650x410.jpg",
//     text: "BODY COVER",
//   },
  
// ];

// export default function AwesomeAccessories() {
//   return (
//     <section className="wrap">
//       <Header />

//       <SliderRow title="INTERIOR" data={interior} />
//       <SliderRow title="EXTERIOR" data={exterior} reverse />

//       <Footer />

//       {/* CSS */}
//       <style jsx>{`
//         .wrap {
//           max-width: 1550px;
//           margin: auto;
//           padding: 40px 24px 90px;
//           background:#fff;
//           color:#000;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------- HEADER ---------------- */

// function Header() {
//   return (
//     <header className="head">
//       <div>
//         <img
//           src="https://static.toyotabharat.com/images/showroom/a32/awesome-txt-img.svg"
//           className="title"
//         />
//         <p className="tag">THAT ARE BUILT TO LAST</p>
//       </div>
//       <p className="desc">
//         Elevate your driving experience and make the new Urban Cruiser Hyryder
//         truly your own with our exclusive range of Genuine Accessories.
//       </p>

//       <style jsx>{`
//         .head {
//           display: flex;
//           justify-content: space-between;
//           gap: 60px;
//         }
//         .title {
//           width: 320px;
//         }
//         .tag {
//           font-style: italic;
//           margin-top: 6px;
//         }
//         .desc {
//           max-width: 620px;
//           font-size: 13.5px;
//           line-height: 1.7;
//         }
//         @media (max-width: 900px) {
//           .head {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </header>
//   );
// }

// /* ---------------- SLIDER ROW ---------------- */

// function SliderRow({
//   title,
//   data,
//   reverse,
// }: {
//   title: string;
//   data: Item[];
//   reverse?: boolean;
// }) {
//   const [index, setIndex] = useState(0);
//   const startX = useRef(0);

//   const next = () => setIndex((i) => (i + 1) % data.length);
//   const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

//   /* MOBILE SWIPE */
//   const onTouchStart = (e: React.TouchEvent) =>
//     (startX.current = e.touches[0].clientX);

//   const onTouchEnd = (e: React.TouchEvent) => {
//     const diff = startX.current - e.changedTouches[0].clientX;
//     if (diff > 50) next();
//     if (diff < -50) prev();
//   };

//   return (
//     <section className={`row ${reverse ? "reverse" : ""}`}>
//       {!reverse && <Label title={title} prev={prev} next={next} />}

//       <div
//         className="viewport"
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//       >
//         <div
//           className="track"
//           style={{ transform: `translateX(${-index * 540}px)` }}

//         >
//           {data.map((item, i) => (
//   <Card
//     key={i}
//     {...item}
//     active={i === index}
//     faded={i === index + 1}
//   />
// ))}

//         </div>
//       </div>

//       {reverse && <Label title={title} prev={prev} next={next} />}

//       <style jsx>{`
//         .row {
//           display: grid;
//           grid-template-columns: 140px 1fr;
//           align-items: center;
//           margin-top: 90px;
//         }
//         .row.reverse {
//           grid-template-columns: 1fr 140px;
//         }
//         .viewport {
//           overflow: hidden;
//   height: 320px;
//         }
//         .track {
//   display: flex;
//   gap: 60px;
//   align-items: center;
//   transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
// }


//         @media (max-width: 900px) {
//           .row,
//           .row.reverse {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------- LABEL ---------------- */

// function Label({
//   title,
//   prev,
//   next,
// }: {
//   title: string;
//   prev: () => void;
//   next: () => void;
// }) {
//   return (
//     <aside className="label">
//       <span>{title}</span>
//       <div className="arrows">
//         <button onClick={prev}>
//           <img src="https://static3.toyotabharat.com/images/showroom/a32/left-arrow-37x40.svg" alt="" />
//         </button>
//         <button onClick={next}>
//           <img src="https://static3.toyotabharat.com/images/showroom/a32/right-arrow-37x40.svg" alt="" />
//         </button>
//       </div>

//       <style jsx>{`
//         .label {
//           text-align: center;
//           font-style: italic;
//         }
//         .arrows {
//           margin-top: 18px;
//         }
//         button {
//           background: none;
//           border: none;
//           font-size: 22px;
//           cursor: pointer;
//           margin: 0 6px;
//         }
//       `}</style>
//     </aside>
//   );
// }

// /* ---------------- CARD ---------------- */

// function Card({
//   img,
//   text,
//   active,
//   faded,
// }: {
//   img: string;
//   text: string;
//   active?: boolean;
//   faded?: boolean;
// }) {
//   return (
//     <div className={`card ${active ? "active" : ""} ${faded ? "faded" : ""}`}>
//       <img src={img} />
//       <div className="glow" />
//       <div className="text">{text}</div>

//       <style jsx>{`
//         .card {
//     width: 460px;
//     position: relative;
//     transform: skewX(-6deg);
//     overflow: hidden;
//     transition: all 0.6s ease;
//     flex-shrink: 0;
//     clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
//   }

//   img {
//     img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// }

//     display: block;
//     transform: skewX(6deg) scale(1.05);
//   }

//   .active {
//   opacity: 1;
//   transform: translateY(12px);
// }

// .faded {
//   opacity: 0.4;
//   filter: grayscale(100%);
//   transform: translateY(-8px);
// }

//         .glow {
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   height: 90px;
//   background: linear-gradient(
//     to right,
//     #d60000,
//     rgba(214, 0, 0, 0.7),
//     transparent 70%
//   );
// }

//         .text {
//   position: absolute;
//   bottom: 16px;
//   left: 18px;
//   font-size: 13px;
//   font-weight: 600;
//   color: #fff;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
// }

//       `}</style>
//     </div>
//   );
// }

// /* ---------------- FOOTER ---------------- */

// function Footer() {
//   return (
//     <footer className="foot">
//         <button>
//         Download  Brochure
//         <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
//       </button>
//       <button>
//         Download Accessories Brochure
//         <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
//       </button>
      

//       <style jsx>{`
//         .foot {
//           width:100%;
//         //   background: yellow;
//         gap:30px;
//           text-align: center;
//           margin-top: 90px;
//           display:flex;
//           align-items: center;
//           justify-content:center;
//         }
//         button {
//           padding: 10px 15px;
//           border: 1px solid #ccc;
//           background: #f7eaeadf;
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           cursor: pointer;
//           border-radius:10px;
//         }
//       `}</style>
//     </footer>
//   );
// }













































"use client";
import React, { useState, useRef } from "react";

type Item = { img: string; text: string };

/* ================= DATA ================= */

const interior: Item[] = [
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior8-650x410.jpg",
    text: "BASIC SEAT COVER",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior9-650x410.jpg",
    text: "PREMIUM SEAT COVER",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior11-650x410.jpg",
    text: "LUGGAGE MAT TRAY",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior12-650x410.jpg",
    text: "WIRELESS CHARGER",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior1-650x410.jpg",
    text: "ALL WEATHER 3D MAT",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior2-650x410.jpg",
    text: "BACK DOOR SCUFF PLATE",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior3-650x410.jpg",
    text: "DOOR SILL GUARD",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior4-650x410.jpg",
    text: "CARPET FLOOR MAT",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior5-650x410.jpg",
    text: "LUGGAGE SHELF",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior6-650x410.jpg",
    text: "REAR SUNSHADE",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior7-650x410.jpg",
    text: "CAR VIEW CAMERA",
  },
];

const exterior: Item[] = [
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior7-650x410.jpg",
    text: "BODY SIDE MOULDING",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior8-650x410.jpg",
    text: "DOOR VISOR PREMIUM",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior9-650x410.jpg",
    text: "MUD FLAP",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior1-650x410.jpg",
    text: "REAR MID GARNISH",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior2-650x410.jpg",
    text: "SIDE QUARTER SPOILER",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior3-650x410.jpg",
    text: "SIDESTEP",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior4-650x410.jpg",
    text: "ALLOW WHEEL COVER",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior5-650x410.jpg",
    text: "BACK DOOR GARNISH",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior6-650x410.jpg",
    text: "BODY COVER",
  },
];

/* ================= MAIN COMPONENT ================= */

export default function AwesomeAccessories() {
  return (
    <main className="wrap">
      {/* CONTENT PART */}
      <div className="content-section">
        <Header />
      </div>

      {/* INTERIOR PART */}
      <div className="interior-section">
        <SliderRow title="INTERIOR" data={interior} />
      </div>

      {/* EXTERIOR PART */}
      <div className="exterior-section">
        <SliderRow title="EXTERIOR" data={exterior} reverse />
      </div>

      {/* BUTTON PART */}
      <div className="button-section">
        <Footer />
      </div>

      <style jsx>{`
        .wrap {
          max-width: 1550px;
          margin: auto;
          padding: 40px 24px 90px;
          background: #fff;
          color: #000;
        }
      `}</style>
    </main>
  );
}

/* ================= HEADER ================= */

function Header() {
  return (
    <header className="head">
      <div>
        <img
          src="https://static.toyotabharat.com/images/showroom/a32/awesome-txt-img.svg"
          className="title"
        />
        <p className="tag">THAT ARE BUILT TO LAST</p>
      </div>

      <p className="desc">
        Elevate your driving experience and make the new Urban Cruiser Hyryder
        truly your own with our exclusive range of Genuine Accessories.
      </p>

      <style jsx>{`
        .head {
          display: flex;
          justify-content: space-between;
          gap: 60px;
        }
        .title {
          width: 320px;
        }
        .tag {
          font-style: italic;
          margin-top: 6px;
        }
        .desc {
          max-width: 620px;
          font-size: 13.5px;
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          .head {
            flex-direction: column;
          }
        }
      `}</style>
    </header>
  );
}

/* ================= SLIDER ROW ================= */

function SliderRow({
  title,
  data,
  reverse,
}: {
  title: string;
  data: Item[];
  reverse?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % data.length);
  const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

  const onTouchStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className={`row ${reverse ? "reverse" : ""}`}>
      {!reverse && <Label title={title} prev={prev} next={next} />}

      <div
        className="viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="track"
          style={{ transform: `translateX(${-index * 540}px)` }}
        >
          {data.map((item, i) => (
            <Card
              key={i}
              {...item}
              active={i === index}
              faded={i === index + 1}
            />
          ))}
        </div>
      </div>

      {reverse && <Label title={title} prev={prev} next={next} />}

      <style jsx>{`
        .row {
          display: grid;
          grid-template-columns: 140px 1fr;
          align-items: center;
          margin-top: 90px;
        }
        .row.reverse {
          grid-template-columns: 1fr 140px;
        }
        .viewport {
          overflow: hidden;
          height: 320px;
        }
        .track {
          display: flex;
          gap: 60px;
          align-items: center;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 900px) {
          .row,
          .row.reverse {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

/* ================= LABEL ================= */

function Label({
  title,
  prev,
  next,
}: {
  title: string;
  prev: () => void;
  next: () => void;
}) {
  return (
    <aside className="label">
      <span>{title}</span>
      <div className="arrows">
        <button onClick={prev}>
          <img src="https://static3.toyotabharat.com/images/showroom/a32/left-arrow-37x40.svg" />
        </button>
        <button onClick={next}>
          <img src="https://static3.toyotabharat.com/images/showroom/a32/right-arrow-37x40.svg" />
        </button>
      </div>

      <style jsx>{`
        .label {
          text-align: center;
          font-style: italic;
        }
        .arrows {
          margin-top: 18px;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          margin: 0 6px;
        }
      `}</style>
    </aside>
  );
}

/* ================= CARD ================= */

function Card({
  img,
  text,
  active,
  faded,
}: {
  img: string;
  text: string;
  active?: boolean;
  faded?: boolean;
}) {
  return (
    <div className={`card ${active ? "active" : ""} ${faded ? "faded" : ""}`}>
      <img src={img} />
      <div className="glow" />
      <div className="text">{text}</div>

      <style jsx>{`
        .card {
          width: 460px;
          position: relative;
          transform: skewX(-6deg);
          overflow: hidden;
          transition: all 0.6s ease;
          flex-shrink: 0;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: skewX(6deg) scale(1.05);
        }
        .active {
          transform: translateY(12px);
        }
        .faded {
          opacity: 0.4;
          filter: grayscale(100%);
          transform: translateY(-8px);
        }
        .glow {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 90px;
          background: linear-gradient(
            to right,
            #d60000,
            rgba(214, 0, 0, 0.7),
            transparent 70%
          );
        }
        .text {
          position: absolute;
          bottom: 16px;
          left: 18px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="foot">
      <button>
        Download Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>

      <button>
        Download Accessories Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>

      <style jsx>{`
        .foot {
          margin-top: 90px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }
        button {
          padding: 10px 15px;
          border: 1px solid #ccc;
          background: #f7eaeadf;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          border-radius: 10px;
        }
      `}</style>
    </footer>
  );
}
