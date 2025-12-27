import Image from "next/image";
import buyingGuideImage from "../../../../public/home/carbuyingguide.jpg";
export default function BuyingGuide() {
  return (
    <section className="py-16 bg-gray-50 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* RIGHT SIDE IMAGE */}
        <div className="w-full">
          <Image
            src={buyingGuideImage}
            alt="Toyota car buying guide Espirit Toyota"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Toyota Car Buying Guide – Espirit Toyota
          </h2>

          <p className="text-lg text-gray-700">
            Choosing the right Toyota is easy with our expert guidance.
            Whether you want fuel efficiency, strong off-road performance,
            family comfort, or hybrid technology—Espirit Toyota helps you
            make the right choice.
          </p>

          <ul className="mt-6 space-y-2 text-lg text-gray-700">
            <li>✔ Decide your budget and usage</li>
            <li>✔ Compare features and variants</li>
            <li>✔ Choose between Petrol, Diesel, or Hybrid</li>
            <li>✔ Explore financing and EMI plans</li>
            <li>✔ Take a free test drive at Espirit Toyota</li>
          </ul>
        </div>



      </div>
    </section>
  );
}
