import Image from "next/image";
import serviceImage from "../../../../public/home/ToyotaService.jpg";
export default function EspiritToyotaService() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={serviceImage}
            alt="Toyota Service Center Espirit Toyota"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Toyota Service – Professional Care for Your Toyota
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Espirit Toyota’s service center is equipped with modern diagnostic
            tools, express service bays, and Toyota-certified technicians who
            ensure your car receives the most accurate and efficient care. We
            follow Toyota’s global maintenance standards to enhance performance,
            safety, and long-term durability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Every service includes a transparent estimate, detailed status
            updates, genuine Toyota parts, and quality checks at multiple levels.
            Whether it’s routine service, accidental repair, wheel alignment, or
            major mechanical work — your Toyota is always in expert hands.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With quick turnaround, friendly staff, and digital service records,
            Espirit Toyota ensures a smooth ownership experience with total peace
            of mind.
          </p>
        </div>

      </div>
    </section>
  );
}
