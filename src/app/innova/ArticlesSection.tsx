
// "use client";
// import React, { useState } from "react";

// const articles = [
//   {
//     title: "Toyota Innova HyCross first drive review:",
//     img: "https://static.toyotabharat.com/images/showroom/innova-hycross/article-hycross-autox.jpg",
//   },
//   {
//     title: "Toyota Innova Hycross review, first drive – still an Innova in the truest sense?",
//     img: "https://static.toyotabharat.com/images/showroom/innova-hycross/article-hycross-evo.jpg",
//   },
//   {
//     title: "Another HyCross article example",
//     img: "https://static.toyotabharat.com/images/showroom/innova-hycross/article-hycross-overdrive.jpg",
//   },

// ];

// const ArticlesSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // We move by 1 index at a time, but stop before the end so 2 cards are always visible
//   const maxIndex = articles.length - 2;

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   return (
//     <div className="articles-container">
//       <h2 className="articles-heading">Articles</h2>

//       <div className="carousel-wrapper">
//         <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>

//         {/* This "viewport" hides the cards that are out of bounds */}
//         <div className="articles-viewport">
//           <div 
//             className="articles-slider" 
//             style={{ transform: `translateX(-${currentIndex * 50}%)` }}
//           >
//             {articles.map((article, index) => (
//               <div key={index} className="articles-card">
//                 <img src={article.img} alt={article.title} className="articles-image" />
//                 <p className="articles-title">{article.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
//       </div>

//       <style jsx>{`
//         .articles-container {
//           padding: 20px;
//           max-width: 1510px;
//           margin: 0 auto;
//           background: #fff;
//           color: #000;
//         }

//         .articles-heading {
//           text-align: center;
//           font-size: 2rem;
//           font-style: italic;
//           margin-bottom: 20px;
//         }

//         .carousel-wrapper {
//           position: relative;
//           display: flex;
//           align-items: center;
//           overflow: visible; 
//         }

//         /* NEW: Acts as the window that clips the long row */
//         .articles-viewport {
//           overflow: hidden;
//           width: 100%;
//         }

//         /* NEW: The long row containing all cards */
//         .articles-slider {
//           display: flex;
//           transition: transform 0.5s ease-in-out;
//           width: 100%;
//         }

//         .articles-card {
//           /* Each card takes up 50% of the viewport (2 cards) */
//           flex: 0 0 50%; 
//           padding: 0 10px; /* Gap replacement for grid gap */
//           box-sizing: border-box;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .articles-image {
//           width: 100%;
//           height: 400px;
//           object-fit: cover;
//         }

//         .articles-title {
//           padding: 10px;
//           text-align: center;
//           font-size: 1rem;
//           color: #555;
//         }

//         .carousel-btn {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(0, 0, 0, 0.6);
//           color: #fff;
//           border: none;
//           padding: 10px;
//           cursor: pointer;
//           z-index: 10;
//           font-size: 2rem;
//           border-radius: 50%;
//         }

//         .carousel-btn.left { left: -25px; }
//         .carousel-btn.right { right: -25px; }

//         @media (max-width: 768px) {
//           .articles-card {
//             flex: 0 0 100%; /* Show 1 card on mobile */
//           }
//           .articles-slider {
//              transform: translateX(-${currentIndex * 100}% ) !important;
//           }
//           .articles-image { height: 200px; }
//           .carousel-btn.left { left: 5px; }
//           .carousel-btn.right { right: 5px; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ArticlesSection;



























"use client";
import React, { useState } from "react";

interface Article {
  title: string;
  img: string;
}

interface ArticlesSectionProps {
  data: Article[]; // Accept any array of articles
  title?: string;  // Optional section title
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ data, title = "Articles" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Stop before the end so 2 cards are always visible
  const maxIndex = data.length - 2;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="articles-container">
      <h2 className="articles-heading">{title}</h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>

        <div className="articles-viewport">
          <div 
            className="articles-slider" 
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {data.map((article, index) => (
              <div key={index} className="articles-card">
                <img src={article.img} alt={article.title} className="articles-image" />
                <p className="articles-title">{article.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
      </div>

      <style jsx>{`
        .articles-container {
          padding: 20px;
          max-width: 1510px;
          margin: 0 auto;
          background: #fff;
          color: #000;
        }
        .articles-heading {
          text-align: center;
          font-size: 2rem;
          font-style: italic;
          margin-bottom: 20px;
        }
        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          overflow: visible; 
        }
        .articles-viewport {
          overflow: hidden;
          width: 100%;
        }
        .articles-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }
        .articles-card {
          flex: 0 0 50%; 
          padding: 0 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .articles-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        .articles-title {
          padding: 10px;
          text-align: center;
          font-size: 1rem;
          color: #555;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 10;
          font-size: 2rem;
          border-radius: 50%;
        }
        .carousel-btn.left { left: -25px; }
        .carousel-btn.right { right: -25px; }

        @media (max-width: 768px) {
          .articles-card { flex: 0 0 100%; }
          .articles-slider { transform: translateX(-${currentIndex * 100}% ) !important; }
          .articles-image { height: 200px; }
          .carousel-btn.left { left: 5px; }
          .carousel-btn.right { right: 5px; }
        }
      `}</style>
    </div>
  );
};

export default ArticlesSection;
