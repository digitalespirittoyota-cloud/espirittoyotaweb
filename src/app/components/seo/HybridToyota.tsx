import Image from "next/image";
import hybridImage from "../../../../public/home/toyotahybridtechnology.jpg";
export default function HybridEspiritToyota() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Toyota Hybrid – Futuristic, Efficient & Environment Friendly
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Toyota’s Self-Charging Hybrid Electric Vehicles combine a petrol
            engine with an electric motor to deliver exceptional fuel efficiency,
            smoother drives, lower emissions, and long-term savings. They do not
            require external charging, making them easy to own, practical, and
            perfect for Indian driving conditions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota offers the latest Toyota Hybrid models that give you
            outstanding mileage, powerful acceleration, silent operation, and a
            premium driving feel. With fewer moving parts than traditional
            engines, Toyota Hybrids also ensure lower maintenance and longer
            durability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Experience the perfect blend of performance and sustainability with
            Toyota Hybrid technology — designed to reduce running costs while
            helping you contribute to a greener future.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={hybridImage}
            alt="Toyota Hybrid Technology"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
