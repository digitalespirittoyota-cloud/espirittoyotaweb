

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// type BannerProps = {
//   desktopImg: string;
//   mobileImg: string;
//   alt?: string;
//   height?: string;      // 👈 NEW
//   link?: string;        // 👈 NEW (optional)
// };

// export default function Banner({
//   desktopImg,
//   mobileImg,
//   alt = "Banner Image",
//   height = "110vh",     // 👈 default same rakha
//   link,
// }: BannerProps) {
//   const wrapperContent = (
//     <>
//       {/* Desktop Image */}
//       <div className="hidden md:block w-full h-full">
//         <Image
//           src={desktopImg}
//           alt={alt}
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* Mobile Image */}
//       <div className="block md:hidden w-full h-full">
//         <Image
//           src={mobileImg}
//           alt={alt}
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>
//     </>
//   );

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       style={{ height }}   // 👈 height props se control
//     >
//       {link ? (
//         <Link href={link} className="block w-full h-full">
//           {wrapperContent}
//         </Link>
//       ) : (
//         <div className="block w-full h-full">
//           {wrapperContent}
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";

type BannerProps = {
  desktopImg: string;
  mobileImg: string;
  alt?: string;
  height?: string; // 👈 SAME AS BEFORE
  link?: string;
};

export default function Banner({
  desktopImg,
  mobileImg,
  alt = "Banner Image",
  height = "110vh", // 👈 Laptop default SAME
  link,
}: BannerProps) {
  const content = (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-full h-full">
        <Image
          src={desktopImg}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={mobileImg}
          alt={alt}
          fill
          priority
          className="object-contain bg-black"
        />
      </div>
    </>
  );

  return (
    <div
      className="
        relative w-full overflow-hidden
        min-h-[55vh] md:min-h-0
      "
      style={{
        height: typeof window !== "undefined" && window.innerWidth >= 768
          ? height
          : undefined,
      }}
    >
      {link ? (
        <Link href={link} className="block w-full h-full">
          {content}
        </Link>
      ) : (
        <div className="block w-full h-full">
          {content}
        </div>
      )}
    </div>
  );
}