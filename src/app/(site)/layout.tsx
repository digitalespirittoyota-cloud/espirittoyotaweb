// app/(site)/layout.tsx
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import JsonLd from "../components/seo/JsonLd";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
