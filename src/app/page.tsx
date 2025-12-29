// app/page.tsx
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title:
    'Toyota Cars in Bhubaneswar | Hybrid Models, Service & Test Drive – Espirit Toyota',
  description:
    'Espirit Toyota Bhubaneswar is an authorized Toyota dealer offering new cars, hybrid technology, test drive booking, service center, finance and insurance support.',
  keywords: [
    'toyota cars',
    'toyota cars in bhubaneswar',
    'toyota showroom bhubaneswar',
    'authorized toyota dealer',
    'espirit toyota',
    'toyota hybrid cars',
    'toyota test drive booking',
    'toyota service center',
    'toyota car price bhubaneswar',
  ],
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

      {/* SEO-only content (no UI impact) */}
      <section className="sr-only">
        <h2>Espirit Toyota Bhubaneswar – Authorized Toyota Dealer</h2>
        <p>
          Espirit Toyota Bhubaneswar is an authorized Toyota showroom offering the
          latest Toyota cars, hybrid models, test drive booking, and certified
          service center support. Visit our showroom to explore Toyota safety,
          performance, and hybrid technology with expert assistance.
        </p>
      </section>
    </main>
  );
}
