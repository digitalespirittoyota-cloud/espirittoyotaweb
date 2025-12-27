import Image from "next/image";
import exploreToyota from "../../../../public/banner/showroom.jpg";

export default function ExploreEspiritToyota() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Explore Espirit Toyota – Reliability, Innovation & Trust
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota brings you the complete lineup of Toyota vehicles—
            engineered with global Japanese reliability, strong build quality,
            and advanced driving comfort. Each Toyota is crafted to meet Indian
            roads, Indian weather, and Indian families, making it one of the
            most trusted automotive brands in the world.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're looking for a compact urban-friendly hatchback,
            a family SUV with strong road presence, or a premium hybrid
            engineered for exceptional mileage, Espirit Toyota has a model that
            matches your lifestyle. Explore the legendary Toyota reliability,
            world-class interiors, superior mileage, and low-maintenance
            ownership experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Visit Espirit Toyota today to discover offerings, compare models,
            experience live demos, and enjoy a seamless consultation from our
            experts. Your Toyota journey starts here — with trust, transparency,
            and unmatched service.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={exploreToyota}
            alt="Explore Espirit Toyota Showroom"
            width={650}
            height={420}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
