import Image from "next/image";
import aboutImage from "../../../../public/home/aboutus.jpg";

export default function AboutEspiritToyota() {
  return (
    <section className="py-16 bg-white px-4 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <Image
            src={aboutImage}
            alt="Espirit Toyota Bhubaneswar Authorized Toyota Showroom"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About Espirit Toyota – Authorized Toyota Dealer in Bhubaneswar
          </h2>

          <p className="text-lg text-gray-700">
            Espirit Toyota is an authorized Toyota showroom in Bhubaneswar,
            dedicated to delivering a premium car buying experience backed by
            Toyota’s global standards of quality, safety, and reliability.
            We offer the complete range of Toyota cars with transparent pricing
            and professional guidance.
          </p>

          <p className="mt-4 text-lg text-gray-700">
            From choosing the right Toyota model to financing, insurance,
            test drive booking, and after-sales service support, our experienced
            team ensures a seamless and trustworthy ownership journey.
            At Espirit Toyota, customer satisfaction and long-term relationships
            are at the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
