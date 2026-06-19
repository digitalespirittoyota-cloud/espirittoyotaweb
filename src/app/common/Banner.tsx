
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// type BannerProps = {
//   desktopImg: string;
//   mobileImg: string;
//   alt?: string;
//   height?: string;
//   link?: string;
// };

// export default function Banner({
//   desktopImg,
//   mobileImg,
//   alt = "Banner Image",
//   height = "110vh", // 👈 Laptop default SAME
//   link,
// }: BannerProps) {
//   const content = (
//     <>
//       {/* Desktop */}
//       <div className="hidden md:block w-full h-full">
//         {desktopImg ? (
//           <Image
//             src={desktopImg}
//             alt={alt}
//             fill
//             priority
//             className="object-cover"
//           />
//         ) : null}
//       </div>

//       {/* Mobile */}
//       <div className="block md:hidden w-full h-full">
//         <Image
//           src={mobileImg || desktopImg}
//           alt={alt}
//           fill
//           priority
//           className={`object-cover ${!mobileImg ? 'object-center' : ''}`}
//         />
//       </div>
//     </>
//   );

//   return (
//     <div
//       className="
//         relative w-full overflow-hidden
//         min-h-[55vh] md:min-h-0
//         md:h-[var(--banner-height)]
//       "
//       style={
//         {
//           "--banner-height": height,
//         } as React.CSSProperties
//       }
//     >
//       {link ? (
//         <Link href={link} className="block w-full h-full">
//           {content}
//         </Link>
//       ) : (
//         <div className="block w-full h-full">
//           {content}
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
  height?: string;
  link?: string;
};

export default function Banner({
  desktopImg,
  mobileImg,
  alt = "Banner Image",
  height = "92vh",
  link,
}: BannerProps) {
  const content = (
    <>
      {/* ── Desktop (md+) ── */}
      <div className="hidden md:block w-full h-full">
        {desktopImg && (
          <Image
            src={desktopImg}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
          />
        )}
      </div>

      {/* ── Mobile ── */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={mobileImg || desktopImg}
          alt={alt}
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </>
  );

  return (
    <>
      {/* ── Mobile wrapper: 16/9 aspect ratio ── */}
      <div className="block md:hidden w-full relative overflow-hidden aspect-[16/9]">
        {link ? (
          <Link href={link} className="block w-full h-full absolute inset-0">
            {content}
          </Link>
        ) : (
          <div className="absolute inset-0">{content}</div>
        )}
      </div>

      {/* ── Desktop wrapper: height-based ── */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        style={
          {
            height,
            "--banner-height": height,
          } as React.CSSProperties
        }
      >
        {link ? (
          <Link href={link} className="block w-full h-full">
            {content}
          </Link>
        ) : (
          <div className="block w-full h-full">{content}</div>
        )}
      </div>
    </>
  );
}