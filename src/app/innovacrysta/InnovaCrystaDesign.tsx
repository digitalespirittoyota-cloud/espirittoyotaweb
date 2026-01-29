
"use client";
import React, { useState } from "react";
interface Card {
  img: string;
  title: string;
  modalContent: {
    image: string;
    description: string;
  };
}

interface Props {
  title: string;
  description: string;
  heroImage: string;
  cards: Card[];
}


export default function InnovaCrystaDesign({
  title,
  description,
  heroImage,
  cards,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const openModal = (index: number) => {
    setSelectedCard(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  // Get the two visible cards for overlapping effect
  const getVisibleCards = () => {
    const firstCardIndex = currentIndex;
    const secondCardIndex = (currentIndex + 1) % cards.length;
    
    return [
      { ...cards[firstCardIndex], index: firstCardIndex, position: "first" },
      { ...cards[secondCardIndex], index: secondCardIndex, position: "second" }
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="wrapper">
      {/* TITLE */}
      <div className="topTitle">
  <h2>{title}</h2>
</div>


      {/* DESCRIPTION AND IMAGE */}
      <div className="contentSection">
        <div className="descBox">
  <p className="descText">{description}</p>
</div>

        
        <div className="imageBox">
  <img 
    src={heroImage} 
    alt={title} 
    className="mainImage"
  />
</div>

      </div>

      {/* OVERLAPPING CARDS CAROUSEL */}
      <div className="carousel-wrapper">
        <div className="container">
          <div className="overlapping-cards-container">
            {/* Two overlapping cards */}
            <div className="cards-wrapper">
              {visibleCards.map((card, i) => (
                <div 
                  key={card.index}
                  className={`card-item ${card.position} ${i % 2 === 1 ? 'even' : ''}`}
                  style={{
                    zIndex: i === 0 ? 2 : 1,
                    transform: `translateX(${i * 50}px)`,
                    opacity: i === 0 ? 1 : 0.9
                  }}
                >
                 <div className="feature-block" onClick={() => openModal(card.index)}>
  <div className="feature-image">
    <img src={card.img} alt={card.title} />
  </div>

  <div className="feature-content">
    <span className="line"></span>
    <h3>{card.title}</h3>
  </div>
</div>

                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="carousel-nav">
              <button className="nav-arrow prev" onClick={prevSlide}>
                <i className="arrow-icon">‹</i>
              </button>
              <button className="nav-arrow next" onClick={nextSlide}>
                <i className="arrow-icon">›</i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {isModalOpen && selectedCard !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="feature-body">
                <img src={cards[selectedCard].modalContent.image} alt={cards[selectedCard].title} />
                <div className="overlay">
                  <div className="inner">
                    <h3>{cards[selectedCard].title}</h3>
                    <p>{cards[selectedCard].modalContent.description}</p>
                  </div>
                  <button 
                    type="button" 
                    className="close" 
                    onClick={closeModal}
                  >
                    <img 
                      src="https://static.toyotabharat.com/images/showroom/innova-mmc/close-white.png" 
                      alt="Close"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .wrapper {
          max-width: 1600px;
          margin: 0 auto;
          background: #fff;
          font-family: Arial, sans-serif;
          color: #000;
          overflow: hidden;
          position: relative;
        }

        *, :after, :before {
          box-sizing: border-box;
        }

        /* TITLE */
        .topTitle {
          text-align: center;
          padding: 40px 0 20px;
        }

        .topTitle h2 {
          font-size: 3rem;
          letter-spacing: 4px;
          font-weight: 500;
          text-transform: uppercase;
          margin: 0;
        }

        /* CONTENT SECTION */
        .contentSection {
          position: relative;
          margin-bottom: 0;
        }

        .descBox {
          background: rgba(255, 255, 255, 0.85);
          text-align: center;
          padding: 15px 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .descText {
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .imageBox {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .mainImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        

        /* CAROUSEL WRAPPER */
        .carousel-wrapper {
          margin-top: -150px;
          position: relative;
          padding-bottom: 15px;
          z-index: 20;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .overlapping-cards-container {
          position: relative;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cards-wrapper {
  display: flex;
  width: 1400px;
  transition: transform 0.6s ease-in-out;
  will-change: transform;
}


.card-item {
  position: relative;     /* IMPORTANT */
  width: 650px;
  height: 280px;
  display:flex;
}


        .card-item.first {
          left: 0;
        }

        .card-item.second {
          left: 50px;
        }

        .feature-block {
  display: flex;
  align-items: center;
  background: #efefef;
  height: 100%;
  cursor: pointer;
}


        

        .feature-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .feature-image {
  width: 55%;
  height: 100%;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
 .feature-content {
  width: 45%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
}

.feature-content h3 {
  margin: 15px 0 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.4;
}

.feature-content .line {
  width: 60px;
  height: 2px;
  background: #999;
}

        .feature-copy {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 20px;
          min-height: 80px;
          display: flex;
          align-items: center;
        }

        .feature-copy .inner {
          width: 100%;
        }

        .feature-copy h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.3;
        }

        /* Even card styling - lighter background */
        .feature-block.even {
          background: #f8f8f8;
        }

        /* NAVIGATION */
        .carousel-nav {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 30;
        }

        .nav-arrow {
          width: 50px;
          height: 50px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-arrow:hover {
          background: #333;
          transform: scale(1.1);
        }

        .arrow-icon {
          font-style: normal;
          font-weight: 300;
          line-height: 1;
        }

        /* MODAL STYLES */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .modal-dialog {
          max-width: 900px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
        }

        .modal-content {
          background: transparent;
          border-radius: 0;
          overflow: hidden;
          border: none;
        }

        .feature-body {
          position: relative;
        }

        .feature-body img {
          width: 100%;
          height: auto;
          display: block;
          max-height: 80vh;
          object-fit: contain;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 30px;
          min-height: 150px;
        }

        .overlay .inner h3 {
          margin: 0 0 10px 0;
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .overlay .inner p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          width: 24px;
          height: 24px;
          opacity: 1;
          z-index: 10;
        }

        .close img {
          width: 100%;
          height: 100%;
          filter: brightness(0) invert(1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* RESPONSIVE STYLES */
        @media (max-width: 1200px) {
          .cards-wrapper {
            width: 800px;
          }
          
          .card-item {
            width: 400px;
            height: 250px;
          }
        }

        @media (max-width: 1024px) {
          .topTitle h2 {
            font-size: 2.5rem;
          }
          
          .modelName {
            right: 40px;
            bottom: 30px;
          }
          
          .innova {
            font-size: 2.5rem;
          }
          
          .crysta {
            font-size: 3.2rem;
          }
          
          .carousel-wrapper {
            margin-top: -120px;
          }
          
          .cards-wrapper {
            width: 700px;
          }
          
          .card-item {
            width: 350px;
            height: 230px;
          }
          
          .card-item.second {
            left: 40px;
          }
        }

        @media (max-width: 768px) {
          .topTitle {
            padding: 30px 0 15px;
          }
          
          .topTitle h2 {
            font-size: 1.8rem;
            letter-spacing: 2px;
          }
          
          .descBox {
            position: relative;
            background: #f5f5f5;
            margin-bottom: 20px;
          }
          
          .descText {
            font-size: 0.8rem;
            padding: 0 15px;
          }
          
          .imageBox {
            height: 500px;
          }
          
          .modelName {
            position: relative;
            bottom: 0;
            right: 0;
            align-items: center;
            text-align: center;
            margin: 20px 0;
            padding: 0 20px;
          }
          
          .innova {
            font-size: 2rem;
          }
          
          .crysta {
            font-size: 2.5rem;
          }
          
          .carousel-wrapper {
            margin-top: 0;
            padding-bottom: 30px;
          }
          
          .overlapping-cards-container {
            height: auto;
            flex-direction: column;
            gap: 20px;
          }
          
          .cards-wrapper {
            width: 100%;
            height: auto;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          
          .card-item {
            position: relative !important;
            width: 300px !important;
            height: 220px;
            transform: none !important;
            left: 0 !important;
            opacity: 1 !important;
          }
          
          .feature-block {
            height: 220px;
          }
          
          .feature-copy h3 {
            font-size: 0.9rem;
          }
          
          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .topTitle h2 {
            font-size: 1.5rem;
          }
          
          .innova {
            font-size: 1.6rem;
          }
          
          .crysta {
            font-size: 2rem;
          }
          
          .imageBox {
            height: 400px;
          }
          
          .card-item {
            width: 280px !important;
            height: 200px;
          }
          
          .feature-block {
            height: 200px;
          }
          
          .feature-copy {
            padding: 15px;
          }
          
          .feature-copy h3 {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}



























