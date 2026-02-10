"use client"; // ← Add this at the very top
import React, { useState } from 'react';

const CarMediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Video data
  const videos = [
    {
      id: 1,
      title: "Toyota Urban Cruiser Hyryder First Drive Review: Redefining the hybrid life",
      thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-autocar.jpg",
      videoUrl: "https://www.youtube.com/embed/06jm5DLsUqM"
    },
    {
      id: 2,
      title: "Toyota Urban Cruiser Hyryder: First Drive Review",
      thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-zigwheels.jpg",
      videoUrl: "https://www.youtube.com/embed/DlPSrYTf_TY"
    },
    {
      id: 3,
      title: "Toyota Urban Cruiser Hyryder: Hybrid SUV first drive review",
      thumbnail: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-overdrive.jpg",
      videoUrl: "https://www.youtube.com/embed/Qv94AiQI9lQ"
    }
  ];

  // Article data
  const articles = [
    {
      id: 1,
      title: "Toyota Urban Cruiser Hyryder: Express Review",
      image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-express.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Toyota Urban Cruiser Hyryder: Turbocharged Review",
      image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-turbocharged.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Toyota Urban Cruiser Hyryder: Evo Magazine Review",
      image: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/hyryder-evo.jpg",
      link: "#"
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      maxWidth: '1600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '40px'
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '30px'
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
    //   gap: '20px',
      marginBottom: '40px'
    },
    tabButton: {
      padding: '12px 150px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      border: 'none',
    //   borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    tabButtonActive: {
      backgroundColor: '#000',
      color: '#fff'
    },
    tabButtonInactive: {
      backgroundColor: '#a6afb28f',
      color: '#000'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '50px'
    },
    videoCard: {
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    articleCard: {
    //   backgroundColor: 'white',
    //   borderRadius: '10px',
      overflow: 'hidden',
    //   boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    thumbnail: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as const
    },
    articleImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as const
    },
    cardContent: {
      padding: '20px'
    },
    cardTitle: {
      fontSize: '0.9rem',
      color: '#333',
      marginBottom: '10px',
    //   fontWeight: 'bold'
    },
    
    thumbnailContainer: {
      position: 'relative' as const,
      overflow: 'hidden'
    },
    videoModal: {
      position: 'fixed' as const,
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000'
    },
    videoContainer: {
      width: '90%',
      maxWidth: '900px',
      position: 'relative' as const
    },
    videoIframe: {
      width: '100%',
      height: '500px',
      border: 'none'
    },
    closeButton: {
      position: 'absolute' as const,
      top: '-40px',
      right: '0',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer'
    },
    parallelogram: {
  clipPath: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
  overflow: 'hidden'
},
tabParallelogram: {
  clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
},

    
   
  };

  return (
    <div style={styles.container}>
      

      <div style={styles.tabs}>
       <button
  style={{
    ...styles.tabButton,
    ...styles.tabParallelogram,
    ...(activeTab === 'videos'
      ? styles.tabButtonActive
      : styles.tabButtonInactive),
  }}
  onClick={() => setActiveTab('videos')}
>
  Videos
</button>

        <button
  style={{
    ...styles.tabButton,
    ...styles.tabParallelogram,
    ...(activeTab === 'articles'
      ? styles.tabButtonActive
      : styles.tabButtonInactive),
  }}
  onClick={() => setActiveTab('articles')}
>
  Articles
</button>

      </div>

      <div style={styles.contentGrid}>
        {activeTab === 'videos' ? (
          videos.map((video) => (
            <div
  key={video.id}
  style={{ ...styles.videoCard, ...styles.parallelogram }}

              onClick={() => handleVideoClick(video.videoUrl)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={styles.thumbnailContainer}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={styles.thumbnail}
                />
                
              </div>
              <div style={styles.cardContent}>
                <p style={styles.cardTitle}>{video.title}</p>
              </div>
            </div>
          ))
        ) : (
          articles.map((article) => (
            <div
  key={article.id}
  style={{ ...styles.articleCard, ...styles.parallelogram }}
>

              <img
                src={article.image}
                alt={article.title}
                style={styles.articleImage}
              />
              <div style={styles.cardContent}>
                <p style={styles.cardTitle}>{article.title}</p>
                
              </div>
            </div>
          ))
        )}
      </div>

      {selectedVideo && (
        <div style={styles.videoModal}>
          <div style={styles.videoContainer}>
            <button style={styles.closeButton} onClick={closeVideo}>
              ✕
            </button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              style={styles.videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      

      <style>
        {`
          @media (max-width: 768px) {
            .title {
              font-size: 2rem;
            }
            .subtitle {
              font-size: 1rem;
            }
            .tabs {
              flex-direction: column;
              align-items: center;
            }
            .tabButton {
              width: 200px;
              margin-bottom: 10px;
            }
            .contentGrid {
              grid-template-columns: 1fr;
            }
            .videoIframe {
              height: 300px;
            }
            .dvdTitle {
              font-size: 1.5rem;
            }
          }
          
          @media (max-width: 480px) {
            .title {
              font-size: 1.5rem;
            }
            .videoIframe {
              height: 200px;
            }
            .dvdButton {
              padding: 12px 25px;
              font-size: 1rem;
            }
          }
          
          .videoCard:hover .playOverlay {
            transform: translate(-50%, -50%) scale(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default CarMediaPage;