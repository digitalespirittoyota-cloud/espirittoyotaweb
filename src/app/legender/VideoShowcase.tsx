// "use client";

// import { useRef, useState } from "react";

// type VideoCard = {
//   title: string;
//   videoId: string;
// };

// const videos: VideoCard[] = [
//   {
//     title: "Powerful Legacy",
//     videoId: "oa1bbDQ6LZU",
//   },
//   {
//     title: "Behind the Design",
//     videoId: "6_imsLY1CEI",
//   },
// ];

// export default function VideoShowcase() {
//   const topRef = useRef<HTMLDivElement>(null);
//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);
//   const [play, setPlay] = useState(false);

//   const handleCardClick = (video: VideoCard) => {
//     setSelectedVideo(video);
//     setPlay(false);
//     topRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="w-full h-[170vh] bg-[#2c2c2c]">
//       {/* ================= TOP VIDEO IMAGE ================= */}
//       <div
//         ref={topRef}
//         className="w-full h-[120vh] flex items-center justify-center"
//       >
//         {!play ? (
//           <div
//             onClick={() => setPlay(true)}
//             className="relative w-full h-full cursor-pointer"
//           >
//             {/* FULL IMAGE VIDEO LOOK */}
//             <img
//               src={`https://img.youtube.com/vi/${selectedVideo.videoId}/maxresdefault.jpg`}
//               alt={selectedVideo.title}
//               className="w-full h-full object-cover"
//             />

//             {/* PLAY ICON */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-24 h-24 bg-black/70 rounded-full flex items-center justify-center text-white text-4xl">
//                 ▶
//               </div>
//             </div>
//           </div>
//         ) : (
//           <iframe
//             key={selectedVideo.videoId}
//             src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
//             className="w-full h-full"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           />
//         )}
//       </div>

//       {/* ================= BOTTOM CARDS ================= */}
//       <div className="w-full h-[50vh] flex items-center justify-center px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
//           {videos.map((video) => (
//             <div
//               key={video.videoId}
//               onClick={() => handleCardClick(video)}
//               className="cursor-pointer"
//             >
//               {/* HEADING */}
//               <h2 className="text-white text-3xl font-semibold mb-6">
//                 {video.title}
//               </h2>

//               {/* IMAGE CARD */}
//               <div className="relative overflow-hidden rounded-lg group">
//                 <img
//                   src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
//                   alt={video.title}
//                   className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />

//                 {/* PLAY ICON */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center text-white text-2xl">
//                     ▶
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useRef, useState } from "react";

type VideoCard = {
  title: string;
  videoId: string;
};

const videos: VideoCard[] = [
  {
    title: "Powerful Legacy",
    videoId: "oa1bbDQ6LZU",
  },
  {
    title: "Behind the Design",
    videoId: "6_imsLY1CEI",
  },
];

export default function VideoShowcase() {
  const topRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [play, setPlay] = useState(false);

  const handleCardClick = (video: VideoCard) => {
    setSelectedVideo(video);
    setPlay(false);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#2c2c2c]">
      {/* ================= TOP VIDEO IMAGE ================= */}
      <div
        ref={topRef}
        className="w-full
          h-[60vh] sm:h-[80vh] lg:h-[120vh]
          flex items-center justify-center"
      >
        {!play ? (
          <div
            onClick={() => setPlay(true)}
            className="relative w-full h-full cursor-pointer"
          >
            <img
              src={`https://img.youtube.com/vi/${selectedVideo.videoId}/maxresdefault.jpg`}
              alt={selectedVideo.title}
              className="w-full h-full object-cover"
            />

            {/* PLAY ICON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                bg-black/70 rounded-full flex items-center justify-center
                text-white text-2xl sm:text-3xl lg:text-4xl">
                ▶
              </div>
            </div>
          </div>
        ) : (
          <iframe
            key={selectedVideo.videoId}
            src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* ================= BOTTOM CARDS ================= */}
      <div className="w-full py-12 sm:py-16 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {videos.map((video) => (
            <div
              key={video.videoId}
              onClick={() => handleCardClick(video)}
              className="cursor-pointer"
            >
              {/* HEADING */}
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
                {video.title}
              </h2>

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-[200px] sm:h-[240px] md:h-[260px]
                    object-cover transition-transform duration-500
                    group-hover:scale-105"
                />

                {/* PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16
                    bg-black/70 rounded-full flex items-center justify-center
                    text-white text-xl sm:text-2xl">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
