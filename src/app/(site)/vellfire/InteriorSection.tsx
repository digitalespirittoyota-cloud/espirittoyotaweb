// "use client";
// import Image from "next/image";
// import "./InteriorSection.css";

// export default function InteriorSection() {
//   return (
//     <section className="interior-section">
//       {/* Top text */}
//       <div className="interior-top">
//         <span className="line" />
//         <p>EXTERIORINTERIOR</p>
//       </div>

//       {/* Black center panel */}
//       <div className="interior-panel">
//         <div className="interior-image">
//           <Image
//             src="/interior/interior-seat.png"
//             alt="Interior Seats"
//             width={900}
//             height={420}
//             priority
//           />
//         </div>
//       </div>

//       {/* Download button */}
//       <div className="brochure-wrap">
//         <button>DOWNLOAD BROCHURE</button>
//       </div>
//     </section>
//   );
// }





"use client";
import Image from "next/image";
import "./InteriorSection.css";

export default function InteriorSection() {
  return (
    <section className="interior-section">
      {/* Top text */}
      <div className="interior-top">
        <span className="line" />
        <p>EXTERIORINTERIOR</p>
      </div>

      {/* Black panel */}
      <div className="interior-panel">
        <Image
          src="/vellfire/commanding-colours-interior-1180x560 (1).jpg"   // 👈 ek hi image (3 seats)
          alt="Interior Seats"
          width={900}
          height={360}
          priority
        />
      </div>

      {/* Button outside right bottom */}
      <div className="brochure-fixed">
        <a
          href="https://www.toyotabharat.com/brochure/download-brochure/?model-id=135"
          download
        >
          <button>DOWNLOAD BROCHURE</button>
        </a>
      </div>

    </section>
  );
}
