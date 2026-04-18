// "use client"; // ← Add this at the very top
// import React, { useState } from 'react';

// const CarMediaPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   // Video data
//   const videos = [
//     {
//       id: 1,
//       title: "Toyota Urban Cruiser Hyryder First Drive Review: Redefining the hybrid life",
//       thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-autocar.jpg",
//       videoUrl: "https://www.youtube.com/embed/06jm5DLsUqM"
//     },
//     {
//       id: 2,
//       title: "Toyota Urban Cruiser Hyryder: First Drive Review",
//       thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-zigwheels.jpg",
//       videoUrl: "https://www.youtube.com/embed/DlPSrYTf_TY"
//     },
//     {
//       id: 3,
//       title: "Toyota Urban Cruiser Hyryder: Hybrid SUV first drive review",
//       thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-overdrive.jpg",
//       videoUrl: "https://www.youtube.com/embed/Qv94AiQI9lQ"
//     }
//   ];

//   // Article data
//   const articles = [
//     {
//       id: 1,
//       title: "Toyota Urban Cruiser Hyryder: Express Review",
//       image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-express.jpg",
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "Toyota Urban Cruiser Hyryder: Turbocharged Review",
//       image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-turbocharged.jpg",
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "Toyota Urban Cruiser Hyryder: Evo Magazine Review",
//       image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-evo.jpg",
//       link: "#"
//     }
//   ];

//   const handleVideoClick = (videoUrl: string) => {
//     setSelectedVideo(videoUrl);
//   };

//   const closeVideo = () => {
//     setSelectedVideo(null);
//   };

//   const styles = {
//     container: {
//       fontFamily: "'Arial', sans-serif",
//       maxWidth: '1600px',
//       margin: '0 auto',
//       padding: '20px',
//       backgroundColor: '#f5f5f5',
    
//     },
//     header: {
//       textAlign: 'center' as const,
//       marginBottom: '40px'
//     },
//     title: {
//       fontSize: '2.5rem',
//       color: '#333',
//       marginBottom: '10px'
//     },
//     subtitle: {
//       fontSize: '1.2rem',
//       color: '#666',
//       marginBottom: '30px'
//     },
//     tabs: {
//       display: 'flex',
//       justifyContent: 'center',
//     //   gap: '20px',
//       marginBottom: '40px'
//     },
//     tabButton: {
//       padding: '12px 150px',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       border: 'none',
//     //   borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease'
//     },
//     tabButtonActive: {
//       backgroundColor: '#000',
//       color: '#fff'
//     },
//     tabButtonInactive: {
//       backgroundColor: '#a6afb28f',
//       color: '#000'
//     },
//     contentGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
//       gap: '30px',
//       marginBottom: '50px'
//     },
//     videoCard: {
//       overflow: 'hidden',
//       transition: 'transform 0.3s ease',
//       cursor: 'pointer'
//     },
//     articleCard: {
//     //   backgroundColor: 'white',
//     //   borderRadius: '10px',
//       overflow: 'hidden',
//     //   boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//     },
//     thumbnail: {
//       width: '100%',
//       height: '200px',
//       objectFit: 'cover' as const
//     },
//     articleImage: {
//       width: '100%',
//       height: '200px',
//       objectFit: 'cover' as const
//     },
//     cardContent: {
//       padding: '20px'
//     },
//     cardTitle: {
//       fontSize: '0.9rem',
//       color: '#333',
//       marginBottom: '10px',
//     //   fontWeight: 'bold'
//     },
    
//     thumbnailContainer: {
//       position: 'relative' as const,
//       overflow: 'hidden'
//     },
//     videoModal: {
//       position: 'fixed' as const,
//       top: '0',
//       left: '0',
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgba(0,0,0,0.9)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: '1000'
//     },
//     videoContainer: {
//       width: '90%',
//       maxWidth: '900px',
//       position: 'relative' as const
//     },
//     videoIframe: {
//       width: '100%',
//       height: '500px',
//       border: 'none'
//     },
//     closeButton: {
//       position: 'absolute' as const,
//       top: '-40px',
//       right: '0',
//       backgroundColor: 'transparent',
//       border: 'none',
//       color: 'white',
//       fontSize: '1.5rem',
//       cursor: 'pointer'
//     },
//     parallelogram: {
//   clipPath: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
//   overflow: 'hidden'
// },
// tabParallelogram: {
//   clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
// },

    
   
//   };

//   return (
//     <div style={styles.container}>
      

//       <div style={styles.tabs}>
//        <button
//   style={{
//     ...styles.tabButton,
//     ...styles.tabParallelogram,
//     ...(activeTab === 'videos'
//       ? styles.tabButtonActive
//       : styles.tabButtonInactive),
//   }}
//   onClick={() => setActiveTab('videos')}
// >
//   Videos
// </button>

