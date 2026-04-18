// app/layout.tsx
import type { Metadata } from "next";
// import { Inter, Roboto_Mono } from "next/font/google"; // Removed Google Fonts
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toyota-espirit.in"),

  title: {
    default: "Espirit Toyota – Authorized Toyota Showroom in Bhubaneswar",
    template: "%s | Espirit Toyota",
  },

  description:
    "Espirit Toyota is an authorized Toyota showroom in Bhubaneswar, Odisha offering Toyota cars, hybrid models, service center, genuine parts, test drive, finance, and insurance support.",

  keywords: [
    "Espirit Toyota",
    "Toyota Showroom Bhubaneswar",
    "Toyota Odisha",
    "Toyota Cars Bhubaneswar",
    "Toyota Hybrid Cars",
    "Toyota Service Bhubaneswar",
    "Toyota Innova Crysta",
    "Toyota Fortuner",
    "Toyota Hyryder",
    "Toyota Rumion",
    "Toyota Glanza",
    "Toyota Car Price Bhubaneswar",
  ],

  openGraph: {
    title: "Espirit Toyota – Official Toyota Dealership in Bhubaneswar",
    description:
      "Explore Toyota Hybrid Cars, SUVs & premium services at Espirit Toyota Bhubaneswar. Book test drive, check offers & experience Toyota quality.",
    url: "https://www.toyota-espirit.in",
    siteName: "Espirit Toyota",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/seo/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Espirit Toyota Showroom Bhubaneswar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Espirit Toyota – Authorized Toyota Showroom in Bhubaneswar",
    description: "Espirit Toyota – Explore new Toyota cars, hybrid models, and premium service in Bhubaneswar, Odisha.",
    images: ["/seo/og-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://www.toyota-espirit.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
