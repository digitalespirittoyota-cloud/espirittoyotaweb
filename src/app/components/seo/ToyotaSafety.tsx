import Image from "next/image";
import safetyImage from "../../../../public/home/ToyotaSafetySense.jpg";
export default function EspiritToyotaSafety() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Toyota Safety Sense – Advanced Protection for Every Drive
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Toyota Safety Sense is a globally acclaimed safety package designed
            to prevent accidents, enhance control, and protect passengers.
            Espirit Toyota offers multiple Toyota models equipped with cutting-edge
            features like Pre-Collision System, Lane Departure Alert, Dynamic
            Radar Cruise Control, Vehicle Stability Control, and multiple airbags.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            These systems continuously monitor road conditions, provide corrective
            support, and ensure maximum driver confidence. Whether you're on city
            streets, highways, or hilly terrains, Toyota keeps you and your
            family safe every moment.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Experience globally trusted safety standards curated specially for
            Indian roads — only at Espirit Toyota.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={safetyImage.src}
            alt="Toyota Safety Features"
            width={650}
            height={420}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
