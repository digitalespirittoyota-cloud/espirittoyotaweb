export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
