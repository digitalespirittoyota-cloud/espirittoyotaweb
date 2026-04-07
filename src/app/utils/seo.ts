// src/app/utils/seo.ts
import { Metadata } from 'next';

export const SITE_NAME = "Espirit Toyota";
export const BASE_URL = "https://www.toyota-espirit.in";
export const DEFAULT_KEYWORDS = [
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
];

export const getBaseMetadata = (title: string, description: string, path: string, keywords?: string[], ogImage?: string): Metadata => {
  const url = `${BASE_URL}${path}`;
  const image = ogImage || "/seo/og-banner.jpg";

  return {
    title,
    description,
    keywords: keywords || DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
};
