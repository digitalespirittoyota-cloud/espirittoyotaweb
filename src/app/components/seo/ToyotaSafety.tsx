import Image from "next/image";
import safetyImage from "../../../../public/home/ToyotaSafetySense.jpg";

export default function EspiritToyotaSafety() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="toyota-safety-espirit"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2
            id="toyota-safety-espirit"
            className="text-4xl font-bold mb-5 text-gray-900"
          >
            Toyota Safety Sense – Advanced Safety Features at Espirit Toyota
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Toyota Safety Sense</strong> is a globally recognized safety
            suite engineered to prevent accidents and protect every passenger.
            At <strong>Espirit Toyota Bhubaneswar</strong>, our Toyota models come
            equipped with advanced features like Pre-Collision System, Lane
            Departure Alert, Dynamic Radar Cruise Control, Vehicle Stability Control,
            Blind Spot Monitoring, and multiple airbags for enhanced protection.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            These intelligent systems continuously monitor driving conditions,
            alert drivers to potential hazards, and provide corrective assistance
            when needed. Whether navigating city roads, highways, or hilly terrain,
            Toyota Safety Sense ensures maximum confidence and peace of mind.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Experience <strong>world-class Toyota safety standards</strong> designed
            specifically for Indian roads — only at Espirit Toyota, your trusted
            Toyota dealer in Bhubaneswar.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <Image
            src={safetyImage.src}
            alt="Toyota Safety Sense Features Espirit Toyota"
            width={650}
            height={420}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