//         <button
//   style={{
//     ...styles.tabButton,
//     ...styles.tabParallelogram,
//     ...(activeTab === 'articles'
//       ? styles.tabButtonActive
//       : styles.tabButtonInactive),
//   }}
//   onClick={() => setActiveTab('articles')}
// >
//   Articles
// </button>

//       </div>

//       <div style={styles.contentGrid}>
//         {activeTab === 'videos' ? (
//           videos.map((video) => (
//             <div
//   key={video.id}
//   style={{ ...styles.videoCard, ...styles.parallelogram }}

//               onClick={() => handleVideoClick(video.videoUrl)}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-5px)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//             >
//               <div style={styles.thumbnailContainer}>
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   style={styles.thumbnail}
//                 />
                
//               </div>
//               <div style={styles.cardContent}>
//                 <p style={styles.cardTitle}>{video.title}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           articles.map((article) => (
//             <div
//   key={article.id}
//   style={{ ...styles.articleCard, ...styles.parallelogram }}
// >

//               <img
//                 src={article.image}
//                 alt={article.title}
//                 style={styles.articleImage}
//               />
//               <div style={styles.cardContent}>
//                 <p style={styles.cardTitle}>{article.title}</p>
                
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {selectedVideo && (
//         <div style={styles.videoModal}>
//           <div style={styles.videoContainer}>
//             <button style={styles.closeButton} onClick={closeVideo}>
//               ✕
//             </button>
//             <iframe
//               src={selectedVideo}
//               title="Video Player"
//               style={styles.videoIframe}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}

      

//       <style>
//         {`
//           @media (max-width: 768px) {
//             .title {
//               font-size: 2rem;
//             }
//             .subtitle {
//               font-size: 1rem;
//             }
//             .tabs {
//               flex-direction: column;
//               align-items: center;
//             }
//             .tabButton {
//               width: 200px;
//               margin-bottom: 10px;
//             }
//             .contentGrid {
//               grid-template-columns: 1fr;
//             }
//             .videoIframe {
//               height: 300px;
//             }
//             .dvdTitle {
//               font-size: 1.5rem;
//             }
//           }
          
//           @media (max-width: 480px) {
//             .title {
//               font-size: 1.5rem;
//             }
//             .videoIframe {
//               height: 200px;
//             }
//             .dvdButton {
//               padding: 12px 25px;
//               font-size: 1rem;
//             }
//           }
          
//           .videoCard:hover .playOverlay {
//             transform: translate(-50%, -50%) scale(1.2);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CarMediaPage;





























"use client";
import React, { useState } from 'react';

const CarMediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Video data
  const videos = [
    {
      id: 1,
      title: "Toyota Urban Cruiser Hyryder review- Creta rivaling strong hybrid | First Drive | Autocar India",
      thumbnail: "/models/urbancruiserhyryder/hyryder-autocar.webp",
      videoUrl: "https://www.youtube.com/embed/06jm5DLsUqM"
    },
    {
      id: 2,
      title: "Toyota Urban Cruiser Hyryder Hybrid Review | A Different Drive Experience",
      thumbnail: "/models/urbancruiserhyryder/hyryder-zigwheels.webp",
      videoUrl: "https://www.youtube.com/embed/DlPSrYTf_TY"
    },
    {
      id: 3,
      title: "Toyota Hyryder Hybrid review – So, what’s the catch? |OVERDRIVE",
      thumbnail: "/models/urbancruiserhyryder/hyryder-overdrive.webp",
      videoUrl: "https://www.youtube.com/embed/Qv94AiQI9lQ"
    }
  ];

  // Article data
  const articles = [
    {
      id: 1,
      title: "Toyota Urban Cruiser Hyryder First Drive Review: Redefining the hybrid life",
      image: "/models/urbancruiserhyryder/hyryder-express.webp",
      link: "#"
    },
    {
      id: 2,
      title: "Toyota Urban Cruiser Hyryder: First Drive Review",
      image: "/models/urbancruiserhyryder/hyryder-turbocharged.webp",
      link: "#"
    },
    {
      id: 3,
      title: "Toyota Urban Cruiser Hyryder: Hybrid SUV first drivereview",
      image: "/models/urbancruiserhyryder/hyryder-evo.webp",
      link: "#"
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="media-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>

        <button
          className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </div>

      <div className="content-grid">
        {activeTab === 'videos' ? (
          videos.map((video) => (
            <div
              key={video.id}
              className="card video-card"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="thumbnail-container">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
              </div>
              <div className="card-content">
                <p className="card-title">{video.title}</p>
              </div>
            </div>
          ))
        ) : (
          articles.map((article) => (
            <div
              key={article.id}
              className="card article-card"
            >
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <div className="card-content">
                <p className="card-title">{article.title}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeVideo}>
              ✕
            </button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              className="video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .media-container {
          font-family: 'Arial', sans-serif;
          max-width: 1600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
          overflow-x: hidden;
        }

        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .tab-button {
          padding: 12px 150px;
          fontSize: 1.1rem;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
          background-color: #a6afb28f;
          color: #000;
        }

        .tab-button.active {
          background-color: #000;
          color: #fff;
        }

        .tab-button:hover {
          opacity: 0.9;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .card {
          overflow: hidden;
          transition: transform 0.3s ease;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
        }

        .video-card {
          cursor: pointer;
        }

        // .video-card:hover {
        //   transform: translateY(-5px);
        // }

        .thumbnail-container {
          position: relative;
          overflow: hidden;
        }

        .thumbnail,
        .article-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .card-content {
          padding: 20px;
          
        }

        .card-title {
          font-size: 0.9rem;
          color: #333;
          margin: 0;
          line-height: 1.4;
        }

        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .video-container {
          width: 90%;
          max-width: 900px;
          position: relative;
        }

        .video-iframe {
          width: 100%;
          height: 500px;
          border: none;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 5px 10px;
        }

        .close-button:hover {
          opacity: 0.7;
        }

        /* ================= RESPONSIVE BREAKPOINTS ================= */

        /* Large Tablets (1200px - 1400px) */
        @media (max-width: 1400px) {
          .media-container {
            padding: 20px 15px;
          }

          .tab-button {
            padding: 12px 120px;
          }

          .content-grid {
            gap: 25px;
          }
        }

        /* Tablets (992px - 1199px) */
        @media (max-width: 1199px) {
          .tab-button {
            padding: 12px 100px;
            font-size: 1rem;
          }

          .content-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }

          .video-iframe {
            height: 450px;
          }
        }

        /* Small Tablets (768px - 991px) */
        @media (max-width: 991px) {
          .media-container {
            padding: 20px 12px;
          }

          .tabs {
            margin-bottom: 30px;
          }

          .tab-button {
            padding: 12px 80px;
            font-size: 1rem;
          }

          .content-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }

          .thumbnail,
          .article-image {
            height: 180px;
          }

          .card-content {
            padding: 15px;
          }

          .video-iframe {
            height: 400px;
          }
        }

        /* Mobile Landscape & Large Phones (576px - 767px) */
        @media (max-width: 767px) {
          .media-container {
            padding: 15px 10px;
          }

          .tabs {
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-bottom: 25px;
          }

          .tab-button {
            width: 100%;
            max-width: 300px;
            padding: 12px 40px;
            font-size: 0.95rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }

          .thumbnail,
          .article-image {
            height: 200px;
          }

          .card-content {
            padding: 15px;
          }

          .card-title {
            font-size: 0.85rem;
          }

          .video-container {
            width: 95%;
          }

          .video-iframe {
            height: 300px;
          }

          .close-button {
            top: -35px;
            font-size: 1.8rem;
          }
        }

        /* Mobile Portrait (320px - 575px) */
        @media (max-width: 575px) {
          .media-container {
            padding: 12px 8px;
          }

          .tabs {
            gap: 8px;
            margin-bottom: 20px;
          }

          .tab-button {
            max-width: 280px;
            padding: 10px 30px;
            font-size: 0.9rem;
          }

          .content-grid {
            gap: 15px;
            margin-bottom: 25px;
          }

          .thumbnail,
          .article-image {
            height: 180px;
          }

          .card-content {
            padding: 12px;
          }

          .card-title {
            font-size: 0.8rem;
          }

          .video-iframe {
            height: 250px;
          }

          .close-button {
            top: -30px;
            font-size: 1.5rem;
          }
        }

        /* Extra Small Mobile (< 400px) */
        @media (max-width: 400px) {
          .media-container {
            padding: 10px 5px;
          }

          .tab-button {
            max-width: 250px;
            padding: 10px 25px;
            font-size: 0.85rem;
          }

          .thumbnail,
          .article-image {
            height: 160px;
          }

          .card-content {
            padding: 10px;
          }

          .card-title {
            font-size: 0.75rem;
          }

          .video-iframe {
            height: 220px;
          }
        }

        /* Extra Extra Small Mobile (< 360px) */
        @media (max-width: 360px) {
          .tab-button {
            max-width: 220px;
            padding: 8px 20px;
            font-size: 0.8rem;
          }

          .thumbnail,
          .article-image {
            height: 140px;
          }

          .video-iframe {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarMediaPage;