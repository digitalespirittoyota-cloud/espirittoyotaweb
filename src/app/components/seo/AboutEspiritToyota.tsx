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
            alt="About Espirit Toyota Showroom"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About Espirit Toyota – Your Trusted Toyota Dealership
          </h2>

          <p className="text-lg text-gray-700">
            Espirit Toyota is one of the leading Toyota dealerships committed
            to offering exceptional customer service, premium buying experience,
            and transparent pricing. With a strong focus on trust and reliability,
            we bring the global Toyota excellence to your city.
          </p>

          <p className="mt-4 text-lg text-gray-700">
            Our team ensures that every customer enjoys a smooth journey from
            model selection to financing, delivery, and after-sales support.
            We believe in building long-term relationships based on trust,
            quality, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
