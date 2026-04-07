// src/app/components/seo/JsonLd.tsx
interface JsonLdProps {
  type?: "AutoDealer" | "Product" | "BreadcrumbList" | "WebSite";
  data?: any;
}

export default function JsonLd({ type = "AutoDealer", data }: JsonLdProps) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Espirit Toyota",
    url: "https://www.toyota-espirit.in",
    image: "https://www.toyota-espirit.in/seo/og-banner.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "India",
    },
    brand: {
      "@type": "Brand",
      name: "Toyota",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7873045559",
      contactType: "customer support",
    },
  };

  const finalData = data ? { "@context": "https://schema.org", ...data } : defaultData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalData) }}
    />
  );
}
