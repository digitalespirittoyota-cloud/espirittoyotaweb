import Image from "next/image";
import hybridImage from "../../../../public/home/toyotahybridtechnology.jpg";

export default function HybridEspiritToyota() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="toyota-hybrid-technology"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">

        {/* TEXT CONTENT */}
        <div>
          <h2
            id="toyota-hybrid-technology"
            className="text-4xl font-bold mb-6 text-gray-900"
          >
            Toyota Hybrid Technology – Smart, Efficient & Eco-Friendly
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Toyota’s <strong>Self-Charging Hybrid Electric Vehicles (HEV)</strong>
            combine a petrol engine with an electric motor to deliver superior
            fuel efficiency, smoother acceleration, and reduced emissions.
            These hybrids do not require external charging, making them ideal
            for Indian roads and daily driving conditions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong>Espirit Toyota</strong>, you can explore the latest Toyota
            Hybrid models that offer excellent mileage, quiet cabin experience,
            powerful performance, and a premium driving feel. With fewer moving
            parts than conventional engines, Toyota hybrids ensure lower
            maintenance costs and long-term reliability.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Choose Toyota Hybrid technology to enjoy reduced fuel expenses,
            enhanced driving comfort, and a cleaner environment. Experience the
            future of mobility today with Espirit Toyota — where innovation
            meets sustainability.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={hybridImage}
            alt="Toyota Self Charging Hybrid Technology at Espirit Toyota"
            className="rounded-2xl shadow-lg w-full object-cover"
            priority={false}
          />
        </div>

      </div>
    </section>
  );
}
