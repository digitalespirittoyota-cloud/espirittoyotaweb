// import "./PowerfulPerformance.css";

// export default function PowerfulPerformance() {
//     return (
//         <section className="pp-section">
//             <div className="pp-row">
//                 {/* SECTION 1 */}
//                 <div className="pp-left">
//                     <div className="pp-left-text">
//                         <div>POWERFUL</div>
//                         <div>PERFORMANCE</div>
//                     </div>

//                     <div className="pp-l-shape">
//                         <span className="pp-l-top"></span>
//                         <span className="pp-l-right"></span>
//                     </div>
//                 </div>

//                 {/* SECTION 2 (CENTER) */}
//                 <div className="pp-center">
//                     <div className="pp-make">
//                         MAKE EVERY <br /> ADVENTURE
//                     </div>
//                     <div className="pp-awesomeV">Awesome</div>
//                 </div>

//                 {/* SECTION 3 */}
//                 <div className="pp-right">
//                     <p>
//                         Be it city roads or mountain trails, the incredibly
//                         powerful and capable Toyota Hilux is here to take it all in its stride - A 4X4 like no other.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }






"use client";
import "./PowerfulPerformance.css";

export default function PowerfulPerformance({
  leftTitleLine1,
  leftTitleLine2,
  centerTopText,
  centerHighlightText,
  description,
}) {
  return (
    <section className="pp-section">
      <div className="pp-row">
        {/* SECTION 1 */}
        <div className="pp-left">
          <div className="pp-left-text">
            <div>{leftTitleLine1}</div>
            <div>{leftTitleLine2}</div>
          </div>

          <div className="pp-l-shape">
            <span className="pp-l-top"></span>
            <span className="pp-l-right"></span>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="pp-center">
          <div className="pp-make">
            {centerTopText}
          </div>
          <div className="pp-awesomeV">{centerHighlightText}</div>
        </div>

        {/* SECTION 3 */}
        <div className="pp-right">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
