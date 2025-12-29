import Image from "next/image";
import buyingGuideImage from "../../../../public/home/carbuyingguide.jpg";

export default function BuyingGuide() {
  return (
    <section
      className="py-16 bg-gray-50 px-4 text-gray-800"
      aria-labelledby="toyota-buying-guide"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="w-full">
          <Image
            src={buyingGuideImage}
            alt="Toyota car buying guide in India at Espirit Toyota dealership"
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2
            id="toyota-buying-guide"
            className="text-3xl font-bold mb-4"
          >
            Toyota Car Buying Guide in India | Choose the Right Toyota – Espirit Toyota
          </h2>

          <p className="text-lg text-gray-700">
            Buying a new Toyota car in India becomes simple with Espirit Toyota’s
            expert car buying guide. Whether you are searching for a fuel-efficient
            Toyota, a powerful SUV, a spacious family car, or advanced hybrid
            technology, our authorized Toyota dealership helps you compare
            models, variants, and prices to make the right decision.
          </p>

          <ul className="mt-6 space-y-2 text-lg text-gray-700">
            <li>✔ Decide your Toyota car budget and daily usage</li>
            <li>✔ Compare Toyota models, features, and variants</li>
            <li>✔ Choose between Petrol, Diesel, or Hybrid Toyota cars</li>
            <li>✔ Explore Toyota finance options, EMI plans, and offers</li>
            <li>✔ Book a free Toyota test drive at Espirit Toyota showroom</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
