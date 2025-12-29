import Image from "next/image";
import exploreToyota from "../../../../public/banner/showroom.jpg";

export default function ExploreEspiritToyota() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="explore-espirit-toyota"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div>
          <h2
            id="explore-espirit-toyota"
            className="text-4xl font-bold mb-5 text-gray-900"
          >
            Explore Espirit Toyota – Authorized Toyota Dealer in Odisha
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota is an authorized Toyota dealership offering the complete
            range of Toyota cars in Odisha. Built on Japanese engineering excellence,
            Toyota vehicles are known for long-term reliability, superior build
            quality, advanced safety features, and exceptional driving comfort
            across Indian road conditions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you are searching for a fuel-efficient city car, a spacious
            family SUV, or a modern Toyota hybrid delivering outstanding mileage,
            Espirit Toyota helps you choose the perfect model that matches your
            lifestyle, budget, and performance expectations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Visit Espirit Toyota showrooms to explore the latest Toyota models,
            compare variants, book a test drive, and experience transparent pricing,
            expert consultation, and trusted after-sales service. Begin your Toyota
            ownership journey with confidence, reliability, and customer-first
            support.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={exploreToyota}
            alt="Espirit Toyota showroom in Odisha displaying latest Toyota cars"
            width={650}
            height={420}
            className="rounded-2xl shadow-lg w-full object-cover"
            priority={false}
          />
        </div>

      </div>
    </section>
  );
}
