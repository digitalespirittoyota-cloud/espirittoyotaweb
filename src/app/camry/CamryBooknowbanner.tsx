"use client";
import React from "react";

export default function CamryBookNowBanner() {
  const handleBookNow = () => {
    window.open("https://www.toyotabharat.com/online-booking/?model-id=19", "_blank");
  };

  return (
    <section className="camry-banner">
      <div className="banner-wrapper">
        {/* Background Image */}
        <div className="banner-bg">
          <img
            src="/models/camry/lastbanner.webp"
            alt="Toyota Camry"
            className="bg-image"
          />
          <div className="overlay"></div>
        </div>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          BOOK NOW
        </button>

        {/* Side Action Buttons */}
        <div className="side-actions">
          <button className="action-btn" aria-label="Find Dealer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Test Drive">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Price">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Compare">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Brochure">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn expand-btn" aria-label="Expand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Bottom Right Floating Buttons */}
        <div className="floating-actions">
          <button className="floating-btn enquire-btn" aria-label="Enquire">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="floating-btn scroll-top-btn" aria-label="Scroll to top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .camry-banner {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          background: #1a1a1a;
        }

        .banner-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .banner-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
           overflow: hidden; 
          
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
         object-position: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }

        /* Book Now Button */
        .book-now-btn {
          position: absolute;
          left: 8%;
          bottom: 15%;
          background: transparent;
          color: #fff;
          border: 1px solid #fff;
          padding: 10px 20px;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 10;
          text-transform: uppercase;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .book-now-btn:hover {
          background: #ce1414;
          text-decoration: underline;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(255, 255, 255, 0.3);
        }

        .book-now-btn:active {
          transform: translateY(-1px);
        }

        /* Side Action Buttons */
        .side-actions {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }

        .action-btn {
          width: 52px;
          height: 52px;
          background: #000;
          border: 2px solid #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
        }

        .action-btn:hover {
          background: #fff;
          color: #000;
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .action-btn svg {
          width: 24px;
          height: 24px;
        }

        .expand-btn {
          border: none;
          background: rgba(0, 0, 0, 0.7);
        }

        /* Floating Action Buttons (Bottom Right) */
        .floating-actions {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }

        .floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .enquire-btn {
          background: #e30613;
          color: #fff;
          animation: pulse-red 2s infinite;
        }

        @keyframes pulse-red {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(227, 6, 19, 0.4);
          }
          50% {
            box-shadow: 0 4px 25px rgba(227, 6, 19, 0.7);
          }
        }

        .enquire-btn:hover {
          background: #c20510;
          transform: scale(1.1);
        }

        .scroll-top-btn {
          background: #e30613;
          color: #fff;
        }

        .scroll-top-btn:hover {
          background: #c20510;
          transform: scale(1.1);
        }

        .floating-btn svg {
          width: 28px;
          height: 28px;
        }

        /* LARGE DESKTOP (1920px+) */
        @media (min-width: 1920px) {
          .camry-banner {
            height: 600px;
          }

          .book-now-btn {
            padding: 18px 60px;
            font-size: 22px;
          }
        }

        /* DESKTOP (1440px - 1919px) */
        @media (max-width: 1919px) {
          .camry-banner {
            height: 550px;
          }
        }

        /* LAPTOP (1200px - 1439px) */
        @media (max-width: 1439px) {
          .camry-banner {
            height: 500px;
          }

          .book-now-btn {
            padding: 15px 48px;
            font-size: 19px;
            letter-spacing: 2.5px;
          }

          .action-btn {
            width: 48px;
            height: 48px;
          }

          .action-btn svg {
            width: 22px;
            height: 22px;
          }

          .floating-btn {
            width: 52px;
            height: 52px;
          }

          .floating-btn svg {
            width: 26px;
            height: 26px;
          }
        }

        /* TABLET LANDSCAPE (1024px - 1199px) */
        @media (max-width: 1199px) {
          .camry-banner {
            height: 450px;
          }

          .book-now-btn {
            left: 6%;
            padding: 14px 45px;
            font-size: 18px;
            letter-spacing: 2px;
          }

          .action-btn {
            width: 46px;
            height: 46px;
          }

          .action-btn svg {
            width: 20px;
            height: 20px;
          }

          .floating-btn {
            width: 50px;
            height: 50px;
          }

          .floating-btn svg {
            width: 24px;
            height: 24px;
          }
        }

        /* TABLET PORTRAIT (768px - 1023px) */
        @media (max-width: 1023px) {
          .camry-banner {
            height: 400px;
          }

          .book-now-btn {
            left: 5%;
            bottom: 12%;
            padding: 13px 40px;
            font-size: 17px;
            letter-spacing: 1.8px;
          }

          .side-actions {
            right: 12px;
            gap: 10px;
          }

          .action-btn {
            width: 44px;
            height: 44px;
          }

          .action-btn svg {
            width: 18px;
            height: 18px;
          }

          .floating-actions {
            bottom: 15px;
            right: 15px;
            gap: 10px;
          }

          .floating-btn {
            width: 48px;
            height: 48px;
          }

          .floating-btn svg {
            width: 22px;
            height: 22px;
          }
        }

        /* MOBILE LANDSCAPE (640px - 767px) */
        @media (max-width: 767px) {
          .camry-banner {
            height: 350px;
          }

          .book-now-btn {
            left: 4%;
            bottom: 10%;
            padding: 12px 35px;
            font-size: 16px;
            letter-spacing: 1.5px;
          }

          .side-actions {
            right: 10px;
            gap: 8px;
          }

          .action-btn {
            width: 42px;
            height: 42px;
            border-radius: 6px;
          }

          .action-btn svg {
            width: 16px;
            height: 16px;
          }

          .floating-actions {
            bottom: 12px;
            right: 12px;
          }

          .floating-btn {
            width: 46px;
            height: 46px;
          }

          .floating-btn svg {
            width: 20px;
            height: 20px;
          }
        }

        /* MOBILE PORTRAIT (480px - 639px) */
        @media (max-width: 639px) {
          .camry-banner {
            height: 320px;
          }

          .book-now-btn {
            left: 4%;
            bottom: 8%;
            padding: 11px 32px;
            font-size: 15px;
            letter-spacing: 1.2px;
            border-width: 1.5px;
          }

          .side-actions {
            right: 8px;
            gap: 7px;
          }

          .action-btn {
            width: 40px;
            height: 40px;
          }

          .action-btn svg {
            width: 15px;
            height: 15px;
          }

          .floating-actions {
            bottom: 10px;
            right: 10px;
            gap: 8px;
          }

          .floating-btn {
            width: 44px;
            height: 44px;
          }

          .floating-btn svg {
            width: 19px;
            height: 19px;
          }
        }

        /* SMALL MOBILE (375px - 479px) */
        @media (max-width: 479px) {
          .camry-banner {
            height: 280px;
          }

          .book-now-btn {
            left: 3%;
            bottom: 6%;
            padding: 10px 28px;
            font-size: 14px;
            letter-spacing: 1px;
          }

          .side-actions {
            right: 6px;
            gap: 6px;
          }

          .action-btn {
            width: 36px;
            height: 36px;
            border-width: 1px;
          }

          .action-btn svg {
            width: 14px;
            height: 14px;
          }

          .floating-actions {
            bottom: 8px;
            right: 8px;
            gap: 6px;
          }

          .floating-btn {
            width: 40px;
            height: 40px;
          }

          .floating-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        /* EXTRA SMALL MOBILE (up to 374px) */
        @media (max-width: 374px) {
          .camry-banner {
            height: 250px;
          }

          .book-now-btn {
            left: 3%;
            bottom: 5%;
            padding: 9px 24px;
            font-size: 13px;
            letter-spacing: 0.8px;
          }

          .side-actions {
            right: 5px;
            gap: 5px;
          }

          .action-btn {
            width: 32px;
            height: 32px;
          }

          .action-btn svg {
            width: 13px;
            height: 13px;
          }

          .floating-actions {
            bottom: 6px;
            right: 6px;
            gap: 5px;
          }

          .floating-btn {
            width: 36px;
            height: 36px;
          }

          .floating-btn svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
}
