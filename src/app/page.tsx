// app/page.tsx

import Banner from "./components/Banner";
import Enquiry from "./components/Enquiry";
import Range from "./components/Range";

import ExploreToyota from "./components/seo/ExploreToyota";
import WhyToyota from "./components/seo/WhyToyota";
import HybridToyota from "./components/seo/HybridToyota";
import ToyotaService from "./components/seo/ToyotaService";

import ToyotaSafety from "./components/seo/ToyotaSafety";
import BuyingGuide from "./components/seo/BuyingGuide";
import ShowroomExperience from "./components/seo/ShowroomExperience";
import Faq from "./components/seo/Faq";
import AboutEspiritToyota from "./components/seo/AboutEspiritToyota";
import EspiritToyotaLocations from "./components/seo/EspiritToyotaLocations";
import EspiritToyotaAwards from "./components/seo/EspiritToyotaAwards";

export const metadata = {
  title:
    "Toyota Cars, Hybrid Technology, Service & Showroom – Espirit Toyota Bhubaneswar",
  description:
    "Visit Espirit Toyota Bhubaneswar for Toyota cars, hybrid models, service center, test drive booking, offers, finance & insurance support.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Range />

      <ExploreToyota />
      <WhyToyota />
      <HybridToyota />
      <ToyotaService />

      <ToyotaSafety />
      <BuyingGuide />
      <ShowroomExperience />

      <AboutEspiritToyota />
      <EspiritToyotaLocations />
      <EspiritToyotaAwards />
      <Faq />

      <Enquiry id="enquiry" />
    </main>
  );
}
